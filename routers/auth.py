from fastapi import APIRouter,Depends,HTTPException,Response,Request
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


@router.post('/sign-up')
def SignUp(user:UserCreateSchema,session:Session=Depends(get_session)):
    # check if email exists
    if check_user_exists(user.email) !=None:
         raise HTTPException(status.HTTP_403_FORBIDDEN,detail={
              "error":"user already exists"
         })
        
    user_object=models.User(
        email=user.email,
        lga=user.lga,
        password_hash=hash_password(user.password),
        address=user.address,
        address_city=user.address_city,
        role=user.role,
        first_name=user.first_name,
        last_name=user.last_name,
        # farm_name=user.farm_name
    )
    session.add(user_object)
    session.commit()
    session.refresh(user_object)
    return {"success":"registration successful"}


@router.post('/login')
def LoginUser(user:LoginSchema,session:Session=Depends(get_session)):
    user=authenticate_user(user.email,user.password)
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
def LoggedInUser(request:Request,user:UserResponseSchema=Depends(get_current_user)):
    return user