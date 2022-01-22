/* eslint-disable no-undef */
const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('Testa o endpoint GET `/client/`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
    shell.exec('npx sequelize-cli db:seed:all');
  });

  it('Será validado que é possível listar todos clients com sucesso', async () => {
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
      .get(`${url}/client`)
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json.length).toBe(2);
      });
  });

  it('Será validado que não é possível listar todos clients sem o token', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: '',
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/client/`)
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
      .get(`${url}/client`)
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Token inválido ou expirado');
      });
  });
});
