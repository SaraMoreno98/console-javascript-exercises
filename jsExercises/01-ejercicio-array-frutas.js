// Ejercicio: Manejo básico de arrays en JavaScript

// 1. Crea un array llamado 'frutas' con 5 nombres de frutas
let frutas = [
    'sandía',
    'melon',
    'melocotón',
    'pera',
    'mandarina'
]


// 2. Imprime el array completo
console.table(frutas)

// 3. Imprime la longitud del array
console.log(frutas.length)


// 4. Accede e imprime el tercer elemento del array
console.log(frutas[2])

// 5. Añade una fruta al final del array usando push()
frutas.push('cerezas')
console.log('Array después del push', frutas)

// 6. Elimina el último elemento del array usando pop()
frutas.pop()
console.log('Array después del pop', frutas)


// 7. Añade una fruta al principio del array usando unshift()
frutas.unshift('cerezas')
console.log('Array después del unshift', frutas)


// 8. Elimina el primer elemento del array usando shift()
frutas.shift()
console.log('Array después del shift', frutas)