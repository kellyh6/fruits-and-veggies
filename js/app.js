/* setup your angular app here */
console.log('app.js was loaded');
var foods = fruits.concat(vegetables);

function shuffle(foods) {
  var currentIndex = foods.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -=1;

    temporaryValue = foods[currentIndex];
    foods[currentIndex] = foods[randomIndex];
    foods[randomIndex] = temporaryValue;
  }
  return foods;
}

shuffle(foods);

angular.module('foodApp', [])

.controller('foodController', ['$scope', function($scope) {

  $scope.foods = foods;
  $scope.fruits = [];
  $scope.vegetables = [];

  $scope.click = function(destination, index, departure) {
    $scope[destination].push($scope[departure][index]);
    $scope[departure].splice(index, 1);
  }

}]);

// debug stuff to show the app is loading and fruit / veggies are available

console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
console.log(foods);