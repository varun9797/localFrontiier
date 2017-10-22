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
    $scope.deleteProduct = function (promoId) {
        var data = {
            "id": $stateParams.quoteId,
            "uniqueId": promoId
        }
        dbServices.deleteQuoteItemElement(data)
            .then(function mySuccess(response) {
                console.log("response " + response)
                $rootScope.$emit("getQuoteItem", {});
            }, function myError(response) {
                console.log("err " + response)
                $scope.myWelcome = response.statusText;
            });
    }
    
    $rootScope.$on("getQuoteItem", function (b, data) {
        console.log("checking broadcast...");
        var quoteId = $stateParams.quoteId;
        dbServices.findQuote(quoteId)
            .then(function mySuccess(response) {
                $scope.customer = response.data;
                var productsGroups = _.groupBy($scope.customer.quoteItems, function (item) {
                    return [item.Name].sort();
                });
                var displayItems = _.map(productsGroups, function (group) {
                    return {
                        Name: group[0].Name,
                        qty: group.length,
                        Price: group[0].Price,
                        uniqueId: group[0].uniqueId
                    }
                });
                $scope.displayItems = displayItems;
                console.log("data check " + displayItems)
            }, function myError(response) {
                console.log("err " + response)
                $scope.myWelcome = response.statusText;
            });
    });
}]);