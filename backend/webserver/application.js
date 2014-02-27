'use strict';
var express = require('express');
var path = require('path');
var frontendPath = path.normalize(__dirname + '/../../frontend');

var application = express();
exports = module.exports = application;
application.set('views', frontendPath + '/views');
application.set('view engine', 'jade');

application.use(express.logger());
application.use('/components', express.static(frontendPath + '/components'));
application.use('/images', express.static(frontendPath + '/images'));
application.use('/javascripts', express.static(frontendPath + '/javascripts'));

application.use(express.json());

require('./routes')(application);