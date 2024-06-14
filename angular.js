var app=angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{templateUrl: "trangchu.html",controller: "myCtrl"})
    .when("/gioithieu",{templateUrl: "gioithieu.html",controller: "myCtrl"})
    .when("/lienhe",{templateUrl: "lienhe.html",controller: "myCtrl"})
    .when("/detail/:id",{templateUrl: "chitiet.html",controller: "myCtrl"},)
    .otherwise({templateUrl: "trangchu.html",controller: "myCtrl"})
});
app.controller("myCtrl",function ($scope, $rootScope, $routeParams, $http, $window) {
    $scope.products = [];
    $http.get("http://localhost:3000/products").then(function (response) {
        $scope.products = response.data;
        console.log($scope.products);
        $scope.detailPro=$scope.products.find(item=>item.id==$routeParams.id);
    });
    $scope.sort='price_after';
    $scope.tang=function(){
        $scope.sort='price_after';
    }
    $scope.giam=function(){
        $scope.sort='-price_after';
    }
    $scope.category='';
});  
