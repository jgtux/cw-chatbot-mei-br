from repositories.mongo_chat_repository import MongoChatRepository
from config import llm, init
from langchain_core.prompts import ChatPromptTemplate
import networkx as nx
import spacy
import re

nlp = spacy.load("pt_core_news_sm")

def remover_repeticoes(texto):
    import re
    pattern = re.compile(r'(\b.+?\b)(\s+\1){2,}', re.DOTALL)
    return pattern.sub(r'\1', texto)

def limpar_resposta(texto):
    if not texto:
        return ""
    texto = re.sub(r"`{3,}", "", texto)
    texto = re.sub(r"\n{3,}", "\n\n", texto)
    texto = re.sub(r"[ \t]+\n", "\n", texto)
    texto = re.sub(r"\n[ \t]+", "\n", texto)
    texto = texto.strip()
    texto = remover_repeticoes(texto)
    return texto

def extract_keywords(text, num=3):
    if not text:
        return ""
    doc = nlp(text)
    keywords = [token.lemma_ for token in doc if token.pos_ in ["NOUN", "PROPN"] and not token.is_stop]
    return ", ".join(keywords[:num])

# QTD PREDEFINIDA TEMPORARIAMENTE
class ChatService:
    def __init__(self):
        self.repo = MongoChatRepository()
    def perguntar(self, auth_id, pergunta):
        ult_chats = self.repo.achar_ult_chat_pqtd(auth_id, 10)

        messages = init.copy()
        for doc in ult_chats:
            perg = doc.get("pergunta", "").strip()
            resp = limpar_resposta(doc.get("resposta", ""))
            if perg and resp:
                messages.append(("human", perg))
                messages.append(("ai", resp))

        messages.append(("human", pergunta.strip()))
        prompt = ChatPromptTemplate.from_messages(messages)
        formatted_messages = prompt.format_messages()
        response = llm(formatted_messages)
        
        resposta_limpa = limpar_resposta(response.content)
        self.repo.salvar_prgeres(auth_id, pergunta, resposta_limpa)
        return resposta_limpa
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
            pergunta = f"P: {doc.get('pergunta', '')}"
            resposta_raw = doc.get('resposta', '')
            resposta_keywords = f"R: {extract_keywords(resposta_raw)}"
            hist_grafo.append(pergunta)
            hist_grafo.append(resposta_keywords)
        G = nx.DiGraph()
        G.add_nodes_from(hist_grafo)
        for i in range(0, len(hist_grafo)-1):
            G.add_edge(hist_grafo[i], hist_grafo[i+1])
        return G
