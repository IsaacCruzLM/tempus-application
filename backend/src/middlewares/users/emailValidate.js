const { BAD_REQUEST, CONFLICT } = require('http-status-codes').StatusCodes;

const { User } = require('../../sequelize/models');

const validateEmail = (email) => {
  const emailRegexp = /\S+@\S+\.\S+/;
  return emailRegexp.test(email);
};

const EMAIL_ALREAD_EXISTS = {
  message: 'Usuário já registrado',
};

const EMAIL_INVALID = {
  message: 'Por favor, insira um "email" válido',
};

const EMAIL_REQUIRED = {
  message: '"email" é necessário',
};

module.exports = async (req, res, next) => {
  try {
    const { email } = req.body;

    const users = await User.findAll();
    const emails = users.map((user) => user.email);

    if (!email) return res.status(BAD_REQUEST).send(EMAIL_REQUIRED);
    if (emails.includes(email)) return res.status(CONFLICT).send(EMAIL_ALREAD_EXISTS);
    if (!validateEmail(email)) return res.status(BAD_REQUEST).send(EMAIL_INVALID);

    return next();
  } catch (error) {
    return next(error);
  }
};
