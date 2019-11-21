const init = require('./config');
const productDirective = require('./directives/product');
const cartItemDirective = require('./directives/cartItem.js');
const appController = require('./controllers/AppController');
const storeController = require('./controllers/StoreController');
const checkoutController = require('./controllers/CheckoutController');

const ec = angular.module('eCommerce', ['ngRoute']);

// Initialize config for ecommerce module
init(ec);

// Include Directives
productDirective(ec);
cartItemDirective(ec);

// Include Controllers
appController(ec);
storeController(ec);
checkoutController(ec);
