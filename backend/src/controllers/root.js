const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/user', require('./users/router'));
root.use('/client', require('./clients/router'));

module.exports = root;
