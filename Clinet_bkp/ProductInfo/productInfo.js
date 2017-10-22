var app= app.controller("productInfoController", ['$scope',function($scope) { 
    $scope.address = "A-5 Sanjeevni Society pune";    
    
    $scope.$on("myFirstBraodcast", function(b, data){
        console.log("listining broadcasr in product info");
    })
    
}]);
    