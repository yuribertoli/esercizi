let stringhe = ["PIPPO", "Pluto", "PaPeRiNo"];
let capitalize = primaMaiuscola(stringhe);
console.log(capitalize);

function primaMaiuscola(array) {
    let nuovoArray = []
    for (i=0; i<array.length; i++) {
        let minuscolo = array[i].toLowerCase();
        let prendiPrimaLettera = minuscolo.charAt(0).toUpperCase() + minuscolo.slice(1);
        nuovoArray.push(prendiPrimaLettera);
    }
    return nuovoArray;
}