//COSAS QUE FALTA POR HACER:
// ¡AHORA YA!:EMPATE (DONE!)-CRONÓMETRO Y CONTADOR DE
// OTRA COSA: EDITAR SIZE-FONT DE TEXT INGRESADO CON INNERHTML
// PRIMERO: HACER QUE JUEGO SEA ONLINE Y REMOTO PARA DOS JUGADORES
// SEGUNDO: ALERTA DE INICIO DE JUEGO DESPUÉS DE INGRESO DE NOMBRES
//TERCERO: DISEÑO PARA PRO PARA ALERTA DE TRIUNFO (MÚSICA TAL VEZ)
//CUARTO: DISEÑO MÁS BONITO PARA LA PÁGINA COMO UN TODO


//PROGRAMAMOS CRONÓMETRO
var segundos = 30
var cronometro = document.getElementById("cronometro");
i=1;
var stop = false;
function actualizarCronometro(){
    if(i=1 && i<30 && segundos >0 && stop ==false){
        segundos = segundos -1;
        cronometro.innerHTML = segundos;
        i++;
        if(
            (posUno.innerHTML == "X" && posDos.innerHTML == "X" && posTres.innerHTML == "X")
            || (posUno.innerHTML == "X" && posCinco.innerHTML == "X" && posNueve.innerHTML == "X")
            || (posUno.innerHTML == "X" && posCuatro.innerHTML == "X" && posSiete.innerHTML == "X")
            || (posDos.innerHTML == "X" && posCinco.innerHTML == "X" && posOcho.innerHTML == "X")
            || (posTres.innerHTML == "X" && posSeis.innerHTML == "X" && posNueve.innerHTML == "X")
            || (posCuatro.innerHTML == "X" && posCinco.innerHTML == "X" && posSeis.innerHTML == "X")
            || (posSiete.innerHTML == "X" && posOcho.innerHTML == "X" && posNueve.innerHTML == "X")
            || (posTres.innerHTML == "X" && posCinco.innerHTML == "X" && posSiete.innerHTML == "X")
            || (posUno.innerHTML == "O" && posDos.innerHTML == "O" && posTres.innerHTML == "O") 
            || (posUno.innerHTML == "O" && posCinco.innerHTML == "O" && posNueve.innerHTML == "O")
            || (posUno.innerHTML == "O" && posCuatro.innerHTML == "O" && posSiete.innerHTML == "O")
            || (posDos.innerHTML == "O" && posCinco.innerHTML == "O" && posOcho.innerHTML == "O")
            || (posTres.innerHTML == "O" && posSeis.innerHTML == "O" && posNueve.innerHTML == "O")
            || (posCuatro.innerHTML == "O" && posCinco.innerHTML == "O" && posSeis.innerHTML == "O")
            || (posSiete.innerHTML == "O" && posOcho.innerHTML == "O" && posNueve.innerHTML == "O")
            || (posTres.innerHTML == "O" && posCinco.innerHTML == "O" && posSiete.innerHTML == "O")

            ){
            stop = true;
            }

    }
}
setInterval(actualizarCronometro,1000);




// FUNCION ASIGNAR IDENTIFICA TURNO PAR-IMPAR Y ASIGNA "X" U "O" RESPECTIVAMENTE
var turnosTotal =0;
function asignar(event){

    var idTurno = event.target.id;
    var gatoEvento = document.getElementById(idTurno);
    var paridad = turnosTotal % 2
    var mensaje = document.getElementById("mensaje");
    var nombreUno = document.getElementById("jugador-uno");
    var nombreUnostring = nombreUno.value;
    var nombreDos = document.getElementById("jugador-dos");
    if(paridad == 0){
        paridad == true;
    } else{
        paridad == false;
    }
    if (paridad == true){
        i=0;
        arrayUno = [i];
        gatoEvento.innerHTML = "X";
        mensaje.innerHTML = nombreUno.value;     
        
    } else {
        gatoEvento.innerHTML = "O";
        mensaje.innerHTML = nombreDos.value;
    }
    turnosTotal++;
    ganador();
   
}  

// FUNION GANADOR IDENTIFICA LAS COMBINACIONES DE X Y O QUE SON GANADORAS

function ganador(){
    
    var mensaje = document.getElementById("mensaje");
    var nombreUno = document.getElementById("jugador-uno");
    var nombreDos = document.getElementById("jugador-dos");
    var nombreUnostring = nombreUno.value;
    var nombreDosstring = nombreDos.value;
   

    if((posUno.innerHTML == "X" && posDos.innerHTML == "X" && posTres.innerHTML == "X") 
    || (posUno.innerHTML == "X" && posCinco.innerHTML == "X" && posNueve.innerHTML == "X")
    || (posUno.innerHTML == "X" && posCuatro.innerHTML == "X" && posSiete.innerHTML == "X")
    || (posDos.innerHTML == "X" && posCinco.innerHTML == "X" && posOcho.innerHTML == "X")
    || (posTres.innerHTML == "X" && posSeis.innerHTML == "X" && posNueve.innerHTML == "X")
    || (posCuatro.innerHTML == "X" && posCinco.innerHTML == "X" && posSeis.innerHTML == "X")
    || (posSiete.innerHTML == "X" && posOcho.innerHTML == "X" && posNueve.innerHTML == "X")
    || (posTres.innerHTML == "X" && posCinco.innerHTML == "X" && posSiete.innerHTML == "X")
    ) {
        /*alert("¡Ganaste, " +nombreDosstring+ "!"); */
        window.onload = setTimeout(function(){
            alert("¡Ganaste, " +nombreDosstring+ "!");
        }, 250);
           
    } else{
        if((posUno.innerHTML == "O" && posDos.innerHTML == "O" && posTres.innerHTML == "O") 
        || (posUno.innerHTML == "O" && posCinco.innerHTML == "O" && posNueve.innerHTML == "O")
        || (posUno.innerHTML == "O" && posCuatro.innerHTML == "O" && posSiete.innerHTML == "O")
        || (posDos.innerHTML == "O" && posCinco.innerHTML == "O" && posOcho.innerHTML == "O")
        || (posTres.innerHTML == "O" && posSeis.innerHTML == "O" && posNueve.innerHTML == "O")
        || (posCuatro.innerHTML == "O" && posCinco.innerHTML == "O" && posSeis.innerHTML == "O")
        || (posSiete.innerHTML == "O" && posOcho.innerHTML == "O" && posNueve.innerHTML == "O")
        || (posTres.innerHTML == "O" && posCinco.innerHTML == "O" && posSiete.innerHTML == "O")

        ){
           
            /*alert("¡Ganaste, " +nombreUnostring+ "!"); */
            window.onload = setTimeout(function(){
                alert("¡Ganaste, " +nombreUnostring+ "!");
            }, 250);
        } else{
            if(turnosTotal===9){
                /*alert("¡Ha habido un empate!");*/
                window.onload = setTimeout(function(){
                    alert("¡Ha habido un empate!");
                }, 250);
            }
        }

    }
     
}

// VARIABLES QUE PERMITEN IDENTIFICAR POSICIONES DE LOS DOS JUGADORES
var posUno = document.getElementById("1");
var posDos = document.getElementById("2");
var posTres = document.getElementById("3");
var posCuatro= document.getElementById("4");
var posCinco = document.getElementById("5");
var posSeis = document.getElementById("6");
var posSiete = document.getElementById("7");
var posOcho = document.getElementById("8");
var posNueve = document.getElementById("9");

        



