/**
 * ==========================================================================
 * BIENVENIDA - CONTROLADOR INTERACTIVO (index.html)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-button');
  const bodyEl = document.getElementById('welcome-body') || document.body;
  const btnLabel = document.getElementById('button-label');
  let isNavigating = false;

  if (enterBtn) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Evitar doble clic
      if (isNavigating) return;
      isNavigating = true;

      // Vibración táctil si el dispositivo lo soporta (móviles)
      if ('vibrate' in navigator) {
        navigator.vibrate(35);
      }

      // Feedback visual inmediato en el botón
      if (btnLabel) {
        btnLabel.textContent = 'Abriendo invitación...';
      }
      enterBtn.classList.add('opacity-90', 'cursor-wait');

      // Animación de salida elegante a toda la página
      bodyEl.classList.add('portal-closing');

      // Redirección suave a invitacion.html (650 ms para sincronizar con la animación)
      setTimeout(() => {
        window.location.href = 'invitacion.html';
      }, 650);
    });
  }

  /* --------------------------------------------------------------------------
     CONTROLADOR DE MÚSICA FLOTANTE (music.gif)
     -------------------------------------------------------------------------- */
  const musicBtn = document.getElementById('floating-music-btn');
  const musicAudio = document.getElementById('wedding-music');

  if (musicBtn && musicAudio) {
    // Si la música ya estaba marcada como activa en la sesión
    const savedPlaying = sessionStorage.getItem('boda_musica_activa');
    if (savedPlaying === 'true') {
      const playPromise = musicAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          musicBtn.classList.remove('is-paused');
          musicBtn.classList.add('is-playing');
          musicBtn.setAttribute('title', 'Pausar música');
        }).catch(() => {
          musicBtn.classList.add('is-paused');
          musicBtn.classList.remove('is-playing');
        });
      }
    }

    musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (musicAudio.paused) {
        musicAudio.play().then(() => {
          musicBtn.classList.remove('is-paused');
          musicBtn.classList.add('is-playing');
          musicBtn.setAttribute('title', 'Pausar música');
          sessionStorage.setItem('boda_musica_activa', 'true');
        }).catch((err) => {
          console.log('Error al reproducir audio:', err);
        });
      } else {
        musicAudio.pause();
        musicBtn.classList.remove('is-playing');
        musicBtn.classList.add('is-paused');
        musicBtn.setAttribute('title', 'Reproducir música');
        sessionStorage.setItem('boda_musica_activa', 'false');
      }
    });
  }
});
