import axios from 'axios';

const loginInApplication = async (email, password) => {
  const { data } = await axios.post(
    'http://localhost:3001/user/login',
    { email, password },
  ).catch((error) => error.response);
  return data;
};

const getAllClientsByUser = async (token) => {
  const { data } = await axios.get(
    'http://localhost:3001/client/',
    {
      headers: {
        Authorization: token,
      },
    },
  ).catch((error) => error.response);
  return data;
};

const registerClient = async (token, nome, cpf, dataDeNascimento, rendaFamiliar = 0) => {
  const { data } = await axios.post(
    'http://localhost:3001/client',
    {
      nome, cpf, dataDeNascimento, rendaFamiliar,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  ).catch((error) => error.response);
  return data;
};

const updateClient = async (token, id, nome, cpf, dataDeNascimento, rendaFamiliar = 0) => {
  const { data } = await axios.put(
    `http://localhost:3001/client/${id}`,
    {
      nome, cpf, dataDeNascimento, rendaFamiliar,
    },
    {
      headers: {
        Authorization: token,
      },
    },
  ).catch((error) => error.response);
  return data;
};

const deleteClient = async (token, id) => {
  const { data } = await axios.delete(
    `http://localhost:3001/client/${id}`,
    {
      headers: {
        Authorization: token,
      },
    },
  ).catch((error) => error.response);
  return data;
};

const getClientById = async (token, id) => {
  const { data } = await axios.get(
    `http://localhost:3001/client/${id}`,
    {
      headers: {
        Authorization: token,
      },
    },
  ).catch((error) => error.response);
  return data;
};

export default {
  loginInApplication,
  getAllClientsByUser,
  registerClient,
  deleteClient,
  getClientById,
  updateClient,
};
