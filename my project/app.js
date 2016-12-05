var app = angular.module('myApp', ['ui.grid']);

/*app.filter('unique', function() {
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
});*/

app.controller('myCtrl', function($scope, $http) {  

	$http.get('convertcsv.json').success(function(data) {
	    $scope.myData = data;
	    var array = $scope.myData;
	    
	    var market_result = [];
		loop1: for (var i = 0; i < array.length; i++) {
		    var Mname = array[i].Market;
		    for (var i2 = 0; i2 < market_result.length; i2++) {
		        if (market_result[i2] == Mname) {
		            continue loop1;
		        }
		    }
		    market_result.push(Mname);
		}
		$scope.market_option1 = market_result[0];
		$scope.market_option2 = market_result[1];
		$scope.market_option3 = market_result[2];
		$scope.market_option4 = market_result[3];
		$scope.market_option5 = market_result[4];



		var confidence_level_result = [];
		loop2: for (var j = 0; j < array.length; j++) {
		    var Cname = array[j].Confidence_Level;
		    for (var j2 = 0; j2 < confidence_level_result.length; j2++) {
		        if (confidence_level_result[j2] == Cname) {
		            continue loop2;
		        }
		    }
		    confidence_level_result.push(Cname);
		}
		$scope.confidence_level_option1 = confidence_level_result[0];
		$scope.confidence_level_option2 = confidence_level_result[1];

	});



});
