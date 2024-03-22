dineroCofla = prompt("Cuanto dinero tiene cofla?");
dineroRoberto = prompt("Cuanto dinero tiene Roberto?");
dineroPedro = prompt("Cuanto dinero tiene Pedro?");

if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("comprate el helado de agua")
}
else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("comprate el helado de crema")
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("comprate el helado de heladix")
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("comprate el helado de heladovich")
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("comprate el helado de helardo")
}
else if(dineroCofla >= 2.9){
    alert("comprate el helado de 1/4 KG ")
}else{
    alert("pobre")
}

if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("comprate el helado de agua")
}
else if(dineroRoberto >= 1 && dineroRoberto< 1.6){
    alert("comprate el helado de crema")
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("comprate el helado de heladix")
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("comprate el helado de heladovich")
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("comprate el helado de helardo")
}
else if(dineroRoberto >= 2.9){
    alert("comprate el helado de 1/4 KG ")
}else{
    alert("pobre")
}

if(dineroPedro >= 0.6 && dineroPedro< 1){
    alert("comprate el helado de agua")
}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("comprate el helado de crema")
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("comprate el helado de heladix")
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("comprate el helado de heladovich")
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("comprate el helado de helardo")
}
else if(dineroPedro >= 2.9){
    alert("comprate el helado de 1/4 KG ")
}else{
    alert("pobre")
}

// best way to solve the first solution 
"use strict";
const definirCompra = (n)=>{
    let din = prompt(`Dinero de $(n)`)
    if (din >= 0.6 && din < 1) return (`${n}: helado de agua`);
    if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
    if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`);
    if (din >= 1.7 && din < 1.8) return (`${n}: helado de heladovich`);
    if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`);
    if (din >= 2.9) return (`${n}: helado de 1/4 kg`);
    else return (`${n}: no te alcanza para nada`);
}
console.log(definirCompra("Cofla"))
console.log(definirCompra("Pedro"))
console.log(definirCompra("Roberto"))
