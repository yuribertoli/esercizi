let stringa = "ma cosa ne so";
let girato = capovolgiStringa(stringa);
console.log(girato);

function capovolgiStringa(stringa) {

    let array = stringa.split("");
    let inverti = array.reverse();
    return inverti.join("");

}