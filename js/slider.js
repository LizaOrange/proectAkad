const swiper = new Swiper('.participation__slider', {
    loop: true,
    breakpoints: {
        375: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1170: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: ".participation .slider-navigation__button--next",
        prevEl: ".participation .slider-navigation__button--prev"
    },
});

const swiperCases = new Swiper('.cases__slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: ".cases__wrap .slider-navigation__button--next",
        prevEl: ".cases__wrap .slider-navigation__button--prev"
    },
});