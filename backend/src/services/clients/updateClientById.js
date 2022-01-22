const { Client, User } = require('../../sequelize/models');

module.exports = async ({ nome, dataDeNascimento, rendaFamiliar }, id, userId) => {
  const client = await Client.findByPk(id);
  if (!client) return false;

  if (userId !== client.userId) return false;

  await client.update({ nome, dataDeNascimento, rendaFamiliar });

  const clientUpdated = await Client.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });

  return clientUpdated;
};
