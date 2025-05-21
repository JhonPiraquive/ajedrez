import Ficha from "./Ficha.js"

class Torre extends Ficha {
    imagen_blanco = '♖'
    imagen_negro = '♜'

    constructor(color) {
        super(color)
    }
}

export default Torre