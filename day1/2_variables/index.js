// console.log("All Around The World".charAt(7).toUpperCase());

// const myName = "Rowan";
// const favFruit = "Raspberry";
// const eyeColour = "Blue";
// const myAge = 21;
// const isCool = true;
// console.log(myName, favFruit, eyeColour, myAge, isCool);

// console.log(1==1)




// Activity One

// let myName = "Rowan";
// let myAge = 21;
// let favColour = "yellow";

// console.log(`Hello ${myName}, youare ${myAge} years old, and your favourite colour is ${favColour}`);

// myName = "Martina";
// myAge = 22;
// favColour = "green";

// console.log(`Howdy there, ${myName}! ${favColour} is your favourite colour, and you are ${myAge} years old.`);




// Activity Two

// let breakfast = "crepe";
// let lunch = "jam sandwich";
// let dinner = "chicken";

// console.log(breakfast, lunch, dinner);




// Activity Three

const todayDate = new Date();
const myBirthday = new Date('07/01/2024');

let timeDiff = myBirthday.getTime() - todayDate.getTime();

const dayDiff = Math.round(timeDiff / (1000 * 3600 * 24));

console.log(`${dayDiff} days until my birthday!!`);
