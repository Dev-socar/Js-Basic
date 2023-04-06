//POO

//OBJET LITERAL
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object constructor es más dinamico
function Producto(nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

//Prototype nos permite crear funciones que solo se emplean en un objeto especifico
Producto.prototype.formatearProducto = function() {
  return `El producto: ${this.nombre}, tiene un precio de: ${this.precio} y se encuentra ${this.stock}`;
}

const producto2 = new Producto('Monitor 23',800, 'Disponible');
const producto3 = new Producto('Cargador', 10, 'No disponible');


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());


