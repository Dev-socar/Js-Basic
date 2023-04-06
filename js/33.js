async function getEmpleados(){
    const url = "empleados.json";
    // fetch(url)
    //     .then(resultado => resultado.json())
    //     .then(data =>{
    //         const { empleados } = data;
    //         // console.log(empleados);

    //         empleados.forEach(empleado => {
    //             console.log(`${empleado.nombre} trabaja de ${empleado.puesto}`);
    //         });
    //     })
    const resultado = await fetch(url);
    const datos = await resultado.json();
    console.log(datos);
}

getEmpleados();