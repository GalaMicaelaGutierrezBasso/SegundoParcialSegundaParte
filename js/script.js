let obras = [
  { nombre: "33 Preguntas por Minuto", año: 2000, imagen: "img/obra1.jpg" },
  { nombre: "Empaquetamiento de Esferas: Bach", año: 2018, imagen: "img/obra5.jpg" },
  { nombre: "Tensión Binocular", año: 2024, imagen: "img/obra4.jpg" },
  { nombre: "Presencia Espectral", año: 2024, imagen: "img/obra3.jpg" },
  { nombre: "Agujero Negro", año: 2026, imagen: "img/obra2.jpg" }
];

function mostrarObra() {
    let galeria = Math.round(Math.random() * obras.length);
    document.querySelector("#obrasgaleria").textContent = obras[galeria].nombre + " (" + obras[galeria].año + ")";
    document.querySelector("#imagenobra").src = obras[galeria].imagen;
    }

document.querySelector("#botonobra").addEventListener("click", mostrarObra);

mostrarObra();