// ... (código de las clases Pieza y Casilla igual)

class Tablero {
    constructor() {
        this.casillas = [];
        this.piezaSeleccionada = null;
        this.casillaSeleccionada = null;
        this.inicializar();
    }

    inicializar() {
        // Crear casillas
        const tableroHTML = document.querySelector('.ajedrez'); // Cambiado a clase
        tableroHTML.innerHTML = '';

        for (let fila = 0; fila < 8; fila++) {
            this.casillas[fila] = [];
            for (let col = 0; col < 8; col++) {
                const color = (fila + col) % 2 === 0 ? 'blanca' : 'negra';
                this.casillas[fila][col] = new Casilla(fila, col, color);

                const divCasilla = document.createElement('div');
                divCasilla.className = `casilla ${color}`;
                divCasilla.dataset.fila = fila;
                divCasilla.dataset.col = col;

                // Piezas iniciales
                if (fila === 0 || fila === 1 || fila === 6 || fila === 7) {
                    const simbolo = this.obtenerSimboloPieza(fila, col);
                    if (simbolo) {
                        this.casillas[fila][col].colocarPieza(
                            new Pieza(this.obtenerTipoPieza(fila, col), fila <= 1 ? 'negro' : 'blanco', simbolo)
                        );
                        divCasilla.textContent = simbolo;
                    }
                }

                divCasilla.addEventListener('click', () => this.manejarClick(this.casillas[fila][col], divCasilla));
                tableroHTML.appendChild(divCasilla);
                this.casillas[fila][col].elemento = divCasilla;
            }
        }
    }

    obtenerSimboloPieza(fila, col) {
        const piezasNegras = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
        const piezasBlancas = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];
        
        if (fila === 0) return piezasNegras[col];
        if (fila === 7) return piezasBlancas[col];
        if (fila === 1) return '♟';
        if (fila === 6) return '♙';
        return '';
    }

    obtenerTipoPieza(fila, col) {
        if (fila === 1 || fila === 6) return 'peon';
        const tipos = ['torre', 'caballo', 'alfil', 'reina', 'rey', 'alfil', 'caballo', 'torre'];
        return tipos[col];
    }

    // ... (resto del código igual)
}

document.addEventListener('DOMContentLoaded', () => {
    new Tablero();
});