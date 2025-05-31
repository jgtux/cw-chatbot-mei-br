import os
from dotenv import load_dotenv
from pymongo import MongoClient
from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "defaultsecretkey")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "teste")
    FLASK_ENV = os.getenv("FLASK_ENV", "development")
    DEBUG = FLASK_ENV == "development"
    MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017/")
    MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "db")
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    
# MongoDB client & DB
mongo_client = MongoClient(Config.MONGO_URL)
mongo_db = mongo_client[Config.MONGO_DB_NAME]

collection = mongo_db["auth"]

llm = ChatGroq(
    temperature=0,
    groq_api_key=Config.GROQ_API_KEY,
    model_name="gemma2-9b-it", 
)

