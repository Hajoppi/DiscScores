

module.exports = async (server) => {
  server.route({
    method: 'GET',
    path: '/login',
    options: {
      auth: 'basic'
    },
    handler: function (request, h) {
      if (request.auth.isAuthenticated) {
        request.cookieAuth.set(request.auth.credentials);
        console.log(request.auth);
        return 'Hello ' + request.auth.credentials.profile.username;
      }
      h.response('unauthenticated').code(401);
    }
  });
  server.route({
    method: 'GET',
    path: '/account',
    options: {
      auth: 'ds-cookie',
    },
    handler: function(request, h) {
      return request.auth.credentials.profile;
    }
  });

  server.route({
    method: 'GET',
    path: '/logout',
    handler: function(request, h) {
      request.cookieAuth.clear();
      return "Logged out"
    }
  });
}