cryptonic.factory('PriceFactory', function ($http, $resource, $q) {

  var PriceFactory = {}

  var ethData = {}

  var btcData = {}

  PriceFactory.getBtc = function () {
    $.getJSON('http://cors.io/?u=https://blockchain.info/stats?format=json',function(data){
      btcData = data;
      return btcData.market_price_usd;
    })
  }

  PriceFactory.getEth = function () {
    $http.get('https://coinmarketcap-nexuist.rhcloud.com/api/eth')
      .then(function (prices) {
        ethData = prices;
        return ethData.data.price.usd;
      })
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
