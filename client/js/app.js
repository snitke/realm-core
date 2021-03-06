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
    templateUrl: "/static/modules/reports/create/create.html",
    controller: "ReportCreateController"
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
  })
  .state("about", {
    url: "/about",
    templateUrl: "/static/modules/about/about.html",
    controller: "AboutController"
  })
  .state("reportcreate", {
    url: "/report/create",
    templateUrl: "/static/modules/reports/create/create.html",
    controller: "ReportCreateController"
  })
  .state("reportlist", {
    url: "/report/list",
    templateUrl: "/static/modules/reports/list/list.html",
    controller: "ReportListController"
  });

  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");
}]);