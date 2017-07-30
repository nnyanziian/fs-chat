var express = require('express');
var path = require('path');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);



app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
    
});

io.on('connection', function (socket) {
   // console.log('a user has connected');
   //io.emit('chat message', "user connected");
   socket.on('disconnect', function(msg){
      //console.log('user disconnected');
  //io.emit('chat notification', msg);
   });

    //get emitted chat msg
    socket.broadcast.emit('chat message');
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });


    socket.broadcast.emit('chat option');
    socket.on('chat option', function (msg) {
        console.log(msg);
        io.emit('chat option', msg);
    });

    socket.broadcast.emit('chat out');
    socket.on('chat out', function () {
       
        io.emit('chat out');
    });

        socket.broadcast.emit('chat typing');
    socket.on('chat typing', function (msg) {
       
        io.emit('chat typing', msg);
    });

});

http.listen(3000, function() {
  console.log('listening on 127.0.0.1:3000');
});