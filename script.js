const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const accentSpan = heroTitle.querySelector('.accent');
  const textToType = 'Build a Brighter Future.';
  let index = 0;

  heroTitle.innerHTML = 'Learn with Confidence. <span class="accent"></span>';

  const startTyping = () => {
    index = 0;
    accentSpan.textContent = '';
    const interval = setInterval(() => {
      accentSpan.textContent += textToType[index] || '';
      index += 1;
      if (index >= textToType.length) {
        clearInterval(interval);
        setTimeout(startTyping, 1800);
      }
    }, 70);
  };

  startTyping();
}
