// login controller
angular.module("myApp")
.controller("save_attractionController", function ($scope,$http) {
    $scope.myFunc = function(userName) {
        // alert($scope.uname);
        // alert($scope.question2);
        self = this;
        userName='a';
        $http.get('http://localhost:3000/save_attraction/'
            +userName+'/'
            +$scope.uname).then(
                function (response) {
                    alert('inScope');
                    $scope.answer = response.data;
        });
    }
});
