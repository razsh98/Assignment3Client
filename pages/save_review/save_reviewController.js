// login controller
angular.module("myApp")
.controller("save_reviewController", function ($scope,$http) {
    $scope.myFunc = function(userName) {
        // alert($scope.uname);
        // alert($scope.question2);
        self = this;
        userName='a';
        $http.get('http://localhost:3000/save_review/'
            +userName+'/'
            +$scope.poiId+'/'
            +$scope.uname+'/'
            +$scope.rate).then(
                function (response) {
                    alert('inScope');
                    $scope.answer = response.data;
        });
    }
});
