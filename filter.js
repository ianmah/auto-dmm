var Twitter = require('twit');
var twit = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('420 error');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Express is running on port " + port);

var stream = twit.stream('user');

stream.on('follow', followed);

function followed(event) {
  var name = event.source.name;
  var screenName = event.source.screen_name;
  console.log('I was followed by: ' + name + ' ' + screenName);
  
  twit.post('direct_messages/new', {screen_name: screenName, text: 'Hey, ' + screenName + ' thanks for following me!'}, function(err, data, reply) {
      console.log("DM sent to :" + screenName);
      err;
    });
  
}



var http = require("http");
setInterval(function() {
    http.get("http://autodmmm.herokuapp.com");
}, 600000);