import Ficha from "./Ficha.js"
class Caballo extends Ficha {
    imagen_blanco = '♘'
    imagen_negro = '♞'

    constructor(color) {
        super(color)
    }
}

export default Caballo