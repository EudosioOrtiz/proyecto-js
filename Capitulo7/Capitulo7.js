//window es la ventana del navegador
// hereda las propiedades de EventTarget

let URL = "https://youtube.com";
//let ventana = window.open(URL);//abre el url indicado
//ventana.close();// cierra la ventana indicada
//ventana.closed;// retorna un boleano de si la ventana se encuentra abierta o no
//ventana.stop();// para la carga de la pagina
//ventana.alert("Cuidao"); //es igual a la funcion alert
//ventana.print();// te imprime la ventana en curso 
//ventana.prompt("dame un string")//funciona igual que el promt pero para la ventana
//ventana.confirm("te queires ir?");// hace una pregunta en la ventana y de retorna un boleano

//Screen y Scroll

const screen = window.screen; //acceda a la pantalla
const screenLeft = window.screenLeft; //muestra el espacio entre la ventana y la pantalla de la izquierda
const screenTop = window.screenTop;  //muestra el espacio entre la ventana y la pantalla del top
console.log(screen)

document.write(`Screen: <b>${screen.availWidth}</b> <br>
                Left: <b>${screenLeft}</b> <br>
                Top: <b>${screenTop}</b>  <br>`)

const scrollY = window.scrollY;//obtiene los pixeles en Y a base la posicion del scroll
const scrollX = window.scrollX;// obtiene los pixeles en x a base la posicion del scroll

window.alert(`X: ${scrollX} , Y: ${scrollY} `)

window.scroll(400, 0) // posiciona el scroll en la coordenadas indicadas

/*window tiene los siguiente elementos
resizeBy cambia el tamaño actual en una cantidad espesifica
resizeto redimensiona dinamicamente la ventana
moveBy mueve la ventana en una ubicacion relativa
moveto mueve la ventana en una ubicacion absoluta

los siguientes metodos arrojan un booleano de si estan activos o no
locationbar
menubar
personalbar
scrollbar
statusbar
toolbar
*/

//Location

const href = window.location.href; //devuelve el URL de la pagina actual
document.write(`${href}<br>`)
const host = window.location.host; // duvuelve el nombre dle dominio del servidor web
document.write(`${host}<br>`)
const pathname = window.location.pathname; // devuelve la ruta y el nombre del archivo de la pagina
document.write(`${pathname}<br>`)
const protocol = window.location.protocol; // devuelve el protocolo web utilizando http o https
document.write(`${protocol}<br>`)
//const assign = window.location.assign(); asigna un documento
//document.write(`${assign}<br>`)