const teclado = {
	teclas: [],
	iniciar() {
		document.addEventListener('keydown', teclado.guardarTecla);
		document.addEventListener('keyup', teclado.borrarTecla);
	},
	guardarTecla(e) {
		if (!teclado.teclas.includes(e.key)) {
		teclado.teclas.push(e.key);
	}
	},
	borrarTecla(e) {
		const posicion = teclado.teclas.indexOf(e.key);
			if (posicion !== -1) {
				teclado.teclas.splice(posicion, 1);
	}
	},
	teclaPulsada(codigoTecla) {
		return teclado.teclas.includes(codigoTecla);
	}
};

	teclado.iniciar(); // Llama a la función iniciar para configurar los eventos del teclado.
