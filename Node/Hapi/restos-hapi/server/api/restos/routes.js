'use strict';

let controller = require('./controller');

module.exports = [
    { method: 'GET', path: '/api/restos', handler: controller.get },
    { method: 'POST', path: '/api/restos', handler: controller.post },
    { method: 'PUT', path: '/api/restos', handler: controller.update },
    { method: 'GET', path: '/api/restos/search', handler: controller.dynamicSearch },
    { method: 'DELETE', path: '/api/restos/{id}', handler: controller.deleteById }
];