/* eslint-disable no-undef */
const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('Testa o endpoint GET `/client/:id`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
    shell.exec('npx sequelize-cli db:seed:all');
  });

  it('Será validado que é possível obter um client pelo Id com sucesso', async () => {
    let token;
    await frisby
      .post(
        `${url}/user/login`,
        {
          email: 'admin@gmail.com',
          password: 'admin123',
        },
      )
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

    await frisby
      .setup({
        request: {
          headers: {
            authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/client/1`)
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json.id).toBe(1);
        expect(json.nome).toBe('Cliente Teste 1');
        expect(json.cpf).toBe(123456789);
        expect(json.dataDeNascimento).toBe('2011-08-01T19:58:00.000Z');
        expect(json.dataDeCadastro).not.toBeNull();
        expect(json.rendaFamiliar).toBe(2500);
        expect(json.userId).toBe(1);
      });
  });

  it('Será validado que não é possível obter um client que não existe', async () => {
    let token;
    await frisby
      .post(
        `${url}/user/login`,
        {
          email: 'admin@gmail.com',
          password: 'admin123',
        },
      )
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        token = result.token;
      });

    await frisby
      .setup({
        request: {
          headers: {
            authorization: token,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/client/999`)
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Post does not exist');
      });
  });

  it('Será validado que não é possível obter um client pelo Id sem o token', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: '',
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/client/1`)
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Token Não encontrado');
      });
  });

  it('Será validado que não é possível obter um client pelo Id com o token inválido', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: 'Token Inválido',
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/client/1`)
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Token inválido ou expirado');
      });
  });
});
