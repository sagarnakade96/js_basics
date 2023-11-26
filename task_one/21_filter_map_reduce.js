// Filter, Map, Reduce
const arr = [234, 5, 4, 54, 2, 3, 23, 45];

// filter
const newNums = arr.filter((item) => {
  return item > 50;
});

// console.log(newNums);
data = [
  {
    id: 1,
    employee_name: "Tiger Nixon",
    employee_salary: 320800,
    employee_age: 61,
    profile_image: "",
    joined_year: 2022,
  },
  {
    id: 2,
    employee_name: "Garrett Winters",
    employee_salary: 170750,
    employee_age: 63,
    profile_image: "",
    joined_year: 1996,
  },
  {
    id: 3,
    employee_name: "Ashton Cox",
    employee_salary: 86000,
    employee_age: 66,
    profile_image: "",
    joined_year: 2017,
  },
  {
    id: 4,
    employee_name: "Cedric Kelly",
    employee_salary: 433060,
    employee_age: 22,
    profile_image: "",
    joined_year: 1992,
  },
  {
    id: 5,
    employee_name: "Airi Satou",
    employee_salary: 162700,
    employee_age: 33,
    profile_image: "",
    joined_year: 2021,
  },
];

let newData = data.filter(
  (item) => item.joined_year >= 2000 && item.employee_age >= 30
);
console.log(newData);

// map
let taggedNames = data.map((num) => `abc_corp_${num.employee_name}`);
console.log(`tagged names ${taggedNames}`);

// reduce

const myTotal = arr.reduce((acc, curVal) => {
  console.log(`ACC : ${acc}, Current : ${curVal}`);
  return acc + curVal;
}, 3);
console.log(myTotal);
