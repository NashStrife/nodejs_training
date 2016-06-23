var controllers = angular.module('controllers', []);

controllers.controller('mainCtrl', ['$scope', function($scope) {
	//2
	$scope.myVar = "trololo";
	$scope.products = [
		{
			"name" : "tshirt1",
			"details" : [
				{
					"size" : "l",
					"price" : 15
				},
				{
					"size" : "xl",
					"price" : 15
				},
				{
					"size" : "xxl",
					"price" : 20
				}
			]
		},
		{
			"name" : "tshirt2",
			"details" : [
				{
					"size" : "s",
					"price" : 10
				},
				{
					"size" : "xl",
					"price" : 15
				}
			]
		},
		{
			"name" : "tshirt3",
			"details" : [
				{
					"size" : "s",
					"price" : 10
				},
				{
					"size" : "m",
					"price" : 15
				},
				{
					"size" : "xxl",
					"price" : 20
				}
			]
		}
	];

}]);