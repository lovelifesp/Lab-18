var app = angular.module("myMod");

app.factory("isFizzBuzzService", function(){
  return{
    isFizzBuzz: function(number) {
      if(number % 3 === 0){
        return true;

        }

     }
 }
});
