// Arrow function and this keyword
const data = {
  username: "test val",
  email: "test@gmail.com",
  isEligibleForVote: function () {
    console.log(`${this.username} is eligible for vote`);
  },
};

console.log(data.isEligibleForVote());
console.log(this);
const newData = () => {
  const username = "test val 2";
  console.log(this.username);
  console.log(this);
};

// implicit returns

const divideTwoNumbers = (num1, num2) => num1 / num2;
console.log(divideTwoNumbers((num1 = 120), (num2 = 12)));

// explicit return
const multiplyTwoNumber = (num1, num2) => {
  return num1 * num2;
};

console.log(multiplyTwoNumber((num1 = 12), (num2 = 12)));
