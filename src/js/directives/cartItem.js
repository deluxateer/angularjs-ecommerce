module.exports = mod => {
  mod.directive('cartItem', [
    () => ({
      restrict: 'E',
      scope: {
        name: '=',
        price: '=',
        quantity: '=',
        image: '=',
        updateCart: '=',
        removeFromCart: '='
      },
      templateUrl: './src/views/components/cart-item.html',
      replace: true
    })
  ]);
};
