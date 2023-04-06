const boton = document.querySelector('#button');

boton.addEventListener('click', ()=>{
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es: ${resultado}`));
});

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificacion',{
        icon: 'imgs/ejemplo.jpeg',
        body: 'Codigo con Omar, los mejores cursos'
    })
}