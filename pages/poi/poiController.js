// poi controller
angular.module("myApp")
.controller("poiController", function ($scope,$http) {
    self = this;
    self.cities = {
        1: {name:"City Of David", state: "France", image: "https://www.tiuli.com/image/77d3450c8c1bf315674c3498705d5b83.jpg"},
        2: {name:"West Wall", state: "Israel", image: "https://cdni.rt.com/files/2017.12/article/5a3fe04efc7e93cd698b4567.jpg"},
        3: {name:"machane yehuda market", state: "England", image: "https://media-cdn.tripadvisor.com/media/photo-s/11/93/4f/d7/caption.jpg"},
        4: {name:"Teddi Stadium", state: "England", image: "https://a7.org/pictures/826/826575.jpg"},
        5: {name:"Biblical Zoo", state: "England", image: "https://www.yearimhotel.com/wp-content/uploads/2017/10/gan_hayot.jpg"},
        6: {name:"Israel Museum", state: "England", image: "https://www.itraveljerusalem.com/wp-content/uploads/2016/07/atr-israel-museum-3-768x399.jpg"},
        7: {name:"Kiftsuba", state: "England", image: "https://www.itraveljerusalem.com/wp-content/uploads/2018/01/atr-cifzuba-3-768x439.jpg"},
        8: {name:"Mamilla Boulevard", state: "England", image: "https://static.timesofisrael.com/www/uploads/2015/11/mamilla-at-night-4863-1024x640.jpg"}

    };
    $http.get('/getRandomPOI/15').then(function (response) {
        alert("sss");
        $scope.POI=response.data;
            for (var i =0; i< data.length; i++) {
                alert(data[i]);
            }
    });

    // $http.get('/getRandomPOI/20').then(function (response) {
    //     var data = response.data;
    //     for (var i =0; i< data.length; i++){
    //         alert(data[i]);
    //     }
    // });
    // self.cities = {
    //     1: {name:"City Of David", state: "France", image: "https://www.tiuli.com/image/77d3450c8c1bf315674c3498705d5b83.jpg"},
    //     2: {name:"West Wall", state: "Israel", image: "https://cdni.rt.com/files/2017.12/article/5a3fe04efc7e93cd698b4567.jpg"},
    //     3: {name:"machane yehuda market", state: "England", image: "https://media-cdn.tripadvisor.com/media/photo-s/11/93/4f/d7/caption.jpg"},
    //     4: {name:"Teddi Stadium", state: "England", image: "https://a7.org/pictures/826/826575.jpg"},
    //     5: {name:"Biblical Zoo", state: "England", image: "https://www.yearimhotel.com/wp-content/uploads/2017/10/gan_hayot.jpg"},
    //     6: {name:"Israel Museum", state: "England", image: "https://www.itraveljerusalem.com/wp-content/uploads/2016/07/atr-israel-museum-3-768x399.jpg"},
    //     7: {name:"Kiftsuba", state: "England", image: "https://www.itraveljerusalem.com/wp-content/uploads/2018/01/atr-cifzuba-3-768x439.jpg"},
    //     8: {name:"Mamilla Boulevard", state: "England", image: "https://static.timesofisrael.com/www/uploads/2015/11/mamilla-at-night-4863-1024x640.jpg"}

    //}
});
