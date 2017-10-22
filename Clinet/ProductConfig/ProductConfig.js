app.controller("productConfigController", ['$scope', 'dbServices', '$rootScope', '$stateParams', function ($scope, dbServices, $rootScope, $stateParams) {
    var quoteId = $stateParams.quoteId;
    $rootScope.hideConfigFun = function () {
        $scope.showConfig = false;
        $rootScope.$broadcast("hideConfig", "true");
    }
    $rootScope.$on("showConfig", function (b, data) {
        $scope.showConfig = true;
        console.log("listining broadcasr in config data " + data);
        $scope.productInfo = data;
        
        $scope.productInfo.id = quoteId;
        
    })
    $rootScope.saveQuoteItem = function () {
        $scope.productInfo.uniqueId = Date.now();
        dbServices.updateQuoteItem($scope.productInfo)
            .then(function mySuccess(response) {
                console.log(response);
                $rootScope.$emit("getQuoteItem", {});
            }, function myError(response) {
                console.log("err " + response)
                $scope.myWelcome = response.statusText;
            });
    }
}]);