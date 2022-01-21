const { Client } = require('../../sequelize/models');

module.exports = async (client, userId) => {
  const {
    nome, cpf, dataDeNascimento, rendaFamiliar,
  } = client;

  const newClient = {
    nome,
    cpf,
    dataDeNascimento,
    dataDeCadastro: new Date(),
    rendaFamiliar,
    userId,
  };

  const clientSaved = await Client.create(newClient);

  return { clientSaved };
};
