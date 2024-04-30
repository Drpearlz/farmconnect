from datetime import timedelta,datetime
from passlib.context import CryptContext
from jose import JWTError,jwt
from sqlmodel import Session
from sqlmodel import select
from database import models
from config import settings
from fastapi import Depends,HTTPException
from starlette import status
from schemas.user_schema import UserResponseSchema
from fastapi.security import OAuth2PasswordBearer
from database.database import get_session

bcrypt_context=CryptContext(schemes=['bcrypt'],deprecated='auto')
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


db:Session=get_session()
# hash the user password
def hash_password(password):
    return bcrypt_context.hash(password)


def authenticate_user(email:str,password:str):
    user=check_user_exists(email)
    if user==None:
        return None
    if not bcrypt_context.verify(password,user.password_hash):
        return False
    
    return user


def check_user_exists(email:str):
    user=db.exec(
        select(models.User).where(models.User.email==email)
    ).first()
    if user:
        return user
    
    return None


# creating tokens basically needs three things
# 1. the signature encoding 2. the algorithm 3. the expiry date
def create_access_token(user_signature,expire:timedelta):
    encoding={"sub":user_signature.email,"id":user_signature.id,"exp":datetime.now() + expire}
    return jwt.encode(encoding,settings.JWT_SECRET,algorithm='HS256')
  


def get_current_user(token:str=Depends(oauth2_scheme)):
    try:
        payload=jwt.decode(token,settings.JWT_SECRET,algorithms=['HS256'])
        email=payload['sub']
        if email is None:
            raise HTTPException(status.HTTP_401_UNAUTHORIZED,detail={"error":"can't validate token"})
    except JWTError:    
        raise HTTPException(status.HTTP_401_UNAUTHORIZED,detail={"error":"can't validate token"})
    user_db=check_user_exists(email)
    if user_db is None:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED,detail={"error":"can't validate token"})
    user=UserResponseSchema(email=user_db.email,role=user_db.role,address=user_db.address,address_city=user_db.address_city,farm_name=user_db.farm_name,first_name=user_db.first_name,last_name=user_db.last_name,lga=user_db.lga)
    return user
    