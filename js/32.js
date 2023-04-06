//Async / await

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');
        setTimeout(() => {
          resolve('Los clientes fueron, descargados')
        }, 10000);
    });
}


function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando ultimos pedidos... espere...");
    setTimeout(() => {
      resolve("Los pedidos fueron, descargados");
    }, 3000);
  });
}

async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // //Lo que esta debajo de el await esperara a que se ejecute lo de arriba y continua
        // console.log(clientes);
        // console.log(pedidos);
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();
//console.log("este codigo no se bloquea");