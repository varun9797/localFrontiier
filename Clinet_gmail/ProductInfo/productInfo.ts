var app = app.controller("productInfoController", ['$scope', 'dbServices', '$rootScope', '$stateParams', function ($scope, dbServices, $rootScope, $stateParams) {
    $scope.address = "A-5 Sanjeevni Society pune";
    $scope.$on("myFirstBraodcast", function (b, data) {
        console.log("myFirstBraodcast product info");
    })
    $scope.getTotal = function () {
        var total = 0;
        if($scope.customer && $scope.customer.quoteItems && $scope.customer.quoteItems.length > 0) {
            for(var i = 0; i < $scope.customer.quoteItems.length; i++) {
                var product = $scope.customer.quoteItems[i];
                total += Number(product.Price);
            }
            return total;
        } else return 0;
    }
    $rootScope.$on("getQuoteItem", function (b, data) {
        console.log("checking broadcast...");
        var quoteId = $stateParams.quoteId;
        dbServices.findQuote(quoteId)
            .then(function mySuccess(response) {
                $scope.customer = response.data;
            }, function myError(response) {
                console.log("err " + response)
                $scope.myWelcome = response.statusText;
            });
    });
}]);