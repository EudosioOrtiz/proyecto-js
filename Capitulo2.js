frutarrays= ["banana","manzana","pera","melon"];
frutarrays[1]// index array


let PC = {
    nombre: "DaltoPC",
    procesador: "Intel Core I7",
    ram: "16gb",
    espacio: "1TB"
}

PC["procesador"] //index diccionario

let nombre = PC["nombre"];
let procesador = PC['procesador'];
let ram = PC["ram"];
let espacio = PC["espacio"];

frasePC= `Mi PC es: <b>${nombre}</b> <br>
          el procesador es: <b>${procesador}</b> <br>
          la memoria ram es: <b>${ram}</b> <br>
          el espacio en disco es de <b>${espacio}</b> <br>
`

document.write(frasePC,frutarrays[1], PC["procesador"]);

