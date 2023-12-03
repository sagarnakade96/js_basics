const promiseZero = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("this is promise Zero");
  }, 1000);
});

promiseZero.then(function () {
  console.log("complete");
});

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("this is promise one");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("complete");
});

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("this is promise two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("complete");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("this is promise two");
    resolve({ username: "user001", email: "user@example.com" });
  }, 1000);
}).then(function () {
  console.log("complete");
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true;
    if (!err) {
      console.log("this is promise four");
      resolve({ username: "user001", email: "user@example.com" });
    } else {
      reject("Error : Something went wrong!!!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise either resolved or rejected!!!");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      console.log("this is promise four");
      resolve({ username: "user001", password: "123" });
    } else {
      reject("Error : JS went wrong!!!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
