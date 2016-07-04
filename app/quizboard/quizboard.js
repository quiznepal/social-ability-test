'use strict';

angular.module('myApp.quizboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quizboard', {
    templateUrl: 'quizboard/quizboard.template.html',
    controller: 'quizboard'
  });
}])

.controller('quizboard',['$scope', '$location', function($scope,$location) {
	console.log($scope.count);
	/*if ($scope.count===0 || $scope.count>=16) {
		$scope.count=0;
		$scope.total = 0;
	} else if (typeof $scope.count === 'undefined'){
		$location.path("/");
		// exit();
	} else {*/
		$scope.count = 0;
	// }

	var optionsClicked = null;
	var total = 0;

	var questions = [
		"I am afraid of people in authority.",
		"I am bothered by blushing in front of people.",
		"Parties and social events scare me.",
		"I avoid talking to people I don’t know.",
		"Being criticized scares me a lot.",
		"I avoid doing things or speaking to people for fear of embarrassment.",
		"Sweating in front of people causes me distress.",
		"I avoid going to parties.",
		"I avoid activities in which I am the center of attention.",
		"Talking to strangers scares me.",
		"I avoid having to give speeches.",
		"I would do anything to avoid being criticized.",
		"Heart palpitations bother me when I am around people.",
		"I am afraid of doing things when people might be watching.",
		"Being embarrassed or looking stupid are among my worst fears.",
		"I avoid speaking to anyone in authority.",
		"Trembling or shaking in front of others is distressing to me."
	];

	var answers = [
		"Not at all ",
		"A little bit ",
		"Somewhat",
		"Very much",
		"Extremely"
	]

	// $scope.question = "hey this is question";
	
	for (var i = 0; i < answers.length; i++) {
		$scope["ans"+i] = answers[i];
	}

	var cleanOptionClicked = function () {
		var value = "btn-primary";
		$scope.option0 = value;
		$scope.option1 = value;
		$scope.option2 = value;
		$scope.option3 = value;
		$scope.option4 = value;
	}
	

	var loadQuestion = function () {
		/*console.log($scope.count);
		console.log(questions[0]);*/
		$scope.question = questions[$scope.count];
		$scope.count++;
		optionsClicked = null;
		cleanOptionClicked();
	}

	loadQuestion();

	

	

	$scope.optionsOnClick = function (counter) {
		cleanOptionClicked();
		optionsClicked = counter;
		$scope["option"+counter] = "btn-success";
	}

	$scope.next = function () {
		if (optionsClicked ===null) {
			console.log("option not clicked");
			return;
		}

		if($scope.count<questions.length) {
			total +=optionsClicked;
			loadQuestion();
		} else {
			console.log(total);
		}
	}

}]);