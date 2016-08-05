cryptonic.controller('PriceCtrl', function ($scope, PriceFactory) {

  PriceFactory.getBtc()
    .then(function (price) {
      // console.log(price)
      $scope.$apply(function () {
        $scope.btcPrice = "$"+price.market_price_usd.toFixed(2);
      })
    })
    .then(function () {
      PriceFactory.trailingMonthBtc()
      .then(function (priceHistory) {
        var yesterdayClose = priceHistory[priceHistory.length-1];
        $scope.btcPriceChangePct = ((parseFloat($scope.btcPrice.substring(1))/yesterdayClose - 1) * 100).toFixed(2) + '%'
        $scope.btcPriceChange = '$'+(parseFloat($scope.btcPrice.substring(1)) - yesterdayClose).toFixed(2)
        console.log($scope.btcPriceChange)
      })
    })
    .catch(console.error);


  PriceFactory.getEth()
    .then(function (price) {
      $scope.ethPrice = "$" +price.toFixed(2);
    })
    .catch(console.error);

});
