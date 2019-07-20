// login controller
angular.module("myApp")
.controller("restorePasswordController", function ($scope,$http, sharedProperties) {
    $scope.myFunc = function() {
        var question = $scope.question2;
        var username= sharedProperties.getProperty();
        var answer = $scope.answer2;
        $http.post('http://localhost:3000/RestorePassword/'
            + username + '/'
            + question + '/'
            + answer).then(
                function (response) {
                    alert( response.data);
        });
    }
});
