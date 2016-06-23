var boutiqueControllers = angular.module('boutiqueControllers', []);

boutiqueControllers.controller('listController', ['$scope', function($scope){

	$scope.products = [
		{
			'name' : 'Sushi fusion',
			'size' : 'femme',
			'price' : 15
		},
		{
			'name' : 'Cannibal Corpse',
			'size' : 'enfant',
			'price' : 10
		},
		{
			'name' : 'Levis',
			'size' : 'homme',
			'price' : 20
		}
	];

}]);