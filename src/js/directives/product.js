module.exports = mod => {
  mod.directive('product', [
    () => ({
      restrict: 'E',
      scope: {
        product: '=',
        updateCart: '='
      },
      templateUrl: './src/views/components/product.html',
      replace: true
    })
  ]);
};
