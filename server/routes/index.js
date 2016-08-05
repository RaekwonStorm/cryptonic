'use strict'
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res) {
  res.render('index');
})

router.get('/btc',function(req,res){
  request.get('https://blockchain.info/ticker', function (error, response, body) {
    if (error) return console.error(error);
    var body = JSON.parse(body);
    res.send(body);
  })
});


module.exports = router;
