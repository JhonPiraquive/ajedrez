import Ficha from "./Ficha.js"
class Reina extends Ficha {
    imagen_blanco = '♕'
    imagen_negro = '♛'

    constructor(color) {
        super(color)
    }
}

export default Reina