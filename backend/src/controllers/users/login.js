const { BAD_REQUEST, OK } = require('http-status-codes').StatusCodes;

const userServices = require('../../services/users');

const INVALID_FIELDS = {
  message: 'Email ou senha inválida',
};

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await userServices.findUser(email, password);

    if (!token) return res.status(BAD_REQUEST).send(INVALID_FIELDS);

    return res.status(OK).send({ token });
  } catch (err) {
    return next(err);
  }
};
