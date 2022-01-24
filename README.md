
<h1 align="center">
     <a href="#" alt="site do ecoleta"> Tempus Digital Application </a>
</h1>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#%EF%B8%8F-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Configurando Variáveis de Ambiente](#configurando-variáveis-de-ambiente)
     * [Rodando o Servidor](#-rodando-o-servidor)
     * [Rodando o FrontEnd](#-rodando-o-servidor)
         * [Aqui você encontrará as informações para efetuar o login!]
     * [Rodando os Testes](#-rodando-os-testes)
   * [Tecnologias](#-tecnologias)
     * [Server](#server)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
   * [Licença](#-licença)
<!--te-->

## 💻 Sobre o projeto

Tempus Digital Application - É uma aplicação com a finalidade de criação e logins para usuários e CRUD para clientes, com a possibilidade da geração de relátorios sobre a base de dados de clientes.

---

## ⚙️ Funcionalidades

- [x] Usuários:
  - [ ] Cadastro de novos usuários pela rota "/user" (Método POST) [Não Desenvolvida nesta versão!];
  - [x] Login de usuários pela rota "/user/login" (Método POST);
- [x] Clientes:
  - [x] Cadastro de novos clientes pela rota "/client" (Método POST);
  - [x] Listagem de clientes pela rota "/client" (Método GET);
  - [x] Listagem de cliente por seu ID pela rota "/client/:id" (Método GET);
  - [x] Editar clientes pela rota "/user/:clientId" (Método PUT);
  - [x] Deletar clientes pela rota "/user/:clientId" (Método DELETE);

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta backend) 
2. Frontend (pasta frontend)

💡Para que o Frontend funcione é necessário que o Backend esteja sendo executado.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [MySQL Server](https://dev.mysql.com/downloads/mysql/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Configurando Variáveis de Ambiente

Primeiramente, você deve configurar suas variáves de ambiente, no arquivo [.env](https://github.com/IsaacCruzLM/tempus-application/blob/main/backend/.env), com o seu usuário de acesso ao servidor root do MySQL de sua máquina e sua senhan de acesso.

OBS: O arquivo .env foi enviado ao repositório remoto a fim de facilitar a utilização da aplicação, juntamente com uma senha fictícia do JWT.

### 🎲 Rodando o Servidor

Certifique-se que seu servidor MySQL esteja rodando!!!!

```bash

# Clone este repositório
$ git clone git@github.com:IsaacCruzLM/tempus-application.git

# Acesse a pasta do projeto no terminal/cmd
$ cd tempus-application

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3001 - acesse http://localhost:3001

```

### 🎲 Rodando o FrontEnd

!!!!!!!!! IMPORTAMTE !!!!!!!!!

Como não foi implementado a criação de novos usários, para a utilização da aplicação deve-se utilizar o logion a seguir:

emai: admin@gmail.com
password: admin123

```bash

# Clone este repositório
$ git clone git@github.com:IsaacCruzLM/tempus-application.git

# Acesse a pasta do projeto no terminal/cmd
$ cd tempus-application

# Vá para a pasta frontend
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse http://localhost:3000

```

### 🎲 Rodando os Testes

```bash

# Rodar testes localmente
$ npm test

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

### [](https://github.com/IsaacCruzLM/Blog_API/blob/main/README.md#backend)**Backend**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[Sequelize](https://sequelize.org/v3/)**
-   **[Mysql2](https://www.npmjs.com/package/mysql2)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Jsonwebtoken](https://jwt.io/)**
-   **[Jest](https://jestjs.io/)**

### [](https://github.com/IsaacCruzLM/Blog_API/blob/main/README.md#frontend)**Frontend**  ([React](https://pt-br.reactjs.org/))

-   **[Axios](https://axios-http.com/)**
-   **[JQuery](https://jquery.com/)**
-   **[react-router](https://www.npmjs.com/package/react-router-dom)**
-   **[styled-components](https://styled-components.com/)**
-   **[Material UI](https://mui.com/pt/)**

---

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 🦸 Autor

<a href="https://www.linkedin.com/in/isaaccruzz/">
 <img style="border-radius: 50%;" src="./public/profile.jpeg" width="100px;" alt=""/>
 <br />
 <sub><b>Isaac Cruz</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Isaac-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/isaaccruzz/)](https://www.linkedin.com/in/isaaccruzz/) 
[![Gmail Badge](https://img.shields.io/badge/-isaac.clm1@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:isaac.clm1@gmail.com)](mailto:isaac.clm1@gmail.com)

---

Feito com ❤️ por Isaac Cruz👋🏽 [Entre em contato!](https://www.linkedin.com/in/isaaccruzz/)

---
