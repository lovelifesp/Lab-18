var app = angular.module("myMod",["ngRoute", "ngAnimate"]);
// add app.config
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when("/fizzView", {
      controller: "fizzCtrl",
      templateUrl: "views/fizzView.html"
    })
    .when("/quoteView",{
      controller: "quoteCtrl",
      templateUrl: "views/quoteView.html"
    })
    .otherwise({ redirectTo: "/" });

    $locationProvider.hashPrefix('');
});
