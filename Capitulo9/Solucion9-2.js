alumnos = [{
    nombre: "Eudosio Ortiz",
    email: "eudo@gmail.com",
    materia: "Programacion"
},{
    nombre: "Eudosio Ortiz",
    email: "eudo@gmail.com",
    materia: "Programacion"
},{
    nombre: "Eudosio Ortiz",
    email: "eudo@gmail.com",
    materia: "Programacion"
},{
    nombre: "Eudosio Ortiz",
    email: "eudo@gmail.com",
    materia: "Programacion"
},{
    nombre: "Eudosio Ortiz",
    email: "eudo@gmail.com",
    materia: "Programacion"
},{
    nombre: "Eudosio Ortiz",
    email: "eudo@gmail.com",
    materia: "Programacion"
}]

const boton = document.querySelector(".boton-confirmar")
const contenedor = document.querySelector(".grid-container")
let htmlCode = "";

for (alumno in alumnos){
    let datos =alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;    
}

contenedor.innerHTML = htmlCode

boton.addEventListener("click",()=>{
    let confirmar = confirm("realmente quieres confirmar las mesas?")
    if (confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value
        }
    }
})