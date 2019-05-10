const db = require('../../services/db/db');


module.exports = async (server) => {
  server.route([
    {
      method: 'GET',
      path: '/groups/{?id}',
      handler: async (request, h) => {
        try {
          const id = request.params.id;
          const groups = await db.getGroups(id);
          return groups
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
    },
    {
      method: 'POST',
      path: '/groups',
      handler: async (request, h) => {
        try {
          const obj = request.payload;
          return await db.addGroup(obj.name);
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
    },
    {
      method: 'DELETE',
      path: '/groups/{id}',
      handler: async (request, h) => {
        const id = request.params.id;
        try {
          return await db.deleteGroup(id);
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
    }
  ]);
}