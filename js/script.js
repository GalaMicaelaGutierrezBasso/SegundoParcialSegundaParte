// Obras elegidas para mostrar (nombre, año y foto)
let obras = [
  { nombre: "33 Preguntas por Minuto", año: 2000, imagen: "img/obra1.jpg" },
  { nombre: "Empaquetamiento de Esferas: Bach", año: 2018, imagen: "img/obra5.jpg" },
  { nombre: "Tensión Binocular", año: 2024, imagen: "img/obra4.jpg" },
  { nombre: "Presencia Espectral", año: 2024, imagen: "img/obra3.jpg" },
  { nombre: "Agujero Negro", año: 2026, imagen: "img/obra2.jpg" }
];

// Con una funcion mostrar un dato curioso al azar, que de todos los datos (el largo del array anterior) elija uno al azar (y redondea el numero entero mas cercano y asi es especifico el dato curioso)
// Despues obtener el elemento con el id "datocurioso" y cambiar su contenido al dato curioso obtenido anteriormente
function mostrarObra() {
    let galeria = Math.floor(Math.random() * obras.length);
    document.getElementById("obrasgaleria").textContent = obras[galeria].nombre + " (" + obras[galeria].año + ")";
    document.getElementById("imagenobra").src = obras[galeria].imagen;
    }

// Obtener el elemento con el id "botonobra" y que al hacer click en el botón nos mostrara otra obra
document.getElementById("botonobra").addEventListener("click", mostrarObra);

// Para que no haga falta hacer click en el boton para que se muestre otra obra, ya sea al cargar la pagina o recargarla
mostrarObra();