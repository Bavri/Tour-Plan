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