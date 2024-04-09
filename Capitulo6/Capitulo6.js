// DOM

//metodos de seleccion de elementos

parrafo1 = document.getElementById("instagram"); // retorna el tipo de elemento de objeto por el ID
document.write(parrafo1 + "</br>");
parrafo = document.getElementsByTagName("p"); // retorna el tipo de elemento de objeto por el tipo de elemento y retorna una lista de los elementos del mismo tipo
document.write(parrafo + "</br>");

// puedes acceder a las listas siguientes por index []
parrafo = document.querySelector("#instagram"); // retorna el tipo de elemento de objeto por seleccion tipo css y retorna una lista de los elementos del mismo tipo
document.write(parrafo + "</br>");
parrafo = document.querySelectorAll("#facebook"); // retorna el tipo de elemento de objeto por seleccion tipo css y retorna una lista de los nodos del mismo tipo clase o ID
document.write(parrafo + "</br>");


//metodos para modifcar atributos de elementos
const rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type","range")// modifica y crea atributos de un elemento
document.write(rangoEtario + "</br>");
document.write(rangoEtario.getAttribute("type")+ "</br>");//obtiene el atributo
document.write(rangoEtario.removeAttribute("type")+ "</br>");//elimina el atributo

//atributos globales
parrafo1.setAttribute("contentEditable","true"); //cotenido editable
parrafo1.setAttribute("dir","rtl");// rtl o ltr para la direccion de los elementos, se recomienda mejor en css
//parrafo1.setAttribute("hidden","false"); //se indica en el html y lo quitas el atributo hidden para aparecerlo
parrafo1.setAttribute("tabindex","0");// es para dejar un elemento en focus o seleccionado y de prioridad por el index de menor a mayor
parrafo1.setAttribute("title","que onda");// pone la frase que quieras como label cuando se pasa el cursor encima

//atributos de inputs
const input = document.querySelector(".input-normal");
document.write( "</br>"+input.className + "</br>"); //trae la class name
document.write(input.value + "</br>"); //trae el valor y puede modificarlo
input.type = "file" //trae el tipo y puedo modificarlo
input.accept = "image/gif"; // necesita atribito type file
const input2 = document.querySelector(".input-numero");
input2.minLength = "3"; //modifica la cantidad de caracteres minima que acepta tambien se puede por set attribute
input2.placeholder = "escribele puto";//
input2.required = " ";// se hace requerido el campo tan solo con un caracter