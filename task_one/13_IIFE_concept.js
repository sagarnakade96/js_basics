// Immediately Invoked Function Expression (IIFE)

(function dbConnect() {
  console.log(`DB Connected`);
})();

// IIFE with arrow function

(() => {
  console.log(`DB connected 2`);
})();

((name) => {
  console.log(`Hello ${name}`);
})("test_user");
