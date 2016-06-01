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
            '__id' : parseInt(id)
        });
    }
    
    function post(obj) {
        logger.log("model post");
        logger.log(obj);
        // on crée notre nouvel objet qui va contenir les nouvelles infos
        let insertObject = {
            // on prend la longueur du tableau actuel et on fait +1 [si 2 objet enregistre 3]
            '__id':datas.length +1,
            'name':obj.name,
            'email':obj.email
        };
        
        // on ajoute les nouvelles données à celles existantes dans datas
        datas.push(insertObject);
        
        // l'enregistrement des données passe par une fonction save créée plus bas
        save();
        
        // toutes les actions ont été faites, on renvoie true au controller
        return true;
    }
    
    function updateOne(obj) {
        let updateObject = {
            // cette fois ci on récupère l'id envoyé et on le remet tel quel dans le new objet
            '__id':obj.__id,
            'name': obj.name,
            'email': obj.email
        };
        // on recherche la case du tableau dans lequel il y a l'objet qui contient l'id de l'ami qu'on veut modif grace à lodash
        datas[_.findIndex(datas, {
            // en transformant bien l'id récupéré [string] en int
            '__id': parseInt(obj.__id)
        // on écrase avec les valeurs mises à jour juste au dessus
        })] = updateObject;
        save();
        return true ;
    }

    // pour éviter de faire plusieurs fois l'enregistrement on le fait 1x dans une fonction à part qu'on appelle au besoin
    function save(){
        // on prépare les données à être ajoutées dans le fichier en ajoutant la clé friends
        let outData = JSON.stringify({ 
            "friends" : datas
        });
        
        // on écrit les nouvelles données mises à jour dans le fichier
        fs.writeFileSync(`${process.cwd()}/friends.json`,outData);
    }
    
    let that = {};
    that.getAllFriends = getAllFriends;
    that.getOne = getOne;
    that.post = post;
    that.updateOne = updateOne;
    // la fonction save() n'est pas ajoutée en public au model car c'est une fonction interne => inaccessible depuis l'extérieur
    return that;
}

module.exports = Friend;