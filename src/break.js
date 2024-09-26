"use strict";

const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
    if (numbers[i]>50){
        break; // le break gère le flux
    }
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);

}
let skipedAction = 10 - numbers.length;
console.log("L'app a éviter "+ skipedAction +" valeurs");