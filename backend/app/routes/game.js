const db = require('../db/db');


module.exports = async (server) => {
  server.route([
      {
        method: 'POST',
        path: '/game',
        handler: async (request, h) => {
          const payload = request.payload;
          try {
            const result = await db.saveGame(payload);
            return result;
          } catch(error) {
            console.error(error);
            throw error;
          }
        }
      },
      {
        method: 'GET',
        path: '/game',
        handler: async (request, h) => {
          const user = request.auth.credentials.id;
          try {
            const result = db.getPastGames(user);
            console.log(result);
            return result;
          } catch(error) {
            console.error(error);
            throw error;
          }
        }
      }
  ]);
}