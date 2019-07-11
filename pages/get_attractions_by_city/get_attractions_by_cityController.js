// login controller
angular.module("myApp")
.controller("get_attractions_by_cityController", function ($scope,$http) {
    $scope.myFunc = function() {
        // alert($scope.uname);
        // alert($scope.question2);
        alert($scope.category1);
        self = this;
        alert('load');
        $http.get('http://localhost:3000/get_attractions_by_city/'+$scope.category1).then(
                function (response) {
                    alert('inScope');
                    $scope.answer = response.data;
        });
    }
});
