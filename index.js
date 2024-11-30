// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}

// Add scroll buttons to each section
document.querySelectorAll('.section').forEach(section => {
  const container = section.querySelector('.card-container');
  const scrollAmount = 200;

  // Create scroll buttons
  const leftBtn = document.createElement('button');
  leftBtn.className = 'scroll-btn left';
  leftBtn.innerHTML = '<';
  
  const rightBtn = document.createElement('button');
  rightBtn.className = 'scroll-btn right';
  rightBtn.innerHTML = '>';

  // Add scroll functionality
  leftBtn.addEventListener('click', () => {
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  rightBtn.addEventListener('click', () => {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Only add buttons if content is scrollable
  if (container.scrollWidth > container.clientWidth) {
    section.appendChild(leftBtn);
    section.appendChild(rightBtn);
  }
});

// Hide/show scroll buttons based on scroll position
document.querySelectorAll('.card-container').forEach(container => {
  container.addEventListener('scroll', () => {
    const parent = container.closest('.section');
    const leftBtn = parent.querySelector('.scroll-btn.left');
    const rightBtn = parent.querySelector('.scroll-btn.right');

    if (leftBtn && rightBtn) {
      leftBtn.style.opacity = container.scrollLeft > 0 ? '1' : '0';
      rightBtn.style.opacity = 
        container.scrollLeft < (container.scrollWidth - container.clientWidth - 10) 
          ? '1' : '0';
    }
  });
});