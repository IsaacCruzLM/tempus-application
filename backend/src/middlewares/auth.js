const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const authService = require('../services/auth');

const WITHOUT_JWT = { message: 'Token Não encontrado' };
const INVALID_JWT = { message: 'Token inválido ou expirado' };

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(UNAUTHORIZED).send(WITHOUT_JWT);
    }

    const user = authService.verifyToken(authorization);
    if (!user) {
      return res.status(UNAUTHORIZED).send(INVALID_JWT);
    }

    req.user = user;

    return next();
  } catch (error) {
    return next(error);
  }
};
