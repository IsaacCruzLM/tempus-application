const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const clientServices = require('../../services/clients');

const CPF_ALREADY_EXISTS = {
  message: 'Este "cpf" já está cadastrado',
};

module.exports = async (req, res, next) => {
  try {
    const { cpf } = req.body;

    const currentCPFs = (await clientServices.getClients()).map((client) => client.cpf);

    const cpfAlreadyExists = currentCPFs.includes(cpf);

    if (cpfAlreadyExists) return res.status(BAD_REQUEST).send(CPF_ALREADY_EXISTS);

    return next();
  } catch (error) {
    return next(error);
  }
};
