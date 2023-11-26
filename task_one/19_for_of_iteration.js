// for of
const arr = [234, 5, 4, 54, 2, 3, 23, 45];
for (const ar of arr) {
  //   console.log(ar);
}

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

for (const [key, value] of map) {
  //   console.log(`${key} : ${value}`);
}

const myObj = {
  js: "Javascript",
  python: "Python",
  cpp: "C++",
  swift: "Swift by Appple",
};

let myBool = myObj.hasOwnProperty("dsasd");
console.log(myBool);

for (const key in myObj) {
  //   console.log(`Key : ${key} => Value : ${myObj[key]}`);
}

for (const a in arr) {
  //   console.log(arr[a]);
}
