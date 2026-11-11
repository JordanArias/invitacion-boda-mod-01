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

      // Guardar indicación de que la música debe iniciar al entrar a la invitación
      sessionStorage.setItem('boda_musica_activa', 'true');

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
});
