const { CREATED } = require('http-status-codes').StatusCodes;

const userServices = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { nome, email, password } = req.body;
    const token = await userServices.registerUser(nome, email, password);

    return res.status(CREATED).send({ token });
  } catch (error) {
    return next(error);
  }
};
