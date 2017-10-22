app.controller("productConfigController", ['$scope','$rootScope',function($scope, $rootScope) {


    $rootScope.hideConfigFun = function(){
        $scope.showConfig=false;
        $rootScope.$broadcast("hideConfig", "true");
     }
    
     $rootScope.$on("showConfig", function(b, data){
         $scope.showConfig=true;
        console.log("listining broadcasr in config data "+data );
    })
                                                                   
}]);