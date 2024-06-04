let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;
let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.host;
let protocol = window.location.protocol;

comprar = confirm(`El alto es: ${alto}, el Ancho es: ${ancho}`);

let html = `Protocolo: <b>${protocol}</b></b><br>`;
html += `hostname: <b>${hostname}</b></b><br>`;
html += `pathname: <b>${pathname}</b></b><br>`;
html += `href: <b>${href}</b></b><br>`;

if (comprar){
    alert("compra realizada exitosamente");
    document.write(html);
}else{
    alert("compra cancelada");
}