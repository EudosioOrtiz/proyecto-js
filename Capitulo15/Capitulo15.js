"use strict";
//Objeto DATE

const fecha = new Date(); //date es un constructor por lo tanto es un objeto con funciones y propiedades
// Date recibe como parametro el unix time que es el tiempo en milisegundos transcurridos
// de 1 january 1970 hasta hoy
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())
console.log(Date.now()); //retorna el tiempo transcurrido en milisegundos

const addZeros = n =>{
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;

}
actualizarHora();
setInterval(actualizarHora,1000);

/*LOCALSTORAGE x
localStorage.setItem("nombre","Eudosio");
console.log(localStorage);
let nombre = localStorage.getItem("nombre");
console.log(nombre)
//SESSIONSTORAGE
sessionStorage.setItem("nombre","Eudosiox");
console.log(sessionStorage);
let nombre2 = sessionStorage.getItem("nombre");
console.log(nombre2)

setTimeout(()=>{
    sessionStorage.removeItem("nombre")
},3000);

//tambien se puede opcupar clear() para los dos sessions*/

//ejemplo
const modal = document.querySelector(".modal-overlay");

const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarModal();
    })

    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","es");
        cerrarModal();
    })
}

const cerrarModal = ()=>{
    
    modal.style.animation = "desaparecer 1s forwrds";
    setTimeout(()=>modal.style.display = "none",1000)
}

const idioma = localStorage.getItem("idioma");

if(idioma === null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`)
    modal.style.display= "none";
}