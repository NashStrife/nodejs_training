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

    $scope.tabSel = $scope.tabList[0].title;
    console.log($scope.tabSel);

    $scope.setTab = function(tabName){
        console.log(tabName);
        $scope.tabSel = tabName;
    }

    $scope.isSet = function(tabName){
        return $scope.tabSel === tabName;
    }

    $scope.delTab = function(tabName){
        console.log("delete "+ tabName);

        // $scope.tabList will contain the new array with elements that pass the test
        $scope.tabList = $scope.tabList.filter(function(el) {
                // console.log(el.title);
                // console.log(el.title !== tabName);
                return el.title !== tabName;
            });
    }

    // test for the form validation
    $scope.error = false;
    // get true or false in function of the $valid value of Angular inside the form
    $scope.testForm = function(isValid){
        if(isValid){
            alert("Form successfully submitted !");
            // prepare the new element
            let newTab = {};
            newTab.title = $scope.titleModel;
            newTab.content = $scope.contentModel;

            console.log(newTab);
            // add it inside the Array
            $scope.tabList.push(newTab);

            // set the error back to false for a new future submit
            $scope.error = false;
        } else {
            $scope.error = true;
        }
    }
}]);