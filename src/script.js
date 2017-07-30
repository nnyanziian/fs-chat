import $ from "jquery";
//var socket = require('socket.io-client')('http://localhost:3000');
const io = require('socket.io-client');
if (checkIfloggedIn()) {

        }
        else {
            login();
        }



        $(function () {
            var snd = new Audio("/notify.mp3");
        
         var socket = io();
            var fsUsername = document.cookie.replace(/(?:(?:^|.*;\s*)fsChatUsername\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            console.log("Hey.." + fsUsername);
            $('.acc .username').html(fsUsername);
            $('.acc .logout').click(function (e) {
                e.preventDefault();
                document.cookie = 'fsChatUsername' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                socket.emit('chat message', fsUsername + " has Logged out");
                location.reload();
            });

            socket.emit('chat message', fsUsername + " has Connected");
            $('#sendMsg #m').focus(function () {
                 console.log(fsUsername+" is typing");
               socket.emit('chat option', fsUsername + " is typing...");
                //$('.typing').text(fsUsername+" is typing...");
                $(this).focusout( function(){
                    socket.emit('chat out');
                });
            });

            $('#sendMsg').submit(function () {
                socket.emit('chat message', fsUsername + ': ' + $('#m').val());
                $('#m').val('');
                $('#m:focus').blur();
                return false;
            });

           // socket.on('chat message', function (msg) {
              //  $('#messages').append($('<li>').text(msg));
                //attetion();
              //   snd.play();
          //  });

            //socket.on('chat option', function (msg = '') {
              //  $('.typing').html("");
             //   $('.typing').append($('<p class="who">').text(msg));


           // });
            
           // socket.on('chat out', function () {
          //      $('.typing').html("");
         //   });


       });


        function login() {
            var fsChatUsername = prompt("Please Enter your Username", "Anonymus");
            if (fsChatUsername == null || fsChatUsername == "" || fsChatUsername.length>20) {
                login();
                return false;
            }
            else {
                document.cookie = "fsChatUsername=" + fsChatUsername;
                alert('Logged In as: ' + fsChatUsername);
                console.log('User Logged In as: ' + fsChatUsername);

            }
        }

        function checkIfloggedIn() {
            var username = document.cookie.replace(/(?:(?:^|.*;\s*)fsChatUsername\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            if (username == null || username == "") {
                return false;
            }
            else {
                return true;

            }
        }

        function attetion(){
                var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/gif';
                link.rel = 'shortcut icon';
                link.href = '/ripple.gif';
                document.getElementsByTagName('head')[0].appendChild(link);
        }