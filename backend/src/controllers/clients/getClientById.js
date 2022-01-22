const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const clientServices = require('../../services/clients');

const CLIENT_NOT_FOUND = { message: 'Post does not exist' };

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const client = await clientServices.getClientById(id);

    if (!client) return res.status(NOT_FOUND).send(CLIENT_NOT_FOUND);

    return res.status(OK).send(client);
  } catch (error) {
    return next(error);
  }
};
