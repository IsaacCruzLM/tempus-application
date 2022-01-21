const { CREATED } = require('http-status-codes').StatusCodes;

const clientServices = require('../../services/clients');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.user.dataValues;
    const {
      nome, cpf, dataDeNascimento, rendaFamiliar,
    } = req.body;

    const response = await clientServices.registerClient(
      {
        nome, cpf, dataDeNascimento, rendaFamiliar,
      },
      id,
    );

    return res.status(CREATED).send(response.blogPost);
  } catch (error) {
    return next(error);
  }
};
