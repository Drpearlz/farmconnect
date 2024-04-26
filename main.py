from fastapi import FastAPI
import uvicorn
from typing import Union
from contextlib import asynccontextmanager
from database.database import create_db
from routers import auth
from fastapi.middleware.cors import CORSMiddleware


app=FastAPI()

create_db()

app.include_router(auth.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_headers=True,
    allow_methods=True 
)

if __name__=='__main__':
    uvicorn.run(
        "main:app",host='127.0.0.1',port=8000,reload=True
    )