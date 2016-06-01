let router = require('express').Router();
// on récupère notre controller
let controller = require('./controller');

// on rajoute des paramètres à la route en fonction de l'id grace au controller 
// qui seront utilisés si on entre 1 paramètre
router.param('id', controller.param);

// quand on arrive sur "/api/friends/" avec un get on fait appel au controller pour gérer les taches à faire 
// grace à sa fonction .get rendue publique [meme chose pour le post]
router.route('/')
    // si on affiche simplement "/api/friends/"
    .get(controller.get)
    // si on envoie des infos à "/api/friends/"
    .post(controller.post)
    // si on veut modifier 1 ami
    .put(controller.updateOne);
    
// url dynamique = SLUG
router.route('/:id')
    // afficher l'ami dont on envoie l'id "/api/friends/2"
    .get(controller.getOne);
    

module.exports = router;