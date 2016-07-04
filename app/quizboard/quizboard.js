'use strict';

angular.module('myApp.quizboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quizboard', {
    templateUrl: 'quizboard/quizboard.template.html',
    controller: 'quizboard'
  });
}])

.controller('quizboard',['$scope', '$location', function($scope,$location) {
	$scope.question = "hey this is question";
	$scope.ans0 = "ans0";
}]);