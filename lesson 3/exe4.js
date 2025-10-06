const prompt = require("prompt-sync")({sigint: true});

let a = Number(prompt("Enter a number"));
let b = 0;
while ( b <= a) {
    console.log(b);
    b +=2
}


i = 1;
while ( i <= 10) {
    console.log( a + " * " + i + " = " + (a * i));
    i++;
}

let num1 = Number(prompt("Enter a number"));
let num2 = Number(prompt("Enter a number"));
while (num1 <= num2) {
    if (num1 % 3 ===0)
        console.log(num1);
    num1++;
}

let num3 = Number(prompt("Enter a number"));
let count = 0;
while (num3 < 100) {
    console.log(num3 = num3 * 2);
    count++;
}
