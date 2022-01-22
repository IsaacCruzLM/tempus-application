const { User } = require('../../sequelize/models');
const authService = require('../auth');

module.exports = async (email, password) => {
  const userFound = await User.findOne({ where: { email } });

  if (!userFound || userFound.password !== password) return false;

  const { password: _password, ...userWithoutPassword } = userFound;

  const token = authService.generateToken(userWithoutPassword);

  return token;
};
