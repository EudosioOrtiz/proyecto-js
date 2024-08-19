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
})

//notificacion de base de datos error
IDBRequestE.addEventListener("error",()=>{
    console.log("Error en abrir la base de datos");
})

const addObjetos = objeto =>{
    const IDBData = getIDBData("readwrite");
    IDBData[0].add(objeto);
    IDBData[1].addEventListener("complete",()=>{
        console.log("objeto agregado correctamente")
    })
}

const readObjetos = ()=>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData[0].openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result) {
            console.log(cursor.result.value);
            cursor.result.continue();
        } else console.log("todos los datos fueron leidos")       
    })
}

const modifyObjetos = (key,objeto)=>{
    const IDBData = getIDBData("readwrite");
    IDBData[0].put(objeto,key); // el metodo put si no existe el objeto lo crea y si si lo modifica
    IDBData[1].addEventListener("complete",()=>{
       console.log("objeto modificado correctamente")
    })
}

const deleteObjetos = (key)=>{
    const IDBData = getIDBData("readwrite");
    IDBData[0].delete(key); // metodo para eliminar datos
    IDBData[1].addEventListener("complete",()=>{
       console.log("objeto se ha eliminado correctamente")
    })
}

const getIDBData = (mode)=>{
    const db = IDBRequestE.result;
    const IDBtransaction = db.transaction("nombres",mode); // operacion para el almacen de objetos
    //en modo readonly o read and write(readwrite)
    const objectStore = IDBtransaction.objectStore("nombres");
    return [objectStore,IDBtransaction];
}