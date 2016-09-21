let router = require('express').Router();

router.use('/contacts', require('./contacts/routes'));

module.exports = router;