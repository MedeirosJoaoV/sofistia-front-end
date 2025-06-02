# 🚀 Sistema Sofistia - Angular + PHP

Este projeto é uma aplicação **web completa** para autoatendimento em restaurantes, permitindo seleção de mesas, visualização de cardápio e realização de pedidos.

- **Frontend:** Angular + Tailwind CSS  
- **Backend:** PHP puro (rodando localmente via WampServer)

---

## ✅ Pré-requisitos

1. **Node.js e npm:**  
   Baixe e instale em: https://nodejs.org/

2. **Angular CLI:**  
   Instale com:
```bash
npm install -g @angular/cli
```
WampServer (ou XAMPP):

Para rodar o servidor local em PHP.

```
Baixe em: https://www.wampserver.com/
```

🛠️ Passos para rodar o projeto
1️⃣ Clone o repositório

```bash

git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```
2️⃣ Instale as dependências do Angular

``` bash

npm install
```

3️⃣ Rode o frontend (Angular)
```bash

ng serve
```
4️⃣ Configure o backend (PHP)
Copie os arquivos PHP para a pasta do WAMP:
Ex: C:\wamp64\www\Sofistia\api

Certifique-se de que o Apache e MySQL estão ativos via WampServer.

🧭 Estrutura de Rotas no Angular
/ 👉 Página inicial (seleção de mesa e responsável)

/cardapio/:mesa 👉 Tela do cardápio da mesa selecionada

/carrinho 👉 Carrinho de compras com os pedidos

/cozinha 👉 Tela da cozinha (visualização de pedidos em andamento)

❓ Problemas comuns
CORS bloqueando?
Adicione ao início dos arquivos PHP:

``` php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
```
Porta ocupada?
Por padrão, o Angular roda em http://localhost:4200.
Você pode especificar outra porta com:

```bash

ng serve --port 4300
```

✨ Melhorias futuras
Autenticação para gerentes e garçons

Comunicação em tempo real com WebSockets

Banco de dados MySQL com relacionamentos otimizados

Pagamento online via integração com gateways

UX/UI aprimorada com animações e notificações

✅ CI (futuramente)
Automatização de testes e build com GitHub Actions

Deploy contínuo para ambientes de teste

Desenvolvido como parte do projeto Sofistia - Sistema de Autoatendimento Inteligente 🍽️
