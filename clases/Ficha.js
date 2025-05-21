class Ficha {
    imagen_blanco = "no-image"
    imagen_negro = "no-image"
    color = "no-color"

    constructor(color) {
        this.color = color
    }

    getImagen() {
        return this.color == 'blanco'
            ? this.imagen_blanco
            : this.imagen_negro
    }
}

export default Ficha
