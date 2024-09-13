const numbers = [];
let somme = 0;
let highNumber = 0;

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
    if (numbers[i] <= highNumber) continue;
    highNumber = numbers[i]
    somme = somme + numbers[i];
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log(somme)