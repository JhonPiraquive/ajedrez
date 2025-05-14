import Caballo from "./Caballo.js";
import Torre from "./Torre.js";
import Alfil from "./Alfil.js";
import Reina from "./Reina.js";
import Rey from "./Rey.js";
import Peon from "./Peon.js";

class FichaFactory {
    TIPOS = [
        'torre',
        'caballo',
        'alfil',
        'reina',
        'rey',
        'alfil',
        'caballo',
        'torre'
    ]

    constructor() { }

    crearProducto(fila, columna) {
        let tipo = this.obtenerTipo(fila, columna)

        switch (tipo) {
            case 'torre':
                return new Torre();
            case 'caballo':
                return new Caballo();
            case 'alfil':
                return new Alfil();
            case 'reina':
                return new Reina();
            case 'rey':
                return new Rey();
            case 'peon':
                return new Peon();
        }
    }

    obtenerTipo(fila, columna) {
        return fila === 1 || fila === 6
            ? 'peon'
            : this.TIPOS[columna]
    }

    mover(fila, columna) {

    }
}

export default FichaFactory