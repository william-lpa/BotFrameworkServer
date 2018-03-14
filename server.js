var http = require('http');
const app = require('./app')

var server = http.createServer(app);

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
