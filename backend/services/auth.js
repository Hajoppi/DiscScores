const internals = {};
const jwtAuth = {
  name: 'jwt',
  version: '1.0.0',
  register: async (server, options) => {
    server.auth.scheme('jwt', internals.implementation);
  }
}

internals.implementation = (server, options) => {
  return {
    authenticate: (request, reply) => {
      var token
    }
  }
}