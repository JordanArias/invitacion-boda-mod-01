/**
 * ==========================================================================
 * INVITACIÓN PRINCIPAL - CONTROLADOR INTERACTIVO (invitacion.html)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------------------------
     1. CUENTA REGRESIVA DINÁMICA
     -------------------------------------------------------------------------- */
  // Fecha configurada de la boda (09 de Julio de 2025, 16:30 hrs)
  const WEDDING_TARGET = new Date('2025-07-09T16:30:00');

  function updateCountdown() {
    const now = new Date();
    let distance = WEDDING_TARGET.getTime() - now.getTime();

    // Si la fecha ya pasó respecto a la fecha actual del sistema,
    // se proyecta al siguiente 9 de julio para mantener el segundero activo en demostración
    if (distance <= 0) {
      const nextTarget = new Date(now.getFullYear(), 6, 9, 16, 30, 0);
      if (nextTarget <= now) {
        nextTarget.setFullYear(now.getFullYear() + 1);
      }
      distance = nextTarget.getTime() - now.getTime();
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = days < 10 ? '0' + days : days;
    if (hoursEl) hoursEl.textContent = hours < 10 ? '0' + hours : hours;
    if (minutesEl) minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    if (secondsEl) secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* --------------------------------------------------------------------------
     2. COPIAR CUENTA BANCARIA CON TOAST FLOTANTE
     -------------------------------------------------------------------------- */
  const copyBtn = document.getElementById('copy-bank-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const toast = document.getElementById('copy-toast');
  const cciNumber = '00219100987654320885';

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(cciNumber);
        } else {
          // Fallback para navegadores antiguos
          const temp = document.createElement('input');
          temp.value = cciNumber;
          document.body.appendChild(temp);
          temp.select();
          document.execCommand('copy');
          document.body.removeChild(temp);
        }

        // Haptic feedback en móviles
        if ('vibrate' in navigator) navigator.vibrate(25);

        // Feedback en el botón
        if (copyBtnText) {
          const originalText = copyBtnText.textContent;
          copyBtnText.textContent = '¡Copiado con éxito!';
          setTimeout(() => {
            copyBtnText.textContent = originalText;
          }, 2200);
        }

        // Mostrar Toast flotante
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 2600);
        }
      } catch (err) {
        console.error('Error al copiar:', err);
      }
    });
  }

  /* --------------------------------------------------------------------------
     3. LIGHTBOX INTERACTIVO PARA LA GALERÍA
     -------------------------------------------------------------------------- */
  const galleryImages = document.querySelectorAll('.gallery-item img, .polaroid-card img');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (galleryImages.length && lightbox && lightboxImg) {
    galleryImages.forEach((img) => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Fotografía de boda';
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      document.body.style.overflow = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
        closeLightbox();
      }
    });
  }
});
