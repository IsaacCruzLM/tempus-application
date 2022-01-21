const { BAD_REQUEST, NO_CONTENT } = require('http-status-codes').StatusCodes;

const clientServices = require('../../services/clients');

const DELETE_DENIED = { message: 'Post does not exist or Unauthorized user' };

module.exports = async (req, res, next) => {
  try {
    const { clientId } = req.params;
    const { id } = req.user.dataValues;

    const response = await clientServices.deleteClientById(clientId, id);

    if (!response) return res.status(BAD_REQUEST).send(DELETE_DENIED);

    return res.status(NO_CONTENT).end();
  } catch (error) {
    return next(error);
  }
};
