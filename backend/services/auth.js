const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const db = require('./db');
const internals = {};

module.exports = {
  name: 'jwt',
  version: '1.0.0',
  register: async (server, options) => {
    server.auth.scheme('jwt', internals.implementation);
  }
}

internals.implementation = (server, options) => {
  return {
    authenticate: async (request, h) => {
      const token = request.headers.authorization;
      const secret = process.env.SECRET_KEY;
      const tokenType = 'Token'
      if (!token) {
        throw Boom.unauthorized('No login');
      }
      const strippedToken = token.split(" ")[1];
      let decoded;
      try {
        decoded = jwt.verify(strippedToken, secret);
        console.log(decoded);
        const user = await db.getUserById(decoded.id);
        if (user !== undefined) {
          return h.authenticated({
            credentials: user,
            artifacts: token
          });
        }
        throw Boom.unauthorized('No user');
      } catch (error) {
        console.error(error);
        if(error.name === "TokenExpiredError") {
          throw Boom.unauthorized('Token expired')
        } else if (error.isBoom) {
          throw Boom.unauthorized('Invalid user');
        } else {
          throw Boom.unauthorized('Invalid token');
        }
      }
      
    }
  }
}