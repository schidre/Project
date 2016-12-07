var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $http.get('convertcsv.json').success(function(data) {
      $scope.myData = data;

      var array = $scope.myData;
      
      var market_result = [];
      var market =[];
      loop1: for (var i = 0; i < array.length; i++) {
          var Mname = array[i].Market;
          for (var i2 = 0; i2 < market_result.length; i2++) {
              if (market_result[i2] == Mname) {
                  continue loop1;
              }
          }
          market_result.push(Mname);
          market.push({'name': Mname});
      }
      $scope.market = market;


      var confidence_level_result = [];
      var confidence_level = [];
      loop2: for (var j = 0; j < array.length; j++) {
          var Cname = array[j].Confidence_Level;
          for (var j2 = 0; j2 < confidence_level_result.length; j2++) {
              if (confidence_level_result[j2] == Cname) {
                  continue loop2;
              }
          }
          confidence_level_result.push(Cname);
          confidence_level.push({'level' : Cname});
      }
      $scope.level = confidence_level;
      

    });
}]);
