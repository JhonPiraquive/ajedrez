import Tablero from "./clases/Tablero.js";

document.addEventListener('DOMContentLoaded', () => {
    let tablero = new Tablero();

    document.getElementById('iniciar_juego').addEventListener('click', () => {
        tablero.iniciarPartida()
    })
});