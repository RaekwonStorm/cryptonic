cryptonic.controller('PriceCtrl', function ($scope, PriceFactory) {

  PriceFactory.getBtc()
    .then(function (price) {
      // gets current btc price, must use $scope.$apply since the api call used jquery and not angular
      $scope.$apply(function () {
        $scope.btcPrice = "$"+price.market_price_usd.toFixed(2); // formats with $ and 2 decimal places.
      })
    })
    .then(function () {
      PriceFactory.trailingMonthBtc()
      .then(function (priceHistory) {

        // gets trailing month price data, saves most recent as yesterdayClose
        var yesterdayClose = priceHistory[priceHistory.length-1];

        // simple calculations to get price change %/$ and formatting
        $scope.btcPriceChangePct = ((parseFloat($scope.btcPrice.substring(1))/yesterdayClose - 1) * 100).toFixed(2) + '%'
        $scope.btcPriceChange = (parseFloat($scope.btcPrice.substring(1)) - yesterdayClose).toFixed(2)
      })
    })
    .then(function () {
      PriceFactory.getEth()
      .then(function (ethData) {
        var ethPrice = ethData.price.usd
        var priceChangePct = parseFloat(ethData.change);
        var priceChange = ethPrice - (ethPrice/((priceChangePct/100)+1))

        $scope.ethPrice = "$"+ethPrice.toFixed(2);
        $scope.ethPriceChangePct = ethData.change+'%'
        $scope.ethPriceChange = priceChange.toFixed(2);
      })
      .then(function () {
        if ($scope.ethPrice && $scope.btcPrice) {
        var homeCurrency = 100
        $scope.strategy = PriceFactory.strategy(homeCurrency);
        }
      })
    })
    .catch(console.error);

  $scope.isNegative = PriceFactory.isNegative;

});
