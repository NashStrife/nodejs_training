'use strict';

let model = require('./model');
let logger = require(`${process.cwd()}/utils/logger`);

exports.get = function(req, res) {
    logger.log("GET restos controller");

    model.find()
    .then(function(data){
        res(data);
    });
};

exports.post = function(req, res) {
    logger.log("POST resto controller");

    //create a new model with data from the request
    let resto = new model(req.payload);

    resto.save(function(err, data) {
        if(err) {
            res({error_code: 1, err_desc: err});
            logger.warn(err);
            return;
        }
        res({error_code: 0, message: 'Resto saved'});
    });
};

exports.update = function(req, res) {
    logger.log("UPDATE resto controller");

    model.findByIdAndUpdate(req.payload._id, req.payload,
        function(err, data){
            if(err) {
                res({error_code: 1, err_desc: err});
                logger.warn(err);
                return;
            }
            res({error_code: 0, message: 'Resto updated'});
            logger.log(data);
        }
    );
};

exports.deleteById = function(req, res) {
    logger.log("DELETE resto controller");

    model.findByIdAndRemove(req.params.id,
        function(err, data) {
            if (err) {
                res({error_code:1,err_desc:err});
                logger.warn(err);    
                return;
            }
            res({error_code:0,message: 'Resto deleted'});
            logger.log(data);
        }
    );
};

exports.dynamicSearch = function(req, res) {
    logger.log("dynamicSearch resto controller");

    let query = req.query;
    console.log(req.query);
    model.find(query)
    .then(function(data){
        // we have a corresponding result
        if(data.length) {
            res({error_code:0,data: data});
        } else {
            res({error_code:1,err_desc:`No result for the query ${JSON.stringify(query)}`});
        }
    });
};