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
        logger.log("model post");
        logger.log(obj);
        // on crée notre nouvel objet qui va contenir les nouvelles infos
        // on prend la longueur du tableau actuel et on fait +1 [si 2 objet enregistre 3]
        let insertObject ={'_id':datas.length +1,'name':obj.name,'email':obj.email};
        
        // on ajoute les nouvelles données à celles existantes dans datas
        datas.push(insertObject);
        
        // on prépare les données à être ajoutées dans le fichier en ajoutant la clé friends
        let outData = JSON.stringify({ "friends":datas});
        
        // on écrit les nouvelles données mises à jour dans le fichier
        fs.writeFileSync(`${process.cwd()}/friends.json`,outData);
        return true;
    }
    
    let that = {};
    that.getAllFriends = getAllFriends;
    that.getOne = getOne;
    that.post = post;
    return that;
}

module.exports = Friend;