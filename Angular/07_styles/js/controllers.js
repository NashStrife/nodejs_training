let controllers = angular.module('controllers', []);

controllers.controller('mainCtrl', ['$scope', function($scope){
    $scope.colors = [
        "black",
        "fuchsia",
        "red",
        "green",
        "cyan",
        "yellow",
        "blue",
        "#333"
    ]
}]);