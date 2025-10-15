let number = 1;
for (number = 1; number <= 10; number++) {
  console.log(number)
}

for (number = 10; number >= 1; number--) {
    console.log(number)
}


do {
        if (number <= 5) {
        console.log(number)
        number ++;
    }
    }
while (number <= 5);

 for (number = 0; number <= 20; number +=2 ) {
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


