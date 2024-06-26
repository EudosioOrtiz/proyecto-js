const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "fisica",
        nota: 7
    },{
        nombre: "Calculo",
        nota: 8
    },{
        nombre: "Quimica",
        nota: 6
    },{
        nombre: "Programacion",
        nota: 10
    },{
        nombre: "ingles",
        nota: 9
    },{
        nombre: "algoritmos",
        nota: 4
    }
];

const obtenerMateria = (id)=>{
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if(materia == undefined) reject("la materia no existe");
        else setTimeout(()=>{resolve(materia)}, Math.random()*2000);
    })
}

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode= `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();