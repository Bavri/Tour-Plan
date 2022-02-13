const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  // And if we need scrollbar
  keyboard:{
    enabled:true,
  },
});