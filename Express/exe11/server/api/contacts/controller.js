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
    let company = new model(req.body);
    // and add it to the db
    company.save(function(err) {
        // handleError stop the application and sent an error msg while logger.log just sent an error msg
        if (err) return handleError(err);
        
        res.json({
            'message': 'data was saved'
        });
    });
};

exports.update = function(req, res, next) {
    logger.log("controller Update")
    
    // update the data corresponding to the id with the new one in the request
    model.findByIdAndUpdate(req.body._id, req.body, 
        function(err, doc) {
            if (err) logger.warn(err);
            
            res.json({'message':'document updated'});
        }
    );
};

exports.deleteById = function(req, res, next) {
    logger.log("controller deleteById");
    
    // get id from the parameters sent in the url
    model.findByIdAndRemove(req.params.id,
        function(err, doc) {
            if (err) logger.warn(err);
            
            res.json({'message':'document removed'});
        }
    );
}