const db = require('../db/db');


module.exports = async (server) => {
  // Create new course
  server.route({
    method: 'POST',
    path: '/api/courses',
    handler: async (request, h) => {
      try {
        const courseObj = request.payload;
        console.log(courseObj);
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
    path: '/api/courses/{id?}',
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
    path: '/api/courses/{id}',
    handler: async(request, h) => {
      try {
        const id = request.params.id;
        const result = await db.deleteCourse(id);
        console.log("Deleted course with id: " + result);
        return result;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  });
  
  server.route({
    method: 'PUT',
    path: '/api/courses/{id}',
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