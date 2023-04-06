//FOR LOOP
// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }
// for (let index = 1; index <= 100; index++) {
//     if(index%2 === 0){
//         console.log(`El numero: ${index} es PAR`);
//     }else{
//         console.log(`El numero: ${index} es IMPAR`)
//     }
// }
const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Monitor 50 pulgadas", precio: 900 },
  { nombre: "Control Xbox", precio: 1000 },
  { nombre: "Tablet", precio: 350 },
  { nombre: "Celular", precio: 200 },
  { nombre: "Disket", precio: 10 },
  { nombre: "Adaptador HDMI", precio: 80 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Mouse", precio: 100 },
];

for (let index = 0; index < carrito.length; index++) {
    console.log(carrito[index].nombre);
    
}

//WHILE LOOP
// let i = 20;
// while (i < carrito.length) {
//     console.log(carrito[i].precio);
//     i++;
// }
//DO WHILE LOOP
let i = 100;

do {
    console.log(i);
    i++;
} while (i < 10);