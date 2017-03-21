const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8181
});

server.register(Inert, () => {});

server.route([
  {
    method: 'GET',
    path: '/{publicFiles*}',
    handler: {
      directory: {
        path: path.join(__dirname, '/public')
      }
    }
  },
  {
    method: 'GET',
    path: '/files/{files*}',
    handler: {
      directory: {
        path: path.join(__dirname, '/public/lib/files')
      }
    }
  }
]);

server.ext('onPreResponse', (request, reply) => {
  const response = request.response;

  if (response.isBoom && response.output.statusCode == 404) {
    return reply.file(path.join(__dirname, '/public/404.html')).code(404);
  }

  return reply.continue();
});

server.start((error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on ${server.info.uri}`);
});
