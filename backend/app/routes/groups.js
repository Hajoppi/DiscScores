const db = require('../../services/db/db');


module.exports = async (server) => {
  server.route([
    {
      method: 'GET',
      path: '/groups/{id?}',
      handler: async (request, h) => {
        try {
          const id = request.params.id;
          const groups = await db.getGroups(id);
          const mapped = await Promise.all( groups.map( async (group) => {
            const res = await db.getUsersInGroup(group.id);
            group.members = res;
            return group;
          }));
          return mapped;
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
          return await db.addGroup(obj.group_name);
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
    },
    {
      method: 'POST',
      path: '/group/user',
      handler: async (request, h) => {
        const id = request.payload.id;
        console.log(request.payload);
        const player = request.auth.credentials;
        try {
          const result = await db.addUserToGroup(player.id,id);
          return {group : result.groups_id, user: player};
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
    },
    {
      method: 'DELETE',
      path: '/group/user/{id}',
      handler: async (request, h) => {
        const id = request.params.id;
        const player = request.auth.credentials.id;
        try {
          return await db.deleteUserFromGroup(player, id);
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
    }
  ]);
}