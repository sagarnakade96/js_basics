// Number and Maths in javascript

const score = new Number(700);

// Number methods
console.log(score.toString().length);
console.log(score.toFixed(2));

const newScore = 337883.734;
console.log(newScore.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));

// Maths
console.log(Math.abs(-900));
console.log(Math.round(newScore));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.7));
console.log(Math.min(2, 3, 45, 56, 44, 66, 21, 34));
console.log(Math.max(2, 3, 45, 56, 44, 66, 21, 34));
console.log(Math.round(Math.random() * 10 + 1));

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // specify the min and max range in random
