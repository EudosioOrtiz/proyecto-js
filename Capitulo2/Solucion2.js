//Problema 1

let free = false;
const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad")
    if(edad >18){    
        if (time>=2 && time < 7 && free == false){
            alert("puedes pasar gratis");
            free = true;
        }else{
            alert(`son las ${time}hs puedes pasar pero tienes que pagar la entrada`)
        }
    }else{
        alert("eres menor de edad")
    }    
}

validarCliente(5);
validarCliente(5);
validarCliente(8);

//problema2

let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

for(i =0; i < cantidad; i++){
    alumnosTotales[i]= [prompt("Nombre del alumno" + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________presentes: ${alumnosTotales[alumno][1]} <br>
    ________Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;

    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style =>'color:red'>  Reprobado por Inascistencias  </b><br><br>"
    }else{
        resultado+= "<br><br>"
    }
    document.write(resultado);
}

//problema 3
const sumar = (num1,num2)=>{
    return parseFloat(num1) + parseFloat(num2);
}
const restar = (num1,num2)=>{
    return parseFloat(num1) - parseFloat(num2);
}
const dividir = (num1,num2)=>{
    return parseFloat(num1) / parseFloat(num2);
}
const multiplicar = (num1,num2)=>{
    return parseFloat(num1) * parseFloat(num2);
}
alert("que operacion deseas realizar?");
let operacion = prompt("1: suma, 2:resta, 3: division, 4: multiplicacion" );

if(operacion == 1){
    let numero1 =prompt("primer numero para sumar");
    let numero2 =prompt("primer segundo para sumar");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}else if(operacion == 2){
    let numero1 =prompt("primer numero para restar");
    let numero2 =prompt("primer segundo para restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}else if(operacion == 3){
    let numero1 =prompt("primer numero para dividir");
    let numero2 =prompt("primer segundo para dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}else if(operacion == 4){
    let numero1 =prompt("primer numero para multiplicar");
    let numero2 =prompt("primer segundo para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}