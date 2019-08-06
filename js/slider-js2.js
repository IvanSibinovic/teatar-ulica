const slides = document.querySelectorAll('.sld');
const next = document.querySelector('#nex');
const prev = document.querySelector('#pre');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.curr');
  // Remove current class
  current.classList.remove('curr');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('curr');
  } else {
    // Add current to start
    slides[0].classList.add('curr');
  }
  setTimeout(() => current.classList.remove('curr'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.curr');
  // Remove current class
  current.classList.remove('curr');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('curr');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('curr');
  }
  setTimeout(() => current.classList.remove('curr'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
