//Solucion 1
class celulares {
    constructor(color, peso,tamano,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamano = tamano;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram
        this.encendido = false;
    }
    encendidoCelular(){
        if (this.encendido == false){
            alert("Celular encendido");
            this.encendido = true;
        }else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciando celular");
        }else{
            alert("Celular apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.rdc} `);
    }
    grabarVideo(){
        alert(`grabando en una resolucion de: ${this.rdc} `);    
    }
    mobileInfo(){  
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamano: <b>${this.tamano}</b></br>
        RDP: <b>${this.rdp}</b></br>
        RDC: <b>${this.rdc}</b></br>
        RAM: <b>${this.ram}</b></br>`;        
    }
}
// Solucion 2
class celularesAltaGama extends celulares {
    constructor(color, peso,tamano,rdp,rdc,ram,rdce){
        super(color, peso,tamano,rdp,rdc,ram);
        this.rdce = rdce;
    }

    grabarVideoLento(){
        alert("Grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial");
    }
    mobileInfoAltaGama(){  
        return this.mobileInfo() + `RDCE: ${this.rdce}`;
    }
}

//celular1 = new celulares("gris", "150g","10x4", "5'","full HD", "2GB");
//celular2 = new celulares("negro", "200g","11x5", "7'","full HD", "4GB");
celular3 = new celulares("azul", "100g", "9x3.5","4.5'","HD", "1GB");

celular1 = new celularesAltaGama("gris", "150g","10x4", "5'","full HD", "2GB","Full HD");
celular2 = new celularesAltaGama("rosa", "150g","10x4", "5'","full HD", "2GB","Full HD");


//celular1.encendidoCelular();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.encendidoCelular();

document.write(`
    ${celular1.mobileInfoAltaGama()}<br><br>
    ${celular2.mobileInfoAltaGama()}<br><br>
    ${celular3.mobileInfo()}<br><br>
    `);

//Solucion 3 

class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrado");
        }
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

App1 = new App("100+", "4.7","100MB");
App2 = new App("200+", "4.5","200MB");
App3 = new App("200+", "4.5","300MB");

//App1.instalar();
//App1.abrir();
//App1.cerrar();
//App1.desinstalar();

document.write(`
    ${App1.appInfo()}<br><br>
    ${App2.appInfo()}br><br>
    ${App3.appInfo()}<br><br>
    `);
