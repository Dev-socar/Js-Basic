const producto = {
  nombreProducto: "Monitor HD",
  precio: 250.5,
  disponible: true,
};

//Forma anterior 
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;
// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring 
const {precio, nombreProducto, disponible} = producto; //Extraigo el valor y le asigno el valor, debe ser el mismo que esta en el objeto
//const {nombreProducto} = producto;
console.log(precio);
console.log(nombreProducto);
console.log(disponible);