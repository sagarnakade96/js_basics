// iterations (loops)

// for loop

for (let index = 1; index <= 10; index++) {
  const element = index;
  //   console.log(element);
}

for (let i = 0; i < 10; i++) {
  const element = i;
  for (let j = 0; j < 5; j++) {
    const innerElement = j;
    // console.log(`inner loop ${innerElement}`);
  }
  //   console.log(`outer loop ${element}`);
}

let myArray = ["flash", "batman", "superman"];
let n = myArray.length;

for (let k = 0; k < n; k++) {
  const element = myArray[k];
  //   console.log(element);
}

// break and continue

for (let index = 1; index < 10; index++) {
  const element = index;
  if (element === 6) {
    // console.log("6 detected!");
    break;
  }
  //   console.log(element);
}

for (let index = 1; index < 10; index++) {
  const element = index;
  if (element === 6) {
    console.log("6 detected!");
    continue;
  }
  console.log(element);
}
