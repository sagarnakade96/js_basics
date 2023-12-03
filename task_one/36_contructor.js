// class and constructor
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `enc_${this.password}`;
  }
  logMe() {
    return `username logged in with information ${this.username} ${
      this.email
    } ${this.encryptPassword()}`;
  }
}

class CheckStatic {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static setUsername() {
    return `${this.username}`;
  }
}

class NewCheckStatic extends CheckStatic {
  constructor(username, password, isValid) {
    super(username, password);
    this.isValid = isValid;
  }
}

let user001 = new User("user001", "user001@example.com", "user001@123");
// console.log(user001.logMe());

let testUser = new CheckStatic("test_user", "test@123");
let user002 = new NewCheckStatic("user002", "Pass@123", true);
// console.log(user002.setUsername());
console.log(testUser.setUsername());
