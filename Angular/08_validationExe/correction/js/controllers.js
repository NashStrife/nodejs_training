let controllers = angular.module('controllers',[]);

controllers.controller('mainCtrl', ['$scope', function($scope){
	$scope.tabs = [
		{
			'title' : "Home",
			'content' : "Page d'accueil"
		},
		{
			'title' : "Profile",
			'content' : "Votre profile"
		},
		{
			'title' : "Messages",
			'content' : "Messageries"
		},
		{
			'title' : "Paramètres",
			'content' : "Réglez vos paramètres"
		}
	];


	//index de l'array pour mettre par defaut l'active sur le 1er tab
	$scope.active = 0;
	$scope.tab={};
	$scope.erreur= false;

	$scope.isActive = function(index){
		// retourne TRUE ou FALSE pour vérifier si $index = $scope.active
		return $scope.active === index;
	}

	$scope.setActive = function(index){
		// va changer valeur de l'index pour switcher entre les tabs
		$scope.active = index;
	}

	$scope.removeTab = function(index){
		// delete élements d'un tableau
		$scope.tabs.splice(index,1);
	}

	$scope.addTab = function(isValid){
		if(isValid){
			$scope.tabs.push({title : $scope.tab.title, content : $scope.tab.content});
			$scope.tab.title = "-";
			$scope.tab.content = "-";
			$scope.erreur = false;
		}
		else{
			$scope.erreur = true;
		}
	}
}]);