'use strict';

angular.module('myApp.scorePage',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/scorepage',{
			templateUrl : 'scorepage/scorepage.template.html',
			controller : 'scorepage'
		});
	}])

	.controller('scorepage', ['$scope', 'shareScore', function($scope, shareScore){
		$scope.score = shareScore.getScore();
	}])