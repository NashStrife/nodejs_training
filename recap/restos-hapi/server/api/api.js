'use strict';

let routes = require('./restos/routes');

module.exports = [].concat(routes);

// https://gist.github.com/martinnormark/077c4455b53567dd85f9


// let router = require(`${process.cwd()}/server/server`);

// router.route({
//     method: ['GET', 'POST', 'PUT', 'DELETE'],
//     path: '/restos',
//     handler: require('./restos/routes')
// });

// module.exports = router;