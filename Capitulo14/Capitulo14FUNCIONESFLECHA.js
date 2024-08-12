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

"use strict";

const objeto = {
    nombre : "Eudosio",
    saludar : ()=>{console.log(`hola ${this.nombre}`)}
}

const objeto2 = {
    nombre : "Eudosion",
    saludar : function(){console.log(`hola ${this.nombre}`)}
}

// las funciones flecha con this no existen, y this hace referencia a window, en las funciones
// normales si se pueden utilizar this para refereciar.

window.nombre = "Ortiz"

objeto.saludar()

objeto2.saludar()

function constructorPersona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

const persona = new constructorPersona("Eudosio", "Ortiz");

console.log(persona)

//this

this.nombre3= "Eudosio"

const saludar3 = function (){
    console.log(`Hola${this.nombre3}`)
}

const objeto3 = {
    nombre3: "Lucas",
    saludar3
}

function otroContexto(){
    this.nombre3="Surpio";
    this.saludar3 = saludar3;
}

objeto3.saludar3()

const objetoNew= new otroContexto();

objetoNew.saludar3()

console.log(this.nombre3)

// se tiene que usar funciones normales para this

//FUNCIONES RECURSIVAS

const validarEdad = (msg)=>{
    let edad;
    try{
        if (msg) edad = prompt(msg);
        else edad = promt("introduce tu edad");
        edad = parseInt(edad);
        if(isNaN(edad)) throw "introduce un numero para la edad";
        if(edad > 18) console.log("sos mayor de edad");
        else console.log("sos menor de edad");
    }catch(e){
        validarEdad(e)
    }
}
validarEdad();

//CLAUSULAS

const regards = (nombre)=>{
    return function(){
            console.log("hola" + nombre);
    }
}

let saludoss = regards("mojo jojo");

addEventListener("load",saludoss)

//ejemplo

const cambiarTamano = tamano =>{
    return ()=>{
        document.querySelector(".texto").style.fontSize = `${tamano}px`;
    }
   
}

px12= cambiarTamano(12);
px14= cambiarTamano(14);
px16= cambiarTamano(16);

document.querySelector("t12").addEventListener("click",px12);
document.querySelector("t14").addEventListener("click",px14);
document.querySelector("t16").addEventListener("click",px16);