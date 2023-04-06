//clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    getNombre(){
         return `El producto: ${this.nombre}`;
    }
    getPrecio(){
        return `El precio es de: ${this.precio}`;
    }
}

const producto2 = new Producto("Monitor 23", 800);
const producto3 = new Producto("Cargador", 10);


class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre,precio);//Elementos existentes en la clase padre
        this.isbn = isbn;
    }
    getIsbn(){
        return `${super.getNombre()}, ${super.getPrecio()}, el isbn del libro es: ${this.isbn}`;
    }
}
const libro = new Libro('JavaScript', 120, '3123123123145');
console.log(libro.getPrecio());
console.log(libro.getIsbn());

console.log(producto2.getNombre());
