// create the controller to use it in the app
var shopControllers = angular.module('shopControllers', []);

// inside the general 'shopControllers' we have different controller for each task like 'listController
shopControllers.controller('listController', ['$scope', function($scope){
    $scope.clothing = [
        {
            'name' : 'Team Liquid Spring 2016 Jersey', 
            'size' : 'M',
            'price' : 64.17
        },
        {
            'name' : 'J!NX 8-Bit Skull Boss Premium Tee', 
            'size' : 'S',
            'price' : 20.16
        },
        {
            'name' : 'Minecraft Creeper Premium Zip-up Hoodie', 
            'size' : 'L',
            'price' : 55
        },
        {
            'name' : 'Team Liquid Softshell Jacket', 
            'size' : 'M',
            'price' : 119.17
        }];
}]);