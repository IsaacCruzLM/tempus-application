const { INTERNAL_SERVER_ERROR } = require('http-status-codes').StatusCodes;

module.exports = (err, req, res) => {
  console.error(err);
  res.status(INTERNAL_SERVER_ERROR).end();
};
