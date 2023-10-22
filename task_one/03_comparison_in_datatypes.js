// Day Three
"use strict";
// Comparison in datatypes

// Basic comparisons
console.log("-------------------------------> Basic comparison");
console.log(34 > 1); // true
console.log(593 >= 904); // false
console.log(43 < 2); //false
console.log(3 == 4); //false
console.log(2 != 3); // true

console.log("-------------------------------> tricky comparison");

console.log(null < 0); // false
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log("-------------------------------> tricky comparison section two");

console.log(undefined < 0); // false
console.log(undefined > 0); // false
console.log(undefined == 0); // false

console.log("-------------------------------> tricky comparison section three");

console.log("7" < 5); // false
console.log("0089" > 76); // true
console.log("99" == 99); // true
console.log("99" === 99); // false
