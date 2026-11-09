# 💍 Invitación Digital de Boda - Andrés & Margot

Sitio web interactivo de invitación de boda con diseño editorial, elegante y romántico. Construido con arquitectura **Mobile-First**, diseño responsivo y sin dependencias complejas, listo para ser alojado en **Netlify** o **GitHub Pages**.

---

## 📁 Estructura del Proyecto

```text
├── index.html          # Página 1: Bienvenida interactiva y acceso con transición elegante
├── invitacion.html     # Página 2: Invitación principal completa de la boda
├── iconos/             # Animaciones GIF temáticas integradas
│   ├── love.gif            # Sello de amor en portada
│   ├── iglesia.gif         # Ceremonia religiosa e itinerario
│   ├── brindis.gif         # Recepción, fiesta y cóctel
│   ├── Novios_bailando.gif # Vals nupcial en el itinerario
│   └── celebration.gif     # Fiesta y fin de fiesta
├── Detalle_Tecnico.txt # Especificaciones técnicas del proyecto
├── .gitignore          # Exclusiones de archivos del sistema
└── README.md           # Documentación y guía de despliegue
```

---

## ✨ Características Principales

1. **Página de Bienvenida (`index.html`)**:
   - Textura de lino y papel artesanal de lujo.
   - Corona botánica circular en SVG con hojas de eucalipto y olivo.
   - Monograma caligráfico de los novios (*A y M*).
   - Indicador animado y botón *«Ingresar a mi invitación»*.
   - **Transición cinemática**: Animación de escala, desvanecimiento y redirección real en 650 ms hacia `invitacion.html`.

2. **Página Principal de Invitación (`invitacion.html`)**:
   - **Portada**: Fotografía nupcial con degradado, frase romántica, marco botánico y detalle animado `love.gif`.
   - **Bendición Familiar**: Nombres de padres y padrinos de velación con tipografía *Cormorant Garamond*.
   - **Cuenta Regresiva & Calendario**: Cronómetro en vivo con días, horas, minutos y segundos, más enlace para agendar directamente en Google Calendar.
   - **Lugares**: Tarjetas con `iglesia.gif` y `brindis.gif`, direcciones y botones directos a Google Maps.
   - **Itinerario Interactivo**: Línea de tiempo vertical con nodos animados (`Novios_bailando.gif`, `celebration.gif`, etc.).
   - **Galería de Recuerdos**: Fotografía estilo polaroid inclinada y mosaico editorial.
   - **Código de Vestimenta**: Indicaciones formales y nota de recepción solo adultos.
   - **Mesa de Regalos**: Información de mesa en tienda y depósito BCP con botón de un clic para copiar número de cuenta y notificación toast visual (sin alert intrusivo).
   - **Confirmación R.S.V.P.**: Botón de confirmación directa a WhatsApp con mensaje pre-redactado.
   - **Botón de Retorno**: Permite volver a la portada en cualquier momento.

3. **Tecnología Ligera y Fácil de Modificar**:
   - **HTML5 + Tailwind CSS v3** (vía CDN): Sin necesidad de `npm install`, Node.js o procesos de compilación.
   - **JavaScript Vanilla**: Funciona nativamente en cualquier navegador y dispositivo.
   - **Mobile-First & Responsive**: Optimizado para teléfonos (dimensiones tipo app) y centrado con marco refinado en pantallas de escritorio y tablets.

---

## 🛠️ Cómo Personalizar Datos

- **Nombres y Frases**: Edita directamente los textos dentro de `index.html` e `invitacion.html`.
- **Fecha del Evento**:
  - En `invitacion.html`, localiza en el `<script>`:
    ```javascript
    const WEDDING_TARGET_DATE = new Date('2025-07-09T16:30:00');
    ```
- **Cuenta Bancaria**: En `invitacion.html`, edita la constante `cciNumber` y los textos de la sección de regalos.
- **Número de WhatsApp**: En la sección RSVP de `invitacion.html`, reemplaza el enlace `https://api.whatsapp.com/send?phone=...` con el número telefónico de los novios.

---

## 🚀 Despliegue en GitHub y Netlify

### 1. Subir a GitHub
El repositorio Git local ya está inicializado. Para vincularlo con tu cuenta de GitHub:

```bash
# 1. Crea un repositorio vacío en github.com (ej: boda-andres-margot)
# 2. Conecta y sube el repositorio:
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

### 2. Desplegar en Netlify
Como es un sitio web estático (HTML/CSS/JS nativo):
1. Inicia sesión en [Netlify](https://www.netlify.com/).
2. Haz clic en **"Add new site"** > **"Import an existing project"**.
3. Selecciona **GitHub** y escoge tu repositorio.
4. **Configuración de compilación**:
   - *Build command*: (dejar vacío)
   - *Publish directory*: `.` (o dejar la raíz vacía)
5. Haz clic en **Deploy Site**. ¡Tu invitación estará activa en segundos con certificado SSL gratis!
