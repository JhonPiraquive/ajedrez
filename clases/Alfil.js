import Ficha from "./Ficha.js"
class Alfil extends Ficha {
    imagen_blanco = '♗'
    imagen_negro = '♝'

    constructor(color) {
        super(color)
    }
}

export default Alfil