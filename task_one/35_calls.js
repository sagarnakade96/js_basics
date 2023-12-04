// Calls

function SetUsername(username) {
  this.username = username;
}

// function createUser(username, email, password) {
//   SetUsername(username);
//   this.email = email;
//   this.password = password;
// } //  => will return obj createUser { email: 'user001@example.com', password: 'Pass@123' }

// try this
//  let user001 = createUser("user001", "user001@example.com", "Pass@123");  => undefined

// let user001 = new createUser("user001", "user001@example.com", "Pass@123");

// corrected code
function createUser(username, email, password) {
  SetUsername.call(this, username); // pass the context to hold the context and call the function
  this.email = email;
  this.password = password;
}

let user001 = new createUser("user001", "user001@example.com", "Pass@123");
console.log(user001);
