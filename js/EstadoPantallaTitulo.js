
class EstadoPantallaTitulo {
    constructor() {
        this.rutaImagenTitulo = "img/titulo.png";
        this.idHTML = "pantalla-titulo";
        this.anchoImagen = "500";
        this.altoImagen = "300";
        this.movimientoY = 0;
        this.framesAnimacion = 0;

        // input y el botón del nombre de usuario
        this.inputNombre = document.createElement('input');
        this.inputNombre.type = 'text';
        this.inputNombre.placeholder = 'Ingresa tu nombre';
        this.inputNombre.style.padding = '10px';
        this.inputNombre.style.marginBottom = '10px';

        this.botonComenzar = document.createElement('button');
        this.botonComenzar.textContent = 'Comenzar';
        this.botonComenzar.style.padding = '10px';
        this.botonComenzar.style.backgroundColor = '#3498db';
        this.botonComenzar.style.color = 'white';
        this.botonComenzar.style.border = 'none';
        this.botonComenzar.style.cursor = 'pointer';

        // lo declaramos en const para poder usarlo en la validación y para evitar problemas de contexto y errores
        const self = this;

        // estilos para enviar al documento
        const pantallaTituloElement = document.getElementById(this.idHTML);
        pantallaTituloElement.appendChild(this.inputNombre);
        pantallaTituloElement.appendChild(this.botonComenzar);

        pantallaTituloElement.style.position = "absolute";
        pantallaTituloElement.style.width = this.anchoImagen + "px";
        pantallaTituloElement.style.height = this.altoImagen + "px";
        pantallaTituloElement.style.background = "url('" + this.rutaImagenTitulo + "')";
        pantallaTituloElement.style.backgroundClip = "border-box";
        pantallaTituloElement.style.outline = "1px solid transparent";
        pantallaTituloElement.style.transform = 'translate3d(' + (dimensiones.ancho / 2 - this.anchoImagen / 2) + 'px, ' + (dimensiones.alto / 2 - this.altoImagen / 2) + 'px, 0)';

        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";

        // audio.reproducir(audio.pista1);

        // click en la pantalla para agregar nombre de usuario en localstorage 
        pantallaTituloElement.onclick = function (event) {
            // verifica si el click se hizo en el input o el botón
            if (event.target === self.inputNombre || event.target === self.botonComenzar) {
                return;
            }

            pantallaTituloElement.style.display = "none";

            // sirve para evitar problemas como que le doy a cualquier parte o selecciono el input y pasa de pantalla
            pantallaTituloElement.onclick = null;

            maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
        }

        // botón Comenzar
        this.botonComenzar.addEventListener('click', async () => {
            const nombreUsuario = this.inputNombre.value;

            // obtener los nombres de manera local desde la API de Star wars
            async function obtenerNombresLocales() {
                const nombresAlmacenados = localStorage.getItem('nombresSWAPI');

                if (nombresAlmacenados) {
                    return JSON.parse(nombresAlmacenados);
                } else {
                    const respuesta = await fetch('https://swapi.dev/api/people/');
                    const datos = await respuesta.json();
                    const nombres = datos.results.map(personaje => personaje.name);

                    localStorage.setItem('nombresSWAPI', JSON.stringify(nombres));

                    return nombres;
                }
            }

            async function obtenerNombreAleatorio() {
                const nombres = await obtenerNombresLocales();
                const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
                return nombreAleatorio;
            }

            try {
                const nombreUsuarioA = await obtenerNombreAleatorio();

                if (nombreUsuario.trim() === '') {
                    Swal.fire({
                        icon: 'error',
                        title: `${nombreUsuarioA} te comunica`,
                        text: 'El campo no puede estar vacío. Por favor, ingresa tu nombre.'
                    });
                    return;
                }

                const soloLetras = /^[A-Za-z]+$/;
                if (!soloLetras.test(nombreUsuario)) {
                    Swal.fire({
                        icon: 'error',
                        title: `${nombreUsuarioA} te comunica`,
                        text: 'El nombre no debe contener números ni caracteres especiales. Por favor, ingresa tu nombre correctamente.'
                    });
                    return;
                }

                localStorage.setItem('nombreUsuario', nombreUsuario);
                maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);

            } catch (error) {
                console.error('Error al obtener nombre aleatorio:', error);
            }
        });
    }

    actualizar(registroTemporal) {
        // por los momentos no usare la animacion

        // if (this.framesAnimacion < 30) {
        //     this.movimientoY++;
        // } else if (this.framesAnimacion >= 30 && this.framesAnimacion < 90) {
        //     this.movimientoY--;
        // } else if (this.framesAnimacion >= 90 && this.framesAnimacion < 120) {
        //     this.movimientoY++;
        // }

        // this.framesAnimacion++;

        // if (this.framesAnimacion >= 120) {
        //     this.framesAnimacion = 0;
        //     this.movimientoY = 0;
        // }
    }

    dibujar() {
        const pantallaTitulo = document.getElementById(this.idHTML);
        pantallaTitulo.style.transform = `translate3d(${dimensiones.ancho / 2 - this.anchoImagen / 2}px, ${dimensiones.alto / 2 - this.altoImagen / 2 + this.movimientoY}px, 0)`;
    }
}
