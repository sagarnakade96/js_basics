// Arrays
let myArray = [1, 2, 3, 23, 4, 99, 8];
console.log(myArray[6]);

// Methods in arrays

// Push and Pop
myArray.push(765);
myArray.push(95);

console.log(myArray);
myArray.pop();
console.log(myArray);

// Shift and Unshift

myArray.unshift(9, 7);
console.log(myArray);
myArray.shift();
console.log(myArray);

// Other methods

console.log(myArray.includes(89)); // false
console.log(myArray.includes(7)); // true
console.log(myArray.indexOf(83)); // -1 (any non-existing element)
console.log(myArray.indexOf(8)); // 7

let newArray = ["ironman", "spiderman", "hulk", "captainamerica", "shehulk"];

let joinedArray = newArray.join("-");
console.log(joinedArray);

// Map
let mapArray = myArray.map((x) => x * 2);
let avengers = newArray.map((x) =>
  x != "shehulk" ? `${x} -> avenger` : `${x} -> Nahh`
);
console.log(mapArray);
console.log(avengers);

// Cancate, Spread, Flat

const marvel = ["Ironman", "Spiderman", "Antman", "Strange"];
const dc = ["Superman", "Batman", "Flash", "Aquaman"];

const allSuperHeroes = marvel.concat(dc);
console.log(allSuperHeroes);
console.log(marvel);

const concatinatedString = [12, 2333, [[1223], [4432]]];
const allNums = concatinatedString.flat(Infinity); // also can provide the depth to the .flat(3)

console.log(allNums);

const boys = ["homelander", "starlight", "atrain", "deep"];
const newAvengers = [...marvel, ...dc, ...boys];
console.log(newAvengers);

const filterAvengers = newAvengers.filter((x) => x.length < 7);
console.log(filterAvengers);

// Array of, Array from , Array isArray

console.log(Array.isArray("new heroes")); // false

console.log(Array.from("new heroes"));

console.log(Array.of("new", "new heroes", "create heroes"));
