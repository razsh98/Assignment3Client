// login controller
angular.module("myApp")
    .controller("getRandomPOIController", function ($scope,$http) {
        $scope.myFunc = function() {
            self = this;
            $http.post('http://localhost:3000/getRandomPOI/'
                + $scope.uname + '/'
                + $scope.passw).then(function (response) {
                    alert(response.data);
                $scope.answer = response.data;
            });
        }
    });
