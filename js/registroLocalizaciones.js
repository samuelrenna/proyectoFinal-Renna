
const registroLocalizaciones = {
    obtenerLocalizacion: function(nombreLocalizacion) {
    const localizaciones = [
        new RegistroLocalizacionEntrada("Rockport", "niveles/villa48.json", "img/villa48.nivel.png", 0, 630)
    ];
    return localizaciones.find(localizacion => localizacion.nombre === nombreLocalizacion);
}
};
