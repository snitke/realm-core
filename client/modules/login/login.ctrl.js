angular
.module("app")
.controller("LoginController",
["$scope", "$state", "TestTable", "AppService",
function LoginController($scope, $state, TestTable, AppService) {

  $scope.register = function(username, email, password) {
    debugger;
    AppService.register(username, email, password)
    .then(user => {
      console.log("LoginController", user[0]);
      $state.go("home");
    })
    .catch(err => {
      debugger;
      console.warn("Incorrect username/password");
    });
  };

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