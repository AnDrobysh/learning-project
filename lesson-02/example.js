const prompt = require("prompt-sync")({sigint: true});
// 1. Цикл for
console.log("=== for ===");
for (let i = 1; i <= 5; i++) {
    console.log("for:", i);
}

// 2. Цикл while
console.log("\n=== while ===");
let i = 1;
while (i <= 5) {
    console.log("while:", i);
    i++;
}

// 3. Цикл do...while
console.log("\n=== do...while ===");
let j = 1;
do {
    console.log("do...while:", j);
    j++;
} while (j <= 5);

// 4. Цикл for...of (для массивов)
console.log("\n=== for...of ===");
const fruits = ["🍎 Яблоко", "🍌 Банан", "🍊 Апельсин"];
for (const fruit of fruits) {
    console.log("for...of:", fruit);
}

// 5. Цикл for...in (для объектов)
console.log("\n=== for...in ===");
const user = { name: "Андрей", age: 30, city: "Тбилиси" };
for (const key in user) {
    console.log("for...in:", key, "=", user[key]);
}
