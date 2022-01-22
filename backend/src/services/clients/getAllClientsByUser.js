const { Client, User } = require('../../sequelize/models');

module.exports = async (userId) => (
  Client.findAll({
    where: {
      userId,
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  })
);
