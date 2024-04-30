from fastapi import FastAPI
import uvicorn
from typing import Union
from contextlib import asynccontextmanager
from database.database import create_db
from routers import auth,products
from fastapi.middleware.cors import CORSMiddleware


app=FastAPI()

create_db()

app.include_router(auth.router)
app.include_router(products.producter_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_headers=['*'],
    allow_methods=['*'] 
)

if __name__=='__main__':
    uvicorn.run(
        "main:app",host='127.0.0.1',port=8000,reload=True
    )