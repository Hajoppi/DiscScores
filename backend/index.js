'use strict';

const Hapi = require('hapi');
const db = require('./services/db');

const server = Hapi.server({
  port: process.env.PORT || 3001,
  host: 'localhost',
  routes: {
    cors: true
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});


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
      return await db.removeCourse(id);
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

init();
