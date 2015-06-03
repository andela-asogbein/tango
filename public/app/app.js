angular.module("Tango",[])
  .factory("userService",['$http',function($http){
    //var baseUrl = "https://localhost:3000/subscribe";
    var baseUrl =  "https://tangong.herokuapp.com/subscribe";
    return{
      save: function(data){
        return $http.post(baseUrl,{email:data});
      },
      get: function(){
        return $http.get(baseUrl);
      }
    }

  }])
  .controller("userCtrl",['$scope','userService',function($scope,userService){
    $scope.displayForm = true;
    $scope.displayMessage = false;
    $scope.subscribe = function(email){
      console.log(1,email);
    userService.get().success(function(data){
      console.log(data)
    })
    console.log(2,email);
    userService.save(email)
        .success(function(data){
          console.log("successfull");
          $scope.displayForm = false;
          $scope.displayMessage = true;
        });
    }


  }])
