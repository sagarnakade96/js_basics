const welcomeMessage = new String("Welcome User");
console.log(`Type => ${typeof welcomeMessage}, Message => ${welcomeMessage}`);

// String prototype methods

// uppercase
console.log(welcomeMessage.toUpperCase()); // WELCOME USER
console.log(welcomeMessage.toLowerCase()); // welcome user
console.log(welcomeMessage.charAt(4)); // o
console.log(welcomeMessage.indexOf("s")); // 9

// trim
const newMessage =
  "                       New Message                                   ";
console.log(newMessage.trim()); // New Message (without spaces)

// substring
const subString = welcomeMessage.substring(0, 3);
console.log(subString); // Wel

// slicing
const anotherString = welcomeMessage.slice(-12, 4);
console.log(anotherString); // Welc

// replace
const replaceString = "this is code is for testers";
console.log(replaceString.replace("testers", "developers")); //this is code is for developers

// includes

const includeString = "this may have a bug";
console.log(includeString.includes("bug")); // true
