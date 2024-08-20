"use strict";
//MATCH MEDIA
//solo se usa cuando no puedes usar css para adaptar el DOM a mobile
//Usos Cambiar o modificar clases, no se usa como media Queries

const mq = matchMedia("(max-width: 500px)");
const caja = document.querySelector(".caja");
console.log(mq);
console.log(mq.matches);

mq.addEventListener("change",()=>{
    if (mq.matches) { 
        caja.classList.replace("caja", "responsive-caja");
    }else if (caja.className == "responsive-caja") caja.classList.replace("responsive-caja", "caja");
})