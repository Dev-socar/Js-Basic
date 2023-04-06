//This

const reservacion = {
    nombre: 'Omar',
    apellido: 'Solis',
    total: 5000,
    pagado: false,
    informacion : function(){
        console.log(`El cliente es ${this.nombre} reservó y su cantidad a pagar es de: $${this.total}`);
    }
}
const reservacion2 = {
  nombre: "Dariana",
  apellido: "Garcia",
  total: 5000,
  pagado: false,
  informacion: function () {
    console.log(
      `El cliente es ${this.nombre} reservó y su cantidad a pagar es de: $${this.total}`
    );
  },
};
reservacion2.informacion();
reservacion.informacion();

//Si se usa un arrow function hace referencia a la ventana y no al objeto, si tenemos algo como lo siguiente:
const reservacion3 = {
  nombre: "Omar",
  informacion:  () => {
    console.log(
      `El cliente es ${this.nombre} reservó y su cantidad a pagar es de: $${this.total}`
    );
  },
};
reservacion3.informacion();//Imprime undefined debido a que this, hace referencia a la windown, cuando son objetos
//si tendra una funcion, debe ser como el ejemplo reservacion o reservacion2.