
//Metodos de propiedad
const reproductor = {
  reproducir: function (id) {
    console.log(`reproduciendo cancion con el ID: ${id}`);
  },
  pausa: function () {
    console.log(`Pausando...`);
  },
  crearPlaylist: function (name) {
    console.log(`Creando la playlist: ${name}`);
  },
  reproducirPlaylist: function (name) {
    console.log(`Reproduciendo la playlist: ${name}`);
  },
};
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(19);
reproductor.pausa();
reproductor.borrarCancion(19);
reproductor.crearPlaylist('Musica Sad :c');
reproductor.reproducirPlaylist("Musica Sad :c");