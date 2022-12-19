document.getElementById("titulo").innerHTML="VERIFICADO";
document.getElementById("parrafo").innerHTML="FUNCIONA CORRECTAMENTE";
document.getElementById("mensaje").innerHTML="PRUEBA DE MENSAJE";
for(let i=1 ; i<=5 ; i++){
    console.log("HOLA");
}

var mensaje="BIEN"
for(let i=1; i<=10; i++){
    console.log(mensaje);
}
var texto="hola";
for(let y=0; y<=3; y++){

    console.log(texto);
    console.log(y);
}
//SUMATORIA CON NUMEROS CON FOR
var suma=0;
for(let i=1; i<=100; i++){
    suma=i+suma;
}
console.log(suma);