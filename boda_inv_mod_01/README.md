# 💍 Invitación Digital de Boda - Andrés & Margot
## Módulo 01 (`boda_inv_mod_01`)

Sitio web interactivo y profesional de invitación de boda con diseño editorial de lujo, arquitectura modular limpia y soporte completo **Mobile-First & Responsive** (optimizado para teléfonos, tablets y computadoras de escritorio).

---

## 📂 Estructura Limpia y Modular

```text
boda_inv_mod_01/
├── index.html              # Página 1: Bienvenida interactiva y acceso con transición
├── invitacion.html         # Página 2: Invitación principal completa de la boda
├── css/
│   ├── variables.css       # Paleta de colores, tipografías y micro-animaciones globales
│   ├── bienvenida.css      # Estilos dedicados y responsive para index.html
│   └── invitacion.css      # Estilos dedicados, grids adaptables y responsive para invitacion.html
├── js/
│   ├── bienvenida.js       # Lógica de transición cinemática y navegación a la invitación
│   └── invitacion.js       # Cuenta regresiva, copiado de cuenta bancaria y lightbox de fotos
├── iconos/                 # Animaciones GIF temáticas integradas
│   ├── love.gif            # Sello de amor continuo en portada
│   ├── iglesia.gif         # Ceremonia religiosa e itinerario
│   ├── brindis.gif         # Recepción, fiesta y cóctel
│   ├── Novios_bailando.gif # Vals nupcial en el itinerario
│   └── celebration.gif     # Fiesta y fin de fiesta
├── .gitignore              # Archivos de sistema ignorados
└── README.md               # Documentación y guía de despliegue
```

---

## 🌟 Mejoras Clave Implementadas

1. **Código Separado y Modular**:
   - Se eliminaron los bloques de estilos embebidos en el HTML y se organizaron en ficheros CSS dedicados en la carpeta `css/` con variables CSS para fácil personalización.
   - Todo el JavaScript está desacoplado en ficheros `.js` dentro de la carpeta `js/`.

2. **Diseño Verdaderamente Responsive (Móvil, Tablet y PC)**:
   - **En Móviles (`< 768px`)**: Formato vertical fluido, botones táctiles generosos y aprovechamiento del 100% del ancho de pantalla.
   - **En Tablets (`768px - 1024px`)**: Grid de 2 columnas para Ubicaciones (Ceremonia y Fiesta lado a lado), Regalos (Tienda y Depósito lado a lado) y Vestimenta. Los Padres y Padrinos se disponen en 3 columnas balanceadas.
   - **En PC / Pantallas Grandes (`> 1024px`)**: Contenedor editorial de lectura de hasta 980px con sombras suaves, estética editorial y galería de 4 columnas.

3. **Iconos con Animación Continua sin necesidad de Hover**:
   - `love.gif` en la portada principal se reproduce de forma continua con suave efecto de flotación y resplandor dorado.
   - En las tarjetas de lugares, `iglesia.gif` y `brindis.gif` se visualizan animados de forma permanente.
   - En el itinerario, **todos los eventos cuentan con su icono temático**:
     - 16:30 hrs - Ceremonia Nupcial: `iglesia.gif`
     - 18:00 hrs - Cóctel de Bienvenida: `brindis.gif`
     - 19:30 hrs - Banquete & Cena: Icono de banquete nupcial con microanimación de respiración.
     - 21:00 hrs - Vals & Brindis: `Novios_bailando.gif`
     - 22:00 hrs - Fiesta & Banda: `celebration.gif`

4. **Navegación Real y Fluida**:
   - El botón «Ingresar a mi invitación» en `index.html` ejecuta una animación de salida elegante (escala suave y fade-out de 650 ms) y redirige a `invitacion.html`.
   - Se incluye un enlace superior e inferior en `invitacion.html` para regresar a la portada en cualquier momento.

5. **Lightbox Interactivo**:
   - Al tocar o hacer clic en cualquiera de las fotografías de la galería, se abre un visor modal a pantalla completa para apreciarlas en detalle.

---

## 🚀 Cómo Subir a GitHub y Netlify

### 1. Vincular y Subir a GitHub
```bash
# Desde la carpeta raíz del proyecto:
git add .
git commit -m "feat: modulo boda_inv_mod_01 responsive, modular y animaciones continuas"
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

### 2. Desplegar en Netlify
1. Conecta tu repositorio de GitHub en [Netlify](https://www.netlify.com/).
2. En la configuración del sitio:
   - **Publish directory**: `boda_inv_mod_01` (o la raíz si configuras la subcarpeta).
3. ¡Listo! Tendrás el sitio en producción con certificado SSL inmediato.

