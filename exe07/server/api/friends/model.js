let fs = require('fs');
let _ = require('lodash');
let logger = require(`${process.cwd()}/server/utils/logger`);

// récupère le contenu de friends du fichier firends.json
let datas = JSON.parse(fs.readFileSync(`${process.cwd()}/friends.json`)).friends;

function Friend(){
    function getAllFriends() {
        return datas;
    }
    
    function getOne(id) {
        return _.find(datas, {
            // pas oublier le parseInt car c'est un int dans le fichier et 1 string dans la requète
            '_id' : parseInt(id)
        });
    }
    
    function post(obj) {
        logger.log(obj);
    }
    
    let that = {};
    that.getAllFriends = getAllFriends;
    that.getOne = getOne;
    that.post = post;
    return that;
}

module.exports = Friend;