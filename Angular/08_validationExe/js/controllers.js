let controllers = angular.module('controllers', []);

controllers.controller('mainCtrl', ['$scope', function($scope){
    $scope.tabList = [
        {
            "title" : "General",
            "content" : "Use the form on the bottom to add new tabs"
        },
        {
            "title" : "Example",
            "content" : "Example tab"
        }

    ];

    // set the base index to 0 to set the first tab "active" by default
	$scope.active = 0;
    // for when we will create a new tab
	$scope.tab={};
    // to manage submit errors
	$scope.error= false;

	$scope.isActive = function(index){
		// get the selected index from the menu and compare it to "active". return true or false
		return $scope.active === index;
	}

	$scope.setActive = function(index){
		// change the value of active by the index of the tab we click on it
		$scope.active = index;
	}

	$scope.removeTab = function(index){
		// delete selected element from the tab
		$scope.tabList.splice(index,1);
	}

	$scope.addTab = function(isValid){
		if(isValid){
			$scope.tabList.push({title : $scope.tab.title, content : $scope.tab.content});
            // reset the var after submitting the form
			$scope.tab.title = "-";
			$scope.tab.content = "-";
			$scope.error = false;
		}
		else{
			$scope.error = true;
		}
	}
}]);