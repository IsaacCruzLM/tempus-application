const registerClientFunction = require('./registerClient');
const getAllClientsFunction = require('./getAllClients');
const getClientByIdFunction = require('./getClientById');
const updateClientByIdFunction = require('./updateClientById');
const deleteClientByIdFunction = require('./deleteClientById');

module.exports = {
  registerClient: (client, userId) => registerClientFunction(client, userId),
  getAllClients: () => getAllClientsFunction(),
  getClientById: (id) => getClientByIdFunction(id),
  updateClientById: (info, id, userId) => updateClientByIdFunction(info, id, userId),
  deleteClientById: (id, userId) => deleteClientByIdFunction(id, userId),
};
