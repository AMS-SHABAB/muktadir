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
  }, 4000);
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

  // Booking Form
  document.querySelector('.booking-form').onsubmit = e => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    e.target.reset();
  };

  // Portfolio hover effect for mobile (show details on tap)
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('touchstart', () => {
      card.querySelector('.portfolio-hover').style.opacity = '1';
    });
    card.addEventListener('touchend', () => {
      card.querySelector('.portfolio-hover').style.opacity = '0';
    });
  });

  // News banner ticker reset
  const ticker = document.querySelector('.ticker');
  ticker.onanimationiteration = () => { ticker.scrollLeft = 0; };
});
