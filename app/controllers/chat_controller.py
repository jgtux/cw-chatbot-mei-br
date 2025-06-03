from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from bson import ObjectId
from services.chat_service import ChatService
import networkx as nx

chat_bp = Blueprint("protected", __name__, url_prefix="/chat")

@chat_bp.route("/perguntar", methods=["POST"])
@jwt_required()
def pergunta():
    data = request.get_json()
    pergunta = data.get("pergunta")
    if pergunta == "":
        return jsonify({"error": "Campos faltantes"}), 400
    auth_id = get_jwt_identity()
    auth_obj_id = ObjectId(auth_id)
    chat_service = ChatService()
    response = chat_service.perguntar(auth_obj_id, pergunta)
    return jsonify({"resposta": response})

@chat_bp.route("/historico", methods=["GET"])
@jwt_required()
def pegar_hist():
    auth_id = get_jwt_identity()
    auth_obj_id = ObjectId(auth_id)
    chat_service = ChatService()
    response = chat_service.pegar_hist(auth_obj_id)
    return jsonify({"historico": response})

@chat_bp.route("/grafos")
@jwt_required()
def grafo_hist_nx():
    auth_id = get_jwt_identity()
    auth_obj_id = ObjectId(auth_id)
    chat_service = ChatService()
    G = chat_service.grafo_hist(auth_obj_id)

    nodes = [{"data": {"id": str(n)}} for n in G.nodes()]
    edges = [{"data": {"source": str(u), "target": str(v)}} for u, v in G.edges()]

    return jsonify({"elementos": {"nodes": nodes, "edges": edges}})
