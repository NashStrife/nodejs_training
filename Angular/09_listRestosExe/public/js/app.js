"use strict";

let app = angular.module('restoApp', [
    'ngRoute', // dependence to ngRoute
    'restoControllers'
]);

app.config(['$routeProvider', function($routeProvider){
    // config the routes
    $routeProvider
    .when('/list', {
        templateUrl : 'partials/list.html',
        controller : 'listRestos'
    })
    .when('/detail/:itemId', {
        templateUrl : 'partials/details.html',
        controller : 'detailResto'
    })
    // in the other cases
    .otherwise({
        // go to /list to avoid user going in certain privates files
        redirectTo: '/list'
    })
}]);