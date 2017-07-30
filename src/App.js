import React, { Component } from 'react';
import { mbStyle, mtStyle, nbStyle } from './styles.js';
import './font-awesome/css/font-awesome.min.css';
import mainLogo from './logoWhite.png';
import './App.css';
import $ from "jquery";
const io = require('socket.io-client');
require('./script.js');
const socket = io();


class MessageBar extends Component {

  leftTyp() {
    // console.log('Left');
    socket.emit('chat out');
  }

  componentDidMount() {
    const compThis = this;
    var fsUsername = document.cookie.replace(/(?:(?:^|.*;\s*)fsChatUsername\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    $('#sendMsg #m').focus(function () {
      //console.log(fsUsername + " is typing");
      socket.emit('chat typing', fsUsername);
      //  $('.typing p').text(fsUsername + " is typing...");
    });

    $('#sendMsg').submit(function (e) {
      e.preventDefault();
      if ($('#m').val() == '' || $('#m').val() == null) {
        return false;
      }
      else {
        socket.emit('chat message', fsUsername + ': ' + $('#m').val());
        console.log('chat message :' + fsUsername + ': ' + $('#m').val());
        $('#m').val('');
        $('#m:focus').blur();
        return false;
      }

    });
    socket.on('chat typing', function (msg='') {
      $('.typing p').text("");
      if(msg==fsUsername){
        console.log('Got yah');
      }
      else if(msg.length>1){
        $('.typing p').text(msg +' is typing...');
      }
      


    });
    socket.on('chat out', function () {
      $('.typing p').html("");
    });

  }
  render() {
    return (
      <div className="" style={mbStyle}>
        <form id="sendMsg" style={mbStyle.form} action="">
          <input id="m" type="text" onBlur={this.leftTyp} style={mbStyle.input} autoComplete="off" placeholder="Type to send a message..." />
          <button type="" style={mbStyle.button}><span className="fa fa-paper-plane"></span></button>
        </form>
      </div>
    );
  }
}


class NavBar extends Component {
  render() {
    return (
      <div style={nbStyle}>
        <div className="container">
          <img src={mainLogo} style={nbStyle.logo} alt="fireSpot" />
          <div className="typing" style={nbStyle.typing}><p style={nbStyle.typing.p}></p></div>
          <button id="signOut" style={nbStyle.signOut}>Sign out</button>
          <p className="activeAccount" style={nbStyle.accActive}></p>
        </div>
      </div>
    );
  }
}

class ListItem extends Component {
  render() {
    return (
      <li style={mtStyle.mtList.mtItem}></li>
    );
  }
}

class MessageThread extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <div id='mt' style={mtStyle}>
        <ul id="mtList">
        </ul>
      </div>
    );
  }
}




class App extends Component {

  componentDidMount() {


    var fsUsername = document.cookie.replace(/(?:(?:^|.*;\s*)fsChatUsername\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    //document.getElementsByClassName('username');
    $('.activeAccount').html(fsUsername);
    $('#signOut').click(function (e) {
      e.preventDefault();
      document.cookie = 'fsChatUsername' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      socket.emit('chat notification', fsUsername + " has Logged out");
      location.reload();
    });




    socket.on('connection', function () {
      socket.emit('chat notification', fsUsername + " has Connected");






    });
          var snd = new Audio("/notify.mp3");
      socket.on('chat message', function (msg='') {
        if(msg.length==0){
          console.log('Got ya!');
        }
        else{
$('#mtList').append($('<li>').text(msg));
snd.play();
        }
        

        
      });

            socket.on('disconnect', function (msg) {
        console.log('Shit has happened');
      });
  }


  render() {
    return (
      <div>
        <NavBar />
        <MessageThread />
        <MessageBar />
      </div>

    );
  }
}

export default App;
