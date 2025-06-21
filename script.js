document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('#navbar .nav-menu');
  if(menuToggle) menuToggle.addEventListener('click', () => navMenu.classList.toggle('open'));

  // Booking form alert
  const bookingForm = document.querySelector('.booking-form');
  if(bookingForm) bookingForm.onsubmit = e => {
    e.preventDefault();
    alert('Thank you! You will be contacted soon.');
    e.target.reset();
  };

  // Portfolio hover for mobile
  document.querySelectorAll('.art-card, .writing-card').forEach(card => {
    card.addEventListener('touchstart', () => {
      let overlay = card.querySelector('.art-overlay');
      if(overlay) overlay.style.opacity = '1';
    });
    card.addEventListener('touchend', () => {
      let overlay = card.querySelector('.art-overlay');
      if(overlay) overlay.style.opacity = '0';
    });
  });

  // Ticker reset
  const ticker = document.querySelector('.ticker');
  if(ticker) ticker.onanimationiteration = () => { ticker.scrollLeft = 0; };
});
