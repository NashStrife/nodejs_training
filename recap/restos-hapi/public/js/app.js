"use strict";

let app = angular.module('restoApp', [
    'ngRoute', // dependence to angular-route
    'ngResource', // dependance to angular-resource
    'restoControllers',
    'restoServices'
]);

app.config(['$routeProvider', function($routeProvider){
    // config the routes
    $routeProvider
    .when('/', {
        templateUrl : 'partials/list.html',
        controller : 'ListRestosCtrl'
    })
    .when('/detail/:itemId', {
        templateUrl : 'partials/details.html',
        controller : 'DetailRestoCtrl'
    })
    .when('/add', {
        templateUrl : 'partials/form.html',
        controller : 'AddRestoCtrl'
    })
    // in the other cases
    .otherwise({
        // go to /list to avoid user going in certain privates files
        redirectTo: '/'
    })
}]);