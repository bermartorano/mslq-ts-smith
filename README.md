# ⚒️ Smith API

Desenvolvi uma aplicação back-end para o gerenciamento de um banco de dados de uma loja de itens medievais em um jogo de RPG! É possível fazer operações CRUD no banco que modela usuários, produtos e vendas. Feita de acordo com a arquitetura MSC!

## Ferramentas Utilizadas
* Typescript
* Node.js
* MySQL
* Express
* jsonwebtoken

## Como executar a aplicação
1. Clone o repositório.
2. Na raiz do projeto, rode o comando `docker-compose up -d` para subir os serviços do banco de dados e da aplicação.
3. Entre no container da aplicação com o comando `docker exec -it trybesmith bash`.
4. Dentro do terminal do container da aplicação, crie e popule as tabelas do banco com o comando `npm run restore`.
5. Dentro do terminal do container da aplicação, suba a aplicação com o comando `npm start`

## Detalhes dos requisitos
![requisitos](https://github.com/bermartorano/mslq-ts-smith/assets/110858573/624b88b4-e8d5-4656-b50f-d55ead3f38bb)
