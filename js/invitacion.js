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
  const WEDDING_TARGET = new Date('2026-12-20T15:00:00');

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
     4. FLORES FLOTANTES EMPUJADAS POR EL VIENTO (flower.png - 20 unidades)
     -------------------------------------------------------------------------- */
  const flowerContainer = document.getElementById('floating-flowers-container');
  if (flowerContainer) {
    // Configuración orgánica de 20 flores flotantes movidas por ráfagas de viento
    const flowerConfigs = [
      { topPercent: 2.0, left: 'clamp(8px, 4vw, 42px)', size: 38, opacity: 0.65, anim: 'windBreeze1', duration: 7.5, delay: 0, speedX: 0.08, speedY: 0.12 },
      { topPercent: 7.0, right: 'clamp(10px, 4.5vw, 48px)', size: 44, opacity: 0.58, anim: 'windBreeze2', duration: 9.0, delay: 1.2, speedX: -0.10, speedY: -0.14 },
      { topPercent: 12.0, left: 'clamp(14px, 5.2vw, 55px)', size: 30, opacity: 0.62, anim: 'windBreeze3', duration: 6.8, delay: 0.5, speedX: 0.11, speedY: 0.15 },
      { topPercent: 17.5, right: 'clamp(8px, 3.8vw, 40px)', size: 42, opacity: 0.52, anim: 'windBreeze4', duration: 8.5, delay: 2.0, speedX: -0.07, speedY: -0.11 },
      { topPercent: 22.5, left: 'clamp(10px, 4vw, 44px)', size: 34, opacity: 0.68, anim: 'windBreeze1', duration: 7.2, delay: 1.5, speedX: 0.09, speedY: 0.13 },
      { topPercent: 27.5, right: 'clamp(12px, 4.8vw, 50px)', size: 36, opacity: 0.55, anim: 'windBreeze2', duration: 8.0, delay: 0.8, speedX: -0.11, speedY: -0.16 },
      { topPercent: 33.0, left: 'clamp(12px, 4.2vw, 45px)', size: 46, opacity: 0.48, anim: 'windBreeze3', duration: 9.5, delay: 2.5, speedX: 0.12, speedY: 0.10 },
      { topPercent: 38.0, right: 'clamp(6px, 3.2vw, 36px)', size: 28, opacity: 0.64, anim: 'windBreeze4', duration: 6.5, delay: 0.3, speedX: -0.08, speedY: -0.12 },
      { topPercent: 43.0, left: 'clamp(10px, 4.6vw, 48px)', size: 40, opacity: 0.56, anim: 'windBreeze1', duration: 8.2, delay: 1.8, speedX: 0.10, speedY: 0.14 },
      { topPercent: 48.0, right: 'clamp(8px, 4vw, 42px)', size: 32, opacity: 0.60, anim: 'windBreeze2', duration: 7.0, delay: 1.0, speedX: -0.12, speedY: -0.15 },
      { topPercent: 53.0, left: 'clamp(6px, 3.2vw, 35px)', size: 42, opacity: 0.50, anim: 'windBreeze3', duration: 8.8, delay: 2.2, speedX: 0.07, speedY: 0.11 },
      { topPercent: 58.5, right: 'clamp(10px, 4.5vw, 48px)', size: 36, opacity: 0.62, anim: 'windBreeze4', duration: 7.6, delay: 0.7, speedX: -0.09, speedY: -0.13 },
      { topPercent: 64.0, left: 'clamp(14px, 5vw, 52px)', size: 30, opacity: 0.58, anim: 'windBreeze1', duration: 6.8, delay: 1.4, speedX: 0.11, speedY: 0.16 },
      { topPercent: 69.0, right: 'clamp(8px, 3.6vw, 38px)', size: 44, opacity: 0.52, anim: 'windBreeze2', duration: 9.2, delay: 2.8, speedX: -0.10, speedY: -0.12 },
      { topPercent: 74.5, left: 'clamp(10px, 4vw, 42px)', size: 35, opacity: 0.66, anim: 'windBreeze3', duration: 7.4, delay: 0.4, speedX: 0.08, speedY: 0.14 },
      { topPercent: 79.5, right: 'clamp(12px, 4.6vw, 48px)', size: 38, opacity: 0.54, anim: 'windBreeze4', duration: 8.4, delay: 1.9, speedX: -0.11, speedY: -0.15 },
      { topPercent: 84.5, left: 'clamp(6px, 3.2vw, 34px)', size: 28, opacity: 0.62, anim: 'windBreeze1', duration: 6.5, delay: 1.1, speedX: 0.12, speedY: 0.13 },
      { topPercent: 89.5, right: 'clamp(10px, 4vw, 44px)', size: 42, opacity: 0.50, anim: 'windBreeze2', duration: 8.7, delay: 2.4, speedX: -0.08, speedY: -0.10 },
      { topPercent: 94.5, left: 'clamp(12px, 4.5vw, 46px)', size: 36, opacity: 0.65, anim: 'windBreeze3', duration: 7.8, delay: 0.9, speedX: 0.10, speedY: 0.15 },
      { topPercent: 98.2, right: 'clamp(8px, 3.8vw, 40px)', size: 40, opacity: 0.68, anim: 'windBreeze4', duration: 8.1, delay: 1.7, speedX: -0.12, speedY: -0.14 }
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
      flowerNodes.push({ el: flower, speedX: cfg.speedX, speedY: cfg.speedY });
    });

    // Parallax orgánico con brisa de viento al hacer scroll hacia abajo
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;
          flowerNodes.forEach((item) => {
            const yOffset = (scrollY * item.speedY) % 95;
            const xOffset = (scrollY * item.speedX) % 45;
            item.el.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     5. REPRODUCTOR DE MÚSICA FLOTANTE (music.gif)
     -------------------------------------------------------------------------- */
  const musicBtn = document.getElementById('floating-music-btn');
  const weddingAudio = document.getElementById('wedding-music');

  if (musicBtn && weddingAudio) {
    // Función para reproducir la música y actualizar el estado visual del botón
    const startAudio = () => {
      const playPromise = weddingAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          musicBtn.classList.remove('is-paused');
          musicBtn.classList.add('is-playing');
          musicBtn.setAttribute('title', 'Pausar música');
          musicBtn.setAttribute('aria-label', 'Pausar música');
          sessionStorage.setItem('boda_musica_activa', 'true');
        }).catch((err) => {
          // Si el navegador bloquea el autoplay por falta de interacción en la pestaña actual,
          // se prepara para arrancar inmediatamente en el primer toque, clic o scroll del usuario
          console.log('Autoplay en espera de primer gesto:', err);
          musicBtn.classList.add('is-paused');
          musicBtn.classList.remove('is-playing');
          musicBtn.setAttribute('title', 'Reproducir música');
          musicBtn.setAttribute('aria-label', 'Reproducir música');

          const activateAudio = () => {
            weddingAudio.play().then(() => {
              musicBtn.classList.remove('is-paused');
              musicBtn.classList.add('is-playing');
              musicBtn.setAttribute('title', 'Pausar música');
              musicBtn.setAttribute('aria-label', 'Pausar música');
              sessionStorage.setItem('boda_musica_activa', 'true');
            }).catch(() => { });
          };

          window.addEventListener('click', activateAudio, { once: true });
          window.addEventListener('touchstart', activateAudio, { once: true });
          window.addEventListener('scroll', activateAudio, { once: true });
        });
      }
    };

    // Reproducir música por defecto al comenzar en invitacion.html
    startAudio();

    // Alternar pausar / reproducir al hacer clic en el botón flotante
    musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (weddingAudio.paused) {
        weddingAudio.play().then(() => {
          musicBtn.classList.remove('is-paused');
          musicBtn.classList.add('is-playing');
          musicBtn.setAttribute('title', 'Pausar música');
          musicBtn.setAttribute('aria-label', 'Pausar música');
          sessionStorage.setItem('boda_musica_activa', 'true');
        }).catch((err) => {
          console.log('Error al reproducir audio:', err);
        });
      } else {
        weddingAudio.pause();
        musicBtn.classList.remove('is-playing');
        musicBtn.classList.add('is-paused');
        musicBtn.setAttribute('title', 'Reproducir música');
        musicBtn.setAttribute('aria-label', 'Reproducir música');
        sessionStorage.setItem('boda_musica_activa', 'false');
      }
    });
  }
});

