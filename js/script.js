// Selectors
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');

// Toggle menu on click
navbarToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('show');
});
