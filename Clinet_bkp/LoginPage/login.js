var app = angular.module('app');

app.controller('loginCtrl', function($scope, $http, $location, $state, dbServices) {

 var id = null; 
$scope.findUser =  function(value){
     console.log("/mongo/findUser/"+ value);
  $http({
    method : "GET",
    url : "/mongo/findUser/"+ value
  }).then(function mySuccess(response) {
      
      
      $scope.response = response.data;
      delete response.data._id;
      createQuote(response.data);
      
    }, function myError(response) {
      console.log("err "+response)
      $scope.myWelcome = response.statusText;
      
      
  });
    
    var createQuote = function(data){
     console.log("creating quote...");    
     $http.post('/mongo/add', data)
        .then(
          function (response) {
             console.log("creating quote... done "+ JSON.stringify(response.data));
             $scope.quoteId= response.data;
             id = response.data;
             $location.url(response.data+$location.path());
          },
          function (response) {
              console.log("creating quote... fail "+ response);
            
          });       
    } 
    
    $scope.goToProdPage = function(){
        if(id){
        var url = id+"/cpq";
        console.log("done   "+url);
        $location.path(url)               
        } 
    }
    
    $scope.checkservice = function(){
        console.log("starting services");
        var all = dbServices.findAll()
        .then(function (data) {
                console.log("all.... "+data)
            },function (error){

   })
            
        
        console.log("all.... "+all)
    }
    
   
 }    
$scope.Pno = "234534566";
});