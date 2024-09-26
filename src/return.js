"use strict";

function calcul() {
    const numbers = [];
    let somme = 100;

    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 100));

        if (i === 4) return"Vous étes à la moitier de la liste";

        if (numbers[i] === numbers[i-1]) return "Il y a deux fois le même chiffre a la suite";

        if (somme === 50) return "Vous avez 50 dans la soustraction";

        if ((numbers[i] % 2) === 0) {
            somme = somme - numbers[i];
        }

        for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i]);
        }
    }
}

console.log(calcul());
