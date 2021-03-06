document.addEventListener('DOMContentLoaded', function() {

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



    const modalButtons = document.querySelectorAll('.modal__button-open');
    const overlay = document.querySelector('.modal__overlay');
    const modalClose = document.querySelector('.modal__close');
    const modal = document.querySelector('.modal');

    const toggleModal = (e) => {

        modal.classList.toggle('modal--is-open');
        overlay.classList.toggle('overlay--is-open');
        document.body.classList.toggle('scroll-hidden');
    }

    modalButtons.forEach((modalButton) => {
        modalButton.addEventListener('click', toggleModal);
    });

    modalClose.addEventListener('click', toggleModal);


    overlay.addEventListener('click', (e) => {
        modal.classList.toggle('modal--is-open');
        overlay.classList.toggle('overlay--is-open');
        document.body.classList.toggle('scroll-hidden');
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key;

        if (key == 'Escape') {
            modal.classList.toggle('modal--is-open');
            overlay.classList.toggle('overlay--is-open');
            document.body.classList.toggle('scroll-hidden');

        }
    });

    AOS.init();
}); // end ready

$('[name=phone]').mask("+7 (999) 999-99-99");

$(".form").each(function() {
    $(this).validate({
        element: "form",
        validClass: "input__required",
        errorClass: "invalid",
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 18
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "* Enter your full name",
                minlength: "* More than 2 letters long"
            },
            email: {
                required: "* Enter your email address",
                email: "* Must be name@domain.com"
            },
            phone: {
                required: "* Enter your phone number",
                minlength: "* More than 18 letters long",
            },
            message: {
                required: "* Enter text",
                minlength: "* More than 2 letters long"
            },
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
        }
    });
});