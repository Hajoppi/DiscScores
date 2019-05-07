'use strict';

const Hapi = require('hapi');
const auth = require('./app/authentication');

const server = Hapi.server({
  port: process.env.PORT || 3001,
  host: 'localhost',
  routes: {
    cors: true
  }
});

const init = async () => {
  await auth.init(server);
  await require('./app/routes/users')(server);
  await require('./app/routes/courses')(server);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});


init();
