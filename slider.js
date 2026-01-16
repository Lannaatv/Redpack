let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 1,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 2,
    },
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,

  effect: "coverflow", // Menambahkan efek coverflow
  coverflowEffect: {
    rotate: -5, // Sudut rotasi slide
    stretch: 0, // Jarak antara slide
    depth: 500, // Kedalaman efek
    modifier: 1, // Pengubah efek
    slideShadows: true, // Bayangan slide
  },
});