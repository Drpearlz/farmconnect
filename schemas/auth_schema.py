from pydantic import BaseModel


class Token(BaseModel):
    access_token:str
    refresh_token:str


class LoginSchema(BaseModel):
    email:str
    password:str