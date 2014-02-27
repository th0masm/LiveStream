var socket = io.connect('http://localhost:8080');
socket.on('welcome', function(data) {
  console.log(data);
});

socket.on('tweet', function(data) {
  console.log(data);
});