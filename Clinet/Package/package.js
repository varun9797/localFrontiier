app.controller("packageController", ['$scope', '$rootScope', '$state', 'dbServices', function ($scope, $rootScope, $state, dbServices) {
    dbServices.findAll()
        .then(function (product) {
            // console.log("all.... "+JSON.stringify(data))
            /* _.forEach(product.data, function(value, key) {
                 //console.log(value, key);
                 console.log("value "+JSON.stringify(value));
                 console.log("key "+ key);
             }); */
            var broadbandProducts = _.where(product.data, {
                PackageType: "broadband"
            });
            var voiceProducts = _.where(product.data, {
                PackageType: "voice"
            });
            var videoProducts = _.where(product.data, {
                PackageType: "video"
            });
            $rootScope.$broadcast("broadbandProductsBroadcast", broadbandProducts);
            $rootScope.$broadcast("voiceProductsBroadcast", voiceProducts);
            $rootScope.$broadcast("videoProductsBroadcast", videoProducts);
            var check1 = _.findWhere(product.data, {
                Name: "Digital Phone Unlimited"
            });
            console.log("check1 ..")
            console.log(check1)
                //return data;
        }, function (error) {
        })
    $scope.showVoiceFunction = function () {
        $rootScope.showVoice = true;
        $rootScope.showVideo = false;
        $rootScope.showBroadband = false;
    }
    $scope.showVideoFunction = function () {
        $rootScope.showVoice = false;
        $rootScope.showVideo = true;
        $rootScope.showBroadband = false;
    }
    $scope.showBroadbandFunction = function () {
        $rootScope.showVoice = false;
        $rootScope.showVideo = false;
        $rootScope.showBroadband = true;
    }
}]);