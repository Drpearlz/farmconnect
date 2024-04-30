from pydantic import BaseModel
from typing import Optional
from enum import Enum

class Role(Enum):
    ADMIN='admin'
    BUYER='buyer'
    FARMER='farmer'

class UserCreateSchema(BaseModel):
    email:str
    password:str
    address:str
    role:Role
    lga:str
    address_city:str
    first_name:str
    last_name:str
    farm_name:Optional[str]=None


class UserResponseSchema(BaseModel):
    email:str
    address:str
    role:Role
    lga:str
    address_city:str
    first_name:str
    last_name:str
    farm_name:Optional[str]=None