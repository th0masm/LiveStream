
var socket = io.connect('http://localhost:8081');
socket.on('init',function(msg){
  console.log(msg.hello);
});