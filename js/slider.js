
const swiper = new Swiper('.participation__slider', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,

    // Default parameters
    // slidesPerView: 5,
    // spaceBetween: 30,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 375
        375: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 768
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 1170
        1170: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: ".participation .slider-navigation__button--next",
        prevEl: ".participation .slider-navigation__button--prev"
    },
});



const swiperCases = new Swiper('.cases__slider', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,

    // Default parameters
    slidesPerView: 4,
    spaceBetween: 30,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: ".cases__wrap .slider-navigation__button--next",
        prevEl: ".cases__wrap .slider-navigation__button--prev"
    },
});