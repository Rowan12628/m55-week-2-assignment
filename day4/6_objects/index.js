// const person = {
//   myName: "Rowan",
//   age: 21,
//   eyeColour: "blue",
// };

// console.log(person.eyeColour);
// console.log(person["eyeColour"]);

// const myAlarm = {
//   weekdayAlarm: "get up at 7am",
//   weekendAlarm: "no alarm needed",
// };

// let day = "Sunday";
// let alarm;

// if (day == "Saturday" || day == "Sunday") {
//   alarm = myAlarm.weekendAlarm;
// } else {
//   alarm = myAlarm.weekdayAlarm;
// }

// console.log(alarm);

const person = {
  myName: "Rowan",
  age: 21,
  eyeColour: "blue",
  isCool: true,
  playDnD() {
    console.log("Yippee I'm having fun playing dnd");
  },
  watchCartoons(cartoon) {
    console.log(`I love to watch ${cartoon}!`);
  },
  checkIsCool() {
    if (this.isCool) {
      console.log("cool");
    }
  },
};

person.favSongs = ["Megalovania", "song 2", "etc"];

person.checkIsCool();
