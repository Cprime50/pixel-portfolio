// Light mode toggle
const lightModeToggle = document.querySelector('.light-mode-toggle');

lightModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Project card animations
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card.querySelector('.project-image'), { y: -10, duration: 0.3 });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card.querySelector('.project-image'), { y: 0, duration: 0.3 });
  });
});
