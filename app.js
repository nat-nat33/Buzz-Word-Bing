var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var buzzwordRoute = require('./routes/buzzwords');
var resetRoute = require('./routes/routesReset');

var bingo = {
  buzzWords : [],
  score : 0
};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use( function(req, res, next) {
  req.bingo = bingo;
  next();
});
app.use('/buzzwords,', buzzwordRoute);
app.use('/routesReset', resetRoute);


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s%s', host, port);
});