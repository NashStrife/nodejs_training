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

    // return mongoose.model('invitation', Invitation, 'invitations');

    let Base = mongoose.model('library', Library, 'libraries');
    let exports = module.exports = Base;
    Base.Invitation = mongoose.model('invitation', Invitation, 'invitations');

    return Base;
};

module.exports = new libraryModel();