const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = `#${targetId}`;
    }
  });
});

window.addEventListener('load', () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 80);
    }
  }
});

const navMap = {};
navLinks.forEach((button) => {
  navMap[button.getAttribute('data-target')] = button;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const button = navMap[entry.target.id];
    if (button && entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove('active'));
      button.classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach((section) => observer.observe(section));
