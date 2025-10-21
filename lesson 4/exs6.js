import promtSync from "prompt-sync"
const prompt = promtSync();

let number = Number(prompt("Enter your number"));
let simple = true;
let count = 0;
for (let i = 2; i < number; i++) {
   if (number % i ===0) {
       if ( i % 2 === 0)  {
           console.log(i);
           if (i % 3 === 0) {
               for (let j = 0; j < number; j++) {
                   if (j % 7 === 0) {
                       console.log("7++");
                   } else {
                       console.log("%3");
                   }
               }
           }
       }
       simple = false;
       count++;
   }
}
console.log(simple);
console.log(count);
