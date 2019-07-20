// poi controller
angular.module("myApp")
.controller("get_saved_attractionsController", function ($scope,$http, sharedProperties) {
    $http.get('http://localhost:3000/get_saved_attractions/'+sharedProperties.getProperty()).then(function(response){
        var data=response.data;
        $scope.myWelcome=data;
    });
});