'use strict';

var logger = require('../core/logger');
var io = require('socket.io');
var express = require('express');

var WEBSOCKETS_NAMESPACES = ['/ws'];

var wsserver = {
    server: null,
    socket: null,
    port: null,
    started: false,
    namespaces: WEBSOCKETS_NAMESPACES
};

exports = module.exports = wsserver;

function start(port, callback) {
    if (arguments.length === 0) {
        logger.error('Websocket server start method should have at least 1 argument');
        process.exit(1);
    }

    callback = callback || function() {};

    function listenCallback(err) {
        wsserver.server.removeListener('listening', listenCallback);
        wsserver.server.removeListener('error', listenCallback);
        callback(err);
    }


    if (wsserver.started) {
        return callback();
    }
    wsserver.started = true;

    var webserver = require('../webserver');
    wsserver.port = port;
    var realCallback = callback;
    if (webserver && webserver.server && webserver.port === wsserver.port) {
        logger.debug('websocket server will be attached to the Express server');
        wsserver.server = webserver.server;
    } else {
        logger.debug('websocket server will launch a new Express server');
        wsserver.server = express().listen(wsserver.port);
        wsserver.server.on('listening', listenCallback);
        wsserver.server.on('error', listenCallback);
        realCallback = function() {};
    }
    io.listen(wsserver.server);

  wsserver.server.on('connection', function(socket) {
    socket.emit('welcome', { message: 'Welcome!' });
  });

    realCallback();
}

wsserver.start = start;