// Functions in js

function sayMyName() {
  let first = "T";
  let second = "E";
  let third = "S";
  let fourth = "T";
  console.log(first);
  console.log(second);
  console.log(third);
  console.log(fourth);
}

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(4, 5);
console.log(result);

function checkLoggedInUser(username = "usertest") {
  if (!username) {
    return "error : invalid username";
  }
  return `Logged in as : ${username}`;
}

const validateUser = checkLoggedInUser;

const newArray = [2, 3, 4, 54, 5, 3];

function myArray(...newArray) {
  console.log(newArray[0]);
}
myArray(newArray);

const myDict = {
  username: "testuser",
  email: "testemail@example.com",
};

function newDict(anyobject) {
  const { username } = anyobject;
  const { email } = anyobject;
  console.log(`username : ${username}, email : ${email} `);
}

newDict(myDict);
