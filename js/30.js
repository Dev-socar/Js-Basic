//Promises

const usuarioAutenticada = new Promise((res, rej) =>{
    const auth = true;

    if(auth){
        res('Usuario autenticado');//Se ejecuta res o resolve si la promesa se cumple
    }else{
        rej('Usuario no autenticado'); //rej o reject se ejecuta si no se cumple la promesa
    }
});
usuarioAutenticada
    .then(resultado => console.log(resultado))
    .catch(error =>console.log(error))

//En los promises existen 3 valores posibles
//Pending : No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Ya se cumplio
//Reject: Se ha rechazado o no se pudo cumplir
