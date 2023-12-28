
const dimensiones = {
	ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
	ladoTiles: 100,
	escala: 1,
	iniciar() {
		window.addEventListener("resize", () => {
		this.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		this.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	});
	},
	obtenerTilesHorizontales() {
	  const ladoFinal = this.ladoTiles * this.escala;
		return Math.ceil((this.ancho - ladoFinal) / ladoFinal);
	},
	obtenerTilesVerticales() {
	  	const ladoFinal = this.ladoTiles * this.escala;
		return Math.ceil((this.alto - ladoFinal) / ladoFinal);
	},
	obtenerTotalTiles() {
	  return this.obtenerTilesHorizontales() * this.obtenerTilesVerticales();
	}
};

	dimensiones.iniciar();