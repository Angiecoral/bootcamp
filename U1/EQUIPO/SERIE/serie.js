
var preguntas = [
"Esta serie fue creada por Michael Schur ,creador de ‘The Office’ y protagonizada por Kristen Bell…",
"En la miniserie ‘The Queen´s Gambit’ la protagonista Beth Harmon, interpretada por Anya Taylor-Joy es una jugadora profesional de…",
" En ‘Selena: la serie’, ¿quién interpreta a la cantante y protagonista, Selena?",
" ¿Qué serie es protagonizada por el actor Penn Badgley?",
" ¿Qué tienen en común las series ‘Stranger Things’ y ‘Dark’?",
"¿Cuál es la profesión de la madre de Otis en la serie ‘Sex Education’?",
" La serie que trata sobre el reinado de la reina Isabel II es…",
"¿Cuántos episodios tiene la primera temporada de la serie ‘Bridgerton’?",
"En la serie ‘Ginny and Georgia’ los miembros de la familia Miller, llevan su nombre en honor a…",
"‘Lucifer’ es protagonizada por…",

];

var opciones = [
[" ‘Insatiable’",
 "‘Designated Survivor’",
 "‘The Good Place’",
 "‘Sex Education’"],
[" Póquer",
 "Backgammon",
 "Ajedrez",
"Vikingo"],
["Salma Hayek",
"Anahí Puente",
"Christina Santos",
"Jennifer Lopez"],
["‘Dark’",
"‘You’",
"‘The Rain’",
"Queen"],
["Alguien muere en el primer episodio",
 "Son protagonizadas por el mismo actor",
 "Son del mismo director",
 "La trama comienza con la desaparición de un niño"],
["Fisioterapeuta",
"Trabajadora sexual",
"Terapeuta sexual",
"Corredora de seguros"],
["‘Peaky Blinders’",
"‘Bridgerton’",
"‘Atypical’",
"‘The Crown’"],
["24 episodios",
"10 episodios",
"8 episodios",
"21 episodios"],
["Gustos de su papá",
"La ciudad donde nacieron",
"Un momento que marcó la vida de sus padres",
"Sus abuelos"],
["Charlie Cox",
"Ralph Macchio",
"Tom Ellis",
"Chris Evans"]
];
   


var puntajePorOpcion=[
    [0,0,2,0],
    [0,0,2,0],
    [0,0,2,0],
    [0,2,0,0],
    [0,0,0,2],
    [0,0,2,0],
    [0,0,0,2],
    [0,0,2,0],
    [0,2,0,0],
    [0,0,2,0],
];

var i=0;
function siguientePregunta(){
    document.getElementById("pregunta").innerHTML=preguntas[i];

    document.getElementById("op1").innerHTML=opciones[i][0];
    document.getElementById("op2").innerHTML=opciones[i][1];
    document.getElementById("op3").innerHTML=opciones[i][2];
    document.getElementById("op4").innerHTML=opciones[i][3];
    

}

siguientePregunta();

var actualizado=0;

function actualizarPuntaje(alternativa){ 

    actualizado=puntajePorOpcion[i][alternativa]+actualizado;
    i++;
    if(i<10){
        siguientePregunta();
        if(i==1){
            document.getElementsByClassName("imagen1")[0].innerHTML="";
  
            var img1=document.createElement('img');
            img1.id=("primero");
            img1.setAttribute("src","https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg");
            document.getElementsByClassName("imagen1")[0].appendChild(img1);

        }

        else if(i==2){
        document.getElementsByClassName("imagen1")[0].innerHTML="";
  
        var img1=document.createElement('img');
        img1.id=("segundo");
        img1.setAttribute("src","https://tv-fanatic-res.cloudinary.com/iu/s--BFZYIqGj--/f_auto,q_auto/v1601994275/selena-the-series-poster");
        document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }

        else if(i==3){
        document.getElementsByClassName("imagen1")[0].innerHTML="";
      
        var img1=document.createElement('img');
        img1.id=("tercero");
        img1.setAttribute("src","https://media1.popsugar-assets.com/files/thumbor/hIjKSU-aWX-k7vFYXLvo0KgLZdI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/01/16/988/n/1922283/10126e48b8c821a0_GettyImages-1051915332/i/Penn-Badgley.jpg");
        
        document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }

        else if(i==4){
        document.getElementsByClassName("imagen1")[0].innerHTML="";
          
        var img1=document.createElement('img');
        img1.id=("cuarto");
        img1.setAttribute("src","https://mui.today/__export/1593442436930/sites/mui/img/2020/06/29/collage_2_2019-8-1-9-31-0_thumbnail.jpg_21096597.jpg");
        document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }
        else if(i==5){
        document.getElementsByClassName("imagen1")[0].innerHTML="";
      
        var img1=document.createElement('img');
        img1.id=("quinto");
        img1.setAttribute("src","https://larepublica.pe/resizer/slVFLlu7xXDubyAJzg12aRsZJDw=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/KYW7B5VROJBVPOKNMDVAD2BDDQ.jpg");
        document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }  

        else if(i==6){
        document.getElementsByClassName("imagen1")[0].innerHTML="";
          
        var img1=document.createElement('img');
        img1.id=("sexto");
        img1.setAttribute("src","https://fotografias.antena3.com/clipping/cmsimages02/2017/03/10/8369D8DA-5594-43AC-B30A-647B949856A6/98.jpg?crop=1280,720,x0,y0&width=1900&height=1069&optimize=high&format=webply");
        document.getElementsByClassName("imagen1")[0].appendChild(img1);
        } 

        else if(i==7){
        document.getElementsByClassName("imagen1")[0].innerHTML="";
      
        var img1=document.createElement('img');
        img1.id=("septimo");
        img1.setAttribute("src","https://i.blogs.es/e4a6cd/cartel-los-bridgerton/1366_2000.jpeg");
        document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }   
        else if(i==8){
        document.getElementsByClassName("imagen1")[0].innerHTML="";
      
        var img1=document.createElement('img');
        img1.id=("octavo");
        img1.setAttribute("src","https://netflixjunkie.com/wp-content/uploads/2021/06/ginny-and-georgia-season-2-release-date-trailer-and-more-1140x600.jpg");   
        document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }  
        else if(i==9){
        document.getElementsByClassName("imagen1")[0].innerHTML="";
      
        var img1=document.createElement('img');
        img1.id=("noveno");
        img1.setAttribute("src","https://pbs.twimg.com/media/Ey7Z3zuWUAoYgbl.jpg");
        document.getElementsByClassName("imagen1")[0].appendChild(img1);
        }  
            
    }
    else{
        mostrarResultado();
    }

}

document.getElementById("op1").addEventListener("click",function(){actualizarPuntaje(0)});
document.getElementById("op2").addEventListener("click",function(){actualizarPuntaje(1)});
document.getElementById("op3").addEventListener("click",function(){actualizarPuntaje(2)});
document.getElementById("op4").addEventListener("click",function(){actualizarPuntaje(3)});


function mostrarResultado(){

    document.getElementById("titulo").innerHTML="RESULTADOS"
    document.getElementById("pregunta").innerHTML=" PUNTAJE OBTENIDO  🎬:"+actualizado;
    document.getElementsByClassName("pregunta_alternativas")[0].innerHTML="";
   document.getElementsByClassName("imagen1")[0].innerHTML="";
    var img=document.createElement('img');
    img.id=("neflix");
    img.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png");
    
    document.getElementsByClassName("pregunta_alternativas")[0].appendChild(img);
    
}



    


