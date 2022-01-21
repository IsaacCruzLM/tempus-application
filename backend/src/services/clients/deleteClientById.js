const { Client } = require('../../sequelize/models');

module.exports = async (id, userId) => {
  const client = await Client.findByPk(id);
  if (!client) return false;

  if (userId !== client.userId) return false;

  return client.destroy({
    where: {
      id,
    },
  });
};
