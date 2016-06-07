let router = require('express').Router();
let controller = require('./controller');


router.route('/')
.get(controller.get)
.post(controller.post)
.put(controller.update);

router.route('/:id')
.get(controller.getOne)
.delete(controller.deleteById);


module.exports = router;