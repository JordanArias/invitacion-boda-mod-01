/**
 * ==========================================================================
 * BIENVENIDA - CONTROLADOR INTERACTIVO (index.html)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-button');
  const cardContainer = document.getElementById('invite-card');
  const btnLabel = document.getElementById('button-label');
  let isNavigating = false;

  if (enterBtn && cardContainer) {
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

      // Animación de salida elegante (escala suave + desvanecimiento + desenfoque leve)
      cardContainer.classList.add('portal-closing');

      // Redirección suave a invitacion.html (650 ms para sincronizar con la animación)
      setTimeout(() => {
        window.location.href = 'invitacion.html';
      }, 650);
    });
  }
});
