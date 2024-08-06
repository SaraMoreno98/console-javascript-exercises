// Ejercicio: Manejo de objetos en JavaScript

// 1. Creamos un objeto que representa a un estudiante
var estudiante = {
    nombre: "Sara",
    edad: 22,
    carrera: "Informática",
    asignaturas: ["Programación", "Bases de datos", "Redes"],
    activo: true
}

// 2. Accedemos y mostramos propiedades del objeto
console.log("Nombre:",estudiante.nombre, " Edad:", estudiante.edad)

// 3. Modificamos una propiedad
estudiante.edad = 26
console.log(estudiante.edad)

// 4. Añadimos una nueva propiedad
estudiante.semestre = 6;
console.log(estudiante)

// 5. Recorremos las propiedades del objeto con for...in
for (let propiedad in estudiante){
    console.log(propiedad + ": " + estudiante[propiedad])
}

// 6. Creamos un método en el objeto
estudiante.presentarse = function (){
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera}`)
}

estudiante.presentarse()

estudiante.presentarse2 = function(){
    return `Hola, soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera}`
}

// 7. Llamamos al método
console.log(estudiante.presentarse2())


// 8. Creamos un array de objetos
let estudiantes = [
    {nombre: 'Carlos', edad: 25, carrera: 'Medicina'},
    {nombre: 'Sara', edad: 26, carrera: 'Diseño'},
    {nombre: 'Alba', edad: 28, carrera: 'Ingeniería'}
]

console.table(estudiantes)

// 9. Recorremos el array de objetos
console.log("Lista de estudiantes")

estudiantes.forEach((estudiante, indice) => {
    console.log(`Estudiante ${indice + 1}: ${estudiante.nombre}, de ${estudiante.edad} años, estudia ${estudiante.carrera}`)
});

// 10. Buscamos un estudiante por su nombre
let estudianteCarlos = estudiantes.find(estudiante => estudiante.nombre === "Carlos")

console.log("Estudiante encontrado:", estudianteCarlos)

function buscarEstudiante(nombre){
    let estudianteEncontrado = estudiantes.find(estudiante => estudiante.nombre === nombre)

    return estudianteEncontrado
}

let estudianteBuscado = buscarEstudiante("Alba")
if (estudianteBuscado != undefined){
    console.log("Estudiante encontrado: ", estudianteBuscado)
}
else{
    console.log("Este estudiante no existe")
}