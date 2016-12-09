var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  
  $http.get('convertcsv.json').success(function(data) {
      $scope.myData = data;

      var array = $scope.myData;

      // loop for unique market values
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


      // loop for unique confidence_level values
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

      
      // loop for unique confidence_Product values
      var consequent_product_result = [];
      var consequent_product = [];
      loop2: for (var k = 0; k < array.length; k++) {
          var CPname = array[k].Consequent_Product;
          for (var k2 = 0; k2 < consequent_product_result.length; k2++) {
              if (consequent_product_result[k2] == CPname) {
                  continue loop2;
              }
          }
          consequent_product_result.push(CPname);
          consequent_product.push({'cprod' : CPname});
      }
      $scope.cproduct = consequent_product; //unique value of confidence_Product

      //loop for all confidence_Product values
      var consq_prd = [];
      for (var i = 0; i < array.length; i++) {
          var consq = array[i].Consequent_Product;
          consq_prd.push(consq);
      }
      $scope.c_prod = consq_prd; //all values of confidence_Product


      //count of unique confidence_Product value
      var countobj = [];
      for (i = 0; i < consequent_product_result.length; i++){
          var xxx = consequent_product_result[i];
          var count = 0;
          for(j = 0; j < consq_prd.length; j++){
            if(consequent_product_result[i] == consq_prd[j]){
              count++;
            }
           }
        countobj.push({'label' : xxx , 'y' : count})
      }

      // graph 
    var chart = new CanvasJS.Chart("chartContainer", {

		theme: "theme4",//theme1
		title:{
			text: " consequent product "              
		},
		axisX:{
           interval: 1
         },
		animationEnabled: false,   // change to true
		data: [              
		{
			indexLabelFontSize: 10,
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "column",
			dataPoints: countobj
		}
		]
	});

	chart.render();
    });//http responce

}]);//controller
