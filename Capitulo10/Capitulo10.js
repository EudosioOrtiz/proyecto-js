let nombre = "jorge";

/*SETENCIAS DE BLOQUE */

{
    let nombre = "pedro";
    alert(nombre);
    {
        let nombre = "juan";
        alert(nombre);  
    }
}

/*SETENCIAS DE CONTROL DE FLUJO */
if (3 > 2){
    let nombre = "juan2";
        alert(nombre); 
}

let fruta = "referf";

switch(fruta){

    case "Banana":
        console.log("esta fruta es una Banana");
        break;
    case "Pera":
        console.log("esta fruta es una Pera");
        break;
    case "Manzana":
        console.log("esta fruta es una Manzana");
        break;
    default:
        console.log("no es ninguna")
}

/*SETENCIAS DE MANEJO DE EXCEPCIONES */

/*Excepciones ECMAScript */
/*DOMException y DOMError */

try { /*try se ocupa para ocaciones especiales donde podra habra errores aunque depures el codigo*/
    throw["eudosio", "juan"] /*throw es la informacion que le queramos pasar al catch*/
} catch (error) {
    console.log(error[0])
}/* try catch no cacha errores de syntaxis si no de ejecucion*/
/* al catch tambien se le pueden ponen condiocionales para el error */
finally{
    console.log("que onda master")
}