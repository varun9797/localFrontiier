var app = angular.module("app", ['ui.router', 'underscore']);
app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
    //var paramValue = $location.search().myParam;
    //console.log("param Value "+paramValue);
    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "LoginPage/login.html",
            controller: "loginCtrl"
        })
        .state("cpq", {
            url: "/:quoteId/cpq",
            templateUrl: "cpqPage.html",
            controller: "HelloController",
            params: {
                quoteId: null
            }
        });
    $urlRouterProvider.otherwise('/login');
    //$locationProvider.html5Mode(true);      
});
//app.exports= app;