// Dates and Time
let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getDate());

// let myCreatedDate = new Date(2023, 0, 18);
// myCreatedDate = new Date(2023, 0, 23, 3, 5);
// let myCreatedDate = new Date("2023-10-18"); // yyyy-mm-dd
myCreatedDate = new Date("01-18-2023"); // mm-dd-yyyy

let myTimeStamp = Date.now();
console.log(myCreatedDate.toLocaleString());

// Timestamp
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
