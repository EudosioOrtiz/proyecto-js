//FUNCIONES FLECHA

//Funciones flecha normales
const saludar = ()=>{
    console.log("hola");
    console.log("como estas?")
}

saludar();

//Funciones flecha para retornar valores
const saludar2 = (res)=> nombre = res;

resultado = saludar2("Hola Eudosio");

console.log(resultado);

//Si solo hay una expresion la retornan
//el parentesis es opcionalcuando se tiene un parametro, si no tiene es obligatorio
// no son adecuadas para ser usadas como metodos y no pueden ser usadas como constructores

const objeto = {
    nombre : "Eudosio",
    saludar : ()=>{console}
}