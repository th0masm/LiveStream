'use strict';

var twitter = require('../../core/twitter/twitter');

function stream(req, res) {
  twitter.stream(req, res);
}
module.exports.stream = stream;