from sqlmodel import create_engine,SQLModel,Session
from . import models
from config import settings


engine=create_engine(settings.DB_URL,echo=True)
def create_db():
    SQLModel.metadata.create_all(engine)
    print("DB created")

def get_session()->Session:
    session=Session(engine)
    return session