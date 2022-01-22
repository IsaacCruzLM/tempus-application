const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const PASSWORD_INVALID = {
  message: 'O campo "password" não pode ser vazio',
};

const PASSWORD_REQUIRED = {
  message: 'O campo "password" é necesssário',
};

const EMAIL_INVALID = {
  message: 'O campo "email" não pode ser vazio',
};

const EMAIL_REQUIRED = {
  message: 'O campo "email" é necesssário',
};

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (email === '') return res.status(BAD_REQUEST).send(EMAIL_INVALID);
    if (!email) return res.status(BAD_REQUEST).send(EMAIL_REQUIRED);
    if (password === '') return res.status(BAD_REQUEST).send(PASSWORD_INVALID);
    if (!password) return res.status(BAD_REQUEST).send(PASSWORD_REQUIRED);

    return next();
  } catch (error) {
    return next(error);
  }
};
