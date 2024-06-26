//Activity One

// const factorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(33));

//Activity Two

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//   console.log(`Pizza with ${topping1} and ${topping2}`);
//   orderCount++;
//   console.log(`Order number ${orderCount}`);
// };

// takeOrder("pepperoni", "cheese");
// takeOrder("pepperoni", "ham");
// takeOrder("pepperoni", "olives");
// takeOrder("pepperoni", "double pepperoni");

//Activity Three

const pinNum = 123456;

function checkPin(pinInput) {
  if (pinInput == pinNum) {
    return true;
  } else {
    return false;
  }
}

function checkBalance(balance, amount) {
  if (balance >= amount) {
    return true;
  } else {
    return false;
  }
}

// function dispenseCash(pinInput, balance, amount) {
//   if (checkPin(pinInput) === true && checkBalance(balance, amount) === true) {
//     console.log(`Dispensing ${amount}`);
//   } else if (checkPin(pinInput) !== true) {
//     console.log("Your pin number is incorrect");
//   } else if (checkBalance(balance, amount) !== true) {
//     console.log("Your balance is too low");
//   }
// }

function dispenseCash(pinInput, balance, amount) {
  const isBalance = checkBalance(balance, amount);
  const isPinNum = checkPin(pinInput);
  if (!isPinNum) {
    console.log("Your pin number is incorrect");
  } else if (isBalance) {
    console.log(`Dispensing ${amount}`);
  } else if (!isBalance) {
    console.log("Your balance is too low");
  }
}

dispenseCash(123456, 100, 50);
