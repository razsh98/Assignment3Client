// login controller
angular.module("myApp")
.controller("remove_saved_attractionController", function ($scope,$http, sharedProperties) {
    $scope.myFunc = function() {
        // alert($scope.uname);
        // alert($scope.question2);
        self = this;
        var userName=sharedProperties.getProperty();
        $http.delete('http://localhost:3000/remove_saved_attraction/'
            +userName+'/'
            +$scope.uname).then(
                function (response) {
                    alert('inScope');
                    $scope.answer = 'removed';
        });
    }
});
