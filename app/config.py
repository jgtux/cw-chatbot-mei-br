import os
from dotenv import load_dotenv
from pymongo import MongoClient
from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from docx import Document

# INSTRUCTIONS OPENING WITH DOCX FOR NOW!!! 

def load_system_prompt(path, max_chars=1500):
    doc = Document(path)
    doc_text = "\n".join(p.text for p in doc.paragraphs if p.text.strip())
    base_prompt = (
        "Você é um assistente amigável dos MEIs e seu nome é Meigo.\n"
        "Responda de forma clara, objetiva e evite repetir informações.\n"
    )
    full_text = base_prompt + doc_text.strip()

    if len(full_text) > max_chars:
        return full_text[:max_chars].rstrip() + "..."
    else:
        return full_text

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


llm = ChatGroq(
    temperature=0,
    groq_api_key=Config.GROQ_API_KEY,
    model_name="gemma2-9b-it", 
)

init = [("system", 
         "Você é um assistente amigável dos MEIs e seu nome é Meigo. "
         "Responda sempre de forma clara, objetiva e educada. "
         "Evite repetir frases ou parágrafos e seja conciso nas respostas.")]
# init = [("system", load_system_prompt("meigo_instructions.docx"))]
