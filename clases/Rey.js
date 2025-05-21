import Ficha from "./Ficha.js"
class Rey extends Ficha {
    imagen_blanco = '♔'
    imagen_negro = '♚'

    constructor(color) {
        super(color)
    }
}

export default Rey