angular
.module("app")
.controller("LoginController",
["$scope", "$state", "TestTable", "AppService",
function LoginController($scope, $state, TestTable, AppService) {

  $scope.login = function(username, password) {

    AppService.login(username, password)
    .then(accessToken => {
      console.log("LoginController", accessToken);
      $state.go("home");
    })
    .catch(err => {
      console.warn("Incorrect username/password");
    });
  };

  $scope.logout = function() {

    AppService.logout()
    .then(() => {
      $state.go("home");
    })
    .catch(err => {
      console.warn("LoginController", err);
    });
  };
}]);