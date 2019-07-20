// login controller
angular.module("myApp")
.controller("get_attractions_by_categoryController", function ($scope,$http) {
    $scope.myFunc = function() {
        // alert($scope.uname);
        self = this;
        $http.get('http://localhost:3000/get_attractions_by_category/'+$scope.category1).then(
            function (response) {
                var POIJsons = response.data;
                $scope.cities = new Array();
                for (var i=0; i<Object.keys(POIJsons).length; i++) {
                    $scope.cities.push({'id': POIJsons[i].POI_ID, 'name': POIJsons[i].name, 'image': POIJsons[i].image, 'desc':POIJsons[i].description});
                }
            });
    }
});