# Emunáh - Landing Page

Landing page elegante y minimalista para Emunáh, empresa especializada en servicios de catering, renta de mobiliario para eventos, mantelería y música en vivo.

## 🎯 Características

- **Diseño Minimalista Elegante**: Inspirado en estética de alta gama con tipografías elegantes
- **Responsive**: Totalmente adaptable a dispositivos móviles, tablets y desktop
- **Menú Mobile Deslizable**: Navegación lateral que se desliza desde la izquierda
- **Paleta de Colores Personalizada**: Tonos tierra, beige, negro y taupe
- **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- **Hero Section con Efecto**: Título grande con efecto de gradiente animado
- **Galería de Fotos**: Grid responsive para mostrar eventos
- **Formulario de Contacto**: Interfaz limpia para cotizaciones

## 🚀 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados con animaciones
- **Tailwind CSS**: Framework CSS via CDN
- **JavaScript Vanilla**: Sin dependencias, código nativo
- **Google Fonts**: Cormorant Garamond (serif) y Montserrat (sans-serif)

## 📁 Estructura del Proyecto

```
emunah/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación
```

## 🎨 Paleta de Colores

- **Cream**: `#F5F1E8` - Color de fondo principal
- **Dark**: `#1A1A1A` - Negro para texto y elementos oscuros
- **Taupe**: `#A69B8C` - Color accent principal
- **Light Taupe**: `#C4B9A8` - Variante más clara

## 🔧 Configuración Local

1. **Clona o descarga el proyecto**

```bash
git clone [URL_DEL_REPO]
cd emunah
```

2. **Abre con Live Server** (recomendado)

   - Si usas VS Code, instala la extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

3. **O abre directamente en el navegador**
   - Simplemente abre `index.html` en tu navegador preferido

## 🌐 Deploy en GitHub Pages

### Opción 1: Usando la Interfaz de GitHub

1. **Sube tu proyecto a GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/emunah.git
git push -u origin main
```

2. **Configura GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: selecciona "main" branch y carpeta "/ (root)"
   - Guarda los cambios
   - Tu sitio estará disponible en: `https://TU_USUARIO.github.io/emunah/`

### Opción 2: Usando GitHub CLI

```bash
# Después de hacer push del proyecto
gh repo create emunah --public --source=. --remote=origin --push
```

## 📝 Personalización

### Cambiar Información de Contacto

Edita en `index.html` la sección `#contacto`:

- Email: Busca `info@emunah.com`
- Teléfono: Busca `+1 (234) 567-890`
- Ubicación: Busca `Ciudad, País`

### Agregar Imágenes a la Galería

1. Crea una carpeta `images/` en el proyecto
2. Agrega tus fotos de eventos
3. Reemplaza los divs placeholder en la sección de galería:

```html
<!-- Reemplaza esto: -->
<div class="gallery-item aspect-square bg-emunah-taupe/20"></div>

<!-- Por esto: -->
<div class="gallery-item aspect-square overflow-hidden">
  <img
    src="images/evento1.jpg"
    alt="Evento descripción"
    class="w-full h-full object-cover"
  />
</div>
```

### Modificar Colores

Edita el objeto `tailwind.config` en `index.html`:

```javascript
colors: {
    'emunah-cream': '#TU_COLOR',
    'emunah-dark': '#TU_COLOR',
    // ...
}
```

### Integrar Formulario de Contacto

En `script.js`, en la sección de manejo del formulario, puedes integrar:

**EmailJS** (recomendado para proyectos estáticos):

```javascript
// Registrarse en emailjs.com y obtener credenciales
emailjs
  .send("service_id", "template_id", data)
  .then(() => alert("¡Mensaje enviado!"));
```

**Formspree**:

```html
<form action="https://formspree.io/f/TU_FORM_ID" method="POST"></form>
```

## 🎯 Secciones de la Página

1. **Header**: Logo, menú de navegación, botón CTA
2. **Hero**: Título grande con efecto, scroll indicator
3. **Servicios**: 4 servicios principales con iconos
4. **Galería**: Grid de fotos de eventos
5. **Nosotros**: Descripción de la empresa
6. **Contacto**: Información y formulario
7. **Footer**: Logo grande, info de contacto, redes sociales

## 🐛 Solución de Problemas

**El menú mobile no funciona:**

- Verifica que `script.js` esté cargando correctamente
- Revisa la consola del navegador para errores

**Los estilos no se ven correctamente:**

- Asegúrate de que Tailwind CSS se esté cargando desde el CDN
- Verifica que `styles.css` esté en la misma carpeta que `index.html`

**Las fuentes no cargan:**

- Verifica tu conexión a internet (Google Fonts requiere conexión)

## 📱 Responsividad

El sitio es completamente responsive con breakpoints en:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Próximas Mejoras

- [ ] Agregar lightbox para galería de imágenes
- [ ] Integrar Google Maps en sección de contacto
- [ ] Agregar animaciones más complejas con GSAP
- [ ] Implementar sistema de reservas/cotizaciones
- [ ] Agregar sección de testimonios/reseñas
- [ ] Optimizar imágenes con lazy loading
- [ ] Agregar multi-idioma (ES/EN)
- [ ] Integrar analytics (Google Analytics)

## 📄 Licencia

Este proyecto es privado y propiedad de Emunáh.

## 👥 Contacto

Para consultas sobre el desarrollo web:

- Email: info@emunah.com
- Web: [emunah.github.io](https://emunah.github.io)

---

**Desarrollado con ❤️ para Emunáh**
