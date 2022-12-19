
let resultado=0;
function sumando(numero1,numero2){

    resultado= numero1 + numero2;
    return resultado;
    
}
console.log(sumando(4,5));
console.log( sumando(8,12));


var HoyEsUnDiaSoleado; //EJEMPLO DE CAMEL CASE

let areaCirculo;
let radio;
const pi=3.14;

radio=prompt("INGRESA UN RADIO:");
areaCirculo=pi*radio*radio; //3.14*5*5=78.5
console.log(areaCirculo);

//me perdixd


function notas(calificacion){
    
    if(calificacion>=13){
        alert("USTED APROBO EL CURSO, FELICIDADES");

    }
    else if(calificacion<13){
        alert("USTED JALÓ, DEBE ESFORZARSE MÁS A LA PRÓXIMA")
    }
}
let valorNota= prompt("INGRESA TU NOTA");
notas


function areaTriangulo(base,altura){
    let area= base*altura/2;
    return area;

}
let baseTriangulo=prompt("INGRESA UNA BASE PARA EL TRIANGULO");
let alturaTriangulo=prompt("INGRESA UNA ALTURA PARA EL TRIANGULO");

console.log(areaTriangulo(baseTriangulo,alturaTriangulo));

function areaCuadrado(lado){
    let area=lado*lado;
    return area;
}
let ladoCuadrado=prompt("INGRESA UN LADO");


console.log(areaCuadrado(ladoCuadrado,));