'use strict';

const Hapi = require('hapi');
let api = require('./api/api');

let logger = require(`${process.cwd()}/server/utils/logger`);
let config = require(`${process.cwd()}/server/config/config`);
let db = require(`${process.cwd()}/server/utils/db`);

// Create a Hapi server object with a connection to a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 3000 
});

db.config();

if (config.seed) {
    // use the seed module to add some data to the db
    require('./utils/seed');
}

// call multiple routes created in the api module
server.route(api);

// add the inert plugin to the server [to manage static pages]
server.register(require('inert'), function(err){
    if (err) {
        logger.warn(err);
    }
    // add routes which depends to inert inside the callback to be sure that inert is fully loaded before using it
    
    // get acces to the public static folder [images, css,...]
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public' 
            }
        }
    });

    // route to the home page
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file(`${process.cwd()}/public/index.html`);
        }
    });
});

module.exports = server;