//Arrow functions

const sumar = (a,b) => console.log(a + b);
sumar(5,10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('Js');

//ARRAY METHODS
const meses = ["Enero", "Febrero", "Marzo", "Abril"];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 50 pulgadas', precio: 900},
    {nombre: 'Control Xbox', precio: 1000},
    {nombre: 'Tablet', precio: 350},
    {nombre: 'Celular', precio: 200},
    {nombre: 'Disket', precio: 10},
    {nombre: 'Adaptador HDMI', precio: 80},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Mouse', precio: 100},
];

//forEach
meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});
let resultado;
//Some ideal para arreglo de objetos y saber si un objeto existe
resultado = carrito.some(producto => producto.nombre == 'Tablet');
console.log(resultado);


//Reduce para sumar el precio de los objetos
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(resultado);


//Filter para filtrar los objetos
resultado = carrito.filter(producto => producto.precio < 400); 
console.log(resultado);
