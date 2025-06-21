// Hamburger menu for mobile
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('#navbar .nav-menu');
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  // Newsletter popup
  setTimeout(() => {
    document.getElementById('newsletter-popup').style.display = 'flex';
  }, 3500);
  document.querySelectorAll('.close-popup').forEach(btn => {
    btn.onclick = () => btn.closest('.popup').style.display = 'none';
  });

  // Cookies popup
  if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookies-popup').style.display = 'flex';
  }
  document.querySelector('.accept-cookies').onclick = () => {
    document.getElementById('cookies-popup').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
  };

  // Event slider: scroll by button or drag
  // (Add buttons or drag logic as desired)

  // Demo Booking Form handling
  document.querySelector('.booking-form').onsubmit = e => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    e.target.reset();
  };

  // Portfolio hover effect for details (mobile fallback)
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('touchstart', () => {
      card.querySelector('.portfolio-hover').style.opacity = '1';
    });
    card.addEventListener('touchend', () => {
      card.querySelector('.portfolio-hover').style.opacity = '0';
    });
  });

  // News banner ticker reset (for accessibility)
  const ticker = document.querySelector('.ticker');
  ticker.onanimationiteration = () => {
    ticker.scrollLeft = 0;
  };
});

// Glitch/Noise image effect placeholder
// For a real glitch effect, use a library or canvas processing!
