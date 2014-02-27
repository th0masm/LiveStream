'use strict';

var twitter = require('../../core/twitter/twitter');

function stream(req, res) {
    var wsserver = require('../../wsserver');
  //socket.wsserver.emit('lamouce');
  wsserver.server.emit('lamouche');
  return twitter.stream(req, res);
}
module.exports.stream = stream;