from config import mongo_db 
from datetime import datetime

class MongoChatRepository:
    def __init__(self):
        self.collection = mongo_db['chats']
    def achar_ult_chat_pqtd(self, auth_id, qtd):
        # Achar ultimos chat pelo tamanho (PREDEFINIDO) (sempre par) e pelo id do auth
        if qtd == 0:
            return -1 
        query = {"auth_id": auth_id}
        only = {"pergunta": 1, "resposta": 1, "data": 1, "_id": 0}
        results = self.collection.find(query, only).sort("data", -1).limit(qtd)
        return results


    def salvar_prgeres(self, auth_id, pergunta, resposta):
        
        document = {
            "auth_id": auth_id,
            "pergunta": pergunta,
            "resposta": resposta,
            "data": datetime.utcnow()  # UTC timestamp
        }
    
        self.collection.insert_one(document) 
