'use strict';

exports = module.exports = function(app) {
    var home = require('../core/index');
    var twitter = require('./controllers/twitterCtrl');

    app.get('/', home.index);
   // app.get('/twitter/search/:key', twitter.search);
    app.get('/twitter/stream/:key', twitter.stream);
};

