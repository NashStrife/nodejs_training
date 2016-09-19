'use strict';

let controller = require('./controller');

module.exports = [
    { method: 'GET', path: '/api/restos/', handler: controller.get },
    { method: 'POST', path: '/api/restos/', handler: controller.post },
    { method: 'PUT', path: '/api/restos/', handler: controller.update },
    { method: 'GET', path: '/api/restos/search', handler: controller.dynamicSearch },
    { method: 'DELETE', path: '/api/restos/{id}', handler: controller.deleteById }
];

// let router = require(`${process.cwd()}/server/server`);
// let controller = require('./controller');

// router.route({
//     method: 'GET',
//     path: '/restos/{name}',
//     handler: function (request, reply) {
//         // URI encode the name parameter to prevent content injection attacks
//         reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
//     }
// });

// // router.route({
// //     method: 'GET',
// //     path: '/',
// //     handler: controller.get
// // });

// module.exports = router;