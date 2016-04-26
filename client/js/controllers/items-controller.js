app.controller('itemsController', ['$scope', '$resource', function ($scope, $resource) {
  var Item = $resource('/api/items');

  Item.query(function (results) {
    $scope.items = results;
  });

  $scope.items = []

  $scope.createItem = function () {
    var item = new Item();
    item.name = $scope.itemName;
    item.$save(function (result) {
      $scope.items.push(result);
      $scope.itemName = '';
    });
  }
}]);




app.controller('myController', ['$scope', '$http', 
              function ($scope, $http) {
  $scope.items = {};
  $scope.kitchenItems = {};
  $scope.status = "";
  $scope.resetStore = function () {
    $scope.status = "";
    $http.get('/api/items')
    .success(function (data, status, headers, config) {
      $scope.items = data;
    })
    .error(function (data, status, headers, config) {
      $scope.status = data;
    });


  };

  $scope.buyItem = function (buyItem){
    $http.post('/api/items', {item:buyItem})
    .success(function (data, status, headers, config) {
      $scope.items = data;
      if ($scope.kitchenItems.hasOwnProperty(buyItem)) {
        $scope.kitchenItems[buyItem] += 1;
      } else {
        $scope.kitchenItems[buyItem] = 1;

      }

      $scope.status = "Purchased " + buyItem;

    })

    .error(function (data, status, headers, config){
      $scope.status = data.msg;

  });

};

$scope.useItem = function (useItem){
  if ($scope.kitchenItems[useItem] > 0){
    $scope.kitchenItems[useItem] -= 1;

  }
};


  
}]);