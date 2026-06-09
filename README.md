# Projeto MVC API

API em Node.js e Express organizada no padrao MVC para cadastro, listagem e exclusao de produtos.
O projeto demonstra separacao clara entre rotas, controllers, models e views EJS.
Tambem inclui documentacao interna com JSDoc para melhorar manutencao e IntelliSense no VS Code.

![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.2.1-000000?logo=express&logoColor=white)
![Arquitetura](https://img.shields.io/badge/Arquitetura-MVC-blue)

## Stack Tecnologica

- Node.js
- Express
- EJS
- MySQL preparado via configuracao de ambiente
- JSDoc
- Padrao MVC

## Funcionalidades

- Listagem de produtos em `/produtos`
- Cadastro de produtos via formulario
- Exclusao de produtos por identificador
- Views renderizadas com EJS
- Model e Controller documentados com JSDoc

## Guia de Instalacao e Execucao

Clone o repositorio:

```bash
git clone https://github.com/SEU_USUARIO/projeto-mvc.git
```

Acesse a pasta do projeto:

```bash
cd projeto-mvc
```

Instale as dependencias:

```bash
npm install
```

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```bash
http://localhost:3000
```

## Variaveis de Ambiente

Crie um arquivo `.env` na raiz do projeto usando o modelo abaixo. Nao publique senhas reais no GitHub.

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=projeto_mvc
```

## Estrutura do Projeto

```text
config/
  database.js
controllers/
  productController.js
models/
  Product.js
routes/
  productRoutes.js
  routes.js
views/
  *.ejs
app.js
server.js
README.md
```

## Documentacao Interna

Os arquivos `models/Product.js` e `controllers/productController.js` usam JSDoc para documentar classes, metodos, parametros, retornos e excecoes. No VS Code, passe o mouse sobre metodos como `Product.add`, `Product.delete`, `listar`, `adicionar` e `excluir` para visualizar os tipos e descricoes.

## Endpoints Principais

| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/` | Renderiza a pagina inicial |
| GET | `/produtos` | Lista os produtos cadastrados |
| POST | `/produtos` | Cadastra um novo produto |
| GET | `/delete/:id` | Remove um produto pelo id |

## Observacoes

Atualmente os produtos sao armazenados em memoria para fins didaticos. A configuracao em `config/database.js` deixa o projeto preparado para evoluir para persistencia em banco de dados usando variaveis de ambiente.
