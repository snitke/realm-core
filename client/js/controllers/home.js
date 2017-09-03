angular
.module("app")
.controller("HomeController",
["$scope", "$state", "TestTable",
function HomeController($scope, $state, TestTable) {

  TestTable.findById({
    id: 3
  })
  .$promise
  .then(function(result) {
    $scope.result = result.id;
  })
  .catch(function(err) {
    console.log(err);
  });
}]);