'use strict';

let logger = require(`${process.cwd()}/server/utils/logger`);
// get an instance of the model of our db
let model = require('./model');

exports.get = function(req, res, next) {
    logger.log("Controller GET");
    // find() function of the model thanks to Mongoose [cf : http://mongoosejs.com/docs/queries.html]
    model.find()
    // once the query is done, do the following action thanks to a "promise"
    .then(function(docs){
        // res.json(docs);
        res(docs);
    });
};


exports.post = function(req, res, next) {
    logger.log("Controller POST");
    
    // we create a new model with the data to add to the db
    let resto = new model(req.payload);
    
    // and add it to the db
    resto.save(function(err, data) {
        if (err) {
            res({error_code:1,err_desc:err});
            logger.warn(err);    
            return;
        }
        res({error_code:0,message: 'Document saved'});
        logger.log('Document saved');
    });
};


exports.update = function(req, res, next) {
    logger.log("Controller UPDATE");
    // res({message : "Controller UPDATE"});
    logger.log(req.payload);
    // update the data corresponding to the id with the new one in the request
    model.findByIdAndUpdate(req.payload._id, req.payload, 
        function(err, doc) {
            if (err) {
                res({error_code:1,err_desc:err});
                logger.warn(err);    
                return;
            }
            res({error_code:0,message: 'Document updated'});
            logger.log('Document updated');
            logger.log(doc);
        }
    );
};

exports.deleteById = function(req, res, next) {
    logger.log("Controller DELETE");
    
    // get id from the parameters sent in the url
    model.findByIdAndRemove(req.params.id,
        function(err, doc) {
            if (err) {
                res({error_code:1,err_desc:err});
                logger.warn(err);    
                return;
            }
            res({error_code:0,message: 'Document deleted'});
            logger.log('Document deleted');
        }
    );
}

exports.dynamicSearch = function(req, res, next) {
    logger.log("Controller dynamicSearch");

    let query = req.query;
    console.log(req.query);
    model.find(query)
    .then(function(docs){
        // the result is not empty we have a corresponding result
        if(docs.length) {
            res({error_code:0,data: docs});
        } else {
            res({error_code:1,err_desc:`No result for the query ${JSON.stringify(query)}`});
        }
    });
};