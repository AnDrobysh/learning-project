const prompt = require("prompt-sync")({sigint: true});

let myNumber;
let compNumber;
    do {
        myNumber = prompt("Enter your number ");
        if (myNumber == "1" || myNumber == "2" || myNumber == "3" || myNumber == "4" || myNumber == "5") {
            myNumber = Number(myNumber);
        }
        else if (myNumber == "one") {
            myNumber = 1;
        }
        else if (myNumber == "two") {
            myNumber = 2;
        }
        else if (myNumber == "three") {
            myNumber = 3;
        }
        else if (myNumber == "four") {
            myNumber = 4;
        }
        else if (myNumber == "five") {
            myNumber = 5;
        }
        else if (myNumber > 5) {
            console.log("enter correct value");
        }
        else {
            console.log("enter correct value");
        }
        compNumber = Math.floor(Math.random() * 5) + 1;
        console.log("comp number: " + compNumber);
        if (myNumber > compNumber && myNumber <= 5) {
            console.log("I win");
        } else if (myNumber < compNumber) {
            console.log("loose");
        } else if (myNumber == compNumber) {
            console.log("dead heat");
        }
    }
    while (myNumber <= compNumber || myNumber > 5);

