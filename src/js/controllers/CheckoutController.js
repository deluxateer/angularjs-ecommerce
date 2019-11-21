module.exports = mod => {
  mod.controller('CheckoutController', [
    '$scope',
    '$http',
    function($scope, $http) {
      $scope.calculateTotal = cartItems =>
        cartItems.reduce(
          (subtotal, item) => subtotal + item.quantity * item.price,
          0
        );

      $http.get('./src/data/products.json').then(data => {
        $scope.products = data.data;
      });
    }
  ]);
};
