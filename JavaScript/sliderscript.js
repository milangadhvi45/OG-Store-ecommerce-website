    //sliderscript.js file//
  
// Initialize Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal', // 'horizontal' or 'vertical'
  loop: true,              // Enables continuous looping of slides
  speed: 800,              // Transition speed in milliseconds

  // Autoplay configuration
  autoplay: {
    delay: 3000, // Delay between transitions in ms
    disableOnInteraction: false, // Autoplay will not be disabled after user interactions
  },

  // If we need pagination (the dots)
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Allows clicking on the dots to navigate
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Cool animation effect
  effect: 'fade', // Try 'slide', 'fade', 'cube', 'coverflow', or 'flip'
  fadeEffect: {
    crossFade: true
  },
});