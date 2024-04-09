var miVariable = "ETS";

console.log(miVariable);

var miVariable = 23;

console.log(miVariable);

//alert() funcion para desplegar una alerta en la pagina

var primer; // se puede definir o no, var se puede declarar mas de una vez, var se puede usar como global si esta afuera de una funcion y como local adentro de una funcion
            // var se puede usar dentro y fuera de condicionales
let segundo; //se puede definir o no cuando se inicializa pero puede ser undefined, pero no se puede declarar mas de una vez, si se puede reasignar el valor
            // let no se puede usar dentro y fuera de condicionales
const tercero = 0;// las const ya no pueden cambiar su valor y se tiene que declarar cuando se inicializa

let numero=1, numero2=2 ,numero3=3;

//el hoisting es el concepto de declarar un variable despues de su uso

let nulo = null; //valores especiales, Nan significa Not a Number

let nombre = prompt("dame un nombre"); //prompt es in input que se puede almacenar en variables

alert(nombre);

//concatenamiento
 var saludo = "Hola Eudosio";
 var pregunta = "Como Nadas";
 frase = saludo + pregunta;
 document.write(frase);

//para concatenar numeros es necesario forzar texto
result= "" + numero + numero2;
document.write(result);
//tambien se puede concatenar con la funcion concat
//result= numero.concat(numero2);
//document.write(result);

//backtics
nombre = "Eudosio";
frase = `el dia hoy ${nombre} aprendio algo nuevo`;// es recomendable para escribir codigo html dentro de una variable
document.write(frase);

//operadores logicos
let texto ="1";
let texto2 = "texto 2"
document.write(numero===texto)
document.write(numero!==texto)

//camel hace referencia a que la primera palabra inicia con miniscula y luego todas las empiezan con mayusculas
declararVariable;