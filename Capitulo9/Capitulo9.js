const button = document.querySelector(".button");

/*button.onclick = ()=>{
    alert("hola")
}*/

button.addEventListener("click",saludar);

function saludar(){
    alert("hola pelao");
}/* las funciones flecha no funcionan en eventlisteners solo las normales 
ni funciones con parametros, las funciones flecha solo funcionan dentro del eventlsitener 
pero sin declarar el nombre*/

button.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.target)
}); /* para acceder al elemento por un eventlistener se tiene que ocupar la e seguido de cualquier propiedad */