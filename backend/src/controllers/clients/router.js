const express = require('express');
const auth = require('../../middlewares/auth');
const clientValidate = require('../../middlewares/clients/clientValidate');
const cpfValidate = require('../../middlewares/clients/cpfValidate');

const router = express.Router({ mergeParams: true });

router.post('/', auth, clientValidate, cpfValidate, require('./registerClient'));
router.get('/:id', auth, require('./getClientById'));
router.get('/', auth, require('./getAllClients'));
router.put('/:clientId', auth, clientValidate, require('./updateClientById'));
router.delete('/:clientId', auth, require('./deleteClientById'));

module.exports = router;
