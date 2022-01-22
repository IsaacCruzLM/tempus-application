const registerClientFunction = require('./registerClient');
const getAllClientsFunction = require('./getAllClients');
const getClientByIdFunction = require('./getClientById');
const updateClientByIdFunction = require('./updateClientById');
const deleteClientByIdFunction = require('./deleteClientById');

module.exports = {
  registerClient: (client, userId) => registerClientFunction(client, userId),
  getAllClients: (userId) => getAllClientsFunction(userId),
  getClientById: (id) => getClientByIdFunction(id),
  updateClientById: (update, id, userId) => updateClientByIdFunction(update, id, userId),
  deleteClientById: (id, userId) => deleteClientByIdFunction(id, userId),
};
