// oneApp var that we use to create a controller
// myApp is the name of our application
// [] is to manage dependences
var oneApp = angular.module("myApp", []);

// $scope is use for the var called inside the html
oneApp.controller('mainController', ["$scope", function($scope){
    // focus the ng-model="name" inside the html
    $scope.name = "Sebastien";
}]);