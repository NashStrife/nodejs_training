// let express = require('express')
// let router = express.Router();
// version courte :
let router = require('express').Router();

// si on va sur l'adresse "/api/friends" on fait appel à "routes.js" du dossier friends
router.use('/friends', require('./friends/routes'));

module.exports = router;