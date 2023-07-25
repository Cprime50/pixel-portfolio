// JavaScript code for dark mode toggle, text animation, and gradient background animation
const toggleMode = document.getElementById('toggle-mode');
const body = document.body;
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const sectionTitle = document.querySelectorAll('.section-title');
const sectionSubtitle = document.querySelectorAll('.section-subtitle');
const infoTitle = document.querySelectorAll('.info-title');
const infoSubtitle = document.querySelectorAll('.info-subtitle');
const gradientBackground = document.querySelector('body');

toggleMode.addEventListener('change', () => {
  if (toggleMode.checked) {
    body.classList.add('dark-mode');
    setGradientBackground('#c3c0d0', '#fff');
  } else {
    body.classList.remove('dark-mode');
    setGradientBackground('#1a191a', '#06010e');
  }
});

function setGradientBackground(color1, color2) {
  gradientBackground.style.background = `linear-gradient(-45deg, ${color1}, ${color2})`;
  gradientBackground.style.backgroundSize = '400% 400%';
  gradientBackground.style.animation = 'gradientBackground 10s ease infinite';
}

window.addEventListener('load', () => {
  title.style.animation = 'fadeInUp 1s ease-in-out';
  subtitle.style.animation = 'fadeInUp 1s ease-in-out';
  sectionTitle.forEach((element) => {
    element.style.animation = 'fadeInUp 1s ease-in-out';
  });
  sectionSubtitle.forEach((element) => {
    element.style.animation = 'fadeInUp 1s ease-in-out';
  });
  infoTitle.forEach((element) => {
    element.style.animation = 'fadeInUp 1s ease-in-out';
  });
  infoSubtitle.forEach((element) => {
    element.style.animation = 'fadeInUp 1s ease-in-out';
  });
});

setGradientBackground('#1a191a', '#06010e'); // Initially set the light mode gradient

// Scroll to top when the up arrow is clicked
const upArrow = document.querySelector('.up-arrow');

upArrow.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Add smooth scrolling behavior
  });
});


// Change mouse cursor
body.style.cursor = "url('assets/cursor.png'), auto";
