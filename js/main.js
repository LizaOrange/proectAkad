// меняет бургер на кретстик
    t = document.querySelector(".header-btn"),
    n = document.querySelector(".popup-menu"),
    r = document.querySelector(".popup-mob"),
    i = document.querySelector(".header"),
    o = document.body, t && (t.addEventListener("click", (function () {
    t.classList.contains("active") ? (t.classList.remove("active"),
        innerWidth < 767 ? (r.classList.remove("active"),
    o.style.overflow = "visible", i.style.zIndex = "unset") : n.classList.remove("active")) : (t.classList.add("active"),
        innerWidth < 767 ? (r.classList.add("active"), o.style.overflow = "hidden", i.style.zIndex = "100000") : n.classList.add("active"))
})));


//возможно слайдер
// var e, t, n;
// (function () {
//     var e = document.querySelector(".participation__slider"), t = null;
//
//     function n() {
//         window.innerWidth > 767 ? t || (t = new Y(e, {
//             loop: !0,
//             lazy: !0,
//             effect: "slide",
//             breakpoints: {
//                 1170: {slidesPerView: 5, spaceBetween: 20},
//                 768: {slidesPerView: 3, spaceBetween: 20}
//             },
//             navigation: {
//                 nextEl: ".participation .slider-navigation__button--next",
//                 prevEl: ".participation .slider-navigation__button--prev"
//             },
//             pagination: {el: ".participation .swiper-pagination", type: "fraction"},
//             a11y: {
//                 enabled: !0,
//                 prevSlideMessage: "Переход на предыдущий слайд",
//                 nextSlideMessage: "Переход на следующий слайд"
//             }
//         })) : t && (t.destroy(), t = null)
//     }
//
//     e && n(), e && ee(n)
// })(), function () {
//     var e = document.querySelector(".faq__slider"), t = null;
//
//     function n() {
//         window.innerWidth <= 767 ? t || (t = new Y(e, {
//             observer: !0,
//             observeParents: !0,
//             loop: !1,
//             spaceBetween: 10,
//             breakpoints: {
//                 650: {slidesPerView: 3.4},
//                 500: {slidesPerView: 2.7},
//                 370: {slidesPerView: 2.05},
//                 0: {slidesPerView: 1.8}
//             }
//         })) : t && (t.destroy(), t = null)
//     }
//
//     e && n(), e && ee(n)
// }(), (n = document.querySelector(".diplom__slider")) && new Y(n, {
//     watchOverflow: !0,
//     autoHeight: !1,
//     slidesPerView: 1,
//     spaceBetween: 10,
//     navigation: {
//         nextEl: ".diplom .slider-navigation__button--next",
//         prevEl: ".diplom .slider-navigation__button--prev"
//     },
//     pagination: {el: ".diplom .swiper-pagination", type: "fraction"}
// }), function () {
//     var e = document.querySelector(".partners-slider-desc"),
//         t = document.querySelector(".partners-slider-mob"), n = null;
//     if (e && t) {
//         var r = function () {
//             n && (n.destroy(), n = null)
//         }, i = function () {
//             window.innerWidth <= 767 ? (r(), n = new Y(t, {
//                 loop: !0,
//                 lazy: !0,
//                 slidesPerView: 1,
//                 autoHeight: !0,
//                 navigation: {
//                     nextEl: ".partners .slider-navigation__button--next",
//                     prevEl: ".partners .slider-navigation__button--prev"
//                 },
//                 pagination: {
//                     el: ".partners .partners-pagination",
//                     bulletActiveClass: "active",
//                     clickable: !0
//                 },
//                 a11y: {
//                     enabled: !0,
//                     prevSlideMessage: "Переход на предыдущий слайд",
//                     nextSlideMessage: "Переход на следующий слайд"
//                 }
//             })) : (r(), n = new Y(e, {
//                 loop: !0,
//                 lazy: !0,
//                 slidesPerView: 1,
//                 autoHeight: !0,
//                 navigation: {
//                     nextEl: ".partners .slider-navigation__button--next",
//                     prevEl: ".partners .slider-navigation__button--prev"
//                 },
//                 pagination: {
//                     el: ".partners .partners-pagination",
//                     bulletActiveClass: "active",
//                     clickable: !0
//                 },
//                 a11y: {
//                     enabled: !0,
//                     prevSlideMessage: "Переход на предыдущий слайд",
//                     nextSlideMessage: "Переход на следующий слайд"
//                 }
//             }))
//         };
//         i(), ee(i)
//     }
// }(), function () {
//     var e = document.querySelector(".cases__slider");
//     e && new Y(e, {
//         loop: !0,
//         breakpoints: {
//             1441: {slidesPerView: 3, spaceBetween: 30},
//             1170: {slidesPerView: 3, spaceBetween: 20},
//             768: {slidesPerView: 2, spaceBetween: 20},
//             0: {slidesPerView: 1, spaceBetween: 10}
//         },
//         navigation: {
//             nextEl: ".cases .slider-navigation__button--next",
//             prevEl: ".cases .slider-navigation__button--prev"
//         },
//         pagination: {el: ".cases .swiper-pagination", type: "fraction"}
//     })
// }(), (t = document.querySelectorAll(".reviews")).length && t.forEach((function (e) {
//     var t = e.querySelector(".reviews__slider");
//     new Y(t, {
//         loop: !0,
//         effect: "slide",
//         spaceBetween: 20,
//         breakpoints: {
//             1441: {slidesPerView: 5},
//             1171: {slidesPerView: 4},
//             651: {slidesPerView: 2},
//             501: {slidesPerView: 1.5},
//             0: {slidesPerView: 1}
//         },
//         navigation: {
//             nextEl: e.querySelector(".slider-navigation__button--next"),
//             prevEl: e.querySelector(".slider-navigation__button--prev")
//         },
//         pagination: {el: e.querySelector(".swiper-pagination"), type: "fraction"},
//         a11y: {
//             enabled: !0,
//             prevSlideMessage: "Переход на предыдущий слайд",
//             nextSlideMessage: "Переход на следующий слайд"
//         }
//     });
//     var n = e.querySelectorAll(".reviews__slide");
//     null == n || n.forEach((function (e) {
//         e.addEventListener("mouseover", (function () {
//             var t;
//             return null === (t = e.querySelector("video")) || void 0 === t ? void 0 : t.play()
//         })), e.addEventListener("mouseleave", (function () {
//             var t;
//             return null === (t = e.querySelector("video")) || void 0 === t ? void 0 : t.pause()
//         }))
//     }))
// })), t.length && t.forEach((function (e, t) {
//     var n = e.querySelectorAll(".swiper-slide-duplicate");
//     null == n || n.forEach((function (e, n) {
//         var r;
//         null === (r = e.querySelector(".reviews__slide-play")) || void 0 === r || r.setAttribute("data-fslightbox", "dublicate-review-".concat(t + 1, "-").concat(n + 1))
//     }))
// })), refreshFsLightbox(), (e = document.querySelector(".news__slider")) && new Y(e, {
//     loop: !0,
//     lazy: !0,
//     effect: "slide",
//     breakpoints: {
//         1440: {slidesPerView: 3, spaceBetween: 20},
//         1170: {slidesPerView: 2, spaceBetween: 20},
//         768: {slidesPerView: 3, spaceBetween: 15},
//         500: {slidesPerView: 2.2, spaceBetween: 15},
//         0: {slidesPerView: 1.1, spaceBetween: 10}
//     },
//     navigation: {
//         nextEl: ".news .slider-navigation__button--next",
//         prevEl: ".news .slider-navigation__button--prev"
//     },
//     pagination: {el: ".news .swiper-pagination", type: "fraction"},
//     a11y: {
//         enabled: !0,
//         prevSlideMessage: "Переход на предыдущий слайд",
//         nextSlideMessage: "Переход на следующий слайд"
//     }
// }), function () {
//     var e = document.querySelector(".teachers__slider");
//     e && new Y(e, {
//         watchOverflow: !0,
//         effect: "slide",
//         breakpoints: {
//             1170: {slidesPerView: 4, spaceBetween: 20},
//             768: {slidesPerView: 3, spaceBetween: 15},
//             500: {slidesPerView: 2, spaceBetween: 15},
//             0: {slidesPerView: 1.2, spaceBetween: 10}
//         },
//         navigation: {
//             nextEl: ".teachers .slider-navigation__button--next",
//             prevEl: ".teachers .slider-navigation__button--prev"
//         },
//         pagination: {el: ".teachers .swiper-pagination", type: "fraction"},
//         a11y: {
//             enabled: !0,
//             prevSlideMessage: "Переход на предыдущий слайд",
//             nextSlideMessage: "Переход на следующий слайд"
//         }
//     })
// }(), function () {
//     var e = document.querySelector(".cooperation__slider");
//     e && new Y(e, {
//         breakpoints: {
//             1170: {slidesPerGroup: 3, slidesPerView: 3, spaceBetween: 20},
//             767: {slidesPerGroup: 2, slidesPerView: 2, spaceBetween: 15},
//             0: {slidesPerView: 1, spaceBetween: 20}
//         },
//         navigation: {
//             nextEl: ".cooperation .slider-navigation__button--next",
//             prevEl: ".cooperation .slider-navigation__button--prev"
//         },
//         pagination: {el: ".cooperation .swiper-pagination", type: "fraction"}
//     })
// }(), function () {
//     var e = document.querySelector(".stories__slider");
//     e && new Y(e, {
//         loop: !0,
//         slidesPerView: 1,
//         spaceBetween: 20,
//         navigation: {
//             nextEl: ".stories .slider-navigation__button--next",
//             prevEl: ".stories .slider-navigation__button--prev"
//         },
//         pagination: {el: ".stories .swiper-pagination", type: "fraction"}
//     })
// }(), function () {
//     var e = document.querySelector(".hr-reviews__slider");
//     e && new Y(e, {
//         loop: !0,
//         spaceBetween: 20,
//         autoHeight: !0,
//         breakpoints: {
//             1441: {slidesPerView: 5},
//             1171: {slidesPerView: 4},
//             767: {slidesPerView: 3},
//             0: {slidesPerView: 1}
//         },
//         pagination: {el: ".hr-reviews .swiper-pagination", type: "fraction"},
//         navigation: {
//             nextEl: ".hr-reviews .slider-navigation__button--next",
//             prevEl: ".hr-reviews .slider-navigation__button--prev"
//         }
//     })
// }(), function () {
//     var e = document.querySelector(".team__slider");
//     e && new Y(e, {
//         watchOverflow: !0,
//         effect: "slide",
//         breakpoints: {
//             768: {slidesPerView: 4, spaceBetween: 20},
//             500: {slidesPerView: 2, spaceBetween: 20},
//             0: {slidesPerView: 1.2, spaceBetween: 10}
//         },
//         navigation: {
//             nextEl: ".team .slider-navigation__button--next",
//             prevEl: ".team .slider-navigation__button--prev"
//         },
//         pagination: {el: ".team .swiper-pagination", type: "fraction"},
//         a11y: {
//             enabled: !0,
//             prevSlideMessage: "Переход на предыдущий слайд",
//             nextSlideMessage: "Переход на следующий слайд"
//         }
//     })
// }(), function () {
//     var e = document.querySelectorAll(".reviewsPage-reviews");
//     e.length && e.forEach((function (e) {
//         var t = e.querySelector(".reviewsPage-reviews__swiper");
//         new Y(t, {
//             loop: !0,
//             effect: "slide",
//             spaceBetween: 20,
//             breakpoints: {
//                 1441: {slidesPerView: 6},
//                 1171: {slidesPerView: 4},
//                 651: {slidesPerView: 2},
//                 501: {slidesPerView: 1.5},
//                 350: {slidesPerView: 1.4},
//                 0: {slidesPerView: 1}
//             },
//             navigation: {
//                 nextEl: e.querySelector(".reviewsPage__reviews .slider-navigation__button--next"),
//                 prevEl: e.querySelector(".reviewsPage__reviews .slider-navigation__button--prev")
//             },
//             pagination: {el: e.querySelector(".swiper-pagination"), type: "fraction"},
//             a11y: {
//                 enabled: !0,
//                 prevSlideMessage: "Переход на предыдущий слайд",
//                 nextSlideMessage: "Переход на следующий слайд"
//             }
//         });
//         var n = e.querySelectorAll(".reviewsPage-reviews__slide");
//         null == n || n.forEach((function (e) {
//             e.addEventListener("mouseover", (function () {
//                 var t;
//                 return null === (t = e.querySelector("video")) || void 0 === t ? void 0 : t.play()
//             })), e.addEventListener("mouseleave", (function () {
//                 var t;
//                 return null === (t = e.querySelector("video")) || void 0 === t ? void 0 : t.pause()
//             }))
//         }))
//     })), e.length && e.forEach((function (e, t) {
//         var n = e.querySelectorAll(".swiper-slide-duplicate");
//         null == n || n.forEach((function (e, n) {
//             var r;
//             null === (r = e.querySelector(".reviewsPage-reviews__slide-play")) || void 0 === r || r.setAttribute("data-fslightbox", "dublicate-review-".concat(t + 1, "-").concat(n + 1))
//         }))
//     })), refreshFsLightbox()
// }(), function () {
//     var e = document.querySelectorAll(".job-seeker");
//     e.length && e.forEach((function (e) {
//         var t = e.querySelector(".job-seeker__slider");
//         new Y(t, {
//             loop: !0,
//             lazy: !0,
//             effect: "slide",
//             slidesPerView: 1,
//             spaceBetween: 10,
//             autoHeight: !0,
//             navigation: {
//                 nextEl: e.querySelector(".slider-navigation__button--next"),
//                 prevEl: e.querySelector(".slider-navigation__button--prev")
//             },
//             pagination: {el: e.querySelector(".swiper-pagination"), type: "fraction"},
//             a11y: {
//                 enabled: !0,
//                 prevSlideMessage: "Переход на предыдущий слайд",
//                 nextSlideMessage: "Переход на следующий слайд"
//             }
//         })
//     }))
// }(), function () {
//     var e = document.querySelector(".riskDiss__content");
//     e && new Y(e, {
//         autoHeight: !0,
//         loop: !1,
//         lazy: !0,
//         spaceBetween: 20,
//         slidesPerView: 1,
//         navigation: {
//             nextEl: ".riskDiss__navigation-next",
//             prevEl: ".riskDiss__navigation-prev",
//             disabledClass: "last"
//         },
//         pagination: {el: ".riskDiss__pagination", type: "fraction"}
//     })
// }()
// };