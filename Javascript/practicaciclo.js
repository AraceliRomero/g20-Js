// Practico 1
// imprimir vocales de string usando for loop
// *Usando solo ciclos y condicionales *




// let text = 'ganando en dolares gastando en pesos!'
// let counttext = text.match(/[aeiou]/gi).length
// for (let i= 0 ; i < counttext ; i++) {
//     console.log(text);
// }

// Practica2
// imprimir solo las consonantes de un string usando for loop
// *solo ciclos y condicionales *

// let text = 'ganando en dolares gastando en pesos!'
// let counttext = text.match(/[aeiou]/gi)&&.length
// let mensajeVocales = mensaje.toLowerCase().replace("","");
// for (let i= 0 ; i < counttext ; i++) {
//     console.log(text);
// }




// Practica3
// Pedir al usuario un numero del 1 al 10 e imprimir la tabla de multiplicar de ese número
// Usando loops

// let k = 0
// let i = parseInt(prompt('Ingresa un nujmero'));
// while ( k<= 10) {
//     console.log
// }


// Practica Grupal 1
// Ejercicio 1
// Pedir el usuario un número entre 10 y 100
// * Imprimir todos los números pares que existen entre 1 y ese número
// * p.ej. 12 -> 2,4,6,8,10,12
// * Usar loops, condicionales...
// hint -> %

// var num = parseInt(prompt('Ingresa un número entre 1 al 10'));
// if (num >= 10 && num <= 100 ){
// for (let i = 1; i <= num; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }
// }
// else
//     console.log("valores del 10 al 100 porfavor")


// Ejercicio 2
// Pedir al usaurio una oracion
// Imprimir un string con todas las vocales
// Imprimir un string con todas las consonantes
// Resultado de ejemplo
// p.ej. "Hola mundo"
// Consonantes -> hlmnd
// Vocales -> oauo

// let texto = prompt('Ingresa una frase o palabra');
// let minusculas= texto.toLowerCase().replace(" ","");
// let mayusculas= texto.replace(/[aeiou]/gi, '').replace(" ", '');
// let vocales = ""
// let consonante = ""
// for(let i=0; i < texto.length; i++ ){
//         if(minusculas[i] === 'a' ||
//            minusculas[i] === 'e' |
//         |  minusculas[i] === 'i' || 
//            minusculas[i] === 'o' || 
//            minusculas[i] === 'u') {
            
//             vocales += minusculas.[i]

//         }
// }

// for(let i=0; i < mayusculas.length; i++ ){
//         consonantes += mayusculas[i]                   
// }

// console.log(vocales)
// console.log(mayusculas)

// // Ejercicio 3
// //  Pedir el usuario una palabra
// // Invertir esa palabra e imprimirla en consola
// //  p.ej. 'Hola' -> 'aloh'

let str = propt("ingrese una oración");
let strReverse = "";
console.log(str.leght);

for(let i = str.ength-1; i>= 0; ){
    strReverse = strReverse + str[i];
}

console.log(strReverse);