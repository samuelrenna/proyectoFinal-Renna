
const maquinaEstados = {
	estadoActual: null,

	iniciar() {
		this.cambiarEstado(listadoEstados.PANTALLA_TITULO);
	},

	cambiarEstado(nuevoEstado, objetoEntradaLocalizacion) {
		switch (nuevoEstado) {
		case listadoEstados.CARGANDO:
		  // pantalla de carga
			break;

		case listadoEstados.MENU_INICIAL:
		  // menú inicial
			break;

		case listadoEstados.MAPAMUNDI:
			this.estadoActual = new EstadoMapamundi(listadoEstados.MAPAMUNDI, "mapas/desierto48.json", 500, 500);
			break;

		case listadoEstados.NIVEL:
			this.estadoActual = new EstadoMapamundi(
			listadoEstados.NIVEL,
			objetoEntradaLocalizacion.rutaMapa,
			objetoEntradaLocalizacion.coordenadaXInicial,
			objetoEntradaLocalizacion.coordenadaYInicial
		);
		  // audio del nivel
		break;

		case listadoEstados.PANTALLA_TITULO:
			console.log("Iniciando pantalla");
			this.estadoActual = new EstadoPantallaTitulo();
		break;
	}
	},

	actualizar(registroTemporal) {
		if (this.estadoActual) {
			this.estadoActual.actualizar(registroTemporal);
	}
	},

	dibujar() {
		if (this.estadoActual) {
			this.estadoActual.dibujar();
	}
	},
};
