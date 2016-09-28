'use strict';

let logger = require(`${process.cwd()}/utils/logger`);
let utils = require(`${process.cwd()}/utils/utils`)
let model = require('./model');

let Boom = require('boom');

let type = 'book';

exports.getAllBooks = function(req, res){
    logger.log("GET All Authors Controller");
    model.Book.find()
    .then(function(docs){
        logger.log(docs);
        let dataFormatted = [];
        docs.map(function(docFromDb){
            let doc = {
                type: type,
                id: docFromDb._id,
                attributes: docFromDb
            };
            books.push(doc);
        });
        res({data: dataFormatted});
    });
};

exports.postBook = function(req, res){
    logger.log("POST Book Controller");
    let request = {};
    if(req.payload.data)
        request = req.payload.data.attributes;
    let book = new model.Book(request);

    book.save(function(err, data) {
        if(err) {
            logger.warn(err.message);
            res(Boom.badRequest(err.message));
            return;
        }
        let attributes = {
            message: 'Document saved'
        };
        logger.log(data);
        // use a custom function from the utils file to avoid redundancy
        res(utils.formatJson(type, data._id, attributes));
    });
};

exports.getBook = function(req, res) {
    logger.log("GET Book by ID");

    model.Book.findById(req.params.id, 
        function(err, bookFromDb){
            if(err){
                res(utils.resError(type, err));
                logger.warn(err.message);
                return;
            }
            logger.log(bookFromDb);
            res(utils.formatJson(type, bookFromDb._id, bookFromDb));
        }
    );
};

exports.updateBook = function(req, res) {
    logger.log("PUT Book Controller");
    let request = {};
    if(req.payload.data)
        request = req.payload.data.attributes;

    logger.log(request);
    model.Book.findByIdAndUpdate(req.params.id, request,
        function(err, data) {
            if(err) {
                logger.warn(err.message);
                res(Boom.badRequest(err.message));
                return;
            }
            let attributes = {
                message: 'Document updated'
            };
            logger.log(data);
            res(utils.formatJson(type, data._id, attributes));
        }
    );
};

exports.removeBook = function(req, res) {
    logger.log("DELETE Book Controller");

    model.Book.findByIdAndRemove(req.params.id, 
        function(err, data) {
            if(err) {
                logger.warn(err.message);
                res(Boom.badRequest(err.message));
                return;
            }
            let attributes = {
                message: 'Document deleted'
            };
            logger.log(data);
            res(utils.formatJson(type, data._id, attributes));
        }
    );
};