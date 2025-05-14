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
}

export default Tablero