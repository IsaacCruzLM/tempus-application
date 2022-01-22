/* eslint-disable no-undef */
const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('Testando o endpoint POST `/user`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });

  it('Será validado que é possível cadastrar um usuário com sucesso', async () => {
    await frisby
      .post(
        `${url}/user`,
        {
          nome: 'Rubinho Barrichello',
          email: 'rubinho@gmail.com',
          password: '123456',
        },
      )
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.token).not.toBeNull();
      });
  });

  it('Será validado que não é possível cadastrar usuário sem o campo `nome`', async () => {
    await frisby
      .post(
        `${url}/user`,
        {
          email: 'rubinho@gmail.com',
          password: '123456',
        },
      )
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('O campo "nome" é necessário');
      });
  });

  it('Será validado que não é possível cadastrar usuário sem o campo `password`', async () => {
    await frisby
      .post(
        `${url}/user`,
        {
          nome: 'Rubinho Barrichello',
          email: 'rubinho@gmail.com',
        },
      )
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('O campo "password" é necessário');
      });
  });

  it('Será validado que não é possível cadastrar usuário sem o campo `email`', async () => {
    await frisby
      .post(
        `${url}/user`,
        {
          nome: 'Rubinho Barrichello',
          password: '123456',
        },
      )
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('O campo "email" é necessário');
      });
  });

  it('Será validado que não é possível cadastrar usuário com o campo `email` inválido', async () => {
    await frisby
      .post(
        `${url}/user`,
        {
          nome: 'Rubinho Barrichello',
          email: 'emailinválido',
          password: '123456',
        },
      )
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Por favor, insira um "email" válido');
      });
  });

  it('Validar que não é possível cadastrar um usuário com email já existente', async () => {
    await frisby
      .post(
        `${url}/user`,
        {
          nome: 'Rubinho Barrichello',
          email: 'rubinho@gmail.com',
          password: '123456',
        },
      )
      .expect('status', 201);

    await frisby
      .post(
        `${url}/user`,
        {
          nome: 'Rubinho Barrichello',
          email: 'rubinho@gmail.com',
          password: '123456',
        },
      )
      .expect('status', 409)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Usuário já registrado');
      });
  });
});
