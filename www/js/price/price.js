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

  PriceFactory.strategy = function (homeCurrency) {

    var homeToBtc = (homeCurrency/btcData.market_price_usd);
    var btcToEth = (homeToBtc/ethData.data.price.btc);
    var ethToDollar = (btcToEth * ethData.data.price.usd);

    var homeToEth = (homeCurrency/ethData.data.price.usd);
    var ethToBtc = (homeToEth * ethData.data.price.btc);
    var btcToDollar = (ethToBtc*btcData.market_price_usd);

    if (ethToDollar > 0 && ethToDollar > btcToDollar) {
      return {strategy: 'Btc', profit: PriceFactory.formatUsd(ethToDollar), step1: PriceFactory.formatBtc(homeToBtc), step2: PriceFactory.formatEth(btcToEth)};
    } else if (btcToDollar > 0 && btcToDollar > ethToDollar) {
      return {strategy: 'Eth', profit: PriceFactory.formatUsd(btcToDollar), step1: PriceFactory.formatEth(homeToEth), step2: PriceFactory.formatBtc(ethToBtc)};
    } else return undefined;
  }

  PriceFactory.formatEth = function (currency) {
    return "Ξ"+currency.toFixed(2);
  }

  PriceFactory.formatBtc = function (currency) {
    return "฿"+currency.toFixed(6);
  }

  PriceFactory.formatUsd = function (currency) {
    return "$"+currency.toFixed(2);
  }

  return PriceFactory;

});
