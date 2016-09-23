let Library = require('../api/library/model');
let logger = require(`./logger`);
let _ = require('lodash');

let libraries = [
    {
        "name": "Bosco and Sons",
        "address": "674 Herman Heights, Ariannaton",
        "phone": "220.670.5411"
    },{
        "name": "Leannon LLC",
        "address": "763 Electa Parkway, New Eveline",
        "phone": "305-686-4919"
    },{
        "name": "Quitzon Inc",
        "address": "6881 Katrine Creek, North Darron",
        "phone": "(061) 921-7075"
    }
];

let invitations = [
    {
        "email": "monmail@gmail.com"
    },
    {
        "email": "toto@gmail.com"
    },
    {
        "email": "tata@gmail.com"
    }
];

var cleanDB = function() {
    logger.log('--- SEED : Cleaning the DB');
    var cleanPromises = [Library]
        .map(function(model) {
            var remove = model.remove().exec();
            remove.invitations = model.Invitation.remove().exec();
            return remove;
        });
    return Promise.all(cleanPromises);
};

var createDoc = function(model, doc) {
    logger.log("--- SEED : Creating Doc");
    return new Promise(function(resolve, reject) {
        new model(doc).save(function(err, saved) {
            return err ? reject(err) : resolve(saved);
        });
    });
};

var createLibraries = function(data) {
    logger.log("--- SEED : Creating Library");
    var promises = libraries.map(function(library) {
        return createDoc(Library, library);
    });

    return Promise.all(promises)
        .then(function(libraries) {
            return _.merge({
                libraries: libraries
            }, data || {});
        });
};

var createInvitations = function(data) {
    logger.log("--- SEED : Creating Invitation");
    var promises = invitations.map(function(invitation) {
        return createDoc(Library.Invitation, invitation);
    });

    return Promise.all(promises)
        .then(function(invitations) {
            return _.merge({
                invitations: invitations
            }, data || {});
        });
};

cleanDB()
    .then(createLibraries)
    .then(logger.log.bind(logger))
    .then(createInvitations)
    .then(logger.log.bind(logger));