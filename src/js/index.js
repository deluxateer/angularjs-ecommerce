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
      info: '='
    },
    template: '<h3>hello</h3>',
    controller: $scope => {}
  })
]);

// Include Controllers
storeController(ec);
