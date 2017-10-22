app.factory('dbServices', ['$http', function ($http) {

    var urlBase = 'http://localhost:3000/mongo';
    var dbServices = {};

    dbServices.findUser = function (phoneNum) {
        return $http.get(urlBase+'/GetStudents');
    };
    dbServices.findAll = function () {
        return $http.get(urlBase+'/findAll');
    };
   
    return dbServices;

}]);