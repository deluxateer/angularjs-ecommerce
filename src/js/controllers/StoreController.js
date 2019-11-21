module.exports = mod => {
  mod.controller('StoreController', [
    '$scope',
    '$http',
    function($scope, $http) {
      $http.get('./src/data/products.json').then(data => {
        $scope.products = data.data;
      });
    }
  ]);
};
