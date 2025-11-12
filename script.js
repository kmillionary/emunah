// ==========================================
// EMUNÁH - JavaScript Functionality
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // MOBILE MENU TOGGLE
  // ==========================================
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuOverlay = document.getElementById("menuOverlay");
  const hamburger = document.querySelector(".hamburger");
  const menuLinks = document.querySelectorAll(".menu-link");

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  }

  menuButton.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);

  // Cerrar menú al hacer clic en un enlace
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // ==========================================
  // HEADER SCROLL EFFECT
  // ==========================================
  const header = document.getElementById("header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });

  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#"
      if (href === "#") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ==========================================
  // INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
  // ==========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observar elementos que necesitan animación
  const fadeElements = document.querySelectorAll(
    ".service-card, .gallery-item"
  );
  fadeElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // ==========================================
  // CONTACT FORM HANDLING
  // ==========================================
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener datos del formulario
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    // Aquí puedes integrar con un servicio de email como:
    // - EmailJS
    // - Formspree
    // - Tu propio backend

    console.log("Datos del formulario:", data);

    // Mostrar mensaje de éxito (ejemplo simple)
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");

    // Limpiar formulario
    contactForm.reset();

    // TODO: Implementar integración real de envío de emails
  });

  // ==========================================
  // PARALLAX EFFECT FOR HERO (optional enhancement)
  // ==========================================
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector(".hero-content");

    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
      heroContent.style.opacity = 1 - scrolled / 500;
    }
  });

  // ==========================================
  // GALLERY LIGHTBOX (básico)
  // ==========================================
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      // TODO: Implementar lightbox/modal para ver imágenes en grande
      console.log("Gallery item clicked");
      // Puedes usar una librería como GLightbox o crear tu propio modal
    });
  });

  // ==========================================
  // PREVENT HORIZONTAL SCROLL
  // ==========================================
  document.addEventListener(
    "touchmove",
    function (e) {
      if (mobileMenu.classList.contains("active")) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  // ==========================================
  // KEYBOARD ACCESSIBILITY
  // ==========================================
  document.addEventListener("keydown", (e) => {
    // Cerrar menú con tecla Escape
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Función para validar email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Función para validar teléfono (básica)
function isValidPhone(phone) {
  const re = /^[\d\s\-\+\(\)]+$/;
  return re.test(phone);
}

// Debounce function para optimizar eventos de scroll/resize
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
