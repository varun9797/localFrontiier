var app = angular.module('app');


app.controller("HelloController", ['$scope','$rootScope',function($scope,$rootScope) {

    
    //Package Info
    $scope.Broadband = "Broadband";
    $scope.hvp = "High Value Products";
    $scope.video = "Video";
    $scope.voice = "Voice";
    
    
        
    $scope.showVoice = false;
    $scope.showVideo = false;
    $scope.showBroadband = false;
    
    
    $scope.showVoiceFunction = function(){
        $scope.showVoice = true;
        $scope.showVideo = false;
        $scope.showBroadband = false;
    }
    $scope.showVideoFunction = function(){
        $scope.showVoice = false;
        $scope.showVideo = true;
        $scope.showBroadband = false;
    }
    $scope.showBroadbandFunction = function(){
        $scope.showVoice = false;
        $scope.showVideo = false;
        $scope.showBroadband = true;
    }
    
    $scope.$on("myFirstBraodcast", function(b, data){
        console.log("listining broadcasr fsdsd");
    })
    
}]);





app.directive("prodHeader", function() {
  return {
	templateUrl: 'Header/header.html'
  };
});
app.directive("packageType", function() {
  return {
	templateUrl: 'Package/package.html'
  };
});
app.directive("productType", function() {
  return {
	templateUrl: 'Product/product.html'
  };
}); 
app.directive("prodConfig", function() {
  return {
	templateUrl: 'ProductConfig/ProductConfig.html'
  };
});
app.directive("customerInfo", function() {
  return {
	templateUrl: 'CustomerInfo/customerInfo.html'
  };
});
app.directive("productInfo", function() {
  return {
	templateUrl: 'ProductInfo/productInfo.html'
  };
});



