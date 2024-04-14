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