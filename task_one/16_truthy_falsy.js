// truthy and falsy values

/*
Falsy Values
- false
- 0
- -0 (-ve)
- BigInt
- 0n
- ""
- null
- undefined
- NaN

Truthy Values
- "0" (string)
- "false" (string)
- " "
- []
- {}
- function(){}
*/

const hasEmail = (email) => {
  if (!email || Object.keys(email).length === 0 || email.length == 0) {
    return "invalid email";
  } else if (email) {
    return email;
  }
};
const validEmail = "user@example.com";
const invalidEmail = "";

const invalidEmail1 = NaN;
const invalidEmail2 = false;

console.log(hasEmail((email = invalidEmail)));
console.log(hasEmail((email = invalidEmail1)));
console.log(hasEmail((email = invalidEmail2)));
console.log(hasEmail((email = [])));
console.log(hasEmail((email = {})));
console.log(hasEmail((email = validEmail)));

// Nullish Coalescing Operator (??):null undefined

let val1;
// val1 = null ?? 12; //12
// val1 = undefined ?? 23; // 23
// val1 = null ?? undefined ?? 15 ?? 43; // 15
console.log(val1);

// ternary operator in JS (condition ? true : false)

const isMember = true;

const checkMembership = isMember ? `$45.00` : `$0.00`;
console.log(checkMembership);
