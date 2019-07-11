// login controller
angular.module("myApp")
.controller("get_attractions_by_nameController", function ($scope,$http) {
    $scope.myFunc = function() {
        // alert($scope.uname);
        // alert($scope.question2);
        self = this;
        $http.get('http://localhost:3000/get_attractions_by_name/'+$scope.uname).then(
                function (response) {
                    $scope.answer = response.data;
        });
    }
});
