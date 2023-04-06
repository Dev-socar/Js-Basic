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
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Includes
let resultado = meses.includes('Diciembre'); //Saber si existe un elemento en un array plano
console.log(resultado);


//Some ideal para arreglo de objetos y saber si un objeto existe
resultado = carrito.some(function(producto){
    return producto.nombre == 'Tablet'
});
console.log(resultado);


//Reduce para sumar el precio de los objetos
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio;
},0)
console.log(resultado);


//Filter para filtrar los objetos
resultado = carrito.filter(function (producto){
    return producto.precio < 400;
}); 
console.log(resultado);