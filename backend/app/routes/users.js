const db = require('../../services/db');
const utils = require('../../services/utils');
const Bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');

module.exports = async (server) => {
  server.route({
    method: 'POST',
    path: '/login',
    handler: async (request, h) => {
      const payload = request.payload;
      try {
        const user = await db.getUser(payload.email);
        if (!user) {
          return h.response('No user').code(401);
        }
        console.log(user);
        const isValid = await Bcrypt.compare(payload.password, user.password);
        if (isValid) {
          return utils.createToken(user);
        }
        else {
          return h.response('unauthenticated').code(401);
        }  
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  });
  const validate = async (request, h) => {
    const token = request.headers.authorization;
    try {
      return utils.verifyToken(token);
    } catch (error) {
      console.error(error);
      if(error.name === "TokenExpiredError") {
        throw Boom.unauthorized('Token expired')
      } else {
        throw Boom.unauthorized('invalid token');
      }
    }
  }
  server.route({
    method: 'GET',
    path: '/account',
    config: {
      pre: [
        { method: validate, assign: 'user' }
      ]
    },
    handler: async (request, h) => {
      console.log(request.pre.user);
      const user = await db.getUserById(user.id);
      return `Hello ${user.username}`;
    }
  });

  server.route({
    method: 'POST',
    path: '/register',
    handler: async (request, h) => {
      const obj = request.payload;
      try {
        const user = await db.createUser(obj);
        return { id_token: utils.createToken(user)}; 
      } catch (err) {
        console.error(err);
        throw err;
      }
    }
  })
}