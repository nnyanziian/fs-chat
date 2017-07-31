import React, { Component } from 'react';
import { mbStyle, mtStyle, nbStyle, sbStyle } from './styles.js';
import './font-awesome/css/font-awesome.min.css';
import mainLogo from './logoWhite.png';
import './App.css';
import $ from "jquery";
import {checkIfloggedIn} from './script.js';
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
        const msg = {
          sender: fsUsername,
          content: $('#m').val()
        };
        if (checkIfloggedIn()) {
                  socket.emit('chat message', msg);
        //console.log('chat message :' + fsUsername + ': ' + $('#m').val());
        $('#m').val('');
        $('#m:focus').blur();
        return false;
        }
        else {
          location.reload();
        }

      }

    });
    socket.on('chat typing', function (msg = '') {
      $('.typing p').text("");
      if (msg == fsUsername) {
        console.log('Got yah');
      }
      else if (msg.length > 1) {
        $('.typing p').text(msg + ' is typing...');
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
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      styled: sbStyle.off
    }
    this.activate = this.activate.bind(this);

  }

  activate() {
    //this.setState({isLoggedIn: true});

    if (this.state.active == true) {
      this.setState(prevState => ({
        active: false,
        styled: sbStyle.off
      }));
    }
    else {
      this.setState(prevState => ({
        active: true,
        styled: sbStyle
      }));
    }


  }
  componentDidUpdate() {


  }
  render() {

    return (
      <div>
        <div className="sideBars" style={this.state.styled}>
          <div style={sbStyle.side} >
            <h3>Chats (9)</h3>
            <ul>
              <li>
                <span className="fa fa-user-circle"></span><span className="user">Name</span>
              </li>
            </ul>
          </div>
          <div id="close" onClick={this.activate} style={sbStyle.close}>
          </div>
        </div>
        <div style={nbStyle}>
          <div className="container">
            <button onClick={this.activate} style={nbStyle.bar}><span className="fa fa-bars"></span></button>
            <img src={mainLogo} style={nbStyle.logo} alt="fireSpot" />
            <div className="typing" style={nbStyle.typing}><p style={nbStyle.typing.p}></p></div>
            <button id="signOut" style={nbStyle.signOut}>Sign out</button>
            <p className="activeAccount" style={nbStyle.accActive}></p>
          </div>
        </div>
      </div>
    );
  }
}

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.activate = this.activate.bind(this);

  }

  activate() {
    //this.setState({isLoggedIn: true});
    //this.setState({activate:true});
    console.log("Boom !");
  }
  render() {
    const status = this.state.active;
    if (status) {
      const stated = sbStyle;
    } else {
      const stated = sbStyle.off;
    }
    return (

      <div style={this.stated}>
        <div style={sbStyle.side} >
          <h3>Chats (9)</h3>
          <ul>
            <li>
              <span className="fa fa-user-circle"></span><span className="user">Name</span>
            </li>
          </ul>
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
    socket.on('chat message', function (msg = '') {
      if (msg.length == 0) {
        console.log('Got ya!');
      }
      else {
        let styledd = '';
        let senderr = '';
        if (msg.sender == fsUsername) {
          styledd = 'msgRight';
          senderr = "You";
        }
        else {
          styledd = 'msgleft';
          senderr = msg.sender;
        }
        $('#mtList').append($('<li class=' + styledd + '>').text(senderr + ': ' + msg.content));
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
