from repositories.mongo_chat_repository import MongoChatRepository
from config import llm
from langchain_core.prompts import ChatPromptTemplate


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

