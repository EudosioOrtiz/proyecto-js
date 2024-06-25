//CALLBACKS
//los callbacks son funciones que llaman a otras funciones dandole
// el valor del callback a la otra funcion
/*function prueba (callback){
    callback("Eudosio");
}

function decirNombre (nombre){
    console.log(nombre);
}

//diferentes formas de llamar la funcion
//prueba(decirNombre);

/*prueba((nombre)=>{
    console.log(nombre)
})

prueba(nombre => console.log(nombre))

class Persona {
    constructor(nombre,instagram, edad){
        this.nombre = nombre;
        this.instagram = instagram;
        this.edad = edad;
    }
}

const data =[
    ["Eudosio Ortiz",,23],
    ["Omar Aguilar","@omarguilar",28],
    ["Daniel de leon","@danileon",22],
    ["Diego castillo","@diegocast",25]
];

const personas = [];

 for (let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0],data[i][1],data[i][2]);
 }

const obtenerPersona = (id, cb)=>{
    if (personas[id] == undefined){
        cb("No se ha encontrado la persona");
    } else {
        cb(null, personas[id],id);
    }
};

const obtenerNombre = (id, cb)=>{
    if (personas[id] == undefined){
        cb("No se ha encontrado el Nombre");
    } else {
        cb(null, personas[id].nombre);
    }
};


const obtenerInstagram = (id, cb)=>{
    if (personas[id].instagram == undefined){
        cb("No se ha encontrado el instagram");
    } else {
        cb(null, personas[id].instagram);
    }
};

const obtenerEdad = (id, cb)=>{
    if (personas[id] == undefined){
        cb("No se ha encontrado la edad");
    } else {
        cb(null, personas[id].edad);
    }
};


obtenerPersona(2,(err,persona,id)=>{
    if (err)console.log(err);
    else {
        console.log(persona.nombre);
        obtenerInstagram(id,(err,instagram)=>{
            if(err)console.log(err);
            else console.log(instagram);
        })
    }
});*/


//PROMESAS

/*
let nombre = "Eudosdfgio";

const promesa = new Promise((resolve, reject) => {
    if (nombre !== "Eudosio") reject("Lo siento no eres eudosio");
    else resolve(nombre)
})

promesa.then((resultado)=>{
    console.log(resultado)
}).catch((e)=>{
    console.log(e)
})
*/
//Primer callback cambiado a promesas

class Persona {
    constructor(nombre,instagram, edad){
        this.nombre = nombre;
        this.instagram = instagram;
        this.edad = edad;
    }
}

const data =[
    ["Eudosio Ortiz","@eudosio.ortiz",23],
    ["Omar Aguilar","@omarguilar",28],
    ["Daniel de leon","@danileon",22],
    ["Diego castillo","@diegocast",25]
];

const personas = [];

 for (let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0],data[i][1],data[i][2]);
 }

const obtenerPersona = (id)=>{
    return new Promise((resolve, reject) => {
        if(personas[id]== undefined) reject("No se ah encontrado la persona");
        else {resolve(personas[id])}
    })
};

const obtenerNombre = (id, cb)=>{
    return new Promise((resolve, reject) => {
        if (personas[id].nombre == undefined) reject("No se ha encontrado el nombre")
        else {resolve(personas[id].nombre)}
    })
};


const obtenerInstagram = (id)=>{
    return new Promise((resolve, reject) => {
        if (personas[id].instagram == undefined) reject("No se ha encontrado el instagram")
        else {resolve(personas[id].instagram)}
    })
};

const obtenerEdad = (id)=>{
    return new Promise((resolve, reject) => {
        if (personas[id].edad == undefined) reject("No se ha encontrado la edad")
        else {resolve(personas[id].edad)}
    })
};

let id = 0
obtenerPersona(id).then((persona)=>{
    console.log("Tu persona se ah encontrado");

    obtenerNombre(id).then((nombre)=>{
        console.log("Su nombre es: " +nombre)
    }).catch((e)=>{
        console.log(e)
    });

    obtenerInstagram(id).then((instagram)=>{
        console.log("Su instagram es: " + instagram)
    }).catch((e)=>{
        console.log(e)
    });

    obtenerEdad(id).then((edad)=>{
        console.log("Su edad es: " + edad)
    }).catch((e)=>{
        console.log(e)
    });


}).catch((e)=>{
    console.log(e)
});