const prompt = require("prompt-sync")({sigint: true});

const numberRock = 0;
const numberScissors = 1;
const numberPaper = 2;
let myNumber;
prompt("Enter mama ");
let myFigure = (prompt("Enter rock, paper or scissors "));

if (myFigure == "rock") {
    myNumber = numberRock;
} else if (myFigure == "scissors") {
    myNumber = numberScissors;
} else if (myFigure == "paper") {
    myNumber = numberPaper;
} else {
    console.log("enter correct value");
}

let num = Math.floor(Math.random() * 2);
let programFigure;

if (num == numberRock) {
    programFigure = "rock";
} else if (num == numberScissors) {
    programFigure = "scissors";
} else if (num == numberPaper) {
    programFigure = "paper";
} else {
    console.log("enter correct value");
}
console.log("my figure: " + programFigure);

if (myNumber === num) {
    console.log(("dead heat"));
} else if (myNumber === numberRock && num === numberScissors) {
    console.log(("I win"));
} else if (myNumber === numberRock && num === numberPaper) {
    console.log(("You win"));
} else if (myNumber === numberScissors && num === numberRock) {
    console.log(("You win"));
} else if (myNumber === numberScissors && num === numberPaper) {
    console.log(("I win"));
} else if (myNumber === numberPaper && num === numberScissors) {
    console.log(("you win"));
} else if (myNumber === numberPaper && num === numberRock) {
    console.log(("I win"));
}