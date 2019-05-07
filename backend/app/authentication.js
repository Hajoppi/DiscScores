const AuthJwt = require('hapi-auth-jwt2');
const Bcrypt = require('bcrypt');
const db = require('../services/db');

const auth = module.exports = {};

const validate = async function(decoded, request) {
  const user = await db.getUserById(decoded.id);
  if (!user) {
    return { isValid: false };
  }
  else {
    return { isValid: true };
  }
}

auth.init = async (server) => {
  await server.register(authJwt);
  jwtOptions = {
    key: process.env.SECRET_KEY,
    validate: validate,
    verifyOptions: { algorithms: ['HS256']}
  };
  server.auth.strategy('jwt', 'jwt', jwtOptions);
};