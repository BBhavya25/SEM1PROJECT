// DOM Elements
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const navbarRight = document.querySelector('.navbar-right');
const navbar = document.querySelector('.navbar');
let isMenuOpen = false;

// Navbar functionality
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    // Toggle menu icon animation
    menuIcon.classList.toggle('active');
    
    // Toggle navigation elements
    navLinks.classList.toggle('active');
    navbarRight.classList.toggle('active');
    
    // Animate menu icon
    const spans = menuIcon.querySelectorAll('span');
    if (isMenuOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navLinks.contains(event.target) || 
                             menuIcon.contains(event.target) ||
                             navbarRight.contains(event.target);
    
    if (!isClickInsideMenu && isMenuOpen) {
        toggleMenu();
    }
});

// Close menu when window is resized to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        toggleMenu();
    }
});

// Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

// Update the carousel by moving to the selected slide
function updateCarousel() {
    // Show the current slide and hide the others
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    updateActiveDot();
}

// Update the active dot
function updateActiveDot() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Go to a specific slide when clicking a dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
});

// Left and Right Button Event Listeners
document.querySelector('.left-btn').addEventListener('click', () => {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1; // Loop back to last slide
    } else {
        currentSlide--;
    }
    updateCarousel();
});

document.querySelector('.right-btn').addEventListener('click', () => {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0; // Loop back to the first slide
    } else {
        currentSlide++;
    }
    updateCarousel();
});

// Initialize the carousel
updateCarousel();
// Auto-advance carousel
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event Listeners
menuIcon.addEventListener('click', toggleMenu);

// Carousel navigation
document.querySelector('.left-btn')?.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

document.querySelector('.right-btn')?.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoSlide();
        currentSlide = index;
        updateCarousel();
        startAutoSlide();
    });
});

// Touch support for carousel
let touchStartX = 0;
let touchEndX = 0;

const carousel = document.querySelector('.carousel-container');
if (carousel) {
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        stopAutoSlide();
    }, false);

    carousel.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    }, false);

    carousel.addEventListener('touchend', () => {
        if (touchStartX - touchEndX > 50) {
            nextSlide(); // Swipe left
        } else if (touchEndX - touchStartX > 50) {
            prevSlide(); // Swipe right
        }
        startAutoSlide();
    }, false);
}

// Pause auto-slide on hover
document.querySelector('.carousel-container')?.addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.carousel-container')?.addEventListener('mouseleave', startAutoSlide);

// Initialize carousel
if (slides.length > 0) {
    updateCarousel();
    startAutoSlide();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    } else if (e.key === 'ArrowRight') {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    }
});


const cardContainer = document.getElementById('card-container');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    // Scroll left when left arrow is clicked
    leftArrow.addEventListener('click', () => {
      cardContainer.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: 'smooth'
      });
    });

    // Scroll right when right arrow is clicked
    rightArrow.addEventListener('click', () => {
      cardContainer.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: 'smooth'
      });
    });



document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    // Toggle the dropdown menu on click
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  





