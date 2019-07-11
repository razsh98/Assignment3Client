// login controller
angular.module("myApp")
.controller("get_attractions_by_categoryController", function ($scope,$http) {
    $scope.myFunc = function() {
        // alert($scope.uname);
        // alert($scope.question2);
        self = this;
        $http.get('http://localhost:3000/get_attractions_by_category/'+$scope.category1).then(
                function (response) {
                    $scope.answer = response.data;
        });
    }
});
