const prompt = require("prompt-sync")({sigint: true});

// TODO: создай переменные username, age и выведи их в консоль
let username = 'Olesya';
let age = prompt("How old are you? ");
let password;
const p = 3.14;
if (false) {
    console.log(`Welcome to the ${username}!`);
}
if (age > 40){
    console.log('вам больше 40')
} else if (age > 10){
    console.log('вам больше 10')
} else {
    console.log('something went wrong!');
}
// sigint=true, чтобы Ctrl+C работал


