class Mapa {
	constructor(objetoJSON, estadoJuego) {
		this.estadoJuego = estadoJuego;
		this.posicion = new Punto(0, 0);
		this.posicionActualizada = new Punto(0, 0);
	const rutaCompletaImagenFondo = objetoJSON.tilesets[0].image;
	const rutaImagenFondo = rutaCompletaImagenFondo.split("/");
	const nombreImagenFondo = rutaImagenFondo[rutaImagenFondo.length - 1];
	const nombreMapa = nombreImagenFondo.split(".");
		if (this.estadoJuego === listadoEstados.MAPAMUNDI) {
		this.rutaImagenMapa = `img/${nombreMapa[0]}.mapa.png`;
	}
		if (this.estadoJuego === listadoEstados.NIVEL) {
		this.rutaImagenMapa = `img/${nombreMapa[0]}.nivel.png`;
	}

	this.anchoMedidoEnTiles = parseInt(objetoJSON.width);
	this.altoMedidoEnTiles = parseInt(objetoJSON.height);
	this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth);
	this.altoDeLosTiles = parseInt(objetoJSON.tileheight);

		this.rectangulosColisiones = [];
		this.rectangulosLocalizaciones = [];
		this.iniciarCapas(objetoJSON.layers);
		this.iniciarElementosMapa();
		this.limiteMapa = new Rectangulo(
		this.posicion.x,
		this.posicion.y,
		this.anchoMedidoEnTiles * this.anchoDeLosTiles,
		this.altoMedidoEnTiles * this.altoDeLosTiles,
		"colision"
	);
	}
	iniciarCapas(datosCapas) {
		for (const capa of datosCapas) {
			if (capa.name === "colisiones") {
				console.log("capa colisiones");
		for (const objeto of capa.objects) {
			this.rectangulosColisiones.push(
				new Rectangulo(
				objeto.x,
				objeto.y,
				objeto.width,
				objeto.height,
				"colision"
			)
			);
		}
		}
		if (capa.name === "localizaciones") {
			for (const objeto of capa.objects) {
				this.rectangulosLocalizaciones.push(
				new Localizacion(
				new Rectangulo(
				objeto.x,
				objeto.y,
				objeto.width,
				objeto.height,
				"localizacion"
				),
				objeto.name
			)
			);
		}
		}
	}
	}

	iniciarElementosMapa() {
	  		const anchoMapaEnPixeles = this.anchoMedidoEnTiles * this.anchoDeLosTiles;
	  		const altoMapaEnPixeles = this.altoMedidoEnTiles * this.altoDeLosTiles;

		const idHTML = "mapa";
		const mapaElement = document.getElementById(idHTML);
		mapaElement.style.position = "absolute";
		mapaElement.style.width = `${anchoMapaEnPixeles}px`;
		mapaElement.style.height = `${altoMapaEnPixeles}px`;
		mapaElement.style.background = `url('${this.rutaImagenMapa}')`;
		mapaElement.style.backgroundClip = "border-box";
		mapaElement.style.outline = "1px solid transparent";

		this.aplicarEstilosElementos(this.rectangulosColisiones, "colisiones");
		this.aplicarEstilosElementos(
		this.rectangulosLocalizaciones.map((loc) => loc.rectangulo),
		"localizaciones"
		);

		if (debug.debugging) {
			this.aplicarEstiloTemporal(this.rectangulosColisiones, "#ff0000");
			this.aplicarEstiloTemporal(
			this.rectangulosLocalizaciones.map((loc) => loc.rectangulo),
			"#00ff00"
		);
	}

		document.body.style.overflow = "hidden";
		document.body.style.backgroundColor = "black";
	}

	aplicarEstilosElementos(elementos, idHTML) {
		const html = elementos.map((elemento) => elemento.html).join("");
		document.getElementById(idHTML).innerHTML = html;
	}

	aplicarEstiloTemporal(elementos, color) {
		for (const elemento of elementos) {
		elemento.aplicarEstiloTemporal(color);
		}
	}

	actualizar(registroTemporal, posicionJugadorEnPixeles) {
		this.posicion.x = posicionJugadorEnPixeles.x;
		this.posicion.y = posicionJugadorEnPixeles.y;

		this.limiteMapa.x = this.posicion.x;
		this.limiteMapa.y = this.posicion.y;
	}

	dibujar() {
		const mapaElement = document.getElementById("mapa");
		mapaElement.style.transform = `translate3d(${this.posicion.x}px, ${this.posicion.y}px, 0)`;

		if (debug.debugging) {
				this.moverElementos(this.rectangulosColisiones, this.posicion.x, this.posicion.y);
			this.moverElementos(
			this.rectangulosLocalizaciones.map((loc) => loc.rectangulo),
			this.posicion.x,
			this.posicion.y
		);
	}
	}

	moverElementos(elementos, offsetX, offsetY) {
	for (const elemento of elementos) {
		elemento.mover(offsetX, offsetY);
	}
	}
}
