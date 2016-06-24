"use strict";

let restoControllers = angular.module('restoControllers', []);

restoControllers.controller('listRestos', ['$scope', '$http', function($scope, $http){
    // $scope.restos = [];

	// get the content of the data.js from the index so we need to use js/...
	$http.get('js/data.json').success(function(result){
		// stock the content inside a new array
		$scope.restos = result;
	});

	$scope.order = "name";
	$scope.direction = "";
}]);

restoControllers.controller('detailResto', ['$scope', '$http', '$routeParams', 
	function($scope, $http, $routeParams){

	$http.get('js/data.json').success(function(result){
		$scope.restos = result;
		// get the item that we want details thx to the id sent in the route
		$scope.whichItem = $routeParams.itemId;

		$scope.nextItem = parseInt($scope.whichItem) + 1;
		if($scope.nextItem >= $scope.restos.length){
			$scope.nextItem = 0;
		}

		$scope.prevItem = parseInt($scope.whichItem) - 1;
		if($scope.prevItem < 0){
			$scope.prevItem = $scope.restos.length-1;
		}
	});
}]);