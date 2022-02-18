const hotelSlider = new Swiper('.hotel-slider ', {
  // Optional parameters

  loop: true,

  // If we need pagination
  speed: 600,
  parallax: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button-next',
    prevEl: '.hotel-slider__button-prev',
  },

  // And if we need scrollbar
  keyboard:{
    enabled:true,
  },
});

const reviewsSlider = new Swiper('.reviews-slider ', {
  // Optional parameters

  loop: true,

  // If we need pagination
  slidesPerView: 1,
  speed: 300,
  parallax: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button-next',
    prevEl: '.reviews-slider__button-prev',
  },

  // And if we need scrollbar
  keyboard:{
    enabled:true,
  },
});

