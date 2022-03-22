const hotelSlider = new Swiper('.hotel-slider ', {
    // Optional parameters


    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.hotel-slider__button-next',
        prevEl: '.hotel-slider__button-prev',
    },

    // And if we need scrollbar
    keyboard: {
        enabled: true,
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
    keyboard: {
        enabled: true,
    },
    slidesPerView: 'auto',
});


$('.newsletter').parallax({ imageSrc: '../img/bg-newsletter.jpg' });


const menuButton = document.querySelector('.menu-button');

function toggleMobileMenu() {
    document
        .querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
    document
        .querySelector('body').classList.toggle('scroll-hidden');
}

menuButton.addEventListener('click', toggleMobileMenu);

document.addEventListener('DOMContentLoaded', function() {

    const modalButtons = document.querySelectorAll('.modal__button-open'),
        overlay = document.querySelector('.modal__overlay'),
        closeButtons = document.querySelectorAll('.modal__close');



    modalButtons.forEach(function(item) {


        item.addEventListener('click', function(e) {

            e.preventDefault();
            let modalId = this.getAttribute('data-toggle'),
                modalElem = document.querySelector('.modal__contact-form[data-toggle="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('active');
            document
                .querySelector('body').classList.add('scroll-hidden');
        }); // end click

    }); // end foreach


    closeButtons.forEach(function(item) {

        item.addEventListener('click', function(e) {
            let parentModal = this.closest('.modal__contact-form');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
            document
                .querySelector('body').classList.remove('scroll-hidden');
        });

    }); // end foreach


    document.body.addEventListener('keyup', function(e) {
        let key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal__contact-form.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            document
                .querySelector('body').classList.remove('scroll-hidden');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal__contact-form.active').classList.remove('active');
        this.classList.remove('active');
        document
            .querySelector('body').classList.remove('scroll-hidden');
    });




}); // end ready