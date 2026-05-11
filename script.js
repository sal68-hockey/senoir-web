// Tackle Box Interaction
const tackleBox = document.querySelector('.tackle-box');
let isOpen = false;

tackleBox.addEventListener('click', () => {
  isOpen = !isOpen;
  if (isOpen) {
    tackleBox.classList.remove('closed');
    tackleBox.classList.add('open');
  } else {
    tackleBox.classList.remove('open');
    tackleBox.classList.add('closed');
  }
});

// Add some interactive effects to compartments
const compartments = document.querySelectorAll('.compartment');

compartments.forEach(compartment => {
  compartment.addEventListener('mouseenter', () => {
    compartment.style.transform = 'translateY(-4px) scale(1.02)';
  });

  compartment.addEventListener('mouseleave', () => {
    compartment.style.transform = 'translateY(0) scale(1)';
  });
});

// Form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo form.');
    contactForm.reset();
  });
}

// Add some fishing-themed animations
function addFishingAnimations() {
  const tackleBoxElement = document.querySelector('.tackle-box');

  // Add a subtle floating animation to the box
  tackleBoxElement.style.animation = 'float 6s ease-in-out infinite';

  // Add keyframes for floating animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotateX(${isOpen ? -120 : 0}deg); }
      50% { transform: translateY(-5px) rotateX(${isOpen ? -120 : 0}deg); }
    }
  `;
  document.head.appendChild(style);
}

// Initialize animations when page loads
window.addEventListener('load', () => {
  addFishingAnimations();
});
