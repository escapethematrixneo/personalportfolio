// Scroll fade-in and fade-out animation for elements with .scroll-fade
document.addEventListener('DOMContentLoaded', function() {
  const fadeEls = document.querySelectorAll('.scroll-fade');
  function checkFade() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', checkFade);
  checkFade();
});

// Navbar hide/show on scroll
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (!navbar) return;
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      // Scrolling down
      navbar.classList.add('hide');
    } else {
      // Scrolling up
      navbar.classList.remove('hide');
    }
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});

// Custom Cursor Animation
const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  posX += (mouseX - posX) * 0.15;
  posY += (mouseY - posY) * 0.15;
  cursor.style.left = posX + 'px';
  cursor.style.top = posY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor actions for interactive elements
document.querySelectorAll('a, button, input, textarea, label').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('active'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Optional: Hide cursor when leaving window
window.addEventListener('mouseout', () => {
  cursor.style.opacity = 0;
});

// ...existing code...

