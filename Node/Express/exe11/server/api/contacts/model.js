let mongoose = require('mongoose');

// creation of the model of the db
let model = function() {
    // new Schema with definition of the data
    let schema = mongoose.Schema({
        name: String,
        address: {
            street: String,
            number: Number,
            cp: Number,
            town: String,
            country: String
        },
        finacial_data: {
            turnover: Number,
            employees: Number
        },
        creation_year: Number
    });
    // we return the schema called "company" with informations of the schema for the collection "companies" 
    return mongoose.model('company', schema,'companies');
};

// export of the model like a singleton [export an instance of the model] so be carefull of the ()
module.exports = new model();