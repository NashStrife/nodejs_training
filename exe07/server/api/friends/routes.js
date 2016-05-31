let router = require('express').Router();
// on récupère notre controller
let controller = require('./controller');

// on rajoute des paramètres à la route en fonction de l'id grace au controller
router.param('id', controller.param);

// quand on arrive sur "/api/friends/" avec un get on fait appel au controller pour gérer les taches à faire 
// grace à sa fonction .get rendue publique 
router.route('/')
    // si on affiche simplement "/api/friends/"
    .get(controller.get)
    // si on envoie des infos à "/api/friends/"
    .post(controller.post);
    
// url dynamique = SLUG
router.route('/:id')
.get(controller.getOne);
    

module.exports = router;