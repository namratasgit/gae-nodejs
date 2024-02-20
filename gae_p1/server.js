// Import the 'http' module
var http = require('http');

// Define a function to handle incoming HTTP requests
var handleRequest = function(request, response) {
  // Set the HTTP status code to 200 (OK)
  response.writeHead(200);

  // Write the HTML content to the response
  response.end("<h1>I welcome You all to Cloud Scripting Using Google App Engine(PaaS) Standard</h1>");
}

// Create an HTTP server and pass the request handling function
var www = http.createServer(handleRequest);

// Make the server listen on port 8080
www.listen(8080);

