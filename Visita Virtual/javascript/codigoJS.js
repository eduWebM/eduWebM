// Obtengo el elemento trozo del plano
const imgtrozoPlano = document.querySelector('.trozos-plano img');
// Obtén la instancia del carrusel
const miCarrusel = document.getElementById('carouselExampleCaptions');
// Creo un array con los trozos del plano
const trozosPlano = [
  { nombre: "Pasillo", imagen: "imagenes/pasillo.png" },
  { nombre: "Salón", imagen: "imagenes/salon.png" },
  { nombre: "Cocina", imagen: "imagenes/cocina.png" },
  { nombre: "Baño", imagen: "imagenes/baño.png" },
  { nombre: "Dormitorio 1", imagen: "imagenes/dormitorio1.png" },
  { nombre: "Dormitorio 2", imagen: "imagenes/dormitorio2.png" },
  { nombre: "Dormitorio 3", imagen: "imagenes/dormitorio3.png" },
  { nombre: "Terraza", imagen: "imagenes/terraza.png" }
];

// Escucha el evento 'slid.bs.carousel' para saber cuándo cambia la diapositiva
miCarrusel.addEventListener('slid.bs.carousel', function () {
  let currentSlide = miCarrusel.querySelector('.carousel-inner .carousel-item.active');
  let imgElement = currentSlide.querySelector('img');
  let imgAlt = imgElement.getAttribute('alt');
  console.log(imgAlt);

  trozosPlano.forEach(function(trozo) {
    if(imgAlt === trozo.nombre){
      imgtrozoPlano.setAttribute("src", trozo.imagen);
    }
  });
});
