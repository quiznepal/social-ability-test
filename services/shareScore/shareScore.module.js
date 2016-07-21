angular.module('myApp.services.shareScore', [])
    .service('shareScore', function () {
        var score = null;

        return {
            getScore: function () {
                return score;
            },
            setScore: function(value) {
                score = value;
            }
        };
    });