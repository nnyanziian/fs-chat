import { StaticRouter } from 'react-router';
var express = require('express');
var path = require('path');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

function handleErrors(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
io.on('connection', function (socket) {

    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('chat out', function () {

        io.emit('chat out');
    });

    socket.on('chat typing', function (msg) {

        io.emit('chat typing', msg);
    });

    socket.on('chat not', function (msg) {

        io.emit('chat not', msg);
    });
});
http.listen(process.env.PORT || 3000, function () {
    console.log('App started');
});