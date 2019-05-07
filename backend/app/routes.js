import { createCourse, getCourses, deleteCourse, updateCourse } from '../services/db';

const routes = module.exports = {};

export async function init(server) {
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
  
  // Create new course
  server.route({
    method: 'POST',
    path: '/courses',
    handler: async (request, h) => {
      try {
        const courseObj = request.payload;
        return await createCourse(courseObj);
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
        return await getCourses(request.params.id);
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
        return await deleteCourse(id);
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
        return await updateCourse(id, courseObj);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  });
}