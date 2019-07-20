// login controller
angular.module("myApp")
.controller("save_reviewController", function ($scope,$http, sharedProperties) {
    $scope.myFunc = function(userName) {
        // alert($scope.uname);
        // alert($scope.question2);
        userName=sharedProperties.getProperty();
        $http.get('http://localhost:3000/getReviewByPOI/'
            +$scope.poiId ).then(
            function (response) {
                var POIJsons = response.data;
                $scope.cities = new Array();
                for (var i=0; i<Object.keys(POIJsons).length; i++) {
                    $scope.cities.push({'id': POIJsons[i].review, 'name': POIJsons[i].rating, 'image': POIJsons[i].date});
                }
                $scope.answer='review on this poi: ';
            });

            setTimeout(7000);
            $http.get('http://localhost:3000/save_review/'
                + userName + '/'
                + $scope.poiId + '/'
                + $scope.uname + '/'
                + $scope.rate).then(
                function (response) {

                });

    }
});
