const M = require('../lib/materialize.min');

module.exports = mod => {
  mod.controller('AppController', [
    '$scope',
    function($scope) {
      $scope.cart = [];

      $scope.removeFromCart = cartItem => {
        $scope.cart = $scope.cart.filter(
          itemInCart => itemInCart.name !== cartItem.name
        );
        M.toast({ html: `${cartItem.name} has been removed` });
      };

      $scope.updateCart = (product, requestedQuantity) => {
        for (cartItem of $scope.cart) {
          if (cartItem.name === product.name) {
            cartItem.quantity = cartItem.quantity + requestedQuantity;

            if (cartItem.quantity === 0) {
              $scope.removeFromCart(cartItem);
              return;
            }

            M.toast({ html: 'The cart has been updated' });
            return;
          }
        }

        $scope.cart.push({
          name: product.name,
          price: product.price,
          quantity: requestedQuantity,
          image: product.image
        });
        M.toast({ html: `Added ${product.name}` });
      };
    }
  ]);
};
