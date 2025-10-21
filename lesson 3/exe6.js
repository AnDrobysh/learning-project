let array =[1, 2, 3, 4, 5];
/*for (number of array) {
    for (number2 of array)
    console.log(number * number2);
}


for (let number = 0; number < 5; number++) {
    let a = array [number];
    let b = 0;

    for(let i = 1; i <= 5; i++) {
        b++;
        if ((a * b) % 2 === 0) {
            console.log(a * b + "*");
        } else {
            console.log(a * b);
        }

    }
}



 function cycle (x, y) {
     for (let number = 1; number <= x; number++) {
         let i = 1;
         while (i <= y) {
             console.log( number * i);
             i++;

         }
     }
 }
 cycle (5, 4);
 */

 function summ (x, y) {
     console.log( x + y);
 }
 summ (3, 8);

 function rag (a, b) {
     if (a == 0) {
         console.log(a * b);
     } else {
         a = 0;
         rag (a, b);
     }
 }
 rag (3, 8);

 function add (a, b) {
     return a + b;
      }
 let c = summ (5, 7);
 console.log(c);