'use strict'
var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

router.get('/scraper', function(req, res) {
    console.log('hello');
    var url = 'https://www.coingecko.com/en/price_charts/ethereum/usd';
    var ETH_ARRAY = [];

    request(url, function(error, response, html) {
        if (!error) {

            var $ = cheerio.load(html, {
                ignoreWhitespace: true
            });

            var date, price;
            var json = { date: "", price: "" };

            $('h2').each(function(i, element) {
                // console.log('what dis', i, $(this).next().children().first().attr('data-prices'))
                if (i === 3) ETH_ARRAY.push($(this).next().children().first().attr('data-prices'))
            })

            res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
            res.send(JSON.parse(ETH_ARRAY[0]))
        }
    })

});


module.exports = router;
