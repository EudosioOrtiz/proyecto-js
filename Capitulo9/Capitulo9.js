/*EVents*/

const button = document.querySelector(".button");

/*button.onclick = ()=>{
    alert("hola")
}*/

/*button.addEventListener("click",saludar);

function saludar(){
    alert("hola pelao");
}/* las funciones flecha no funcionan en eventlisteners solo las normales 
ni funciones con parametros, las funciones flecha solo funcionan dentro del eventlsitener 
pero sin declarar el nombre*/

/*button.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.target)
}); /* para acceder al elemento por un eventlistener se tiene que ocupar la e seguido de cualquier propiedad */

button.addEventListener("dblclick",(e)=>{
    alert("doble click");
}); 



/*EVENT BUBBLING */
const button2 = document.querySelector(".button2");
const contenedor2 = document.querySelector(".contenedor2");

/* el evento se ejecutara en orden de especifidad del elemento */
contenedor2.addEventListener("click",(e)=>{
    alert("di click en contenedor")
    e.stopPropagation();/*con esta funcion para la propagacion de eventos*/
 },true); /*se le da true al elemento que queramos que este como prioridad */


 /*MOUSE EVENTS */
 contenedor2.addEventListener("mouseover",(e)=>{
    alert("tocando el contenedor")
 });

 contenedor2.addEventListener("mouseout",(e)=>{
    alert("saliendo del contenedor")
 });

 contenedor2.addEventListener("contextmenu",(e)=>{
    alert("click derecho del contenedor")
 });

 
 contenedor2.addEventListener("mouseenter",(e)=>{
    alert("tocando solo el contenedor")
 });

 
 contenedor2.addEventListener("mousemove",(e)=>{
    alert("moviendome en el contenedor")
 });

 
 contenedor2.addEventListener("mouseleave",(e)=>{
    alert("moviendome afuera del contenedor")
 });


 contenedor2.addEventListener("mousedown",(e)=>{
    alert("apretando el mouse en el contenedor")
 });

 
 contenedor2.addEventListener("mouseup",(e)=>{
    alert("desapretando el mouse en el contenedor")
 });


 button2.addEventListener("click",(e)=>{
    alert("di click en button")
   
 });

 /*KEY EVENTS */
 const input = document.querySelector(".input");

 input.addEventListener("keydown",(e)=>{
    console.log("una tecla fue presionada");
 });

 input.addEventListener("keypress",(e)=>{
    console.log("presionas y desprecionas un tecla");
 });

 input.addEventListener("keyup",(e)=>{
    console.log("despresionas un tecla");
 });

 /*EVENTOS DE INTERFAZ */

 const img = document.querySelector(".img");

 img.addEventListener("error",(e)=>{
    console.log("ha suscedido un error");
    /*funciona cuando una imagen o video no se cargo correctamente */
 });

 addEventListener("load",(e)=>{
    console.log("ha cargado correctamente el body");   
 });

 addEventListener("beforeunload",(e)=>{
    console.log("te estas por ir del sitio");   
 });

 addEventListener("resize",(e)=>{
    console.log("Se ah actualizado el tamano de la pagina");   
 });

 addEventListener("scroll",(e)=>{
    console.log("Se ah scrolleado la pagina");   
 });

 input.addEventListener("select",(e)=>{
    console.log("Se ah seleccionado");
    console.log(e.target.selectionStart)
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor2.innerHTML= textoCompleto.substring(start,end);   
 });

input.addEventListener("keyup",(e)=>{
    let tecla = e.key;
    nuevoContenido= `Ultima tecla: <b>${tecla}</b>`;
    contenedor2.innerHTML = nuevoContenido;   
 });

 /*https://www.w3schools.com/jsref/obj_events.asp*/


 /*TIMERS*/

 setTimeout(()=>{
    document.write("hola")
 },4000)

 /*clearTimeout(nombre del timer para finalizarlo)*/

 const intervalo = setInterval(() => {
    document.write("hola loco")
 }, 2000);

 setTimeout(()=>{
    clearInterval(intervalo)
 },4000)
 
/*clearInterval(nombre del timer para finalizarlo)*/