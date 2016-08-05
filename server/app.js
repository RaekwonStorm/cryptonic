var express = require('express');
var path = require('path');
var logger = require('morgan');
var cheerio = require('cheerio');
var request = require('request');

// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../www'));
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/modules', express.static(__dirname + '../node_modules'));

app.use('/', express.static(__dirname+'../www/js'));
app.use('/', routes);

app.use('/scraper', require('./routes/scraper.js'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
}



// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  // debug('Express server listening on port ' + server.address().port);
  console.log('Express server listening on port ' + server.address().port);
});


module.exports = app;
