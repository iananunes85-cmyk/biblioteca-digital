# Biblioteca Digital

## Sobre o projeto

Aplicação desenvolvida com React e Vite, integrada a uma API de gerenciamento de livros. O Socket.IO permite atualizar a interface em tempo real quando livros são cadastrados, editados ou excluídos.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Node.js
- Express
- Socket.IO e Socket.IO Client

## Funcionalidades

- Listagem de livros cadastrados na API.
- Exibição de título, autor, gênero e ano.
- Atualização automática após cadastro, edição e exclusão de livros.
- Indicação do estado da conexão em tempo real.

## Repositórios

- Frontend: https://github.com/iananunes85-cmyk/biblioteca-digital
- Backend/API: https://github.com/iananunes85-cmyk/trabalho3-api-biblioteca

## Como executar

### Backend

Na pasta do projeto trabalho3, execute:

```bash
npm install
npm start
```

A API estará disponível em http://localhost:3000.

### Frontend

Na pasta biblioteca-digital, execute:

```bash
npm install
npm run dev
```

Acesse o endereço apresentado no terminal, normalmente http://localhost:5173.

## Testes realizados

Foram testadas as operações de cadastro, edição e exclusão de livros pela API. A interface reagiu aos eventos em tempo real sem precisar recarregar a página.

O comando npm run build também foi executado com sucesso.

## Considerações finais

A integração entre React, API e Socket.IO demonstrou como a comunicação em tempo real pode manter as informações da interface atualizadas e melhorar a experiência de uso.
