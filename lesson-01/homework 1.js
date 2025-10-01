const animals = ['cat', 'dog', 'horse'];
console.log(animals);

for (let i = 0; i <=2; i++) {
    console.log(animals[i]);
}


for (const animal of animals) {
    console.log(animal);
    }

let user = {name: 'Olesya', age: 40};
    console.log(user);

for (let key in user) {
    console.log(key + " " + user[key]);
}

let salaries = {Olesya: 100, Maxsim: 200, Sasha: 300};
for (let key in salaries) {
    console.log(salaries[key]);
}
let sum = 0;
for (let key in salaries) {sum += salaries[key];} {
    console.log('SUM' + '=' + sum);
}


