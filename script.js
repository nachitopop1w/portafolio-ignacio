// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animar las barras de habilidades cuando entran en pantalla
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const width = fill.getAttribute('data-width');
      fill.style.width = width + '%';
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.4 });

skillFills.forEach((fill) => skillObserver.observe(fill));

// Botón "volver arriba"
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// Cerrar el menú móvil al hacer click en un link
const navLinks = document.querySelectorAll('.nav-link');
const navMenu = document.getElementById('navMenu');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navMenu) || new bootstrap.Collapse(navMenu);
      bsCollapse.hide();
    }
  });
});

// Formulario de contacto (demo simple, sin backend)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = '¡Gracias! Mensaje listo para enviar (conecta esto a tu correo o WhatsApp).';
  contactForm.reset();

  setTimeout(() => {
    formNote.textContent = '';
  }, 5000);
});
