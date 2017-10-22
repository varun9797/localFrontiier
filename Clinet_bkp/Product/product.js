
app.controller("productController", ['$scope','$rootScope','$state' ,function($scope, $rootScope,$state) {

   // mongodbApp.perfromDbOperation("findSpecific",  { "PackageType": "voice" });
   $scope.showConfig=false;
    
    $scope.voiceProductArray = [{productName:"Digital Phone Unlimited "},
                            {productName:"Digital Phone Extreme"},
                            {productName:"One Residential Party"},
                            {productName:"voice party 1"},
                            {productName:"voice party 2"}
                            ];
    $scope.videoProductArray = [{productName:"Dish"},
                            {productName:"TV Extreme"},
                            {productName:"TV Ultimate"}
                            ];
    $scope.broadbandProductArray = [{productName:"Simply Lite"},
                            {productName:"Simply Max"},
                            {productName:"100/100M"},
                            {productName:"75/75M"}
                            ];
    
     $rootScope.viewConfig = function(){
        $scope.showConfig=true;
        $rootScope.$broadcast("showConfig", "true");
     }
     $rootScope.$on("hideConfig", function(b, data){
         $scope.showConfig=false;
        console.log("hideConfig broadcast in product data "+data);
    })
    
        $scope.gotoState=function(){
        $state.go('state1');
    }
                                                                   
}]);
    