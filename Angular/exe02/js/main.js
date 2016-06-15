// oneApp var that we use to create a controller
// myApp is the name of our application
// [] is to manage dependences
var oneApp = angular.module("myApp", []);

// $scope is use for the var called inside the html
oneApp.controller('mainController', ["$scope", function($scope){
    // focus the ng-model="name" inside the html
    $scope.name = "Sebastien";

    // create a var that we can use inside the HTML
    $scope.users = students=[
        {
            'username' : 'Mathieu', 
            'content' : 'Kiwi !'
        },
        {
            'username' : 'Jonathan', 
            'content' : 'Du du du du duel !'
        },
        {
            'username' : 'Quentin', 
            'content' : 'Huuuuuuuuu!'
        }];
}]);

oneApp.controller('childController', ['$scope', function($scope){
    $scope.name = "Mathieu";
}]);

oneApp.controller('grandController', ['$scope', function($scope){
    $scope.name = "Jonathan";
}]);