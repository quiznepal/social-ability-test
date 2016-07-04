'use strict';

angular.module('myApp.startpage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startpage', {
    templateUrl: 'startpage/startpage.html',
    controller: 'startpage'
  });
}])

.controller('startpage', [function() {

}]);