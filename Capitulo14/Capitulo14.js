/* MODO ESTRICTO (use strict)*/

//"use strict";

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

function hablar (){
    
}


/*function saludar(nombre){
    this.nombre = "Eudosio";
    this.saludar = function(){
        console.log(`Hola ${this.nombre}`)
    }
}

salu = saludar();
salu.saludar();

This solo funciona para classes y objetos*/

console.log(0o34)
//asi se escribe el numero octal con O MAYUSCULA O MINUSCULA

//eval = "hola";

//console.log(eval)
// eval no se puede usar como variable

nombre2 = "Eudosio"

function say(){
    "use strict";
    console.log(nombre2)
}

say()
// para usar variables dentro de una funcion usando use strict se tiene que declarar adentro 
// de la funcion

