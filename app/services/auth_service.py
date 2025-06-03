from repositories.mongo_auth_repository import MongoAuthRepository
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token

class AuthService:
    def __init__(self):
        self.repo = MongoAuthRepository()

    def cadastrar(self, nome, email, senha, data_nasc, telefone):
        if self.repo.achar_auth(nome):
            return None  # Usuario ja existe
        hashed_senha = generate_password_hash(senha)
        self.repo.cadastrar(nome, email, hashed_senha, data_nasc, telefone)
        return {"message": "User criado"}

    def login(self, nome, senha):
        user = self.repo.login(nome, senha)
        print(user)
        if not user or not check_password_hash(user["senha"], senha):
            return None  # invalid password or user not found
        
        access_token = create_access_token(identity=str(user["_id"]))

        # Return user info + token together
        return {
            "user": {
                "id": str(user["_id"]),
                "nome": user["nome"],
                "email": user.get("email", "")
            },
            "access_token": access_token
        }
