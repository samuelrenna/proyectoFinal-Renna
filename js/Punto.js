
class Punto {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	coincide(punto) {
		return this.x === punto.x && this.y === punto.y;
	}
}
