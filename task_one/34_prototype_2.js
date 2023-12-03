const User = {
  username: "user001",
  password: "pass@123",
};

const TeachingSupport = {
  status: true,
  isActive: true,
};

const TASupport = {
  isValid: true,
  __proto__: TeachingSupport,
};

// console.log(Teacher);

let username = "user001          ";

String.prototype.trimLength = function () {
  return this.trim().length;
};

console.log(`Without trimmed username is ${username.length}`);
console.log(`Trimmed username is ${username.trimLength()}`);
