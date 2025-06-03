from flask import Blueprint, request, jsonify, make_response
from services.auth_service import AuthService
from bson import ObjectId
from flask_jwt_extended import unset_jwt_cookies, set_access_cookies, jwt_required, get_jwt_identity

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
        return jsonify({"error": "Usuário já existe"}), 409

    return jsonify(result), 201


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    nome = data.get("nome")
    senha = data.get("senha")

    result = auth_service.login(nome, senha)
    if not result:
        return jsonify({"error": "Credenciais inválidas"}), 401

    user = result["user"]
    token = result["access_token"]

    response = make_response(jsonify({
        "id": user["id"],
        "nome": user["nome"],
        "email": user["email"],
    }), 200)

    # Set the JWT access token cookie properly
    set_access_cookies(response, token)

    return response


@auth_bp.route("/status")
@jwt_required()
def auth_status():
    user_id = get_jwt_identity()
    return jsonify({"authenticated": True, "user_id": user_id}), 200


@auth_bp.route("/signout", methods=["POST"])
def signout():
    response = jsonify({"message": "Signed out"})
    unset_jwt_cookies(response)
    return response, 200
