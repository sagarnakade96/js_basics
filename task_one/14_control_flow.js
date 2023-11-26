// control flow in JS

// if
isEligible = true;
if (isEligible) {
  console.log("Eligible");
}

// <,>,>=,<=, == ,!=, ===,

const userBalance = "1700";

const checkBalance = (amount) => {
  amount = parseInt(amount);
  if (isNaN(amount)) {
    console.log(`Invalid Amount! Expected Number`);
    return false;
  }
  const minAmount = 1500;
  console.log(typeof amount);
  if (amount <= minAmount) {
    console.log(
      `Low balance! Min amount required : ${minAmount}. Current Balance is ${amount}`
    );
    return false;
  } else if (amount >= minAmount) {
    console.log(`Current Balance is ${amount}`);
    return true;
  } else {
    console.log(`Current Balance is ${amount}`);
    return false;
  }
};

let sufficientBalance = checkBalance(userBalance);
let hasDebitCard = true;
let hasCreditCard = false;
let hasEmail = true;
let hasUsername = true;

const transaction = (balance, dr, cr, email, username) => {
  if (!email || !username) {
    return `Please complete your profile before transaction`;
  }
  if (balance && dr && !cr) {
    return `proceed for debit card transaction`;
  } else if (balance && cr && !dr) {
    return `proceed for credit card transaction`;
  } else {
    return `invalid details`;
  }
};

let details = transaction(
  sufficientBalance,
  hasDebitCard,
  hasCreditCard,
  hasEmail,
  hasUsername
);

console.log(details);
