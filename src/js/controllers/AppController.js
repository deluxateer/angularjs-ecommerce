module.exports = mod => {
  mod.controller('AppController', [
    '$scope',
    function($scope) {
      $scope.cart = [
        {
          name: 'wam',
          price: 30.0,
          quantity: 2,
          image: 'https://picsum.photos/300/200'
        },
        {
          name: 'slam',
          price: 70.0,
          quantity: 1,
          image: 'https://picsum.photos/300/200'
        },
        {
          name: 'dam',
          price: 5.0,
          quantity: 4,
          image: 'https://picsum.photos/300/200'
        }
      ];
    }
  ]);
};
