// login controller
angular.module("myApp")
.controller("loginController", function ($window,$rootScope,$location,$scope,$http,sharedProperties) {
    $scope.myFunc = function() {
        self = this;
        $http.post('http://localhost:3000/login/'
            + $scope.uname + '/'
            + $scope.passw).then(function (response) {
            if (response.data === 'error '+$scope.uname) {
                alert("Your username or password are not correct. Try again");
            }
            else {
                $window.sessionStorage.setItem('token', response.data);
                sharedProperties.setProperty($scope.uname);
                $rootScope.$broadcast('change-property-event');
                sharedProperties.setRole('loggedIn');
                $rootScope.$broadcast('change-role-event');
                $location.path('/poiLogin');
            }
            event.preventDefault();
        },function (error){
            alert(error);
        });
    }
});
