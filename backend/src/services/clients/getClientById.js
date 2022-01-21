const { Client, User } = require('../../sequelize/models');

module.exports = async (id) => (
  Client.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  })
);
