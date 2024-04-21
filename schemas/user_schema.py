from pydantic import BaseModel
import enum

class Role(enum):
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


class UserResponseSchema(BaseModel):
    email:str
    username:str