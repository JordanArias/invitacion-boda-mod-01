/**
 * ==========================================================================
 * INVITACIÓN PRINCIPAL - CONTROLADOR INTERACTIVO (invitacion.html)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------------------------
     1. CUENTA REGRESIVA DINÁMICA
     -------------------------------------------------------------------------- */
  // Fecha configurada de la boda (09 de Julio de 2025, 15:00 hrs)
  const WEDDING_TARGET = new Date('2025-07-09T15:00:00');

  function updateCountdown() {
    const now = new Date();
    let distance = WEDDING_TARGET.getTime() - now.getTime();

    // Si la fecha ya pasó respecto a la fecha actual del sistema,
    // se proyecta al siguiente 9 de julio para mantener el segundero activo en demostración
    if (distance <= 0) {
      const nextTarget = new Date(now.getFullYear(), 6, 9, 15, 0, 0);
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

  /* --------------------------------------------------------------------------
     4. FLORES FLOTANTES EN EL FONDO (flower.png - 10 unidades sutiles)
     -------------------------------------------------------------------------- */
  const flowerContainer = document.getElementById('floating-flowers-container');
  if (flowerContainer) {
    // Configuración estética y balanceada de 10 flores a lo largo de la página
    const flowerConfigs = [
      { topPercent: 3.5, left: 'clamp(8px, 4vw, 40px)', size: 34, opacity: 0.65, anim: 'flowerDrift1', duration: 7, delay: 0, speed: 0.12 },
      { topPercent: 12.5, right: 'clamp(8px, 4vw, 40px)', size: 40, opacity: 0.55, anim: 'flowerDrift2', duration: 8.5, delay: 1, speed: -0.15 },
      { topPercent: 22.0, left: 'clamp(10px, 3.5vw, 36px)', size: 30, opacity: 0.60, anim: 'flowerDrift3', duration: 6.5, delay: 0.5, speed: 0.16 },
      { topPercent: 33.0, right: 'clamp(12px, 4.5vw, 45px)', size: 44, opacity: 0.50, anim: 'flowerDrift1', duration: 9, delay: 2, speed: -0.10 },
      { topPercent: 43.5, left: 'clamp(8px, 4vw, 38px)', size: 36, opacity: 0.58, anim: 'flowerDrift2', duration: 7.5, delay: 1.5, speed: 0.14 },
      { topPercent: 54.0, right: 'clamp(10px, 3.8vw, 38px)', size: 32, opacity: 0.62, anim: 'flowerDrift3', duration: 6, delay: 0.8, speed: -0.15 },
      { topPercent: 65.0, left: 'clamp(12px, 4.2vw, 42px)', size: 42, opacity: 0.52, anim: 'flowerDrift1', duration: 8, delay: 1.2, speed: 0.11 },
      { topPercent: 76.0, right: 'clamp(8px, 4vw, 40px)', size: 36, opacity: 0.60, anim: 'flowerDrift2', duration: 7, delay: 2.2, speed: -0.13 },
      { topPercent: 86.5, left: 'clamp(10px, 3.5vw, 36px)', size: 32, opacity: 0.55, anim: 'flowerDrift3', duration: 8.5, delay: 0.3, speed: 0.14 },
      { topPercent: 96.0, right: 'clamp(10px, 4vw, 40px)', size: 38, opacity: 0.65, anim: 'flowerDrift1', duration: 6.8, delay: 1.8, speed: -0.12 }
    ];

    const flowerNodes = [];

    flowerConfigs.forEach((cfg) => {
      const flower = document.createElement('div');
      flower.className = 'floating-flower-item';
      flower.style.top = `${cfg.topPercent}%`;
      if (cfg.left) flower.style.left = cfg.left;
      if (cfg.right) flower.style.right = cfg.right;
      flower.style.width = `${cfg.size}px`;
      flower.style.height = `${cfg.size}px`;
      flower.style.opacity = cfg.opacity;
      flower.style.animation = `${cfg.anim} ${cfg.duration}s ease-in-out infinite alternate`;
      flower.style.animationDelay = `${cfg.delay}s`;

      const img = document.createElement('img');
      img.src = 'iconos/flower.png';
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      flower.appendChild(img);

      flowerContainer.appendChild(flower);
      flowerNodes.push({ el: flower, speed: cfg.speed });
    });

    // Parallax suave de fondo al hacer scroll hacia abajo
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;
          flowerNodes.forEach((item) => {
            const yOffset = (scrollY * item.speed) % 90;
            item.el.style.transform = `translateY(${yOffset}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     5. REPRODUCTOR DE MÚSICA NUPCIAL (Music.gif)
     -------------------------------------------------------------------------- */
  const musicBtn = document.getElementById('music-toggle-btn');
  const weddingAudio = document.getElementById('wedding-audio');

  if (musicBtn && weddingAudio) {
    musicBtn.addEventListener('click', () => {
      if (weddingAudio.paused) {
        weddingAudio.play().then(() => {
          musicBtn.classList.add('playing');
          musicBtn.setAttribute('aria-pressed', 'true');
          const label = musicBtn.querySelector('.music-widget-label');
          if (label) label.textContent = 'Pausar';
        }).catch((err) => {
          console.log('Reproducción evitada por política de navegador:', err);
        });
      } else {
        weddingAudio.pause();
        musicBtn.classList.remove('playing');
        musicBtn.setAttribute('aria-pressed', 'false');
        const label = musicBtn.querySelector('.music-widget-label');
        if (label) label.textContent = 'Música';
      }
    });
  }
});

