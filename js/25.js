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

//ForEach unicamente en arreglos
const arreglo1 = carrito.forEach(producto => producto.nombre);


//map Unicamente en arreglos
const arreglo2 = carrito.map(producto => `${producto.nombre} - $${producto.precio}` );
console.log(arreglo1);
console.log(arreglo2);
//La diferencia entre foreach y map es que si se quiere iterar sobre el arreglo e imprimirlos por consola o html es mejor foreach
//Si se quiere crear un nuevo arreglo filtrado se usa map 