"use strict";

let logger = require('./logger');

module.exports = {  
    resError: function(type, err){
        return `{ "data": {"type": "${type}","id": 0,"attributes": {"error": 1,"message": "${err.message}"}}}`
    },
    formatJson: function(type, id, attributes) {
        return `{ "data": {"type": "${type}","id": "${id}","attributes": ${JSON.stringify(attributes)}}}`
    }
}