/* eslint-disable no-undef */
const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('Testa o endpoint POST `/client`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
    shell.exec('npx sequelize-cli db:seed:all');
  });

  it('Será validado que é possível cadastrar um client com sucesso', async () => {
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
      .post(`${url}/client`, {
        nome: 'João',
        cpf: 458960916,
        dataDeNascimento: '2020-06-01',
        rendaFamiliar: 2000,
      })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.nome).toBe('João');
        expect(json.cpf).toBe(458960916);
        expect(json.dataDeNascimento).toBe('2020-06-01T00:00:00.000Z');
        expect(json.dataDeCadastro).not.toBeNull();
        expect(json.rendaFamiliar).toBe(2000);
        expect(json.userId).toBe(1);
      });
  });

  it('Será validado que não é possível cadastrar um client com cpf já registrado', async () => {
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
      .post(`${url}/client`, {
        nome: 'Cliente Teste 1',
        cpf: 123456789,
        dataDeNascimento: '2020-06-01',
        rendaFamiliar: 2000,
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Este "cpf" já está cadastrado');
      });
  });

  it('Será validado que não é possível cadastrar um client sem o campo `nome`', async () => {
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
      .post(`${url}/client`, {
        cpf: 458960916,
        dataDeNascimento: '2020-06-01',
        rendaFamiliar: 2000,
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('O campo "nome" é invalido');
      });
  });

  it('Será validado que não é possível cadastrar um client sem o campo `cpf`', async () => {
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
      .post(`${url}/client`, {
        nome: 'João',
        dataDeNascimento: '2020-06-01',
        rendaFamiliar: 2000,
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('O campo "cpf" é invalido');
      });
  });

  it('Será validado que não é possível cadastrar um client sem o campo `dataDeNascimento`', async () => {
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
      .post(`${url}/client`, {
        nome: 'João',
        cpf: 458960916,
        rendaFamiliar: 2000,
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('O campo "data de nascimento" é inválido');
      });
  });

  it('Será validado que não é possível cadastrar um client sem o campo `rendaFamiliar`', async () => {
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
      .post(`${url}/client`, {
        nome: 'João',
        cpf: 458960916,
        dataDeNascimento: '2020-06-01',
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('O campo "renda familiar" é invalido');
      });
  });

  it('Será validado que não é possível cadastrar um client sem o token', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: '',
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/client`, {
        nome: 'João',
        cpf: 458960916,
        dataDeNascimento: '2020-06-01',
        rendaFamiliar: 2000,
      })
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Token Não encontrado');
      });
  });

  it('Será validado que não é possível cadastrar um client com o token inválido', async () => {
    await frisby
      .setup({
        request: {
          headers: {
            Authorization: 'Token Inválido',
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/client`, {
        nome: 'João',
        cpf: 458960916,
        dataDeNascimento: '2020-06-01',
        rendaFamiliar: 2000,
      })
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Token inválido ou expirado');
      });
  });
});
