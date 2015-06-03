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
    $scope.displayNotif = '';
    $scope.subscribe = function(email){
    if(!email){
      $scope.displayNotif = "Please Enter an Email";
      return;
    }
    userService.get().success(function(data){
      console.log(data)
    })
    userService.save(email)
        .success(function(data){
          $scope.displayForm = false;
          $scope.displayMessage = true;
          $scope.displayNotif = '';

        });
    }


  }])
