'use strict';

const Hapi = require('hapi');
const inert = require('inert');

// Create a Hapi server object
const server = new Hapi.Server();
// add a connection with a host and port
server.connection({ 
    host: 'localhost', 
    port: 3000 
});

// Add some routes
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        // URI encode the name parameter to prevent content injection attacks
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

// add the inert plugin to the server [to manage static pages]
server.register(inert, function(err){
    if (err) {
        throw err;
    }
    // add routes which depends to inert inside the callback to be sure that inert is fully loaded before using it
    server.route({
        method: 'GET',
        path: '/hello',
        handler: function (request, reply) {
            reply.file('./public/index.html');
        }
    });
});

// Start the server
server.start(function(err){
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});