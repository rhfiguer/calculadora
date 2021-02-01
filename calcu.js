/* Lo primero que vamos hacer es activar los botones de manera que éstos se muestren
en la pantalla de la calculadora cuando haya presionado el botón respectivo
*/
var actual = "";
var anterior = "";
var operacion = undefined;

function init(){
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var punto = document.getElementById("punto");
    var pantalla = document.getElementById("pantalla");
}

uno.onclick = function(){
    pantalla.innerText = pantalla.innerText + "1";
}

dos.onclick = function(){
    pantalla.innerText = pantalla.innerText + "2";
}

tres.onclick = function(){
    pantalla.innerText = pantalla.innerText + "3";
}

cuatro.onclick = function(){
    pantalla.innerText = pantalla.innerText + "4";
}

cinco.onclick = function(){
    pantalla.innerText = pantalla.innerText + "5";
}

seis.onclick = function(){
    pantalla.innerText = pantalla.innerText + "6";
}

siete.onclick = function(){
    pantalla.innerText = pantalla.innerText + "7";
}

ocho.onclick = function(){
    pantalla.innerText = pantalla.innerText + "8";
}

nueve.onclick = function(){
    pantalla.innerText = pantalla.innerText + "9";
}

cero.onclick = function(){
    pantalla.innerText = pantalla.innerText + "0";
}

/* Segundo, tenemos que activar las funciones de suma, resta, multiplicacion y división al
momento de hacer click on los botones respectivos. Para eso creamos tres variables adicionales: 
anterior, actual y operación
*/

   

var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var igual = document.getElementById("igual");
var del = document.getElementById("del")


suma.onclick = function(){
    anterior = pantalla.innerText;
    operacion = "+";
    limpiar();
}

resta.onclick = function(){
    anterior = pantalla.innerText;
    operacion = "-";
    limpiar();
}

multiplicacion.onclick = function(){
    anterior = pantalla.innerText;
    operacion = "*";
    limpiar();
}

division.onclick = function(){
    anterior = pantalla.innerText;
    operacion = "%";
    limpiar();
}



function limpiar(){
    pantalla.innerText = "";
}   

del.onclick = function(){
    borrar();
}

function borrar(){
    pantalla.innerText = "";
    actual = 0;
    anterior = 0;
    operacion = "";
}

botonigual.onclick = function(){
    actual = pantalla.innerText;
    resolver();
}

function resolver(){
    var res=0;
    switch(operacion){
        case "+":
            res = parseFloat(anterior) + parseFloat(actual);
            break;
        case "-":
            res = parseFloat(anterior) - parseFloat(actual);
            break;
        case "*":
            res = parseFloat(anterior) * parseFloat(actual);
            break;
        case "%":
            res= parseFloat(anterior) / parseFloat(actual);
            break;
        
    }

    pantalla.innerText = res;
   
}