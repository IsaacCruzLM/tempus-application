const { User } = require('../../sequelize/models');
const authService = require('../auth');

module.exports = async (nome, email, password) => {
  const newUser = {
    nome,
    email,
    password,
  };

  await User.create(newUser);

  const { password: _password, ...userWithoutPassword } = newUser;

  const token = authService.generateToken(userWithoutPassword);

  return token;
};
