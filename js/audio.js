  const audio = {
    musica: null,
    pista1: "audio/393818_sirkoto51_retro-game-overworld-loop-1.mp3",
  
    async reproducir(rutaPista) {
      try {
        if (audio.musica !== null) {
          audio.musica.pause();
          audio.musica.src = "audio/393818_sirkoto51_retro-game-overworld-loop-1.mp3";
        }
  
        audio.musica = await cargarAudioAsync(rutaPista);
        audio.musica.play();
      } catch (error) {
        console.error("Error al reproducir la pista de audio:", error);
      }
    },
  };
  
  function cargarAudioAsync(rutaPista) {
    return new Promise((resolve, reject) => {
      const audioElement = new Audio();
  
      audioElement.addEventListener("canplaythrough", () => {
        resolve(audioElement);
      });
  
      audioElement.addEventListener("error", (error) => {
        reject(error);
      });
  
      audioElement.src = rutaPista;
    });
  }
  
  async function ejecutar() {
    await audio.reproducir(audio.pista1);
  }

  ejecutar();