let indice = 0

let controladorIzq = document.querySelector(".controladorIzq");
controladorIzq.addEventListener("click", pasarIzquierda)
let controladorDer = document.querySelector(".controladorDer");
controladorDer.addEventListener("click", pasarDerecha)

function pasarIzquierda(event) {
    let carrousel = document.querySelector(".carrousel");
    let totalImg = document.querySelectorAll(".pelicula").length;

    indice = (indice - 1 + totalImg) % totalImg;
    console.log(indice)
    if (indice == 4) {
        indice = 2
    }
    desplazamiento = -indice * 250;
    carrousel.style.transform = `translateX(${desplazamiento}px)`;
}


function pasarDerecha(event) {
    let carrousel = document.querySelector(".carrousel");
    let totalImg = document.querySelectorAll(".pelicula").length;
    indice = (indice + 1 + totalImg) % totalImg;

    if (indice > 2) {
        indice = 0
    }
    desplazamiento = -indice * 250;
    carrousel.style.transform = `translateX(${desplazamiento}px)`;
}