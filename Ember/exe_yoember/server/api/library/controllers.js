'use strict';

let logger = require(`${process.cwd()}/utils/logger`);
let utils = require(`${process.cwd()}/utils/utils`)
let model = require('./model');

exports.getAllLibraries = function(req, res){
    logger.log("GET All Library Controller");
    model.find()
    .then(function(docs){
        logger.log(docs);
        let libraries = [];

        docs.map(function(libraryFromDb){
            let library = {
                type: "library",
                id: libraryFromDb._id,
                attributes: libraryFromDb
            };
            libraries.push(library);
        });
        res({data: libraries});
    });
};

exports.postLibrary = function(req, res){
    logger.log("POST Library Controller");
    let request = {};
    if(req.payload.data)
        request = req.payload.data.attributes;
    let library = new model(request);

    library.save(function(err, data) {
        if(err) {
            res(utils.resError('library', err));
            logger.warn(err.message);
            return;
        }
        let attributes = {
            error: 0,
            message: 'Document saved'
        };
        logger.log(data);
        // use a custom function from the utils file to avoid redundancy
        res(utils.formatJson('library', data._id, attributes));
    });
};

exports.getLibrary = function(req, res) {
    logger.log("GET Library by ID");

    model.findById(req.params.id, 
        function(err, libraryFromDb){
            if(err){
                res(utils.resError('library', err));
                logger.warn(err.message);
                return;
            }
            logger.log(libraryFromDb);
            res(utils.formatJson('library', libraryFromDb._id, libraryFromDb));
        }
    );
};

exports.updateLibrary = function(req, res) {
    logger.log("PUT Library Controller");
    let request = {};
    if(req.payload.data)
        request = req.payload.data.attributes;

    logger.log(request);
    model.findByIdAndUpdate(req.params.id, request,
        function(err, data) {
            if(err) {
                res(utils.resError('library', err));
                logger.warn(err.message);
                return;
            }
            let attributes = {
                error: 0,
                message: 'Document updated'
            };
            logger.log(data);
            res(utils.formatJson('library', data._id, attributes));
        }
    );
};

exports.removeLibrary = function(req, res) {
    logger.log("DELETE Library Controller");

    model.findByIdAndRemove(req.params.id, 
        function(err, data) {
            if(err) {
                res(utils.resError('library', err));
                logger.warn(err.message);
                return;
            }
            let attributes = {
                error: 0,
                message: 'Document deleted'
            };
            logger.log(data);
            res(utils.formatJson('library', data._id, attributes));
        }
    );
};

exports.getAllInvitations = function(req, res) {
    logger.log('GET All Invitations Controller');
    model.Invitation.find()
    .then(function(docs){
        console.log(docs);
        let invitations = [];
        // manip to edit the JSON format to fit with the format needed by Ember
        docs.map(function(invitFromDb){
            let invitation = {
                type: "invitations",
                id: invitFromDb._id,
                attributes: invitFromDb
            };
            invitations.push(invitation);
        });
        res({data: invitations});
    });
};

exports.postInvitation = function(req, res){
    logger.log("POST Invitation Controller");
    // logger.log(req.payload.data.attributes);
    let request = {};
    if(req.payload.data)
        request = req.payload.data.attributes;

    let invitation = new model.Invitation(request);

    invitation.save(function(err, data) {
        if(err) {
            res({ 
                data: {
                    type: "invitations",
                    id: 0,
                    attributes: {
                        error: 1,
                        message: err.message
                    }
                }
            });
            logger.warn(err.message);
            return;
        }
        // res({error: 0, data: {message: 'Document saved'}});
        logger.log(data);
        res({
            data: {
                type: "invitations",
                id: data._id,
                attributes: {
                    error: 0,
                    message: 'Document saved'
                }
            }
        });
    });
};

exports.getAllContacts = function(req, res) {
    logger.log('GET All Contacts Controller');
    // res({message: 'GET All Contacts Controller'});
    model.Contact.find()
    .then(function(docs){
        logger.log(docs);
        let contacts = [];

        docs.map(function(contactFromDb){
            let contact = {
                type: "contact",
                id: contactFromDb._id,
                attributes: contactFromDb
            };
            contacts.push(contact);
        });
        res({data: contacts});
    });
};

exports.postContact = function(req, res) {
    logger.log('POST Contact Controller');
    // res({message: 'POST Contact Controller'});
    let request = {};
    if(req.payload.data)
        request = req.payload.data.attributes;

    let contact = new model.Contact(request);

    contact.save(function(err, data) {
        if(err) {
            res({ 
                data: {
                    type: "contact",
                    id: 0,
                    attributes: {
                        error: 1,
                        message: err.message
                    }
                }
            });
            logger.warn(err.message);
            return;
        }
        logger.log(data);
        res({
            data: {
                type: "contact",
                id: data._id,
                attributes: {
                    error: 0,
                    message: 'Document saved'
                }
            }
        });
    });
};