"use strict";

let restoControllers = angular.module('restoControllers', []);

restoControllers.controller('ListRestosCtrl', ['$scope', '$http', '$resource', function($scope, $http, $resource){
    // $scope.restos = [];

	// get the content of the data.js from the index so we need to use js/...
	// $http.get('js/data.json').success(function(result){
		// stock the content inside a new array
		// $scope.restos = result;
	// });

	// get infos from db thx to the api created in node.js
	var restaurants = $resource("/api/restos");
	restaurants.query(function(result){
		$scope.restos = result;
	});

	$scope.order = "name";
	$scope.direction = "";
}]);

restoControllers.controller('DetailRestoCtrl', ['$scope', '$http', '$routeParams','$resource', 
	function($scope, $http, $routeParams, $resource){

	var restaurants = $resource("/api/restos");
	restaurants.query(function(result){
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

restoControllers.controller('AddRestoCtrl', ['$scope', '$http', '$routeParams','$resource', 
	function($scope, $http, $routeParams, $resource){

		$scope.addResto = function(){
		if(isValid){
			var restaurants = $resource("/api/restos");
			restaurants.query(function(result){

				$scope.tabList.push({title : $scope.tab.title, content : $scope.tab.content});
				// reset the var after submitting the form
				$scope.tab.title = "-";
				$scope.tab.content = "-";
				$scope.error = false;
			});
			
		}
		else{
			$scope.error = true;
		}
	}
		
}]);