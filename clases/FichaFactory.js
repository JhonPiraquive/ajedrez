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
        let color = this.getColor(fila)

        switch (tipo) {
            case 'torre':
                return new Torre(color);
            case 'caballo':
                return new Caballo(color);
            case 'alfil':
                return new Alfil(color);
            case 'reina':
                return new Reina(color);
            case 'rey':
                return new Rey(color);
            case 'peon':
                return new Peon(color);
        }
    }

    obtenerTipo(fila, columna) {
        return fila === 1 || fila === 6
            ? 'peon'
            : this.TIPOS[columna]
    }

    getColor(fila) {
        return fila == 0 || fila == 1
            ? 'negro'
            : (fila == 6 || fila == 7 ? 'blanco' : null)
    }

    mover(fila, columna) {

    }
}

export default FichaFactory