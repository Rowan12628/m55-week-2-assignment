// let coffeeOrder = [
//   "alex - cortado",
//   "ben - cortado",
//   "charlie- whatever's new",
// ];

// coffeeOrder[1] = "ann - vanilla latte";
// coffeeOrder.push("michael - triple espresso");

// console.log(coffeeOrder);
// console.log(coffeeOrder.length);

// coffeeOrder.pop();

// console.log(coffeeOrder);

//Activity One

// let favSongs = [
//   "Home, Cavetown",
//   "Megalovania, Undertale",
//   "Boy In The Bubble, Alec Benjamin",
// ];

// console.log(favSongs);

// favSongs.push(
//   "Reverberate, Bears in Trees",
//   "What If Tomorrow Comes, Black Friday"
// );

// console.log(favSongs);

// favSongs.pop();

// console.log(favSongs);

//Activity Two

// let clothes = ["shoes", "skirt", "pants"];

// console.log(`This is my list of clothes: ${clothes}!`);

// clothes.unshift("shirts");

// console.log(`This is my list after using the .unshift method: ${clothes}!`);

// let favDrinks = ["tea", "blue lucozade", "hot chocolate", "water"];

// for (let i = 0; i < favDrinks.length; i++) {
//   console.log(favDrinks[i]);
// }

// let oddNum = [];

// for (let i = 0; i < 20; i++) {
//   if (i % 2 != 0) {
//     oddNum.push(i);
//   }
// }

// console.log(oddNum);

// let age = 15;

// while (age < 18) {
//   console.log("You're a child!");
//   age++;
// }

// console.log("You're old");

let cards = ["Diamond", "Heart", "Spade", "Club"];
let currentCard = "Club";

while (currentCard != "Spade") {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log(currentCard);
