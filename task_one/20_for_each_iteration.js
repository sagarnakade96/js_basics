// For each

const arr = [234, 5, 4, 54, 2, 3, 23, 45];

arr.forEach(function (val) {
  //   console.log(val);
});

arr.forEach((item) => {
  //   console.log(item);
});

const myObj = [
  {
    languageName: "JS",
    fileType: ".js",
  },
  {
    languageName: "Python",
    fileType: ".py",
  },
  {
    languageName: "CPP",
    fileType: ".cpp",
  },
  {
    languageName: "Golang",
    fileType: ".go",
  },
];
// let printMe = (item) => console.log(item);
// arr.forEach(printMe);

myObj.forEach((item) => {
  console.log(item.languageName + " : " + item.fileType);
});
