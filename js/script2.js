// Declarar las variable: los datos curiosos al azar
let datosCuriosos = [
"Rafael Lozano-Hemmer es un artista mexicano-canadiense especializado en instalaciones interactivas en espacios públicos.",
"Su obra combina tecnología avanzada como sensores biométricos, robótica y datos en tiempo real.",
"En su proyecto Vectorial Elevation, ciudadanos controlaban reflectores gigantes a través de internet.",
"Pulse Room es una instalación que traduce los latidos cardíacos de los visitantes en pulsos de luz.",
"Su trabajo explora la relación entre el cuerpo humano, la tecnología y la vigilancia.",
"Ha expuesto sus obras en más de 70 países alrededor del mundo.",
"Lozano-Hemmer estudió ingeniería antes de dedicarse al arte, lo que influye en su enfoque tecnológico.",
"Sus instalaciones suelen involucrar la participación activa del público para activar la obra.",
"Fue ganador del prestigioso premio Ars Electronica por su innovador uso de tecnología en arte.",
"Utiliza la luz como lenguaje poético para explorar temas de identidad, memoria y presencia."
];

// Con una funcion mostrar un dato curioso al azar, que de todos los datos (el largo del array anterior) elija uno al azar (y redondea el numero entero mas cercano y asi es especifico el dato curioso)
// Despues obtener el elemento con el id "datocurioso" y cambiar su contenido al dato curioso obtenido anteriormente
function mostrarDato() {
    let datos = Math.round(Math.random() * datosCuriosos.length);
    document.querySelector("#datocurioso").textContent = datosCuriosos[datos];
    }

// Obtener el elemento con el id "botondato" y que al hacer click en el botón nos mostrara otro dato curioso
document.querySelector("#botondato").addEventListener("click", mostrarDato);

// Para que no haga falta hacer click en el boton para que se muestre otro dato, ya sea al cargar la pagina o recargarla
mostrarDato();