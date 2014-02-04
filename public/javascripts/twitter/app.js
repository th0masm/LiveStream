'use strict';

angular.module('twitter', []).controller('ctrlTwitter', [ '$scope', 'twitterAPI', function ($scope, twitterAPI){
        function onError(data, err, type) {
            $scope[type].status = 'error';
            if (data.error && data.error.message && data.error.details) {
                $scope[type].err = data.error;
            } else {
                $scope[type].err = {
                    message: err,
                    details: data
                };
            }
        }

        $scope.searchTwitter = function() {
        $scope.key = 'motogp';
        twitterAPI.streamTwitter($scope.key)
            .success(function(data) {
                $scope.twitter = data.text.text;
            })
            .error(function(data, err) {
                onError(data, err, 'test');
            })
            .finally (function() {
            console.log("finally");
        });
    };
}]).service('twitterAPI', ['$http', function($http) {
        function searchTwitter(key) {
            var url = '/twitter/search/' + encodeURIComponent(key);
            return $http.get(url);
        }

        function streamTwitter(key){
            var url = 'twitter/stream/' + encodeURIComponent(key);
            return $http.get(url);
        }

        return {
            searchTwitter: searchTwitter,
            streamTwitter: streamTwitter
        };
    }
]);