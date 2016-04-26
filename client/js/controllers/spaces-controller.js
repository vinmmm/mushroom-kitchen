app.controller('spacesController', ['$scope', '$resource', function ($scope, $resource) {
  var Space = $resource('/api/spaces');

  Space.query(function (results) {
    $scope.spaces = results;
  });

  $scope.spaces = []

  $scope.createSpace = function () {
    var space = new Space();
    space.name = $scope.spaceName;
    space.$save(function (result) {
      $scope.spaces.push(result);
      $scope.spaceName = '';
    });
  }
}]);