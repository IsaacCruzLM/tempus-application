const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const NAME_REQUIRED = {
  message: '"nome" é necessário',
};

const CPF_REQUIRED = {
  message: '"cpf" é necessário',
};

const BIRTH_DATE_REQUIRED = {
  message: '"data de nascimento" é necessário',
};

const FAMILY_INCOME_REQUIRED = {
  message: '"renda familiar" é necessário',
};

module.exports = async (req, res, next) => {
  try {
    const {
      nome, cpf, dataDeNascimento, rendaFamiliar,
    } = req.body;

    if (!nome) return res.status(BAD_REQUEST).send(NAME_REQUIRED);
    if (!cpf) return res.status(BAD_REQUEST).send(CPF_REQUIRED);
    if (!dataDeNascimento) return res.status(BAD_REQUEST).send(BIRTH_DATE_REQUIRED);
    if (!rendaFamiliar) return res.status(BAD_REQUEST).send(FAMILY_INCOME_REQUIRED);

    return next();
  } catch (error) {
    return next(error);
  }
};
