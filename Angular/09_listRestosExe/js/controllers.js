let restoControllers = angular.module('restoControllers', []);

restoControllers.controller('listResto', ['$scope', '$http', function($scope, $http){
    // $scope.restos = [];

	// get the content of the data.js from the index so we need to use js/...
	$http.get('js/data.json').success(function(result){
		// stock the content inside a new array
		$scope.restos = result;
	});

	$scope.order = "name";
	$scope.direction = "";
}]);