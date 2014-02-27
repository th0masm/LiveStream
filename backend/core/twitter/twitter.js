var Twit = require('twit');

var twit = new Twit({
  consumer_key: 'ln2R4nmHKYycDJLKLH1Ag',
  consumer_secret: 'axGDggODLaaGLffPTglzlcAXuhE8uJTEc2kyAN5pF90',
  access_token: '16795146-HG66hsbooylMtXIOzYIG896ktZT5DCmYEJVeo74KN',
  access_token_secret: 'IRRoBai1q4qzdhxlHcl8A1F9oFV9VoOO11VbnxGaGBb6S'
});

exports.search = function(req, res){
  var key = req.params.key;
  twit.get('search/tweets', { q: key, count: 1 }, function(err, reply) {
    res.json(200, {text: reply});
  });
};

exports.stream = function(req, res){
  var stream = twit.stream('statuses/filter', { track: req.params.key })
  stream.on('tweet', function (tweet) {
    console.log('TWEET');
    var wsserver = require('../../wsserver');
    //wsserver.socket.emit('news', {hello:'world'});
    //res.json(200, {text: tweet});
  });
}