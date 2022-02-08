const numeri = [1,2,3,4,5,6,7];

let valori = valoriIntermezzo(2, 5, numeri);
console.log(valori);

function valoriIntermezzo(num1, num2, array) {

    let nuovoArray = [];

    if (num1 < num2) {

        for (let i=num1; i<num2; i++) {
            nuovoArray.push(array[i]);
        }

    } else {
        alert("Il valore del primo numero deve essere più piccolo del secondo");
    }

    return nuovoArray;
}