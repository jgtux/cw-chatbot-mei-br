from flask import Blueprint, request, jsonify
from services.auth_service import AuthService

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")
auth_service = AuthService()

@auth_bp.route("/cadastrar", methods=["POST"])
def cadastro():
    data = request.get_json()
    nome = data.get("nome")
    email = data.get("email")
    senha = data.get("senha")
    data_nasc = data.get("data_nasc")
    telefone = data.get("telefone")

    if not nome or not senha or not email or not data_nasc or not telefone:
        return jsonify({"error": "Campos faltantes"}), 400

    result = auth_service.cadastrar(nome, email, senha, data_nasc, telefone)
    if not result:
        return jsonify({"error": "Usuario ja existe"}), 409

    return jsonify(result), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    nome = data.get("nome")
    senha = data.get("senha")

    result = auth_service.login(nome, senha)
    if not result:
        return jsonify({"error": "Credenciais invalidas"}), 401

    return jsonify(result), 200
