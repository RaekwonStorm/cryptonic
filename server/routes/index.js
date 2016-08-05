'use strict'
var express = require('express');
var router = express.Router();
var request = require('request');

// router.get('/scraper', function(req, res) {
//     var url = 'https://www.coingecko.com/en/price_charts/ethereum/usd';

//     request(url, function(error, response, html) {
//         if (!error) {

//             var $ = cheerio.load(html);

//             var date, price;
//             var json = { date: "", price: "" };



//             $('h2').filter(function(){
//             	return $(this).text() === "Ethereum (ETH/USD) 30 Days Price Chart";
//             })

//         }
//     })
// });


module.exports = router;
