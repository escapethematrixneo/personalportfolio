// Toggle dropdown menu
const menuToggle = document.getElementById("menuToggle");
const menuDropdown = document.getElementById("menuDropdown");

menuToggle.addEventListener("click", () => {
  const isOpen = menuDropdown.classList.contains("show");
  menuDropdown.classList.toggle("show");
  menuToggle.textContent = isOpen ? "Menu +" : "Menu –";
});

// Morphing Text Animation
const phrases = [
  "Clearer content.",
  " Better decisions.",
  "Precise Execution."
];

let currentPhraseIndex = 0;
const morphText = document.getElementById("morph-text");

function morphToNextPhrase() {
  const currentPhrase = phrases[currentPhraseIndex];
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  const nextPhrase = phrases[currentPhraseIndex];

  morphText.innerHTML = "";
  const maxLength = Math.max(currentPhrase.length, nextPhrase.length);

  for (let i = 0; i < maxLength; i++) {
    const fromChar = currentPhrase[i] || "\u00A0";
    const toChar = nextPhrase[i] || "\u00A0";

    const letterWrapper = document.createElement("span");
    letterWrapper.className = "letter";

    const flipInner = document.createElement("span");
    flipInner.className = "flip-inner";

    const front = document.createElement("span");
    front.className = "front";
    front.textContent = fromChar;

    const back = document.createElement("span");
    back.className = "back";
    back.textContent = toChar;

    flipInner.appendChild(front);
    flipInner.appendChild(back);
    letterWrapper.appendChild(flipInner);
    morphText.appendChild(letterWrapper);

    setTimeout(() => {
      letterWrapper.classList.add("flipping");
    }, i * 100);
  }
}

morphToNextPhrase();
setInterval(morphToNextPhrase, 4000);

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

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('active'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

// Navbar hide/show on scroll direction
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    navbar.classList.add('hide');
  } else {
    // Scrolling up
    navbar.classList.remove('hide');
  }
  lastScrollY = window.scrollY;

  // Navbar background only when scrolled
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a scroll-triggered animation
gsap.from(".showcase-text", {
  scrollTrigger: {
    trigger: ".showcase-text",
    start: "top 80%", // When the top of .showcase-text hits 80% of the viewport height
    end: "bottom 20%", // When the bottom of .showcase-text hits 20% of the viewport height
    scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
  x: -100, // Move from 100px left
  opacity: 0, // Start from transparent
  duration: 1, // Animation duration
  ease: "power2.out", // Easing function
});
gsap.from(".review-right", {
  scrollTrigger: {
    trigger: ".review-right",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  x: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

