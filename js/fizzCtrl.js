var app = angular.module("myMod");
app.controller("fizzCtrl",function($scope){
  $scope.fizzBuzz = function(){
    var num =$scope.input;
    if(num % 15 === 0){
      $scope.answer = "FizzBuzz";
    }
    else if(num % 3 === 0){
      $scope.answer = "Fizz";
    }
    else if(num % 5 === 0){
      $scope.answer = "buzz";
    }
    else {
      $scope.answer = num;
    }
  }

});


app.directive("fizzTitle", function(){
  return{
    restrict: "E",
    template: "<h1>Fizz Buzz</h1>",
    replace: true
  };
});
