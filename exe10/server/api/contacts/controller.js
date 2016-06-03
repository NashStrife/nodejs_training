let logger = require(`${process.cwd()}/server/utils/logger`);
// get MongoClient method from mongodb. It's a singleton so no () at the end [different than Router() in exe07]
// singleton = instance of a function => we can do only one call
let MongoClient = require('mongodb').MongoClient;

exports.get = function(req, res, next) {
    // Connection URL to the database "companies"
    var url = 'mongodb://localhost:27017/companies';
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        // use custom warning from our logger [cf: utils/logger.js]
        if(err) logger.warn(err);
        
        logger.log("Connected correctly to server");
        
        // define wich collection we want to use inside the db
        let collection = db.collection('companies');
        // try to find all data from the collection
        collection.find({}).toArray(function(err, docs) {
            if(err) logger.warn(err)
            
            logger.log("Data found into collection");
            // send datas in json type
            res.json(docs);
            // close session
            db.close();
        });
    });
}