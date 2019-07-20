// login controller
angular.module("myApp")
.controller("get_attractions_by_nameController", function ($scope,$http) {
    $scope.myFunc = function() {
        // alert($scope.uname);
        // alert($scope.question2);
        self = this;
        $http.get('http://localhost:3000/get_attractions_by_name/'+$scope.uname).then(
            function (response) {
                var POIJsons = response.data;
                $scope.cities = new Array();
                for (var i=0; i<Object.keys(POIJsons).length; i++) {
                    $scope.cities.push({'id': POIJsons[i].POI_ID, 'name': POIJsons[i].name, 'image': POIJsons[i].image, 'desc':POIJsons[i].description});
                }
        });
    }
});
