var home = require('./core/index');
var twitter = require('./core/twitter');

module.exports = function(app){
    app.get('/', home.index);
    app.get('/twitter/search/:key', twitter.search);
    app.get('/twitter/stream/:key', twitter.stream);
};