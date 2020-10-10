//Actividad 1
console.log("Hi World");


//Actividad 2
var meses = ["Enero", "Febrero" , "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses);


//Actividad 3
function esPar(n){
    if (n%2 == 0){
        return "Es Par";
    }else{
        return "Es Impar";
    }
}
console.log(esPar(2));
console.log(esPar(5));


//Actividad 4
function algunoEsPar(array){    
    var res = array.some((num) => num % 2 === 0); 
    return res;   
}
console.log(algunoEsPar([1,2,3]));


//Actividad 5
function aprobo(listadenotas){
    var ap = listadenotas.every((nota) => nota >= 4);
    return ap;
}
console.log(aprobo([8,6,2,4]));


//Actividad 6
var condicion = (nota) => nota >= 4;

function quienesAprobaron(notasAlumnos){
    var alap = notasAlumnos.filter((nota) => nota.every(condicion));
    return alap;
}

var aprobados = quienesAprobaron([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]]);

for (const i of aprobados) {
    console.log(i);
}


//Actividad 7
function hayAlgunoNegativo(array){
    var neg = (num) => num< 0;
    return array.some(neg);
}

console.log(hayAlgunoNegativo([1,-2,6]));


//Actividad 8
var esPar = (nume) => nume % 2 == 0;
function cuantosCumplen(funcion, array){
    var cont = 0;
    for (const iterator of array) {
    
        if(funcion(iterator)){
            cont++;
        }
    }    
    return cont;
}

console.log(cuantosCumplen(esPar, [7,9,25,42]));


//Actividad 9
//utilizo la funcion esPar del ejer anterior
function rechazar(funcion, array){
    var res = [];
    for (const iterator of array) {    
        if(!funcion(iterator)){
            res.push(iterator);
        }
    }    
    return res;
}

console.log(rechazar(esPar, [7,9,25,42]));


//Actividad 10
function contiene(num, array){    
    numeroEncontrado = array.some((nume) => nume == num);
    return numeroEncontrado;
}

console.log(contiene(8,[2,4,5,8]));


//Actividad 11
class Persona {

    nombre;
    edad;  

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(){
        return "Nombre: " + this.nombre + ", tengo " + this.edad + " años.";
    }

}

var persona1 = new Persona("Dario Lionel Nassif" , 28);

console.log(persona1.presentarse());


//Actividad 12
class Estudiante extends Persona{

    profesor;   
 
    constructor(nombre, edad){
         super(nombre, edad);
    }
 
     estudiando(){
         return console.log("Estudiando con " + this.profesor);
     }
 
     setProfesor(profesor){
         this.profesor = profesor;
     }
     
 }
 
 var estudiante1 = new Estudiante("Damian Diaz Ponchon", 35);
 var estudiante2 = new Estudiante("Nicolas Hector Catardi", 28);

 estudiante1.setProfesor("Christian Dario Nievas");
 estudiante2.setProfesor("Misael Cudek");

 console.log(estudiante1.presentarse());
 estudiante1.estudiando();
 console.log(estudiante2.presentarse());
 estudiante2.estudiando();


//Actividad 13
class Profesor extends Persona {
        
    constructor(nombre, edad){
        super(nombre, edad);
        this.estudiantes = [];    
    }

    enseniando(){
        console.log("Enseñando a: ");
        for (const iterator of this.estudiantes) {
            console.log(iterator.presentarse());
        }
    }

    addEstudiante(estudiante){
        this.estudiantes.push(estudiante);
        estudiante.setProfesor(this.nombre);
    }

}

    var profesor1 = new Profesor("Mariano Closs", 52);
    console.log(profesor1.presentarse());
    profesor1.addEstudiante(estudiante1);
    profesor1.addEstudiante(estudiante2);
    profesor1.enseniando();