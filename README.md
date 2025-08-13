#  Projeto Familiares - Angular 17 + TailwindCSS 4 + API Node.js

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=flat&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)

> Sistema completo para cadastro, atualização, listagem e exclusão de familiares, composto por **frontend em Angular 17** e **API REST em Node.js/Express**.

---

## 📜 Visão Geral

Este projeto é dividido em duas partes:

- **Frontend**: Aplicação Angular 17 com TailwindCSS 3, utilizando **Signals** e nova sintaxe de controle (`@if`, `@for`, `@empty`).
- **Backend**: API REST em Node.js/Express com arquitetura **Service → Repository → Model**, validando dados, utilizando injeção de dependências, Custom Error Pattern e com banco em memória.

---

## Como Rodar o Projeto

### Clonar o repositório
```bash
https://github.com/victorhjoe/projeto-familiar.git
```
```bash
cd projeto-familiar
```
### Rodar o Backend
```bash
cd back-end
```
```bash
npm install
```
```bash
npm start
```
### Servidor disponível em:
```bash
http://localhost:3000
```
## Rodar o Frontend
```bash
cd front-end
```
```bash
cd projeto-familiares
```
```bash
npm install
```
```bash
npm start
```
### Aplicação disponível em:

```bash
http://localhost:4200
```
## Endpoints da API <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />	

### GET 
**Lista todos os familiares para a tabela no front**
```bash
http://localhost:3000/familiar
```
### GET by id 
**Busca o familiar pelo id informado trazendo seus descendentes vinculado pela identidade do ascendente caso seja informada**
```bash
http://localhost:3000/familiar/:id
```
### POST 
**Cadastra um familiar**
```bash
http://localhost:3000/familiar
```
### PUT
**Atualiza um familiar**
```bash
http://localhost:3000/familiar/:id
```
- **Corpo da requisição**
```json
{"nome":"Victor Hugo da Silva","dataNascimento":"1996-03-20","identidade":"1234","identidadeAscendente":""}
```
### Delete
**Deleta um familiar**
```bash
http://localhost:3000/familiar/:id
```
## Testes Automatizados
**Em ambos ambientes**
```bash
npm test
```
