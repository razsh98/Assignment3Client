// login controller
angular.module("myApp")
    .controller("move_to_POIController", function ($scope,$http) {
        $scope.myFunc = function() {
            self = this;
            alert($scope.uname);
            $http.post('http://localhost:3000/move_to_POI/'
                + $scope.uname).then(function (response) {
                    alert(response.data);
                $scope.answer = response.data;
            });
        }
    });
