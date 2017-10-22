var app = angular.module('app');
app.controller("HelloController", ['$scope', '$rootScope', function ($scope, $rootScope) {
    //Package Info
    $scope.Broadband = "Broadband";
    $scope.hvp = "High Value Products";
    $scope.video = "Video";
    $scope.voice = "Voice";
    $scope.showVoice = false;
    $scope.showVideo = false;
    $scope.showBroadband = false;
    $scope.$on("myFirstBraodcast", function (b, data) {
        console.log("listining broadcasr fsdsd");
    })
}]);
app.directive("prodHeader", function () {
    return {
        templateUrl: 'Header/header.html',
        controller: 'customerController'
    };
});
app.directive("packageType", function () {
    return {
        templateUrl: 'Package/package.html'
    };
});
app.directive("productType", function () {
    return {
        templateUrl: 'Product/product.html'
    };
});
app.directive("prodConfig", function () {
    return {
        templateUrl: 'ProductConfig/ProductConfig.html'
    };
});
app.directive("customerInfo", function () {
    return {
        templateUrl: 'CustomerInfo/customerInfo.html',
        controller: 'customerController'
    };
});
app.directive("productInfo", function () {
    return {
        templateUrl: 'ProductInfo/productInfo.html'
    };
});