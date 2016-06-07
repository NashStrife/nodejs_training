let mongoose = require('mongoose');
let validate = require('mongoose-validator');

// define some condition for one validator thx to mongoose-validator
let stringValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: '{VALUE} should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];

let numberValidator = [
    validate({
        validator : "isNumeric",
        message : "{VALUE} should be a numeric value"
    })
];

let dateValidator = [
    validate({
        validator : "isDate",
        message : "Date should be in a Date format"
    })
];

let quoteValidator = [
    validate({
        validator : "isNumeric",
        message : "{VALUE} should be a numeric value"
    }),
    validate({
        validator: 'isLength',
        arguments: [0, 5],
        message: '{VALUE} should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];

let urlValidator = [
    validate({
        validator : "isURL",
        message : "The url is not valid"
    })
];

// creation of the model of the db
let restoModel = function() {
    // new Schema with definition of the data
    let schema = mongoose.Schema({
        name : {
            type: String,
            required: true,
            validate: stringValidator
        },
        address : {
            street: {
                type : String,
                required : true,
                validate: stringValidator
            },
            number: {
                type : Number,
                required : true,
                validate : numberValidator
            },
            zip: {
                type : Number,
                required : true,
                validate : numberValidator
            },
            town: {
                type : String,
                required : true,
                validate: stringValidator
            },
            country: {
                type : String,
                required : true,
                validate: stringValidator
            }
        },
        cookType : Array,
        quote : {
            type : Number,
            validate : quoteValidator
        },
        comments : Array,
        // picture can have a variety of data type
        pictures :mongoose.Schema.Types.Mixed,
        url : {
            type : String,
            validate : urlValidator
        },
        createdAt : {
            type : Date,
            required : true,
            validate : dateValidator
        },
        // updateAt will be auto updated when we modify data with the current date
        updatedAt : { type : Date, default : Date.now}
    });
    // we return the schema called "resto" with informations of the schema for the collection "restos" 
    return mongoose.model('resto', schema,'restos');
};

// export of the model like a singleton [export an instance of the model] so be carefull of the ()
module.exports = new restoModel();