// Toggle dropdown menu
const menuToggle = document.getElementById("menuToggle");
const menuDropdown = document.getElementById("menuDropdown");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = menuDropdown.classList.contains("show");
  menuDropdown.classList.toggle("show");
  menuToggle.textContent = isOpen ? "Menu +" : "Menu –";
});

// Hide menu when clicking outside
document.addEventListener("click", (e) => {
  if (menuDropdown.classList.contains("show")) {
    menuDropdown.classList.remove("show");
    menuToggle.textContent = "Menu +";
  }
});

// Prevent menu from closing when clicking inside the dropdown
menuDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
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
window.addEventListener('mouseover', () => {
  cursor.style.opacity = 1;
});
// Fade navbar out on scroll down, in on scroll up, and add border on scroll
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
