'use strict';

let server = require(`${process.cwd()}/server`);
let controllers = require(`./controllers`);
let logger = require(`${process.cwd()}/utils/logger`);

module.exports = [
    // LIBRARIES
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
        method: 'PATCH', // Ember use PATCH in place of PUT
        path: '/api/libraries/{id}',
        handler: controllers.updateLibrary
    },{
        method: 'DELETE',
        path: '/api/libraries/{id}',
        handler: controllers.removeLibrary
    },
    // BOOKS
    // {
    //     method: 'GET',
    //     path: '/api/books',
    //     handler: controllers.getAllBooks
    // },{
    //     method: 'GET',
    //     path: '/api/books/{id}',
    //     handler: controllers.getBook
    // },{
    //     method: 'POST',
    //     path: '/api/books',
    //     handler: controllers.postBook
    // },{
    //     method: 'PATCH', 
    //     path: '/api/books/{id}',
    //     handler: controllers.updateBook
    // },{
    //     method: 'DELETE',
    //     path: '/api/books/{id}',
    //     handler: controllers.removeBook
    // },
    // AUTHORS
    // {
    //     method: 'GET',
    //     path: '/api/authors',
    //     handler: controllers.getAllAuthors
    // },{
    //     method: 'GET',
    //     path: '/api/authors/{id}',
    //     handler: controllers.getAuthor
    // },{
    //     method: 'POST',
    //     path: '/api/authors',
    //     handler: controllers.postAuthor
    // },{
    //     method: 'PATCH',
    //     path: '/api/authors/{id}',
    //     handler: controllers.updateAuthor
    // },{
    //     method: 'DELETE',
    //     path: '/api/authors/{id}',
    //     handler: controllers.removeAuthor
    // },
    // INVITATIONS
    {
        method: 'GET',
        path: '/api/invitations',
        handler: controllers.getAllInvitations
    },{
        method: 'POST',
        path: '/api/invitations',
        handler: controllers.postInvitation
    },
    // CONTACTS
    {
        method: 'GET',
        path: '/api/contacts',
        handler: controllers.getAllContacts
    },{
        method: 'POST',
        path: '/api/contacts',
        handler: controllers.postContact
    }
];