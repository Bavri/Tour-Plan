const hotelSlider = new Swiper('.hotel-slider ', {
  // Optional parameters

 
  // If we need pagination


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
  autoHeight: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button-next',
    prevEl: '.reviews-slider__button-prev',
  },

  // And if we need scrollbar
  keyboard:{
    enabled:true,
  },
  slidesPerView: 'auto',
});


$('.newsletter').parallax({imageSrc: '../img/bg-newsletter.jpg'});


let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document
  .querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});