from fastapi import APIRouter,Depends,HTTPException
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from schemas.user_schema import UserCreateSchema,UserResponseSchema
from utils.authentication import *
from database.database import get_session
from sqlmodel import Session
from database import models
from starlette import status
from schemas.auth_schema import LoginSchema,Token
from typing import Annotated


router=APIRouter(
    prefix='/auth'
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@router.post('/sign-up',response_model=UserResponseSchema)
def SignUp(user:UserCreateSchema,session:Session=Depends(get_session)):
    # check if email exists
    if check_user_exists(user.email) !=None:
         raise HTTPException(status.HTTP_403_FORBIDDEN,detail={
              "error":"user already exists"
         })
        
    user_object=models.User(
        email=user.email,
        username=user.username,
        password_hash=hash_password(user.password)
    )
    session.add(user_object)
    session.commit()
    session.refresh(user_object)
    return UserResponseSchema(email=user.email,username=user.username)


@router.post('/login')
def LoginUser(user:Annotated[OAuth2PasswordRequestForm,Depends()],session:Session=Depends(get_session)):
    user=authenticate_user(user.username,user.password)
    if user ==None:
        raise HTTPException(status.HTTP_403_FORBIDDEN,detail={
              "error":"user does not exist"
         })
    if  user==False:
        raise HTTPException(status.HTTP_403_FORBIDDEN,detail={
              "error":"invalid password"
         })
    token=create_access_token(user,timedelta(minutes=5))
    
    return {
        "token":token,
        "type":"bearer"
    }

@router.get('/current-user',response_model=UserResponseSchema)
def LoggedInUser(user:UserResponseSchema=Depends(get_current_user)):
    return user