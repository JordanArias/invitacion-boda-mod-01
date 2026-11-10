# 💍 Invitación Digital de Boda - Andrés & Margot

Sitio web interactivo y profesional de invitación de boda con diseño editorial de lujo, arquitectura modular limpia y soporte completo **Mobile-First & Responsive** (optimizado para teléfonos, tablets y computadoras de escritorio).

---

## 📂 Estructura del Proyecto

```text
boda_mod–01/
├── index.html              # Pantalla 1: Bienvenida interactiva, monograma y acceso con transición
├── invitacion.html         # Pantalla 2: Invitación principal completa de la boda
├── css/
│   ├── variables.css       # Paleta de colores, tipografías, botón de música y micro-animaciones
│   ├── bienvenida.css      # Estilos dedicados y responsive para index.html
│   └── invitacion.css      # Estilos dedicados, grids, itinerario, galería y regalos para invitacion.html
├── js/
│   ├── bienvenida.js       # Transición cinemática y control del reproductor de música
│   └── invitacion.js       # Cuenta regresiva, lightbox, 20 flores con viento y reproductor
├── audio/
│   └── cancion_boda.mp3    # Canción de fondo de la boda ("Todo lo que hago lo hago por ti")
├── iconos/                 # Animaciones GIF temáticas e iconos
│   ├── music.gif           # Botón flotante de música fijo a la pantalla
│   ├── flower.png          # 20 flores flotantes mecidas por el viento en el scroll
│   ├── love.gif            # Sello de amor continuo en portada
│   ├── iglesia.gif         # Ceremonia religiosa e itinerario
│   ├── celebration.gif     # Recepción y fiesta
│   ├── Novios_bailando.gif # Entrada de recién casados en el itinerario
│   ├── brindis.gif         # Brindis y música
│   ├── dinner.gif          # Cena en el itinerario
│   ├── party.gif           # ¡Fiesta! en el itinerario
│   └── regalo.gif          # Sugerencia de regalos
├── img/                    # Gráficos vectoriales e imágenes
│   ├── novios_hero.svg     # Fotografía principal en portada
│   ├── qr_transferencia.svg# Código QR de transferencia bancaria
│   ├── foto_polaroid.svg   # Foto Polaroid inclinada
│   └── foto_1.svg a 4.svg  # Galería de recuerdos
├── .gitignore              # Archivos de sistema ignorados
└── README.md               # Documentación y guía de despliegue
```

---

## 🌟 Características Destacadas

1. **Diseño Web Responsivo (Móvil, Tablet y PC)**:
   - En pantallas móviles (< 768px): Navegación vertical fluida, botones táctiles generosos y control estricto de desbordamiento horizontal.
   - En tablets y computadoras: Grids balanceados de 2 y 3 columnas para ubicaciones, vestimenta, galería y sugerencia de regalos.

2. **Itinerario Alternante con GIFs Puros**:
   - 6 eventos alternados (izquierda/derecha) con sus respectivos GIFs animados en bucle continuo, sin fondos ni bordes artificiales:
     1. 15:00 hrs - Ceremonia religiosa (`iglesia.gif`)
     2. 16:30 hrs - Recepción y mesa de charcutería (`celebration.gif`)
     3. 17:10 hrs - Entrada de los recién casados (`Novios_bailando.gif`)
     4. 17:30 hrs - Brindis y música (`brindis.gif`)
     5. 19:30 hrs - Cena (`dinner.gif`)
     6. 20:30 hrs - ¡Fiesta! (`party.gif`)

3. **Sugerencia de Regalos con Código QR**:
   - Encabezado con `regalo.gif` animado.
   - Frase emotiva de agradecimiento.
   - Tarjeta destacada **Transferencia QR** con gráfico `qr_transferencia.svg`, datos BCP (Cuenta Soles y CCI) y botón interactivo para copiar con notificación flotante (*toast*).
   - Acceso alternativo a la Mesa de Novios Falabella.

4. **20 Flores Flotantes Mecidas por el Viento (`flower.png`)**:
   - 20 instancias distribuidas a lo largo de toda la página que flotan orgánicamente con ráfagas de viento (desplazamiento en X, Y y rotación) y responden al desplazamiento (*scroll*).

5. **Reproductor de Música Fijo a la Pantalla (`music.gif`)**:
   - Botón flotante circular en la esquina inferior derecha con borde redondeado suave translúcido.
   - Acompaña al usuario en todo el recorrido de la pantalla.
   - Al presionar reproduce la canción MP3 nupcial; al presionar de nuevo la pausa.
   - Memoria de sesión entre la pantalla de bienvenida y la invitación principal.

---

## 🚀 Despliegue en GitHub y Netlify

Al estar todos los archivos organizados directamente en la raíz:
- **Netlify**: Basta con vincular el repositorio de GitHub. El directorio de publicación (*Publish directory*) es la raíz (`.`).
- **GitHub Pages**: En la configuración del repositorio, selecciona la rama `main` y la carpeta `/ (root)`.
