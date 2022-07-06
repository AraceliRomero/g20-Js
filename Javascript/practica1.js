
const p1 = prompt('Ingresa un número');
const p2 = prompt('Ingresa un número');
const p3 = prompt('Ingresa un número');

if (p1 > p2 && p1 > p3){
	console.log ('el número p1 es mayor')
}
else if (p2 > p1 && p2 > p3){
console.log ('El número p2 es mayor')
}
else if (p3 > p1 && p3 > p2){
	console.log ('El número p3 es mayor')
}
else{
  console.log('Vuelve a intentar')
}
