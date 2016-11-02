let router = require('express').Router();
let controller = require('./controller');

// in fact we don't need to create a router.param to send a id

router.route('/')
.get(controller.get)
.post(controller.post)
.put(controller.update);

router.route('/:id')
.get(controller.getOne)
.delete(controller.deleteById);

module.exports = router;