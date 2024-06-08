function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Static username and password for demonstration purposes
    var validUsername = "admin";
    var validPassword = "go_india";
    
    // Check if the entered username and password match the static values
    if (username === validUsername && password === validPassword) {
      window.location.href = "welcome.html"; // Redirect to Welcome page on successful login
      return false;
    } else {
      alert("Invalid username or password");
      return false;
    }
  }
  