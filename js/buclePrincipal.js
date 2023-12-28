//namespace - espacio de nombres
//main loop - bucle principal
//aps - actualizaciones por segundo
//fps - frames por segundo
//callback
//1s = 1000ms

const buclePrincipal = {
	idEjecucion: null,
	ultimoRegistro: 0,
	aps: 0,
	fps: 0,
	iterar(registroTemporal) {
		buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
		buclePrincipal.actualizar(registroTemporal);
		buclePrincipal.dibujar();

	if (registroTemporal - buclePrincipal.ultimoRegistro > 999) {
		buclePrincipal.ultimoRegistro = registroTemporal;
		console.log(`APS: ${buclePrincipal.aps} | FPS: ${buclePrincipal.fps}`);
		buclePrincipal.aps = 0;
		buclePrincipal.fps = 0;
	}
	},
	detener() {
	  // codigo para detener el bucle principal si es necesario.
	},
	actualizar(registroTemporal) {
		mando.actualizar();
		maquinaEstados.actualizar(registroTemporal);
		buclePrincipal.aps++;
	},
	dibujar(registroTemporal) {
		maquinaEstados.dibujar();
		buclePrincipal.fps++;
	}
};
  // bucle principal llamando a la función iterar.
	buclePrincipal.iterar();
