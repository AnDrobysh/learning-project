const prompt = require("prompt-sync")({sigint: true});

let myNumber = Number(prompt("Enter your number"));
let compNumber = Math.floor(Math.random() * 6);
console.log("comp figure: " + compNumber);
if (myNumber > compNumber) {
    console.log("I win");
} else  if (myNumber < compNumber) {
    console.log("You win");
} else  if (myNumber == compNumber) {
    console.log("dead heat");
} else {
    console.log("Enter correct number");
}