angular
.module("app", [
  "lbServices",
  "ui.router"
])
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/static/modules/login/login.html",
    controller: "LoginController"
  })
  .state("realmtell", {
    url: "/realmtell",
    templateUrl: "/static/modules/realmtell/start/start.html",
    controller: "RealmTellMainController"
  })
  .state("login", {
    url: "/login",
    templateUrl: "/static/modules/login/login.html",
    controller: "LoginController"
  });

  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");
}]);