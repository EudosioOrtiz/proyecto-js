

let cadena = "cadena cadena de prueba";
let cadena2 = "cadena ";
let cadena3 = "wola";

//metodos de cadena
resultado = cadena.concat(cadena2);
resultado2 = cadena.startsWith(cadena2);
resultado3 = cadena.endsWith(cadena2);
resultado4 = cadena.includes(cadena3);
resultado5 = cadena.indexOf(cadena2); // retorna la posicion de inicio del string
resultado6 = cadena.lastIndexOf(cadena2); // retorna la poisicion de inicio del ultimo string a buscar dentro de la cadena
resultado7 = cadena.padStart(30,"483"); //rellena la cadena por entrefrente para que tenga el numero de caracteres deseados y rellena con el sting proporcionado
resultado8 = cadena.padEnd(30,"483"); //rellena la cadena por atras para que tenga el numero de caracteres deseados y rellena con el sting proporcionado
resultado9 = cadena.repeat(3);

resultado10 = cadena.split(" "); //retorna un array con la particion del texto el array se muestra separado por comas
resultado11 = cadena.substring(0,12); //retorna el texto de las psosiciones deseadas
resultado12 = cadena.toLowerCase();
resultado13 = cadena.toUpperCase();
resultado14 = cadena.toString();
resultado15 = cadena.trim(); //elimina espacios
resultado16 = cadena.trimStart(); //elimina espacios del principio
resultado17 = cadena.trimEnd();//elimina espacios del final


document.writeln(`
    metodos cadena <br/>
    ${resultado}<br/>
    ${resultado2}<br/>
    ${resultado3}<br/>
    ${resultado4}<br/>
    ${resultado5}<br/>
    ${resultado6}<br/>
    ${resultado7}<br/>
    ${resultado8}<br/>
    ${resultado9}<br/>
    ${resultado10}<br/>
    ${resultado11}<br/>
    ${resultado12}<br/>
    ${resultado13}<br/>
    ${resultado14}<br/>
    ${resultado15}<br/>
    ${resultado16}<br/>
    ${resultado17}<br/><br/>
    `);

//metodos array

let rzrs = ["rzr negro","rzr azul","rzr rojo","rzr gris"];

document.write(rzrs + "</br>");
resultadoArr = rzrs.pop(); // elimina el ultimo elemento y lo retorna
document.write(rzrs + "</br>");
resultadoArr2 = rzrs.shift(); // elimina el primer elemento y lo retorna
document.write(rzrs + "</br>");
resultadoArr3 = rzrs.push("rzr rosa", "rzr naranja"); // agrega los elementos al final del array y retorna cuantos elementos contiene el array
document.write(rzrs + "</br>")
resultadoArr4 = rzrs.reverse(); //invierte las posiciones del array 
document.write(rzrs + "</br>");
resultadoArr5 = rzrs.unshift("rzr verde", "rzr amarillo");// agrega elementos al inicio del array
document.write(rzrs + "</br>");
resultadoArr6 = rzrs.sort();// sirve para ordenar el array
document.write(rzrs + "</br>");
resultadoArr7 = rzrs.splice(1,3, "rzr violeta","rzr violeta"); // elimina los elementos del rango dado y puede reemplazarlo por un valor dado
document.write(rzrs + "</br>");
resultadoArr8 = rzrs.join(" - ");// junta todo el array en cadena de texto y se puede utilizar el separador que queramos
document.write(resultadoArr8 + "</br>");
resultadoArr9 = rzrs.slice(0,-1); // corta ya almacena todos los elementos del rango dato del array, para seleccionar todos se deja solo un 0 si quieres todos menos el ultimo es el rango de 0, -1
document.write(resultadoArr9 + "</br>");
resultadoArr10 = rzrs.includes("rzr rosa"); 
document.write(resultadoArr10 + "</br>");
resultadoArr11 = rzrs.indexOf("rzr violeta"); 
document.write(resultadoArr11 + "</br>");
resultadoArr10 = rzrs.lastIndexOf("rzr violeta"); 
document.write(resultadoArr10 + "</br>");

rzrs.filter(rzr => document.write(rzr + "<br>")) ;// filter ocupa como parametro una funcion del tipo que sea y en filter se puede agregar validaciones para retornar resultados deseados

rzrs.forEach(rzr => document.write(rzr + "<br>")); // filter ocupa como parametro una funcion del tipo que sea

resultado11 = rzrs.filter(rzr => rzr.length >10);
document.write(resultado11);


//objeto math
//metodos

numero = Math.sqrt(25);//raiz cuadrada
numero2 = Math.cbrt(27);//raiz cubica
numero3 = Math.max(2,4,5,2,4,7);// maximo de una lista de numeros
numero4 = Math.min(2,4,5,2,4,7);// minimo de una lista de numeros
numero5 = Math.random()*100;// retorna numero random entre 0 y 1
numero6 = Math.round(numero5);// devuelve el valor de un numero redondeado al numero entero mas cercano
numero7 = Math.floor(numero5);// redondea siempre hacia abajo
numero8 = Math.round(numero5);// devuelve el valor de un numero redondeado al numero entero mas cercano
numero9 = Math.trunc(numero5);// elimina los decimales

//propiedades

Math.PI
Math.SQRT1_2
Math.SQRT2
Math.E
Math.LN2
Math.LN10
Math.LOG2E
Math.LOG10E


document.write(`
    <br/>
    ${numero}<br/>
    ${numero2}<br/>
    ${numero3}<br/>
    ${numero4}<br/>
    ${numero5}<br/>
    ${numero6}<br/>
    ${numero7}<br/>
    ${numero8}<br/>
    <br/>
    `);
