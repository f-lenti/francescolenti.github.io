// Anno corrente nel footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contatto via email
document.getElementById('contactBtn').addEventListener('click', function () {
  window.location.href = 'mailto:info@francescolenti.it';
});

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function () {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Chiude il menu mobile quando si sceglie una voce
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
