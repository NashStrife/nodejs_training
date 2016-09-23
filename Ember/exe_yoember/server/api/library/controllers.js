'use strict';

let logger = require(`${process.cwd()}/utils/logger`);
let model = require('./model');

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
    let request = req.payload.data.attributes;
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

exports.getLibrary = function(req, res){
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
    let request = req.payload.data.attributes;
    let library = new model(request);

    library.save(function(err, data) {
        if(err) {
            res({ 
                data: {
                    type: "library",
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
                type: "library",
                id: data._id,
                attributes: {
                    error: 0,
                    message: 'Document saved'
                }
            }
        });
    });
};