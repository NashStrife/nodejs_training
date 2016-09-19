'use strict';

let logger = require(`${process.cwd()}/server/utils/logger`);
// get an instance of the model of our db
let model = require('./model');

exports.get = function(req, res, next) {
    logger.log("Controller GET");
    // res({message : "Controller GET"});
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
    // res({message : "Controller POST"});
    
    // we create a new model with the data to add to the db
    let resto = new model(req.body);
    
    // and add it to the db
    resto.save(function(err, data) {
        let message = {
            message: 'Document saved',
            success : true
        };
        if (err) {
            message.message = err;
            message.success = false;
        }
        res(message);
    });
};


exports.update = function(req, res, next) {
    logger.log("Controller UPDATE");
    res({message : "Controller UPDATE"});
    
    // // update the data corresponding to the id with the new one in the request
    // model.findByIdAndUpdate(req.body._id, req.body, 
    //     function(err, doc) {
    //         let message = {
    //             message: 'Document upated',
    //             success : true
    //         };
    //         if (err) {
    //             message.message = err;
    //             message.success = false;
    //         }
    //         res.json(message);
    //     }
    // );
};

exports.deleteById = function(req, res, next) {
    logger.log("Controller DELETE");
    res({message : "Controller DELETE"});
    
    // // get id from the parameters sent in the url
    // model.findByIdAndRemove(req.params.id,
    //     function(err, doc) {
    //         let message = {
    //             message: 'Document removed',
    //             success : true
    //         };
    //         if (err) {
    //             message.message = err;
    //             message.success = false;
    //         }
    //         res.json(message);
    //     }
    // );
}

exports.dynamicSearch = function(req, res, next) {
    logger.log("Controller dynamicSearch");
    res({message : "Controller dynamicSearch"});

    // let query = req.query;
    // console.log(req.query);
    // model.find(query)
    // .then(function(docs){
    //     // the result is not empty we have a corresponding result
    //     if(docs.length) {
    //         res.json(docs);
    //     } else {
    //         res.json({message:`No result for the query ${JSON.stringify(query)}`});
    //     }
    // });
};