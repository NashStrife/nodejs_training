// on importe notre modèle
let model = require('./model');
// on instancie le model
let friend = model();

// on charge notre module spéciale qui gère les logs
let logger = require(`${process.cwd()}/server/utils/logger`);

// methode qui va gérer les paramètres du router
exports.param = function(req, res, next, id) {
    // on stock dans la req une info qui s'appelle friend et qui contient le résultat de la methode getOne() du modèle friend
    req.friend = friend.getOne(id);
    next();
}
// on exporte direct la fonction .get pour la récupérer dans la route avec "controller.get"
exports.get = function(req, res, next) {
    // fait appel à la fonction getAllFriends de notre model
    let friends = friend.getAllFriends();
    // affiche le contenu depuis le json renvoyé grace à la fonction
    res.json(friends);
}

exports.getOne = function(req, res, next) {
    // req.friend est déjà définit dans les paramètres de la route si on arrive ici
    res.json(req.friend);
}

exports.post = function(req, res, next) {
    // logger.log(req.body);
    friend.post(req.body);
}