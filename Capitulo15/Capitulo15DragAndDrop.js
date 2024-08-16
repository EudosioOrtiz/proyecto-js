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

//geolocalizacion

const geolocation = navigator.geolocation;
console.log(geolocation)

const posicion = (pos)=>{
    console.log(pos.coords)
}

const err =()=> console.log(e);

const options = {
    maximumAge : 0,
    timeout:2000,
    enableHightAccuracy:true
}

geolocation.getCurrentPosition(posicion,err,options);

//watchPosition muestra la posicion en tiempo real

//HISTORIAL

console.log(history);
//history.back(); //vuelve atras en la pagina
//history.forward(); //va hacia adelante en la pagina
//history.go(1); // va al sitio indicado con un numero relativo
//history.pushState(); //modifica la URL y conserva la info del historial
//history.replaceState(); // modifica la URL y no la conserva

console.log(location.href)
//history.pushState({nombre:"eudosio"},"","?wola")
//history.replaceState({nombre:"eudosio"},"","?wola")

addEventListener("popstate",(e)=>{
    console.log(e.state);
})

//el pushState te permite conservar e historial de esa pagina para asi poder regresar sin problema


//FILEREADER

//Documentos de texto
const archivo = document.getElementById('archivo');
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files)// .files da un array con de los archivos
})


const leerArchivo = ar =>{

    for (let i = 0; i < ar.length; i++) {
        const reader = new FileReader();
        console.log(reader);
        reader.readAsText(ar[i]); // se ocupa para leer archivos ingresados
        reader.addEventListener("load",(e)=>{
        console.log(e)
        console.log(e.currentTarget.result)
        console.log(JSON.parse(e.currentTarget.result))
    })
    }
}

//imagenesto
const archivo2 = document.getElementById('archivo2');
archivo2.addEventListener("change",(e)=>{
    leerArchivo2(archivo2.files)// .files da un array con de los archivos
})

const leerArchivo2 = ar =>{

    for (let i = 0; i < ar.length; i++) {
        const reader = new FileReader();
        console.log(reader);
        reader.readAsDataURL(ar[i]); // se ocupa para leer archivos ingresados
        reader.addEventListener("load",(e)=>{
        console.log(e)
        let newImg = `<img src='${e.currentTarget.result}'>`
        document.querySelector(".resultado").innerHTML += newImg
    })
    }
}
