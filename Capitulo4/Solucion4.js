// solucion 1 
/*class Calculadora{
    constructor(){}

sumar (num1,num2){
    return parseFloat(num1) + parseFloat(num2);
}
restar(num1,num2){
    return parseFloat(num1) - parseFloat(num2);
}
dividir(num1,num2){
    return parseFloat(num1) / parseFloat(num2);
}
multiplicar(num1,num2){
    return parseFloat(num1) * parseFloat(num2);
}
potenciar(num,exp){
    return num**exp;
}
raizcuadrada(num){
    return Math.sqrt(num);
}
raizcubica(num){
    return Math.cbrt(num);
}

}

const calculadora =  new Calculadora();

alert("que operacion deseas realizar?");
let operacion = prompt("1: suma, 2:resta, 3: division, 4: multiplicacion, 5: potencia,  6: raiz cuadrada,  7: raiz cubica" );

if(operacion == 1){
    let numero1 =prompt("primer numero para sumar");
    let numero2 =prompt("primer segundo para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}else if(operacion == 2){
    let numero1 =prompt("primer numero para restar");
    let numero2 =prompt("primer segundo para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}else if(operacion == 3){
    let numero1 =prompt("primer numero para dividir");
    let numero2 =prompt("primer segundo para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}else if(operacion == 4){
    let numero1 =prompt("primer numero para multiplicar");
    let numero2 =prompt("primer segundo para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}else if(operacion == 5){
    let numero1 =prompt("numero a potenciar");
    let numero2 =prompt("potencia");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}else if(operacion == 6){
    let numero1 =prompt("numero sacar raiz cuadrada");
    resultado = calculadora.raizcuadrada(numero1);
    alert(`tu resultado es: ${resultado}`);
}else if(operacion == 7){
    let numero1 =prompt("numero sacar raiz cubica");   
    resultado = calculadora.raizcubica(numero1);
    alert(`tu resultado es: ${resultado}`);
} */

// Solucion 2

const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Hernandez","pedro","carlos","yarif", "sofia"],
        programacion:["Ortiz","Eudosio", "Daniel" , "omar", "ricardo"],
        logica: ["Gutierres","omaida", "carlos" , "ronaldo", "Eudosio"],
        quimica:["Mascabado","rubi", "carlos","stephy","Asael"],
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
    if(informacion !== false){
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`Alumnos presentes en <b>${informacion[1]}</b>: <b style= "color:gray">${profesor}</b><br>
        Los alumnos son: <b style = "color: blue"> ${alumnos}</b><br><br>`);
    }
}

const cantidadClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal= 0;
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+info);
        }
    }
    return `<b style="color: blue">${alumno}</b> 
    esta en <b>${cantidadTotal} clases</b><br>
    cursando las materias de: <b style="color: green">${clasesPresentes}</b><br><br>
    `;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadClases("Eudosio"));
document.write(cantidadClases("carlos"));

//solucion 3

materias = {
    fisica: ["Hernandez","pedro","carlos"],
    programacion:["Ortiz","Eudosio", "Daniel" , "omar", "ricardo"],
    logica: ["Gutierres","omaida", "carlos" , "ronaldo", "Eudosio"],
    quimica:["Mascabado","rubi", "carlos","stephy","Asael"],
}

const inscribir=(alumno, materia)=>{
    //let informacion = obtenerInformacion(materia);
    personas = materias[materia];    
    if (personas.length >= 6){
        document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br>`);
    }else {
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion:materias["programacion"],
                logica: materias["logica"],
                quimica:materias["quimica"],
            }
        }else if(materia == "programacion"){
            materias = {
                fisica: materias["fisica"],
                programacion:personas,
                logica: materias["logica"],
                quimica:materias["quimica"],
            }
        }else if(materia == "logica"){
            materias = {
                fisica: materias["logica"],
                programacion:materias["programacion"],
                logica:  personas,
                quimica:materias["quimica"],
            }
        }else if(materia == "quimica"){
            materias = {
                fisica: materias["quimica"],
                programacion:materias["programacion"],
                logica: materias["logica"],
                quimica: personas,
            }
        }
        document.write(`Felicidades ${alumno} te has incrito a la materia de ${materia}<br>`)
    }
}
document.write(materias["fisica"] +"<br>");

inscribir("juancho","fisica");
inscribir("ramses","fisica");
inscribir("juan","fisica");
inscribir("segoviano","fisica");
inscribir("tutiano","fisica");
inscribir("colosio","fisica");

document.write("<br>"+materias["fisica"] +"<br>");