from sqlmodel import Field, SQLModel,DateTime,Column, Field, SQLModel, TIMESTAMP, text
from typing import Optional
from datetime import datetime


class User(SQLModel,table=True):
    id:Optional[int]=Field(default=None,primary_key=True)
    email:str=Field(unique=True)
    username:str
    password_hash:str
    date_joined:datetime=Field(sa_column=Column(
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=text("CURRENT_TIMESTAMP"),
    ))
    