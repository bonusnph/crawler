
var url = require('url');
var request = require('request');
var URL = require('url-parse');
var express = require('express');
var app = express();
var crawler = require('./crawler.js');

app.get('/temp', function(req, res) {

    console.log(tmp);
});

app.get('/', function(req, res) {
  var result;
  crawler.getData('http://www.thairath.co.th/content/880611', function(callback) {
      console.log(callback);
  });
});

/* var check = true;
  do{
    crawler.getData('http://www.thairath.co.th/content/3', function(err, content) {
        if (err) {
            console.error("Got an error", err);
        } else {
            console.log(content);
        }
    });
  }
  while(check)

*/
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
