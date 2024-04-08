//Consola

console.log("hola");

// comando en consola
//funciones de registro
console.clear();//limpiar consola
console.error("error");// mensaje de error
console.info("muy bien");//mensaje informativo
console.table([1,5,7,9,11]);//creacion de tabla con array
console.warn("cuidado");//mensaje de advertencia
console.dir([1,5,7,9,11]);//muestra una lista de forma interactiva de algun objeto
//funciones de conteo
console.count();// hace un conteo
console.count();
console.countReset();// resetea el conteo
console.count();
//funciones de agrupacion
console.group("Conteo");// para crear grupos abiertos
console.groupCollapsed();//crear grupos cerrados
console.groupEnd();//cerrar grupo
//funciones de tiempo
console.time();// inicia contador
console.timeLog();// muestra el contador en curso
console.timeStamp();
console.timeEnd();// termina el contador y lo muestra

console.log("%cprueba", "color:#fff;background:black; padding:20px 100px; border 3px solid blue;")