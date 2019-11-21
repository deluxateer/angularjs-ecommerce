const M = require('../lib/materialize.min');

module.exports = mod => {
  mod.controller('CheckoutController', [
    '$scope',
    '$http',
    '$location',
    function($scope, $http, $location) {
      $scope.calculateTotal = cartItems =>
        cartItems.reduce(
          (subtotal, item) => subtotal + item.quantity * item.price,
          0
        );

      $scope.submitBilling = billing => {
        // make API call to send billing info to backend (ie Stripe)
        console.table(billing);

        billing = {};
        $scope.cart.length = 0;

        $location.path('/');
        M.toast({ html: 'Thank you for ordering!' });
      };

      $http.get('./src/data/products.json').then(data => {
        $scope.products = data.data;
      });
    }
  ]);
};
