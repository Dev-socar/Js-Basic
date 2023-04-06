//Arreglos o Arrays

const numeros = [10,20,30,40,50];




const arreglo  = ['Hi', 12 , true, null, {nombre: 'Omar', trabajo:'Programador'}, [1,3,4]];
// console.log(arreglo);

// //Acceder valores de arreglos
// console.log(numeros[4]);

// //Conocer la extension de un arreglo
// console.log(meses.length);

// meses.forEach(function(mes){
//     console.log(mes);
// })

//Agregar al arreglo
numeros.push(60,70,80);//Agrega al final del arreglo
numeros.unshift(-10,-20,-30)//Agrega al inicio del arreglo
console.table(numeros);
//Eliminar
const meses = ["Enero", "Febrero", "Marzo", "Abril"];
console.log(meses);
// meses.pop();//Elimina al final del arreglo
// meses.shift()//Elimina al inicio del arreglo
// meses.splice(2,1)//Elimina la posicion 2 y el siguiente parametro es cuantos quieres eliminar desde esa posicion
console.log(meses);

//Desventajas es que modificamos el array original 

//Para evitar eso, usaremos Rest Operator y Spread operator
 const nuevoArreglo = [...meses, 'Mayo', 'Junio'];
 console.log(nuevoArreglo);


