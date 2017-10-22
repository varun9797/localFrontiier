app.factory('dbServices', ['$http', function ($http) {

    var urlBase = 'http://localhost:3000/mongo';
    var dbServices = {};

    dbServices.findUser = function (phoneNum) {
        return $http.get(urlBase+'/findUser/'+phoneNum);
    };
    dbServices.findAll = function () {
        return $http.get(urlBase+'/findAll');
    };
    dbServices.createQuote = function (data) {
        return $http.post(urlBase+'/add',data);
    };
    dbServices.findQuote = function (guid) {
        return $http.get(urlBase+'/findQuote/'+guid);
    };
    dbServices.updateQuoteItem = function (data) {
        return $http.post(urlBase+'/update', data);
    };
    dbServices.deleteQuoteItemElement = function (data) {
        return $http.post(urlBase+'/deleteElement', data);
    };
    return dbServices;

}]);