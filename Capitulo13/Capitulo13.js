//JSON-s
const objeto1 = {"data1": "dato1","dato2": "dato2"}; //JSON deselearizado
const objeto2 = '{"data1": "dato1","dato2": "dato2"}'; /*JSON selearizado un json de 
este tipo puede ser enviado en la web y tiene que ser selearizado cuando
mandamos datos*/

const serializado = JSON.stringify(objeto1);
const deserializado = JSON.parse(objeto2);

console.log(typeof objeto1);
console.log(typeof serializado);

console.log(typeof objeto2);
console.log(typeof deserializado);

// revisar que es JSON polifill, es adaptar json a navegadores antiguos
//la informacion esta en mozilla developer


//AJAX