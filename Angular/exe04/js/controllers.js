let controllers = angular.module('controllers', []);

controllers.controller('mainCtrl', ['$scope', function($scope){
    // 3
    // $scope.box = true;

    // 4
    // $scope.hasChanged = function(){
    //     alert("It change !");
    // };

    // 7
    $scope.users = [
        {'name' : 'Jonathan', 'age' : 20},
        {'name' : 'Sebastien', 'age' : 26},
        {'name' : 'Mathieu', 'age' : 28}
    ];
}]);