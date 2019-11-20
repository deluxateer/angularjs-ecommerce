const init = require('./config');
const storeController = require('./controllers/StoreController');

const ec = angular.module('eCommerce', ['ngRoute']);

// Initialize config for ecommerce module
init(ec);

// Include Directives
ec.directive('product', [
  () => ({
    restrict: 'E',
    scope: {
      product: '='
    },
    template: '<p>{{product.name}}</p>',
    controller: $scope => {}
  })
]);

// Include Controllers
storeController(ec);
