//TIPOS DE DATOS String

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';//scapamos las " con \ o usando 'Monitor de 20"'
const producto2 = 'Monitor HD';
//Length regresa la longitud del elemento
console.log(tweet.length);
console.log(producto2);

//IndexOf devuelve la posición de un texto que se esta buscando
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf("tablet"));//Si regresa -1 quiere decir que no se encuentra esa palabra

//Includes retorna true o false
console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("tablet"));