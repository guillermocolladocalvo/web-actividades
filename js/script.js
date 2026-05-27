// BOTÓN VOLVER ARRIBA

const botonTop = document.getElementById("btnTop");

// MOSTRAR BOTÓN AL HACER SCROLL

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        botonTop.style.display = "block";

    } else {

        botonTop.style.display = "none";
    }
};

// SUBIR ARRIBA SUAVEMENTE

function volverArriba() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
}