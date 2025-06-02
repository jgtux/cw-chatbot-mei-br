#BIBLIOTECAS

#import pymongo
#import networkx
import requests


#import grafo_historico_chatbot #IMPORTAR QUANDO ESTIVER DEVIDAMENTE IMPLEMENTADO


access_token = None

#MENU E INTERAÇÂO COM USUARIO

#menu inicial
def menu_inicial():
  print("\t1-ENTRAR")
  print("\t2-CADASTRAR")
  op=(input("DIGITE A OPÇÃO DESEJADA: "))
  if(op!="1" and op!="2"):
    print("OPÇÃO INVÁLIDA")
    menu_inicial()
  else:
    if (op=="1"):
      login()
    else:
      cadastro()
  return op

def login():
  #Verifica se o usuario existe e se a senha está certa, retorna um tokem de acesso para poder usar a api e o chat
  global access_token
  usuario=input("\nDIGITE O USUÁRIO: ")
  senha=input("\nDIGITE A SENHA: ")
  url = "http://localhost:5000/auth/login"
  payload = {
    "nome": usuario,
    "senha": senha
  }
  try:
        response = requests.post(url, json=payload)
        response.raise_for_status()  

        data = response.json()
        access_token = data.get("access_token")

        if access_token:
            print("\nLogin realizado com sucesso!")
            menu_principal(access_token)
        else:
            print("\nLogin falhou: token não encontrado na resposta.")

  except requests.exceptions.RequestException as e:
        print(f"\n Erro ao fazer login: {e}")

  menu_principal(access_token)

def cadastro():
  #Cadastro pega as informações e coloca no banco de dados, depois o usuario é direcionado par o login
  usuario=input("\nDIGITE O USUÁRIO: ")
  email=input("\nDIGITE O EMAIL: ")
  senha=input("\nDIGITE A SENHA: ")
  data_nasc=input("\nDIGITE A SUA DATA DE NASCIMENTO: ")
  telefone=input("\nDIGITE O TELEFONE: ")

  url = "http://localhost:5000/auth/cadastrar"
  payload = {
    "nome": usuario,
    "email": email,
    "senha": senha,
    "data_nasc": data_nasc,
    "telefone": telefone
  }
  try:
        response = requests.post(url, json=payload)
        
        if response.status_code == 201:
            print("\nCadastro realizado com sucesso!")
            login()
        else:
            print(f"\nErro no cadastro ({response.status_code}): {response.text}")

  except requests.exceptions.RequestException as e:
      print(f"\nErro ao fazer cadastro: {e}")
      cadastro()

  login()

def menu_principal(access_token):
  print("\t1-CONTA")
  print("\t2-CHATBOT")
  print("\t3-HISTÓRICO")
  print("\t4-SAIR")
  op=(input("\nDIGITE A OPÇÃO DESEJADA: "))
  if(op!="1" and op!="2" and op!="3" and op!="4"):
    print("OPÇÃO INVÁLIDA")
    menu_principal(access_token)
  else:
    if (op=="1"):
      print("CONTA")
      conf_conta()
    elif(op=="2"):
      print("CHATBOT")
      chatbot(access_token)
    elif(op=="3"):
      print("HISTÓRICO")
      historico()
    else:
      print("\nTCHAU VOLTE SEMPRE")
  return None

def conf_conta():
  print("\t1-INFORMAÇÔES DA CONTA") #mostra os dados
  print("\t2-ALTERAR DADOS") #update dos dados
  print("\t3-EXCLUIR CONTA") #delete
  print("\t4-VOLTAR") #volta para o menu principal
  op=(input("\nDIGITE A OPÇÃO DESEJADA: "))


def chatbot(access_token):
  #Chatbot manda uma pergunta e retorna a resposta
  url="http://localhost:5000/chat/perguntar"

  headers = {
      "Authorization": f"Bearer {access_token}",  # muito importante esse "Bearer "
      "Content-Type": "application/json"
  }

  pergunta=input("\n FAÇA A PERGUNTA OU DIGITE SAIR PARA VOLTAR AO MENU\n- ")

  if(pergunta != "SAIR" and pergunta != "Sair" and pergunta != "sair"):
      payload={
          "pergunta": pergunta,
      }
      try:
          response = requests.post(url, json=payload, headers=headers)
          data=response.json()
          print("\nChat realizado com sucesso!")
          print("\n\nRESPOSTA:",data.get("resposta","Sem resposta"))

      except requests.exceptions.RequestException as e:
          print(f"Erro de requisição: {e}")
      except Exception as e:
          print(f"Ocorreu um erro no chat: {e}")

  else:
    menu_principal(access_token)

def historico():
  print("HISTÓRICO")
  # grafo com o histórico de conversas



#EXECUÇÃO (MAIN)

def main ():
  #conectar_db()
  menu_inicial()

main()
