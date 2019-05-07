const db = require('../../services/db');
const utils = require('../../services/utils');

module.exports = async (server) => {
  server.route({
    method: 'POST',
    path: '/login',
    handler: async (request, h) => {
      const payload = request.payload;
      try {
        const user = await db.getUser(email);
        if (!user) {
          return h.response('No user').code(401);
        }
        const isValid = await Bcrypt.compare(password, user.password);
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
  
  server.route({
    method: 'GET',
    path: '/account',
    options: {
      auth: 'jwt',
    },
    handler: function(request, h) {
      return "You used a token!";
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