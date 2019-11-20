module.exports = mod => {
  mod.config([
    '$routeProvider',
    $routeProvider => {
      $routeProvider
        .when('/', {
          templateUrl: './src/views/components/store.html',
          controller: 'StoreController'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);
};
