const { OK } = require('http-status-codes').StatusCodes;

const clientServices = require('../../services/clients');

module.exports = async (req, res, next) => {
  try {
    const clients = await clientServices.getAllClients();

    return res.status(OK).send(clients);
  } catch (error) {
    return next(error);
  }
};
