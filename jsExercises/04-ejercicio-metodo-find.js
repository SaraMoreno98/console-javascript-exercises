// Ejercicio: Uso del método find en JavaScript

// 1. Creamos un array de objetos que representan libros
let libros = [
    {id: "Tolkien1", autor: "Tolkien", titulo: "El Señor de los Anillos", year:1954},
    {id: "Tolkien2", autor: "Tolkien", titulo: "El Hobbit", year: 1937},
    {id: "Lewis", autor: "Lewis", titulo: "Las Crónicas de Narnia", year: 1955},
    {id: "Martin", autor: "Martin", titulo: "Juego de Tronos", year: 1996},
    {id: "Maas", autor: "Maas", titulo: "Ciudad de Medialuna", year:2020}
]

//Impedir que se modifique el array
libros.forEach(libro =>{
    Object.freeze(libro)
})

//Si modificamos algún valor del objeto no marca error pero no lo modifica
libros[0].id = 6
//console.log(libros[0].id)

console.table(libros)

// 2. Función para encontrar un libro por su ID
function buscarLibroId(id){
    return libros.find(libro => libro.id === id)
}

console.log("Libro encontrado:", buscarLibroId("Maas"))

// 3. Función para encontrar un libro por su título (ignorando mayúsculas/minúsculas)
function buscarLibroTitulo(titulo){
    //.toLowerCase asegura que la busqueda se haga aunque haya minúsculas
    return libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase())
}

console.log("Libro titulado Señor Anillos:", buscarLibroTitulo("el señor de los anillos"))

// 4. Función para encontrar el primer libro de un autor específico
function encontrarLibroAutor (autor){
    return libros.find(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()))
}

console.log("Libro de Tolkien", encontrarLibroAutor ('Tolkien'))

// 5. Función para encontrar el primer libro publicado después de un año específico
function encontrarLibroYear (year){
    return libros.find(libro => libro.year > year)
}

console.log("Primer Libro después de 1955", encontrarLibroYear(1960))

// 6. Función para encontrar un libro que cumpla múltiples criterios
function encontrarLibroCriterios(criterio){
    return libros.find(libro => {
        for (let propiedad in criterios){
            if (libro[propiedad] !== criterios[propiedad]){
                return false
            }
        }
        return true
    })
}

let criterios = {autor: "Maas", year: 2020}

let libroEncontrado = encontrarLibroCriterios(criterios)

console.log("Libros de la autora este año:", libroEncontrado)

// 7. Intentar encontrar un libro que no existe
