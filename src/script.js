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
      document.cookie = "fsChatUsername=" + fsChatUsername;
      alert('Logged In as: ' + fsChatUsername);
      console.log('User Logged In as: ' + fsChatUsername);

    }
  }