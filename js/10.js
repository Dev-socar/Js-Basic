//Objetos
const producto = {
    nombreProducto : "Monitor HD",
    precio : 250.50,
    disponible : true
};
// console.log(producto.nombreProducto);//manera de acceder a la propiedad del objeto
// console.log(producto.precio);
// console.log(producto.disponible);

// console.log(producto['nombreProducto']);//Otra manera de acceder a la propiedad del objeto

producto.imagen = "imagen.jpg";//agregar nuevas propiedades
delete producto.disponible; //eliminar propiedad

console.log(producto);