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
document.write(rangoEtario.getAttribute("type")+ "</br>");//obtiene el atributo del elemento
document.write(rangoEtario.removeAttribute("type")+ "</br>");//elimina el atributo del elemento

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

const titulo = document.querySelector(".titulo");
// modificacion de varios tipos de estilos de un elemento
titulo.style.color= "blue";
titulo.style.backgroundColor= "#48e";
titulo.style.padding= "10px";
titulo.classList.add("grande"); // añade mas texto a la clase del elemento y la modifica
titulo.classList.remove("grande"); // remueve el texto a la clase del elemento y la modifica
titulo.classList.item(1); // retorna la clase index deacuerdo a la cantidad de clases cargadas en un elemento
titulo.classList.contains("grande"); // retorna un valor booleano decuardo a si encuentra el nombre de la clase o no en el elemento
titulo.classList.toggle("grande"); // en caso de que tenga la clase la remueve y si no la agrega, agregar true la funcion si siempre queremos que la agregue y false si siempre la elimine
titulo.classList.replace("grnade","chico");// reemplaza unaclase del elemento

let contenido = titulo.textContent; // retorna todo el valor de cualquier elemento sin atributos
contenido = titulo.innerHTML; // retorna solo el valor visible de cualquier elemento con atributos
contenido = titulo.outerHTML; // retorna solo el valor visible de cualquier elemento con atributos completos

document.write(contenido);

const contenedor = document.querySelector(".contenedor");
//const item = document.createElement("LI");//crea un elemento en el documento html
//const textItem = document.createTextNode("aqui aprendiendo");//crea un nodo texto en el documento
//item.innerHTML = textItem; // añade el nodo al elemento pero sin darle el valor todavia
//item.innerHTML = "aqui aprendiendo"; // tamien da el valro al elemento
//item.appendChild(textItem);
//contenedor.appendChild(item);
//console.log(item);
//cada que quiero agregar un elemento se tiene que crear debido a que es unico
// se sugiere utlizar create document fragment debido a que consume menos recursos a la hora de la creacion

const fragmento = document.createDocumentFragment();

for (i = 0; i<10; i++){
    const item = document.createElement("LI");
    item.innerHTML = "aqui aprendiendo";
    fragmento.appendChild(item);
}

//contenedor.appendChild(fragmento);

// padres e hijos
//obtencion y modificacion de hijos
console.log(contenedor.firstChild);//nos extrae el primer hijo del contenedor tambien trae espacios
console.log(contenedor.lastChild);//nos extrae el ultimo hijo del contenedor tambien trae espacios
console.log(contenedor.firstElementChild);//nos extrae el primer hijo dandonos el primer elemento
console.log(contenedor.lastElementChild);//nos extrae el ultimo hijo dandonos el ultimo elemento

const hijos = contenedor.childNodes; //extrae la lista de los elementos(node list) incluyendo espacios
console.log(hijos);
hijos.forEach(hijo => console.log(hijo));// se puede recorrer y extraer datos de lista pero no se pueden trabajar como array

const hijos2 = contenedor.children; //extrae la lista de los elementos(node list) excluyendo espacios solo elementos y es un html collection
console.log(hijos2);
for(hijo of hijos2){
    console.log(hijo);
} // se puede recorrer con un for in o for of y extraer datos de lista pero no se pueden trabajar como array

//metodos de childs

const parrafochild =  document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2titulo");
//contenedor.replaceChild(h2_nuevo,h2_antiguo); // reemplaza el hijo indicado por el hijo nuevo del padre osea el contenedor
//contenedor.removeChild(h2_antiguo);// remueve el hijo indicado del padre indicado
contenedor.hasChildNodes();// retorna valor booleano indicando si tiene hijos o no, toma en cuenta elementos y epsacios adentro del elemento

//propierdades de parents
console.log(h2_antiguo.parentElement);// retorna el padre del elemento
console.log(h2_antiguo.parentNode);// retorna el padre del elemento

//propierdades de siblings (hermnanos)
h4 = document.querySelector(".h4");
console.log(h4.nextSibling);// extrae el hermano siguiente del elemento incluyendo espacios y texto
console.log(h4.previousSibling); //extrae el hermano anterior del elemento incluyendo espacios y texto
console.log(h4.nextElementSibling); //extrae el hermano anterior del elemento incluyendo espacios y texto
console.log(h4.previousElementSibling); //extrae el hermano anterior del elemento incluyendo espacios y texto
console.log(h4.closest(".contenedor")); // extrae el elemento ascendente mas cercano con el identificador dado