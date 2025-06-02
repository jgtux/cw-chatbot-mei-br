import pymongo
from datetime import datetime
import networkx as nx
from dotenv import load_dotenv


#import os
#from flask_jwt_extended import jwt_required, get_jwt_identity
#from bson import ObjectId

load_dotenv()

#repositorio

def conectar_db():
  conect_link="mongodb+srv://c_u1:1234@cluster0.iu8rug9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  db_name="db"
  #conect_link=os.getenv("MONGO_URL")
  #db_name=os.getenv("MONGO_DB_NAME")
  client=pymongo.MongoClient(conect_link)
  db=client[db_name]
  colecao=db["chats"]
  return colecao

def pegar_lista_historico ():
  colecao=conectar_db()

  lista_p_r=[]  #lista perguntas e respostas

  #auth_id = get_jwt_identity()
  # # Convert string back to ObjectId if needed
  #auth_obj_id = ObjectId(auth_id)
  # Use object_id in DB queries

  auth_id=1
  for i in colecao.find({"auth_id":auth_id}).sort("data", pymongo.ASCENDING):
    lista_p_r.append(i["pergunta"])
    lista_p_r.append(i["resposta"])
  return lista_p_r

#service

def criar_grafo ():
  lista_p_r=pegar_lista_historico()
  G = nx.Graph()
  G.add_nodes_from(lista_p_r)
  for i in range(0,len(lista_p_r)-1):
    G.add_edge(lista_p_r[i],lista_p_r[i+1])
  return G

#controler

def plotar_grafo ():
  G=criar_grafo()
  pos = nx.spring_layout(G)
  nx.draw(G, pos, with_labels=True, font_weight='bold')
