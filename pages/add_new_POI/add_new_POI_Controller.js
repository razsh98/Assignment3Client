// login controller
angular.module("myApp")
.controller("add_new_POI_Controller", function ($scope,$http) {
    $scope.myFunc = function() {
         alert($scope.name);
        // alert($scope.question2);
        // alert($scope.answer2);
        self = this;
        $http.get('http://localhost:3000/add_new_POI/'
            + $scope.name + '/'
            + $scope.city + '/'
            + $scope.category1).then(
                function (response) {
                             $scope.answer="add";

                });
    }
});
