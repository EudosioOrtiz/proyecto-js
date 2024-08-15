"use strict";

const circulo = document.querySelector(".circulo")
const rectangulo = document.querySelector(".rectangulo")

circulo.addEventListener("dragstart", (e)=>{
    e.dataTransfer.setData("clase", e.target.className)
    console.log(e.dataTransfer.getData("clase"))
});
circulo.addEventListener("drag", ()=> console.log(2));
circulo.addEventListener("dragend", ()=> console.log(3));


rectangulo.addEventListener("dragenter",()=>console.log(1))
rectangulo.addEventListener("dragover",(e)=>{
    e.preventDefault();
    console.log(2)
})
rectangulo.addEventListener("drop",(e)=>{
    console.log(e.dataTransfer.getData("clase"))
    console.log(3)
})
rectangulo.addEventListener("dragleave",()=>console.log(4))

//ejemplo

const zona = document.querySelector(".zona");
zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("textu${n}.jpg")`
})

for (let i = 1; i < document.querySelector(".texturas").children.length + 1 ; i++) {    
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>trasnferirTextura(i,e))    
}

const trasnferirTextura = (n,e) =>{
    e.dataTransfer.setData("textura",n);
}