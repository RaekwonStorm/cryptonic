cryptonic.factory('PriceFactory', function ($http, $resource, $q) {

  var PriceFactory = {};

  var ethData = {};
  var btcData = {};
  var btcHist = {};
  var btcClosePrice = [];

  PriceFactory.getBtc = function () {
    return $.getJSON('http://cors.io/?u=https://blockchain.info/stats?format=json',function(data){
      btcData = data;
      return btcData;
    });
  }

  PriceFactory.getEth = function () {
    return $http.get('https://coinmarketcap-nexuist.rhcloud.com/api/eth')
      .then(function (prices) {
        ethData = prices;
        return ethData.data;
      })
  }

  PriceFactory.trailingMonthBtc = function () {
    return $http.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(function (priceHistory) {
        btcHist = priceHistory.data.bpi;
        for (var key in priceHistory.data.bpi) {
          btcClosePrice.push(priceHistory.data.bpi[key])
        }
        return btcClosePrice;
      });
  }

  PriceFactory.isNegative = function (numStr) {
    return (parseFloat(numStr) < 0)
  }

  PriceFactory.convertUsdToBtc = function () {

  }

  PriceFactory.convertUsdToEth = function () {

  }

  PriceFactory.convertEthToBtc = function () {

  }

  PriceFactory.convertBtcToEth = function () {}

  return PriceFactory;

});
