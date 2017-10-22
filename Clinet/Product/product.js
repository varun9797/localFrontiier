app.controller("productController", ['$scope', '$rootScope', '$state', 'dbServices', function ($scope, $rootScope, $state, dbServices) {
    var configData = [];
    $scope.showConfig = false;
    $rootScope.viewConfig = function (productInfo) {
        $scope.showConfig = true;
        //var productInfo = {productName, packageType}
        console.log("productInfo " + JSON.stringify(productInfo))
        $rootScope.$broadcast("showConfig", productInfo);
    }
    $rootScope.$on("hideConfig", function (b, data) {
        $scope.showConfig = false;
        console.log("hideConfig broadcast in product data " + data);
    })
    $rootScope.$on("broadbandProductsBroadcast", function (b, data) {
        var broadbandProductArray = [];
        _.find(data, function (dataItem) {
            broadbandProductArray.push(dataItem);
            configData = dataItem;
        });
        $scope.broadbandProductArray = broadbandProductArray;
    });
    $rootScope.$on("voiceProductsBroadcast", function (b, data) {
        var voiceProductArray = [];
        _.find(data, function (dataItem) {
            voiceProductArray.push(dataItem);
            console.log("configData " + configData);
        });
        $scope.voiceProductArray = voiceProductArray;
    });
    $rootScope.$on("videoProductsBroadcast", function (b, data) {
        var videoProductArray = [];
        _.find(data, function (dataItem) {
            videoProductArray.push(dataItem);
        });
        $scope.videoProductArray = videoProductArray;
    });
    $scope.selectBroadbandProduct = function (productName, $index) {
        console.log(this.broadbandProductArray[$index]);
        console.log("prod name " + productName);
    }
}]);