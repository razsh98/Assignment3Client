// login controller
angular.module("myApp")
    .controller("getPOIinfo", function ($scope,$http) {
        $scope.myFunc = function() {
            self = this;
            $http.get('http://localhost:3000/getPOIinfo/'
                + $scope.passw).then(function (response) {
                    var name = response.data.name;
                    var latitude = response.data.latitude;
                    var longitude = response.data.longitude;
                    var details = [name,latitude,longitude];
                    $scope.answer = details;
            });
        }
    });
