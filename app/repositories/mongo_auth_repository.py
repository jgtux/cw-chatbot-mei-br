from config import mongo_db

class MongoAuthRepository:
    def __init__(self): # Construtor do repo
        self.collection = mongo_db['auth']

    def achar_auth(self, nome): # Achar auth pelo nome do user
        return self.collection.find_one({'nome': nome})
    def login(self, nome, senha): # logar auth
        return self.collection.find_one({'nome': nome})
    def cadastrar(self, nome, email, hashed_senha, data_nasc, telefone): # Criar um auth
        return self.collection.insert_one({'nome': nome, 'email': email, 'senha': hashed_senha,
                                           'data_nasc': data_nasc, "telefone": telefone})
