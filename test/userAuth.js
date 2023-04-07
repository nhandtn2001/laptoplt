function Login(username, password) {
  // Check user's credentials
  if (username === 'exampleuser' && password === 'examplepassword') {
    return true;
  } else {
    return false;
  }
}
function Register(username, email, password) {
  // Register new user
  if (username != '' && email != '' && password != '') {
    return true;
  } else {
    return false;
  }
}
function ForgotPassword(email) {
  // Reset user's password
  if (email === 'exampleemail') {
    return true;
  } else {
    return false;
  }
}
module.exports = { Login, Register, ForgotPassword };