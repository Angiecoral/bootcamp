var respuesta = prompt("¿Cómo te sientes el dia de hoy?")

switch(respuesta){

    case 'feliz' :
    alert("sigue estando feliz");
    break;
    
    case 'triste':
        alert("todo va a mejorar");
        break;

    case 'molesto':
        alert("tranquilo todo va a mejorar");
        break;

    default:
        alert("tu estado de animo es complicado");
        break;     

}