'use strict';

var twitter = require('../../core/twitter/twitter');

function stream(req, res) {
  var wsserver = require('../../wsserver');
  wsserver.server.on('init',function(data){
      console.log(data);
  });
  twitter.stream(req, res);
}
module.exports.stream = stream;