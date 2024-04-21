from pydantic_settings import BaseSettings,SettingsConfigDict


class Settings(BaseSettings):
    DB_URL:str
    JWT_SECRET:str

    model_config=SettingsConfigDict(
        env_file='.env',
        extra='ignore'
    )

settings=Settings()

