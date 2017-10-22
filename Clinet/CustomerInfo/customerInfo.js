var app = app.controller("customerController", ['$scope', 'dbServices', '$stateParams', function($scope, dbServices, $stateParams) {

    var quoteId = $stateParams.quoteId;
    dbServices.findQuote(quoteId)
        .then(function mySuccess(response) {
            $scope.customer = response.data;
            //dele/te response.data._id;
            //createQuote(response.data);

        }, function myError(response) {
            console.log("err " + response)
            $scope.myWelcome = response.statusText;


        });
}]);