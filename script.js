const particlesContainer = document.getElementById('particles-container');
const customCursor = document.querySelector('.custom-cursor');
const shapes = ['particle-shape-1', 'particle-shape-2', 'particle-shape-3', 'particle-shape-4'];

// Function to create and manage particles
function createParticle(x, y) {
  const particle = document.createElement('div');
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  const randomSize = Math.floor(Math.random() * 10) + 5; // Size between 5 and 15

  particle.className = `particle ${randomShape} active`;
  particle.style.width = `${randomSize}px`;
  particle.style.height = `${randomSize}px`;
  particlesContainer.appendChild(particle);

  setTimeout(() => {
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.opacity = '1';
    particle.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease';
    particle.style.transform = `translate(${x}px, ${y}px) scale(1)`;

    setTimeout(() => {
      particle.style.opacity = '0';
      setTimeout(() => particle.remove(), 500);
    }, 1000);
  }, 0);
}

let mouseX = 0;
let mouseY = 0;
let lastParticleTime = 0;
const particleInterval = 50; // Milliseconds between particles

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Move the custom cursor
  customCursor.style.left = `${mouseX}px`;
  customCursor.style.top = `${mouseY}px`;

  const currentTime = Date.now();
  if (currentTime - lastParticleTime > particleInterval) {
    createParticle(mouseX, mouseY);
    lastParticleTime = currentTime;
  }
});

// Resume download functionality
document.getElementById('resume-btn').addEventListener('click', () => {
  const resumeUrl = 'assets/HemantKulhari_resume.pdf'; // Path relative to index.html
  window.open(resumeUrl, '_blank');
});


// Add hover effect to social media links
const socialLinks = document.querySelectorAll('#contact a');
socialLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    customCursor.style.width = '40px';
    customCursor.style.height = '40px';
    customCursor.style.backgroundColor = '#4f46e5';
  });
  link.addEventListener('mouseleave', () => {
    customCursor.style.width = '20px';
    customCursor.style.height = '20px';
    customCursor.style.backgroundColor = '#818cf8';
  });
});

