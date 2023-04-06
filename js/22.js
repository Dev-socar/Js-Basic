// const puntaje = 1001;
// if (puntaje === 1000) {
//     console.log("Si el puntaje es mil");
// }else{
//     console.log("No es igual");
// }

// const efectivo = 1000;
// const carrito = 800;
// if (efectivo > carrito) {
//     console.log("Si puedes pagar");
// } else {
//     console.log("Fondos insuficientes");
// }

const rol = "Visitante";
if (rol == 'Admin'){
    console.log("Acceso al sistema");
}else if(rol === "Editor"){
    console.log("Eres editor, puedes entrar pero no puedes hacer mucho");
}
else{
    console.log("No tienes acceso");
}