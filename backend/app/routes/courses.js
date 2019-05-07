const db = require('../../services/db');


module.exports = async (server) => {
  // Create new course
  server.route({
    method: 'POST',
    path: '/courses',
    handler: async (request, h) => {
      try {
        const courseObj = request.payload;
        return await db.createCourse(courseObj);
      }
      catch (error) {
        console.error(error);
        throw error;
      }
    }
  });
  
  // Fetch the signups
  server.route({
    method: 'GET',
    path: '/courses/{id?}',
    handler: async (request, h) => {
      try {
        return await db.getCourses(request.params.id);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  });
  
  server.route({
    method: 'DELETE',
    path: '/courses/{id}',
    handler: async(request, h) => {
      try {
        const id = request.params.id;
        return await db.deleteCourse(id);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  });
  
  server.route({
    method: 'PUT',
    path: '/courses/{id}',
    handler: async(request, h) => {
      try {
        const courseObj = request.payload;
        const id = request.params.id;
        return await db.updateCourse(id, courseObj);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  });
}