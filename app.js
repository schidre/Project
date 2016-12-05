var app = angular.module('myApp', ['ui.grid']);

app.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});

app.controller('myCtrl', function($scope, $http) {
    $scope.json = 'data not yet loaded.';
	$http.get('convertcsv.json').success(function(data) {
	    $scope.myData = data;
	});

	$scope.boston = 
});
