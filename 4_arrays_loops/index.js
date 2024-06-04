//Arrays
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

//Loops
//Activity One

// let favFilms = [
//   "Steven Universe The Movie",
//   "Now You See Me 2",
//   "Sharkboy and Lavagirl",
// ];
// favFilms.push("Spy Kids", "Spy Kids 2");

// for (i = 0; i < favFilms.length; i++) {
//   console.log(favFilms[i]);
// }

//Activity Two

// for (i = 0; i < 6; i++) {
//   console.log(Math.ceil(Math.random() * 50));
// }

//Activity Three

// for (i = 9; i >= 0; i--) {
//   console.log(i);
// }

//Activity Four

// let films = ["Spy Kids", "Spy Kids 2", "Spy Kids 3D", "Spy Kids 4"];

// for (i = 0; i < films.length; i++) {
//   if (i == 2) {
//     if (films[i] == "Ghostbusters") {
//       console.log("Yay, it's Ghostbusters!");
//     } else {
//       console.log(`Boo we want Ghostbusters! Not ${films[i]}!`);
//     }
//   } else {
//     console.log(films[i]);
//   }
// }

//Activity Five

// for (i = 0; i < 6; i++) {
//   ranNum = Math.ceil(Math.random() * 30);
//   //   console.log(ranNum);
//   if (ranNum % 7 == 0) {
//     console.log(`${ranNum} is divisible by 7!`);
//   }
// }

//Activity Six

// let rowansFollowers = ["Alice", "Bill", "Charlotte", "David"];
// let martinasFollowers = ["Alice", "Barry", "Carol", "David"];

// for (i = 0; i < rowansFollowers.length; i++) {
//   for (j = 0; j < martinasFollowers.length; j++) {
//     if (martinasFollowers[j] === rowansFollowers[i]) {
//       console.log(martinasFollowers[j]);
//     }
//   }
// }

//Activity Seven

let text = "";
let i = 0;

// do {
//   text = i + 1;
//   console.log(text);
//   i++;
// } while (i < 5);

let numArr = [1, 2, 3, 4, 5];

// for (i = 0; i < numArr.length; i++) {
//   console.log(numArr[i]);
// }

while (numArr[i] <= numArr.length) {
  console.log(numArr[i]);
  i++;
}
