var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var buzzObject = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/buzzwords', function(req, res){
  res.json({ buzzWords : buzzObject});
});

app.post('/buzzwords', function(req, res){
  var objArr = Object.keys(req.body);
  if (objArr.length === 0){
    return res.status(400).send('error body empty');
  }
  if (typeof req.body.buzzword === 'string' &&
    req.body.hasOwnProperty('score')){
    req.body.score = Number(req.body.score);
    buzzObject.push(req.body);
  }
});

app.put('/buzzwords', function(req, res){
  if (!req.body){
    return res.sendStatus(400);
  }
  for (var i = 0; i < buzzObj.length; i++){
    console.log('buzzObj.buzzword',buzzObj[i].buzzword);
    console.log('req.body.buzzword',req.body.buzzword);
    console.log(req.body.buzzword === buzzObj[i].buzzword);
    if ((buzzObj[i].buzzword == req.body.buzzword) &&
      req.body.hasOwnProperty('heard')){
      buzzObj[i].heard = Boolean(req.body.heard);
    console.log('buzzObj[i]',buzzObj[i]);
      return res.send({ "success" : true, "newScore" : buzzObj.score });
    }

  }
});




var server = app.listen(3000, function(){
  console.log("connected");
});