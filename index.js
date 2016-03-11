const restify = require('restify');

function weatherEndpoint(req, res, next) {
}

const server = restify.createServer();
server.get('/weather', weatherEndpoint);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
