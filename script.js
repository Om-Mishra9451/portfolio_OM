document.addEventListener('DOMContentLoaded', () => {

  /* 1. Dynamic Typing Effect */
  const phrases = [
    "Full-Stack Web Apps.",
    "Interactive Frontend UIs.",
    "Dynamic API Systems.",
    "Scalable Software Solutions."
  ];

  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typewriterElement = document.getElementById('typewriter');

  function typeEffect() {
    if (!typewriterElement) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
      currentCharIndex--;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      typeSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();

  /* 2. Cursor Glow Follower */
  const cursorGlow = document.getElementById('cursorGlow');

  window.addEventListener('mousemove', (e) => {
    if (!cursorGlow) return;
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });

  /* 3. Active Nav Link Scroll Highlighting */
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 220;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSectionId)) {
        link.classList.add('active');
      }
    });
  });

});