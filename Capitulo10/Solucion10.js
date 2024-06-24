const sendButton = document.getElementById('send-nota');

sendButton.addEventListener("click",()=>{
    let resultado, mensaje;
    try {
        prevRes = parseInt(document.getElementById('nota').value);
        if (isNaN(prevRes)){
            throw "Gracioso"
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(8, 5, prevRes);
    } catch (error) {
        resultado = "ERES GRACIOSO?"
        mensaje= "Has intentado hackear el sitio";
    }

    abrirModal(resultado[0], resultado[1], mensaje);
})

const definirMensaje = (pr)=>{
    switch (pr){
        case 1: resultado = "No seas HDP";
        break;
        case 2: resultado = "Eres malisimo";
        break;
        case 3: resultado = "Eres idiota";
        break;
        case 4: resultado = "Eres tonto";
        break;
        case 5: resultado = "Muy mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "Bien";
        break;
        case 8: resultado = "Muy bien";
        break;
        case 9: resultado = "Excelente";
        break;
        case 10: resultado = "La traes de fuera";
        break;
        default:resultado = null;
    }
    return resultado;

}

const verificarAprobacion = (nota1, nota2, pr)=>{
    promedio = (nota1 + nota2 + pr)/3;
    if (promedio >= 7){
        return ["<span class='green'>APROBADO </span><br>",Math.round(promedio)];
    }
    return ["<span class='red'>DESAPROBADO </span><br>",Math.round(promedio)];
}

const abrirModal = (resStatus, res, msg)=>{
    document.querySelector(".resultado").innerHTML = resStatus+ "tu promedio es: " +res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
    
}