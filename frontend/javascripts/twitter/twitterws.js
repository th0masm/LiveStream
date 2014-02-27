var socket = io.connect('http://localhost:8080');
socket.on('welcome', function(data) {
  console.log('VERGE');
});

socket.on('error', function() { console.error(arguments) });
socket.on('message', function() { console.log(arguments) });