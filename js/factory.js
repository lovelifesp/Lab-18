var app = angular.module("myMod");

app.factory("myFactory", function($http){
var masterObj = {};

return{
  apiCall: function(){
    $http({
      method: "GET",
      url:"https://andruxnet-random-famous-quotes.p.mashape.com/",
      headers: {
        "X-Mashape-Key": "Rsx6M51TDbmshYFf6IoIiacieDe6p10ES9njsnoYiFWpD6qAKW"
      }
    }).then(function successfulCallback(response){
      masterObj = response;
    },function(error){
      console.log(error);
    });
  },
  getInfo: function() {
    return masterObj;
  }
}

});
