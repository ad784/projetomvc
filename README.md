# Projeto MVC API

API de exemplo em **Node.js / Express** com padrão **MVC**. O objetivo é demonstrar uma arquitetura organizada para cadastro e listagem de produtos com documentação interna via **JSDoc** e apresentação externa em **Markdown profissional**.

![Node.js](https://img.shields.io/badge/node-v20.x-brightgreen)
![Express](https://img.shields.io/badge/express-^5.2.1-lightgrey)

## Descrição

Este projeto implementa uma API básica com persistência em memória e camada MVC. Ele suporta inclusão, listagem e exclusão de produtos, mantendo o front-end simples com EJS e o back-end documentado para facilitar manutenção.

## Stack Tecnológica

- Node.js
- Express
- EJS
- MVC (Model / View / Controller)
- JSDoc para documentação interna

## Instalação

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd projeto-mvc
npm install
```

## Execução

```bash
npm start
```

Em seguida, abra no navegador:

```bash
http://localhost:3000
```

## Estrutura de Pastas

- `config/` - Configurações compartilhadas da aplicação
- `controllers/` - Lógica de requisições HTTP
- `models/` - Modelo de domínio e manipulação de dados
- `routes/` - Definição de rotas da aplicação
- `views/` - Templates EJS para renderização

## Variáveis de Ambiente

Crie um arquivo `.env` com os campos abaixo. Não inclua senhas reais no repositório.

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=senha_segura
DB_NAME=projeto_mvc
```

## Observações

A aplicação atual utiliza persistência em memória para fins de demonstração. Em um ambiente real, o `config/database.js` deve ser conectado a um banco de dados relacional ou NoSQL.
