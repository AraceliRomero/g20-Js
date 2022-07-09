// Tarea de la sesion
// Ejercicio 1 ->
// Función que pida una palabra al usuario
// Invierta la palabra
// y la retorna, almacenamos ese retorno en una variable y al interpolamos en un alert usando template literals
// reversedString('hola') -> 'aloh'

function invertir(palabra){
    let k = palabra.legth;
    let invertida = "";
    for (let i = (k-1); i>= 0; i--){
        invertida += palabra [i];
    }
    return invertida
}
alert(`Respuesta: ${invertir(`hola`)}`);

// Ejercicio 2 ->
// Función que pida 3 numeros como parametro
// 2 números obligatorios y 1 opcional con valor de 3
// Arroje la suma de esos 3 números
// Posibles resultados
// -> addThreeNumbers(3,4,5) -> 12
// -> addThreeNumbers(3,4) -> 10
// -> addThreeNumbers(3) -> 'Faltan datos'
// -> addThreeNumbers() -> 'Faltan datos'
// ejercicio 3 ->
// Función que pida al usuario los grados Centigrados en su localidad
// Convertirlos a grados fahrenheit
// Retornar el valor y ese valor usarlo para
// Arrojar un alert con el resultado
// -> convertTemp(25) -> La temperatura es de 77 ºF
// -> convertTemp() -> 'Faltan datos'
// Ejercicio 4 ->
// Función que reciba una numero e imprima las tablas de ese numeri, validamos que ese numero este entre 1 y 10

let input = prompt("number");

if (input <0 && input <= 10) {
    console.log(input);

} else {
    console.log("Input tiene que ser entre 1 y 10");

}







// Ejercicio 5 ->
// Función que pida al usuario un número (N) entre 1 y 100
// Mandar un alert con suma desde el 1 hasta N
// N debe tener un valor por defecto =  3
// addNumberLimit() -> 6
// addNumberLimit(4) -> 10
// addNumberLimit(5) -> 15



// _--------------- //

// ArrowFunction
// ! Declaracion 

// const arrowfunction = ( ) => {
//     console.log (p1);
// }

// palindromo 
let text = prompt("Ingresa un texto")

const palindromeChecker = (cadena) => {
    const cadenaReverser = cadena.split ("").reverse().join("");

    return cadenaREverser === cadena ? "es palindromo" : "no es palindromo";
}

console.log(palindromeChecker(text))


