module.exports = mod => {
  mod.config([
    '$routeProvider',
    $routeProvider => {
      $routeProvider
        .when('/', {
          templateUrl: './src/views/components/store.html',
          controller: 'StoreController'
        })
        .when('/checkout', {
          templateUrl: './src/views/components/checkout.html',
          controller: 'CheckoutController'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);
};
