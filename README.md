# Rifa
## Tecnologias:
NodeJS
### Backend:
- Framework Express
- Pacote Sequelize para migrations

### Frontend:
- React

### Banco de Dados
- PostgreSQL
- Container Docker com Docker-compose


Página de sorteio, com banco de dados em Docker, Node com Express, React, Autenticação e outros.


1. Iniciar o servidor Postgres
```
docker-compose up -d
```

2. No servidor api instale as dependências
```
npm install
```

3. Rode as migrations
```
npx sequelize-cli db:migrate
```

4. Inicie o servidor API

```
npm start
```

5. No servidor UI Reacti instale as dependências
```
npm install
```

4. Inicie o servidor UI

```
npm start
```







