// solucion 1

let materias = {
    fisica: [90,6,4,"fisica"],
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}

const aprobar =()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);            
        if (asistencias >= 90){
            console.log("%c   Asistencias en orden","color:green")
        }else{
            console.log("%c   Falta de asistencias","color:red")
        }
          
        if (promedio >= 7){
            console.log("%c   Promedio en orden","color:green")
        }else{
            console.log("%c   Promedio Reprobatorio","color:red")
        }

           
        if (trabajos >= 3){
            console.log("%c   Trabajos en orden","color:green")
        }else{
            console.log("%c   Falta de trabajos","color:red")
        }

    }
}
aprobar();

//solucion 2

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos hacer trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (var i = 0; i < (7*4); i++){
    if (((i) % 7 ) === 0 ){
        console.groupCollapsed("Semana " + (((i)/7)+1));
    }
    
    console.groupCollapsed("dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();

    if (((i+1) % 7 ) === 0 ){
        console.groupEnd();
    }


}
console.groupEnd();

