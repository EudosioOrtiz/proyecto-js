class animal{    //this solo funciona dentro el objeto, las funciones dentro de la clase tienen que ser covensionales que para puedan funcionar
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad =  edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
    verInfo(){
        document.write(this.informacion + "<br>")
    }
    /*ladrar(){ // caso de polimorfismo por que es un caso aislado, y los objetos se comportan diferente en base a los atributos
        if (this.especie=="perro"){
            document.write("guau!"+"<br>");
        }else{
            document.write("No puede ladrar por que es un "+ this.especie+"<br>");
        }
    }*/

}

class perro extends animal { //herencia, cuando se hace una herencia se extrae todos los atributos y metodos de la clase extendida
    constructor(especie,edad,color, raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        alert(this.raza + "guau!");
    }
    static Saludar(){ // metoda static nos ayuda a ejecutar un metodo sin atributos 
        alert("levanta la pata")
    }

    set setRaza(newRaza){ //setter
        this.raza = newRaza;
    }
    get getRaza(){
        return this.raza;
    }
}


const perrou = new perro("perro",5,"gris","boxer"); //las clases de definen con const
const gato = new animal("gato",2,"rosa");
const loro = new animal("loro",1,"verde");

//document.write(perro.informacion + "<br>",gato.informacion + "<br>", loro.informacion + "<br>");
perrou.verInfo();
gato.verInfo();
loro.verInfo();

//perrou.ladrar();

perro.Saludar();

perrou.setRaza = "pitbull"// setter
document.write(perrou.raza, perrou.getRaza)

