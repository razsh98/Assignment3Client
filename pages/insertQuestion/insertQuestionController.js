// login controller
angular.module("myApp")
.controller("insertQuestionController", function ($scope,$http, sharedProperties) {
    $scope.myFunc = function() {
        var question = $scope.question2;
        var username= sharedProperties.getProperty();
        var answer = $scope.answer2;
        self = this;
        $http.get('http://localhost:3000/insertQuestion/'
            + username + '/'
            + question + '/'
            + answer).then(
                function (response) {
                        alert(response.data);
                });


    }
});
