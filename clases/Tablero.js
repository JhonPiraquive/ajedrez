import Casilla from "./Casilla.js";
import FichaFactory from "./FichaFactory.js";

class Tablero {
    constructor() {
        this.casillas = [];
        this.piezaSeleccionada = null;
        this.casillaSeleccionada = null;
        this.inicializar();
    }

    inicializar() {
        this.llenarCasillas()
    }

    iniciarPartida() {
        this.pintarFichas()
    }

    llenarCasillas() {
        let fichaFactory = new FichaFactory()

        for (let fila = 0; fila < 8; fila++) {
            for (let columna = 0; columna < 8; columna++) {
                let puedeCrearFicha = (fila === 0 || fila === 1 || fila === 6 || fila === 7)
                let ficha = null

                if (puedeCrearFicha) {
                    ficha = fichaFactory.crearProducto(fila, columna)
                }

                this.casillas.push(new Casilla(fila, columna, ficha))
            }
        }
    }

    pintarFichas() {
        let casillasVisuales = document.getElementsByClassName('square')

        for (let index = 0; index < casillasVisuales.length; index++) {
            let casillaVisual = casillasVisuales[index]
            let posX = casillaVisual.dataset.x
            let posY = casillaVisual.dataset.y

            let casillaLogica = this.getCasillaEnPosicion(posX, posY)

            if (casillaLogica.ficha != null && casillaLogica.ficha != undefined) {   
                casillaVisual.innerHTML = casillaLogica.ficha.getImagen()
            }
        }
    }

    getCasillaEnPosicion(posX, posY) {
        return this.casillas.find((casilla) => {
            return casilla.fila == posX && casilla.columna == posY
        })
    }
}

export default Tablero