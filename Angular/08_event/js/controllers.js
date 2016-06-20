let controllers = angular.module('controllers', []);

controllers.controller('mainCtrl', ['$scope', function($scope){
    $scope.error = false;

    $scope.testForm = function(isValid){
        if(isValid) {
            // if we click on the button and the form is valid
            console.log("j'envoie le formulaire");
            $scope.error = false;
        } else {
            // if we click on the button and the form is invalid => error
            $scope.error = true;
        }
    }
}]);