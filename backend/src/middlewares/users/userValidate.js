const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const NOME_REQUIRED = {
  message: '"nome" is required',
};

const PASSWORD_REQUIRED = {
  message: '"password" is required',
};

module.exports = async (req, res, next) => {
  try {
    const { nome, password } = req.body;

    if (!nome) return res.status(BAD_REQUEST).send(NOME_REQUIRED);
    if (!password) return res.status(BAD_REQUEST).send(PASSWORD_REQUIRED);

    return next();
  } catch (error) {
    return next(error);
  }
};
