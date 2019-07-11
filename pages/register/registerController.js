// login controller
angular.module("myApp")
.controller("registerController", function ($scope,$http) {
    $scope.myFunc = function() {
        self = this;
        // alert(
        //     $scope.fname + '/'
        //     + $scope.lname + '/'
        //     + $scope.city + '/'
        //     + $scope.country + '/'
        //     + $scope.category1 + '/'
        //     + $scope.category2 + '/'
        //     + $scope.question1 + '/'
        //     + $scope.answer1 + '/'
        //     + $scope.question2 + '/'
        //     + $scope.answer2);
        $http.post('http://localhost:3000/register/'
            + $scope.fname + '/'
            + $scope.lname + '/'
            + $scope.city + '/'
            + $scope.country + '/'
            + $scope.category1 + '/'
            + $scope.category2 + '/'
            + $scope.question1 + '/'
            + $scope.answer1 + '/'
            + $scope.question2 + '/'
            + $scope.answer2).then(function (response) {
            $scope.answer = response.data;
        });
    }
});
