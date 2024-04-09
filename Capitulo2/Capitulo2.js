


//Bucles

let numero = 0;

while (numero < 1000) {
    numero++;
    document.write(numero + "<br>");
    if(numero == 10){
        break; // break es importante para parar bucles y ahorrar recursos
    }
}

document.write("<br>")

// do while primero hace y luego pregunta
 do{
    document.write(numero + "<br>")
    numero++;
 }
 while (numero < 11)

document.write("<br>")

// en for se puede inicializar afuera para ocupar el numero de iteracion afuera
 for (let i= 0; i<20; i++) {
    
    if (i ==12){
        continue; // termina la iteracion en curso pero no sale del ciclo
    }

    document.write(i + "<br>")
 }

document.write("<br>")


 
 let Rzrs = ["Rzr chico","Rzr mediano","Rzr grande"];
 // for in retorna la iteracion en la variable de acuerdo array
 for( rzr in Rzrs) {
    document.write(rzr + "<br>")
 }

 document.write("<br>")

// for of retorna el valor en la variable de acuerdo array y la iteracion
 for( rzr of Rzrs) {
    document.write(rzr + "<br>")
 }

 document.write("<br>")

 array1 = ["eudosio", "omar", "sofi"];
 array2 = ["omaida", "dani", array1, "nayeli"];

 forted: //label con el si lo ocupas en un break o continue puede ejecutar esas funciones en todo lo que lleva el label adentro
 for (let array in array2){
    if (array ==2){
        for (let array of array1){
            continue forted;
            document.write(array,"<br>");            
        }        
    }else{
        document.write(array2[array],"<br>")
        
    }
 }

document.write("<br>")

//funciones

function saludar() {
    respuesta = prompt("Cuando es el pal norte?");
    if (respuesta == "Viernes"){
        alert("que chido")
        return "que saquen las heladas"
    }else{
        alert("Ya mero")
        return "a descansar" // return expondra el valor que queramos de la funcion
    }
}

//otra forma de declarar funcion
const saludar2 = function() {
    respuesta = prompt("Cuando es el pal norte?");
    if (respuesta == "Viernes"){
        alert("que chido")
    }else{
        alert("Ya mero")

    }
}

let saludo = saludar();
document.write(saludo)

document.write("<br>")


function suma(num1, num2){
    let res= num1 + num2; // es importante declarar let debido a que si no se combierte en var la variable y trae problemas
    return res;
}
let sumas = suma(10,50);
document.write(sumas)

//funciones flecha

const saludar3 = (nombre)=> {
    respuesta = prompt("Cuando es el pal norte?");
    if (respuesta == "Viernes"){
        alert("que chido")
    }else{
        alert("Ya mero")

    }
}

