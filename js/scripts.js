// Menu Toggle
const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".header__nav");
const icon = menuToggle.querySelector(".header__menu-toggle i");

menuToggle.addEventListener("click", () => {
  icon.classList.toggle("ri-menu-line");
  icon.classList.toggle("ri-close-large-line");

  nav.classList.toggle("header__nav-active");
});

// Start Swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,

  navigation: {
    nextEl: ".testimonials__controls-btn--next",
    prevEl: ".testimonials__controls-btn--prev",
    disabledClass: "testimonials__controls-btn--disabled",
  },

  spaceBetween: 24,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
