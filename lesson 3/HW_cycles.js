let number = 1;
for (number = 1; number <= 10; number++) { //нужно тут было опять передвавать number значение? по- др у меня не работает
    console.log(number)
}

let i = 10;
while (i >= 1) {   //тот ли цикл?  в задании while - поправила
    console.log(i);
    i--;
}

do {
    if (number <= 5) {
        console.log(number)
        number++;
    }
}
while (number <= 5);

for (number = 0; number <= 20; number += 2) {
    console.log(number);
}

let animals = ["cat", "dog", "horse", "pig"];
for (let animal of animals) {
    console.log(animal);
}

let user = {
    name: "Olesya",
    age: 40,
    nationality: "BLR",
    driverLicense: "Yes"

};
for (let key in user) {
    console.log(key + ": " + user[key]);
}


let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (item) {
    console.log("Элемент: " + item);
});

let a = 1;
while (a <= 30) {
    if (a % 2 === 0) {
        console.log(a + " Четное");
    } else {
        console.log(a + " Нечетное");
    }
    a++;
}


let b = [1, -2, -3, 4, 5, 6, 7, -8, 9, 10, -11, -12, 13, 14, -15, 16, -17, -18, 19, -20];
let count = 0;
for(let i of b) {
    if (i > 0) {
        count++;
    }
}
console.log("положительных чисел в массиве: " + count);

a = 1;
while (a <= 20) {
    console.log(a);
    if (a % 7 === 0) {
        break;
    }
    a++;
}
