/* MODO ESTRICTO (use strict)*/

"use strict";

let variable = "valor";

// para modo estrcito las variables tienen que ser declaradas con const, let, var
// si no marcan error

const obj = {};

Object.defineProperty(obj, 'nombre', {value: "Eudosio", writable: false});

//obj.nombre = "queonda";

//en javascript normal no arroja el error de reasignacion de valor cuando no se puede debido a la
//propiedad de writable, en use strict si lo hace

console.log(obj.nombre);

const obj2 = {nombre : "Eudosio"};

Object.preventExtensions(obj2);

//obj2.apellido = "Ortiz";

//en javascript normal no arroja el error de no hacer mas atributos dentro de un objeto
//con la funcion prevent extensions, en use strict si lo muestra

console.log(obj.nombre);


const str = "String";
//str.canal = "newstring";

//en javascript normal no arroja el error de intentar agregar propiedades a un string
//en use strict si lo muestra

console.log(str);

function hablar (texto){
    console.log(texto)
}

hablar("Eudosio")
// no se puede ocupar un parametro duplicado en use strict

const obj3 = {
    nombre : "lucas"
}

delete obj3.nombre
// delete se ocupa para eliminar propiedades de objetos
console.log(obj3)

// palabras reservadas no se pueden declarar

