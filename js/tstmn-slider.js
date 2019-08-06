const slides = document.querySelectorAll('.slide-tstmn');
const next = document.querySelector('#next-tstmn');
const prev = document.querySelector('#prev-tstmn');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current-tstmn');
  // Remove current class
  current.classList.remove('current-tstmn');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current-tstmn');
  } else {
    // Add current to start
    slides[0].classList.add('current-tstmn');
  }
  setTimeout(() => current.classList.remove('current-tstmn'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current-tstmn');
  // Remove current class
  current.classList.remove('current-tstmn');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current-tstmn');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current-tstmn');
  }
  setTimeout(() => current.classList.remove('current-tstmn'));
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
