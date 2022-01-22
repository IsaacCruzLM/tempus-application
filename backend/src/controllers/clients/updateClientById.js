const { BAD_REQUEST, OK } = require('http-status-codes').StatusCodes;

const clientServices = require('../../services/clients');

const UPDATE_DENIED = { message: 'Post not found or Unauthorized user' };

module.exports = async (req, res, next) => {
  try {
    const { clientId } = req.params;
    const { id } = req.user.dataValues;
    const {
      nome, cpf, dataDeNascimento, rendaFamiliar,
    } = req.body;

    const client = await clientServices.updateClientById(
      {
        nome, cpf, dataDeNascimento, rendaFamiliar,
      },
      clientId,
      id,
    );

    if (!client) return res.status(BAD_REQUEST).send(UPDATE_DENIED);

    return res.status(OK).send(client);
  } catch (error) {
    return next(error);
  }
};
