// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Creamos un array de números
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros)


// 2. Recorremos el array con un bucle for
for (var i = 0; i < numeros.length; i++){
    console.log(`Indice con for: ${i}: ${numeros[i]}`)
}


// 3. Recorremos el array con forEach
    //Opción 1    
    numeros.forEach(numero => {
        console.log(`Reccorrido con forEach: ${numero}`)
    });

    //Opción 2
    numeros.forEach((numero, indice) => {
        console.log(`Indice ${indice}: ${numero}`)
    });


// 4. Calculamos la suma de los números usando for
let suma = 0

for (var i = 0; i < numeros.length; i++){
    suma = suma + numeros [i];
}

console.log(`La suma con for es ${suma}`)


// 5. Calculamos la suma de los números usando forEach
let suma_forEach = 0

numeros.forEach(numero => {
    suma_forEach += numero;
});

console.log(`La suma con forEach es ${suma_forEach}`)


//ADICIONAL. Multiplicación de todos los números
let multiplicacion = 1

for (var i = 0; i < numeros.length; i++){
    multiplicacion = multiplicacion * numeros[i];

    console.log(`La multiplicación con for es ${multiplicacion}`)
}


// 6. Creamos un nuevo array con los números pares usando for
var numerosPares = []

for (var i = 0; i < numeros.length; i++){
    //Comprobar si numeros [i] es un número par y añadira a numerosPares
    //% = resto de division, se utiliza sobretodo para saber si un número es par
    if ((numeros[i] % 2) == 0){
        numerosPares.push(numeros[i])
    }
}

console.log(`Array de números pares: ${numerosPares}`)


// 7. Creamos un nuevo array con los números pares usando forEach
let pares_forEach = []

numeros.forEach(numero => {
    if ((numero % 2) == 0){
        pares_forEach.push(numero)
    }
});

console.log(`Array de números pares con forEach: ${pares_forEach}`)