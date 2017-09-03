angular
.module("app", [
  "lbServices",
  "ui.router"
])
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode(true);

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "views/home.html",
      controller: "HomeController"
    })
    .state("realmtell", {
      url: "/realmtell",
      templateUrl: "views/realmtell.main.html",
      controller: "RealmTellMainController"
    });

  $urlRouterProvider.otherwise("home");
}]);