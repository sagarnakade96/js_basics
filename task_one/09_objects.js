// Objects

// object literals
let mySym = Symbol("newKey");

const accountUser = {
  name: "Test User",
  accountNumber: 98765432,
  isActive: false,
  email: "test@example.com",
  age: 44,
  [mySym]: "lowKey",
};

console.log(accountUser.name);
console.log(accountUser["age"]);
console.log(accountUser[mySym]); // symbols
accountUser.isActive = true; // Changing value
console.log(accountUser);

// Object.freeze(accountUser); // example for freeze the objects from the changes

// accountUser.name = "test user 01"; example for freeze the objects from the changes
// console.log(accountUser); example for freeze the objects from the changes

accountUser.welcome = function () {
  console.log(`Welcome ${this.name},`);
};

accountUser.checkIsAccountActive = function () {
  if (this.isActive === false) {
    console.log("Your account is deactivated. Please activate it!");
  } else {
    console.log("Your account activated successfully!");
  }
};

console.log(accountUser.welcome());
accountUser.isActive = false;
console.log(accountUser.checkIsAccountActive());

//singleton

const linkedInUser = {
  username: "test_user001",
  password: "Pass@123",
  profile: {
    designation: {
      backend: "python",
      frontend: "angular",
    },
    experience: 2,
  },
};
console.log(linkedInUser.profile.designation.backend);
console.log(linkedInUser.profile.experience);

const ex1 = { 1: "a", 2: "b", 3: "c", 4: "d" };
const ex2 = { 4: "e", 6: "f" };
// const ex3 = Object.assign({}, ex1, ex2);
const ex3 = { ...ex1, ...ex2 }; //spread operator
console.log(ex3);

const usersInfo = {
  code: 200,
  data: {
    user: {
      pk: 674,
      first_name: "test",
      last_name: "data",
      email_verified: false,
    },
  },
  error: null,
};
if (usersInfo.code != 200 && !usersInfo.error) {
  console.log("error");
} else {
  console.log(usersInfo.data.user.pk);
}

usersInfo.code = 404;
if (usersInfo.code != 200 && !usersInfo.error) {
  console.log("error");
} else {
  console.log(usersInfo.data.user.pk);
}

// Object destructuring

const responseData = {
  status: "success",
  data: [
    {
      id: 1,
      employee_name: "Tiger Nixon",
      employee_salary: 320800,
      employee_age: 61,
      profile_image: "",
    },
    {
      id: 2,
      employee_name: "Garrett Winters",
      employee_salary: 170750,
      employee_age: 63,
      profile_image: "",
    },
    {
      id: 3,
      employee_name: "Ashton Cox",
      employee_salary: 86000,
      employee_age: 66,
      profile_image: "",
    },
    {
      id: 4,
      employee_name: "Cedric Kelly",
      employee_salary: 433060,
      employee_age: 22,
      profile_image: "",
    },
    {
      id: 5,
      employee_name: "Airi Satou",
      employee_salary: 162700,
      employee_age: 33,
      profile_image: "",
    },
  ],
  message: "Successfully! All records has been fetched.",
};

const { status: st } = responseData; // destructure datatype {key:key_alias} = object

const { data } = responseData;

console.log(st);

for (const { employee_name } of data) {
  console.log(employee_name);
}
