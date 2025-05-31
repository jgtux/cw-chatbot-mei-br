from repositories.mongo_auth_repository import MongoAuthRepository
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token

class AuthService:
    def __init__(self):
        self.repo = MongoAuthRepository()

    def cadastrar(self, nome, email, senha):
        if self.repo.achar_auth(nome):
            return None  # Usuario ja existe
        hashed_senha = generate_password_hash(senha)
        self.repo.cadastrar(nome, email, hashed_senha)
        return {"message": "User criado"}

    def login(self, nome, senha):
        user = self.repo.login(nome, senha)
        print(user)
        if not user or not check_password_hash(user["senha"], senha):
            return None # senha invalida ou problema interno, precisa fazer tratamento de erro
        access_token = create_access_token(identity=str(user["_id"]))
        return {"access_token": access_token}
