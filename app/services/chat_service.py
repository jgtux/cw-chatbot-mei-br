from repositories.mongo_chat_repository import MongoChatRepository
from config import llm
from langchain_core.prompts import ChatPromptTemplate
import networkx as nx


# QTD PREDEFINIDA TEMPORARIAMENTE
class ChatService:
    def __init__(self):
        self.repo = MongoChatRepository()
    def perguntar(self, auth_id, pergunta):
        ult_chats = self.repo.achar_ult_chat_pqtd(auth_id, 20)

        messages = [("system", "Você é um assistente amigável dos MEIs e seu nome é Meigo.")]
    
        for doc in ult_chats:  
            perg = doc.get("pergunta", "")
            resp = doc.get("resposta", "")
            messages.append(("human", perg))
            messages.append(("ai", resp))
         
        messages.append(("human", pergunta))
        prompt = ChatPromptTemplate.from_messages(messages)
        formatted_messages = prompt.format_messages()
        response = llm(formatted_messages)

        self.repo.salvar_prgeres(auth_id, pergunta, response.content)
        return response.content
    def pegar_hist(self, auth_id):
        ult_chats = self.repo.achar_ult_chat_pqtd(auth_id, 40)
        hist = []

        for doc in ult_chats:
            hist.append(doc)

        return hist
    def grafo_hist(self, auth_id):
        ult_chats = self.repo.achar_ult_chat_pqtd(auth_id, 20)
        hist_grafo = []

        for doc in ult_chats:
            hist_grafo.append(doc["pergunta"])
            hist_grafo.append(doc["resposta"])
        G = nx.Graph()
        G.add_nodes_from(hist_grafo)
        for i in range(0, len(hist_grafo)-1):
            G.add_edge(hist_grafo[i], hist_grafo[i+1])
        return G
