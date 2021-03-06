const db = require('../db/db');
const utils = require('../services/utils');
const Bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');

module.exports = async (server) => {
  server.route({
    method: 'POST',
    path: '/api/login',
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
    path: '/api/register',
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
    path: '/api/account',
    handler: async (request, h) => {
      try {
        return request.auth.credentials;
      } catch(error) {
        console.error(error);
        throw error;
      }
    }
  });
}