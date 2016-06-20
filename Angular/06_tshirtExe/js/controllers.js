let controllers = angular.module('controllers', []);

controllers.controller('listController', ['$scope', function($scope){
    $scope.clothing = [
        {
            'id' : 0,
            'name' : 'Team Liquid Spring 2016 Jersey', 
            'details' : [
                {
                    'size' : 'M',
                    'price' : 64.17
                },
                {
                    'size' : 'L',
                    'price' : 66.17
                }
            ]
        },
        {
            'id' : 1,
            'name' : 'J!NX 8-Bit Skull Boss Premium Tee', 
            'details' : [
                {
                    'size' : 'S',
                    'price' : 20.16
                },
                {
                    'size' : 'M',
                    'price' : 22.16
                }
            ]
            
        },
        {
            'id' : 2,
            'name' : 'Minecraft Creeper Premium Zip-up Hoodie', 
            'details' : [
                {
                    'size' : 'L',
                    'price' : 55
                },
                {
                    'size' : 'XL',
                    'price' : 57
                },
                {
                    'size' : 'XXL',
                    'price' : 59
                }
            ]
        },
        {
            'id' : 3,
            'name' : 'Team Liquid Softshell Jacket', 
            'details' : [
                {
                'size' : 'M',
                'price' : 119.17
                }
            ]
        }];
}]);