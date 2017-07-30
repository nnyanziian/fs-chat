import React, { Component } from 'react';
import { mbStyle, mtStyle, nbStyle } from './styles.js';
import './font-awesome/css/font-awesome.min.css';
import mainLogo from './logoWhite.png';
import './App.css';
require ('./script.js');





class MessageBar extends Component {
  render() {
    return (
      <div className="" style={mbStyle}>
        <div className="typing" style={mbStyle.whosTyping}>
          <p>User is Typing ...</p>
        </div>
        <form id="sendMsg" style={mbStyle.form} action="">
          <input id="m" style={mbStyle.input} autoComplete="off" placeholder="Type to send a message..." />
          <button type="" style={mbStyle.button}><span className="fa fa-paper-plane"></span></button>
        </form>
      </div>
    );
  }
}


class NavBar extends Component {
  render() {
    return (
      <div  style={nbStyle}>
        <div className="container">
          <img src={mainLogo} style={nbStyle.logo} alt="fireSpot" />
          <button style={nbStyle.signOut}>Sign out</button>
          <p className="activeAccount" style={nbStyle.accActive}>Hi Ian,</p>
          </div>
        </div>
        );
  }
}

class MessageThread extends Component {
          render() {
        return (
      <div className='mt' id='mt' style={mtStyle}>
          <ul className="mtList">
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are fgfgfgfg</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are YouHey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
            <li style={mtStyle.mtList.mtItem}>Hey, How are You</li>
          </ul>
        </div>
        );
  }
}




class App extends Component {
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
