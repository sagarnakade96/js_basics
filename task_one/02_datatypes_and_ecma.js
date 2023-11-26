// Day Two

// Target : datatypes in JS
"use strict";

/*
Datatypes Summery:
     - Primitive: 
        - String
        - Number
        - BigInt
        - Boolean
        - undefined
        - null
        - Symbol
     - Non Primitive (Reference)
        - Array
        - Objects
        - Functions
 */

let name = "test user"; // string datatype
let age = 34; // Number datatype
let isLoggedIn = false; // boolean datatype (true/false)

// Primitive datatypes

// null => standalone value
// undefined
// symbol => unique
// Object

// Learning about typeof

console.log(typeof null); // null is object type
console.log(typeof undefined); // undefined is undefined type

// Datatype conversion

let testNumber = 77;
let stringTestNumber = String(testNumber); //---> Number to String
console.log(typeof stringTestNumber);

let intTestNumber = Number(stringTestNumber); //---> String to Number
console.log(typeof intTestNumber);

let sampleTest = "77abc";
let intSampleTest = Number(sampleTest);
console.table([typeof intSampleTest, intSampleTest]); //---> NAN: Not A Number will be printed

let isValidBoolean = Boolean(sampleTest);
let isValidBoolean1 = Number(true);
let isValidBoolean2 = Boolean("");

console.table([typeof isValidBoolean, isValidBoolean]);
console.table([typeof isValidBoolean1, isValidBoolean1]);
console.table([typeof isValidBoolean2, isValidBoolean2]);

/* 
ECMA docs link :
    - https://tc39.es/ecma262/

MDN docs link :
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript    

Examples to practice:
link : 
    https://exercism.org/tracks/javascript/concepts/type-conversion
    https://eishta.medium.com/javascript-tricky-questions-type-coercion-7fe47b4c488e
    

*/

// **************************************** Operators ****************************************
let val1 = 12;
let val2 = 65;

// console.log(val1 + val2);
// console.log(val1 - val2);
// console.log(val1 * val2);
// console.log(val1 / val2);
// console.log(val1 % val2);
// console.log(val1 ** val2);
console.log("Operators");

console.log(1 + "1"); // 11
console.log("2" + 1); //21
console.log("1" + "1" + 2); //112
console.log(2 + 1 + "55"); //355

let val3 = ("12" + "12") * ((3 + 5) * ("3" + 8));
console.log(`Value : ${val3} Typeof: ${typeof val3}`); // Value : 368448 Typeof: number
