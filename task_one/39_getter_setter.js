// getter and setter
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return `https://${this._email}`;
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `enc_${this._password.toUpperCase()}`;
  }
  set password(value) {
    this._password = value;
  }
}

let new_user = new User("user001@email.com", "Pass@123");
// console.log(new_user.email);

// function based
function userData(email, password) {
  this._email = email;
  this._password = password;
  Object.defineProperty(this, "password", {
    get: function () {
      return `enc_${this._password.toUpperCase()}`;
    },
    set: function (value) {
      this._password = value;
    },
  });

  Object.defineProperty(this, "email", {
    get: function () {
      return `https://${this.email}`;
    },
    set: function (value) {
      this._email = value;
    },
  });
}

let new_user_1 = new User("user002@example.com", "many@123");
// console.log(new_user_1.password);

// Object based

const MainUser = {
  _email: "user0909@example.com",
  _password: "abc",
  get email() {
    return `${this._email.toUpperCase()}`;
  },
  set email(value) {
    this._email = value;
  },
};

console.log(MainUser.email);
