const storeController = require('./controllers/StoreController');

const ec = angular.module('eCommerce', ['ngRoute']);

ec.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/components/store.html',
      controller: 'StoreController',
    })
    .otherwise({
      redirectTo: '/',
    })
}])

storeController(ec);

