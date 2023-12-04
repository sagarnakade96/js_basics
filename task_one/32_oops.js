// Instances (new, this)

const user = {
  name: "user001",
  email: "user001@example.com",
  phone: 1234567890,
  greetings: function welcomeMsg() {
    return `Welcome User, ${this.name} ${this.email} ${this.phone}`;
  },
};

// console.log(user.greetings());

function UserDetails(username, phone, email) {
  (this.username = username), (this.phone = phone), (this.email = email);
  return this;
}

const dataOne = new UserDetails("user001", 1111111111, "user1@example.com");
const dataTwo = new UserDetails("user002", 2222222222, "user2@example.com");

// console.log(dataOne);
