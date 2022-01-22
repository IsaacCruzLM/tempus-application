const jwt = require('jsonwebtoken');
require('dotenv').config();

const API_SECRET = process.env.JWT_SECRET;

const JWT_CONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);

    return decoded.data;
  } catch (err) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
