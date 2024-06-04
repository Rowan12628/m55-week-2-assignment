// Activity One

// const age = 18
// const country = "UK"

// if(age >= 18 && country == "UK") {
//     console.log("Yes, I can serve you.")
// }
// else{
//     console.log("I can't serve you")
// }

//Activity Two

// let topping = "sdubkgsdkdbf"

// switch(topping){
//     case "cheese":
//     case "pepperoni":
//     case "ham":
//     case "olives":
//         console.log(`${topping} is a good topping!`);
//         break;
//     case "chicken":
//     case "mushrooms":
//     case "peppers":
//         console.log(`eh, ${topping} is alright on pizza, I guess.`);
//         break;
//     case "anchovies":
//     case "pineapple":
//     case "onion":
//         console.log(`ew, I hate ${topping}!`);
//         break;
//     default:
//         console.log(`I don't know how I feel about ${topping} on pizza...`)
// }

//Activity Three

// const password = "helloworld"

// if(password.length < 8){
//     console.log("Your password is too short.")
// } else {
//     console.log("Good password length.")
// }

// let num = 15

// if(num % 3 == 0 && num || 5 == 0){
//     console.log("Your number is divisble by 3 or 5 (or both)!")
// }
// else {
//     console.log("Your number is not divisible by 3 or 5.")
// }

//Activity Four

// let num = 3;

// if(num % 3 == 0 && num % 5 == 0){
//     console.log("fizz buzz")
// }
// else if(num % 3 == 0){
//     console.log("fizz")
// }
// else if(num % 5 == 0){
//     console.log("buzz")
// }
// else{
//     console.log(num)
// }

// Activity Five

const num = 919;

let numStr = num.toString();
let revNumStr = numStr.split("").reverse().join("");

if (numStr === revNumStr) {
  console.log("Palindrome!!!");
} else {
  console.log("Not a palindrome.");
}

let vegetable = "fruit";
