const AuthCookie = require('@hapi/cookie');
const AuthBasic = require('@hapi/basic');
const Bcrypt = require('bcrypt');
const db = require('../services/db');

const auth = module.exports = {};

const validate = async (request, username, password) => {
  const user = await db.getUser(user);
  if (!user) {
    return { credentials: null, isValid: false};
  }

  const isValid = await Bcrypt.compare(password, user.password);
  const credentials = {id: user.id, name: user.name };
}

auth.init = async (server) => {
  await server.register(Bell);
  await server.register(AuthCookie);

  const authCookieOptions = {
      cookie: {
        //password will not be in production :D
        password: '112341234123412341234123412341234', //Password used for encryption.
        name:'ds-cookie', // Name of cookie to set
        isSecure: false
      },
  };

  server.auth.strategy('simple', 'basic', { validate });
  server.auth.strategy('ds-cookie', 'cookie', authCookieOptions);
  //server.auth.default('ds-cookie');
};