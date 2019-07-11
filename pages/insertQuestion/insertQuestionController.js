// login controller
angular.module("myApp")
.controller("insertQuestionController", function ($scope,$http) {
    $scope.myFunc = function() {
        // alert($scope.uname);
        // alert($scope.question2);
        // alert($scope.answer2);
        self = this;
        $http.get('http://localhost:3000/insertQuestion/'
            + $scope.uname + '/'
            + $scope.question2 + '/'
            + $scope.answer2).then(
                function (response) {
                        $scope.answer = response.data;
                });
    }
});
