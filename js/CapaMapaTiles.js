
class CapaMapaTiles {
	constructor(datosCapa, indiceZ, anchoDeLosTiles, altoDeLosTiles, paletasSprites) {
	this.anchoEnTiles = parseInt(datosCapa.width);
	this.altoEnTiles = parseInt(datosCapa.height);
	this.x = parseInt(datosCapa.x);
	this.y = parseInt(datosCapa.y);
	this.z = indiceZ;
	this.tiles = [];
	for (let y = 0; y < this.altoEnTiles; y++) {
		for (let x = 0; x < this.anchoEnTiles; x++) {
		  const idSpriteActualSobreUno = datosCapa.data[x + y * this.anchoEnTiles];
		if (idSpriteActualSobreUno === 0) {
			this.tiles.push(null);
		} else {
			const spriteActual = this.encontrarSpriteEnPaletaPorId(idSpriteActualSobreUno - 1, paletasSprites);
			this.tiles.push(new Tile(x, y, indiceZ, anchoDeLosTiles, altoDeLosTiles, spriteActual));
				}
			}
		}
	}
	encontrarSpriteEnPaletaPorId(idSpriteSobreZero, paletasSprites) {
	for (let s = 0; s < paletasSprites.length; s++) {
		if (
		idSpriteSobreZero >= paletasSprites[s].primerSpriteSobreUno - 1 &&
		idSpriteSobreZero < paletasSprites[s].totalSprites + paletasSprites[s].primerSpriteSobreUno + 1
		) {
		return paletasSprites[s].sprites[
			Math.abs(paletasSprites[s].primerSpriteSobreUno - 1 - idSpriteSobreZero)
		];
		}
	}
		throw new Error(`El ID sobre ZERO ${idSpriteSobreZero} del sprite no existe en ninguna paleta`);
	}
}
