class Rectangulo {
	constructor(x, y, ancho, alto, tipo) {
	this.x = x;
	this.y = y;
	this.ancho = ancho;
	this.alto = alto;
	this.idHTML = `${tipo}x${x}y${y}`;
	this.html = `<div id="${this.idHTML}"></div>`;
	}
	cruza(rectangulo) {
	return (
		this.x < rectangulo.x + rectangulo.ancho &&
		this.x + this.ancho > rectangulo.x &&
		this.y < rectangulo.y + rectangulo.alto &&
		this.alto + this.y > rectangulo.y
	);
	}
	aplicarEstiloTemporal(colorHexadecimal) {
	if (!document.getElementById(this.idHTML)) {
		throw new Error(`El ID ${this.idHTML} no existe en la hoja`);
	}
	const element = document.getElementById(this.idHTML);
		element.style.backgroundColor = colorHexadecimal;
		element.style.position = "absolute";
		element.style.left = `${this.x}px`;
		element.style.top = `${this.y}px`;
		element.style.width = `${this.ancho}px`;
		element.style.height = `${this.alto}px`;
		element.style.zIndex = "5";
	}
	mover(x, y) {
	const element = document.getElementById(this.idHTML);
	element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
	}
}
/*
  // Ejemplo de uso
    const miRectangulo = new Rectangulo(10, 20, 30, 40, "miTipo");
    miRectangulo.aplicarEstiloTemporal("#ff0000");
    miRectangulo.mover(50, 60);
*/