// poi controller
angular.module("myApp")
.controller("get_saved_attractionsController", function ($scope,$http) {
    self = this;
    $http.get('http://localhost:3000/get_saved_attractions').then(function(response){
        var data=response.data;

        var html = '<table class="table table-striped">';
        html += '<tr>';
        var flag = 0;
        $.each(data[0], function(index, value){
            html += '<th>'+index+'</th>';
        });
        html += '</tr>';
        $.each(data, function(index, value){
            html += '<tr>';
            $.each(value, function(index2, value2){
                html += '<td>'+value2+'</td>';
            });
            html += '<tr>';
        });
        html += '</table>';
        $scope.myWelcome=html;
    });
});