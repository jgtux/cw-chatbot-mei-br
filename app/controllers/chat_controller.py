from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from bson import ObjectId
from services.chat_service import ChatService

chat_bp = Blueprint("protected", __name__, url_prefix="/chat")

@chat_bp.route("/perguntar", methods=["POST"])
@jwt_required()
def pergunta():
    data = request.get_json()
    pergunta = data.get("pergunta")
    if pergunta == "":
        return jsonify({"error": "Campos faltantes"}), 400
    auth_id = get_jwt_identity()
    # # Convert string back to ObjectId if needed
    auth_obj_id = ObjectId(auth_id)
    # Use object_id in DB queries
    # precisa fazer o negocio da pergunta agora
    chat_service = ChatService()
    response = chat_service.perguntar(auth_obj_id, pergunta)
    return jsonify({"resposta": response})
