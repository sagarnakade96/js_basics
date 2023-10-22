// Day Four

// Stack (Primitive) and Heap (Non Primitive)

// Stack examples

let myRollNumber = 45;
let hisRollNumber = myRollNumber;
hisRollNumber = 99;
console.log(myRollNumber);
console.log(hisRollNumber);

//Heap examples

let myData = {
  id: 44,
  username: "user001",
  email: "user001@gmail.com",
  tech: ["front-end", "back-end"],
};

let hisData = myData;
hisData.tech = ["fullstack"];
hisData.username = "user007";

console.log(myData);
console.log(hisData);
