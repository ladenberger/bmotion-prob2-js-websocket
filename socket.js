// Establish connection to websocket server
socket = io.connect('http://localhost:19090');
socket.on('connect', function() {
  console.log('Socket.io successfully connected!');
});
socket.on('disconnect', function() {
  console.log('Socket.io successfully disconnected!');
});

// Send event to websocket server
var to_server_data = {};
socket.emit('myevent', to_server_data, function(from_server_data) {
  // Do something with from_server_data
  // E.g. handle diagram data from server
});

// Listen for event on websocket server
socket.on('myevent', function(from_server_data) {
  // Do something with from_server_data
});
