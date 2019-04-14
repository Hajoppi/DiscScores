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
  console.log(err);
  process.exit(1);
});


// Create new course
server.route({
  method: 'POST',
  path: '/courses',
  handler: async (request, reply) => {
    try {
      const courseObj = request.payload;
      await db.createCourse(courseObj);
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }
});


// Fetch the signups
server.route({
  method: 'GET',
  path: '/courses',
  handler: async (request, h) => {
    try {
      return await db.getCourses();
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
});

init();
