'use strict';

angular.module('myApp.startpage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startpage', {
    templateUrl: 'startpage/startpage.html',
    controller: 'startpage'
  });
}])

.controller('startpage',['$scope', '$location', function($scope,$location) {
	$scope.start = function (path) {
		// alert("hey start");
		$location.path("/quizboard");
	}
}]);