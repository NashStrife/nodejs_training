'use strict';

let mongoose = require('mongoose');
// let validate = require('mongoose-validator');

let libraryModel = function() {
    let Library = mongoose.Schema({
        name: {
            type: String,
            lowercase: true
        },
        address: {
            type: String,
            lowercase: true
        },
        phone: {
            type: String,
            lowercase: true
        }
    });

    let Invitation = mongoose.Schema({
        email: {
            type: String,
            lowercase: true
        }
    });

    let Contact = mongoose.Schema({
        email: {
            type: String,
            lowercase: true
        },
        message: {
            type: String,
            lowercase: true
        }
    });

    Library.pre('save', function(next) {
        let self = this;
        this.constructor.find({
            'address': self.address
        }, function(err, docs) {
            if(!docs.length) {
                next();
            } else {
                next(new Error("Library exists !"));
            }
        });
    });

    Invitation.pre('save', function(next) {
        let self = this;
        this.constructor.find({
            'email': self.email
        }, function(err, docs) {
            if(!docs.length) {
                next();
            } else {
                next(new Error("Email exists !"));
            }
        });
    });

    Contact.pre('save', function(next) {
        let self = this;
        this.constructor.find({
            'message': self.message
        }, function(err, docs) {
            if(!docs.length) {
                next();
            } else {
                next(new Error("Message exists !"));
            }
        });
    });

    // return mongoose.model('invitation', Invitation, 'invitations');

    let Base = mongoose.model('library', Library, 'libraries');
    let exports = module.exports = Base;
    Base.Invitation = mongoose.model('invitation', Invitation, 'invitations');
    Base.Contact = mongoose.model('contact', Contact, 'contacts');

    return Base;
};

module.exports = new libraryModel();