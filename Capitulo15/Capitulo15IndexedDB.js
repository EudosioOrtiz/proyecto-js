"use strict";

//indexedDB bases de datos Nosql, creacion de la base de datos

const IDBRequestE = indexedDB.open("eudosiobase",1);
console.log(IDBRequest);

IDBRequestE.addEventListener("upgradeneeded",()=>{
    console.log("se creo correctamente");
    const db = IDBRequestE.result; //El resultado del request inicial (indexedDB.open) es la base de datos
    db.createObjectStore("nombres",{
        autoIncrement: true,
    }) //creacion almacen de objetos
})

//notificacion de base de datos sucess
IDBRequestE.addEventListener("success",()=>{
    console.log("todo salio correctamente");
    readObjetos();
})

//notificacion de base de datos error
IDBRequestE.addEventListener("error",()=>{
    console.log("Error en abrir la base de datos");
})

document.getElementById('add').addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value;
    if (nombre.length > 0 ){
        if (document.querySelector(".posible") != undefined) {
            if (confirm("Hay elementos sin guardar: Quieres continuar?")){
                addObjetos({nombre});
                readObjetos();
            }
        } else {
            addObjetos({nombre});
            readObjetos();
        }
    }
})

const addObjetos = objeto =>{
    const IDBData = getIDBData("readwrite","objeto agregado correctamente");
    IDBData.add(objeto);
    
}

const readObjetos = ()=>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success",()=>{
        if (cursor.result) {
            let elemento = nombresHTML(cursor.result.key,cursor.result.value)
            fragment.appendChild(elemento)
            cursor.result.continue();
        } else document.querySelector(".nombres").appendChild(fragment)       
    })
}

const modifyObjetos = (key,objeto)=>{
    const IDBData = getIDBData("readwrite","objeto modificado correctamente");
    IDBData.put(objeto,key); // el metodo put si no existe el objeto lo crea y si si lo modifica
}

const deleteObjetos = (key)=>{
    const IDBData = getIDBData("readwrite","objeto se ha eliminado correctamente");
    IDBData.delete(key); // metodo para eliminar datos  
}

const getIDBData = (mode,msg)=>{
    const db = IDBRequestE.result;
    const IDBtransaction = db.transaction("nombres",mode); // operacion para el almacen de objetos
    //en modo readonly o read and write(readwrite)
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete",()=>{
        console.log(msg)
     })
    return objectStore;
}

const nombresHTML = (id,name)=>{
    const container = document.createElement("div");
    const h2 = document.createElement("h2");
    const options = document.createElement("div");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";
    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spellcheck","false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup",()=>{
        saveButton.classList.replace("imposible","posible")
    })

    saveButton.addEventListener("click", ()=>{
        if (saveButton.className == "posible") {
            modifyObjetos(id,{nombre: h2.textContent});
            saveButton.classList.replace("posible","imposible")
        }
    })

    deleteButton.addEventListener("click",()=>{
        deleteObjetos(id);
        document.querySelector(".nombres").removeChild(container)
    })

    return container
}
