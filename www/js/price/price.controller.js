cryptonic.controller('PriceCtrl', function ($scope, PriceFactory) {


  $scope.btcPrice = function() {
    return PriceFactory.getBtc()
    .then(res => res.data)
  }

  $scope.ethPrice = PriceFactory.getEth();

});
