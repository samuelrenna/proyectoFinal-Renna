
const controles = {
	arriba: false,
	abajo: false,
	izquierda: false,
	derecha: false,
	actualizar() {
		this.arriba = teclado.teclaPulsada(controlesTeclado.arriba);
		this.abajo = teclado.teclaPulsada(controlesTeclado.abajo);
		this.izquierda = teclado.teclaPulsada(controlesTeclado.izquierda);
		this.derecha = teclado.teclaPulsada(controlesTeclado.derecha);
		this.mostrarEstado();
	},
	reiniciar() {
		this.arriba = false;
		this.abajo = false;
		this.izquierda = false;
		this.derecha = false;
	},
	mostrarEstado() {
	const { arriba, abajo, izquierda, derecha } = this;
		if (arriba) console.log("arriba");
		if (abajo) console.log("abajo");
		if (izquierda) console.log("izquierda");
		if (derecha) console.log("derecha");
	},
};
  // simplificar el acceso a las propiedades
  // Esto permite usar directamente arriba, abajo, izquierda, derecha en vez de this.arriba y los otros this.
	const { actualizar, reiniciar } = controles;
		actualizar();
		reiniciar();
