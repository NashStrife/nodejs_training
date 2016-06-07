let logger = require(`${process.cwd()}/server/utils/logger`);
// get an instance of the model of our db
let model = require('./model');

exports.get = function(req, res, next) {
    logger.log("controller get")
    // find() function of the model thanks to Mongoose [cf : http://mongoosejs.com/docs/queries.html]
    model.find()
    // once the query is done, do the following action thanks to a "promise"
    .then(function(docs){
        res.json(docs);
    });
};

exports.getOne = function(req, res, next) {
    logger.log("controller getOne");

    model.findById(req.params.id,
    // findById doesn't have a promise so we use a callback to manage errors
        function(err, doc) {
            if (err) logger.warn(err);
            
            res.json(doc);
        }
    );
}

exports.post = function(req, res, next) {
    logger.log("controller post");
    
    // we create a new model with the data to add to the db
    let resto = new model(req.body);
    let message = {
        message: 'Document saved'
    };
    if(model.findOne(req.body.address, 'address')){
        message.message = 'this address already exist'
    } else {
        // and add it to the db
        resto.save(function(err) {
            if (err) {
                message = err;
            }
        });
    }
    res.json(message);
};

exports.update = function(req, res, next) {
    logger.log("controller Update")
    
    // update the data corresponding to the id with the new one in the request
    model.findByIdAndUpdate(req.body._id, req.body, 
        function(err, doc) {
            let message = {
                message: 'Document upated'
            };
            if (err) {
                message = err;
            }
            res.json(message);
        }
    );
};

exports.deleteById = function(req, res, next) {
    logger.log("controller deleteById");
    
    // get id from the parameters sent in the url
    model.findByIdAndRemove(req.params.id,
        function(err, doc) {
            let message = {
                message: 'Document removed'
            };
            if (err) {
                message = err;
            }
            res.json(message);
        }
    );
}