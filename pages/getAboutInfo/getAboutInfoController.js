// login controller
angular.module("myApp")
.controller("getAboutInfoController", function ($scope,$http) {
    $scope.myFunc = function() {
        // alert($scope.uname);
        // alert($scope.question2);
        // alert($scope.answer2);
        self = this;
        alert('load');
        $http.get('http://localhost:3000/getAboutInfo/'+$scope.category1).then(
                function (response) {
                    alert('inScope');
                    $scope.answer = response.data;
        });
    }
});
