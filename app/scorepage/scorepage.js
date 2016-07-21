'use strict';

angular.module('myApp.scorePage',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/scorepage',{
			templateUrl : 'scorepage/scorepage.template.html',
			controller : 'scorepage'
		});
	}])

	.controller('scorepage', ['$scope','$location', 'shareScore', function($scope, $location, shareScore){
		$scope.score = shareScore.getScore();
		console.log(typeof $scope.score +" type ;"+$scope.score);
		if ($scope.score==null || typeof $scope.score == 'undefined') {
			$location.path("/");
		} else if ($scope.score < 19) {
			$scope.alerttype = "alert-success";
			$scope.message = "Ohh you are cool in the mass, just chill";
		} else if ($scope.score >19 && $scope.score <33) {
			$scope.alerttype = "alert-warning";
			$scope.message = "May be practise speaking, try more stuff";
		} else {
			$scope.alerttype = "alert-danger";
			$scope.message = "crowd/people, seems scary but its not, just give it one more try, keep pushing yourself, you will feel easy with the people";
		}
	}])