
const mando = {
	objeto: null,
	eventosDisponibles: 'ongamepadconnected' in window,
	conectado: false,
	iniciar() {
		if (mando.eventosDisponibles) {
		window.addEventListener("gamepadconnected", mando.conectar);
		window.addEventListener("gamepaddisconnected", mando.desconectar);
	} else {
		mando.actualizar();
	}
	},
	conectar(evento) {
		mando.objeto = evento.gamepad;
		mando.identificar();
	},
	desconectar(evento) {
	console.log(`Mando desconectado del índice ${evento.gamepad.index}: ${evento.gamepad.id}.`);
	},
	actualizar() {
	if (!mando.eventosDisponibles) {
		let mandos = null;
		try {
		mandos = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
		mando.objeto = mandos[0];
		if (!mando.conectado) {
			mando.conectado = true;
			mando.identificar();
		}
		} catch (exception) {
		console.log(exception.message);
		}
	}
	if (!mando.objeto) {
		return;
	}
	if (mando.botonPulsado(mando.objeto.buttons[0])) {
		console.log("Mando: A");
	}
	},
	botonPulsado(boton) {
		if (typeof(boton) === "object") {
		return boton.pressed;
	}
		return boton === 1.0;
	},
	identificar() {
	console.log(`Mando conectado en el índice ${mando.objeto.index}: ${mando.objeto.id}. ${mando.objeto.buttons.length} botones, ${mando.objeto.axes.length} ejes.`);
	}
};
  mando.iniciar(); // Llama a la función iniciar para configurar los eventos del mando.