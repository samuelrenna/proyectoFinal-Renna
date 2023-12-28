
class PaletaSprites {
	constructor(datosSprites) {
		this.rutaImagen = datosSprites.image;
		this.anchoImagen = parseInt(datosSprites.imagewidth);
		this.altoImagen = parseInt(datosSprites.imageheight);
		this.anchoSprites = parseInt(datosSprites.tilewidth);
		this.altoSprites = parseInt(datosSprites.tileheight);
		this.primerSpriteSobreUno = parseInt(datosSprites.firstgid);
		this.anchoImagenMedidoEnSprites = this.anchoImagen / this.anchoSprites;
		this.altoImagenMedidoEnSprites = this.altoImagen / this.altoSprites;
	  	this.totalSprites = this.anchoImagenMedidoEnSprites * this.altoImagenMedidoEnSprites;
		this.sprites = [];

		for (let s = 0; s < this.totalSprites; s++) {
			const idActualSobreZero = this.primerSpriteSobreUno - 1 + s;
			this.sprites.push(new Sprite(this.rutaImagen, idActualSobreZero, this.obtenerPosicionDesdeIdSprite(idActualSobreZero)));
	}
	}

	obtenerPosicionDesdeIdSprite(idSpriteSobreZero) {
		const y = Math.floor(idSpriteSobreZero / this.anchoImagenMedidoEnSprites);
		const x = idSpriteSobreZero % this.anchoImagenMedidoEnSprites;
	  		return new Punto(x * this.anchoSprites, y * this.altoSprites);
	}
}