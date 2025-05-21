import Ficha from "./Ficha.js"

class Peon extends Ficha {
    imagen_blanco = '♙'
    imagen_negro = '♟'

    constructor(color) {
        super(color)
    }
}

export default Peon