const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const NAME_REQUIRED = {
  message: 'O campo "nome" é invalido',
};

const CPF_REQUIRED = {
  message: 'O campo "cpf" é invalido',
};

const BIRTH_DATE_REQUIRED = {
  message: 'O campo "data de nascimento" é inválido',
};

const FAMILY_INCOME_REQUIRED = {
  message: 'O campo "renda familiar" é invalido',
};

module.exports = async (req, res, next) => {
  try {
    const {
      nome, cpf, dataDeNascimento, rendaFamiliar,
    } = req.body;

    const Today = new Date();

    if (!nome || nome.length > 150) return res.status(BAD_REQUEST).send(NAME_REQUIRED);

    if (!cpf || cpf.length > 10 || typeof cpf !== 'number') {
      return res.status(BAD_REQUEST).send(CPF_REQUIRED);
    }

    if (!dataDeNascimento || Number(new Date(dataDeNascimento)) > Number(Today)) {
      return res.status(BAD_REQUEST).send(BIRTH_DATE_REQUIRED);
    }

    if (!rendaFamiliar || typeof rendaFamiliar !== 'number' || rendaFamiliar < 0) {
      return res.status(BAD_REQUEST).send(FAMILY_INCOME_REQUIRED);
    }

    return next();
  } catch (error) {
    return next(error);
  }
};
