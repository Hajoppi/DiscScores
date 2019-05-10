const db = require('../../services/db/db');
const utils = require('../../services/utils');
const Bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');

module.exports = async (server) => {
  server.route({
    method: 'POST',
    path: '/login',
    options: {
      auth: false,
    },
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
          return { id_token: utils.createToken(user)};
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

  server.route({
    method: 'POST',
    path: '/register',
    options: {
      auth: false,
    },
    handler: async (request, h) => {
      const obj = request.payload;
      try {
        const user = await db.createUser(obj);
        return { id_token: utils.createToken(user)}; 
      } catch (error) {
        //Email was not unique
        if (error.code === '23505') {
          throw Boom.conflict('Email already in use');
        }
        //Fields were incorrect
        if(error.code === '23502') {
          throw Boom.badData('Fields were not correct');
        }
        console.error(error);
        throw error;
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/players',
    handler: async (request, h) => {
      const result = await db.getUser();
      const user = request.auth.credentials;
      return `Hello ${user.username}`;
    }
  });
}