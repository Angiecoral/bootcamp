var numero=5;
while(numero<=20){

    console.log("Hola");
    numero=numero+1;

}
//RETO 1
let num=0;
while( num<=100){
    console.log(num);
    num=num+2;

}
//RETO 2
 let number=1;
 while(number<=12){

    console.log(number);
    number=number+2;
 }
 //RETO 3
 let numeros=1;
 while(numeros<=12){
    console.log(numeros);
    numeros=numeros+1;
 }

 //RETO 4: RRECORRIENDO ARREGLOS
 var juegos=["Minecraft","FIFA",50,25,10]//5 elementos=juegos.length

 let  i=0; //INICIALIZANDO
 while(i<=(juegos.length-1)){
    console.log(juegos[1]);
    i=i+1;
 }


 let valor=0;
 do{
   console.log(valor);
   valor=valor+1;

 }while( valor<=10 );
 
 let inicio=1;
 do{

   console.log(inicio);
   inicio=inicio+2;

 }while(inicio<=100);

 let inicio1=0;
 do{
   console.log(inicio1);
   inicio1=inicio1+1;

 }while (inicio1<=20);

 
  let dato;
 //const patron=hola/hola/; patrones de palabras;
 // patrones de numeros; /^[0-9]+$/;
// const patron=/hola[0-9]/; patones de una palabra con un numero
//patron de palabra,numero,palabra= /hola[0-9]mundo/;
 const patron=/hola/;

 do{

   dato= prompt("INGRESA TU EDAD:  ");

 }while(!patron.test(dato))
   
 