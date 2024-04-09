const contenedor = document.querySelector(".flex-container");


function crearLlave(nombre, modelo, precio){
    img = "<img src='llave.png' class='llave-img'>";
    nombre = `<h2>${nombre}<h2>`;
    modelo = `<h3 id= '${modelo}'>${modelo}<h3>`;
    precio = `<p>Precio: <b>$${precio}</b><p>`;
    return [img,nombre,modelo,precio];
}

//const llave = crearLlave("Llave1","modelo x","66");
//contenedor.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];

//document.write(llave[0],llave[1],llave[2])

let documentFragment = document.createDocumentFragment();

for (var i=1; i<=20; i++){
    let modelorandom = Math.round(Math.random()*10000);
    let preciorandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`,`modelo ${modelorandom}`,`${preciorandom}`);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modelorandom;
    });
    div.tabIndex=i;
    div.classList.add(`item-${i}`, 'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
    
}
contenedor.appendChild(documentFragment);