/* eslint-disable no-undef */
const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('Testando o endpoint POST `/user/login`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });

  it('Será validado que é possível fazer login com sucesso', async () => {
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
        `${url}/user/login`,
        {
          email: 'rubinho@gmail.com',
          password: '123456',
        },
      )
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.token).not.toBeNull();
      });
  });

  it('Será validado que não é possível fazer login sem o campo `email`', async () => {
    await frisby
      .post(
        `${url}/user/login`,
        {
          password: '123456',
        },
      )
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('O campo "email" é necesssário');
      });
  });

  it('Será validado que não é possível fazer login com o campo `email` vazio', async () => {
    await frisby
      .post(
        `${url}/user/login`,
        {
          email: '',
          password: '123456',
        },
      )
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('O campo "email" não pode ser vazio');
      });
  });

  it('Será validado que não é possível fazer login sem o campo `password`', async () => {
    await frisby
      .post(
        `${url}/user/login`,
        {
          email: 'rubinho@gmail.com',
        },
      )
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('O campo "password" é necesssário');
      });
  });

  it('Será validado que não é possível fazer login com o campo `password` vazio', async () => {
    await frisby
      .post(
        `${url}/user/login`,
        {
          email: 'rubinho@gmail.com',
          password: '',
        },
      )
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('O campo "password" não pode ser vazio');
      });
  });
});
