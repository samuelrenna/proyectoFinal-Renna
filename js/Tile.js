class Tile {
	constructor(xEnTiles, yEnTiles, z, ancho, alto, sprite) {
	this.rectangulo = new Rectangulo(xEnTiles, yEnTiles, ancho, alto);
	this.zIndex = z;
	this.sprite = sprite;
	this.idHTML = `x${xEnTiles}y${yEnTiles}z${z}`;
	this.html = `<div id="${this.idHTML}"></div>`;
	}
	aplicarEstilos() {
	if (!document.getElementById(this.idHTML)) {
		throw new Error(`El ID ${this.idHTML} no existe en la hoja`);
	}
	const element = document.getElementById(this.idHTML);
	element.style.position = "absolute";
	element.style.left = `${this.rectangulo.x * this.rectangulo.ancho}px`;
	element.style.top = `${this.rectangulo.y * this.rectangulo.alto}px`;
	element.style.width = `${this.rectangulo.ancho}px`;
	element.style.height = `${this.rectangulo.alto}px`;
	element.style.zIndex = `${this.zIndex}`;
	element.style.background = `url('${this.sprite.rutaHojaOrigen}')`;
	const { x, y } = this.sprite.posicionEnHoja;
		element.style.backgroundPosition = `-${x}px -${y}px`;
		element.style.backgroundClip = "border-box";
		element.style.outline = "1px solid transparent";
	}

	mover(x, y) {
	document.getElementById(this.idHTML).style.transform = `translate3d(${x}px, ${y}px, 0)`;
	}
}
