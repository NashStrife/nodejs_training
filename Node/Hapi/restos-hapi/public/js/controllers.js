"use strict";

let restoControllers = angular.module('restoControllers', []);

// add the "Rest" service inside the diferent Ctrl
restoControllers.controller('ListRestosCtrl', ['$scope', 'Rest', function($scope, Rest){

	// create a function to refresh the list [used when we delete a resto]
	function refresh() {
		// use the Rest service created in services.js
		Rest.getList(function(result){
			$scope.restos = result;
		});
	}

	// need to use refresh() at first list loading
	refresh();

	// define the base order when list appear
	$scope.order = "name";
	$scope.direction = "";

	// when we click on the remove button on the list
	$scope.removeResto = function(id){
		if(confirm("Delete this restaurant ?")){
			Rest.removeResto(id);
			// use the custom function created before
			refresh();
		}
	}
}]);

restoControllers.controller('DetailRestoCtrl', ['$scope', '$routeParams','Rest', 
	function($scope, $routeParams, Rest){

	Rest.getList(function(result){
		$scope.restos = result;
		// get the item that we want details thx to the id sent in the route
		$scope.whichItem = $routeParams.itemId;

		$scope.nextItem = parseInt($scope.whichItem) + 1;
		// get back to the begining of the loop
		if($scope.nextItem >= $scope.restos.length){
			$scope.nextItem = 0;
		}

		// go to the end of the loop
		$scope.prevItem = parseInt($scope.whichItem) - 1;
		if($scope.prevItem < 0){
			$scope.prevItem = $scope.restos.length-1;
		}
	});
}]);

restoControllers.controller('AddRestoCtrl', ['$scope', 'Rest', function($scope, Rest){

		function voidArrays(){
			// prepare the object which will contain the new resto
			$scope.newResto = {};
			// void arrays to stock the differents cookType and pictures before sending it to the db
			$scope.types = [];
			$scope.pics = [];
		}

		// set the differents variables when we load the form
		voidArrays()

		// add cook types or pictures to the temp list inside the form
		$scope.addElement = function(elem){
			// for the cook types
			if(elem === 'type'){
				$scope.types.push($scope.newTypes);
				$scope.newTypes = "";
			// for the pics
			} else if(elem === 'picture') {
				$scope.pics.push({
					'link' : $scope.newPictures.link,
					'title' : $scope.newPictures.title}
					);
				// clean the inputs when we add a new pic on the temporary array
				$scope.newPictures.link = "";
				$scope.newPictures.title = "";
			}
		}

		$scope.removeElement = function(elem, index){
			if(elem === 'type'){
				$scope.types.splice(index, 1);
			} else if(elem === 'picture') {
				$scope.pics.splice(index, 1);
			}
		}

		$scope.error = false;
		$scope.addResto = function(isValid){
			if(isValid){
				Rest.addResto($scope.newResto, $scope.types, $scope.pics, function(result){
					alert(result.message);
					console.log(result);
					// clean the temp Arrays after sending the form for the next one
					voidArrays();
				});
				$scope.error = false;
			} else {
				console.log("Invalid Submit !");
				alert("Please complete all required champs");
				$scope.error = true;
			}
		}
}]);