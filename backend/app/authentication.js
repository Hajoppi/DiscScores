const Bcrypt = require('bcrypt');
const db = require('../services/db/db');
const jwtAuth = require('../services/auth');

const auth = module.exports = {};
auth.init = async (server) => {
  server.register(jwtAuth);
  server.auth.strategy('jwt', 'jwt');
  server.auth.default('jwt');
};