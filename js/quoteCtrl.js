var app = angular.module("myMod");

app.controller("quoteCtrl",function($scope, myFactory, $timeout){
  $scope.data = [];

$scope.getQuote = function() {
  myFactory.apiCall();

  $timeout(function(){
    $scope.data.push(myFactory.getInfo());
  },500);

}

});

 app.directive("quoteTitle", function(){
   return{
     restrict: "E",
     template: "<h1>Famous Quote Generator</h1>",
     replace: true
   };
});
