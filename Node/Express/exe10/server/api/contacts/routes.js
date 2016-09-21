let router = require('express').Router();
let controller = require('./controller');

router.route('/')
.get(controller.get)

module.exports = router;