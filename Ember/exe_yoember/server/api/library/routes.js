'use strict';

let server = require(`${process.cwd()}/server`);
let controllers = require(`./controllers`);
let logger = require(`${process.cwd()}/utils/logger`);

module.exports = [
    {
        method: 'GET',
        path: '/api/libraries',
        handler: controllers.getAllLibraries
    },{
        method: 'GET',
        path: '/api/libraries/{id}',
        handler: controllers.getLibrary
    },{
        method: 'POST',
        path: '/api/libraries',
        handler: controllers.postLibrary
    },{
        method: 'PATCH',
        path: '/api/libraries/{id}',
        handler: controllers.updateLibrary
    },{
        method: 'DELETE',
        path: '/api/libraries/{id}',
        handler: controllers.removeLibrary
    },{
        method: 'GET',
        path: '/api/invitations',
        handler: controllers.getAllInvitations
    },{
        method: 'POST',
        path: '/api/invitations',
        handler: controllers.postInvitation
    },{
        method: 'GET',
        path: '/api/contacts',
        handler: controllers.getAllContacts
    },{
        method: 'POST',
        path: '/api/contacts',
        handler: controllers.postContact
    }
];