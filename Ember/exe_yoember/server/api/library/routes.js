'use strict';

let server = require(`${process.cwd()}/server`);
let controllers = require(`./controllers`);
let logger = require(`${process.cwd()}/utils/logger`);

module.exports = [
    {
        method: 'GET',
        path: '/api/invitations',
        handler: controllers.getAllInvitations
    },
    {
        method: 'POST',
        path: '/api/invitations',
        handler: controllers.postInvitation
    },
    {
        method: 'GET',
        path: '/api/libraries',
        handler: controllers.getLibrary
    },
    {
        method: 'POST',
        path: '/api/libraries',
        handler: controllers.postLibrary
    }
];