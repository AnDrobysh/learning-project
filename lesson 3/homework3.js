const prompt = require("prompt-sync")({sigint: true});

const rock = 0;
const scissors = 1;
const paper = 2;

let num = Math.floor(Math.random() * 2);
let myNumber = prompt("Enter a number");
if (myNumber === num) {
    console.log(prompt("dead heat"));
} else if (myNumber === 0 && num === 1) {
    console.log(prompt("I win"));
}