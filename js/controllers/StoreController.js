module.exports = (mod) => {
  mod.controller('StoreController', ['$scope', '$http', function($scope, $http){
    $scope.dank = 'memes';
    $http
      .get('../data/products.json')
      .then(data => { $scope.products = data.data; });
  }]);
};