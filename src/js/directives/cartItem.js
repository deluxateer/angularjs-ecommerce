module.exports = mod => {
  mod.directive('cartItem', [
    () => ({
      restrict: 'E',
      scope: {
        name: '=',
        price: '=',
        quantity: '=',
        image: '='
      },
      templateUrl: './src/views/components/cart-item.html',
      replace: true
    })
  ]);
};
