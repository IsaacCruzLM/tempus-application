const express = require('express');
const emailValidation = require('../../middlewares/users/emailValidate');
const userValidation = require('../../middlewares/users/userValidate');
const loginValidate = require('../../middlewares/users/loginValidate');

const router = express.Router({ mergeParams: true });

router.post('/', userValidation, emailValidation, require('./registerUser'));
router.post('/login', loginValidate, require('./login'));

module.exports = router;
