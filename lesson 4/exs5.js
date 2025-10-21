import promtSync from "prompt-sync"
const prompt = promtSync();

let number = Number(prompt("Enter your number"));
let sum = 0;
let sum1 =0;
for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        sum = i + sum;
    } else {
        sum1 = i + sum1;
    }

}
console.log(sum);
console.log(sum1);