const prompt = require("prompt-sync")({sigint: true});
let num = Math.floor(Math.random() * 10);
let userNumber;

do {
    userNumber = Number(prompt("enter your number: "));
} while (userNumber != num);

/*
if (userNumber > num) {
    console.log("too much");
} else if (userNumber < num) {
    console.log("too small");
} else {
    console.log("You win!");
}*/
