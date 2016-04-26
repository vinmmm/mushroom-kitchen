app.controller('storesController', ['$scope', '$resource', function ($scope, $resource) {
  var Store = $resource('/api/stores');

  Store.query(function (results) {
    $scope.stores = results;
  });

  $scope.stores = []

  $scope.createStore = function () {
    var store = new Store();
    store.name = $scope.storeName;
    store.$save(function (result) {
      $scope.stores.push(result);
      $scope.storeName = '';
    });
  }
}]);

