const io = require('socket.io-client');

if (checkIfloggedIn()) {

}
else {
  login();
}
export function checkIfloggedIn() {
  var username = document.cookie.replace(/(?:(?:^|.*;\s*)fsChatUsername\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (username == null || username == "") {
    return false;
  }
  else {
    return true;

  }
}
export function login() {

  var fsChatUsername = prompt("Please Enter your Username", "Anonymus");
  if (fsChatUsername == null || fsChatUsername == "" || fsChatUsername.length > 20) {
    login();
    return false;
  }
  else {
    document.cookie = 'fsChatUsername' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "fsChatUsername=" + fsChatUsername;
    const msg = {
      sender: fsChatUsername,
      content: 'is online'
    };
    const socket = io();
    socket.emit('chat not', msg);
    console.log('User Logged In as: ' + fsChatUsername);



  }
}
var userObj = [{
  "userId": 24,
  "username": "ian",
  "userPassword": "nopassword",
  "userStatus": "Hey i'am on Fs Chat",
  "created": {
    "time": "20:45:46",
    "date": "12-06-17"
  },
  "online": false
}];

//addNewUser(userObj);

function addNewUser(userObj) {
  update('users.json', userObj).then(function (user) {
    console.log(JSON.stringify(user));
  });

}