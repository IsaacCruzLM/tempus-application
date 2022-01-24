const { Client, User } = require('../../sequelize/models');

module.exports = async () => (
  Client.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  })
);
