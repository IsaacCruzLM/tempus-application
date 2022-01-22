const { OK } = require('http-status-codes').StatusCodes;

const clientServices = require('../../services/clients');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.user.dataValues;
    const clients = await clientServices.getAllClientsByUser(id);

    return res.status(OK).send(clients);
  } catch (error) {
    return next(error);
  }
};
