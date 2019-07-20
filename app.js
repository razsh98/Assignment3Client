let app = angular.module('myApp', ["ngRoute"]);

// config routes
app.config(function($routeProvider)  {
    $routeProvider
        // homepage
        .when('/', {
            // this is a template
            template: '<p align="center" ng-controller="app.js" >{{recomend_pois1}}</p>'
            + '<img width="100%" height="100%" id="poi1"  ><br>'
                + '<p align="center" ng-controller="app.js" >{{recomend_pois2}}</p>'
            + '<img width="100%" height="100%" id="poi2" >'
        })
        // about
        .when('/about', {
            // this is a template url
            templateUrl: 'pages/about/about.html',
            controller : 'aboutController as abtCtrl'
        })
        // poi
        .when('/poi', {
            templateUrl: 'pages/poi/poi.html',
            controller : 'poiController as poiCtrl'
        })
        .when('/login', {
            templateUrl: 'pages/login/login.html',
            controller : 'loginController as loginCtrl'
        })
        .when('/register', {
            templateUrl: 'pages/register/register.html',
            controller : 'registerController as registerCtrl'
        })
        .when('/restorePassword', {
            templateUrl: 'pages/restorePassword/restorePassword.html',
            controller : 'restorePasswordController as restorePasswordCtrl'
        })
        .when('/insertQuestion', {
            templateUrl: 'pages/insertQuestion/insertQuestion.html',
            controller : 'insertQuestionController as insertQuestionCtrl'
        })
        .when('/getCities', {
            templateUrl: 'pages/getCities/getCities.html',
            controller : 'getCitiesController as getCitiesCtrl'
        })
        .when('/getAboutInfo', {
            templateUrl: 'pages/getAboutInfo/getAboutInfo.html',
            controller : 'getAboutInfoController as getAboutInfoCtrl'
        })
        .when('/add_new_POI', {
            templateUrl: 'pages/add_new_POI/add_new_POI.html',
            controller : 'add_new_POI_Controller as add_new_POI_Ctrl'
        })
        .when('/getRandomPOI', {
            templateUrl: 'pages/getRandomPOI/getRandomPOI.html',
            controller : 'getRandomPOIController as getRandomPOICtrl'
        })
        .when('/get_attractions_by_city', {
            templateUrl: 'pages/get_attractions_by_city/get_attractions_by_city.html',
            controller : 'get_attractions_by_cityController as get_attractions_by_cityCtrl'
        })
        .when('/get_attractions_by_category', {
            templateUrl: 'pages/get_attractions_by_category/get_attractions_by_category.html',
            controller : 'get_attractions_by_categoryController as get_attractions_by_categoryCtrl'
        })
        .when('/get_attractions_by_name', {
            templateUrl: 'pages/get_attractions_by_name/get_attractions_by_name.html',
            controller : 'get_attractions_by_nameController as get_attractions_by_nameCtrl'
        })
        .when('/move_to_POI', {
            templateUrl: 'pages/move_to_POI/move_to_POI.html',
            controller : 'move_to_POIController as move_to_POICtrl'
        })
        .when('/save_attraction', {
            templateUrl: 'pages/save_attraction/save_attraction.html',
            controller : 'save_attractionController as save_attractionCtrl'
        })
        .when('/get_saved_attractions', {
            templateUrl: 'pages/get_saved_attractions/get_saved_attractions.html',
            controller : 'get_saved_attractionsController as get_saved_attractionsCtrl'
        })
        .when('/remove_saved_attraction', {
            templateUrl: 'pages/remove_saved_attraction/remove_saved_attraction.html',
            controller : 'remove_saved_attractionController as remove_saved_attractionCtrl'
        })
        .when('/save_review', {
            templateUrl: 'pages/save_review/save_review.html',
            controller : 'save_reviewController as save_reviewCtrl'
        })
        // other
        .when('/getPOIinfo', {
            templateUrl: 'pages/getPOIinfo/getPOIinfo.html',
            controller : 'getPOIinfoController as getPOIinfoCtrl'
        })
        // other
        .otherwise({ redirectTo: '/' });
});


angular.module('myApp')
    .service('sharedProperties', function () {
        var property = 'guest';
        var role = 'guest';
        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            },
            getRole: function () {
                return role;
            },
            setRole: function(value) {
                role = value;
            }
        };
    });
angular.module("myApp")
    .controller("app.js", function () {

    });
angular.module("myApp")
    .controller("app.js", function ($scope, $http, sharedProperties) {
        $scope.role = sharedProperties.getRole();
        $scope.hello_user = "Hello " + sharedProperties.getProperty();
        $scope.$on('change-property-event', function() {
            $scope.hello_user  = "Hello " + sharedProperties.getProperty();
        });
        $scope.$on('change-role-event', function() {
            $scope.role = sharedProperties.getRole();
        });
        var uname = sharedProperties.getProperty();
        if (uname=='guest')
            uname='a';
        $http.get('http://localhost:3000/2POIforUser/'+ uname).then(function (response) {
            var data = response.data;
            document.getElementById("poi1").src=data[0].image;
            document.getElementById("poi2").src=data[1].image;
            $scope.recomend_pois1 = data[0].POI_ID+". "+data[0].name+".";
            $scope.recomend_pois2 = data[1].POI_ID+". "+data[1].name+".";
        });
        $http.get('http://localhost:3000/get_attractions_by_name/a').then(
            function (response) {
                var POIJsons = response.data;

                $scope.arrPOIAttraction = new Array();
                for (var i=0; i<Object.keys(POIJsons).length; i++) {
                    $scope.arrPOIAttraction.push({'id': POIJsons[i].POI_ID,
                        'name': POIJsons[i].name,
                        'latitude': POIJsons[i].latitude, 'longitude': POIJsons[i].longitude});
                }
                // var poi=arrPOIAttraction[0];

                // var html = poi.id +". "+poi.name+ "<br><img src='"+poi.pic+"' >";

                // $scope.answer.insertAdjacentHTML('afterend',html);
            });
    });
