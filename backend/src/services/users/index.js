const registerUserFunction = require('./registerUser');
const findUserFunction = require('./findUser');

module.exports = {
  registerUser: (nome, email, password) => registerUserFunction(nome, email, password),
  findUser: (email, password) => findUserFunction(email, password),
};
