let a = 10;
let b = 20;
let c = 30;

console.log(`${a}, ${b},${c}`);

function one() {
  const username = "testval";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website); // error
  two();
}
console.log(one());

if (true) {
  const username = "testval";
  if (username === "testval") {
    const website = "website";
    console.log(username + website);
  }
  //   console.log(website); error
}

// console.log(username); error
