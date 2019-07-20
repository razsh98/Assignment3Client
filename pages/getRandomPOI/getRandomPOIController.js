// login controller
angular.module("myApp")
    .controller("getRandomPOIController", function ($scope,$http) {
        $scope.myFunc = function() {
            $http.get('http://localhost:3000/getRandomPOI/'
                + $scope.uname).then(function (response) {
                var POIJsons = response.data;
                $scope.cities = new Array();
                for (var i=0; i<Object.keys(POIJsons).length; i++) {
                    $scope.cities.push({'id': POIJsons[i].POI_ID, 'name': POIJsons[i].name, 'image': POIJsons[i].image, 'desc':POIJsons[i].description});
                }
                });
        }
    });
