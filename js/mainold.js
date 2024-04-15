/*! For license information please see main.js.LICENSE.txt */
// !function () {
//     var e = {
//         421: function (e, t) {
//             (function () {
//                 "use strict";
//                 var n = function () {
//                     function e() {
//                         this.queue = new i, this.cancellationTokens = [], this.element = null
//                     }
//
//                     var t = {
//                         default: {
//                             className: "default",
//                             fadeDuration: 400,
//                             fadeInterval: 16,
//                             duration: 2e3,
//                             closeButton: !1,
//                             immediately: !1
//                         },
//                         success: {className: "success"},
//                         info: {className: "info"},
//                         warning: {className: "warning"},
//                         error: {className: "error", duration: 3e3, closeButton: !0}
//                     };
//                     for (var n in e.prototype.initElement = function (e) {
//                         var n = document.createElement("div"), r = document.createElement("div"),
//                             i = document.createElement("div"), s = document.createElement("span");
//                         n.setAttribute("id", "vanilla-toast-container"), r.setAttribute("id", "vanilla-toast"), i.setAttribute("id", "vanilla-toast-text"), s.setAttribute("id", "vanilla-toast-close-button"), s.innerHTML = "&#10006;", r.appendChild(i), r.appendChild(s), n.appendChild(r), e ? document.getElementById(seletor).appendChild(containter) : document.body.appendChild(n), this.element = {
//                             container: n,
//                             toastBox: r,
//                             text: i,
//                             closeButton: s
//                         }, o(this, t.default)
//                     }, e.prototype.cancel = function () {
//                         this.cancellationTokens.length && this.cancellationTokens[0].cancel()
//                     }, e.prototype.cancelAll = function () {
//                         for (var e = this.cancellationTokens.length, t = 0; t < e; ++t) this.cancellationTokens[e - t - 1].cancel()
//                     }, e.prototype.show = function (e, n, i) {
//                         var a = this;
//                         a.element || a.initElement(), n || (n = {}), n.immediately && a.cancelAll();
//                         var l = new r;
//                         return a.queue.enqueue((function (r) {
//                             var u = n.fadeDuration || t.default.fadeDuration,
//                                 c = n.fadeInterval || t.default.fadeInterval, d = Math.min(c / u, 1),
//                                 p = n.duration || t.default.duration;
//                             a.element.closeButton.style.display = n.closeButton ? "inline" : "none", a.element.text.innerHTML = e;
//                             var h = a.element.toastBox.style;
//                             h.opacity = 0, h.display = "inline-block", o(a, n);
//                             var f = null, m = function () {
//                                 f = null, a.element.toastBox.removeEventListener("click", g), function (e, n, r, i) {
//                                     n || (n = {});
//                                     var o = n.fadeDuration || t.default.fadeDuration,
//                                         a = n.fadeInterval || t.default.fadeInterval, l = Math.min(a / o, 1),
//                                         u = e.element.toastBox.style;
//                                     u.opacity = 1, s(u, -l, a, r, (function () {
//                                         u.display = "none", i && i()
//                                     }))
//                                 }(a, n, l, (function () {
//                                     i && i(), a.cancellationTokens.shift().dispose(), r()
//                                 }))
//                             }, g = function () {
//                                 f && (clearTimeout(f), m())
//                             };
//                             s(h, d, c, l, (function () {
//                                 a.element.toastBox.addEventListener("click", g), l.isCancellationRequested ? m() : (f = setTimeout(m, p), l.register((function () {
//                                     g()
//                                 })))
//                             }))
//                         })), a.cancellationTokens.push(l), a
//                     }, t) !function (n) {
//                         e.prototype[n] = function (e, r, i) {
//                             for (var o in r || (r = {}), t[n]) void 0 === r[o] && (r[o] = t[n][o]);
//                             return this.show(e, r, i)
//                         }
//                     }(n);
//
//                     function o(e, n) {
//                         e.element.toastBox.className = n.className || t.default.className
//                     }
//
//                     function s(e, t, n, r, i) {
//                         !function o() {
//                             if (r.isCancellationRequested) return e.opacity = t < 0 ? 0 : 1, void (i && i());
//                             if (e.opacity = Number(e.opacity) + t, t < 0 && e.opacity < 0) i && i(); else if (t > 0 && e.opacity >= 1) i && i(); else {
//                                 var s = setTimeout((function () {
//                                     s = null, o()
//                                 }), n);
//                                 r.register((function () {
//                                     s && (clearTimeout(s), s = null, i && i())
//                                 }))
//                             }
//                         }()
//                     }
//
//                     return e
//                 }(), r = function () {
//                     function e() {
//                         this.isCancellationRequested = !1, this.cancelCallbacks = []
//                     }
//
//                     return e.prototype.cancel = function () {
//                         this.isCancellationRequested = !0;
//                         for (var e = this.cancelCallbacks.slice(); e.length;) e.shift()()
//                     }, e.prototype.register = function (e) {
//                         this.cancelCallbacks.push(e)
//                     }, e.prototype.dispose = function () {
//                         for (; this.cancelCallbacks.length;) this.cancelCallbacks.shift()
//                     }, e
//                 }(), i = function () {
//                     function e() {
//                         this.queue = [], this.isExecuting = !1
//                     }
//
//                     function t(e) {
//                         if (!e.isExecuting) {
//                             var n = e.queue.shift();
//                             n && (e.isExecuting = !0, n((function () {
//                                 e.isExecuting = !1, t(e)
//                             })))
//                         }
//                     }
//
//                     return e.prototype.enqueue = function (e) {
//                         this.queue.push(e), t(this)
//                     }, e
//                 }();
//                 e.exports && (t = e.exports = new n), t.vanillaToast = new n
//             }).call(this)
//         }, 808: function (e, t, n) {
//             var r, i, o, s;
//
//             function a(e) {
//                 return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//                     return typeof e
//                 } : function (e) {
//                     return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//                 }, a(e)
//             }
//
//             e = n.nmd(e), window, s = function () {
//                 return function (e) {
//                     var t = {};
//
//                     function n(r) {
//                         if (t[r]) return t[r].exports;
//                         var i = t[r] = {i: r, l: !1, exports: {}};
//                         return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
//                     }
//
//                     return n.m = e, n.c = t, n.d = function (e, t, r) {
//                         n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
//                     }, n.r = function (e) {
//                         "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
//                     }, n.t = function (e, t) {
//                         if (1 & t && (e = n(e)), 8 & t) return e;
//                         if (4 & t && "object" == a(e) && e && e.__esModule) return e;
//                         var r = Object.create(null);
//                         if (n.r(r), Object.defineProperty(r, "default", {
//                             enumerable: !0,
//                             value: e
//                         }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
//                             return e[t]
//                         }.bind(null, i));
//                         return r
//                     }, n.n = function (e) {
//                         var t = e && e.__esModule ? function () {
//                             return e.default
//                         } : function () {
//                             return e
//                         };
//                         return n.d(t, "a", t), t
//                     }, n.o = function (e, t) {
//                         return Object.prototype.hasOwnProperty.call(e, t)
//                     }, n.p = "", n(n.s = 0)
//                 }([function (e, t, n) {
//                     "use strict";
//                     n.r(t);
//                     var r, i = "fslightbox-", o = "".concat(i, "styles"), s = "".concat(i, "cursor-grabbing"),
//                         l = "".concat(i, "full-dimension"), u = "".concat(i, "flex-centered"), c = "".concat(i, "open"),
//                         d = "".concat(i, "transform-transition"), p = "".concat(i, "absoluted"),
//                         h = "".concat(i, "slide-btn"), f = "".concat(h, "-container"), m = "".concat(i, "fade-in"),
//                         g = "".concat(i, "fade-out"), v = m + "-strong", y = g + "-strong",
//                         b = "".concat(i, "opacity-"), w = "".concat(b, "1"), S = "".concat(i, "source");
//
//                     function x(e) {
//                         return (x = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
//                             return a(e)
//                         } : function (e) {
//                             return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
//                         })(e)
//                     }
//
//                     function E(e) {
//                         var t, n = e.props, r = 0, i = {};
//                         this.getSourceTypeFromLocalStorageByUrl = function (e) {
//                             return t[e] ? t[e] : o(e)
//                         }, this.handleReceivedSourceTypeForUrl = function (e, n) {
//                             if (!1 === i[n] && (r--, "invalid" !== e ? i[n] = e : delete i[n], 0 === r)) {
//                                 !function (e, t) {
//                                     for (var n in t) e[n] = t[n]
//                                 }(t, i);
//                                 try {
//                                     localStorage.setItem("fslightbox-types", JSON.stringify(t))
//                                 } catch (e) {
//                                 }
//                             }
//                         };
//                         var o = function (e) {
//                             r++, i[e] = !1
//                         };
//                         if (n.disableLocalStorage) this.getSourceTypeFromLocalStorageByUrl = function () {
//                         }, this.handleReceivedSourceTypeForUrl = function () {
//                         }; else {
//                             try {
//                                 t = JSON.parse(localStorage.getItem("fslightbox-types"))
//                             } catch (e) {
//                             }
//                             t || (t = {}, this.getSourceTypeFromLocalStorageByUrl = o)
//                         }
//                     }
//
//                     function _(e, t, n, r) {
//                         var i = e.data, o = e.elements.sources, s = n / r, a = 0;
//                         this.adjustSize = function () {
//                             if ((a = i.maxSourceWidth / s) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = r), l();
//                             a = r > i.maxSourceHeight ? i.maxSourceHeight : r, l()
//                         };
//                         var l = function () {
//                             o[t].style.width = a * s + "px", o[t].style.height = a + "px"
//                         }
//                     }
//
//                     function k(e, t) {
//                         var n = this, r = e.collections.sourceSizers, i = e.elements, o = i.sourceAnimationWrappers,
//                             s = i.sources, a = e.isl, l = e.resolve;
//
//                         function u(e, n) {
//                             r[t] = l(_, [t, e, n]), r[t].adjustSize()
//                         }
//
//                         this.runActions = function (e, r) {
//                             a[t] = !0, s[t].classList.add(w), o[t].classList.add(v), o[t].removeChild(o[t].firstChild), u(e, r), n.runActions = u
//                         }
//                     }
//
//                     function C(e, t) {
//                         var n, r = this, i = e.elements.sources, o = e.props, s = (0, e.resolve)(k, [t]);
//                         this.handleImageLoad = function (e) {
//                             var t = e.target, n = t.naturalWidth, r = t.naturalHeight;
//                             s.runActions(n, r)
//                         }, this.handleVideoLoad = function (e) {
//                             var t = e.target, r = t.videoWidth, i = t.videoHeight;
//                             n = !0, s.runActions(r, i)
//                         }, this.handleNotMetaDatedVideoLoad = function () {
//                             n || r.handleYoutubeLoad()
//                         }, this.handleYoutubeLoad = function () {
//                             var e = 1920, t = 1080;
//                             o.maxYoutubeDimensions && (e = o.maxYoutubeDimensions.width, t = o.maxYoutubeDimensions.height), s.runActions(e, t)
//                         }, this.handleCustomLoad = function () {
//                             var e = i[t], n = e.offsetWidth, o = e.offsetHeight;
//                             n && o ? s.runActions(n, o) : setTimeout(r.handleCustomLoad)
//                         }
//                     }
//
//                     function A(e, t, n) {
//                         var r = e.elements.sources, i = e.props.customClasses, o = i[t] ? i[t] : "";
//                         r[t].className = n + " " + o
//                     }
//
//                     function T(e, t) {
//                         var n = e.elements.sources, r = e.props.customAttributes;
//                         for (var i in r[t]) n[t].setAttribute(i, r[t][i])
//                     }
//
//                     function L(e, t) {
//                         var n = e.collections.sourceLoadHandlers, r = e.elements, i = r.sources,
//                             o = r.sourceAnimationWrappers, s = e.props.sources;
//                         i[t] = document.createElement("img"), A(e, t, S), i[t].src = s[t], i[t].onload = n[t].handleImageLoad, T(e, t), o[t].appendChild(i[t])
//                     }
//
//                     function P(e, t) {
//                         var n = e.collections.sourceLoadHandlers, r = e.elements, i = r.sources,
//                             o = r.sourceAnimationWrappers, s = e.props, a = s.sources, l = s.videosPosters;
//                         i[t] = document.createElement("video"), A(e, t, S), i[t].src = a[t], i[t].onloadedmetadata = function (e) {
//                             n[t].handleVideoLoad(e)
//                         }, i[t].controls = !0, T(e, t), l[t] && (i[t].poster = l[t]);
//                         var u = document.createElement("source");
//                         u.src = a[t], i[t].appendChild(u), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), o[t].appendChild(i[t])
//                     }
//
//                     function O(e, t) {
//                         var n = e.collections.sourceLoadHandlers, r = e.elements, o = r.sources,
//                             s = r.sourceAnimationWrappers, a = e.props.sources;
//                         o[t] = document.createElement("iframe"), A(e, t, "".concat(S, " ").concat(i, "youtube-iframe"));
//                         var l = a[t], u = l.split("?")[1];
//                         o[t].src = "https://www.youtube.com/embed/".concat(l.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?").concat(u || ""), o[t].allowFullscreen = !0, T(e, t), s[t].appendChild(o[t]), n[t].handleYoutubeLoad()
//                     }
//
//                     function I(e, t) {
//                         var n = e.collections.sourceLoadHandlers, r = e.elements, i = r.sources,
//                             o = r.sourceAnimationWrappers, s = e.props.sources;
//                         i[t] = s[t], A(e, t, "".concat(i[t].className, " ").concat(S)), o[t].appendChild(i[t]), n[t].handleCustomLoad()
//                     }
//
//                     function M(e, t) {
//                         var n = e.elements, r = n.sources, o = n.sourceAnimationWrappers;
//                         e.props.sources, r[t] = document.createElement("div"), r[t].className = "".concat(i, "invalid-file-wrapper ").concat(u), r[t].innerHTML = "Invalid source", o[t].classList.add(v), o[t].removeChild(o[t].firstChild), o[t].appendChild(r[t])
//                     }
//
//                     function F(e) {
//                         var t = e.collections, n = t.sourceLoadHandlers, r = t.sourcesRenderFunctions,
//                             i = e.core.sourceDisplayFacade, o = e.resolve;
//                         this.runActionsForSourceTypeAndIndex = function (t, s) {
//                             var a;
//                             switch ("invalid" !== t && (n[s] = o(C, [s])), t) {
//                                 case"image":
//                                     a = L;
//                                     break;
//                                 case"video":
//                                     a = P;
//                                     break;
//                                 case"youtube":
//                                     a = O;
//                                     break;
//                                 case"custom":
//                                     a = I;
//                                     break;
//                                 default:
//                                     a = M
//                             }
//                             r[s] = function () {
//                                 return a(e, s)
//                             }, i.displaySourcesWhichShouldBeDisplayed()
//                         }
//                     }
//
//                     function B() {
//                         var e, t, n;
//
//                         function r() {
//                             if (4 !== n.readyState) {
//                                 if (2 === n.readyState) {
//                                     var e;
//                                     switch (function (e) {
//                                         return e.slice(0, e.indexOf("/"))
//                                     }(n.getResponseHeader("content-type"))) {
//                                         case"image":
//                                             e = "image";
//                                             break;
//                                         case"video":
//                                             e = "video";
//                                             break;
//                                         default:
//                                             e = "invalid"
//                                     }
//                                     n.onreadystatechange = null, n.abort(), t(e)
//                                 }
//                             } else t("invalid")
//                         }
//
//                         this.setUrlToCheck = function (t) {
//                             e = t
//                         }, this.getSourceType = function (i) {
//                             if (function (e) {
//                                 var t = document.createElement("a");
//                                 return t.href = e, "www.youtube.com" === t.hostname || "youtu.be" === t.hostname
//                             }(e)) return i("youtube");
//                             t = i, (n = new XMLHttpRequest).onreadystatechange = r, n.open("GET", e, !0), n.send()
//                         }
//                     }
//
//                     function D(e, t, n) {
//                         var r = e.props, i = r.types, o = r.type, s = r.sources, a = e.resolve;
//                         this.getTypeSetByClientForIndex = function (e) {
//                             var t;
//                             return i && i[e] ? t = i[e] : o && (t = o), t
//                         }, this.retrieveTypeWithXhrForIndex = function (e) {
//                             var r = a(B);
//                             r.setUrlToCheck(s[e]), r.getSourceType((function (r) {
//                                 t.handleReceivedSourceTypeForUrl(r, s[e]), n.runActionsForSourceTypeAndIndex(r, e)
//                             }))
//                         }
//                     }
//
//                     function q(e, t) {
//                         var n = e.core.stageManager, r = e.elements, i = r.smw, o = r.sourceWrappersContainer,
//                             s = e.props, a = 0, c = document.createElement("div");
//
//                         function h(e) {
//                             c.style.transform = "translateX(".concat(e + a, "px)"), a = 0
//                         }
//
//                         function f() {
//                             return (1 + s.slideDistance) * innerWidth
//                         }
//
//                         c.className = "".concat(p, " ").concat(l, " ").concat(u), c.s = function () {
//                             c.style.display = "flex"
//                         }, c.h = function () {
//                             c.style.display = "none"
//                         }, c.a = function () {
//                             c.classList.add(d)
//                         }, c.d = function () {
//                             c.classList.remove(d)
//                         }, c.n = function () {
//                             c.style.removeProperty("transform")
//                         }, c.v = function (e) {
//                             return a = e, c
//                         }, c.ne = function () {
//                             h(-f())
//                         }, c.z = function () {
//                             h(0)
//                         }, c.p = function () {
//                             h(f())
//                         }, n.i(t) || c.h(), i[t] = c, o.appendChild(c), function (e, t) {
//                             var n = e.elements, r = n.smw, i = n.sourceAnimationWrappers,
//                                 o = document.createElement("div"), s = document.createElement("div");
//                             s.className = "fslightboxl";
//                             for (var a = 0; a < 3; a++) {
//                                 var l = document.createElement("div");
//                                 s.appendChild(l)
//                             }
//                             o.appendChild(s), r[t].appendChild(o), i[t] = o
//                         }(e, t)
//                     }
//
//                     function R(e, t, n, r) {
//                         var o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//                         o.setAttributeNS(null, "width", t), o.setAttributeNS(null, "height", t), o.setAttributeNS(null, "viewBox", n);
//                         var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
//                         return s.setAttributeNS(null, "class", "".concat(i, "svg-path")), s.setAttributeNS(null, "d", r), o.appendChild(s), e.appendChild(o), o
//                     }
//
//                     function j(e, t) {
//                         var n = document.createElement("div");
//                         return n.className = "".concat(i, "toolbar-button ").concat(u), n.title = t, e.appendChild(n), n
//                     }
//
//                     function N(e) {
//                         var t = e.props.sources, n = e.elements.container, r = document.createElement("div");
//                         r.className = "".concat(i, "nav"), n.appendChild(r), function (e, t) {
//                             var n = document.createElement("div");
//                             n.className = "".concat(i, "toolbar"), t.appendChild(n), function (e, t) {
//                                 var n = e.componentsServices, r = e.data, i = e.fs,
//                                     o = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
//                                     s = j(t);
//                                 s.title = "Enter fullscreen";
//                                 var a = R(s, "20px", "0 0 18 18", o);
//                                 n.ofs = function () {
//                                     r.ifs = !0, s.title = "Exit fullscreen", a.setAttributeNS(null, "width", "24px"), a.setAttributeNS(null, "height", "24px"), a.setAttributeNS(null, "viewBox", "0 0 950 1024"), a.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")
//                                 }, n.xfs = function () {
//                                     r.ifs = !1, s.title = "Enter fullscreen", a.setAttributeNS(null, "width", "20px"), a.setAttributeNS(null, "height", "20px"), a.setAttributeNS(null, "viewBox", "0 0 18 18"), a.firstChild.setAttributeNS(null, "d", o)
//                                 }, s.onclick = i.t
//                             }(e, n), function (e, t) {
//                                 var n = j(t, "Close");
//                                 n.onclick = e.core.lightboxCloser.closeLightbox, R(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")
//                             }(e, n)
//                         }(e, r), t.length > 1 && function (e, t) {
//                             var n = e.componentsServices, r = e.props.sources,
//                                 o = (e.stageIndexes, document.createElement("div"));
//                             o.className = "".concat(i, "slide-number-container");
//                             var s = document.createElement("div");
//                             s.className = u;
//                             var a = document.createElement("span");
//                             n.setSlideNumber = function (e) {
//                                 return a.innerHTML = e
//                             };
//                             var l = document.createElement("span");
//                             l.className = "".concat(i, "slash");
//                             var c = document.createElement("div");
//                             c.innerHTML = r.length, o.appendChild(s), s.appendChild(a), s.appendChild(l), s.appendChild(c), t.appendChild(o), setTimeout((function () {
//                                 s.offsetWidth > 55 && (o.style.justifyContent = "flex-start")
//                             }))
//                         }(e, r)
//                     }
//
//                     function V(e, t, n, r) {
//                         var i = e.elements.container, o = n.charAt(0).toUpperCase() + n.slice(1),
//                             s = document.createElement("div");
//                         s.className = "".concat(f, " ").concat(f, "-").concat(n), s.title = "".concat(o, " slide"), s.onclick = t, function (e, t) {
//                             var n = document.createElement("div");
//                             n.className = "".concat(h, " ").concat(u), R(n, "20px", "0 0 20 20", t), e.appendChild(n)
//                         }(s, r), i.appendChild(s)
//                     }
//
//                     function z(e) {
//                         var t = e.core, n = t.lightboxCloser, r = t.slideChangeFacade, i = e.fs;
//                         this.listener = function (e) {
//                             switch (e.key) {
//                                 case"Escape":
//                                     n.closeLightbox();
//                                     break;
//                                 case"ArrowLeft":
//                                     r.changeToPrevious();
//                                     break;
//                                 case"ArrowRight":
//                                     r.changeToNext();
//                                     break;
//                                 case"F11":
//                                     e.preventDefault(), i.t()
//                             }
//                         }
//                     }
//
//                     function $(e) {
//                         var t = e.elements, n = e.sourcePointerProps, r = e.stageIndexes;
//
//                         function i(e, r) {
//                             t.smw[e].v(n.swipedX)[r]()
//                         }
//
//                         this.runActionsForEvent = function (e) {
//                             var o, a, l;
//                             t.container.contains(t.slideSwipingHoverer) || t.container.appendChild(t.slideSwipingHoverer), o = t.container, a = s, (l = o.classList).contains(a) || l.add(a), n.swipedX = e.screenX - n.downScreenX;
//                             var u = r.previous, c = r.next;
//                             i(r.current, "z"), void 0 !== u && n.swipedX > 0 ? i(u, "ne") : void 0 !== c && n.swipedX < 0 && i(c, "p")
//                         }
//                     }
//
//                     function H(e) {
//                         var t = e.props.sources, n = e.resolve, r = e.sourcePointerProps, i = n($);
//                         1 === t.length ? this.listener = function () {
//                             r.swipedX = 1
//                         } : this.listener = function (e) {
//                             r.isPointering && i.runActionsForEvent(e)
//                         }
//                     }
//
//                     function G(e) {
//                         var t = e.core.slideIndexChanger, n = e.elements.smw, r = e.stageIndexes, i = e.sws;
//
//                         function o(e) {
//                             var t = n[r.current];
//                             t.a(), t[e]()
//                         }
//
//                         function s(e, t) {
//                             void 0 !== e && (n[e].s(), n[e][t]())
//                         }
//
//                         this.runPositiveSwipedXActions = function () {
//                             var e = r.previous;
//                             if (void 0 === e) o("z"); else {
//                                 o("p");
//                                 var n = r.next;
//                                 t.changeTo(e);
//                                 var a = r.previous;
//                                 i.d(a), i.b(n), o("z"), s(a, "ne")
//                             }
//                         }, this.runNegativeSwipedXActions = function () {
//                             var e = r.next;
//                             if (void 0 === e) o("z"); else {
//                                 o("ne");
//                                 var n = r.previous;
//                                 t.changeTo(e);
//                                 var a = r.next;
//                                 i.d(a), i.b(n), o("z"), s(a, "p")
//                             }
//                         }
//                     }
//
//                     function U(e, t) {
//                         e.contains(t) && e.removeChild(t)
//                     }
//
//                     function W(e) {
//                         var t = e.core.lightboxCloser, n = e.elements, r = e.resolve, i = e.sourcePointerProps,
//                             o = r(G);
//                         this.runNoSwipeActions = function () {
//                             U(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), i.isPointering = !1
//                         }, this.runActions = function () {
//                             i.swipedX > 0 ? o.runPositiveSwipedXActions() : o.runNegativeSwipedXActions(), U(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), i.isPointering = !1
//                         }
//                     }
//
//                     function Y(e) {
//                         var t = e.resolve, n = e.sourcePointerProps, r = t(W);
//                         this.listener = function () {
//                             n.isPointering && (n.swipedX ? r.runActions() : r.runNoSwipeActions())
//                         }
//                     }
//
//                     function X(e) {
//                         var t = this, n = e.core, r = n.eventsDispatcher, i = n.globalEventsController,
//                             o = n.scrollbarRecompensor, s = e.data, a = e.elements, l = e.fs, u = e.props,
//                             d = e.sourcePointerProps;
//                         this.isLightboxFadingOut = !1, this.runActions = function () {
//                             t.isLightboxFadingOut = !0, a.container.classList.add(y), i.removeListeners(), u.exitFullscreenOnClose && s.ifs && l.x(), setTimeout((function () {
//                                 t.isLightboxFadingOut = !1, d.isPointering = !1, a.container.classList.remove(y), document.documentElement.classList.remove(c), o.removeRecompense(), document.body.removeChild(a.container), r.dispatch("onClose")
//                             }), 270)
//                         }
//                     }
//
//                     function K(e, t) {
//                         var n = e.classList;
//                         n.contains(t) && n.remove(t)
//                     }
//
//                     function J(e) {
//                         var t, n, r;
//                         n = (t = e).core.eventsDispatcher, r = t.props, n.dispatch = function (e) {
//                             r[e] && r[e]()
//                         }, function (e) {
//                             var t = e.componentsServices, n = e.data, r = e.fs,
//                                 i = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
//
//                             function o(e) {
//                                 for (var t = 0; t < i.length; t++) document[e](i[t], s)
//                             }
//
//                             function s() {
//                                 document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement ? t.ofs() : t.xfs()
//                             }
//
//                             r.o = function () {
//                                 t.ofs();
//                                 var e = document.documentElement;
//                                 e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
//                             }, r.x = function () {
//                                 t.xfs(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
//                             }, r.t = function () {
//                                 n.ifs ? r.x() : r.o()
//                             }, r.l = function () {
//                                 o("addEventListener")
//                             }, r.q = function () {
//                                 o("removeEventListener")
//                             }
//                         }(e), function (e) {
//                             var t = e.core, n = t.globalEventsController, r = t.windowResizeActioner, i = e.fs,
//                                 o = e.resolve, s = o(z), a = o(H), l = o(Y);
//                             n.attachListeners = function () {
//                                 document.addEventListener("pointermove", a.listener), document.addEventListener("pointerup", l.listener), addEventListener("resize", r.runActions), document.addEventListener("keydown", s.listener), i.l()
//                             }, n.removeListeners = function () {
//                                 document.removeEventListener("pointermove", a.listener), document.removeEventListener("pointerup", l.listener), removeEventListener("resize", r.runActions), document.removeEventListener("keydown", s.listener), i.q()
//                             }
//                         }(e), function (e) {
//                             var t = e.core.lightboxCloser, n = (0, e.resolve)(X);
//                             t.closeLightbox = function () {
//                                 n.isLightboxFadingOut || n.runActions()
//                             }
//                         }(e), function (e) {
//                             var t = e.data, n = e.core.scrollbarRecompensor;
//
//                             function r() {
//                                 document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px")
//                             }
//
//                             n.addRecompense = function () {
//                                 "complete" === document.readyState ? r() : addEventListener("load", (function () {
//                                     r(), n.addRecompense = r
//                                 }))
//                             }, n.removeRecompense = function () {
//                                 document.body.style.removeProperty("margin-right")
//                             }
//                         }(e), function (e) {
//                             var t = e.core, n = t.slideChangeFacade, r = t.slideIndexChanger, i = t.stageManager;
//                             e.props.sources.length > 1 ? (n.changeToPrevious = function () {
//                                 r.jumpTo(i.getPreviousSlideIndex())
//                             }, n.changeToNext = function () {
//                                 r.jumpTo(i.getNextSlideIndex())
//                             }) : (n.changeToPrevious = function () {
//                             }, n.changeToNext = function () {
//                             })
//                         }(e), function (e) {
//                             var t = e.componentsServices, n = e.core, r = n.slideIndexChanger,
//                                 i = n.sourceDisplayFacade, o = n.stageManager, s = e.elements, a = s.smw,
//                                 l = s.sourceAnimationWrappers, u = e.isl, c = e.stageIndexes, d = e.sws;
//                             r.changeTo = function (e) {
//                                 c.current = e, o.updateStageIndexes(), t.setSlideNumber(e + 1), i.displaySourcesWhichShouldBeDisplayed()
//                             }, r.jumpTo = function (e) {
//                                 var t = c.previous, n = c.current, i = c.next, s = u[n], p = u[e];
//                                 r.changeTo(e);
//                                 for (var h = 0; h < a.length; h++) a[h].d();
//                                 d.d(n), d.c(), requestAnimationFrame((function () {
//                                     requestAnimationFrame((function () {
//                                         var e = c.previous, r = c.next;
//
//                                         function h() {
//                                             o.i(n) ? n === c.previous ? a[n].ne() : n === c.next && a[n].p() : (a[n].h(), a[n].n())
//                                         }
//
//                                         s && l[n].classList.add(g), p && l[c.current].classList.add(m), d.a(), void 0 !== e && e !== n && a[e].ne(), a[c.current].n(), void 0 !== r && r !== n && a[r].p(), d.b(t), d.b(i), u[n] ? setTimeout(h, 260) : h()
//                                     }))
//                                 }))
//                             }
//                         }(e), function (e) {
//                             var t = e.core.sourcesPointerDown, n = e.elements, r = n.smw, i = n.sources,
//                                 o = e.sourcePointerProps, s = e.stageIndexes;
//                             t.listener = function (e) {
//                                 "VIDEO" !== e.target.tagName && e.preventDefault(), o.isPointering = !0, o.downScreenX = e.screenX, o.swipedX = 0;
//                                 var t = i[s.current];
//                                 t && t.contains(e.target) ? o.isSourceDownEventTarget = !0 : o.isSourceDownEventTarget = !1;
//                                 for (var n = 0; n < r.length; n++) r[n].d()
//                             }
//                         }(e), function (e) {
//                             var t = e.collections.sourcesRenderFunctions, n = e.core.sourceDisplayFacade, r = e.props,
//                                 i = e.stageIndexes;
//
//                             function o(e) {
//                                 t[e] && (t[e](), delete t[e])
//                             }
//
//                             n.displaySourcesWhichShouldBeDisplayed = function () {
//                                 if (r.loadOnlyCurrentSource) o(i.current); else for (var e in i) o(i[e])
//                             }
//                         }(e), function (e) {
//                             var t = e.core.stageManager, n = e.elements, r = n.smw, i = n.sourceAnimationWrappers,
//                                 o = e.isl, s = e.stageIndexes, a = e.sws;
//                             a.a = function () {
//                                 for (var e in s) r[s[e]].s()
//                             }, a.b = function (e) {
//                                 void 0 === e || t.i(e) || (r[e].h(), r[e].n())
//                             }, a.c = function () {
//                                 for (var e in s) a.d(s[e])
//                             }, a.d = function (e) {
//                                 if (o[e]) {
//                                     var t = i[e];
//                                     K(t, v), K(t, m), K(t, g)
//                                 }
//                             }
//                         }(e), function (e) {
//                             var t = e.collections.sourceSizers, n = e.core.windowResizeActioner, r = e.data,
//                                 i = e.elements.smw, o = e.stageIndexes;
//                             n.runActions = function () {
//                                 innerWidth < 992 ? r.maxSourceWidth = innerWidth : r.maxSourceWidth = .9 * innerWidth, r.maxSourceHeight = .9 * innerHeight;
//                                 for (var e = 0; e < i.length; e++) i[e].d(), t[e] && t[e].adjustSize();
//                                 var n = o.previous, s = o.next;
//                                 void 0 !== n && i[n].ne(), void 0 !== s && i[s].p()
//                             }
//                         }(e)
//                     }
//
//                     function Z(e, t, n) {
//                         return (Z = function () {
//                             if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
//                             if (Reflect.construct.sham) return !1;
//                             if ("function" == typeof Proxy) return !0;
//                             try {
//                                 return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
//                                 }))), !0
//                             } catch (e) {
//                                 return !1
//                             }
//                         }() ? Reflect.construct.bind() : function (e, t, n) {
//                             var r = [null];
//                             r.push.apply(r, t);
//                             var i = new (Function.bind.apply(e, r));
//                             return n && Q(i, n.prototype), i
//                         }).apply(null, arguments)
//                     }
//
//                     function Q(e, t) {
//                         return (Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
//                             return e.__proto__ = t, e
//                         })(e, t)
//                     }
//
//                     function ee(e, t) {
//                         (null == t || t > e.length) && (t = e.length);
//                         for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
//                         return r
//                     }
//
//                     function te() {
//                         for (var e = document.getElementsByTagName("a"), t = function (t) {
//                             if (!e[t].hasAttribute("data-fslightbox")) return "continue";
//                             var n = e[t].hasAttribute("data-href") ? e[t].getAttribute("data-href") : e[t].getAttribute("href");
//                             if (!n) return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'), "continue";
//                             var r = e[t].getAttribute("data-fslightbox");
//                             fsLightboxInstances[r] || (fsLightboxInstances[r] = new FsLightbox);
//                             var i = null;
//                             "#" === n.charAt(0) ? (i = document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute("id") : i = n, fsLightboxInstances[r].props.sources.push(i), fsLightboxInstances[r].elements.a.push(e[t]);
//                             var o = fsLightboxInstances[r].props.sources.length - 1;
//                             e[t].onclick = function (e) {
//                                 e.preventDefault(), fsLightboxInstances[r].open(o)
//                             }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), d("customClasses", "data-custom-class");
//                             for (var s = ["href", "data-fslightbox", "data-href", "data-type", "data-video-poster", "data-class", "data-custom-class"], a = e[t].attributes, l = fsLightboxInstances[r].props.customAttributes, u = 0; u < a.length; u++) if (-1 === s.indexOf(a[u].name) && "data-" === a[u].name.substr(0, 5)) {
//                                 l[o] || (l[o] = {});
//                                 var c = a[u].name.substr(5);
//                                 l[o][c] = a[u].value
//                             }
//
//                             function d(n, i) {
//                                 e[t].hasAttribute(i) && (fsLightboxInstances[r].props[n][o] = e[t].getAttribute(i))
//                             }
//                         }, n = 0; n < e.length; n++) t(n);
//                         var r = Object.keys(fsLightboxInstances);
//                         window.fsLightbox = fsLightboxInstances[r[r.length - 1]]
//                     }
//
//                     "object" === ("undefined" == typeof document ? "undefined" : x(document)) && ((r = document.createElement("style")).className = o, r.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(r)), window.FsLightbox = function () {
//                         var e = this;
//                         this.props = {
//                             sources: [],
//                             customAttributes: [],
//                             customClasses: [],
//                             types: [],
//                             videosPosters: [],
//                             slideDistance: .3
//                         }, this.data = {
//                             isFullscreenOpen: !1,
//                             maxSourceWidth: 0,
//                             maxSourceHeight: 0,
//                             scrollbarWidth: 0
//                         }, this.isl = [], this.sourcePointerProps = {
//                             downScreenX: null,
//                             isPointering: !1,
//                             isSourceDownEventTarget: !1,
//                             swipedX: 0
//                         }, this.stageIndexes = {}, this.elements = {
//                             a: [],
//                             container: null,
//                             slideSwipingHoverer: null,
//                             smw: [],
//                             sourceWrappersContainer: null,
//                             sources: [],
//                             sourceAnimationWrappers: []
//                         }, this.componentsServices = {
//                             setSlideNumber: function () {
//                             }
//                         }, this.resolve = function (t) {
//                             var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
//                             return n.unshift(e), Z(t, function (e) {
//                                 return function (e) {
//                                     if (Array.isArray(e)) return ee(e)
//                                 }(e) || function (e) {
//                                     if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
//                                 }(e) || function (e, t) {
//                                     if (e) {
//                                         if ("string" == typeof e) return ee(e, t);
//                                         var n = Object.prototype.toString.call(e).slice(8, -1);
//                                         return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ee(e, t) : void 0
//                                     }
//                                 }(e) || function () {
//                                     throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//                                 }()
//                             }(n))
//                         }, this.collections = {
//                             sourceLoadHandlers: [],
//                             sourcesRenderFunctions: [],
//                             sourceSizers: []
//                         }, this.core = {
//                             eventsDispatcher: {},
//                             globalEventsController: {},
//                             lightboxCloser: {},
//                             lightboxUpdater: {},
//                             scrollbarRecompensor: {},
//                             slideChangeFacade: {},
//                             slideIndexChanger: {},
//                             sourcesPointerDown: {},
//                             sourceDisplayFacade: {},
//                             stageManager: {},
//                             windowResizeActioner: {}
//                         }, this.fs = {}, this.sws = {}, function (e) {
//                             var t = e.componentsServices, n = e.core, r = n.eventsDispatcher,
//                                 o = n.globalEventsController, s = n.scrollbarRecompensor, a = n.sourceDisplayFacade,
//                                 u = n.stageManager, d = n.windowResizeActioner, h = e.data, f = e.elements,
//                                 m = (e.props, e.stageIndexes), g = e.sws;
//
//                             function y() {
//                                 var t, n;
//                                 h.i = !0, h.scrollbarWidth = function () {
//                                     var e = document.createElement("div"), t = e.style,
//                                         n = document.createElement("div");
//                                     t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", n.style.width = "100%", document.body.appendChild(e);
//                                     var r = e.offsetWidth;
//                                     e.appendChild(n);
//                                     var i = n.offsetWidth;
//                                     return document.body.removeChild(e), r - i
//                                 }(), J(e), f.container = document.createElement("div"), f.container.className = "".concat(i, "container ").concat(l, " ").concat(v), function (e) {
//                                     var t = e.elements;
//                                     t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(l, " ").concat(p)
//                                 }(e), N(e), function (e) {
//                                     var t = e.core.sourcesPointerDown, n = e.elements, r = e.props.sources,
//                                         i = document.createElement("div");
//                                     i.className = "".concat(p, " ").concat(l), n.container.appendChild(i), i.addEventListener("pointerdown", t.listener), n.sourceWrappersContainer = i;
//                                     for (var o = 0; o < r.length; o++) q(e, o)
//                                 }(e), e.props.sources.length > 1 && (n = (t = e).core.slideChangeFacade, V(t, n.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), V(t, n.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")), function (e) {
//                                     for (var t = e.props.sources, n = e.resolve, r = n(E), i = n(F), o = n(D, [r, i]), s = 0; s < t.length; s++) if ("string" == typeof t[s]) {
//                                         var a = o.getTypeSetByClientForIndex(s);
//                                         if (a) i.runActionsForSourceTypeAndIndex(a, s); else {
//                                             var l = r.getSourceTypeFromLocalStorageByUrl(t[s]);
//                                             l ? i.runActionsForSourceTypeAndIndex(l, s) : o.retrieveTypeWithXhrForIndex(s)
//                                         }
//                                     } else i.runActionsForSourceTypeAndIndex("custom", s)
//                                 }(e), r.dispatch("onInit")
//                             }
//
//                             e.open = function () {
//                                 var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
//                                     i = m.previous, l = m.current, p = m.next;
//                                 m.current = n, h.i || function (e) {
//                                     var t = e.stageIndexes, n = e.core.stageManager, r = e.props.sources.length - 1;
//                                     n.getPreviousSlideIndex = function () {
//                                         return 0 === t.current ? r : t.current - 1
//                                     }, n.getNextSlideIndex = function () {
//                                         return t.current === r ? 0 : t.current + 1
//                                     }, n.updateStageIndexes = 0 === r ? function () {
//                                     } : 1 === r ? function () {
//                                         0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next)
//                                     } : function () {
//                                         t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex()
//                                     }, n.i = r <= 2 ? function () {
//                                         return !0
//                                     } : function (e) {
//                                         var n = t.current;
//                                         if (0 === n && e === r || n === r && 0 === e) return !0;
//                                         var i = n - e;
//                                         return -1 === i || 0 === i || 1 === i
//                                     }
//                                 }(e), u.updateStageIndexes(), h.i ? (g.c(), g.a(), g.b(i), g.b(l), g.b(p), r.dispatch("onShow")) : y(), a.displaySourcesWhichShouldBeDisplayed(), t.setSlideNumber(n + 1), document.body.appendChild(f.container), document.documentElement.classList.add(c), s.addRecompense(), o.attachListeners(), d.runActions(), f.smw[m.current].n(), r.dispatch("onOpen")
//                             }
//                         }(this), this.close = function () {
//                             return e.core.lightboxCloser.closeLightbox()
//                         }
//                     }, window.fsLightboxInstances = {}, te(), window.refreshFsLightbox = function () {
//                         for (var e in fsLightboxInstances) {
//                             var t = fsLightboxInstances[e].props;
//                             fsLightboxInstances[e] = new FsLightbox, fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = []
//                         }
//                         te()
//                     }
//                 }])
//             }, "object" == a(t) && "object" == a(e) ? e.exports = s() : (i = [], void 0 === (o = "function" == typeof (r = s) ? r.apply(t, i) : r) || (e.exports = o))
//         }
//     }, t = {};
//
//     function n(r) {
//         var i = t[r];
//         if (void 0 !== i) return i.exports;
//         var o = t[r] = {id: r, loaded: !1, exports: {}};
//         return e[r].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
//     }
//
//     n.n = function (e) {
//         var t = e && e.__esModule ? function () {
//             return e.default
//         } : function () {
//             return e
//         };
//         return n.d(t, {a: t}), t
//     }, n.d = function (e, t) {
//         for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
//     }, n.o = function (e, t) {
//         return Object.prototype.hasOwnProperty.call(e, t)
//     }, n.nmd = function (e) {
//         return e.paths = [], e.children || (e.children = []), e
//     }, function () {
//         "use strict";
//
//         function e(e) {
//             return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
//         }
//
//         function t(n = {}, r = {}) {
//             Object.keys(r).forEach((i => {
//                 void 0 === n[i] ? n[i] = r[i] : e(r[i]) && e(n[i]) && Object.keys(r[i]).length > 0 && t(n[i], r[i])
//             }))
//         }
//
//         n(808);
//         const r = {
//             body: {},
//             addEventListener() {
//             },
//             removeEventListener() {
//             },
//             activeElement: {
//                 blur() {
//                 }, nodeName: ""
//             },
//             querySelector() {
//                 return null
//             },
//             querySelectorAll() {
//                 return []
//             },
//             getElementById() {
//                 return null
//             },
//             createEvent() {
//                 return {
//                     initEvent() {
//                     }
//                 }
//             },
//             createElement() {
//                 return {
//                     children: [], childNodes: [], style: {}, setAttribute() {
//                     }, getElementsByTagName() {
//                         return []
//                     }
//                 }
//             },
//             createElementNS() {
//                 return {}
//             },
//             importNode() {
//                 return null
//             },
//             location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
//         };
//
//         function i() {
//             const e = "undefined" != typeof document ? document : {};
//             return t(e, r), e
//         }
//
//         const o = {
//             document: r,
//             navigator: {userAgent: ""},
//             location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
//             history: {
//                 replaceState() {
//                 }, pushState() {
//                 }, go() {
//                 }, back() {
//                 }
//             },
//             CustomEvent: function () {
//                 return this
//             },
//             addEventListener() {
//             },
//             removeEventListener() {
//             },
//             getComputedStyle() {
//                 return {
//                     getPropertyValue() {
//                         return ""
//                     }
//                 }
//             },
//             Image() {
//             },
//             Date() {
//             },
//             screen: {},
//             setTimeout() {
//             },
//             clearTimeout() {
//             },
//             matchMedia() {
//                 return {}
//             },
//             requestAnimationFrame(e) {
//                 return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
//             },
//             cancelAnimationFrame(e) {
//                 "undefined" != typeof setTimeout && clearTimeout(e)
//             }
//         };
//
//         function s() {
//             const e = "undefined" != typeof window ? window : {};
//             return t(e, o), e
//         }
//
//         class a extends Array {
//             constructor(e) {
//                 "number" == typeof e ? super(e) : (super(...e || []), function (e) {
//                     const t = e.__proto__;
//                     Object.defineProperty(e, "__proto__", {
//                         get() {
//                             return t
//                         }, set(e) {
//                             t.__proto__ = e
//                         }
//                     })
//                 }(this))
//             }
//         }
//
//         function l(e = []) {
//             const t = [];
//             return e.forEach((e => {
//                 Array.isArray(e) ? t.push(...l(e)) : t.push(e)
//             })), t
//         }
//
//         function u(e, t) {
//             return Array.prototype.filter.call(e, t)
//         }
//
//         function c(e, t) {
//             const n = s(), r = i();
//             let o = [];
//             if (!t && e instanceof a) return e;
//             if (!e) return new a(o);
//             if ("string" == typeof e) {
//                 const n = e.trim();
//                 if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
//                     let e = "div";
//                     0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
//                     const t = r.createElement(e);
//                     t.innerHTML = n;
//                     for (let e = 0; e < t.childNodes.length; e += 1) o.push(t.childNodes[e])
//                 } else o = function (e, t) {
//                     if ("string" != typeof e) return [e];
//                     const n = [], r = t.querySelectorAll(e);
//                     for (let e = 0; e < r.length; e += 1) n.push(r[e]);
//                     return n
//                 }(e.trim(), t || r)
//             } else if (e.nodeType || e === n || e === r) o.push(e); else if (Array.isArray(e)) {
//                 if (e instanceof a) return e;
//                 o = e
//             }
//             return new a(function (e) {
//                 const t = [];
//                 for (let n = 0; n < e.length; n += 1) -1 === t.indexOf(e[n]) && t.push(e[n]);
//                 return t
//             }(o))
//         }
//
//         c.fn = a.prototype;
//         const d = "resize scroll".split(" ");
//
//         function p(e) {
//             return function (...t) {
//                 if (void 0 === t[0]) {
//                     for (let t = 0; t < this.length; t += 1) d.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : c(this[t]).trigger(e));
//                     return this
//                 }
//                 return this.on(e, ...t)
//             }
//         }
//
//         p("click"), p("blur"), p("focus"), p("focusin"), p("focusout"), p("keyup"), p("keydown"), p("keypress"), p("submit"), p("change"), p("mousedown"), p("mousemove"), p("mouseup"), p("mouseenter"), p("mouseleave"), p("mouseout"), p("mouseover"), p("touchstart"), p("touchend"), p("touchmove"), p("resize"), p("scroll");
//         const h = {
//             addClass: function (...e) {
//                 const t = l(e.map((e => e.split(" "))));
//                 return this.forEach((e => {
//                     e.classList.add(...t)
//                 })), this
//             }, removeClass: function (...e) {
//                 const t = l(e.map((e => e.split(" "))));
//                 return this.forEach((e => {
//                     e.classList.remove(...t)
//                 })), this
//             }, hasClass: function (...e) {
//                 const t = l(e.map((e => e.split(" "))));
//                 return u(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
//             }, toggleClass: function (...e) {
//                 const t = l(e.map((e => e.split(" "))));
//                 this.forEach((e => {
//                     t.forEach((t => {
//                         e.classList.toggle(t)
//                     }))
//                 }))
//             }, attr: function (e, t) {
//                 if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
//                 for (let n = 0; n < this.length; n += 1) if (2 === arguments.length) this[n].setAttribute(e, t); else for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
//                 return this
//             }, removeAttr: function (e) {
//                 for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
//                 return this
//             }, transform: function (e) {
//                 for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
//                 return this
//             }, transition: function (e) {
//                 for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
//                 return this
//             }, on: function (...e) {
//                 let [t, n, r, i] = e;
//
//                 function o(e) {
//                     const t = e.target;
//                     if (!t) return;
//                     const i = e.target.dom7EventData || [];
//                     if (i.indexOf(e) < 0 && i.unshift(e), c(t).is(n)) r.apply(t, i); else {
//                         const e = c(t).parents();
//                         for (let t = 0; t < e.length; t += 1) c(e[t]).is(n) && r.apply(e[t], i)
//                     }
//                 }
//
//                 function s(e) {
//                     const t = e && e.target && e.target.dom7EventData || [];
//                     t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
//                 }
//
//                 "function" == typeof e[1] && ([t, r, i] = e, n = void 0), i || (i = !1);
//                 const a = t.split(" ");
//                 let l;
//                 for (let e = 0; e < this.length; e += 1) {
//                     const t = this[e];
//                     if (n) for (l = 0; l < a.length; l += 1) {
//                         const e = a[l];
//                         t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
//                             listener: r,
//                             proxyListener: o
//                         }), t.addEventListener(e, o, i)
//                     } else for (l = 0; l < a.length; l += 1) {
//                         const e = a[l];
//                         t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
//                             listener: r,
//                             proxyListener: s
//                         }), t.addEventListener(e, s, i)
//                     }
//                 }
//                 return this
//             }, off: function (...e) {
//                 let [t, n, r, i] = e;
//                 "function" == typeof e[1] && ([t, r, i] = e, n = void 0), i || (i = !1);
//                 const o = t.split(" ");
//                 for (let e = 0; e < o.length; e += 1) {
//                     const t = o[e];
//                     for (let e = 0; e < this.length; e += 1) {
//                         const o = this[e];
//                         let s;
//                         if (!n && o.dom7Listeners ? s = o.dom7Listeners[t] : n && o.dom7LiveListeners && (s = o.dom7LiveListeners[t]), s && s.length) for (let e = s.length - 1; e >= 0; e -= 1) {
//                             const n = s[e];
//                             r && n.listener === r || r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r ? (o.removeEventListener(t, n.proxyListener, i), s.splice(e, 1)) : r || (o.removeEventListener(t, n.proxyListener, i), s.splice(e, 1))
//                         }
//                     }
//                 }
//                 return this
//             }, trigger: function (...e) {
//                 const t = s(), n = e[0].split(" "), r = e[1];
//                 for (let i = 0; i < n.length; i += 1) {
//                     const o = n[i];
//                     for (let n = 0; n < this.length; n += 1) {
//                         const i = this[n];
//                         if (t.CustomEvent) {
//                             const n = new t.CustomEvent(o, {detail: r, bubbles: !0, cancelable: !0});
//                             i.dom7EventData = e.filter(((e, t) => t > 0)), i.dispatchEvent(n), i.dom7EventData = [], delete i.dom7EventData
//                         }
//                     }
//                 }
//                 return this
//             }, transitionEnd: function (e) {
//                 const t = this;
//                 return e && t.on("transitionend", (function n(r) {
//                     r.target === this && (e.call(this, r), t.off("transitionend", n))
//                 })), this
//             }, outerWidth: function (e) {
//                 if (this.length > 0) {
//                     if (e) {
//                         const e = this.styles();
//                         return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
//                     }
//                     return this[0].offsetWidth
//                 }
//                 return null
//             }, outerHeight: function (e) {
//                 if (this.length > 0) {
//                     if (e) {
//                         const e = this.styles();
//                         return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
//                     }
//                     return this[0].offsetHeight
//                 }
//                 return null
//             }, styles: function () {
//                 const e = s();
//                 return this[0] ? e.getComputedStyle(this[0], null) : {}
//             }, offset: function () {
//                 if (this.length > 0) {
//                     const e = s(), t = i(), n = this[0], r = n.getBoundingClientRect(), o = t.body,
//                         a = n.clientTop || o.clientTop || 0, l = n.clientLeft || o.clientLeft || 0,
//                         u = n === e ? e.scrollY : n.scrollTop, c = n === e ? e.scrollX : n.scrollLeft;
//                     return {top: r.top + u - a, left: r.left + c - l}
//                 }
//                 return null
//             }, css: function (e, t) {
//                 const n = s();
//                 let r;
//                 if (1 === arguments.length) {
//                     if ("string" != typeof e) {
//                         for (r = 0; r < this.length; r += 1) for (const t in e) this[r].style[t] = e[t];
//                         return this
//                     }
//                     if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
//                 }
//                 if (2 === arguments.length && "string" == typeof e) {
//                     for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
//                     return this
//                 }
//                 return this
//             }, each: function (e) {
//                 return e ? (this.forEach(((t, n) => {
//                     e.apply(t, [t, n])
//                 })), this) : this
//             }, html: function (e) {
//                 if (void 0 === e) return this[0] ? this[0].innerHTML : null;
//                 for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
//                 return this
//             }, text: function (e) {
//                 if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
//                 for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
//                 return this
//             }, is: function (e) {
//                 const t = s(), n = i(), r = this[0];
//                 let o, l;
//                 if (!r || void 0 === e) return !1;
//                 if ("string" == typeof e) {
//                     if (r.matches) return r.matches(e);
//                     if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
//                     if (r.msMatchesSelector) return r.msMatchesSelector(e);
//                     for (o = c(e), l = 0; l < o.length; l += 1) if (o[l] === r) return !0;
//                     return !1
//                 }
//                 if (e === n) return r === n;
//                 if (e === t) return r === t;
//                 if (e.nodeType || e instanceof a) {
//                     for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1) if (o[l] === r) return !0;
//                     return !1
//                 }
//                 return !1
//             }, index: function () {
//                 let e, t = this[0];
//                 if (t) {
//                     for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
//                     return e
//                 }
//             }, eq: function (e) {
//                 if (void 0 === e) return this;
//                 const t = this.length;
//                 if (e > t - 1) return c([]);
//                 if (e < 0) {
//                     const n = t + e;
//                     return c(n < 0 ? [] : [this[n]])
//                 }
//                 return c([this[e]])
//             }, append: function (...e) {
//                 let t;
//                 const n = i();
//                 for (let r = 0; r < e.length; r += 1) {
//                     t = e[r];
//                     for (let e = 0; e < this.length; e += 1) if ("string" == typeof t) {
//                         const r = n.createElement("div");
//                         for (r.innerHTML = t; r.firstChild;) this[e].appendChild(r.firstChild)
//                     } else if (t instanceof a) for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]); else this[e].appendChild(t)
//                 }
//                 return this
//             }, prepend: function (e) {
//                 const t = i();
//                 let n, r;
//                 for (n = 0; n < this.length; n += 1) if ("string" == typeof e) {
//                     const i = t.createElement("div");
//                     for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
//                 } else if (e instanceof a) for (r = 0; r < e.length; r += 1) this[n].insertBefore(e[r], this[n].childNodes[0]); else this[n].insertBefore(e, this[n].childNodes[0]);
//                 return this
//             }, next: function (e) {
//                 return this.length > 0 ? e ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(e) ? c([this[0].nextElementSibling]) : c([]) : this[0].nextElementSibling ? c([this[0].nextElementSibling]) : c([]) : c([])
//             }, nextAll: function (e) {
//                 const t = [];
//                 let n = this[0];
//                 if (!n) return c([]);
//                 for (; n.nextElementSibling;) {
//                     const r = n.nextElementSibling;
//                     e ? c(r).is(e) && t.push(r) : t.push(r), n = r
//                 }
//                 return c(t)
//             }, prev: function (e) {
//                 if (this.length > 0) {
//                     const t = this[0];
//                     return e ? t.previousElementSibling && c(t.previousElementSibling).is(e) ? c([t.previousElementSibling]) : c([]) : t.previousElementSibling ? c([t.previousElementSibling]) : c([])
//                 }
//                 return c([])
//             }, prevAll: function (e) {
//                 const t = [];
//                 let n = this[0];
//                 if (!n) return c([]);
//                 for (; n.previousElementSibling;) {
//                     const r = n.previousElementSibling;
//                     e ? c(r).is(e) && t.push(r) : t.push(r), n = r
//                 }
//                 return c(t)
//             }, parent: function (e) {
//                 const t = [];
//                 for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? c(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
//                 return c(t)
//             }, parents: function (e) {
//                 const t = [];
//                 for (let n = 0; n < this.length; n += 1) {
//                     let r = this[n].parentNode;
//                     for (; r;) e ? c(r).is(e) && t.push(r) : t.push(r), r = r.parentNode
//                 }
//                 return c(t)
//             }, closest: function (e) {
//                 let t = this;
//                 return void 0 === e ? c([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
//             }, find: function (e) {
//                 const t = [];
//                 for (let n = 0; n < this.length; n += 1) {
//                     const r = this[n].querySelectorAll(e);
//                     for (let e = 0; e < r.length; e += 1) t.push(r[e])
//                 }
//                 return c(t)
//             }, children: function (e) {
//                 const t = [];
//                 for (let n = 0; n < this.length; n += 1) {
//                     const r = this[n].children;
//                     for (let n = 0; n < r.length; n += 1) e && !c(r[n]).is(e) || t.push(r[n])
//                 }
//                 return c(t)
//             }, filter: function (e) {
//                 return c(u(this, e))
//             }, remove: function () {
//                 for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
//                 return this
//             }
//         };
//         Object.keys(h).forEach((e => {
//             Object.defineProperty(c.fn, e, {value: h[e], writable: !0})
//         }));
//         var f = c;
//
//         function m(e, t = 0) {
//             return setTimeout(e, t)
//         }
//
//         function g() {
//             return Date.now()
//         }
//
//         function v(e) {
//             return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
//         }
//
//         function y(...e) {
//             const t = Object(e[0]), n = ["__proto__", "constructor", "prototype"];
//             for (let i = 1; i < e.length; i += 1) {
//                 const o = e[i];
//                 if (null != o && (r = o, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
//                     const e = Object.keys(Object(o)).filter((e => n.indexOf(e) < 0));
//                     for (let n = 0, r = e.length; n < r; n += 1) {
//                         const r = e[n], i = Object.getOwnPropertyDescriptor(o, r);
//                         void 0 !== i && i.enumerable && (v(t[r]) && v(o[r]) ? o[r].__swiper__ ? t[r] = o[r] : y(t[r], o[r]) : !v(t[r]) && v(o[r]) ? (t[r] = {}, o[r].__swiper__ ? t[r] = o[r] : y(t[r], o[r])) : t[r] = o[r])
//                     }
//                 }
//             }
//             var r;
//             return t
//         }
//
//         function b(e, t, n) {
//             e.style.setProperty(t, n)
//         }
//
//         function w({swiper: e, targetPosition: t, side: n}) {
//             const r = s(), i = -e.translate;
//             let o, a = null;
//             const l = e.params.speed;
//             e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
//             const u = t > i ? "next" : "prev", c = (e, t) => "next" === u && e >= t || "prev" === u && e <= t,
//                 d = () => {
//                     o = (new Date).getTime(), null === a && (a = o);
//                     const s = Math.max(Math.min((o - a) / l, 1), 0), u = .5 - Math.cos(s * Math.PI) / 2;
//                     let p = i + u * (t - i);
//                     if (c(p, t) && (p = t), e.wrapperEl.scrollTo({[n]: p}), c(p, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
//                         e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({[n]: p})
//                     })), void r.cancelAnimationFrame(e.cssModeFrameID);
//                     e.cssModeFrameID = r.requestAnimationFrame(d)
//                 };
//             d()
//         }
//
//         let S, x, E;
//
//         function _() {
//             return S || (S = function () {
//                 const e = s(), t = i();
//                 return {
//                     smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
//                     touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
//                     passiveListener: function () {
//                         let t = !1;
//                         try {
//                             const n = Object.defineProperty({}, "passive", {
//                                 get() {
//                                     t = !0
//                                 }
//                             });
//                             e.addEventListener("testPassiveListener", null, n)
//                         } catch (e) {
//                         }
//                         return t
//                     }(),
//                     gestures: "ongesturestart" in e
//                 }
//             }()), S
//         }
//
//         var k = {
//             on(e, t, n) {
//                 const r = this;
//                 if ("function" != typeof t) return r;
//                 const i = n ? "unshift" : "push";
//                 return e.split(" ").forEach((e => {
//                     r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
//                 })), r
//             }, once(e, t, n) {
//                 const r = this;
//                 if ("function" != typeof t) return r;
//
//                 function i(...n) {
//                     r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, n)
//                 }
//
//                 return i.__emitterProxy = t, r.on(e, i, n)
//             }, onAny(e, t) {
//                 const n = this;
//                 if ("function" != typeof e) return n;
//                 const r = t ? "unshift" : "push";
//                 return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
//             }, offAny(e) {
//                 const t = this;
//                 if (!t.eventsAnyListeners) return t;
//                 const n = t.eventsAnyListeners.indexOf(e);
//                 return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
//             }, off(e, t) {
//                 const n = this;
//                 return n.eventsListeners ? (e.split(" ").forEach((e => {
//                     void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((r, i) => {
//                         (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
//                     }))
//                 })), n) : n
//             }, emit(...e) {
//                 const t = this;
//                 if (!t.eventsListeners) return t;
//                 let n, r, i;
//                 return "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], r = e.slice(1, e.length), i = t) : (n = e[0].events, r = e[0].data, i = e[0].context || t), r.unshift(i), (Array.isArray(n) ? n : n.split(" ")).forEach((e => {
//                     t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
//                         t.apply(i, [e, ...r])
//                     })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
//                         e.apply(i, r)
//                     }))
//                 })), t
//             }
//         }, C = {
//             updateSize: function () {
//                 const e = this;
//                 let t, n;
//                 const r = e.$el;
//                 t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10), n = n - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
//                     width: t,
//                     height: n,
//                     size: e.isHorizontal() ? t : n
//                 }))
//             }, updateSlides: function () {
//                 const e = this;
//
//                 function t(t) {
//                     return e.isHorizontal() ? t : {
//                         width: "height",
//                         "margin-top": "margin-left",
//                         "margin-bottom ": "margin-right",
//                         "margin-left": "margin-top",
//                         "margin-right": "margin-bottom",
//                         "padding-left": "padding-top",
//                         "padding-right": "padding-bottom",
//                         marginRight: "marginBottom"
//                     }[t]
//                 }
//
//                 function n(e, n) {
//                     return parseFloat(e.getPropertyValue(t(n)) || 0)
//                 }
//
//                 const r = e.params, {$wrapperEl: i, size: o, rtlTranslate: s, wrongRTL: a} = e,
//                     l = e.virtual && r.virtual.enabled, u = l ? e.virtual.slides.length : e.slides.length,
//                     c = i.children(`.${e.params.slideClass}`), d = l ? e.virtual.slides.length : c.length;
//                 let p = [];
//                 const h = [], f = [];
//                 let m = r.slidesOffsetBefore;
//                 "function" == typeof m && (m = r.slidesOffsetBefore.call(e));
//                 let g = r.slidesOffsetAfter;
//                 "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
//                 const v = e.snapGrid.length, y = e.slidesGrid.length;
//                 let w = r.spaceBetween, S = -m, x = 0, E = 0;
//                 if (void 0 === o) return;
//                 "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * o), e.virtualSize = -w, s ? c.css({
//                     marginLeft: "",
//                     marginBottom: "",
//                     marginTop: ""
//                 }) : c.css({
//                     marginRight: "",
//                     marginBottom: "",
//                     marginTop: ""
//                 }), r.centeredSlides && r.cssMode && (b(e.wrapperEl, "--swiper-centered-offset-before", ""), b(e.wrapperEl, "--swiper-centered-offset-after", ""));
//                 const _ = r.grid && r.grid.rows > 1 && e.grid;
//                 let k;
//                 _ && e.grid.initSlides(d);
//                 const C = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
//                 for (let i = 0; i < d; i += 1) {
//                     k = 0;
//                     const s = c.eq(i);
//                     if (_ && e.grid.updateSlide(i, s, d, t), "none" !== s.css("display")) {
//                         if ("auto" === r.slidesPerView) {
//                             C && (c[i].style[t("width")] = "");
//                             const o = getComputedStyle(s[0]), a = s[0].style.transform, l = s[0].style.webkitTransform;
//                             if (a && (s[0].style.transform = "none"), l && (s[0].style.webkitTransform = "none"), r.roundLengths) k = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0); else {
//                                 const e = n(o, "width"), t = n(o, "padding-left"), r = n(o, "padding-right"),
//                                     i = n(o, "margin-left"), a = n(o, "margin-right"),
//                                     l = o.getPropertyValue("box-sizing");
//                                 if (l && "border-box" === l) k = e + i + a; else {
//                                     const {clientWidth: n, offsetWidth: o} = s[0];
//                                     k = e + t + r + i + a + (o - n)
//                                 }
//                             }
//                             a && (s[0].style.transform = a), l && (s[0].style.webkitTransform = l), r.roundLengths && (k = Math.floor(k))
//                         } else k = (o - (r.slidesPerView - 1) * w) / r.slidesPerView, r.roundLengths && (k = Math.floor(k)), c[i] && (c[i].style[t("width")] = `${k}px`);
//                         c[i] && (c[i].swiperSlideSize = k), f.push(k), r.centeredSlides ? (S = S + k / 2 + x / 2 + w, 0 === x && 0 !== i && (S = S - o / 2 - w), 0 === i && (S = S - o / 2 - w), Math.abs(S) < .001 && (S = 0), r.roundLengths && (S = Math.floor(S)), E % r.slidesPerGroup == 0 && p.push(S), h.push(S)) : (r.roundLengths && (S = Math.floor(S)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && p.push(S), h.push(S), S = S + k + w), e.virtualSize += k + w, x = k, E += 1
//                     }
//                 }
//                 if (e.virtualSize = Math.max(e.virtualSize, o) + g, s && a && ("slide" === r.effect || "coverflow" === r.effect) && i.css({width: `${e.virtualSize + r.spaceBetween}px`}), r.setWrapperSize && i.css({[t("width")]: `${e.virtualSize + r.spaceBetween}px`}), _ && e.grid.updateWrapperSize(k, p, t), !r.centeredSlides) {
//                     const t = [];
//                     for (let n = 0; n < p.length; n += 1) {
//                         let i = p[n];
//                         r.roundLengths && (i = Math.floor(i)), p[n] <= e.virtualSize - o && t.push(i)
//                     }
//                     p = t, Math.floor(e.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - o)
//                 }
//                 if (0 === p.length && (p = [0]), 0 !== r.spaceBetween) {
//                     const n = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
//                     c.filter(((e, t) => !r.cssMode || t !== c.length - 1)).css({[n]: `${w}px`})
//                 }
//                 if (r.centeredSlides && r.centeredSlidesBounds) {
//                     let e = 0;
//                     f.forEach((t => {
//                         e += t + (r.spaceBetween ? r.spaceBetween : 0)
//                     })), e -= r.spaceBetween;
//                     const t = e - o;
//                     p = p.map((e => e < 0 ? -m : e > t ? t + g : e))
//                 }
//                 if (r.centerInsufficientSlides) {
//                     let e = 0;
//                     if (f.forEach((t => {
//                         e += t + (r.spaceBetween ? r.spaceBetween : 0)
//                     })), e -= r.spaceBetween, e < o) {
//                         const t = (o - e) / 2;
//                         p.forEach(((e, n) => {
//                             p[n] = e - t
//                         })), h.forEach(((e, n) => {
//                             h[n] = e + t
//                         }))
//                     }
//                 }
//                 if (Object.assign(e, {
//                     slides: c,
//                     snapGrid: p,
//                     slidesGrid: h,
//                     slidesSizesGrid: f
//                 }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
//                     b(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), b(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
//                     const t = -e.snapGrid[0], n = -e.slidesGrid[0];
//                     e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
//                 }
//                 d !== u && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== y && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset()
//             }, updateAutoHeight: function (e) {
//                 const t = this, n = [], r = t.virtual && t.params.virtual.enabled;
//                 let i, o = 0;
//                 "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
//                 const s = e => r ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
//                 if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) t.visibleSlides.each((e => {
//                     n.push(e)
//                 })); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
//                     const e = t.activeIndex + i;
//                     if (e > t.slides.length && !r) break;
//                     n.push(s(e))
//                 } else n.push(s(t.activeIndex));
//                 for (i = 0; i < n.length; i += 1) if (void 0 !== n[i]) {
//                     const e = n[i].offsetHeight;
//                     o = e > o ? e : o
//                 }
//                 (o || 0 === o) && t.$wrapperEl.css("height", `${o}px`)
//             }, updateSlidesOffset: function () {
//                 const e = this, t = e.slides;
//                 for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
//             }, updateSlidesProgress: function (e = this && this.translate || 0) {
//                 const t = this, n = t.params, {slides: r, rtlTranslate: i, snapGrid: o} = t;
//                 if (0 === r.length) return;
//                 void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
//                 let s = -e;
//                 i && (s = e), r.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
//                 for (let e = 0; e < r.length; e += 1) {
//                     const a = r[e];
//                     let l = a.swiperSlideOffset;
//                     n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
//                     const u = (s + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
//                         c = (s - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
//                         d = -(s - l), p = d + t.slidesSizesGrid[e];
//                     (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(e), r.eq(e).addClass(n.slideVisibleClass)), a.progress = i ? -u : u, a.originalProgress = i ? -c : c
//                 }
//                 t.visibleSlides = f(t.visibleSlides)
//             }, updateProgress: function (e) {
//                 const t = this;
//                 if (void 0 === e) {
//                     const n = t.rtlTranslate ? -1 : 1;
//                     e = t && t.translate && t.translate * n || 0
//                 }
//                 const n = t.params, r = t.maxTranslate() - t.minTranslate();
//                 let {progress: i, isBeginning: o, isEnd: s} = t;
//                 const a = o, l = s;
//                 0 === r ? (i = 0, o = !0, s = !0) : (i = (e - t.minTranslate()) / r, o = i <= 0, s = i >= 1), Object.assign(t, {
//                     progress: i,
//                     isBeginning: o,
//                     isEnd: s
//                 }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), o && !a && t.emit("reachBeginning toEdge"), s && !l && t.emit("reachEnd toEdge"), (a && !o || l && !s) && t.emit("fromEdge"), t.emit("progress", i)
//             }, updateSlidesClasses: function () {
//                 const e = this, {slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: o} = e,
//                     s = e.virtual && n.virtual.enabled;
//                 let a;
//                 t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), a = s ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), a.addClass(n.slideActiveClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass));
//                 let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
//                 n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
//                 let u = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
//                 n.loop && 0 === u.length && (u = t.eq(-1), u.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), u.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
//             }, updateActiveIndex: function (e) {
//                 const t = this,
//                     n = t.rtlTranslate ? t.translate : -t.translate, {slidesGrid: r, snapGrid: i, params: o, activeIndex: s, realIndex: a, snapIndex: l} = t;
//                 let u, c = e;
//                 if (void 0 === c) {
//                     for (let e = 0; e < r.length; e += 1) void 0 !== r[e + 1] ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2 ? c = e : n >= r[e] && n < r[e + 1] && (c = e + 1) : n >= r[e] && (c = e);
//                     o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
//                 }
//                 if (i.indexOf(n) >= 0) u = i.indexOf(n); else {
//                     const e = Math.min(o.slidesPerGroupSkip, c);
//                     u = e + Math.floor((c - e) / o.slidesPerGroup)
//                 }
//                 if (u >= i.length && (u = i.length - 1), c === s) return void (u !== l && (t.snapIndex = u, t.emit("snapIndexChange")));
//                 const d = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
//                 Object.assign(t, {
//                     snapIndex: u,
//                     realIndex: d,
//                     previousIndex: s,
//                     activeIndex: c
//                 }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== d && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
//             }, updateClickedSlide: function (e) {
//                 const t = this, n = t.params, r = f(e).closest(`.${n.slideClass}`)[0];
//                 let i, o = !1;
//                 if (r) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === r) {
//                     o = !0, i = e;
//                     break
//                 }
//                 if (!r || !o) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
//                 t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(f(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
//             }
//         };
//
//         function A({swiper: e, runCallbacks: t, direction: n, step: r}) {
//             const {activeIndex: i, previousIndex: o} = e;
//             let s = n;
//             if (s || (s = i > o ? "next" : i < o ? "prev" : "reset"), e.emit(`transition${r}`), t && i !== o) {
//                 if ("reset" === s) return void e.emit(`slideResetTransition${r}`);
//                 e.emit(`slideChangeTransition${r}`), "next" === s ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
//             }
//         }
//
//         var T = {
//             slideTo: function (e = 0, t = this.params.speed, n = !0, r, i) {
//                 if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
//                 if ("string" == typeof e) {
//                     const t = parseInt(e, 10);
//                     if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
//                     e = t
//                 }
//                 const o = this;
//                 let s = e;
//                 s < 0 && (s = 0);
//                 const {params: a, snapGrid: l, slidesGrid: u, previousIndex: c, activeIndex: d, rtlTranslate: p, wrapperEl: h, enabled: f} = o;
//                 if (o.animating && a.preventInteractionOnTransition || !f && !r && !i) return !1;
//                 const m = Math.min(o.params.slidesPerGroupSkip, s);
//                 let g = m + Math.floor((s - m) / o.params.slidesPerGroup);
//                 g >= l.length && (g = l.length - 1), (d || a.initialSlide || 0) === (c || 0) && n && o.emit("beforeSlideChangeStart");
//                 const v = -l[g];
//                 if (o.updateProgress(v), a.normalizeSlideIndex) for (let e = 0; e < u.length; e += 1) {
//                     const t = -Math.floor(100 * v), n = Math.floor(100 * u[e]), r = Math.floor(100 * u[e + 1]);
//                     void 0 !== u[e + 1] ? t >= n && t < r - (r - n) / 2 ? s = e : t >= n && t < r && (s = e + 1) : t >= n && (s = e)
//                 }
//                 if (o.initialized && s !== d) {
//                     if (!o.allowSlideNext && v < o.translate && v < o.minTranslate()) return !1;
//                     if (!o.allowSlidePrev && v > o.translate && v > o.maxTranslate() && (d || 0) !== s) return !1
//                 }
//                 let y;
//                 if (y = s > d ? "next" : s < d ? "prev" : "reset", p && -v === o.translate || !p && v === o.translate) return o.updateActiveIndex(s), a.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== a.effect && o.setTranslate(v), "reset" !== y && (o.transitionStart(n, y), o.transitionEnd(n, y)), !1;
//                 if (a.cssMode) {
//                     const e = o.isHorizontal(), n = p ? v : -v;
//                     if (0 === t) {
//                         const t = o.virtual && o.params.virtual.enabled;
//                         t && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
//                             o.wrapperEl.style.scrollSnapType = "", o._swiperImmediateVirtual = !1
//                         }))
//                     } else {
//                         if (!o.support.smoothScroll) return w({
//                             swiper: o,
//                             targetPosition: n,
//                             side: e ? "left" : "top"
//                         }), !0;
//                         h.scrollTo({[e ? "left" : "top"]: n, behavior: "smooth"})
//                     }
//                     return !0
//                 }
//                 return o.setTransition(t), o.setTranslate(v), o.updateActiveIndex(s), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, r), o.transitionStart(n, y), 0 === t ? o.transitionEnd(n, y) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function (e) {
//                     o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(n, y))
//                 }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)), !0
//             }, slideToLoop: function (e = 0, t = this.params.speed, n = !0, r) {
//                 const i = this;
//                 let o = e;
//                 return i.params.loop && (o += i.loopedSlides), i.slideTo(o, t, n, r)
//             }, slideNext: function (e = this.params.speed, t = !0, n) {
//                 const r = this, {animating: i, enabled: o, params: s} = r;
//                 if (!o) return r;
//                 let a = s.slidesPerGroup;
//                 "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
//                 const l = r.activeIndex < s.slidesPerGroupSkip ? 1 : a;
//                 if (s.loop) {
//                     if (i && s.loopPreventsSlide) return !1;
//                     r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
//                 }
//                 return s.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n)
//             }, slidePrev: function (e = this.params.speed, t = !0, n) {
//                 const r = this, {params: i, animating: o, snapGrid: s, slidesGrid: a, rtlTranslate: l, enabled: u} = r;
//                 if (!u) return r;
//                 if (i.loop) {
//                     if (o && i.loopPreventsSlide) return !1;
//                     r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
//                 }
//
//                 function c(e) {
//                     return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
//                 }
//
//                 const d = c(l ? r.translate : -r.translate), p = s.map((e => c(e)));
//                 let h = s[p.indexOf(d) - 1];
//                 if (void 0 === h && i.cssMode) {
//                     let e;
//                     s.forEach(((t, n) => {
//                         d >= t && (e = n)
//                     })), void 0 !== e && (h = s[e > 0 ? e - 1 : e])
//                 }
//                 let f = 0;
//                 return void 0 !== h && (f = a.indexOf(h), f < 0 && (f = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - r.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && r.isBeginning ? r.slideTo(r.slides.length - 1, e, t, n) : r.slideTo(f, e, t, n)
//             }, slideReset: function (e = this.params.speed, t = !0, n) {
//                 return this.slideTo(this.activeIndex, e, t, n)
//             }, slideToClosest: function (e = this.params.speed, t = !0, n, r = .5) {
//                 const i = this;
//                 let o = i.activeIndex;
//                 const s = Math.min(i.params.slidesPerGroupSkip, o),
//                     a = s + Math.floor((o - s) / i.params.slidesPerGroup),
//                     l = i.rtlTranslate ? i.translate : -i.translate;
//                 if (l >= i.snapGrid[a]) {
//                     const e = i.snapGrid[a];
//                     l - e > (i.snapGrid[a + 1] - e) * r && (o += i.params.slidesPerGroup)
//                 } else {
//                     const e = i.snapGrid[a - 1];
//                     l - e <= (i.snapGrid[a] - e) * r && (o -= i.params.slidesPerGroup)
//                 }
//                 return o = Math.max(o, 0), o = Math.min(o, i.slidesGrid.length - 1), i.slideTo(o, e, t, n)
//             }, slideToClickedSlide: function () {
//                 const e = this, {params: t, $wrapperEl: n} = e,
//                     r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
//                 let i, o = e.clickedIndex;
//                 if (t.loop) {
//                     if (e.animating) return;
//                     i = parseInt(f(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? o < e.loopedSlides - r / 2 || o > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), o = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), m((() => {
//                         e.slideTo(o)
//                     }))) : e.slideTo(o) : o > e.slides.length - r ? (e.loopFix(), o = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), m((() => {
//                         e.slideTo(o)
//                     }))) : e.slideTo(o)
//                 } else e.slideTo(o)
//             }
//         }, L = {
//             loopCreate: function () {
//                 const e = this, t = i(), {params: n, $wrapperEl: r} = e,
//                     o = r.children().length > 0 ? f(r.children()[0].parentNode) : r;
//                 o.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
//                 let s = o.children(`.${n.slideClass}`);
//                 if (n.loopFillGroupWithBlank) {
//                     const e = n.slidesPerGroup - s.length % n.slidesPerGroup;
//                     if (e !== n.slidesPerGroup) {
//                         for (let r = 0; r < e; r += 1) {
//                             const e = f(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
//                             o.append(e)
//                         }
//                         s = o.children(`.${n.slideClass}`)
//                     }
//                 }
//                 "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
//                 const a = [], l = [];
//                 s.each(((t, n) => {
//                     const r = f(t);
//                     n < e.loopedSlides && l.push(t), n < s.length && n >= s.length - e.loopedSlides && a.push(t), r.attr("data-swiper-slide-index", n)
//                 }));
//                 for (let e = 0; e < l.length; e += 1) o.append(f(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
//                 for (let e = a.length - 1; e >= 0; e -= 1) o.prepend(f(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
//             }, loopFix: function () {
//                 const e = this;
//                 e.emit("beforeLoopFix");
//                 const {activeIndex: t, slides: n, loopedSlides: r, allowSlidePrev: i, allowSlideNext: o, snapGrid: s, rtlTranslate: a} = e;
//                 let l;
//                 e.allowSlidePrev = !0, e.allowSlideNext = !0;
//                 const u = -s[t] - e.getTranslate();
//                 t < r ? (l = n.length - 3 * r + t, l += r, e.slideTo(l, 0, !1, !0) && 0 !== u && e.setTranslate((a ? -e.translate : e.translate) - u)) : t >= n.length - r && (l = -n.length + t + r, l += r, e.slideTo(l, 0, !1, !0) && 0 !== u && e.setTranslate((a ? -e.translate : e.translate) - u)), e.allowSlidePrev = i, e.allowSlideNext = o, e.emit("loopFix")
//             }, loopDestroy: function () {
//                 const {$wrapperEl: e, params: t, slides: n} = this;
//                 e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
//             }
//         };
//
//         function P(e) {
//             const t = this, n = i(), r = s(), o = t.touchEventsData, {params: a, touches: l, enabled: u} = t;
//             if (!u) return;
//             if (t.animating && a.preventInteractionOnTransition) return;
//             !t.animating && a.cssMode && a.loop && t.loopFix();
//             let c = e;
//             c.originalEvent && (c = c.originalEvent);
//             let d = f(c.target);
//             if ("wrapper" === a.touchEventsTarget && !d.closest(t.wrapperEl).length) return;
//             if (o.isTouchEvent = "touchstart" === c.type, !o.isTouchEvent && "which" in c && 3 === c.which) return;
//             if (!o.isTouchEvent && "button" in c && c.button > 0) return;
//             if (o.isTouched && o.isMoved) return;
//             a.noSwipingClass && "" !== a.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (d = f(e.path[0]));
//             const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
//                 h = !(!c.target || !c.target.shadowRoot);
//             if (a.noSwiping && (h ? function (e, t = this) {
//                 return function t(n) {
//                     return n && n !== i() && n !== s() ? (n.assignedSlot && (n = n.assignedSlot), n.closest(e) || t(n.getRootNode().host)) : null
//                 }(t)
//             }(p, c.target) : d.closest(p)[0])) return void (t.allowClick = !0);
//             if (a.swipeHandler && !d.closest(a.swipeHandler)[0]) return;
//             l.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, l.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
//             const m = l.currentX, v = l.currentY, y = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
//                 b = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
//             if (y && (m <= b || m >= r.innerWidth - b)) {
//                 if ("prevent" !== y) return;
//                 e.preventDefault()
//             }
//             if (Object.assign(o, {
//                 isTouched: !0,
//                 isMoved: !1,
//                 allowTouchCallbacks: !0,
//                 isScrolling: void 0,
//                 startMoving: void 0
//             }), l.startX = m, l.startY = v, o.touchStartTime = g(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (o.allowThresholdMove = !1), "touchstart" !== c.type) {
//                 let e = !0;
//                 d.is(o.focusableElements) && (e = !1), n.activeElement && f(n.activeElement).is(o.focusableElements) && n.activeElement !== d[0] && n.activeElement.blur();
//                 const r = e && t.allowTouchMove && a.touchStartPreventDefault;
//                 !a.touchStartForcePreventDefault && !r || d[0].isContentEditable || c.preventDefault()
//             }
//             t.emit("touchStart", c)
//         }
//
//         function O(e) {
//             const t = i(), n = this, r = n.touchEventsData, {params: o, touches: s, rtlTranslate: a, enabled: l} = n;
//             if (!l) return;
//             let u = e;
//             if (u.originalEvent && (u = u.originalEvent), !r.isTouched) return void (r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", u));
//             if (r.isTouchEvent && "touchmove" !== u.type) return;
//             const c = "touchmove" === u.type && u.targetTouches && (u.targetTouches[0] || u.changedTouches[0]),
//                 d = "touchmove" === u.type ? c.pageX : u.pageX, p = "touchmove" === u.type ? c.pageY : u.pageY;
//             if (u.preventedByNestedSwiper) return s.startX = d, void (s.startY = p);
//             if (!n.allowTouchMove) return n.allowClick = !1, void (r.isTouched && (Object.assign(s, {
//                 startX: d,
//                 startY: p,
//                 currentX: d,
//                 currentY: p
//             }), r.touchStartTime = g()));
//             if (r.isTouchEvent && o.touchReleaseOnEdges && !o.loop) if (n.isVertical()) {
//                 if (p < s.startY && n.translate <= n.maxTranslate() || p > s.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1)
//             } else if (d < s.startX && n.translate <= n.maxTranslate() || d > s.startX && n.translate >= n.minTranslate()) return;
//             if (r.isTouchEvent && t.activeElement && u.target === t.activeElement && f(u.target).is(r.focusableElements)) return r.isMoved = !0, void (n.allowClick = !1);
//             if (r.allowTouchCallbacks && n.emit("touchMove", u), u.targetTouches && u.targetTouches.length > 1) return;
//             s.currentX = d, s.currentY = p;
//             const h = s.currentX - s.startX, m = s.currentY - s.startY;
//             if (n.params.threshold && Math.sqrt(h ** 2 + m ** 2) < n.params.threshold) return;
//             if (void 0 === r.isScrolling) {
//                 let e;
//                 n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : h * h + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(h)) / Math.PI, r.isScrolling = n.isHorizontal() ? e > o.touchAngle : 90 - e > o.touchAngle)
//             }
//             if (r.isScrolling && n.emit("touchMoveOpposite", u), void 0 === r.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (r.startMoving = !0)), r.isScrolling) return void (r.isTouched = !1);
//             if (!r.startMoving) return;
//             n.allowClick = !1, !o.cssMode && u.cancelable && u.preventDefault(), o.touchMoveStopPropagation && !o.nested && u.stopPropagation(), r.isMoved || (o.loop && !o.cssMode && n.loopFix(), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !o.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", u)), n.emit("sliderMove", u), r.isMoved = !0;
//             let v = n.isHorizontal() ? h : m;
//             s.diff = v, v *= o.touchRatio, a && (v = -v), n.swipeDirection = v > 0 ? "prev" : "next", r.currentTranslate = v + r.startTranslate;
//             let y = !0, b = o.resistanceRatio;
//             if (o.touchReleaseOnEdges && (b = 0), v > 0 && r.currentTranslate > n.minTranslate() ? (y = !1, o.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + v) ** b)) : v < 0 && r.currentTranslate < n.maxTranslate() && (y = !1, o.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - v) ** b)), y && (u.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate), o.threshold > 0) {
//                 if (!(Math.abs(v) > o.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
//                 if (!r.allowThresholdMove) return r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, void (s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
//             }
//             o.followFinger && !o.cssMode && ((o.freeMode && o.freeMode.enabled && n.freeMode || o.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && o.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate))
//         }
//
//         function I(e) {
//             const t = this,
//                 n = t.touchEventsData, {params: r, touches: i, rtlTranslate: o, slidesGrid: s, enabled: a} = t;
//             if (!a) return;
//             let l = e;
//             if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && r.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
//             r.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
//             const u = g(), c = u - n.touchStartTime;
//             if (t.allowClick) {
//                 const e = l.path || l.composedPath && l.composedPath();
//                 t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), c < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
//             }
//             if (n.lastClickTime = g(), m((() => {
//                 t.destroyed || (t.allowClick = !0)
//             })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
//             let d;
//             if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = r.followFinger ? o ? t.translate : -t.translate : -n.currentTranslate, r.cssMode) return;
//             if (t.params.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: d});
//             let p = 0, h = t.slidesSizesGrid[0];
//             for (let e = 0; e < s.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
//                 const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
//                 void 0 !== s[e + t] ? d >= s[e] && d < s[e + t] && (p = e, h = s[e + t] - s[e]) : d >= s[e] && (p = e, h = s[s.length - 1] - s[s.length - 2])
//             }
//             const f = (d - s[p]) / h, v = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
//             if (c > r.longSwipesMs) {
//                 if (!r.longSwipes) return void t.slideTo(t.activeIndex);
//                 "next" === t.swipeDirection && (f >= r.longSwipesRatio ? t.slideTo(p + v) : t.slideTo(p)), "prev" === t.swipeDirection && (f > 1 - r.longSwipesRatio ? t.slideTo(p + v) : t.slideTo(p))
//             } else {
//                 if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
//                 !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(p + v), "prev" === t.swipeDirection && t.slideTo(p)) : l.target === t.navigation.nextEl ? t.slideTo(p + v) : t.slideTo(p)
//             }
//         }
//
//         function M() {
//             const e = this, {params: t, el: n} = e;
//             if (n && 0 === n.offsetWidth) return;
//             t.breakpoints && e.setBreakpoint();
//             const {allowSlideNext: r, allowSlidePrev: i, snapGrid: o} = e;
//             e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
//         }
//
//         function F(e) {
//             const t = this;
//             t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
//         }
//
//         function B() {
//             const e = this, {wrapperEl: t, rtlTranslate: n, enabled: r} = e;
//             if (!r) return;
//             let i;
//             e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
//             const o = e.maxTranslate() - e.minTranslate();
//             i = 0 === o ? 0 : (e.translate - e.minTranslate()) / o, i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
//         }
//
//         let D = !1;
//
//         function q() {
//         }
//
//         const R = (e, t) => {
//             const n = i(), {params: r, touchEvents: o, el: s, wrapperEl: a, device: l, support: u} = e, c = !!r.nested,
//                 d = "on" === t ? "addEventListener" : "removeEventListener", p = t;
//             if (u.touch) {
//                 const t = !("touchstart" !== o.start || !u.passiveListener || !r.passiveListeners) && {
//                     passive: !0,
//                     capture: !1
//                 };
//                 s[d](o.start, e.onTouchStart, t), s[d](o.move, e.onTouchMove, u.passiveListener ? {
//                     passive: !1,
//                     capture: c
//                 } : c), s[d](o.end, e.onTouchEnd, t), o.cancel && s[d](o.cancel, e.onTouchEnd, t)
//             } else s[d](o.start, e.onTouchStart, !1), n[d](o.move, e.onTouchMove, c), n[d](o.end, e.onTouchEnd, !1);
//             (r.preventClicks || r.preventClicksPropagation) && s[d]("click", e.onClick, !0), r.cssMode && a[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", M, !0) : e[p]("observerUpdate", M, !0)
//         };
//         var j = {
//             attachEvents: function () {
//                 const e = this, t = i(), {params: n, support: r} = e;
//                 e.onTouchStart = P.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), n.cssMode && (e.onScroll = B.bind(e)), e.onClick = F.bind(e), r.touch && !D && (t.addEventListener("touchstart", q), D = !0), R(e, "on")
//             }, detachEvents: function () {
//                 R(this, "off")
//             }
//         };
//         const N = (e, t) => e.grid && t.grid && t.grid.rows > 1;
//         var V = {
//             addClasses: function () {
//                 const e = this, {classNames: t, params: n, rtl: r, $el: i, device: o, support: s} = e,
//                     a = function (e, t) {
//                         const n = [];
//                         return e.forEach((e => {
//                             "object" == typeof e ? Object.keys(e).forEach((r => {
//                                 e[r] && n.push(t + r)
//                             })) : "string" == typeof e && n.push(t + e)
//                         })), n
//                     }(["initialized", n.direction, {"pointer-events": !s.touch}, {"free-mode": e.params.freeMode && n.freeMode.enabled}, {autoheight: n.autoHeight}, {rtl: r}, {grid: n.grid && n.grid.rows > 1}, {"grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill}, {android: o.android}, {ios: o.ios}, {"css-mode": n.cssMode}, {centered: n.cssMode && n.centeredSlides}], n.containerModifierClass);
//                 t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses()
//             }, removeClasses: function () {
//                 const {$el: e, classNames: t} = this;
//                 e.removeClass(t.join(" ")), this.emitContainerClasses()
//             }
//         }, z = {
//             init: !0,
//             direction: "horizontal",
//             touchEventsTarget: "wrapper",
//             initialSlide: 0,
//             speed: 300,
//             cssMode: !1,
//             updateOnWindowResize: !0,
//             resizeObserver: !0,
//             nested: !1,
//             createElements: !1,
//             enabled: !0,
//             focusableElements: "input, select, option, textarea, button, video, label",
//             width: null,
//             height: null,
//             preventInteractionOnTransition: !1,
//             userAgent: null,
//             url: null,
//             edgeSwipeDetection: !1,
//             edgeSwipeThreshold: 20,
//             autoHeight: !1,
//             setWrapperSize: !1,
//             virtualTranslate: !1,
//             effect: "slide",
//             breakpoints: void 0,
//             breakpointsBase: "window",
//             spaceBetween: 0,
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//             slidesPerGroupSkip: 0,
//             slidesPerGroupAuto: !1,
//             centeredSlides: !1,
//             centeredSlidesBounds: !1,
//             slidesOffsetBefore: 0,
//             slidesOffsetAfter: 0,
//             normalizeSlideIndex: !0,
//             centerInsufficientSlides: !1,
//             watchOverflow: !0,
//             roundLengths: !1,
//             touchRatio: 1,
//             touchAngle: 45,
//             simulateTouch: !0,
//             shortSwipes: !0,
//             longSwipes: !0,
//             longSwipesRatio: .5,
//             longSwipesMs: 300,
//             followFinger: !0,
//             allowTouchMove: !0,
//             threshold: 0,
//             touchMoveStopPropagation: !1,
//             touchStartPreventDefault: !0,
//             touchStartForcePreventDefault: !1,
//             touchReleaseOnEdges: !1,
//             uniqueNavElements: !0,
//             resistance: !0,
//             resistanceRatio: .85,
//             watchSlidesProgress: !1,
//             grabCursor: !1,
//             preventClicks: !0,
//             preventClicksPropagation: !0,
//             slideToClickedSlide: !1,
//             preloadImages: !0,
//             updateOnImagesReady: !0,
//             loop: !1,
//             loopAdditionalSlides: 0,
//             loopedSlides: null,
//             loopFillGroupWithBlank: !1,
//             loopPreventsSlide: !0,
//             rewind: !1,
//             allowSlidePrev: !0,
//             allowSlideNext: !0,
//             swipeHandler: null,
//             noSwiping: !0,
//             noSwipingClass: "swiper-no-swiping",
//             noSwipingSelector: null,
//             passiveListeners: !0,
//             containerModifierClass: "swiper-",
//             slideClass: "swiper-slide",
//             slideBlankClass: "swiper-slide-invisible-blank",
//             slideActiveClass: "swiper-slide-active",
//             slideDuplicateActiveClass: "swiper-slide-duplicate-active",
//             slideVisibleClass: "swiper-slide-visible",
//             slideDuplicateClass: "swiper-slide-duplicate",
//             slideNextClass: "swiper-slide-next",
//             slideDuplicateNextClass: "swiper-slide-duplicate-next",
//             slidePrevClass: "swiper-slide-prev",
//             slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
//             wrapperClass: "swiper-wrapper",
//             runCallbacksOnInit: !0,
//             _emitClasses: !1
//         };
//
//         function H(e, t) {
//             return function (n = {}) {
//                 const r = Object.keys(n)[0], i = n[r];
//                 "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && !0 === e[r] && (e[r] = {auto: !0}), r in e && "enabled" in i ? (!0 === e[r] && (e[r] = {enabled: !0}), "object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {enabled: !1}), y(t, n)) : y(t, n)) : y(t, n)
//             }
//         }
//
//         const G = {
//             eventsEmitter: k, update: C, translate: {
//                 getTranslate: function (e = (this.isHorizontal() ? "x" : "y")) {
//                     const {params: t, rtlTranslate: n, translate: r, $wrapperEl: i} = this;
//                     if (t.virtualTranslate) return n ? -r : r;
//                     if (t.cssMode) return r;
//                     let o = function (e, t = "x") {
//                         const n = s();
//                         let r, i, o;
//                         const a = function (e) {
//                             const t = s();
//                             let n;
//                             return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
//                         }(e);
//                         return n.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), o = new n.WebKitCSSMatrix("none" === i ? "" : i)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = o.toString().split(",")), "x" === t && (i = n.WebKitCSSMatrix ? o.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (i = n.WebKitCSSMatrix ? o.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), i || 0
//                     }(i[0], e);
//                     return n && (o = -o), o || 0
//                 }, setTranslate: function (e, t) {
//                     const n = this, {rtlTranslate: r, params: i, $wrapperEl: o, wrapperEl: s, progress: a} = n;
//                     let l, u = 0, c = 0;
//                     n.isHorizontal() ? u = r ? -e : e : c = e, i.roundLengths && (u = Math.floor(u), c = Math.floor(c)), i.cssMode ? s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -u : -c : i.virtualTranslate || o.transform(`translate3d(${u}px, ${c}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? u : c;
//                     const d = n.maxTranslate() - n.minTranslate();
//                     l = 0 === d ? 0 : (e - n.minTranslate()) / d, l !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
//                 }, minTranslate: function () {
//                     return -this.snapGrid[0]
//                 }, maxTranslate: function () {
//                     return -this.snapGrid[this.snapGrid.length - 1]
//                 }, translateTo: function (e = 0, t = this.params.speed, n = !0, r = !0, i) {
//                     const o = this, {params: s, wrapperEl: a} = o;
//                     if (o.animating && s.preventInteractionOnTransition) return !1;
//                     const l = o.minTranslate(), u = o.maxTranslate();
//                     let c;
//                     if (c = r && e > l ? l : r && e < u ? u : e, o.updateProgress(c), s.cssMode) {
//                         const e = o.isHorizontal();
//                         if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c; else {
//                             if (!o.support.smoothScroll) return w({
//                                 swiper: o,
//                                 targetPosition: -c,
//                                 side: e ? "left" : "top"
//                             }), !0;
//                             a.scrollTo({[e ? "left" : "top"]: -c, behavior: "smooth"})
//                         }
//                         return !0
//                     }
//                     return 0 === t ? (o.setTransition(0), o.setTranslate(c), n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(c), n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function (e) {
//                         o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, n && o.emit("transitionEnd"))
//                     }), o.$wrapperEl[0].addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd))), !0
//                 }
//             }, transition: {
//                 setTransition: function (e, t) {
//                     const n = this;
//                     n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
//                 }, transitionStart: function (e = !0, t) {
//                     const n = this, {params: r} = n;
//                     r.cssMode || (r.autoHeight && n.updateAutoHeight(), A({
//                         swiper: n,
//                         runCallbacks: e,
//                         direction: t,
//                         step: "Start"
//                     }))
//                 }, transitionEnd: function (e = !0, t) {
//                     const n = this, {params: r} = n;
//                     n.animating = !1, r.cssMode || (n.setTransition(0), A({
//                         swiper: n,
//                         runCallbacks: e,
//                         direction: t,
//                         step: "End"
//                     }))
//                 }
//             }, slide: T, loop: L, grabCursor: {
//                 setGrabCursor: function (e) {
//                     const t = this;
//                     if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
//                     const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
//                     n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
//                 }, unsetGrabCursor: function () {
//                     const e = this;
//                     e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
//                 }
//             }, events: j, breakpoints: {
//                 setBreakpoint: function () {
//                     const e = this, {activeIndex: t, initialized: n, loopedSlides: r = 0, params: i, $el: o} = e,
//                         s = i.breakpoints;
//                     if (!s || s && 0 === Object.keys(s).length) return;
//                     const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
//                     if (!a || e.currentBreakpoint === a) return;
//                     const l = (a in s ? s[a] : void 0) || e.originalParams, u = N(e, i), c = N(e, l), d = i.enabled;
//                     u && !c ? (o.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && c && (o.addClass(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && o.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
//                     const p = l.direction && l.direction !== i.direction,
//                         h = i.loop && (l.slidesPerView !== i.slidesPerView || p);
//                     p && n && e.changeDirection(), y(e.params, l);
//                     const f = e.params.enabled;
//                     Object.assign(e, {
//                         allowTouchMove: e.params.allowTouchMove,
//                         allowSlideNext: e.params.allowSlideNext,
//                         allowSlidePrev: e.params.allowSlidePrev
//                     }), d && !f ? e.disable() : !d && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), h && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
//                 }, getBreakpoint: function (e, t = "window", n) {
//                     if (!e || "container" === t && !n) return;
//                     let r = !1;
//                     const i = s(), o = "window" === t ? i.innerHeight : n.clientHeight, a = Object.keys(e).map((e => {
//                         if ("string" == typeof e && 0 === e.indexOf("@")) {
//                             const t = parseFloat(e.substr(1));
//                             return {value: o * t, point: e}
//                         }
//                         return {value: e, point: e}
//                     }));
//                     a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
//                     for (let e = 0; e < a.length; e += 1) {
//                         const {point: o, value: s} = a[e];
//                         "window" === t ? i.matchMedia(`(min-width: ${s}px)`).matches && (r = o) : s <= n.clientWidth && (r = o)
//                     }
//                     return r || "max"
//                 }
//             }, checkOverflow: {
//                 checkOverflow: function () {
//                     const e = this, {isLocked: t, params: n} = e, {slidesOffsetBefore: r} = n;
//                     if (r) {
//                         const t = e.slides.length - 1, n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
//                         e.isLocked = e.size > n
//                     } else e.isLocked = 1 === e.snapGrid.length;
//                     !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
//                 }
//             }, classes: V, images: {
//                 loadImage: function (e, t, n, r, i, o) {
//                     const a = s();
//                     let l;
//
//                     function u() {
//                         o && o()
//                     }
//
//                     f(e).parent("picture")[0] || e.complete && i ? u() : t ? (l = new a.Image, l.onload = u, l.onerror = u, r && (l.sizes = r), n && (l.srcset = n), t && (l.src = t)) : u()
//                 }, preloadImages: function () {
//                     const e = this;
//
//                     function t() {
//                         null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
//                     }
//
//                     e.imagesToLoad = e.$el.find("img");
//                     for (let n = 0; n < e.imagesToLoad.length; n += 1) {
//                         const r = e.imagesToLoad[n];
//                         e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t)
//                     }
//                 }
//             }
//         }, U = {};
//
//         class W {
//             constructor(...e) {
//                 let t, n;
//                 if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? n = e[0] : [t, n] = e, n || (n = {}), n = y({}, n), t && !n.el && (n.el = t), n.el && f(n.el).length > 1) {
//                     const e = [];
//                     return f(n.el).each((t => {
//                         const r = y({}, n, {el: t});
//                         e.push(new W(r))
//                     })), e
//                 }
//                 const r = this;
//                 r.__swiper__ = !0, r.support = _(), r.device = function (e = {}) {
//                     return x || (x = function ({userAgent: e} = {}) {
//                         const t = _(), n = s(), r = n.navigator.platform, i = e || n.navigator.userAgent,
//                             o = {ios: !1, android: !1}, a = n.screen.width, l = n.screen.height,
//                             u = i.match(/(Android);?[\s\/]+([\d.]+)?/);
//                         let c = i.match(/(iPad).*OS\s([\d_]+)/);
//                         const d = i.match(/(iPod)(.*OS\s([\d_]+))?/), p = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
//                             h = "Win32" === r;
//                         let f = "MacIntel" === r;
//                         return !c && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${l}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), f = !1), u && !h && (o.os = "android", o.android = !0), (c || p || d) && (o.os = "ios", o.ios = !0), o
//                     }(e)), x
//                 }({userAgent: n.userAgent}), r.browser = (E || (E = function () {
//                     const e = s();
//                     return {
//                         isSafari: function () {
//                             const t = e.navigator.userAgent.toLowerCase();
//                             return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
//                         }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
//                     }
//                 }()), E), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], n.modules && Array.isArray(n.modules) && r.modules.push(...n.modules);
//                 const i = {};
//                 r.modules.forEach((e => {
//                     e({
//                         swiper: r,
//                         extendParams: H(n, i),
//                         on: r.on.bind(r),
//                         once: r.once.bind(r),
//                         off: r.off.bind(r),
//                         emit: r.emit.bind(r)
//                     })
//                 }));
//                 const o = y({}, z, i);
//                 return r.params = y({}, o, U, n), r.originalParams = y({}, r.params), r.passedParams = y({}, n), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
//                     r.on(e, r.params.on[e])
//                 })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = f, Object.assign(r, {
//                     enabled: r.params.enabled,
//                     el: t,
//                     classNames: [],
//                     slides: f(),
//                     slidesGrid: [],
//                     snapGrid: [],
//                     slidesSizesGrid: [],
//                     isHorizontal() {
//                         return "horizontal" === r.params.direction
//                     },
//                     isVertical() {
//                         return "vertical" === r.params.direction
//                     },
//                     activeIndex: 0,
//                     realIndex: 0,
//                     isBeginning: !0,
//                     isEnd: !1,
//                     translate: 0,
//                     previousTranslate: 0,
//                     progress: 0,
//                     velocity: 0,
//                     animating: !1,
//                     allowSlideNext: r.params.allowSlideNext,
//                     allowSlidePrev: r.params.allowSlidePrev,
//                     touchEvents: function () {
//                         const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
//                             t = ["pointerdown", "pointermove", "pointerup"];
//                         return r.touchEventsTouch = {
//                             start: e[0],
//                             move: e[1],
//                             end: e[2],
//                             cancel: e[3]
//                         }, r.touchEventsDesktop = {
//                             start: t[0],
//                             move: t[1],
//                             end: t[2]
//                         }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
//                     }(),
//                     touchEventsData: {
//                         isTouched: void 0,
//                         isMoved: void 0,
//                         allowTouchCallbacks: void 0,
//                         touchStartTime: void 0,
//                         isScrolling: void 0,
//                         currentTranslate: void 0,
//                         startTranslate: void 0,
//                         allowThresholdMove: void 0,
//                         focusableElements: r.params.focusableElements,
//                         lastClickTime: g(),
//                         clickTimeout: void 0,
//                         velocities: [],
//                         allowMomentumBounce: void 0,
//                         isTouchEvent: void 0,
//                         startMoving: void 0
//                     },
//                     allowClick: !0,
//                     allowTouchMove: r.params.allowTouchMove,
//                     touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
//                     imagesToLoad: [],
//                     imagesLoaded: 0
//                 }), r.emit("_swiper"), r.params.init && r.init(), r
//             }
//
//             enable() {
//                 const e = this;
//                 e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
//             }
//
//             disable() {
//                 const e = this;
//                 e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
//             }
//
//             setProgress(e, t) {
//                 const n = this;
//                 e = Math.min(Math.max(e, 0), 1);
//                 const r = n.minTranslate(), i = (n.maxTranslate() - r) * e + r;
//                 n.translateTo(i, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
//             }
//
//             emitContainerClasses() {
//                 const e = this;
//                 if (!e.params._emitClasses || !e.el) return;
//                 const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
//                 e.emit("_containerClasses", t.join(" "))
//             }
//
//             getSlideClasses(e) {
//                 const t = this;
//                 return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
//             }
//
//             emitSlidesClasses() {
//                 const e = this;
//                 if (!e.params._emitClasses || !e.el) return;
//                 const t = [];
//                 e.slides.each((n => {
//                     const r = e.getSlideClasses(n);
//                     t.push({slideEl: n, classNames: r}), e.emit("_slideClass", n, r)
//                 })), e.emit("_slideClasses", t)
//             }
//
//             slidesPerViewDynamic(e = "current", t = !1) {
//                 const {params: n, slides: r, slidesGrid: i, slidesSizesGrid: o, size: s, activeIndex: a} = this;
//                 let l = 1;
//                 if (n.centeredSlides) {
//                     let e, t = r[a].swiperSlideSize;
//                     for (let n = a + 1; n < r.length; n += 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > s && (e = !0));
//                     for (let n = a - 1; n >= 0; n -= 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > s && (e = !0))
//                 } else if ("current" === e) for (let e = a + 1; e < r.length; e += 1) (t ? i[e] + o[e] - i[a] < s : i[e] - i[a] < s) && (l += 1); else for (let e = a - 1; e >= 0; e -= 1) i[a] - i[e] < s && (l += 1);
//                 return l
//             }
//
//             update() {
//                 const e = this;
//                 if (!e || e.destroyed) return;
//                 const {snapGrid: t, params: n} = e;
//
//                 function r() {
//                     const t = e.rtlTranslate ? -1 * e.translate : e.translate,
//                         n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
//                     e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
//                 }
//
//                 let i;
//                 n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || r()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
//             }
//
//             changeDirection(e, t = !0) {
//                 const n = this, r = n.params.direction;
//                 return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((t => {
//                     "vertical" === e ? t.style.width = "" : t.style.height = ""
//                 })), n.emit("changeDirection"), t && n.update()), n
//             }
//
//             mount(e) {
//                 const t = this;
//                 if (t.mounted) return !0;
//                 const n = f(e || t.params.el);
//                 if (!(e = n[0])) return !1;
//                 e.swiper = t;
//                 const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
//                 let o = (() => {
//                     if (e && e.shadowRoot && e.shadowRoot.querySelector) {
//                         const t = f(e.shadowRoot.querySelector(r()));
//                         return t.children = e => n.children(e), t
//                     }
//                     return n.children(r())
//                 })();
//                 if (0 === o.length && t.params.createElements) {
//                     const e = i().createElement("div");
//                     o = f(e), e.className = t.params.wrapperClass, n.append(e), n.children(`.${t.params.slideClass}`).each((e => {
//                         o.append(e)
//                     }))
//                 }
//                 return Object.assign(t, {
//                     $el: n,
//                     el: e,
//                     $wrapperEl: o,
//                     wrapperEl: o[0],
//                     mounted: !0,
//                     rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
//                     rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
//                     wrongRTL: "-webkit-box" === o.css("display")
//                 }), !0
//             }
//
//             init(e) {
//                 const t = this;
//                 return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
//             }
//
//             destroy(e = !0, t = !0) {
//                 const n = this, {params: r, $el: i, $wrapperEl: o, slides: s} = n;
//                 return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), i.removeAttr("style"), o.removeAttr("style"), s && s.length && s.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
//                     n.off(e)
//                 })), !1 !== e && (n.$el[0].swiper = null, function (e) {
//                     const t = e;
//                     Object.keys(t).forEach((e => {
//                         try {
//                             t[e] = null
//                         } catch (e) {
//                         }
//                         try {
//                             delete t[e]
//                         } catch (e) {
//                         }
//                     }))
//                 }(n)), n.destroyed = !0), null
//             }
//
//             static extendDefaults(e) {
//                 y(U, e)
//             }
//
//             static get extendedDefaults() {
//                 return U
//             }
//
//             static get defaults() {
//                 return z
//             }
//
//             static installModule(e) {
//                 W.prototype.__modules__ || (W.prototype.__modules__ = []);
//                 const t = W.prototype.__modules__;
//                 "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
//             }
//
//             static use(e) {
//                 return Array.isArray(e) ? (e.forEach((e => W.installModule(e))), W) : (W.installModule(e), W)
//             }
//         }
//
//         Object.keys(G).forEach((e => {
//             Object.keys(G[e]).forEach((t => {
//                 W.prototype[t] = G[e][t]
//             }))
//         })), W.use([function ({swiper: e, on: t, emit: n}) {
//             const r = s();
//             let i = null;
//             const o = () => {
//                 e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
//             }, a = () => {
//                 e && !e.destroyed && e.initialized && n("orientationchange")
//             };
//             t("init", (() => {
//                 e.params.resizeObserver && void 0 !== r.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
//                     const {width: n, height: r} = e;
//                     let i = n, s = r;
//                     t.forEach((({contentBoxSize: t, contentRect: n, target: r}) => {
//                         r && r !== e.el || (i = n ? n.width : (t[0] || t).inlineSize, s = n ? n.height : (t[0] || t).blockSize)
//                     })), i === n && s === r || o()
//                 })), i.observe(e.el)) : (r.addEventListener("resize", o), r.addEventListener("orientationchange", a))
//             })), t("destroy", (() => {
//                 i && i.unobserve && e.el && (i.unobserve(e.el), i = null), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", a)
//             }))
//         }, function ({swiper: e, extendParams: t, on: n, emit: r}) {
//             const i = [], o = s(), a = (e, t = {}) => {
//                 const n = new (o.MutationObserver || o.WebkitMutationObserver)((e => {
//                     if (1 === e.length) return void r("observerUpdate", e[0]);
//                     const t = function () {
//                         r("observerUpdate", e[0])
//                     };
//                     o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0)
//                 }));
//                 n.observe(e, {
//                     attributes: void 0 === t.attributes || t.attributes,
//                     childList: void 0 === t.childList || t.childList,
//                     characterData: void 0 === t.characterData || t.characterData
//                 }), i.push(n)
//             };
//             t({observer: !1, observeParents: !1, observeSlideChildren: !1}), n("init", (() => {
//                 if (e.params.observer) {
//                     if (e.params.observeParents) {
//                         const t = e.$el.parents();
//                         for (let e = 0; e < t.length; e += 1) a(t[e])
//                     }
//                     a(e.$el[0], {childList: e.params.observeSlideChildren}), a(e.$wrapperEl[0], {attributes: !1})
//                 }
//             })), n("destroy", (() => {
//                 i.forEach((e => {
//                     e.disconnect()
//                 })), i.splice(0, i.length)
//             }))
//         }]);
//         var Y = W;
//
//         function X(e, t, n, r) {
//             const o = i();
//             return e.params.createElements && Object.keys(r).forEach((i => {
//                 if (!n[i] && !0 === n.auto) {
//                     let s = e.$el.children(`.${r[i]}`)[0];
//                     s || (s = o.createElement("div"), s.className = r[i], e.$el.append(s)), n[i] = s, t[i] = s
//                 }
//             })), n
//         }
//
//         function K({swiper: e, extendParams: t, on: n, emit: r}) {
//             function i(t) {
//                 let n;
//                 return t && (n = f(t), e.params.uniqueNavElements && "string" == typeof t && n.length > 1 && 1 === e.$el.find(t).length && (n = e.$el.find(t))), n
//             }
//
//             function o(t, n) {
//                 const r = e.params.navigation;
//                 t && t.length > 0 && (t[n ? "addClass" : "removeClass"](r.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](r.lockClass))
//             }
//
//             function s() {
//                 if (e.params.loop) return;
//                 const {$nextEl: t, $prevEl: n} = e.navigation;
//                 o(n, e.isBeginning && !e.params.rewind), o(t, e.isEnd && !e.params.rewind)
//             }
//
//             function a(t) {
//                 t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev()
//             }
//
//             function l(t) {
//                 t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext()
//             }
//
//             function u() {
//                 const t = e.params.navigation;
//                 if (e.params.navigation = X(e, e.originalParams.navigation, e.params.navigation, {
//                     nextEl: "swiper-button-next",
//                     prevEl: "swiper-button-prev"
//                 }), !t.nextEl && !t.prevEl) return;
//                 const n = i(t.nextEl), r = i(t.prevEl);
//                 n && n.length > 0 && n.on("click", l), r && r.length > 0 && r.on("click", a), Object.assign(e.navigation, {
//                     $nextEl: n,
//                     nextEl: n && n[0],
//                     $prevEl: r,
//                     prevEl: r && r[0]
//                 }), e.enabled || (n && n.addClass(t.lockClass), r && r.addClass(t.lockClass))
//             }
//
//             function c() {
//                 const {$nextEl: t, $prevEl: n} = e.navigation;
//                 t && t.length && (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", a), n.removeClass(e.params.navigation.disabledClass))
//             }
//
//             t({
//                 navigation: {
//                     nextEl: null,
//                     prevEl: null,
//                     hideOnClick: !1,
//                     disabledClass: "swiper-button-disabled",
//                     hiddenClass: "swiper-button-hidden",
//                     lockClass: "swiper-button-lock"
//                 }
//             }), e.navigation = {nextEl: null, $nextEl: null, prevEl: null, $prevEl: null}, n("init", (() => {
//                 u(), s()
//             })), n("toEdge fromEdge lock unlock", (() => {
//                 s()
//             })), n("destroy", (() => {
//                 c()
//             })), n("enable disable", (() => {
//                 const {$nextEl: t, $prevEl: n} = e.navigation;
//                 t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
//             })), n("click", ((t, n) => {
//                 const {$nextEl: i, $prevEl: o} = e.navigation, s = n.target;
//                 if (e.params.navigation.hideOnClick && !f(s).is(o) && !f(s).is(i)) {
//                     if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === s || e.pagination.el.contains(s))) return;
//                     let t;
//                     i ? t = i.hasClass(e.params.navigation.hiddenClass) : o && (t = o.hasClass(e.params.navigation.hiddenClass)), r(!0 === t ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), o && o.toggleClass(e.params.navigation.hiddenClass)
//                 }
//             })), Object.assign(e.navigation, {update: s, init: u, destroy: c})
//         }
//
//         function J(e = "") {
//             return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
//         }
//
//         function Z({swiper: e, extendParams: t, on: n, emit: r}) {
//             const i = "swiper-pagination";
//             let o;
//             t({
//                 pagination: {
//                     el: null,
//                     bulletElement: "span",
//                     clickable: !1,
//                     hideOnClick: !1,
//                     renderBullet: null,
//                     renderProgressbar: null,
//                     renderFraction: null,
//                     renderCustom: null,
//                     progressbarOpposite: !1,
//                     type: "bullets",
//                     dynamicBullets: !1,
//                     dynamicMainBullets: 1,
//                     formatFractionCurrent: e => e,
//                     formatFractionTotal: e => e,
//                     bulletClass: `${i}-bullet`,
//                     bulletActiveClass: `${i}-bullet-active`,
//                     modifierClass: `${i}-`,
//                     currentClass: `${i}-current`,
//                     totalClass: `${i}-total`,
//                     hiddenClass: `${i}-hidden`,
//                     progressbarFillClass: `${i}-progressbar-fill`,
//                     progressbarOppositeClass: `${i}-progressbar-opposite`,
//                     clickableClass: `${i}-clickable`,
//                     lockClass: `${i}-lock`,
//                     horizontalClass: `${i}-horizontal`,
//                     verticalClass: `${i}-vertical`
//                 }
//             }), e.pagination = {el: null, $el: null, bullets: []};
//             let s = 0;
//
//             function a() {
//                 return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
//             }
//
//             function l(t, n) {
//                 const {bulletActiveClass: r} = e.params.pagination;
//                 t[n]().addClass(`${r}-${n}`)[n]().addClass(`${r}-${n}-${n}`)
//             }
//
//             function u() {
//                 const t = e.rtl, n = e.params.pagination;
//                 if (a()) return;
//                 const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
//                     u = e.pagination.$el;
//                 let c;
//                 const d = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
//                 if (e.params.loop ? (c = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides), c > d - 1 && (c -= d), c < 0 && "bullets" !== e.params.paginationType && (c = d + c)) : c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
//                     const r = e.pagination.bullets;
//                     let i, a, d;
//                     if (n.dynamicBullets && (o = r.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), u.css(e.isHorizontal() ? "width" : "height", o * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (s += c - (e.previousIndex - e.loopedSlides || 0), s > n.dynamicMainBullets - 1 ? s = n.dynamicMainBullets - 1 : s < 0 && (s = 0)), i = Math.max(c - s, 0), a = i + (Math.min(r.length, n.dynamicMainBullets) - 1), d = (a + i) / 2), r.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${n.bulletActiveClass}${e}`)).join(" ")), u.length > 1) r.each((e => {
//                         const t = f(e), r = t.index();
//                         r === c && t.addClass(n.bulletActiveClass), n.dynamicBullets && (r >= i && r <= a && t.addClass(`${n.bulletActiveClass}-main`), r === i && l(t, "prev"), r === a && l(t, "next"))
//                     })); else {
//                         const t = r.eq(c), o = t.index();
//                         if (t.addClass(n.bulletActiveClass), n.dynamicBullets) {
//                             const t = r.eq(i), s = r.eq(a);
//                             for (let e = i; e <= a; e += 1) r.eq(e).addClass(`${n.bulletActiveClass}-main`);
//                             if (e.params.loop) if (o >= r.length) {
//                                 for (let e = n.dynamicMainBullets; e >= 0; e -= 1) r.eq(r.length - e).addClass(`${n.bulletActiveClass}-main`);
//                                 r.eq(r.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
//                             } else l(t, "prev"), l(s, "next"); else l(t, "prev"), l(s, "next")
//                         }
//                     }
//                     if (n.dynamicBullets) {
//                         const i = Math.min(r.length, n.dynamicMainBullets + 4), s = (o * i - o) / 2 - d * o,
//                             a = t ? "right" : "left";
//                         r.css(e.isHorizontal() ? a : "top", `${s}px`)
//                     }
//                 }
//                 if ("fraction" === n.type && (u.find(J(n.currentClass)).text(n.formatFractionCurrent(c + 1)), u.find(J(n.totalClass)).text(n.formatFractionTotal(d))), "progressbar" === n.type) {
//                     let t;
//                     t = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
//                     const r = (c + 1) / d;
//                     let i = 1, o = 1;
//                     "horizontal" === t ? i = r : o = r, u.find(J(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${o})`).transition(e.params.speed)
//                 }
//                 "custom" === n.type && n.renderCustom ? (u.html(n.renderCustom(e, c + 1, d)), r("paginationRender", u[0])) : r("paginationUpdate", u[0]), e.params.watchOverflow && e.enabled && u[e.isLocked ? "addClass" : "removeClass"](n.lockClass)
//             }
//
//             function c() {
//                 const t = e.params.pagination;
//                 if (a()) return;
//                 const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
//                     i = e.pagination.$el;
//                 let o = "";
//                 if ("bullets" === t.type) {
//                     let r = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
//                     e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && r > n && (r = n);
//                     for (let n = 0; n < r; n += 1) t.renderBullet ? o += t.renderBullet.call(e, n, t.bulletClass) : o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
//                     i.html(o), e.pagination.bullets = i.find(J(t.bulletClass))
//                 }
//                 "fraction" === t.type && (o = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(o)), "progressbar" === t.type && (o = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(o)), "custom" !== t.type && r("paginationRender", e.pagination.$el[0])
//             }
//
//             function d() {
//                 e.params.pagination = X(e, e.originalParams.pagination, e.params.pagination, {el: "swiper-pagination"});
//                 const t = e.params.pagination;
//                 if (!t.el) return;
//                 let n = f(t.el);
//                 0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el), n.length > 1 && (n = n.filter((t => f(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), n.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (n.addClass(`${t.modifierClass}${t.type}-dynamic`), s = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", J(t.bulletClass), (function (t) {
//                     t.preventDefault();
//                     let n = f(this).index() * e.params.slidesPerGroup;
//                     e.params.loop && (n += e.loopedSlides), e.slideTo(n)
//                 })), Object.assign(e.pagination, {$el: n, el: n[0]}), e.enabled || n.addClass(t.lockClass))
//             }
//
//             function p() {
//                 const t = e.params.pagination;
//                 if (a()) return;
//                 const n = e.pagination.$el;
//                 n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), n.removeClass(t.modifierClass + e.params.direction), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", J(t.bulletClass))
//             }
//
//             n("init", (() => {
//                 d(), c(), u()
//             })), n("activeIndexChange", (() => {
//                 (e.params.loop || void 0 === e.snapIndex) && u()
//             })), n("snapIndexChange", (() => {
//                 e.params.loop || u()
//             })), n("slidesLengthChange", (() => {
//                 e.params.loop && (c(), u())
//             })), n("snapGridLengthChange", (() => {
//                 e.params.loop || (c(), u())
//             })), n("destroy", (() => {
//                 p()
//             })), n("enable disable", (() => {
//                 const {$el: t} = e.pagination;
//                 t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
//             })), n("lock unlock", (() => {
//                 u()
//             })), n("click", ((t, n) => {
//                 const i = n.target, {$el: o} = e.pagination;
//                 if (e.params.pagination.el && e.params.pagination.hideOnClick && o.length > 0 && !f(i).hasClass(e.params.pagination.bulletClass)) {
//                     if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
//                     const t = o.hasClass(e.params.pagination.hiddenClass);
//                     r(!0 === t ? "paginationShow" : "paginationHide"), o.toggleClass(e.params.pagination.hiddenClass)
//                 }
//             })), Object.assign(e.pagination, {render: c, update: u, init: d, destroy: p})
//         }
//
//         function Q({swiper: e, extendParams: t, on: n, emit: r}) {
//             t({
//                 lazy: {
//                     checkInView: !1,
//                     enabled: !1,
//                     loadPrevNext: !1,
//                     loadPrevNextAmount: 1,
//                     loadOnTransitionStart: !1,
//                     scrollingElement: "",
//                     elementClass: "swiper-lazy",
//                     loadingClass: "swiper-lazy-loading",
//                     loadedClass: "swiper-lazy-loaded",
//                     preloaderClass: "swiper-lazy-preloader"
//                 }
//             }), e.lazy = {};
//             let i = !1, o = !1;
//
//             function a(t, n = !0) {
//                 const i = e.params.lazy;
//                 if (void 0 === t) return;
//                 if (0 === e.slides.length) return;
//                 const o = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`) : e.slides.eq(t),
//                     s = o.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
//                 !o.hasClass(i.elementClass) || o.hasClass(i.loadedClass) || o.hasClass(i.loadingClass) || s.push(o[0]), 0 !== s.length && s.each((t => {
//                     const s = f(t);
//                     s.addClass(i.loadingClass);
//                     const l = s.attr("data-background"), u = s.attr("data-src"), c = s.attr("data-srcset"),
//                         d = s.attr("data-sizes"), p = s.parent("picture");
//                     e.loadImage(s[0], u || l, c, d, !1, (() => {
//                         if (null != e && e && (!e || e.params) && !e.destroyed) {
//                             if (l ? (s.css("background-image", `url("${l}")`), s.removeAttr("data-background")) : (c && (s.attr("srcset", c), s.removeAttr("data-srcset")), d && (s.attr("sizes", d), s.removeAttr("data-sizes")), p.length && p.children("source").each((e => {
//                                 const t = f(e);
//                                 t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
//                             })), u && (s.attr("src", u), s.removeAttr("data-src"))), s.addClass(i.loadedClass).removeClass(i.loadingClass), o.find(`.${i.preloaderClass}`).remove(), e.params.loop && n) {
//                                 const t = o.attr("data-swiper-slide-index");
//                                 o.hasClass(e.params.slideDuplicateClass) ? a(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(), !1) : a(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1)
//                             }
//                             r("lazyImageReady", o[0], s[0]), e.params.autoHeight && e.updateAutoHeight()
//                         }
//                     })), r("lazyImageLoad", o[0], s[0])
//                 }))
//             }
//
//             function l() {
//                 const {$wrapperEl: t, params: n, slides: r, activeIndex: i} = e, s = e.virtual && n.virtual.enabled,
//                     l = n.lazy;
//                 let u = n.slidesPerView;
//
//                 function c(e) {
//                     if (s) {
//                         if (t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
//                     } else if (r[e]) return !0;
//                     return !1
//                 }
//
//                 function d(e) {
//                     return s ? f(e).attr("data-swiper-slide-index") : f(e).index()
//                 }
//
//                 if ("auto" === u && (u = 0), o || (o = !0), e.params.watchSlidesProgress) t.children(`.${n.slideVisibleClass}`).each((e => {
//                     a(s ? f(e).attr("data-swiper-slide-index") : f(e).index())
//                 })); else if (u > 1) for (let e = i; e < i + u; e += 1) c(e) && a(e); else a(i);
//                 if (l.loadPrevNext) if (u > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
//                     const e = l.loadPrevNextAmount, t = u, n = Math.min(i + t + Math.max(e, t), r.length),
//                         o = Math.max(i - Math.max(t, e), 0);
//                     for (let e = i + u; e < n; e += 1) c(e) && a(e);
//                     for (let e = o; e < i; e += 1) c(e) && a(e)
//                 } else {
//                     const e = t.children(`.${n.slideNextClass}`);
//                     e.length > 0 && a(d(e));
//                     const r = t.children(`.${n.slidePrevClass}`);
//                     r.length > 0 && a(d(r))
//                 }
//             }
//
//             function u() {
//                 const t = s();
//                 if (!e || e.destroyed) return;
//                 const n = e.params.lazy.scrollingElement ? f(e.params.lazy.scrollingElement) : f(t), r = n[0] === t,
//                     o = r ? t.innerWidth : n[0].offsetWidth, a = r ? t.innerHeight : n[0].offsetHeight,
//                     c = e.$el.offset(), {rtlTranslate: d} = e;
//                 let p = !1;
//                 d && (c.left -= e.$el[0].scrollLeft);
//                 const h = [[c.left, c.top], [c.left + e.width, c.top], [c.left, c.top + e.height], [c.left + e.width, c.top + e.height]];
//                 for (let e = 0; e < h.length; e += 1) {
//                     const t = h[e];
//                     if (t[0] >= 0 && t[0] <= o && t[1] >= 0 && t[1] <= a) {
//                         if (0 === t[0] && 0 === t[1]) continue;
//                         p = !0
//                     }
//                 }
//                 const m = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
//                     passive: !0,
//                     capture: !1
//                 };
//                 p ? (l(), n.off("scroll", u, m)) : i || (i = !0, n.on("scroll", u, m))
//             }
//
//             n("beforeInit", (() => {
//                 e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
//             })), n("init", (() => {
//                 e.params.lazy.enabled && (e.params.lazy.checkInView ? u() : l())
//             })), n("scroll", (() => {
//                 e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && l()
//             })), n("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
//                 e.params.lazy.enabled && (e.params.lazy.checkInView ? u() : l())
//             })), n("transitionStart", (() => {
//                 e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !o) && (e.params.lazy.checkInView ? u() : l())
//             })), n("transitionEnd", (() => {
//                 e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? u() : l())
//             })), n("slideChange", (() => {
//                 const {lazy: t, cssMode: n, watchSlidesProgress: r, touchReleaseOnEdges: i, resistanceRatio: o} = e.params;
//                 t.enabled && (n || r && (i || 0 === o)) && l()
//             })), Object.assign(e.lazy, {load: l, loadInSlide: a})
//         }
//
//         var ee = function (e) {
//             var t = window.innerWidth;
//             window.addEventListener("resize", (function () {
//                 window.innerWidth !== t && (t = window.innerWidth, e())
//             }))
//         };
//         Y.use([Z, K, Q]);
//         Y.use([Z, K]);
//         Y.use([K, Q]);
//         Y.use([Z, K]);
//         Y.use([K, Z]);
//         Y.use([K, Z, Q]);
//         Y.use([K, Z]);
//         Y.use([Z, K]);
//         Y.use([Z, K]);
//         Y.use([K, Z]);
//         Y.use([K, Z]);
//         Y.use([K, Z]);
//         Y.use([Z, K, Q]);
//         Y.use([Z, K]);
//         var te = function () {
//             var e, t, n;
//             (function () {
//                 var e = document.querySelector(".participation__slider"), t = null;
//
//                 function n() {
//                     window.innerWidth > 767 ? t || (t = new Y(e, {
//                         loop: !0,
//                         lazy: !0,
//                         effect: "slide",
//                         breakpoints: {
//                             1170: {slidesPerView: 5, spaceBetween: 20},
//                             768: {slidesPerView: 3, spaceBetween: 20}
//                         },
//                         navigation: {
//                             nextEl: ".participation .slider-navigation__button--next",
//                             prevEl: ".participation .slider-navigation__button--prev"
//                         },
//                         pagination: {el: ".participation .swiper-pagination", type: "fraction"},
//                         a11y: {
//                             enabled: !0,
//                             prevSlideMessage: "Переход на предыдущий слайд",
//                             nextSlideMessage: "Переход на следующий слайд"
//                         }
//                     })) : t && (t.destroy(), t = null)
//                 }
//
//                 e && n(), e && ee(n)
//             })(), function () {
//                 var e = document.querySelector(".faq__slider"), t = null;
//
//                 function n() {
//                     window.innerWidth <= 767 ? t || (t = new Y(e, {
//                         observer: !0,
//                         observeParents: !0,
//                         loop: !1,
//                         spaceBetween: 10,
//                         breakpoints: {
//                             650: {slidesPerView: 3.4},
//                             500: {slidesPerView: 2.7},
//                             370: {slidesPerView: 2.05},
//                             0: {slidesPerView: 1.8}
//                         }
//                     })) : t && (t.destroy(), t = null)
//                 }
//
//                 e && n(), e && ee(n)
//             }(), (n = document.querySelector(".diplom__slider")) && new Y(n, {
//                 watchOverflow: !0,
//                 autoHeight: !1,
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//                 navigation: {
//                     nextEl: ".diplom .slider-navigation__button--next",
//                     prevEl: ".diplom .slider-navigation__button--prev"
//                 },
//                 pagination: {el: ".diplom .swiper-pagination", type: "fraction"}
//             }), function () {
//                 var e = document.querySelector(".partners-slider-desc"),
//                     t = document.querySelector(".partners-slider-mob"), n = null;
//                 if (e && t) {
//                     var r = function () {
//                         n && (n.destroy(), n = null)
//                     }, i = function () {
//                         window.innerWidth <= 767 ? (r(), n = new Y(t, {
//                             loop: !0,
//                             lazy: !0,
//                             slidesPerView: 1,
//                             autoHeight: !0,
//                             navigation: {
//                                 nextEl: ".partners .slider-navigation__button--next",
//                                 prevEl: ".partners .slider-navigation__button--prev"
//                             },
//                             pagination: {
//                                 el: ".partners .partners-pagination",
//                                 bulletActiveClass: "active",
//                                 clickable: !0
//                             },
//                             a11y: {
//                                 enabled: !0,
//                                 prevSlideMessage: "Переход на предыдущий слайд",
//                                 nextSlideMessage: "Переход на следующий слайд"
//                             }
//                         })) : (r(), n = new Y(e, {
//                             loop: !0,
//                             lazy: !0,
//                             slidesPerView: 1,
//                             autoHeight: !0,
//                             navigation: {
//                                 nextEl: ".partners .slider-navigation__button--next",
//                                 prevEl: ".partners .slider-navigation__button--prev"
//                             },
//                             pagination: {
//                                 el: ".partners .partners-pagination",
//                                 bulletActiveClass: "active",
//                                 clickable: !0
//                             },
//                             a11y: {
//                                 enabled: !0,
//                                 prevSlideMessage: "Переход на предыдущий слайд",
//                                 nextSlideMessage: "Переход на следующий слайд"
//                             }
//                         }))
//                     };
//                     i(), ee(i)
//                 }
//             }(), function () {
//                 var e = document.querySelector(".cases__slider");
//                 e && new Y(e, {
//                     loop: !0,
//                     breakpoints: {
//                         1441: {slidesPerView: 3, spaceBetween: 30},
//                         1170: {slidesPerView: 3, spaceBetween: 20},
//                         768: {slidesPerView: 2, spaceBetween: 20},
//                         0: {slidesPerView: 1, spaceBetween: 10}
//                     },
//                     navigation: {
//                         nextEl: ".cases .slider-navigation__button--next",
//                         prevEl: ".cases .slider-navigation__button--prev"
//                     },
//                     pagination: {el: ".cases .swiper-pagination", type: "fraction"}
//                 })
//             }(), (t = document.querySelectorAll(".reviews")).length && t.forEach((function (e) {
//                 var t = e.querySelector(".reviews__slider");
//                 new Y(t, {
//                     loop: !0,
//                     effect: "slide",
//                     spaceBetween: 20,
//                     breakpoints: {
//                         1441: {slidesPerView: 5},
//                         1171: {slidesPerView: 4},
//                         651: {slidesPerView: 2},
//                         501: {slidesPerView: 1.5},
//                         0: {slidesPerView: 1}
//                     },
//                     navigation: {
//                         nextEl: e.querySelector(".slider-navigation__button--next"),
//                         prevEl: e.querySelector(".slider-navigation__button--prev")
//                     },
//                     pagination: {el: e.querySelector(".swiper-pagination"), type: "fraction"},
//                     a11y: {
//                         enabled: !0,
//                         prevSlideMessage: "Переход на предыдущий слайд",
//                         nextSlideMessage: "Переход на следующий слайд"
//                     }
//                 });
//                 var n = e.querySelectorAll(".reviews__slide");
//                 null == n || n.forEach((function (e) {
//                     e.addEventListener("mouseover", (function () {
//                         var t;
//                         return null === (t = e.querySelector("video")) || void 0 === t ? void 0 : t.play()
//                     })), e.addEventListener("mouseleave", (function () {
//                         var t;
//                         return null === (t = e.querySelector("video")) || void 0 === t ? void 0 : t.pause()
//                     }))
//                 }))
//             })), t.length && t.forEach((function (e, t) {
//                 var n = e.querySelectorAll(".swiper-slide-duplicate");
//                 null == n || n.forEach((function (e, n) {
//                     var r;
//                     null === (r = e.querySelector(".reviews__slide-play")) || void 0 === r || r.setAttribute("data-fslightbox", "dublicate-review-".concat(t + 1, "-").concat(n + 1))
//                 }))
//             })), refreshFsLightbox(), (e = document.querySelector(".news__slider")) && new Y(e, {
//                 loop: !0,
//                 lazy: !0,
//                 effect: "slide",
//                 breakpoints: {
//                     1440: {slidesPerView: 3, spaceBetween: 20},
//                     1170: {slidesPerView: 2, spaceBetween: 20},
//                     768: {slidesPerView: 3, spaceBetween: 15},
//                     500: {slidesPerView: 2.2, spaceBetween: 15},
//                     0: {slidesPerView: 1.1, spaceBetween: 10}
//                 },
//                 navigation: {
//                     nextEl: ".news .slider-navigation__button--next",
//                     prevEl: ".news .slider-navigation__button--prev"
//                 },
//                 pagination: {el: ".news .swiper-pagination", type: "fraction"},
//                 a11y: {
//                     enabled: !0,
//                     prevSlideMessage: "Переход на предыдущий слайд",
//                     nextSlideMessage: "Переход на следующий слайд"
//                 }
//             }), function () {
//                 var e = document.querySelector(".teachers__slider");
//                 e && new Y(e, {
//                     watchOverflow: !0,
//                     effect: "slide",
//                     breakpoints: {
//                         1170: {slidesPerView: 4, spaceBetween: 20},
//                         768: {slidesPerView: 3, spaceBetween: 15},
//                         500: {slidesPerView: 2, spaceBetween: 15},
//                         0: {slidesPerView: 1.2, spaceBetween: 10}
//                     },
//                     navigation: {
//                         nextEl: ".teachers .slider-navigation__button--next",
//                         prevEl: ".teachers .slider-navigation__button--prev"
//                     },
//                     pagination: {el: ".teachers .swiper-pagination", type: "fraction"},
//                     a11y: {
//                         enabled: !0,
//                         prevSlideMessage: "Переход на предыдущий слайд",
//                         nextSlideMessage: "Переход на следующий слайд"
//                     }
//                 })
//             }(), function () {
//                 var e = document.querySelector(".cooperation__slider");
//                 e && new Y(e, {
//                     breakpoints: {
//                         1170: {slidesPerGroup: 3, slidesPerView: 3, spaceBetween: 20},
//                         767: {slidesPerGroup: 2, slidesPerView: 2, spaceBetween: 15},
//                         0: {slidesPerView: 1, spaceBetween: 20}
//                     },
//                     navigation: {
//                         nextEl: ".cooperation .slider-navigation__button--next",
//                         prevEl: ".cooperation .slider-navigation__button--prev"
//                     },
//                     pagination: {el: ".cooperation .swiper-pagination", type: "fraction"}
//                 })
//             }(), function () {
//                 var e = document.querySelector(".stories__slider");
//                 e && new Y(e, {
//                     loop: !0,
//                     slidesPerView: 1,
//                     spaceBetween: 20,
//                     navigation: {
//                         nextEl: ".stories .slider-navigation__button--next",
//                         prevEl: ".stories .slider-navigation__button--prev"
//                     },
//                     pagination: {el: ".stories .swiper-pagination", type: "fraction"}
//                 })
//             }(), function () {
//                 var e = document.querySelector(".hr-reviews__slider");
//                 e && new Y(e, {
//                     loop: !0,
//                     spaceBetween: 20,
//                     autoHeight: !0,
//                     breakpoints: {
//                         1441: {slidesPerView: 5},
//                         1171: {slidesPerView: 4},
//                         767: {slidesPerView: 3},
//                         0: {slidesPerView: 1}
//                     },
//                     pagination: {el: ".hr-reviews .swiper-pagination", type: "fraction"},
//                     navigation: {
//                         nextEl: ".hr-reviews .slider-navigation__button--next",
//                         prevEl: ".hr-reviews .slider-navigation__button--prev"
//                     }
//                 })
//             }(), function () {
//                 var e = document.querySelector(".team__slider");
//                 e && new Y(e, {
//                     watchOverflow: !0,
//                     effect: "slide",
//                     breakpoints: {
//                         768: {slidesPerView: 4, spaceBetween: 20},
//                         500: {slidesPerView: 2, spaceBetween: 20},
//                         0: {slidesPerView: 1.2, spaceBetween: 10}
//                     },
//                     navigation: {
//                         nextEl: ".team .slider-navigation__button--next",
//                         prevEl: ".team .slider-navigation__button--prev"
//                     },
//                     pagination: {el: ".team .swiper-pagination", type: "fraction"},
//                     a11y: {
//                         enabled: !0,
//                         prevSlideMessage: "Переход на предыдущий слайд",
//                         nextSlideMessage: "Переход на следующий слайд"
//                     }
//                 })
//             }(), function () {
//                 var e = document.querySelectorAll(".reviewsPage-reviews");
//                 e.length && e.forEach((function (e) {
//                     var t = e.querySelector(".reviewsPage-reviews__swiper");
//                     new Y(t, {
//                         loop: !0,
//                         effect: "slide",
//                         spaceBetween: 20,
//                         breakpoints: {
//                             1441: {slidesPerView: 6},
//                             1171: {slidesPerView: 4},
//                             651: {slidesPerView: 2},
//                             501: {slidesPerView: 1.5},
//                             350: {slidesPerView: 1.4},
//                             0: {slidesPerView: 1}
//                         },
//                         navigation: {
//                             nextEl: e.querySelector(".reviewsPage__reviews .slider-navigation__button--next"),
//                             prevEl: e.querySelector(".reviewsPage__reviews .slider-navigation__button--prev")
//                         },
//                         pagination: {el: e.querySelector(".swiper-pagination"), type: "fraction"},
//                         a11y: {
//                             enabled: !0,
//                             prevSlideMessage: "Переход на предыдущий слайд",
//                             nextSlideMessage: "Переход на следующий слайд"
//                         }
//                     });
//                     var n = e.querySelectorAll(".reviewsPage-reviews__slide");
//                     null == n || n.forEach((function (e) {
//                         e.addEventListener("mouseover", (function () {
//                             var t;
//                             return null === (t = e.querySelector("video")) || void 0 === t ? void 0 : t.play()
//                         })), e.addEventListener("mouseleave", (function () {
//                             var t;
//                             return null === (t = e.querySelector("video")) || void 0 === t ? void 0 : t.pause()
//                         }))
//                     }))
//                 })), e.length && e.forEach((function (e, t) {
//                     var n = e.querySelectorAll(".swiper-slide-duplicate");
//                     null == n || n.forEach((function (e, n) {
//                         var r;
//                         null === (r = e.querySelector(".reviewsPage-reviews__slide-play")) || void 0 === r || r.setAttribute("data-fslightbox", "dublicate-review-".concat(t + 1, "-").concat(n + 1))
//                     }))
//                 })), refreshFsLightbox()
//             }(), function () {
//                 var e = document.querySelectorAll(".job-seeker");
//                 e.length && e.forEach((function (e) {
//                     var t = e.querySelector(".job-seeker__slider");
//                     new Y(t, {
//                         loop: !0,
//                         lazy: !0,
//                         effect: "slide",
//                         slidesPerView: 1,
//                         spaceBetween: 10,
//                         autoHeight: !0,
//                         navigation: {
//                             nextEl: e.querySelector(".slider-navigation__button--next"),
//                             prevEl: e.querySelector(".slider-navigation__button--prev")
//                         },
//                         pagination: {el: e.querySelector(".swiper-pagination"), type: "fraction"},
//                         a11y: {
//                             enabled: !0,
//                             prevSlideMessage: "Переход на предыдущий слайд",
//                             nextSlideMessage: "Переход на следующий слайд"
//                         }
//                     })
//                 }))
//             }(), function () {
//                 var e = document.querySelector(".riskDiss__content");
//                 e && new Y(e, {
//                     autoHeight: !0,
//                     loop: !1,
//                     lazy: !0,
//                     spaceBetween: 20,
//                     slidesPerView: 1,
//                     navigation: {
//                         nextEl: ".riskDiss__navigation-next",
//                         prevEl: ".riskDiss__navigation-prev",
//                         disabledClass: "last"
//                     },
//                     pagination: {el: ".riskDiss__pagination", type: "fraction"}
//                 })
//             }()
//         };
//
//         function ne(e) {
//             return ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//                 return typeof e
//             } : function (e) {
//                 return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//             }, ne(e)
//         }
//
//         function re(e, t) {
//             for (var n = 0; n < t.length; n++) {
//                 var r = t[n];
//                 r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (void 0, i = function (e, t) {
//                     if ("object" !== ne(e) || null === e) return e;
//                     var n = e[Symbol.toPrimitive];
//                     if (void 0 !== n) {
//                         var r = n.call(e, "string");
//                         if ("object" !== ne(r)) return r;
//                         throw new TypeError("@@toPrimitive must return a primitive value.")
//                     }
//                     return String(e)
//                 }(r.key), "symbol" === ne(i) ? i : String(i)), r)
//             }
//             var i
//         }
//
//         var ie = function () {
//             function e() {
//                 !function (e, t) {
//                     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//                 }(this, e), this._openHeight = 0, this._windowWidth = window.innerWidth, this._documentClickHandler = this._documentClickHandler.bind(this), this._windowResizeHandler = this._windowResizeHandler.bind(this), this._init()
//             }
//
//             var t, n;
//             return t = e, n = [{
//                 key: "_init", value: function () {
//                     this.fullUpdate(), document.addEventListener("click", this._documentClickHandler), window.addEventListener("resize", this._windowResizeHandler)
//                 }
//             }, {
//                 key: "_documentClickHandler", value: function (e) {
//                     var t = e.target;
//                     if (t.closest('[data-accordion="button"]')) {
//                         e.preventDefault();
//                         var n = t.closest('[data-accordion="parent"]');
//                         if (!n.dataset.destroy || window.matchMedia(n.dataset.destroy).matches) {
//                             var r = t.closest('[data-accordion="element"]');
//                             r.classList.contains("is-active") ? this.closeAccordion(r) : this.openAccordion(r)
//                         }
//                     }
//                 }
//             }, {
//                 key: "_windowResizeHandler", value: function () {
//                     this._windowWidth !== window.innerWidth && (this._windowWidth = window.innerWidth, this.updateAccordionsHeight())
//                 }
//             }, {
//                 key: "closeAllAccordion", value: function (e) {
//                     var t = this;
//                     e.querySelectorAll('[data-accordion="element"]').forEach((function (n) {
//                         n.closest('[data-accordion="parent"]') === e && t.closeAccordion(n)
//                     }))
//                 }
//             }, {
//                 key: "updateAccordionsHeight", value: function () {
//                     var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
//                     if (e) {
//                         var t = e.querySelector('[data-accordion="content"]');
//                         return t.style.transition = "none", t.style.maxHeight = "".concat(t.scrollHeight, "px"), void setTimeout((function () {
//                             t.style.transition = null
//                         }))
//                     }
//                     document.querySelectorAll('[data-accordion="element"]:not(.is-active)').forEach((function (e) {
//                         var t = e.closest('[data-accordion="parent"]'),
//                             n = null == e ? void 0 : e.querySelector('[data-accordion="content"]');
//                         !t.dataset.destroy || window.matchMedia(t.dataset.destroy).matches ? n && (n.style.maxHeight = null) : n.style.maxHeight = "100%"
//                     })), document.querySelectorAll('[data-accordion="element"].is-active').forEach((function (e) {
//                         var t = e.querySelector('[data-accordion="content"]'),
//                             n = e.closest('[data-accordion="parent"]');
//                         !n.dataset.destroy || window.matchMedia(n.dataset.destroy).matches ? (t.style.transition = "none", t.style.maxHeight = "".concat(t.scrollHeight, "px"), setTimeout((function () {
//                             t.style.transition = null
//                         }))) : t.style.maxHeight = "100%"
//                     }))
//                 }
//             }, {
//                 key: "fullUpdate", value: function () {
//                     var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
//                         n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
//                     (t ? t.querySelectorAll('[data-accordion="element"].is-active') : document.querySelectorAll('[data-accordion="element"].is-active')).forEach((function (t) {
//                         t.querySelector('[data-accordion="parent"]') || e.openAccordion(t, n)
//                     })), this.updateAccordionsHeight()
//                 }
//             }, {
//                 key: "openAccordion", value: function (e) {
//                     var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
//                         n = e.closest('[data-accordion="parent"]'), r = e.querySelector('[data-accordion="content"]');
//                     this._openHeight += r.scrollHeight, n.hasAttribute("data-single") && this.closeAllAccordion(n), e.classList.add("is-active"), t ? r.style.maxHeight = "".concat(this._openHeight, "px") : (r.style.transition = "none", r.style.maxHeight = "".concat(this._openHeight, "px"), setTimeout((function () {
//                         r.style.transition = null
//                     }))), n.closest('[data-accordion="element"]') ? this.openAccordion(n.closest('[data-accordion="element"]'), t) : this._openHeight = 0
//                 }
//             }, {
//                 key: "closeAccordion", value: function (e) {
//                     var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
//                         n = e.querySelector('[data-accordion="content"]');
//                     n && (e.classList.remove("is-active"), t ? n.style.maxHeight = "0" : (n.style.transition = "none", n.style.maxHeight = "0", setTimeout((function () {
//                         n.style.transition = null
//                     }))))
//                 }
//             }], n && re(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
//         }();
//
//         function oe(e) {
//             return oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//                 return typeof e
//             } : function (e) {
//                 return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//             }, oe(e)
//         }
//
//         function se(e, t) {
//             for (var n = 0; n < t.length; n++) {
//                 var r = t[n];
//                 r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (void 0, i = function (e, t) {
//                     if ("object" !== oe(e) || null === e) return e;
//                     var n = e[Symbol.toPrimitive];
//                     if (void 0 !== n) {
//                         var r = n.call(e, "string");
//                         if ("object" !== oe(r)) return r;
//                         throw new TypeError("@@toPrimitive must return a primitive value.")
//                     }
//                     return String(e)
//                 }(r.key), "symbol" === oe(i) ? i : String(i)), r)
//             }
//             var i
//         }
//
//         var ae, le = function () {
//             function e() {
//                 !function (e, t) {
//                     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//                 }(this, e), this._modal = document.querySelector(".custom-modal"), this._modal_inset = null, this._modal_content = null, this._documentClickHandler = this._documentClickHandler.bind(this), this.body = document.body, this._init()
//             }
//
//             var t, n;
//             return t = e, (n = [{
//                 key: "_init", value: function () {
//                     this.createModal(), document.addEventListener("click", this._documentClickHandler)
//                 }
//             }, {
//                 key: "_documentClickHandler", value: function (e) {
//                     var t = this, n = e.target;
//                     return n.closest("[data-modal-close]") && n.closest("[data-modal-open]") ? (this.closeModal(), void setTimeout((function () {
//                         t._modal_inset.innerHTML = "", t.openModal(n)
//                     }), 50)) : n.closest("[data-modal-close]") ? void this.closeModal() : n.closest("[data-modal-open]") ? (e.preventDefault(), void setTimeout((function () {
//                         t._modal_inset.innerHTML = "", t.openModal(n)
//                     }), 50)) : void 0
//                 }
//             }, {
//                 key: "openModal", value: function (e) {
//                     var t = e.closest("[data-modal-open]").getAttribute("data-modal-id");
//                     this._modal_content = document.getElementById(t), this._modal_inset.append(this._modal_content), this.modal.classList.add("active"), this.body.classList.add("scroll-lock")
//                 }
//             }, {
//                 key: "closeModal", value: function () {
//                     this.modal.classList.remove("active"), this.body.append(this._modal_content), this.body.classList.remove("scroll-lock")
//                 }
//             }, {
//                 key: "createModal", value: function () {
//                     this.modal || (this.modal = document.createElement("div"), this.modal.classList.add("custom-modal"), document.body.append(this.modal), this.modal.innerHTML = '\n                <div class="custom-modal__wrapper">\n                    <div class="custom-modal__overlay" data-modal-close></div>\n                        <div class="custom-modal__content">\n                            <div class="custom-modal__inset"></div>\n                            <button type="button" class="custom-modal-close" data-modal-close></button>\n                        </div>\n                </div>   \n            ', this._modal_inset = document.querySelector(".custom-modal__inset"))
//                 }
//             }]) && se(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
//         }(), ue = function (e, t) {
//             var n = document.querySelector(e);
//             if (n) {
//                 var r = n.querySelector("[data-show-button]"),
//                     i = Array.from(n.querySelectorAll("[data-collapse-item]")).filter((function (e) {
//                         return "none" !== e.style.display
//                     })), o = i.slice(t), s = function () {
//                         i.forEach((function (e) {
//                             e.style.display = null, e.style.opacity = 1
//                         })), r && (r.classList.remove("hidden"), r.textContent = "Показать еще"), i.length <= t ? null == r || r.classList.add("hidden") : o.forEach((function (e) {
//                             e.style.display = "none", e.style.opacity = 0
//                         }))
//                     };
//                 s();
//                 var a = function e() {
//                     o.forEach((function (e) {
//                         e.style.display = null, setTimeout((function () {
//                             e.style.opacity = 1
//                         }))
//                     })), r.textContent = "Свернуть", r.removeEventListener("click", e), r.addEventListener("click", l)
//                 }, l = function e() {
//                     o.forEach((function (e) {
//                         setTimeout((function () {
//                             e.style.display = "none"
//                         }), 250), e.style.opacity = 0
//                     })), r.textContent = "Показать еще", r.removeEventListener("click", e), r.addEventListener("click", a)
//                 };
//                 null == r || r.addEventListener("click", a), document.addEventListener("click", (function (e) {
//                     e.target.closest("[data-filter]") && (null == r || r.removeEventListener("click", l), i = Array.from(n.querySelectorAll("[data-collapse-item]")).filter((function (e) {
//                         return "none" !== e.style.display
//                     })), o = i.slice(t), s(), null == r || r.addEventListener("click", a))
//                 }))
//             }
//         };
//
//         function ce(e, t) {
//             (null == t || t > e.length) && (t = e.length);
//             for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
//             return r
//         }
//
//         var de = function () {
//             var e = document.querySelectorAll("[data-filter]"), t = document.querySelectorAll("[data-filter-item]"),
//                 n = document.querySelector(".catalog__courses-title-po"),
//                 r = document.querySelector(".catalog__tiles-po") ? document.querySelector(".catalog__tiles-po").children : "",
//                 i = document.querySelector(".active[data-filter]");
//             e.length && t.length && e.forEach((function (e) {
//                 e.addEventListener("click", (function () {
//                     var o, s = e.getAttribute("data-direction");
//                     e.classList.add("active"), i.classList.remove("active"), i = e, t.forEach((function (e) {
//                         switch (s) {
//                             case"all":
//                                 e.style.display = "flex";
//                                 break;
//                             case e.getAttribute("data-direction"):
//                                 e.style.display = "flex", e.style.opacity = "1";
//                                 break;
//                             default:
//                                 e.style.display = "none"
//                         }
//                     })), 0 == (o = r, function (e) {
//                         if (Array.isArray(e)) return ce(e)
//                     }(o) || function (e) {
//                         if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
//                     }(o) || function (e, t) {
//                         if (e) {
//                             if ("string" == typeof e) return ce(e, t);
//                             var n = Object.prototype.toString.call(e).slice(8, -1);
//                             return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ce(e, t) : void 0
//                         }
//                     }(o) || function () {
//                         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//                     }()).filter((function (e) {
//                         return "none" !== e.style.display
//                     })).length ? n.style.display = "none" : n.style.display = "block"
//                 }))
//             }))
//         };
//
//         function pe(e) {
//             return "string" == typeof e || e instanceof String
//         }
//
//         function he(e) {
//             var t;
//             return "object" == typeof e && null != e && "Object" === (null == e || null == (t = e.constructor) ? void 0 : t.name)
//         }
//
//         function fe(e, t) {
//             return Array.isArray(t) ? fe(e, ((e, n) => t.includes(n))) : Object.entries(e).reduce(((e, n) => {
//                 let [r, i] = n;
//                 return t(i, r) && (e[r] = i), e
//             }), {})
//         }
//
//         const me = "NONE", ge = "LEFT", ve = "FORCE_LEFT", ye = "RIGHT", be = "FORCE_RIGHT";
//
//         function we(e) {
//             return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
//         }
//
//         function Se(e, t) {
//             if (t === e) return !0;
//             const n = Array.isArray(t), r = Array.isArray(e);
//             let i;
//             if (n && r) {
//                 if (t.length != e.length) return !1;
//                 for (i = 0; i < t.length; i++) if (!Se(t[i], e[i])) return !1;
//                 return !0
//             }
//             if (n != r) return !1;
//             if (t && e && "object" == typeof t && "object" == typeof e) {
//                 const n = t instanceof Date, r = e instanceof Date;
//                 if (n && r) return t.getTime() == e.getTime();
//                 if (n != r) return !1;
//                 const o = t instanceof RegExp, s = e instanceof RegExp;
//                 if (o && s) return t.toString() == e.toString();
//                 if (o != s) return !1;
//                 const a = Object.keys(t);
//                 for (i = 0; i < a.length; i++) if (!Object.prototype.hasOwnProperty.call(e, a[i])) return !1;
//                 for (i = 0; i < a.length; i++) if (!Se(e[a[i]], t[a[i]])) return !1;
//                 return !0
//             }
//             return !(!t || !e || "function" != typeof t || "function" != typeof e) && t.toString() === e.toString()
//         }
//
//         class xe {
//             constructor(e) {
//                 for (Object.assign(this, e); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start
//             }
//
//             get startChangePos() {
//                 return Math.min(this.cursorPos, this.oldSelection.start)
//             }
//
//             get insertedCount() {
//                 return this.cursorPos - this.startChangePos
//             }
//
//             get inserted() {
//                 return this.value.substr(this.startChangePos, this.insertedCount)
//             }
//
//             get removedCount() {
//                 return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
//             }
//
//             get removed() {
//                 return this.oldValue.substr(this.startChangePos, this.removedCount)
//             }
//
//             get head() {
//                 return this.value.substring(0, this.startChangePos)
//             }
//
//             get tail() {
//                 return this.value.substring(this.startChangePos + this.insertedCount)
//             }
//
//             get removeDirection() {
//                 return !this.removedCount || this.insertedCount ? me : this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos || this.oldSelection.end !== this.oldSelection.start ? ge : ye
//             }
//         }
//
//         function Ee(e, t) {
//             return new Ee.InputMask(e, t)
//         }
//
//         function _e(e) {
//             if (null == e) throw new Error("mask property should be defined");
//             return e instanceof RegExp ? Ee.MaskedRegExp : pe(e) ? Ee.MaskedPattern : e === Date ? Ee.MaskedDate : e === Number ? Ee.MaskedNumber : Array.isArray(e) || e === Array ? Ee.MaskedDynamic : Ee.Masked && e.prototype instanceof Ee.Masked ? e : Ee.Masked && e instanceof Ee.Masked ? e.constructor : e instanceof Function ? Ee.MaskedFunction : (console.warn("Mask not found for mask", e), Ee.Masked)
//         }
//
//         function ke(e) {
//             if (!e) throw new Error("Options in not defined");
//             if (Ee.Masked) {
//                 if (e.prototype instanceof Ee.Masked) return {mask: e};
//                 const {mask: t, ...n} = e instanceof Ee.Masked ? {mask: e} : he(e) && e.mask instanceof Ee.Masked ? e : {};
//                 if (t) {
//                     const e = t.mask;
//                     return {...fe(t, ((e, t) => !t.startsWith("_"))), mask: t.constructor, _mask: e, ...n}
//                 }
//             }
//             return he(e) ? {...e} : {mask: e}
//         }
//
//         function Ce(e) {
//             if (Ee.Masked && e instanceof Ee.Masked) return e;
//             const t = ke(e), n = _e(t.mask);
//             if (!n) throw new Error("Masked class is not found for provided mask, appropriate module needs to be imported manually before creating mask.");
//             return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t)
//         }
//
//         Ee.createMask = Ce;
//
//         class Ae {
//             get selectionStart() {
//                 let e;
//                 try {
//                     e = this._unsafeSelectionStart
//                 } catch {
//                 }
//                 return null != e ? e : this.value.length
//             }
//
//             get selectionEnd() {
//                 let e;
//                 try {
//                     e = this._unsafeSelectionEnd
//                 } catch {
//                 }
//                 return null != e ? e : this.value.length
//             }
//
//             select(e, t) {
//                 if (null != e && null != t && (e !== this.selectionStart || t !== this.selectionEnd)) try {
//                     this._unsafeSelect(e, t)
//                 } catch {
//                 }
//             }
//
//             get isActive() {
//                 return !1
//             }
//         }
//
//         Ee.MaskElement = Ae;
//
//         class Te extends Ae {
//             constructor(e) {
//                 super(), this.input = e, this._handlers = {}
//             }
//
//             get rootElement() {
//                 var e, t, n;
//                 return null != (e = null == (t = (n = this.input).getRootNode) ? void 0 : t.call(n)) ? e : document
//             }
//
//             get isActive() {
//                 return this.input === this.rootElement.activeElement
//             }
//
//             bindEvents(e) {
//                 Object.keys(e).forEach((t => this._toggleEventHandler(Te.EVENTS_MAP[t], e[t])))
//             }
//
//             unbindEvents() {
//                 Object.keys(this._handlers).forEach((e => this._toggleEventHandler(e)))
//             }
//
//             _toggleEventHandler(e, t) {
//                 this._handlers[e] && (this.input.removeEventListener(e, this._handlers[e]), delete this._handlers[e]), t && (this.input.addEventListener(e, t), this._handlers[e] = t)
//             }
//         }
//
//         Te.EVENTS_MAP = {
//             selectionChange: "keydown",
//             input: "input",
//             drop: "drop",
//             click: "click",
//             focus: "focus",
//             commit: "blur"
//         }, Ee.HTMLMaskElement = Te;
//
//         class Le extends Te {
//             constructor(e) {
//                 super(e), this.input = e, this._handlers = {}
//             }
//
//             get _unsafeSelectionStart() {
//                 return null != this.input.selectionStart ? this.input.selectionStart : this.value.length
//             }
//
//             get _unsafeSelectionEnd() {
//                 return this.input.selectionEnd
//             }
//
//             _unsafeSelect(e, t) {
//                 this.input.setSelectionRange(e, t)
//             }
//
//             get value() {
//                 return this.input.value
//             }
//
//             set value(e) {
//                 this.input.value = e
//             }
//         }
//
//         Ee.HTMLMaskElement = Te;
//
//         class Pe extends Te {
//             get _unsafeSelectionStart() {
//                 const e = this.rootElement, t = e.getSelection && e.getSelection(), n = t && t.anchorOffset,
//                     r = t && t.focusOffset;
//                 return null == r || null == n || n < r ? n : r
//             }
//
//             get _unsafeSelectionEnd() {
//                 const e = this.rootElement, t = e.getSelection && e.getSelection(), n = t && t.anchorOffset,
//                     r = t && t.focusOffset;
//                 return null == r || null == n || n > r ? n : r
//             }
//
//             _unsafeSelect(e, t) {
//                 if (!this.rootElement.createRange) return;
//                 const n = this.rootElement.createRange();
//                 n.setStart(this.input.firstChild || this.input, e), n.setEnd(this.input.lastChild || this.input, t);
//                 const r = this.rootElement, i = r.getSelection && r.getSelection();
//                 i && (i.removeAllRanges(), i.addRange(n))
//             }
//
//             get value() {
//                 return this.input.textContent || ""
//             }
//
//             set value(e) {
//                 this.input.textContent = e
//             }
//         }
//
//         Ee.HTMLContenteditableMaskElement = Pe, Ee.InputMask = class {
//             constructor(e, t) {
//                 this.el = e instanceof Ae ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new Pe(e) : new Le(e), this.masked = Ce(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
//             }
//
//             maskEquals(e) {
//                 var t;
//                 return null == e || (null == (t = this.masked) ? void 0 : t.maskEquals(e))
//             }
//
//             get mask() {
//                 return this.masked.mask
//             }
//
//             set mask(e) {
//                 if (this.maskEquals(e)) return;
//                 if (!(e instanceof Ee.Masked) && this.masked.constructor === _e(e)) return void this.masked.updateOptions({mask: e});
//                 const t = e instanceof Ee.Masked ? e : Ce({mask: e});
//                 t.unmaskedValue = this.masked.unmaskedValue, this.masked = t
//             }
//
//             get value() {
//                 return this._value
//             }
//
//             set value(e) {
//                 this.value !== e && (this.masked.value = e, this.updateControl(), this.alignCursor())
//             }
//
//             get unmaskedValue() {
//                 return this._unmaskedValue
//             }
//
//             set unmaskedValue(e) {
//                 this.unmaskedValue !== e && (this.masked.unmaskedValue = e, this.updateControl(), this.alignCursor())
//             }
//
//             get typedValue() {
//                 return this.masked.typedValue
//             }
//
//             set typedValue(e) {
//                 this.masked.typedValueEquals(e) || (this.masked.typedValue = e, this.updateControl(), this.alignCursor())
//             }
//
//             get displayValue() {
//                 return this.masked.displayValue
//             }
//
//             _bindEvents() {
//                 this.el.bindEvents({
//                     selectionChange: this._saveSelection,
//                     input: this._onInput,
//                     drop: this._onDrop,
//                     click: this._onClick,
//                     focus: this._onFocus,
//                     commit: this._onChange
//                 })
//             }
//
//             _unbindEvents() {
//                 this.el && this.el.unbindEvents()
//             }
//
//             _fireEvent(e, t) {
//                 const n = this._listeners[e];
//                 n && n.forEach((e => e(t)))
//             }
//
//             get selectionStart() {
//                 return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
//             }
//
//             get cursorPos() {
//                 return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
//             }
//
//             set cursorPos(e) {
//                 this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection())
//             }
//
//             _saveSelection() {
//                 this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
//                     start: this.selectionStart,
//                     end: this.cursorPos
//                 }
//             }
//
//             updateValue() {
//                 this.masked.value = this.el.value, this._value = this.masked.value
//             }
//
//             updateControl() {
//                 const e = this.masked.unmaskedValue, t = this.masked.value, n = this.displayValue,
//                     r = this.unmaskedValue !== e || this.value !== t;
//                 this._unmaskedValue = e, this._value = t, this.el.value !== n && (this.el.value = n), r && this._fireChangeEvents()
//             }
//
//             updateOptions(e) {
//                 const {mask: t, ...n} = e, r = !this.maskEquals(t), i = !Se(this.masked, n);
//                 r && (this.mask = t), i && this.masked.updateOptions(n), (r || i) && this.updateControl()
//             }
//
//             updateCursor(e) {
//                 null != e && (this.cursorPos = e, this._delayUpdateCursor(e))
//             }
//
//             _delayUpdateCursor(e) {
//                 this._abortUpdateCursor(), this._changingCursorPos = e, this._cursorChanging = setTimeout((() => {
//                     this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor())
//                 }), 10)
//             }
//
//             _fireChangeEvents() {
//                 this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
//             }
//
//             _abortUpdateCursor() {
//                 this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
//             }
//
//             alignCursor() {
//                 this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, ge))
//             }
//
//             alignCursorFriendly() {
//                 this.selectionStart === this.cursorPos && this.alignCursor()
//             }
//
//             on(e, t) {
//                 return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this
//             }
//
//             off(e, t) {
//                 if (!this._listeners[e]) return this;
//                 if (!t) return delete this._listeners[e], this;
//                 const n = this._listeners[e].indexOf(t);
//                 return n >= 0 && this._listeners[e].splice(n, 1), this
//             }
//
//             _onInput(e) {
//                 if (this._inputEvent = e, this._abortUpdateCursor(), !this._selection) return this.updateValue();
//                 const t = new xe({
//                         value: this.el.value,
//                         cursorPos: this.cursorPos,
//                         oldValue: this.displayValue,
//                         oldSelection: this._selection
//                     }), n = this.masked.rawInputValue,
//                     r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
//                         input: !0,
//                         raw: !0
//                     }).offset, i = n === this.masked.rawInputValue ? t.removeDirection : me;
//                 let o = this.masked.nearestInputPos(t.startChangePos + r, i);
//                 i !== me && (o = this.masked.nearestInputPos(o, me)), this.updateControl(), this.updateCursor(o), delete this._inputEvent
//             }
//
//             _onChange() {
//                 this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
//             }
//
//             _onDrop(e) {
//                 e.preventDefault(), e.stopPropagation()
//             }
//
//             _onFocus(e) {
//                 this.alignCursorFriendly()
//             }
//
//             _onClick(e) {
//                 this.alignCursorFriendly()
//             }
//
//             destroy() {
//                 this._unbindEvents(), this._listeners.length = 0, delete this.el
//             }
//         };
//
//         class Oe {
//             static normalize(e) {
//                 return Array.isArray(e) ? e : [e, new Oe]
//             }
//
//             constructor(e) {
//                 Object.assign(this, {inserted: "", rawInserted: "", skip: !1, tailShift: 0}, e)
//             }
//
//             aggregate(e) {
//                 return this.rawInserted += e.rawInserted, this.skip = this.skip || e.skip, this.inserted += e.inserted, this.tailShift += e.tailShift, this
//             }
//
//             get offset() {
//                 return this.tailShift + this.inserted.length
//             }
//         }
//
//         Ee.ChangeDetails = Oe;
//
//         class Ie {
//             constructor(e, t, n) {
//                 void 0 === e && (e = ""), void 0 === t && (t = 0), this.value = e, this.from = t, this.stop = n
//             }
//
//             toString() {
//                 return this.value
//             }
//
//             extend(e) {
//                 this.value += String(e)
//             }
//
//             appendTo(e) {
//                 return e.append(this.toString(), {tail: !0}).aggregate(e._appendPlaceholder())
//             }
//
//             get state() {
//                 return {value: this.value, from: this.from, stop: this.stop}
//             }
//
//             set state(e) {
//                 Object.assign(this, e)
//             }
//
//             unshift(e) {
//                 if (!this.value.length || null != e && this.from >= e) return "";
//                 const t = this.value[0];
//                 return this.value = this.value.slice(1), t
//             }
//
//             shift() {
//                 if (!this.value.length) return "";
//                 const e = this.value[this.value.length - 1];
//                 return this.value = this.value.slice(0, -1), e
//             }
//         }
//
//         class Me {
//             constructor(e) {
//                 this._value = "", this._update({...Me.DEFAULTS, ...e}), this._initialized = !0
//             }
//
//             updateOptions(e) {
//                 Object.keys(e).length && this.withValueRefresh(this._update.bind(this, e))
//             }
//
//             _update(e) {
//                 Object.assign(this, e)
//             }
//
//             get state() {
//                 return {_value: this.value, _rawInputValue: this.rawInputValue}
//             }
//
//             set state(e) {
//                 this._value = e._value
//             }
//
//             reset() {
//                 this._value = ""
//             }
//
//             get value() {
//                 return this._value
//             }
//
//             set value(e) {
//                 this.resolve(e, {input: !0})
//             }
//
//             resolve(e, t) {
//                 void 0 === t && (t = {input: !0}), this.reset(), this.append(e, t, ""), this.doCommit()
//             }
//
//             get unmaskedValue() {
//                 return this.value
//             }
//
//             set unmaskedValue(e) {
//                 this.resolve(e, {})
//             }
//
//             get typedValue() {
//                 return this.parse ? this.parse(this.value, this) : this.unmaskedValue
//             }
//
//             set typedValue(e) {
//                 this.format ? this.value = this.format(e, this) : this.unmaskedValue = String(e)
//             }
//
//             get rawInputValue() {
//                 return this.extractInput(0, this.displayValue.length, {raw: !0})
//             }
//
//             set rawInputValue(e) {
//                 this.resolve(e, {raw: !0})
//             }
//
//             get displayValue() {
//                 return this.value
//             }
//
//             get isComplete() {
//                 return !0
//             }
//
//             get isFilled() {
//                 return this.isComplete
//             }
//
//             nearestInputPos(e, t) {
//                 return e
//             }
//
//             totalInputPositions(e, t) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), Math.min(this.displayValue.length, t - e)
//             }
//
//             extractInput(e, t, n) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), this.displayValue.slice(e, t)
//             }
//
//             extractTail(e, t) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), new Ie(this.extractInput(e, t), e)
//             }
//
//             appendTail(e) {
//                 return pe(e) && (e = new Ie(String(e))), e.appendTo(this)
//             }
//
//             _appendCharRaw(e, t) {
//                 return e ? (this._value += e, new Oe({inserted: e, rawInserted: e})) : new Oe
//             }
//
//             _appendChar(e, t, n) {
//                 void 0 === t && (t = {});
//                 const r = this.state;
//                 let i;
//                 if ([e, i] = this.doPrepareChar(e, t), i = i.aggregate(this._appendCharRaw(e, t)), i.inserted) {
//                     let e, o = !1 !== this.doValidate(t);
//                     if (o && null != n) {
//                         const t = this.state;
//                         !0 === this.overwrite && (e = n.state, n.unshift(this.displayValue.length - i.tailShift));
//                         let r = this.appendTail(n);
//                         o = r.rawInserted === n.toString(), o && r.inserted || "shift" !== this.overwrite || (this.state = t, e = n.state, n.shift(), r = this.appendTail(n), o = r.rawInserted === n.toString()), o && r.inserted && (this.state = t)
//                     }
//                     o || (i = new Oe, this.state = r, n && e && (n.state = e))
//                 }
//                 return i
//             }
//
//             _appendPlaceholder() {
//                 return new Oe
//             }
//
//             _appendEager() {
//                 return new Oe
//             }
//
//             append(e, t, n) {
//                 if (!pe(e)) throw new Error("value should be string");
//                 const r = pe(n) ? new Ie(String(n)) : n;
//                 let i;
//                 null != t && t.tail && (t._beforeTailState = this.state), [e, i] = this.doPrepare(e, t);
//                 for (let n = 0; n < e.length; ++n) {
//                     const o = this._appendChar(e[n], t, r);
//                     if (!o.rawInserted && !this.doSkipInvalid(e[n], t, r)) break;
//                     i.aggregate(o)
//                 }
//                 return (!0 === this.eager || "append" === this.eager) && null != t && t.input && e && i.aggregate(this._appendEager()), null != r && (i.tailShift += this.appendTail(r).tailShift), i
//             }
//
//             remove(e, t) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new Oe
//             }
//
//             withValueRefresh(e) {
//                 if (this._refreshing || !this._initialized) return e();
//                 this._refreshing = !0;
//                 const t = this.rawInputValue, n = this.value, r = e();
//                 return this.rawInputValue = t, this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.displayValue.length), {}, ""), delete this._refreshing, r
//             }
//
//             runIsolated(e) {
//                 if (this._isolated || !this._initialized) return e(this);
//                 this._isolated = !0;
//                 const t = this.state, n = e(this);
//                 return this.state = t, delete this._isolated, n
//             }
//
//             doSkipInvalid(e, t, n) {
//                 return Boolean(this.skipInvalid)
//             }
//
//             doPrepare(e, t) {
//                 return void 0 === t && (t = {}), Oe.normalize(this.prepare ? this.prepare(e, this, t) : e)
//             }
//
//             doPrepareChar(e, t) {
//                 return void 0 === t && (t = {}), Oe.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e)
//             }
//
//             doValidate(e) {
//                 return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e))
//             }
//
//             doCommit() {
//                 this.commit && this.commit(this.value, this)
//             }
//
//             splice(e, t, n, r, i) {
//                 void 0 === r && (r = me), void 0 === i && (i = {input: !0});
//                 const o = e + t, s = this.extractTail(o), a = !0 === this.eager || "remove" === this.eager;
//                 let l;
//                 a && (r = function (e) {
//                     switch (e) {
//                         case ge:
//                             return ve;
//                         case ye:
//                             return be;
//                         default:
//                             return e
//                     }
//                 }(r), l = this.extractInput(0, o, {raw: !0}));
//                 let u = e;
//                 const c = new Oe;
//                 if (r !== me && (u = this.nearestInputPos(e, t > 1 && 0 !== e && !a ? me : r), c.tailShift = u - e), c.aggregate(this.remove(u)), a && r !== me && l === this.rawInputValue) if (r === ve) {
//                     let e;
//                     for (; l === this.rawInputValue && (e = this.displayValue.length);) c.aggregate(new Oe({tailShift: -1})).aggregate(this.remove(e - 1))
//                 } else r === be && s.unshift();
//                 return c.aggregate(this.append(n, i, s))
//             }
//
//             maskEquals(e) {
//                 return this.mask === e
//             }
//
//             typedValueEquals(e) {
//                 const t = this.typedValue;
//                 return e === t || Me.EMPTY_VALUES.includes(e) && Me.EMPTY_VALUES.includes(t) || !!this.format && this.format(e, this) === this.format(this.typedValue, this)
//             }
//         }
//
//         Me.DEFAULTS = {skipInvalid: !0}, Me.EMPTY_VALUES = [void 0, null, ""], Ee.Masked = Me;
//
//         class Fe {
//             constructor(e, t) {
//                 void 0 === e && (e = []), void 0 === t && (t = 0), this.chunks = e, this.from = t
//             }
//
//             toString() {
//                 return this.chunks.map(String).join("")
//             }
//
//             extend(e) {
//                 if (!String(e)) return;
//                 e = pe(e) ? new Ie(String(e)) : e;
//                 const t = this.chunks[this.chunks.length - 1],
//                     n = t && (t.stop === e.stop || null == e.stop) && e.from === t.from + t.toString().length;
//                 if (e instanceof Ie) n ? t.extend(e.toString()) : this.chunks.push(e); else if (e instanceof Fe) {
//                     if (null == e.stop) {
//                         let t;
//                         for (; e.chunks.length && null == e.chunks[0].stop;) t = e.chunks.shift(), t.from += e.from, this.extend(t)
//                     }
//                     e.toString() && (e.stop = e.blockIndex, this.chunks.push(e))
//                 }
//             }
//
//             appendTo(e) {
//                 if (!(e instanceof Ee.MaskedPattern)) return new Ie(this.toString()).appendTo(e);
//                 const t = new Oe;
//                 for (let n = 0; n < this.chunks.length && !t.skip; ++n) {
//                     const r = this.chunks[n], i = e._mapPosToBlock(e.displayValue.length), o = r.stop;
//                     let s;
//                     if (null != o && (!i || i.index <= o)) {
//                         if (r instanceof Fe || e._stops.indexOf(o) >= 0) {
//                             const n = e._appendPlaceholder(o);
//                             t.aggregate(n)
//                         }
//                         s = r instanceof Fe && e._blocks[o]
//                     }
//                     if (s) {
//                         const n = s.appendTail(r);
//                         n.skip = !1, t.aggregate(n), e._value += n.inserted;
//                         const i = r.toString().slice(n.rawInserted.length);
//                         i && t.aggregate(e.append(i, {tail: !0}))
//                     } else t.aggregate(e.append(r.toString(), {tail: !0}))
//                 }
//                 return t
//             }
//
//             get state() {
//                 return {
//                     chunks: this.chunks.map((e => e.state)),
//                     from: this.from,
//                     stop: this.stop,
//                     blockIndex: this.blockIndex
//                 }
//             }
//
//             set state(e) {
//                 const {chunks: t, ...n} = e;
//                 Object.assign(this, n), this.chunks = t.map((e => {
//                     const t = "chunks" in e ? new Fe : new Ie;
//                     return t.state = e, t
//                 }))
//             }
//
//             unshift(e) {
//                 if (!this.chunks.length || null != e && this.from >= e) return "";
//                 const t = null != e ? e - this.from : e;
//                 let n = 0;
//                 for (; n < this.chunks.length;) {
//                     const e = this.chunks[n], r = e.unshift(t);
//                     if (e.toString()) {
//                         if (!r) break;
//                         ++n
//                     } else this.chunks.splice(n, 1);
//                     if (r) return r
//                 }
//                 return ""
//             }
//
//             shift() {
//                 if (!this.chunks.length) return "";
//                 let e = this.chunks.length - 1;
//                 for (; 0 <= e;) {
//                     const t = this.chunks[e], n = t.shift();
//                     if (t.toString()) {
//                         if (!n) break;
//                         --e
//                     } else this.chunks.splice(e, 1);
//                     if (n) return n
//                 }
//                 return ""
//             }
//         }
//
//         class Be {
//             constructor(e, t) {
//                 this.masked = e, this._log = [];
//                 const {offset: n, index: r} = e._mapPosToBlock(t) || (t < 0 ? {
//                     index: 0,
//                     offset: 0
//                 } : {index: this.masked._blocks.length, offset: 0});
//                 this.offset = n, this.index = r, this.ok = !1
//             }
//
//             get block() {
//                 return this.masked._blocks[this.index]
//             }
//
//             get pos() {
//                 return this.masked._blockStartPos(this.index) + this.offset
//             }
//
//             get state() {
//                 return {index: this.index, offset: this.offset, ok: this.ok}
//             }
//
//             set state(e) {
//                 Object.assign(this, e)
//             }
//
//             pushState() {
//                 this._log.push(this.state)
//             }
//
//             popState() {
//                 const e = this._log.pop();
//                 return e && (this.state = e), e
//             }
//
//             bindBlock() {
//                 this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length))
//             }
//
//             _pushLeft(e) {
//                 for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = (null == (t = this.block) ? void 0 : t.displayValue.length) || 0) {
//                     var t;
//                     if (e()) return this.ok = !0
//                 }
//                 return this.ok = !1
//             }
//
//             _pushRight(e) {
//                 for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (e()) return this.ok = !0;
//                 return this.ok = !1
//             }
//
//             pushLeftBeforeFilled() {
//                 return this._pushLeft((() => {
//                     if (!this.block.isFixed && this.block.value) return this.offset = this.block.nearestInputPos(this.offset, ve), 0 !== this.offset || void 0
//                 }))
//             }
//
//             pushLeftBeforeInput() {
//                 return this._pushLeft((() => {
//                     if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, ge), !0
//                 }))
//             }
//
//             pushLeftBeforeRequired() {
//                 return this._pushLeft((() => {
//                     if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, ge), !0
//                 }))
//             }
//
//             pushRightBeforeFilled() {
//                 return this._pushRight((() => {
//                     if (!this.block.isFixed && this.block.value) return this.offset = this.block.nearestInputPos(this.offset, be), this.offset !== this.block.value.length || void 0
//                 }))
//             }
//
//             pushRightBeforeInput() {
//                 return this._pushRight((() => {
//                     if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, me), !0
//                 }))
//             }
//
//             pushRightBeforeRequired() {
//                 return this._pushRight((() => {
//                     if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, me), !0
//                 }))
//             }
//         }
//
//         class De {
//             constructor(e) {
//                 Object.assign(this, e), this._value = "", this.isFixed = !0
//             }
//
//             get value() {
//                 return this._value
//             }
//
//             get unmaskedValue() {
//                 return this.isUnmasking ? this.value : ""
//             }
//
//             get rawInputValue() {
//                 return this._isRawInput ? this.value : ""
//             }
//
//             get displayValue() {
//                 return this.value
//             }
//
//             reset() {
//                 this._isRawInput = !1, this._value = ""
//             }
//
//             remove(e, t) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new Oe
//             }
//
//             nearestInputPos(e, t) {
//                 void 0 === t && (t = me);
//                 const n = this._value.length;
//                 switch (t) {
//                     case ge:
//                     case ve:
//                         return 0;
//                     default:
//                         return n
//                 }
//             }
//
//             totalInputPositions(e, t) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this._value.length), this._isRawInput ? t - e : 0
//             }
//
//             extractInput(e, t, n) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this._value.length), void 0 === n && (n = {}), n.raw && this._isRawInput && this._value.slice(e, t) || ""
//             }
//
//             get isComplete() {
//                 return !0
//             }
//
//             get isFilled() {
//                 return Boolean(this._value)
//             }
//
//             _appendChar(e, t) {
//                 void 0 === t && (t = {});
//                 const n = new Oe;
//                 if (this.isFilled) return n;
//                 const r = !0 === this.eager || "append" === this.eager,
//                     i = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !r) && !t.tail;
//                 return i && (n.rawInserted = this.char), this._value = n.inserted = this.char, this._isRawInput = i && (t.raw || t.input), n
//             }
//
//             _appendEager() {
//                 return this._appendChar(this.char, {tail: !0})
//             }
//
//             _appendPlaceholder() {
//                 const e = new Oe;
//                 return this.isFilled || (this._value = e.inserted = this.char), e
//             }
//
//             extractTail() {
//                 return new Ie("")
//             }
//
//             appendTail(e) {
//                 return pe(e) && (e = new Ie(String(e))), e.appendTo(this)
//             }
//
//             append(e, t, n) {
//                 const r = this._appendChar(e[0], t);
//                 return null != n && (r.tailShift += this.appendTail(n).tailShift), r
//             }
//
//             doCommit() {
//             }
//
//             get state() {
//                 return {_value: this._value, _rawInputValue: this.rawInputValue}
//             }
//
//             set state(e) {
//                 this._value = e._value, this._isRawInput = Boolean(e._rawInputValue)
//             }
//         }
//
//         class qe {
//             constructor(e) {
//                 const {parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: o, eager: s, ...a} = e;
//                 this.masked = Ce(a), Object.assign(this, {
//                     parent: t,
//                     isOptional: n,
//                     placeholderChar: r,
//                     displayChar: i,
//                     lazy: o,
//                     eager: s
//                 })
//             }
//
//             reset() {
//                 this.isFilled = !1, this.masked.reset()
//             }
//
//             remove(e, t) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this.value.length), 0 === e && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new Oe
//             }
//
//             get value() {
//                 return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
//             }
//
//             get unmaskedValue() {
//                 return this.masked.unmaskedValue
//             }
//
//             get rawInputValue() {
//                 return this.masked.rawInputValue
//             }
//
//             get displayValue() {
//                 return this.masked.value && this.displayChar || this.value
//             }
//
//             get isComplete() {
//                 return Boolean(this.masked.value) || this.isOptional
//             }
//
//             _appendChar(e, t) {
//                 if (void 0 === t && (t = {}), this.isFilled) return new Oe;
//                 const n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
//                 return r.inserted && !1 === this.doValidate(t) && (r.inserted = r.rawInserted = "", this.masked.state = n), r.inserted || this.isOptional || this.lazy || t.input || (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = Boolean(r.inserted), r
//             }
//
//             append(e, t, n) {
//                 return this.masked.append(e, this.currentMaskFlags(t), n)
//             }
//
//             _appendPlaceholder() {
//                 const e = new Oe;
//                 return this.isFilled || this.isOptional || (this.isFilled = !0, e.inserted = this.placeholderChar), e
//             }
//
//             _appendEager() {
//                 return new Oe
//             }
//
//             extractTail(e, t) {
//                 return this.masked.extractTail(e, t)
//             }
//
//             appendTail(e) {
//                 return this.masked.appendTail(e)
//             }
//
//             extractInput(e, t, n) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this.value.length), this.masked.extractInput(e, t, n)
//             }
//
//             nearestInputPos(e, t) {
//                 void 0 === t && (t = me);
//                 const n = this.value.length, r = Math.min(Math.max(e, 0), n);
//                 switch (t) {
//                     case ge:
//                     case ve:
//                         return this.isComplete ? r : 0;
//                     case ye:
//                     case be:
//                         return this.isComplete ? r : n;
//                     default:
//                         return r
//                 }
//             }
//
//             totalInputPositions(e, t) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this.value.length), this.value.slice(e, t).length
//             }
//
//             doValidate(e) {
//                 return this.masked.doValidate(this.currentMaskFlags(e)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(e)))
//             }
//
//             doCommit() {
//                 this.masked.doCommit()
//             }
//
//             get state() {
//                 return {
//                     _value: this.value,
//                     _rawInputValue: this.rawInputValue,
//                     masked: this.masked.state,
//                     isFilled: this.isFilled
//                 }
//             }
//
//             set state(e) {
//                 this.masked.state = e.masked, this.isFilled = e.isFilled
//             }
//
//             currentMaskFlags(e) {
//                 var t;
//                 return {
//                     ...e,
//                     _beforeTailState: (null == e || null == (t = e._beforeTailState) ? void 0 : t.masked) || (null == e ? void 0 : e._beforeTailState)
//                 }
//             }
//         }
//
//         qe.DEFAULT_DEFINITIONS = {
//             0: /\d/,
//             a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
//             "*": /./
//         }, Ee.MaskedRegExp = class extends Me {
//             updateOptions(e) {
//                 super.updateOptions(e)
//             }
//
//             _update(e) {
//                 const t = e.mask;
//                 t && (e.validate = e => e.search(t) >= 0), super._update(e)
//             }
//         };
//
//         class Re extends Me {
//             constructor(e) {
//                 super({
//                     ...Re.DEFAULTS, ...e,
//                     definitions: Object.assign({}, qe.DEFAULT_DEFINITIONS, null == e ? void 0 : e.definitions)
//                 })
//             }
//
//             updateOptions(e) {
//                 super.updateOptions(e)
//             }
//
//             _update(e) {
//                 e.definitions = Object.assign({}, this.definitions, e.definitions), super._update(e), this._rebuildMask()
//             }
//
//             _rebuildMask() {
//                 const e = this.definitions;
//                 this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
//                 const t = this.mask;
//                 if (!t || !e) return;
//                 let n = !1, r = !1;
//                 for (let i = 0; i < t.length; ++i) {
//                     if (this.blocks) {
//                         const e = t.slice(i), n = Object.keys(this.blocks).filter((t => 0 === e.indexOf(t)));
//                         n.sort(((e, t) => t.length - e.length));
//                         const r = n[0];
//                         if (r) {
//                             const {expose: e, ...t} = ke(this.blocks[r]), n = Ce({
//                                 lazy: this.lazy,
//                                 eager: this.eager,
//                                 placeholderChar: this.placeholderChar,
//                                 displayChar: this.displayChar,
//                                 overwrite: this.overwrite, ...t,
//                                 parent: this
//                             });
//                             n && (this._blocks.push(n), e && (this.exposeBlock = n), this._maskedBlocks[r] || (this._maskedBlocks[r] = []), this._maskedBlocks[r].push(this._blocks.length - 1)), i += r.length - 1;
//                             continue
//                         }
//                     }
//                     let o = t[i], s = o in e;
//                     if (o === Re.STOP_CHAR) {
//                         this._stops.push(this._blocks.length);
//                         continue
//                     }
//                     if ("{" === o || "}" === o) {
//                         n = !n;
//                         continue
//                     }
//                     if ("[" === o || "]" === o) {
//                         r = !r;
//                         continue
//                     }
//                     if (o === Re.ESCAPE_CHAR) {
//                         if (++i, o = t[i], !o) break;
//                         s = !1
//                     }
//                     const a = s ? new qe({
//                         isOptional: r,
//                         lazy: this.lazy,
//                         eager: this.eager,
//                         placeholderChar: this.placeholderChar,
//                         displayChar: this.displayChar, ...ke(e[o]),
//                         parent: this
//                     }) : new De({char: o, eager: this.eager, isUnmasking: n});
//                     this._blocks.push(a)
//                 }
//             }
//
//             get state() {
//                 return {...super.state, _blocks: this._blocks.map((e => e.state))}
//             }
//
//             set state(e) {
//                 const {_blocks: t, ...n} = e;
//                 this._blocks.forEach(((e, n) => e.state = t[n])), super.state = n
//             }
//
//             reset() {
//                 super.reset(), this._blocks.forEach((e => e.reset()))
//             }
//
//             get isComplete() {
//                 return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((e => e.isComplete))
//             }
//
//             get isFilled() {
//                 return this._blocks.every((e => e.isFilled))
//             }
//
//             get isFixed() {
//                 return this._blocks.every((e => e.isFixed))
//             }
//
//             get isOptional() {
//                 return this._blocks.every((e => e.isOptional))
//             }
//
//             doCommit() {
//                 this._blocks.forEach((e => e.doCommit())), super.doCommit()
//             }
//
//             get unmaskedValue() {
//                 return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce(((e, t) => e + t.unmaskedValue), "")
//             }
//
//             set unmaskedValue(e) {
//                 if (this.exposeBlock) {
//                     const t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
//                     this.exposeBlock.unmaskedValue = e, this.appendTail(t), this.doCommit()
//                 } else super.unmaskedValue = e
//             }
//
//             get value() {
//                 return this.exposeBlock ? this.exposeBlock.value : this._blocks.reduce(((e, t) => e + t.value), "")
//             }
//
//             set value(e) {
//                 if (this.exposeBlock) {
//                     const t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
//                     this.exposeBlock.value = e, this.appendTail(t), this.doCommit()
//                 } else super.value = e
//             }
//
//             get typedValue() {
//                 return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue
//             }
//
//             set typedValue(e) {
//                 if (this.exposeBlock) {
//                     const t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
//                     this.exposeBlock.typedValue = e, this.appendTail(t), this.doCommit()
//                 } else super.typedValue = e
//             }
//
//             get displayValue() {
//                 return this._blocks.reduce(((e, t) => e + t.displayValue), "")
//             }
//
//             appendTail(e) {
//                 return super.appendTail(e).aggregate(this._appendPlaceholder())
//             }
//
//             _appendEager() {
//                 var e;
//                 const t = new Oe;
//                 let n = null == (e = this._mapPosToBlock(this.displayValue.length)) ? void 0 : e.index;
//                 if (null == n) return t;
//                 this._blocks[n].isFilled && ++n;
//                 for (let e = n; e < this._blocks.length; ++e) {
//                     const n = this._blocks[e]._appendEager();
//                     if (!n.inserted) break;
//                     t.aggregate(n)
//                 }
//                 return t
//             }
//
//             _appendCharRaw(e, t) {
//                 void 0 === t && (t = {});
//                 const n = this._mapPosToBlock(this.displayValue.length), r = new Oe;
//                 if (!n) return r;
//                 for (let o = n.index; ; ++o) {
//                     var i;
//                     const n = this._blocks[o];
//                     if (!n) break;
//                     const s = n._appendChar(e, {
//                         ...t,
//                         _beforeTailState: null == (i = t._beforeTailState) || null == (i = i._blocks) ? void 0 : i[o]
//                     }), a = s.skip;
//                     if (r.aggregate(s), a || s.rawInserted) break
//                 }
//                 return r
//             }
//
//             extractTail(e, t) {
//                 void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
//                 const n = new Fe;
//                 return e === t || this._forEachBlocksInRange(e, t, ((e, t, r, i) => {
//                     const o = e.extractTail(r, i);
//                     o.stop = this._findStopBefore(t), o.from = this._blockStartPos(t), o instanceof Fe && (o.blockIndex = t), n.extend(o)
//                 })), n
//             }
//
//             extractInput(e, t, n) {
//                 if (void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), void 0 === n && (n = {}), e === t) return "";
//                 let r = "";
//                 return this._forEachBlocksInRange(e, t, ((e, t, i, o) => {
//                     r += e.extractInput(i, o, n)
//                 })), r
//             }
//
//             _findStopBefore(e) {
//                 let t;
//                 for (let n = 0; n < this._stops.length; ++n) {
//                     const r = this._stops[n];
//                     if (!(r <= e)) break;
//                     t = r
//                 }
//                 return t
//             }
//
//             _appendPlaceholder(e) {
//                 const t = new Oe;
//                 if (this.lazy && null == e) return t;
//                 const n = this._mapPosToBlock(this.displayValue.length);
//                 if (!n) return t;
//                 const r = n.index, i = null != e ? e : this._blocks.length;
//                 return this._blocks.slice(r, i).forEach((n => {
//                     if (!n.lazy || null != e) {
//                         var r;
//                         const e = n._appendPlaceholder(null == (r = n._blocks) ? void 0 : r.length);
//                         this._value += e.inserted, t.aggregate(e)
//                     }
//                 })), t
//             }
//
//             _mapPosToBlock(e) {
//                 let t = "";
//                 for (let n = 0; n < this._blocks.length; ++n) {
//                     const r = this._blocks[n], i = t.length;
//                     if (t += r.displayValue, e <= t.length) return {index: n, offset: e - i}
//                 }
//             }
//
//             _blockStartPos(e) {
//                 return this._blocks.slice(0, e).reduce(((e, t) => e + t.displayValue.length), 0)
//             }
//
//             _forEachBlocksInRange(e, t, n) {
//                 void 0 === t && (t = this.displayValue.length);
//                 const r = this._mapPosToBlock(e);
//                 if (r) {
//                     const e = this._mapPosToBlock(t), i = e && r.index === e.index, o = r.offset,
//                         s = e && i ? e.offset : this._blocks[r.index].displayValue.length;
//                     if (n(this._blocks[r.index], r.index, o, s), e && !i) {
//                         for (let t = r.index + 1; t < e.index; ++t) n(this._blocks[t], t, 0, this._blocks[t].displayValue.length);
//                         n(this._blocks[e.index], e.index, 0, e.offset)
//                     }
//                 }
//             }
//
//             remove(e, t) {
//                 void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
//                 const n = super.remove(e, t);
//                 return this._forEachBlocksInRange(e, t, ((e, t, r, i) => {
//                     n.aggregate(e.remove(r, i))
//                 })), n
//             }
//
//             nearestInputPos(e, t) {
//                 if (void 0 === t && (t = me), !this._blocks.length) return 0;
//                 const n = new Be(this, e);
//                 if (t === me) return n.pushRightBeforeInput() ? n.pos : (n.popState(), n.pushLeftBeforeInput() ? n.pos : this.displayValue.length);
//                 if (t === ge || t === ve) {
//                     if (t === ge) {
//                         if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
//                         n.popState()
//                     }
//                     if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === ge) {
//                         if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e) return n.pos;
//                         if (n.popState(), n.ok && n.pos <= e) return n.pos;
//                         n.popState()
//                     }
//                     return n.ok ? n.pos : t === ve ? 0 : (n.popState(), n.ok ? n.pos : (n.popState(), n.ok ? n.pos : 0))
//                 }
//                 return t === ye || t === be ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === be ? this.displayValue.length : (n.popState(), n.ok ? n.pos : (n.popState(), n.ok ? n.pos : this.nearestInputPos(e, ge)))) : e
//             }
//
//             totalInputPositions(e, t) {
//                 void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
//                 let n = 0;
//                 return this._forEachBlocksInRange(e, t, ((e, t, r, i) => {
//                     n += e.totalInputPositions(r, i)
//                 })), n
//             }
//
//             maskedBlock(e) {
//                 return this.maskedBlocks(e)[0]
//             }
//
//             maskedBlocks(e) {
//                 const t = this._maskedBlocks[e];
//                 return t ? t.map((e => this._blocks[e])) : []
//             }
//         }
//
//         Re.DEFAULTS = {
//             lazy: !0,
//             placeholderChar: "_"
//         }, Re.STOP_CHAR = "`", Re.ESCAPE_CHAR = "\\", Re.InputDefinition = qe, Re.FixedDefinition = De, Ee.MaskedPattern = Re;
//
//         class je extends Re {
//             get _matchFrom() {
//                 return this.maxLength - String(this.from).length
//             }
//
//             constructor(e) {
//                 super(e)
//             }
//
//             updateOptions(e) {
//                 super.updateOptions(e)
//             }
//
//             _update(e) {
//                 const {to: t = this.to || 0, from: n = this.from || 0, maxLength: r = this.maxLength || 0, autofix: i = this.autofix, ...o} = e;
//                 this.to = t, this.from = n, this.maxLength = Math.max(String(t).length, r), this.autofix = i;
//                 const s = String(this.from).padStart(this.maxLength, "0"),
//                     a = String(this.to).padStart(this.maxLength, "0");
//                 let l = 0;
//                 for (; l < a.length && a[l] === s[l];) ++l;
//                 o.mask = a.slice(0, l).replace(/0/g, "\\0") + "0".repeat(this.maxLength - l), super._update(o)
//             }
//
//             get isComplete() {
//                 return super.isComplete && Boolean(this.value)
//             }
//
//             boundaries(e) {
//                 let t = "", n = "";
//                 const [, r, i] = e.match(/^(\D*)(\d*)(\D*)/) || [];
//                 return i && (t = "0".repeat(r.length) + i, n = "9".repeat(r.length) + i), t = t.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9"), [t, n]
//             }
//
//             doPrepareChar(e, t) {
//                 let n;
//                 if (void 0 === t && (t = {}), [e, n] = super.doPrepareChar(e.replace(/\D/g, ""), t), !this.autofix || !e) return [e, n];
//                 const r = String(this.from).padStart(this.maxLength, "0"),
//                     i = String(this.to).padStart(this.maxLength, "0"), o = this.value + e;
//                 if (o.length > this.maxLength) return ["", n];
//                 const [s, a] = this.boundaries(o);
//                 return Number(a) < this.from ? [r[o.length - 1], n] : Number(s) > this.to ? "pad" === this.autofix && o.length < this.maxLength ? ["", n.aggregate(this.append(r[o.length - 1] + e, t))] : [i[o.length - 1], n] : [e, n]
//             }
//
//             doValidate(e) {
//                 const t = this.value;
//                 if (-1 === t.search(/[^0]/) && t.length <= this._matchFrom) return !0;
//                 const [n, r] = this.boundaries(t);
//                 return this.from <= Number(r) && Number(n) <= this.to && super.doValidate(e)
//             }
//         }
//
//         Ee.MaskedRange = je;
//
//         class Ne extends Re {
//             constructor(e) {
//                 const {mask: t, pattern: n, ...r} = {...Ne.DEFAULTS, ...e};
//                 super({...r, mask: pe(t) ? t : n})
//             }
//
//             updateOptions(e) {
//                 super.updateOptions(e)
//             }
//
//             _update(e) {
//                 const {mask: t, pattern: n, blocks: r, ...i} = {...Ne.DEFAULTS, ...e},
//                     o = Object.assign({}, Ne.GET_DEFAULT_BLOCKS());
//                 e.min && (o.Y.from = e.min.getFullYear()), e.max && (o.Y.to = e.max.getFullYear()), e.min && e.max && o.Y.from === o.Y.to && (o.m.from = e.min.getMonth() + 1, o.m.to = e.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = e.min.getDate(), o.d.to = e.max.getDate())), Object.assign(o, this.blocks, r), Object.keys(o).forEach((t => {
//                     const n = o[t];
//                     !("autofix" in n) && "autofix" in e && (n.autofix = e.autofix)
//                 })), super._update({...i, mask: pe(t) ? t : n, blocks: o})
//             }
//
//             doValidate(e) {
//                 const t = this.date;
//                 return super.doValidate(e) && (!this.isComplete || this.isDateExist(this.value) && null != t && (null == this.min || this.min <= t) && (null == this.max || t <= this.max))
//             }
//
//             isDateExist(e) {
//                 return this.format(this.parse(e, this), this).indexOf(e) >= 0
//             }
//
//             get date() {
//                 return this.typedValue
//             }
//
//             set date(e) {
//                 this.typedValue = e
//             }
//
//             get typedValue() {
//                 return this.isComplete ? super.typedValue : null
//             }
//
//             set typedValue(e) {
//                 super.typedValue = e
//             }
//
//             maskEquals(e) {
//                 return e === Date || super.maskEquals(e)
//             }
//         }
//
//         Ne.GET_DEFAULT_BLOCKS = () => ({
//             d: {mask: je, from: 1, to: 31, maxLength: 2},
//             m: {mask: je, from: 1, to: 12, maxLength: 2},
//             Y: {mask: je, from: 1900, to: 9999}
//         }), Ne.DEFAULTS = {
//             mask: Date,
//             pattern: "d{.}`m{.}`Y",
//             format: (e, t) => e ? [String(e.getDate()).padStart(2, "0"), String(e.getMonth() + 1).padStart(2, "0"), e.getFullYear()].join(".") : "",
//             parse: (e, t) => {
//                 const [n, r, i] = e.split(".").map(Number);
//                 return new Date(i, r - 1, n)
//             }
//         }, Ee.MaskedDate = Ne;
//
//         class Ve extends Me {
//             constructor(e) {
//                 super({...Ve.DEFAULTS, ...e}), this.currentMask = void 0
//             }
//
//             updateOptions(e) {
//                 super.updateOptions(e)
//             }
//
//             _update(e) {
//                 super._update(e), "mask" in e && (this.exposeMask = void 0, this.compiledMasks = Array.isArray(e.mask) ? e.mask.map((e => {
//                     const {expose: t, ...n} = ke(e),
//                         r = Ce({overwrite: this._overwrite, eager: this._eager, skipInvalid: this._skipInvalid, ...n});
//                     return t && (this.exposeMask = r), r
//                 })) : [])
//             }
//
//             _appendCharRaw(e, t) {
//                 void 0 === t && (t = {});
//                 const n = this._applyDispatch(e, t);
//                 return this.currentMask && n.aggregate(this.currentMask._appendChar(e, this.currentMaskFlags(t))), n
//             }
//
//             _applyDispatch(e, t, n) {
//                 void 0 === e && (e = ""), void 0 === t && (t = {}), void 0 === n && (n = "");
//                 const r = t.tail && null != t._beforeTailState ? t._beforeTailState._value : this.value,
//                     i = this.rawInputValue,
//                     o = t.tail && null != t._beforeTailState ? t._beforeTailState._rawInputValue : i,
//                     s = i.slice(o.length), a = this.currentMask, l = new Oe, u = null == a ? void 0 : a.state;
//                 if (this.currentMask = this.doDispatch(e, {...t}, n), this.currentMask) if (this.currentMask !== a) {
//                     if (this.currentMask.reset(), o) {
//                         const e = this.currentMask.append(o, {raw: !0});
//                         l.tailShift = e.inserted.length - r.length
//                     }
//                     s && (l.tailShift += this.currentMask.append(s, {raw: !0, tail: !0}).tailShift)
//                 } else u && (this.currentMask.state = u);
//                 return l
//             }
//
//             _appendPlaceholder() {
//                 const e = this._applyDispatch();
//                 return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e
//             }
//
//             _appendEager() {
//                 const e = this._applyDispatch();
//                 return this.currentMask && e.aggregate(this.currentMask._appendEager()), e
//             }
//
//             appendTail(e) {
//                 const t = new Oe;
//                 return e && t.aggregate(this._applyDispatch("", {}, e)), t.aggregate(this.currentMask ? this.currentMask.appendTail(e) : super.appendTail(e))
//             }
//
//             currentMaskFlags(e) {
//                 var t, n;
//                 return {
//                     ...e,
//                     _beforeTailState: (null == (t = e._beforeTailState) ? void 0 : t.currentMaskRef) === this.currentMask && (null == (n = e._beforeTailState) ? void 0 : n.currentMask) || e._beforeTailState
//                 }
//             }
//
//             doDispatch(e, t, n) {
//                 return void 0 === t && (t = {}), void 0 === n && (n = ""), this.dispatch(e, this, t, n)
//             }
//
//             doValidate(e) {
//                 return super.doValidate(e) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(e)))
//             }
//
//             doPrepare(e, t) {
//                 void 0 === t && (t = {});
//                 let [n, r] = super.doPrepare(e, t);
//                 if (this.currentMask) {
//                     let e;
//                     [n, e] = super.doPrepare(n, this.currentMaskFlags(t)), r = r.aggregate(e)
//                 }
//                 return [n, r]
//             }
//
//             doPrepareChar(e, t) {
//                 void 0 === t && (t = {});
//                 let [n, r] = super.doPrepareChar(e, t);
//                 if (this.currentMask) {
//                     let e;
//                     [n, e] = super.doPrepareChar(n, this.currentMaskFlags(t)), r = r.aggregate(e)
//                 }
//                 return [n, r]
//             }
//
//             reset() {
//                 var e;
//                 null == (e = this.currentMask) || e.reset(), this.compiledMasks.forEach((e => e.reset()))
//             }
//
//             get value() {
//                 return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : ""
//             }
//
//             set value(e) {
//                 this.exposeMask ? (this.exposeMask.value = e, this.currentMask = this.exposeMask, this._applyDispatch()) : super.value = e
//             }
//
//             get unmaskedValue() {
//                 return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : ""
//             }
//
//             set unmaskedValue(e) {
//                 this.exposeMask ? (this.exposeMask.unmaskedValue = e, this.currentMask = this.exposeMask, this._applyDispatch()) : super.unmaskedValue = e
//             }
//
//             get typedValue() {
//                 return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : ""
//             }
//
//             set typedValue(e) {
//                 if (this.exposeMask) return this.exposeMask.typedValue = e, this.currentMask = this.exposeMask, void this._applyDispatch();
//                 let t = String(e);
//                 this.currentMask && (this.currentMask.typedValue = e, t = this.currentMask.unmaskedValue), this.unmaskedValue = t
//             }
//
//             get displayValue() {
//                 return this.currentMask ? this.currentMask.displayValue : ""
//             }
//
//             get isComplete() {
//                 var e;
//                 return Boolean(null == (e = this.currentMask) ? void 0 : e.isComplete)
//             }
//
//             get isFilled() {
//                 var e;
//                 return Boolean(null == (e = this.currentMask) ? void 0 : e.isFilled)
//             }
//
//             remove(e, t) {
//                 const n = new Oe;
//                 return this.currentMask && n.aggregate(this.currentMask.remove(e, t)).aggregate(this._applyDispatch()), n
//             }
//
//             get state() {
//                 var e;
//                 return {
//                     ...super.state,
//                     _rawInputValue: this.rawInputValue,
//                     compiledMasks: this.compiledMasks.map((e => e.state)),
//                     currentMaskRef: this.currentMask,
//                     currentMask: null == (e = this.currentMask) ? void 0 : e.state
//                 }
//             }
//
//             set state(e) {
//                 const {compiledMasks: t, currentMaskRef: n, currentMask: r, ...i} = e;
//                 t && this.compiledMasks.forEach(((e, n) => e.state = t[n])), null != n && (this.currentMask = n, this.currentMask.state = r), super.state = i
//             }
//
//             extractInput(e, t, n) {
//                 return this.currentMask ? this.currentMask.extractInput(e, t, n) : ""
//             }
//
//             extractTail(e, t) {
//                 return this.currentMask ? this.currentMask.extractTail(e, t) : super.extractTail(e, t)
//             }
//
//             doCommit() {
//                 this.currentMask && this.currentMask.doCommit(), super.doCommit()
//             }
//
//             nearestInputPos(e, t) {
//                 return this.currentMask ? this.currentMask.nearestInputPos(e, t) : super.nearestInputPos(e, t)
//             }
//
//             get overwrite() {
//                 return this.currentMask ? this.currentMask.overwrite : this._overwrite
//             }
//
//             set overwrite(e) {
//                 this._overwrite = e
//             }
//
//             get eager() {
//                 return this.currentMask ? this.currentMask.eager : this._eager
//             }
//
//             set eager(e) {
//                 this._eager = e
//             }
//
//             get skipInvalid() {
//                 return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid
//             }
//
//             set skipInvalid(e) {
//                 this._skipInvalid = e
//             }
//
//             maskEquals(e) {
//                 return Array.isArray(e) ? this.compiledMasks.every(((t, n) => {
//                     if (!e[n]) return;
//                     const {mask: r, ...i} = e[n];
//                     return Se(t, i) && t.maskEquals(r)
//                 })) : super.maskEquals(e)
//             }
//
//             typedValueEquals(e) {
//                 var t;
//                 return Boolean(null == (t = this.currentMask) ? void 0 : t.typedValueEquals(e))
//             }
//         }
//
//         Ve.DEFAULTS = void 0, Ve.DEFAULTS = {
//             dispatch: (e, t, n, r) => {
//                 if (!t.compiledMasks.length) return;
//                 const i = t.rawInputValue, o = t.compiledMasks.map(((o, s) => {
//                     const a = t.currentMask === o,
//                         l = a ? o.displayValue.length : o.nearestInputPos(o.displayValue.length, ve);
//                     return o.rawInputValue !== i ? (o.reset(), o.append(i, {raw: !0})) : a || o.remove(l), o.append(e, t.currentMaskFlags(n)), o.appendTail(r), {
//                         index: s,
//                         weight: o.rawInputValue.length,
//                         totalInputPositions: o.totalInputPositions(0, Math.max(l, o.nearestInputPos(o.displayValue.length, ve)))
//                     }
//                 }));
//                 return o.sort(((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions)), t.compiledMasks[o[0].index]
//             }
//         }, Ee.MaskedDynamic = Ve, Ee.MaskedEnum = class extends Re {
//             constructor(e) {
//                 super(e)
//             }
//
//             updateOptions(e) {
//                 super.updateOptions(e)
//             }
//
//             _update(e) {
//                 const {enum: t, ...n} = e;
//                 if (t) {
//                     const e = t.map((e => e.length)), r = Math.min(...e), i = Math.max(...e) - r;
//                     n.mask = "*".repeat(r), i && (n.mask += "[" + "*".repeat(i) + "]"), this.enum = t
//                 }
//                 super._update(n)
//             }
//
//             doValidate(e) {
//                 return this.enum.some((e => 0 === e.indexOf(this.unmaskedValue))) && super.doValidate(e)
//             }
//         }, Ee.MaskedFunction = class extends Me {
//             updateOptions(e) {
//                 super.updateOptions(e)
//             }
//
//             _update(e) {
//                 super._update({...e, validate: e.mask})
//             }
//         };
//
//         class ze extends Me {
//             constructor(e) {
//                 super({...ze.DEFAULTS, ...e})
//             }
//
//             updateOptions(e) {
//                 super.updateOptions(e)
//             }
//
//             _update(e) {
//                 super._update(e), this._updateRegExps()
//             }
//
//             _updateRegExps() {
//                 const e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
//                     t = (this.scale ? "(" + we(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
//                 this._numberRegExp = new RegExp(e + "\\d*" + t), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(we).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(we(this.thousandsSeparator), "g")
//             }
//
//             _removeThousandsSeparators(e) {
//                 return e.replace(this._thousandsSeparatorRegExp, "")
//             }
//
//             _insertThousandsSeparators(e) {
//                 const t = e.split(this.radix);
//                 return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), t.join(this.radix)
//             }
//
//             doPrepareChar(e, t) {
//                 void 0 === t && (t = {});
//                 const [n, r] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (t.input && t.raw || !t.input && !t.raw) ? e.replace(this._mapToRadixRegExp, this.radix) : e), t);
//                 return e && !n && (r.skip = !0), !n || this.allowPositive || this.value || "-" === n || r.aggregate(this._appendChar("-")), [n, r]
//             }
//
//             _separatorsCount(e, t) {
//                 void 0 === t && (t = !1);
//                 let n = 0;
//                 for (let r = 0; r < e; ++r) this._value.indexOf(this.thousandsSeparator, r) === r && (++n, t && (e += this.thousandsSeparator.length));
//                 return n
//             }
//
//             _separatorsCountFromSlice(e) {
//                 return void 0 === e && (e = this._value), this._separatorsCount(this._removeThousandsSeparators(e).length, !0)
//             }
//
//             extractInput(e, t, n) {
//                 return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), [e, t] = this._adjustRangeWithSeparators(e, t), this._removeThousandsSeparators(super.extractInput(e, t, n))
//             }
//
//             _appendCharRaw(e, t) {
//                 if (void 0 === t && (t = {}), !this.thousandsSeparator) return super._appendCharRaw(e, t);
//                 const n = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
//                     r = this._separatorsCountFromSlice(n);
//                 this._value = this._removeThousandsSeparators(this.value);
//                 const i = super._appendCharRaw(e, t);
//                 this._value = this._insertThousandsSeparators(this._value);
//                 const o = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
//                     s = this._separatorsCountFromSlice(o);
//                 return i.tailShift += (s - r) * this.thousandsSeparator.length, i.skip = !i.rawInserted && e === this.thousandsSeparator, i
//             }
//
//             _findSeparatorAround(e) {
//                 if (this.thousandsSeparator) {
//                     const t = e - this.thousandsSeparator.length + 1,
//                         n = this.value.indexOf(this.thousandsSeparator, t);
//                     if (n <= e) return n
//                 }
//                 return -1
//             }
//
//             _adjustRangeWithSeparators(e, t) {
//                 const n = this._findSeparatorAround(e);
//                 n >= 0 && (e = n);
//                 const r = this._findSeparatorAround(t);
//                 return r >= 0 && (t = r + this.thousandsSeparator.length), [e, t]
//             }
//
//             remove(e, t) {
//                 void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), [e, t] = this._adjustRangeWithSeparators(e, t);
//                 const n = this.value.slice(0, e), r = this.value.slice(t), i = this._separatorsCount(n.length);
//                 this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r));
//                 const o = this._separatorsCountFromSlice(n);
//                 return new Oe({tailShift: (o - i) * this.thousandsSeparator.length})
//             }
//
//             nearestInputPos(e, t) {
//                 if (!this.thousandsSeparator) return e;
//                 switch (t) {
//                     case me:
//                     case ge:
//                     case ve: {
//                         const n = this._findSeparatorAround(e - 1);
//                         if (n >= 0) {
//                             const r = n + this.thousandsSeparator.length;
//                             if (e < r || this.value.length <= r || t === ve) return n
//                         }
//                         break
//                     }
//                     case ye:
//                     case be: {
//                         const t = this._findSeparatorAround(e);
//                         if (t >= 0) return t + this.thousandsSeparator.length
//                     }
//                 }
//                 return e
//             }
//
//             doValidate(e) {
//                 let t = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
//                 if (t) {
//                     const e = this.number;
//                     t = t && !isNaN(e) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max)
//                 }
//                 return t && super.doValidate(e)
//             }
//
//             doCommit() {
//                 if (this.value) {
//                     const e = this.number;
//                     let t = e;
//                     null != this.min && (t = Math.max(t, this.min)), null != this.max && (t = Math.min(t, this.max)), t !== e && (this.unmaskedValue = this.format(t, this));
//                     let n = this.value;
//                     this.normalizeZeros && (n = this._normalizeZeros(n)), this.padFractionalZeros && this.scale > 0 && (n = this._padFractionalZeros(n)), this._value = n
//                 }
//                 super.doCommit()
//             }
//
//             _normalizeZeros(e) {
//                 const t = this._removeThousandsSeparators(e).split(this.radix);
//                 return t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, ((e, t, n, r) => t + r)), e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"), t.length > 1 && (t[1] = t[1].replace(/0*$/, ""), t[1].length || (t.length = 1)), this._insertThousandsSeparators(t.join(this.radix))
//             }
//
//             _padFractionalZeros(e) {
//                 if (!e) return e;
//                 const t = e.split(this.radix);
//                 return t.length < 2 && t.push(""), t[1] = t[1].padEnd(this.scale, "0"), t.join(this.radix)
//             }
//
//             doSkipInvalid(e, t, n) {
//                 void 0 === t && (t = {});
//                 const r = 0 === this.scale && e !== this.thousandsSeparator && (e === this.radix || e === ze.UNMASKED_RADIX || this.mapToRadix.includes(e));
//                 return super.doSkipInvalid(e, t, n) && !r
//             }
//
//             get unmaskedValue() {
//                 return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ze.UNMASKED_RADIX)
//             }
//
//             set unmaskedValue(e) {
//                 super.unmaskedValue = e
//             }
//
//             get typedValue() {
//                 return this.parse(this.unmaskedValue, this)
//             }
//
//             set typedValue(e) {
//                 this.rawInputValue = this.format(e, this).replace(ze.UNMASKED_RADIX, this.radix)
//             }
//
//             get number() {
//                 return this.typedValue
//             }
//
//             set number(e) {
//                 this.typedValue = e
//             }
//
//             get allowNegative() {
//                 return null != this.min && this.min < 0 || null != this.max && this.max < 0
//             }
//
//             get allowPositive() {
//                 return null != this.min && this.min > 0 || null != this.max && this.max > 0
//             }
//
//             typedValueEquals(e) {
//                 return (super.typedValueEquals(e) || ze.EMPTY_VALUES.includes(e) && ze.EMPTY_VALUES.includes(this.typedValue)) && !(0 === e && "" === this.value)
//             }
//         }
//
//         ze.UNMASKED_RADIX = ".", ze.EMPTY_VALUES = [...Me.EMPTY_VALUES, 0], ze.DEFAULTS = {
//             mask: Number,
//             radix: ",",
//             thousandsSeparator: "",
//             mapToRadix: [ze.UNMASKED_RADIX],
//             min: Number.MIN_SAFE_INTEGER,
//             max: Number.MAX_SAFE_INTEGER,
//             scale: 2,
//             normalizeZeros: !0,
//             padFractionalZeros: !1,
//             parse: Number,
//             format: e => e.toLocaleString("en-US", {useGrouping: !1, maximumFractionDigits: 20})
//         }, Ee.MaskedNumber = ze;
//         const $e = {MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue"};
//
//         function He(e, t, n) {
//             void 0 === t && (t = $e.MASKED), void 0 === n && (n = $e.MASKED);
//             const r = Ce(e);
//             return e => r.runIsolated((r => (r[t] = e, r[n])))
//         }
//
//         Ee.PIPE_TYPE = $e, Ee.createPipe = He, Ee.pipe = function (e, t, n, r) {
//             return He(t, n, r)(e)
//         };
//         try {
//             globalThis.IMask = Ee
//         } catch {
//         }
//         var Ge = function () {
//             var e, t, n, r, i, o, s, a, l;
//             document.querySelectorAll(".TelegramClickSZ").forEach((function (e) {
//                 e.addEventListener("click", (function () {
//                     ym(94760218, "reachGoal", "TelegramClickSZ")
//                 }))
//             })), e = document.querySelectorAll(".TelegramBotClick"), t = function (e) {
//                 for (var t = "_ym_uid=", n = decodeURIComponent(document.cookie).split(";"), r = 0; r < n.length; r++) {
//                     for (var i = n[r]; " " === i.charAt(0);) i = i.substring(1);
//                     if (0 === i.indexOf(t)) return i.substring(8, i.length)
//                 }
//                 return ""
//             }(), n = sessionStorage.getItem("ym_uid"), (e.length > 0 && t || e.length > 0 && n) && e.forEach((function (e) {
//                 t ? e.setAttribute("href", e.getAttribute("href") + "?_ym_uid=" + t) : n && e.setAttribute("href", e.getAttribute("href") + "?_ym_uid=" + n)
//             })), s = null === (r = document) || void 0 === r ? void 0 : r.querySelectorAll(".ref-goal-1"), a = null === (i = document) || void 0 === i ? void 0 : i.querySelector(".ref-goal-2"), l = null === (o = document) || void 0 === o ? void 0 : o.querySelectorAll(".ref-goal-3"), null == s || s.forEach((function (e) {
//                 null == e || e.addEventListener("click", (function () {
//                     ym(94760218, "reachGoal", "referral_registration_click")
//                 }))
//             })), null == a || a.addEventListener("click", (function () {
//                 ym(94760218, "reachGoal", "referral_login_click")
//             })), null == l || l.forEach((function (e) {
//                 null == e || e.addEventListener("click", (function () {
//                     ym(94760218, "reachGoal", "referral_program_click")
//                 }))
//             }))
//         };
//
//         function Ue(e, t) {
//             if (e) {
//                 if ("string" == typeof e) return We(e, t);
//                 var n = Object.prototype.toString.call(e).slice(8, -1);
//                 return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? We(e, t) : void 0
//             }
//         }
//
//         function We(e, t) {
//             (null == t || t > e.length) && (t = e.length);
//             for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
//             return r
//         }
//
//         var Ye = function () {
//             var e, t, n, r, i, o, s = function (e) {
//                     if (Array.isArray(e)) return We(e)
//                 }(o = null === (e = document) || void 0 === e ? void 0 : e.querySelectorAll(".calc__button")) || function (e) {
//                     if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
//                 }(o) || Ue(o) || function () {
//                     throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//                 }(), a = null === (t = document) || void 0 === t ? void 0 : t.querySelector(".calc_display"),
//                 l = null === (n = document) || void 0 === n ? void 0 : n.querySelector(".total-price"),
//                 u = function (e, t) {
//                     var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
//                     if (!n) {
//                         if (Array.isArray(e) || (n = Ue(e))) {
//                             n && (e = n);
//                             var r = 0, i = function () {
//                             };
//                             return {
//                                 s: i, n: function () {
//                                     return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
//                                 }, e: function (e) {
//                                     throw e
//                                 }, f: i
//                             }
//                         }
//                         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//                     }
//                     var o, s = !0, a = !1;
//                     return {
//                         s: function () {
//                             n = n.call(e)
//                         }, n: function () {
//                             var e = n.next();
//                             return s = e.done, e
//                         }, e: function (e) {
//                             a = !0, o = e
//                         }, f: function () {
//                             try {
//                                 s || null == n.return || n.return()
//                             } finally {
//                                 if (a) throw o
//                             }
//                         }
//                     }
//                 }(s);
//             try {
//                 for (u.s(); !(i = u.n()).done;) {
//                     var c = i.value;
//                     null == c || c.addEventListener("click", (function (e) {
//                         e.target == s[0] ? a.value = Number(a.value) - 1 : a.value = Number(a.value) + 1, d(0, 1e3), r = Number(a.value), l.textContent = 1500 * r
//                     }))
//                 }
//             } catch (e) {
//                 u.e(e)
//             } finally {
//                 u.f()
//             }
//
//             function d(e, t) {
//                 a.value < e && (a.value = e), a.value > t && (a.value = t)
//             }
//
//             null == a || a.addEventListener("input", (function () {
//                 this.value = this.value.replace(/[^\d.]/g, ""), d(0, 1e3), r = Number(a.value), l.textContent = 1500 * r
//             }))
//         };
//
//         function Xe(e) {
//             return Xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//                 return typeof e
//             } : function (e) {
//                 return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//             }, Xe(e)
//         }
//
//         function Ke(e, t) {
//             var n = Object.keys(e);
//             if (Object.getOwnPropertySymbols) {
//                 var r = Object.getOwnPropertySymbols(e);
//                 t && (r = r.filter((function (t) {
//                     return Object.getOwnPropertyDescriptor(e, t).enumerable
//                 }))), n.push.apply(n, r)
//             }
//             return n
//         }
//
//         function Je(e, t, n) {
//             return (t = function (e) {
//                 var t = function (e, t) {
//                     if ("object" !== Xe(e) || null === e) return e;
//                     var n = e[Symbol.toPrimitive];
//                     if (void 0 !== n) {
//                         var r = n.call(e, "string");
//                         if ("object" !== Xe(r)) return r;
//                         throw new TypeError("@@toPrimitive must return a primitive value.")
//                     }
//                     return String(e)
//                 }(e);
//                 return "symbol" === Xe(t) ? t : String(t)
//             }(t)) in e ? Object.defineProperty(e, t, {
//                 value: n,
//                 enumerable: !0,
//                 configurable: !0,
//                 writable: !0
//             }) : e[t] = n, e
//         }
//
//         var Ze = function (e, t, n) {
//             var r;
//             if (n) {
//                 t.target && (t = t.target.options[t.target.selectedIndex]);
//                 var i = e.find((function (e) {
//                     return e.shortName == t.getAttribute("shortname")
//                 }));
//                 if (null != i) return null === (r = i.regions.find((function (e) {
//                     return e.regionId == n
//                 }))) || void 0 === r ? void 0 : r.link
//             }
//         }, Qe = function (e, t, n) {
//             var r = document.querySelector(".form__field-regions"),
//                 i = 0 == n.length ? '<div class="form__field-regions"><div class="form__field-regions__block"><p>К сожалению, по данному региону нет доступных программ</p></div></div>' : '<div class="form__field-regions"><div class="form__field-regions__block"><p>К сожалению, по данному уровню образования нет доступных программ</p></div></div>';
//             null == r || r.remove(), "" != e.value && (void 0 === t || 0 == t.length ? e.insertAdjacentHTML("afterend", i) : null == r || r.remove())
//         };
//
//         function et(e, t) {
//             return function (e) {
//                 if (Array.isArray(e)) return e
//             }(e) || function (e, t) {
//                 var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
//                 if (null != n) {
//                     var r, i, o, s, a = [], l = !0, u = !1;
//                     try {
//                         if (o = (n = n.call(e)).next, 0 === t) {
//                             if (Object(n) !== n) return;
//                             l = !1
//                         } else for (; !(l = (r = o.call(n)).done) && (a.push(r.value), a.length !== t); l = !0) ;
//                     } catch (e) {
//                         u = !0, i = e
//                     } finally {
//                         try {
//                             if (!l && null != n.return && (s = n.return(), Object(s) !== s)) return
//                         } finally {
//                             if (u) throw i
//                         }
//                     }
//                     return a
//                 }
//             }(e, t) || function (e, t) {
//                 if (e) {
//                     if ("string" == typeof e) return tt(e, t);
//                     var n = Object.prototype.toString.call(e).slice(8, -1);
//                     return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tt(e, t) : void 0
//                 }
//             }(e, t) || function () {
//                 throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//             }()
//         }
//
//         function tt(e, t) {
//             (null == t || t > e.length) && (t = e.length);
//             for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
//             return r
//         }
//
//         var nt = function (e, t, n, r, i, o, s) {
//             var a, l, u = location.href.split("/"), c = document.querySelector(".ProgramsModal__btn"),
//                 d = document.createElement("div"), p = [], h = document.querySelectorAll(".modal-programs");
//             if (u.includes("program") && t && i) {
//                 var f = function () {
//                     if ("12" == i) {
//                         var t = !1;
//                         return e.filter((function (e) {
//                             return 1 == e.availableCategories
//                         })).forEach((function (e) {
//                             e.shortName == o && (t = !0)
//                         })), t
//                     }
//                 }, m = function (e) {
//                     "block" == e ? (r.style.display = "none", n.disabled = !0) : (r.style.display = "block", n.disabled = !1)
//                 };
//                 h.length > 0 && h.forEach((function (e) {
//                     return e.remove()
//                 })), c || ((c = document.createElement("button")).setAttribute("data-modal-open", ""), c.setAttribute("data-modal-id", "ProgramsModal"), c.setAttribute("data-modal-close", ""), c.classList.add("ProgramsModal__btn"), c.style.display = "none", document.body.append(c));
//                 var g = e.filter((function (e) {
//                     return e.regions.some((function (e) {
//                         return e.regionId == t
//                     }))
//                 })).filter((function (e, t, n) {
//                     return n.findLastIndex((function (t) {
//                         return t.shortName === e.shortName
//                     })) === t
//                 })), v = e.filter((function (e) {
//                     return e.shortName == o
//                 }));
//                 if (v.length > 1) {
//                     var y = et(v, 2);
//                     a = y[0], l = y[1], p = a.regions.concat(l.regions)
//                 } else 1 == v.length && (p = (a = et(v, 1)[0]).regions);
//                 void 0 === p.map((function (e) {
//                     return e.regionId
//                 })).find((function (e) {
//                     return e == t
//                 })) || 1 == s[0] && 0 == s[1] && 0 != f() ? (0 == g.length ? (d.classList.add("custom-modal__hidden", "modal-programs"), d.id = "ProgramsModal", d.innerHTML = '<div class="modal-programs__content">\n          <h3>К сожалению, в вашем регионе программы не&nbsp;реализуются</h3>\n        </div>', document.body.append(d)) : 1 == s[0] && 0 == s[1] ? (d.classList.add("custom-modal__hidden", "modal-programs"), d.id = "ProgramsModal", d.innerHTML = '<div class="modal-programs__content">\n          <h3>К сожалению, по данному уровню образования программа не&nbsp;доступна</h3>\n        </div>', document.body.append(d)) : (d.classList.add("custom-modal__hidden", "modal-programs"), d.id = "ProgramsModal", d.innerHTML = '<div class="modal-programs__content">\n          <h3>К сожалению, в вашем регионе программа не&nbsp;реализуется</h3>\n          <p>Но вы все еще можете пройти <strong>бесплатное обучение</strong>\n          и получить помощь в старте карьеры по другим программам. Вот какие программы доступны в вашем регионе:</p>\n        <div class="modal-programs__links"></div>\n        </div>', document.body.append(d), g.forEach((function (e) {
//                     document.querySelector(".modal-programs__links").innerHTML += "\n          ".concat(e.shortName ? '<a href="/program/'.concat(e.shortName, '">').concat(e.name, "</a>") : "", "\n      ")
//                 }))), c.click(), m("block")) : (m("unBlock"), 0 == f() && (function () {
//                     var e = document.querySelector(".ProgramsModalCategorySearchJob__btn"),
//                         t = document.createElement("div"), n = document.querySelectorAll(".modal-categorySearchJob");
//                     n.length > 0 && n.forEach((function (e) {
//                         return e.remove()
//                     })), e || ((e = document.createElement("button")).setAttribute("data-modal-open", ""), e.setAttribute("data-modal-id", "ProgramsModalCategorySearchJob"), e.setAttribute("data-modal-close", ""), e.classList.add("ProgramsModalCategorySearchJob__btn"), e.style.display = "none", document.body.append(e)), t.classList.add("custom-modal__hidden", "modal-categorySearchJob"), t.id = "ProgramsModalCategorySearchJob", t.innerHTML = '<div class="modal-programs__content">\n        <h3>Пожалуйста, выберите другую программу</h3>\n        <p>Для категории «Граждане, ищущие работу (или трудоустроенные)»\n        мы&nbsp;разработали определенные программы по наиболее перспективным специальностям</p>\n        <p><strong>5 самых популярных курсов:</strong></p>\n        <ul>\n            <li><a href="/program/onec144">1С программист</a></li>\n            <li><a href="/program/personneladmin">Кадровый учет: администрирование трудовых отношений</a></li>\n            <li><a href="/program/accountant">Бухгалтер субъекта малого бизнеса</a></li>\n            <li><a href="/program/softwaretesting">Тестировщик программного обеспечения</a></li>\n            <li><a href="/program/machine-operator">Оператор станков с программным управлением</a></li>\n        </ul>\n        <p><strong>Ознакомиться с полным перечнем бесплатных программ для вашей категории вы&nbsp;можете по&nbsp;кнопке ниже</strong></p>\n        <a href="/catalog" class="btn">Выбрать курс</a>\n      </div>', document.body.append(t), e.click()
//                 }(), m("block")))
//             }
//         }, rt = function () {
//             var e = new URL(window.location.href).pathname.split("/");
//             return (e.pop() || e.pop()).toLocaleLowerCase()
//         }, it = function (e) {
//             for (var t, n = {}, r = [], i = [], o = 0; o < e.length; o++) t = e[o].shortName, n.hasOwnProperty(t) || (n[t] = []), n[t].push(e[o]);
//             for (var s in n) n.hasOwnProperty(s) && r.push(n[s]);
//             return r.forEach((function (e) {
//                 i.push(function (e) {
//                     var t = e.reduce((function (e, t) {
//                         return e + t.dropChance
//                     }), 0) * Math.random();
//                     if (e.length < 2) return e[0];
//                     e.forEach((function (e) {
//                         e.regions.forEach((function (t) {
//                             t.regionId == region && t.link && (e.Redirect = !0)
//                         }))
//                     }));
//                     var n = e.filter((function (e) {
//                         return e.Redirect
//                     }));
//                     if (0 == n.length) {
//                         for (var r = 0, i = 0; ; r++) if ((i += e[r].dropChance) > t) return e[r]
//                     } else {
//                         if (1 == n.length) return n[0];
//                         for (var o = 0, s = 0; ; o++) if ((s += n[o].dropChance) > t) return n[o]
//                     }
//                 }(e))
//             })), i
//         };
//
//         function ot(e) {
//             return ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//                 return typeof e
//             } : function (e) {
//                 return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//             }, ot(e)
//         }
//
//         function st() {
//             st = function () {
//                 return e
//             };
//             var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function (e, t, n) {
//                     e[t] = n.value
//                 }, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator",
//                 s = i.asyncIterator || "@@asyncIterator", a = i.toStringTag || "@@toStringTag";
//
//             function l(e, t, n) {
//                 return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
//             }
//
//             try {
//                 l({}, "")
//             } catch (e) {
//                 l = function (e, t, n) {
//                     return e[t] = n
//                 }
//             }
//
//             function u(e, t, n, i) {
//                 var o = t && t.prototype instanceof p ? t : p, s = Object.create(o.prototype), a = new k(i || []);
//                 return r(s, "_invoke", {value: S(e, n, a)}), s
//             }
//
//             function c(e, t, n) {
//                 try {
//                     return {type: "normal", arg: e.call(t, n)}
//                 } catch (e) {
//                     return {type: "throw", arg: e}
//                 }
//             }
//
//             e.wrap = u;
//             var d = {};
//
//             function p() {
//             }
//
//             function h() {
//             }
//
//             function f() {
//             }
//
//             var m = {};
//             l(m, o, (function () {
//                 return this
//             }));
//             var g = Object.getPrototypeOf, v = g && g(g(C([])));
//             v && v !== t && n.call(v, o) && (m = v);
//             var y = f.prototype = p.prototype = Object.create(m);
//
//             function b(e) {
//                 ["next", "throw", "return"].forEach((function (t) {
//                     l(e, t, (function (e) {
//                         return this._invoke(t, e)
//                     }))
//                 }))
//             }
//
//             function w(e, t) {
//                 function i(r, o, s, a) {
//                     var l = c(e[r], e, o);
//                     if ("throw" !== l.type) {
//                         var u = l.arg, d = u.value;
//                         return d && "object" == ot(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function (e) {
//                             i("next", e, s, a)
//                         }), (function (e) {
//                             i("throw", e, s, a)
//                         })) : t.resolve(d).then((function (e) {
//                             u.value = e, s(u)
//                         }), (function (e) {
//                             return i("throw", e, s, a)
//                         }))
//                     }
//                     a(l.arg)
//                 }
//
//                 var o;
//                 r(this, "_invoke", {
//                     value: function (e, n) {
//                         function r() {
//                             return new t((function (t, r) {
//                                 i(e, n, t, r)
//                             }))
//                         }
//
//                         return o = o ? o.then(r, r) : r()
//                     }
//                 })
//             }
//
//             function S(e, t, n) {
//                 var r = "suspendedStart";
//                 return function (i, o) {
//                     if ("executing" === r) throw new Error("Generator is already running");
//                     if ("completed" === r) {
//                         if ("throw" === i) throw o;
//                         return {value: void 0, done: !0}
//                     }
//                     for (n.method = i, n.arg = o; ;) {
//                         var s = n.delegate;
//                         if (s) {
//                             var a = x(s, n);
//                             if (a) {
//                                 if (a === d) continue;
//                                 return a
//                             }
//                         }
//                         if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
//                             if ("suspendedStart" === r) throw r = "completed", n.arg;
//                             n.dispatchException(n.arg)
//                         } else "return" === n.method && n.abrupt("return", n.arg);
//                         r = "executing";
//                         var l = c(e, t, n);
//                         if ("normal" === l.type) {
//                             if (r = n.done ? "completed" : "suspendedYield", l.arg === d) continue;
//                             return {value: l.arg, done: n.done}
//                         }
//                         "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
//                     }
//                 }
//             }
//
//             function x(e, t) {
//                 var n = t.method, r = e.iterator[n];
//                 if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
//                 var i = c(r, e.iterator, t.arg);
//                 if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, d;
//                 var o = i.arg;
//                 return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
//             }
//
//             function E(e) {
//                 var t = {tryLoc: e[0]};
//                 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
//             }
//
//             function _(e) {
//                 var t = e.completion || {};
//                 t.type = "normal", delete t.arg, e.completion = t
//             }
//
//             function k(e) {
//                 this.tryEntries = [{tryLoc: "root"}], e.forEach(E, this), this.reset(!0)
//             }
//
//             function C(e) {
//                 if (e || "" === e) {
//                     var t = e[o];
//                     if (t) return t.call(e);
//                     if ("function" == typeof e.next) return e;
//                     if (!isNaN(e.length)) {
//                         var r = -1, i = function t() {
//                             for (; ++r < e.length;) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
//                             return t.value = void 0, t.done = !0, t
//                         };
//                         return i.next = i
//                     }
//                 }
//                 throw new TypeError(ot(e) + " is not iterable")
//             }
//
//             return h.prototype = f, r(y, "constructor", {value: f, configurable: !0}), r(f, "constructor", {
//                 value: h,
//                 configurable: !0
//             }), h.displayName = l(f, a, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
//                 var t = "function" == typeof e && e.constructor;
//                 return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
//             }, e.mark = function (e) {
//                 return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, a, "GeneratorFunction")), e.prototype = Object.create(y), e
//             }, e.awrap = function (e) {
//                 return {__await: e}
//             }, b(w.prototype), l(w.prototype, s, (function () {
//                 return this
//             })), e.AsyncIterator = w, e.async = function (t, n, r, i, o) {
//                 void 0 === o && (o = Promise);
//                 var s = new w(u(t, n, r, i), o);
//                 return e.isGeneratorFunction(n) ? s : s.next().then((function (e) {
//                     return e.done ? e.value : s.next()
//                 }))
//             }, b(y), l(y, a, "Generator"), l(y, o, (function () {
//                 return this
//             })), l(y, "toString", (function () {
//                 return "[object Generator]"
//             })), e.keys = function (e) {
//                 var t = Object(e), n = [];
//                 for (var r in t) n.push(r);
//                 return n.reverse(), function e() {
//                     for (; n.length;) {
//                         var r = n.pop();
//                         if (r in t) return e.value = r, e.done = !1, e
//                     }
//                     return e.done = !0, e
//                 }
//             }, e.values = C, k.prototype = {
//                 constructor: k, reset: function (e) {
//                     if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
//                 }, stop: function () {
//                     this.done = !0;
//                     var e = this.tryEntries[0].completion;
//                     if ("throw" === e.type) throw e.arg;
//                     return this.rval
//                 }, dispatchException: function (e) {
//                     if (this.done) throw e;
//                     var t = this;
//
//                     function r(n, r) {
//                         return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
//                     }
//
//                     for (var i = this.tryEntries.length - 1; i >= 0; --i) {
//                         var o = this.tryEntries[i], s = o.completion;
//                         if ("root" === o.tryLoc) return r("end");
//                         if (o.tryLoc <= this.prev) {
//                             var a = n.call(o, "catchLoc"), l = n.call(o, "finallyLoc");
//                             if (a && l) {
//                                 if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
//                                 if (this.prev < o.finallyLoc) return r(o.finallyLoc)
//                             } else if (a) {
//                                 if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
//                             } else {
//                                 if (!l) throw new Error("try statement without catch or finally");
//                                 if (this.prev < o.finallyLoc) return r(o.finallyLoc)
//                             }
//                         }
//                     }
//                 }, abrupt: function (e, t) {
//                     for (var r = this.tryEntries.length - 1; r >= 0; --r) {
//                         var i = this.tryEntries[r];
//                         if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
//                             var o = i;
//                             break
//                         }
//                     }
//                     o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
//                     var s = o ? o.completion : {};
//                     return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(s)
//                 }, complete: function (e, t) {
//                     if ("throw" === e.type) throw e.arg;
//                     return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
//                 }, finish: function (e) {
//                     for (var t = this.tryEntries.length - 1; t >= 0; --t) {
//                         var n = this.tryEntries[t];
//                         if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), d
//                     }
//                 }, catch: function (e) {
//                     for (var t = this.tryEntries.length - 1; t >= 0; --t) {
//                         var n = this.tryEntries[t];
//                         if (n.tryLoc === e) {
//                             var r = n.completion;
//                             if ("throw" === r.type) {
//                                 var i = r.arg;
//                                 _(n)
//                             }
//                             return i
//                         }
//                     }
//                     throw new Error("illegal catch attempt")
//                 }, delegateYield: function (e, t, n) {
//                     return this.delegate = {
//                         iterator: C(e),
//                         resultName: t,
//                         nextLoc: n
//                     }, "next" === this.method && (this.arg = void 0), d
//                 }
//             }, e
//         }
//
//         function at(e) {
//             return function (e) {
//                 if (Array.isArray(e)) return lt(e)
//             }(e) || function (e) {
//                 if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
//             }(e) || function (e, t) {
//                 if (e) {
//                     if ("string" == typeof e) return lt(e, t);
//                     var n = Object.prototype.toString.call(e).slice(8, -1);
//                     return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lt(e, t) : void 0
//                 }
//             }(e) || function () {
//                 throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//             }()
//         }
//
//         function lt(e, t) {
//             (null == t || t > e.length) && (t = e.length);
//             for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
//             return r
//         }
//
//         function ut(e, t, n, r, i, o, s) {
//             try {
//                 var a = e[o](s), l = a.value
//             } catch (e) {
//                 return void n(e)
//             }
//             a.done ? t(l) : Promise.resolve(l).then(r, i)
//         }
//
//         function ct() {
//             var e;
//             return e = st().mark((function e(t, n) {
//                 var r, i, o, s, a, l, u, c, d, p, h, f, m, g, v, y, b, w, S, x, E;
//                 return st().wrap((function (e) {
//                     for (; ;) switch (e.prev = e.next) {
//                         case 0:
//                             E = function () {
//                                 var e = r.find((function (e) {
//                                     return e.shortName == y
//                                 }));
//                                 d.forEach((function (e) {
//                                     e.setAttribute("shortname", y), e.setAttribute("linkrvr", Ze(r, e, s))
//                                 })), void 0 !== e && (d.forEach((function (t) {
//                                     t.setAttribute("operator", e.operator), t.setAttribute("odinid", e.id), t.setAttribute("programowner", e.programOwner)
//                                 })), p.value = e.directionId)
//                             }, x = function (e) {
//                                 at(c.children).map((function (e, t) {
//                                     t > 0 && e.remove()
//                                 })), e.forEach((function (e) {
//                                     var t = new Option(e.name, e.name, !1, !1);
//                                     t.setAttribute("operator", e.operator), t.setAttribute("shortName", e.shortName), t.setAttribute("odinid", e.id), t.setAttribute("programowner", e.programOwner), c.append(t)
//                                 }))
//                             }, S = function () {
//                                 i = 1 == o || 2 == o || 4 == o ? 12 == a ? r.filter((function (e) {
//                                     return e.po
//                                 })).filter((function (e) {
//                                     return 1 == e.availableCategories
//                                 })) : r.filter((function (e) {
//                                     return e.po
//                                 })) : 12 == a ? r.filter((function (e) {
//                                     return 1 == e.availableCategories
//                                 })) : r, d.length || (Qe(f, i, r), x(i))
//                             }, w = function () {
//                                 if (location.href.split("/").includes("program") && s && a && o) {
//                                     var e = !1, t = !1;
//                                     r.forEach((function (t) {
//                                         t.shortName == y && (e = !0)
//                                     })), i.forEach((function (e) {
//                                         e.shortName == y && (t = !0)
//                                     })), nt(r, s, g, v, a, y, [e, t])
//                                 }
//                             }, t || (t = ""), r = [], i = [], o = "", s = "", a = "", l = [], u = document.getElementById("Category".concat(t)), c = document.getElementById("Program".concat(t)), d = document.querySelectorAll(".program-hidden"), p = document.querySelector(".direction-hidden"), h = document.getElementById("Education".concat(t)), f = document.getElementById("Regions".concat(t)), m = document.getElementById("Direction".concat(t)), g = document.getElementById("form-btn".concat(t)), v = document.querySelector(".form__checkboxs".concat(t)), y = rt().replace("jobseeking-", ""), b = n, null !== f && (f.onchange = function (e) {
//                                 s = e.target.value, l = b.filter((function (e) {
//                                     return e.regions.some((function (e) {
//                                         return e.regionId == s
//                                     }))
//                                 }));
//                                 var t = structuredClone(l);
//                                 r = [], r = it(t), d.length ? (S(), E(), w()) : S()
//                             }), null !== u && (u.onchange = function (e) {
//                                 $("#Program".concat(t)).val(null).trigger("change"), a = e.target.value, S(), w()
//                             }), null !== h && (h.onchange = function (e) {
//                                 $("#Program".concat(t)).val(null).trigger("change"), o = e.target.value, S(), w()
//                             }), null !== m && (m.onchange = function () {
//                                 var e = this, t = structuredClone(l).filter((function (t) {
//                                     return t.directionId == e.value
//                                 }));
//                                 r = t.filter((function (e, t, n) {
//                                     return n.findIndex((function (t) {
//                                         return t.shortName === e.shortName
//                                     })) === t
//                                 })), S()
//                             }), !d.length && c && (c.onchange = function (e) {
//                                 e.target.options[e.target.selectedIndex].setAttribute("linkrvr", Ze(r, e, s))
//                             });
//                         case 14:
//                         case"end":
//                             return e.stop()
//                     }
//                 }), e)
//             })), ct = function () {
//                 var t = this, n = arguments;
//                 return new Promise((function (r, i) {
//                     var o = e.apply(t, n);
//
//                     function s(e) {
//                         ut(o, r, i, s, a, "next", e)
//                     }
//
//                     function a(e) {
//                         ut(o, r, i, s, a, "throw", e)
//                     }
//
//                     s(void 0)
//                 }))
//             }, ct.apply(this, arguments)
//         }
//
//         var dt = function (e, t) {
//             return ct.apply(this, arguments)
//         };
//
//         function pt(e) {
//             return pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//                 return typeof e
//             } : function (e) {
//                 return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//             }, pt(e)
//         }
//
//         function ht() {
//             ht = function () {
//                 return e
//             };
//             var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function (e, t, n) {
//                     e[t] = n.value
//                 }, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator",
//                 s = i.asyncIterator || "@@asyncIterator", a = i.toStringTag || "@@toStringTag";
//
//             function l(e, t, n) {
//                 return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
//             }
//
//             try {
//                 l({}, "")
//             } catch (e) {
//                 l = function (e, t, n) {
//                     return e[t] = n
//                 }
//             }
//
//             function u(e, t, n, i) {
//                 var o = t && t.prototype instanceof p ? t : p, s = Object.create(o.prototype), a = new k(i || []);
//                 return r(s, "_invoke", {value: S(e, n, a)}), s
//             }
//
//             function c(e, t, n) {
//                 try {
//                     return {type: "normal", arg: e.call(t, n)}
//                 } catch (e) {
//                     return {type: "throw", arg: e}
//                 }
//             }
//
//             e.wrap = u;
//             var d = {};
//
//             function p() {
//             }
//
//             function h() {
//             }
//
//             function f() {
//             }
//
//             var m = {};
//             l(m, o, (function () {
//                 return this
//             }));
//             var g = Object.getPrototypeOf, v = g && g(g(C([])));
//             v && v !== t && n.call(v, o) && (m = v);
//             var y = f.prototype = p.prototype = Object.create(m);
//
//             function b(e) {
//                 ["next", "throw", "return"].forEach((function (t) {
//                     l(e, t, (function (e) {
//                         return this._invoke(t, e)
//                     }))
//                 }))
//             }
//
//             function w(e, t) {
//                 function i(r, o, s, a) {
//                     var l = c(e[r], e, o);
//                     if ("throw" !== l.type) {
//                         var u = l.arg, d = u.value;
//                         return d && "object" == pt(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function (e) {
//                             i("next", e, s, a)
//                         }), (function (e) {
//                             i("throw", e, s, a)
//                         })) : t.resolve(d).then((function (e) {
//                             u.value = e, s(u)
//                         }), (function (e) {
//                             return i("throw", e, s, a)
//                         }))
//                     }
//                     a(l.arg)
//                 }
//
//                 var o;
//                 r(this, "_invoke", {
//                     value: function (e, n) {
//                         function r() {
//                             return new t((function (t, r) {
//                                 i(e, n, t, r)
//                             }))
//                         }
//
//                         return o = o ? o.then(r, r) : r()
//                     }
//                 })
//             }
//
//             function S(e, t, n) {
//                 var r = "suspendedStart";
//                 return function (i, o) {
//                     if ("executing" === r) throw new Error("Generator is already running");
//                     if ("completed" === r) {
//                         if ("throw" === i) throw o;
//                         return {value: void 0, done: !0}
//                     }
//                     for (n.method = i, n.arg = o; ;) {
//                         var s = n.delegate;
//                         if (s) {
//                             var a = x(s, n);
//                             if (a) {
//                                 if (a === d) continue;
//                                 return a
//                             }
//                         }
//                         if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
//                             if ("suspendedStart" === r) throw r = "completed", n.arg;
//                             n.dispatchException(n.arg)
//                         } else "return" === n.method && n.abrupt("return", n.arg);
//                         r = "executing";
//                         var l = c(e, t, n);
//                         if ("normal" === l.type) {
//                             if (r = n.done ? "completed" : "suspendedYield", l.arg === d) continue;
//                             return {value: l.arg, done: n.done}
//                         }
//                         "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
//                     }
//                 }
//             }
//
//             function x(e, t) {
//                 var n = t.method, r = e.iterator[n];
//                 if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
//                 var i = c(r, e.iterator, t.arg);
//                 if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, d;
//                 var o = i.arg;
//                 return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
//             }
//
//             function E(e) {
//                 var t = {tryLoc: e[0]};
//                 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
//             }
//
//             function _(e) {
//                 var t = e.completion || {};
//                 t.type = "normal", delete t.arg, e.completion = t
//             }
//
//             function k(e) {
//                 this.tryEntries = [{tryLoc: "root"}], e.forEach(E, this), this.reset(!0)
//             }
//
//             function C(e) {
//                 if (e || "" === e) {
//                     var t = e[o];
//                     if (t) return t.call(e);
//                     if ("function" == typeof e.next) return e;
//                     if (!isNaN(e.length)) {
//                         var r = -1, i = function t() {
//                             for (; ++r < e.length;) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
//                             return t.value = void 0, t.done = !0, t
//                         };
//                         return i.next = i
//                     }
//                 }
//                 throw new TypeError(pt(e) + " is not iterable")
//             }
//
//             return h.prototype = f, r(y, "constructor", {value: f, configurable: !0}), r(f, "constructor", {
//                 value: h,
//                 configurable: !0
//             }), h.displayName = l(f, a, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
//                 var t = "function" == typeof e && e.constructor;
//                 return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
//             }, e.mark = function (e) {
//                 return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, a, "GeneratorFunction")), e.prototype = Object.create(y), e
//             }, e.awrap = function (e) {
//                 return {__await: e}
//             }, b(w.prototype), l(w.prototype, s, (function () {
//                 return this
//             })), e.AsyncIterator = w, e.async = function (t, n, r, i, o) {
//                 void 0 === o && (o = Promise);
//                 var s = new w(u(t, n, r, i), o);
//                 return e.isGeneratorFunction(n) ? s : s.next().then((function (e) {
//                     return e.done ? e.value : s.next()
//                 }))
//             }, b(y), l(y, a, "Generator"), l(y, o, (function () {
//                 return this
//             })), l(y, "toString", (function () {
//                 return "[object Generator]"
//             })), e.keys = function (e) {
//                 var t = Object(e), n = [];
//                 for (var r in t) n.push(r);
//                 return n.reverse(), function e() {
//                     for (; n.length;) {
//                         var r = n.pop();
//                         if (r in t) return e.value = r, e.done = !1, e
//                     }
//                     return e.done = !0, e
//                 }
//             }, e.values = C, k.prototype = {
//                 constructor: k, reset: function (e) {
//                     if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
//                 }, stop: function () {
//                     this.done = !0;
//                     var e = this.tryEntries[0].completion;
//                     if ("throw" === e.type) throw e.arg;
//                     return this.rval
//                 }, dispatchException: function (e) {
//                     if (this.done) throw e;
//                     var t = this;
//
//                     function r(n, r) {
//                         return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
//                     }
//
//                     for (var i = this.tryEntries.length - 1; i >= 0; --i) {
//                         var o = this.tryEntries[i], s = o.completion;
//                         if ("root" === o.tryLoc) return r("end");
//                         if (o.tryLoc <= this.prev) {
//                             var a = n.call(o, "catchLoc"), l = n.call(o, "finallyLoc");
//                             if (a && l) {
//                                 if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
//                                 if (this.prev < o.finallyLoc) return r(o.finallyLoc)
//                             } else if (a) {
//                                 if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
//                             } else {
//                                 if (!l) throw new Error("try statement without catch or finally");
//                                 if (this.prev < o.finallyLoc) return r(o.finallyLoc)
//                             }
//                         }
//                     }
//                 }, abrupt: function (e, t) {
//                     for (var r = this.tryEntries.length - 1; r >= 0; --r) {
//                         var i = this.tryEntries[r];
//                         if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
//                             var o = i;
//                             break
//                         }
//                     }
//                     o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
//                     var s = o ? o.completion : {};
//                     return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(s)
//                 }, complete: function (e, t) {
//                     if ("throw" === e.type) throw e.arg;
//                     return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
//                 }, finish: function (e) {
//                     for (var t = this.tryEntries.length - 1; t >= 0; --t) {
//                         var n = this.tryEntries[t];
//                         if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), d
//                     }
//                 }, catch: function (e) {
//                     for (var t = this.tryEntries.length - 1; t >= 0; --t) {
//                         var n = this.tryEntries[t];
//                         if (n.tryLoc === e) {
//                             var r = n.completion;
//                             if ("throw" === r.type) {
//                                 var i = r.arg;
//                                 _(n)
//                             }
//                             return i
//                         }
//                     }
//                     throw new Error("illegal catch attempt")
//                 }, delegateYield: function (e, t, n) {
//                     return this.delegate = {
//                         iterator: C(e),
//                         resultName: t,
//                         nextLoc: n
//                     }, "next" === this.method && (this.arg = void 0), d
//                 }
//             }, e
//         }
//
//         function ft(e) {
//             return function (e) {
//                 if (Array.isArray(e)) return mt(e)
//             }(e) || function (e) {
//                 if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
//             }(e) || function (e, t) {
//                 if (e) {
//                     if ("string" == typeof e) return mt(e, t);
//                     var n = Object.prototype.toString.call(e).slice(8, -1);
//                     return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mt(e, t) : void 0
//                 }
//             }(e) || function () {
//                 throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//             }()
//         }
//
//         function mt(e, t) {
//             (null == t || t > e.length) && (t = e.length);
//             for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
//             return r
//         }
//
//         function gt(e, t, n, r, i, o, s) {
//             try {
//                 var a = e[o](s), l = a.value
//             } catch (e) {
//                 return void n(e)
//             }
//             a.done ? t(l) : Promise.resolve(l).then(r, i)
//         }
//
//         function vt(e) {
//             return function () {
//                 var t = this, n = arguments;
//                 return new Promise((function (r, i) {
//                     var o = e.apply(t, n);
//
//                     function s(e) {
//                         gt(o, r, i, s, a, "next", e)
//                     }
//
//                     function a(e) {
//                         gt(o, r, i, s, a, "throw", e)
//                     }
//
//                     s(void 0)
//                 }))
//             }
//         }
//
//         function yt() {
//             return yt = vt(ht().mark((function e() {
//                 var t, n, r, i, o, s, a, l, u, c;
//                 return ht().wrap((function (e) {
//                     for (; ;) switch (e.prev = e.next) {
//                         case 0:
//                             return l = function () {
//                                 return (l = vt(ht().mark((function e(n) {
//                                     var r, i;
//                                     return ht().wrap((function (e) {
//                                         for (; ;) switch (e.prev = e.next) {
//                                             case 0:
//                                                 if (n) {
//                                                     e.next = 2;
//                                                     break
//                                                 }
//                                                 return e.abrupt("return");
//                                             case 2:
//                                                 return e.next = 4, fetch(n);
//                                             case 4:
//                                                 return r = e.sent, e.next = 7, r.json();
//                                             case 7:
//                                                 return (i = e.sent).map((function (e) {
//                                                     e.regions || (e.regions = t)
//                                                 })), e.abrupt("return", i);
//                                             case 10:
//                                             case"end":
//                                                 return e.stop()
//                                         }
//                                     }), e)
//                                 })))).apply(this, arguments)
//                             }, a = function (e) {
//                                 return l.apply(this, arguments)
//                             }, s = function (e, t, n) {
//                                 var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "dpo";
//                                 e && (e.map((function (e) {
//                                     e.operator = n.operator, e.dropChance = n.dropChance, "po" == r && (e.po = !0)
//                                 })), t.push.apply(t, ft(e)))
//                             }, o = function () {
//                                 return (o = vt(ht().mark((function e(t) {
//                                     var n, r, i, o, l;
//                                     return ht().wrap((function (e) {
//                                         for (; ;) switch (e.prev = e.next) {
//                                             case 0:
//                                                 return n = [], e.next = 3, a(t.DPO.fetch);
//                                             case 3:
//                                                 return r = e.sent, e.next = 6, a(t.DPO.json);
//                                             case 6:
//                                                 return i = e.sent, e.next = 9, a(t.PO.fetch);
//                                             case 9:
//                                                 return o = e.sent, e.next = 12, a(t.PO.json);
//                                             case 12:
//                                                 return l = e.sent, s(r, n, t), s(i, n, t), s(o, n, t, "po"), s(l, n, t, "po"), e.abrupt("return", n.filter((function (e, t, n) {
//                                                     return n.findIndex((function (t) {
//                                                         return t.shortName === e.shortName
//                                                     })) == t
//                                                 })));
//                                             case 18:
//                                             case"end":
//                                                 return e.stop()
//                                         }
//                                     }), e)
//                                 })))).apply(this, arguments)
//                             }, i = function (e) {
//                                 return o.apply(this, arguments)
//                             }, t = [{name: "Алтайский край", regionId: 69}, {
//                                 name: "Амурская область",
//                                 regionId: 31
//                             }, {name: "Архангельская область", regionId: 32}, {
//                                 name: "Астраханская область",
//                                 regionId: 33
//                             }, {name: "Белгородская область", regionId: 34}, {
//                                 name: "Брянская область",
//                                 regionId: 35
//                             }, {name: "Владимирская область", regionId: 36}, {
//                                 name: "Волгоградская область",
//                                 regionId: 37
//                             }, {name: "Вологодская область", regionId: 9}, {
//                                 name: "Воронежская область",
//                                 regionId: 10
//                             }, {name: "город Байконур", regionId: 59}, {
//                                 name: "город Москва",
//                                 regionId: 77
//                             }, {name: "город Санкт-Петербург", regionId: 78}, {
//                                 name: "город Севастополь",
//                                 regionId: 58
//                             }, {name: "Донецкая Народная республика", regionId: 87}, {
//                                 name: "Еврейская АО",
//                                 regionId: 79
//                             }, {name: "Забайкальский край", regionId: 75}, {
//                                 name: "Запорожская область",
//                                 regionId: 90
//                             }, {name: "Ивановская область", regionId: 11}, {
//                                 name: "Иркутская область",
//                                 regionId: 23
//                             }, {
//                                 name: "Кабардино-Балкарская Республика",
//                                 regionId: 19
//                             }, {name: "Калининградская область", regionId: 12}, {
//                                 name: "Калужская область",
//                                 regionId: 38
//                             }, {name: "Камчатский край", regionId: 39}, {
//                                 name: "Карачаево-Черкесская Республика",
//                                 regionId: 21
//                             }, {name: "Кемеровская область — Кузбасс", regionId: 40}, {
//                                 name: "Кировская область",
//                                 regionId: 41
//                             }, {name: "Костромская область", regionId: 13}, {
//                                 name: "Краснодарский край",
//                                 regionId: 70
//                             }, {name: "Красноярский край", regionId: 71}, {
//                                 name: "Курганская область",
//                                 regionId: 14
//                             }, {name: "Курская область", regionId: 86}, {
//                                 name: "Ленинградская область",
//                                 regionId: 15
//                             }, {name: "Липецкая область", regionId: 16}, {
//                                 name: "Луганская Народная республика",
//                                 regionId: 88
//                             }, {name: "Магаданская область", regionId: 60}, {
//                                 name: "Московская область",
//                                 regionId: 61
//                             }, {name: "Мурманская область", regionId: 62}, {
//                                 name: "Ненецкий АО",
//                                 regionId: 53
//                             }, {name: "Нижегородская область", regionId: 24}, {
//                                 name: "Новгородская область",
//                                 regionId: 25
//                             }, {name: "Новосибирская область", regionId: 26}, {
//                                 name: "Омская область",
//                                 regionId: 73
//                             }, {name: "Оренбургская область", regionId: 63}, {
//                                 name: "Орловская область",
//                                 regionId: 64
//                             }, {name: "Пензенская область", regionId: 42}, {
//                                 name: "Пермский край",
//                                 regionId: 81
//                             }, {name: "Приморский край", regionId: 72}, {
//                                 name: "Псковская область",
//                                 regionId: 82
//                             }, {name: "Республика Адыгея", regionId: 80}, {
//                                 name: "Республика Алтай",
//                                 regionId: 3
//                             }, {name: "Республика Башкортостан", regionId: 1}, {
//                                 name: "Республика Бурятия",
//                                 regionId: 2
//                             }, {name: "Республика Дагестан", regionId: 17}, {
//                                 name: "Республика Ингушетия",
//                                 regionId: 18
//                             }, {name: "Республика Калмыкия", regionId: 20}, {
//                                 name: "Республика Карелия",
//                                 regionId: 22
//                             }, {name: "Республика Коми", regionId: 4}, {
//                                 name: "Республика Крым",
//                                 regionId: 57
//                             }, {name: "Республика Марий Эл", regionId: 5}, {
//                                 name: "Республика Мордовия",
//                                 regionId: 6
//                             }, {
//                                 name: "Республика Саха (Якутия)",
//                                 regionId: 7
//                             }, {
//                                 name: "Республика Северная Осетия - Алания",
//                                 regionId: 8
//                             }, {name: "Республика Татарстан", regionId: 27}, {
//                                 name: "Республика Тыва",
//                                 regionId: 65
//                             }, {name: "Республика Хакасия", regionId: 66}, {
//                                 name: "Ростовская область",
//                                 regionId: 83
//                             }, {name: "Рязанская область", regionId: 84}, {
//                                 name: "Самарская область",
//                                 regionId: 85
//                             }, {name: "Саратовская область", regionId: 43}, {
//                                 name: "Сахалинская область",
//                                 regionId: 44
//                             }, {name: "Свердловская область", regionId: 45}, {
//                                 name: "Смоленская область",
//                                 regionId: 46
//                             }, {name: "Ставропольский край", regionId: 29}, {
//                                 name: "Тамбовская область",
//                                 regionId: 47
//                             }, {name: "Тверская область", regionId: 48}, {
//                                 name: "Томская область",
//                                 regionId: 49
//                             }, {name: "Тульская область", regionId: 50}, {
//                                 name: "Тюменская область",
//                                 regionId: 51
//                             }, {name: "Удмуртская Республика", regionId: 28}, {
//                                 name: "Ульяновская область",
//                                 regionId: 52
//                             }, {name: "Хабаровский край", regionId: 30}, {
//                                 name: "Ханты-Мансийский АО — Югра",
//                                 regionId: 54
//                             }, {name: "Херсонская область", regionId: 89}, {
//                                 name: "Челябинская область",
//                                 regionId: 74
//                             }, {name: "Чеченская Республика", regionId: 67}, {
//                                 name: "Чувашская Республика — Чувашия",
//                                 regionId: 68
//                             }, {name: "Чукотский АО", regionId: 55}, {
//                                 name: "Ямало-Ненецкий АО",
//                                 regionId: 56
//                             }, {name: "Ярославская область", regionId: 76}], n = {
//                                 operator: "TGU",
//                                 dropChance: .5,
//                                 DPO: {
//                                     fetch: "https://2024.api.tgu-dpo.ru/regions/GetAllProgramsWithRegions?isShowTgu=true&&isVisibleWithoutDirection=true",
//                                     json: "/files/TGUDPO.json"
//                                 },
//                                 PO: {
//                                     fetch: "https://2024.api.tgu-dpo.ru/regions/GetAllProgramsWithRegions?isShowTgu=true&&isVisibleWithoutDirection=true&&withoutEducation=true",
//                                     json: "/files/TGUPO.json"
//                                 }
//                             }, r = {
//                                 operator: "IRPO",
//                                 dropChance: .5,
//                                 DPO: {
//                                     fetch: "https://flowrequests.flow.firpo.info/regions/GetAllProgramsWithRegions?isShowTgu=true&&isVisibleWithoutDirection=true",
//                                     json: "/files/IRPODPO.json"
//                                 },
//                                 PO: {
//                                     fetch: "https://flowrequests.flow.firpo.info/regions/GetAllProgramsWithRegions?isShowTgu=true&&isVisibleWithoutDirection=true&&withoutEducation=true",
//                                     json: "/files/IRPOPO.json"
//                                 }
//                             }, e.next = 10, i(n);
//                         case 10:
//                             return u = e.sent, e.next = 13, i(r);
//                         case 13:
//                             return c = e.sent, e.abrupt("return", [].concat(ft(u), ft(c)));
//                         case 15:
//                         case"end":
//                             return e.stop()
//                     }
//                 }), e)
//             }))), yt.apply(this, arguments)
//         }
//
//         var bt = function () {
//             return yt.apply(this, arguments)
//         };
//
//         function wt(e, t) {
//             (null == t || t > e.length) && (t = e.length);
//             for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
//             return r
//         }
//
//         var St = function (e) {
//             var t = document.getElementById("shortForm");
//             if (t) {
//                 try {
//                     e.length > 0 && (document.querySelector(".monitoring__loader").classList.remove("active"), t.style.display = "block")
//                 } catch (e) {
//                     console.log(e)
//                 }
//                 var n = document.getElementById("shortFormRegions"), r = document.getElementById("shortFormProgram"),
//                     i = document.getElementById("shortCategory"), o = document.getElementById("shortForm-link"), s = "",
//                     a = "", l = e, u = [], c = [], d = [], p = [];
//                 i.onchange = function (e) {
//                     a = e.target.value, h(), f(p)
//                 }, n.onchange = function (e) {
//                     s = e.target.value, u = l.filter((function (e) {
//                         return e.regions.some((function (e) {
//                             return e.regionId == s
//                         }))
//                     }));
//                     var t = structuredClone(u);
//                     d = [], c = [], (d = it(t)).forEach((function (e) {
//                         e.regions.forEach((function (t) {
//                             t.regionId == s && t.link && (e.Redirect = !0)
//                         }))
//                     })), c = d.filter((function (e) {
//                         return e.Redirect
//                     })), h(), f(p)
//                 }, r.onchange = function (e) {
//                     if (e.target.value, "" != a && "" != s) {
//                         var t = Ze(c, e, s);
//                         e.target.options[e.target.selectedIndex].setAttribute("linkrvr", t), o.classList.remove("disabled"), o.href = t, o.addEventListener("click", (function () {
//                             window.yaCounter94760218 && ym(94760218, "reachGoal", "form_short")
//                         }))
//                     }
//                 }
//             }
//
//             function h() {
//                 o.classList.add("disabled"), p = 12 == a ? c.filter((function (e) {
//                     return 1 == e.availableCategories
//                 })) : c, "" != s && "" != a && Qe(n, p, c)
//             }
//
//             function f(e) {
//                 (function (e) {
//                     return function (e) {
//                         if (Array.isArray(e)) return wt(e)
//                     }(e) || function (e) {
//                         if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
//                     }(e) || function (e, t) {
//                         if (e) {
//                             if ("string" == typeof e) return wt(e, t);
//                             var n = Object.prototype.toString.call(e).slice(8, -1);
//                             return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wt(e, t) : void 0
//                         }
//                     }(e) || function () {
//                         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//                     }()
//                 })(r.children).map((function (e, t) {
//                     t > 0 && e.remove()
//                 })), e.forEach((function (e) {
//                     var t = new Option(e.name, e.name, !1, !1);
//                     t.setAttribute("operator", e.operator), t.setAttribute("shortName", e.shortName), t.setAttribute("odinid", e.id), r.append(t)
//                 }))
//             }
//         }, xt = n(421), Et = n.n(xt);
//
//         function _t(e, t) {
//             return function () {
//                 return e.apply(t, arguments)
//             }
//         }
//
//         const {toString: kt} = Object.prototype, {getPrototypeOf: Ct} = Object, At = (Tt = Object.create(null), e => {
//             const t = kt.call(e);
//             return Tt[t] || (Tt[t] = t.slice(8, -1).toLowerCase())
//         });
//         var Tt;
//         const Lt = e => (e = e.toLowerCase(), t => At(t) === e), Pt = e => t => typeof t === e, {isArray: Ot} = Array,
//             It = Pt("undefined"), Mt = Lt("ArrayBuffer"), Ft = Pt("string"), Bt = Pt("function"), Dt = Pt("number"),
//             qt = e => null !== e && "object" == typeof e, Rt = e => {
//                 if ("object" !== At(e)) return !1;
//                 const t = Ct(e);
//                 return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
//             }, jt = Lt("Date"), Nt = Lt("File"), Vt = Lt("Blob"), zt = Lt("FileList"), $t = Lt("URLSearchParams");
//
//         function Ht(e, t, {allOwnKeys: n = !1} = {}) {
//             if (null == e) return;
//             let r, i;
//             if ("object" != typeof e && (e = [e]), Ot(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e); else {
//                 const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
//                 let s;
//                 for (r = 0; r < o; r++) s = i[r], t.call(null, e[s], s, e)
//             }
//         }
//
//         function Gt(e, t) {
//             t = t.toLowerCase();
//             const n = Object.keys(e);
//             let r, i = n.length;
//             for (; i-- > 0;) if (r = n[i], t === r.toLowerCase()) return r;
//             return null
//         }
//
//         const Ut = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
//             Wt = e => !It(e) && e !== Ut,
//             Yt = (Xt = "undefined" != typeof Uint8Array && Ct(Uint8Array), e => Xt && e instanceof Xt);
//         var Xt;
//         const Kt = Lt("HTMLFormElement"), Jt = (({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype),
//             Zt = Lt("RegExp"), Qt = (e, t) => {
//                 const n = Object.getOwnPropertyDescriptors(e), r = {};
//                 Ht(n, ((n, i) => {
//                     !1 !== t(n, i, e) && (r[i] = n)
//                 })), Object.defineProperties(e, r)
//             }, en = "abcdefghijklmnopqrstuvwxyz", tn = "0123456789",
//             nn = {DIGIT: tn, ALPHA: en, ALPHA_DIGIT: en + en.toUpperCase() + tn}, rn = Lt("AsyncFunction");
//         var on = {
//             isArray: Ot,
//             isArrayBuffer: Mt,
//             isBuffer: function (e) {
//                 return null !== e && !It(e) && null !== e.constructor && !It(e.constructor) && Bt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
//             },
//             isFormData: e => {
//                 let t;
//                 return e && ("function" == typeof FormData && e instanceof FormData || Bt(e.append) && ("formdata" === (t = At(e)) || "object" === t && Bt(e.toString) && "[object FormData]" === e.toString()))
//             },
//             isArrayBufferView: function (e) {
//                 let t;
//                 return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Mt(e.buffer), t
//             },
//             isString: Ft,
//             isNumber: Dt,
//             isBoolean: e => !0 === e || !1 === e,
//             isObject: qt,
//             isPlainObject: Rt,
//             isUndefined: It,
//             isDate: jt,
//             isFile: Nt,
//             isBlob: Vt,
//             isRegExp: Zt,
//             isFunction: Bt,
//             isStream: e => qt(e) && Bt(e.pipe),
//             isURLSearchParams: $t,
//             isTypedArray: Yt,
//             isFileList: zt,
//             forEach: Ht,
//             merge: function e() {
//                 const {caseless: t} = Wt(this) && this || {}, n = {}, r = (r, i) => {
//                     const o = t && Gt(n, i) || i;
//                     Rt(n[o]) && Rt(r) ? n[o] = e(n[o], r) : Rt(r) ? n[o] = e({}, r) : Ot(r) ? n[o] = r.slice() : n[o] = r
//                 };
//                 for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && Ht(arguments[e], r);
//                 return n
//             },
//             extend: (e, t, n, {allOwnKeys: r} = {}) => (Ht(t, ((t, r) => {
//                 n && Bt(t) ? e[r] = _t(t, n) : e[r] = t
//             }), {allOwnKeys: r}), e),
//             trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
//             stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
//             inherits: (e, t, n, r) => {
//                 e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {value: t.prototype}), n && Object.assign(e.prototype, n)
//             },
//             toFlatObject: (e, t, n, r) => {
//                 let i, o, s;
//                 const a = {};
//                 if (t = t || {}, null == e) return t;
//                 do {
//                     for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) s = i[o], r && !r(s, e, t) || a[s] || (t[s] = e[s], a[s] = !0);
//                     e = !1 !== n && Ct(e)
//                 } while (e && (!n || n(e, t)) && e !== Object.prototype);
//                 return t
//             },
//             kindOf: At,
//             kindOfTest: Lt,
//             endsWith: (e, t, n) => {
//                 e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
//                 const r = e.indexOf(t, n);
//                 return -1 !== r && r === n
//             },
//             toArray: e => {
//                 if (!e) return null;
//                 if (Ot(e)) return e;
//                 let t = e.length;
//                 if (!Dt(t)) return null;
//                 const n = new Array(t);
//                 for (; t-- > 0;) n[t] = e[t];
//                 return n
//             },
//             forEachEntry: (e, t) => {
//                 const n = (e && e[Symbol.iterator]).call(e);
//                 let r;
//                 for (; (r = n.next()) && !r.done;) {
//                     const n = r.value;
//                     t.call(e, n[0], n[1])
//                 }
//             },
//             matchAll: (e, t) => {
//                 let n;
//                 const r = [];
//                 for (; null !== (n = e.exec(t));) r.push(n);
//                 return r
//             },
//             isHTMLForm: Kt,
//             hasOwnProperty: Jt,
//             hasOwnProp: Jt,
//             reduceDescriptors: Qt,
//             freezeMethods: e => {
//                 Qt(e, ((t, n) => {
//                     if (Bt(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
//                     const r = e[n];
//                     Bt(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
//                         throw Error("Can not rewrite read-only method '" + n + "'")
//                     }))
//                 }))
//             },
//             toObjectSet: (e, t) => {
//                 const n = {}, r = e => {
//                     e.forEach((e => {
//                         n[e] = !0
//                     }))
//                 };
//                 return Ot(e) ? r(e) : r(String(e).split(t)), n
//             },
//             toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function (e, t, n) {
//                 return t.toUpperCase() + n
//             })),
//             noop: () => {
//             },
//             toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t),
//             findKey: Gt,
//             global: Ut,
//             isContextDefined: Wt,
//             ALPHABET: nn,
//             generateString: (e = 16, t = nn.ALPHA_DIGIT) => {
//                 let n = "";
//                 const {length: r} = t;
//                 for (; e--;) n += t[Math.random() * r | 0];
//                 return n
//             },
//             isSpecCompliantForm: function (e) {
//                 return !!(e && Bt(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
//             },
//             toJSONObject: e => {
//                 const t = new Array(10), n = (e, r) => {
//                     if (qt(e)) {
//                         if (t.indexOf(e) >= 0) return;
//                         if (!("toJSON" in e)) {
//                             t[r] = e;
//                             const i = Ot(e) ? [] : {};
//                             return Ht(e, ((e, t) => {
//                                 const o = n(e, r + 1);
//                                 !It(o) && (i[t] = o)
//                             })), t[r] = void 0, i
//                         }
//                     }
//                     return e
//                 };
//                 return n(e, 0)
//             },
//             isAsyncFn: rn,
//             isThenable: e => e && (qt(e) || Bt(e)) && Bt(e.then) && Bt(e.catch)
//         };
//
//         function sn(e, t, n, r, i) {
//             Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i)
//         }
//
//         on.inherits(sn, Error, {
//             toJSON: function () {
//                 return {
//                     message: this.message,
//                     name: this.name,
//                     description: this.description,
//                     number: this.number,
//                     fileName: this.fileName,
//                     lineNumber: this.lineNumber,
//                     columnNumber: this.columnNumber,
//                     stack: this.stack,
//                     config: on.toJSONObject(this.config),
//                     code: this.code,
//                     status: this.response && this.response.status ? this.response.status : null
//                 }
//             }
//         });
//         const an = sn.prototype, ln = {};
//         ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
//             ln[e] = {value: e}
//         })), Object.defineProperties(sn, ln), Object.defineProperty(an, "isAxiosError", {value: !0}), sn.from = (e, t, n, r, i, o) => {
//             const s = Object.create(an);
//             return on.toFlatObject(e, s, (function (e) {
//                 return e !== Error.prototype
//             }), (e => "isAxiosError" !== e)), sn.call(s, e.message, t, n, r, i), s.cause = e, s.name = e.name, o && Object.assign(s, o), s
//         };
//         var un = sn;
//
//         function cn(e) {
//             return on.isPlainObject(e) || on.isArray(e)
//         }
//
//         function dn(e) {
//             return on.endsWith(e, "[]") ? e.slice(0, -2) : e
//         }
//
//         function pn(e, t, n) {
//             return e ? e.concat(t).map((function (e, t) {
//                 return e = dn(e), !n && t ? "[" + e + "]" : e
//             })).join(n ? "." : "") : t
//         }
//
//         const hn = on.toFlatObject(on, {}, null, (function (e) {
//             return /^is[A-Z]/.test(e)
//         }));
//         var fn = function (e, t, n) {
//             if (!on.isObject(e)) throw new TypeError("target must be an object");
//             t = t || new FormData;
//             const r = (n = on.toFlatObject(n, {metaTokens: !0, dots: !1, indexes: !1}, !1, (function (e, t) {
//                     return !on.isUndefined(t[e])
//                 }))).metaTokens, i = n.visitor || u, o = n.dots, s = n.indexes,
//                 a = (n.Blob || "undefined" != typeof Blob && Blob) && on.isSpecCompliantForm(t);
//             if (!on.isFunction(i)) throw new TypeError("visitor must be a function");
//
//             function l(e) {
//                 if (null === e) return "";
//                 if (on.isDate(e)) return e.toISOString();
//                 if (!a && on.isBlob(e)) throw new un("Blob is not supported. Use a Buffer instead.");
//                 return on.isArrayBuffer(e) || on.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
//             }
//
//             function u(e, n, i) {
//                 let a = e;
//                 if (e && !i && "object" == typeof e) if (on.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e); else if (on.isArray(e) && function (e) {
//                     return on.isArray(e) && !e.some(cn)
//                 }(e) || (on.isFileList(e) || on.endsWith(n, "[]")) && (a = on.toArray(e))) return n = dn(n), a.forEach((function (e, r) {
//                     !on.isUndefined(e) && null !== e && t.append(!0 === s ? pn([n], r, o) : null === s ? n : n + "[]", l(e))
//                 })), !1;
//                 return !!cn(e) || (t.append(pn(i, n, o), l(e)), !1)
//             }
//
//             const c = [], d = Object.assign(hn, {defaultVisitor: u, convertValue: l, isVisitable: cn});
//             if (!on.isObject(e)) throw new TypeError("data must be an object");
//             return function e(n, r) {
//                 if (!on.isUndefined(n)) {
//                     if (-1 !== c.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
//                     c.push(n), on.forEach(n, (function (n, o) {
//                         !0 === (!(on.isUndefined(n) || null === n) && i.call(t, n, on.isString(o) ? o.trim() : o, r, d)) && e(n, r ? r.concat(o) : [o])
//                     })), c.pop()
//                 }
//             }(e), t
//         };
//
//         function mn(e) {
//             const t = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"};
//             return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function (e) {
//                 return t[e]
//             }))
//         }
//
//         function gn(e, t) {
//             this._pairs = [], e && fn(e, this, t)
//         }
//
//         const vn = gn.prototype;
//         vn.append = function (e, t) {
//             this._pairs.push([e, t])
//         }, vn.toString = function (e) {
//             const t = e ? function (t) {
//                 return e.call(this, t, mn)
//             } : mn;
//             return this._pairs.map((function (e) {
//                 return t(e[0]) + "=" + t(e[1])
//             }), "").join("&")
//         };
//         var yn = gn;
//
//         function bn(e) {
//             return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
//         }
//
//         function wn(e, t, n) {
//             if (!t) return e;
//             const r = n && n.encode || bn, i = n && n.serialize;
//             let o;
//             if (o = i ? i(t, n) : on.isURLSearchParams(t) ? t.toString() : new yn(t, n).toString(r), o) {
//                 const t = e.indexOf("#");
//                 -1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
//             }
//             return e
//         }
//
//         var Sn = class {
//             constructor() {
//                 this.handlers = []
//             }
//
//             use(e, t, n) {
//                 return this.handlers.push({
//                     fulfilled: e,
//                     rejected: t,
//                     synchronous: !!n && n.synchronous,
//                     runWhen: n ? n.runWhen : null
//                 }), this.handlers.length - 1
//             }
//
//             eject(e) {
//                 this.handlers[e] && (this.handlers[e] = null)
//             }
//
//             clear() {
//                 this.handlers && (this.handlers = [])
//             }
//
//             forEach(e) {
//                 on.forEach(this.handlers, (function (t) {
//                     null !== t && e(t)
//                 }))
//             }
//         }, xn = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1}, En = {
//             isBrowser: !0,
//             classes: {
//                 URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : yn,
//                 FormData: "undefined" != typeof FormData ? FormData : null,
//                 Blob: "undefined" != typeof Blob ? Blob : null
//             },
//             isStandardBrowserEnv: (() => {
//                 let e;
//                 return ("undefined" == typeof navigator || "ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e) && "undefined" != typeof window && "undefined" != typeof document
//             })(),
//             isStandardBrowserWebWorkerEnv: "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
//             protocols: ["http", "https", "file", "blob", "url", "data"]
//         }, _n = function (e) {
//             function t(e, n, r, i) {
//                 let o = e[i++];
//                 const s = Number.isFinite(+o), a = i >= e.length;
//                 return o = !o && on.isArray(r) ? r.length : o, a ? (on.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n, !s) : (r[o] && on.isObject(r[o]) || (r[o] = []), t(e, n, r[o], i) && on.isArray(r[o]) && (r[o] = function (e) {
//                     const t = {}, n = Object.keys(e);
//                     let r;
//                     const i = n.length;
//                     let o;
//                     for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
//                     return t
//                 }(r[o])), !s)
//             }
//
//             if (on.isFormData(e) && on.isFunction(e.entries)) {
//                 const n = {};
//                 return on.forEachEntry(e, ((e, r) => {
//                     t(function (e) {
//                         return on.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
//                     }(e), r, n, 0)
//                 })), n
//             }
//             return null
//         };
//         const kn = {"Content-Type": void 0}, Cn = {
//             transitional: xn,
//             adapter: ["xhr", "http"],
//             transformRequest: [function (e, t) {
//                 const n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = on.isObject(e);
//                 if (i && on.isHTMLForm(e) && (e = new FormData(e)), on.isFormData(e)) return r && r ? JSON.stringify(_n(e)) : e;
//                 if (on.isArrayBuffer(e) || on.isBuffer(e) || on.isStream(e) || on.isFile(e) || on.isBlob(e)) return e;
//                 if (on.isArrayBufferView(e)) return e.buffer;
//                 if (on.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
//                 let o;
//                 if (i) {
//                     if (n.indexOf("application/x-www-form-urlencoded") > -1) return function (e, t) {
//                         return fn(e, new En.classes.URLSearchParams, Object.assign({
//                             visitor: function (e, t, n, r) {
//                                 return En.isNode && on.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
//                             }
//                         }, t))
//                     }(e, this.formSerializer).toString();
//                     if ((o = on.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
//                         const t = this.env && this.env.FormData;
//                         return fn(o ? {"files[]": e} : e, t && new t, this.formSerializer)
//                     }
//                 }
//                 return i || r ? (t.setContentType("application/json", !1), function (e, t, n) {
//                     if (on.isString(e)) try {
//                         return (0, JSON.parse)(e), on.trim(e)
//                     } catch (e) {
//                         if ("SyntaxError" !== e.name) throw e
//                     }
//                     return (0, JSON.stringify)(e)
//                 }(e)) : e
//             }],
//             transformResponse: [function (e) {
//                 const t = this.transitional || Cn.transitional, n = t && t.forcedJSONParsing,
//                     r = "json" === this.responseType;
//                 if (e && on.isString(e) && (n && !this.responseType || r)) {
//                     const n = !(t && t.silentJSONParsing) && r;
//                     try {
//                         return JSON.parse(e)
//                     } catch (e) {
//                         if (n) {
//                             if ("SyntaxError" === e.name) throw un.from(e, un.ERR_BAD_RESPONSE, this, null, this.response);
//                             throw e
//                         }
//                     }
//                 }
//                 return e
//             }],
//             timeout: 0,
//             xsrfCookieName: "XSRF-TOKEN",
//             xsrfHeaderName: "X-XSRF-TOKEN",
//             maxContentLength: -1,
//             maxBodyLength: -1,
//             env: {FormData: En.classes.FormData, Blob: En.classes.Blob},
//             validateStatus: function (e) {
//                 return e >= 200 && e < 300
//             },
//             headers: {common: {Accept: "application/json, text/plain, */*"}}
//         };
//         on.forEach(["delete", "get", "head"], (function (e) {
//             Cn.headers[e] = {}
//         })), on.forEach(["post", "put", "patch"], (function (e) {
//             Cn.headers[e] = on.merge(kn)
//         }));
//         var An = Cn;
//         const Tn = on.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
//             Ln = Symbol("internals");
//
//         function Pn(e) {
//             return e && String(e).trim().toLowerCase()
//         }
//
//         function On(e) {
//             return !1 === e || null == e ? e : on.isArray(e) ? e.map(On) : String(e)
//         }
//
//         function In(e, t, n, r, i) {
//             return on.isFunction(r) ? r.call(this, t, n) : (i && (t = n), on.isString(t) ? on.isString(r) ? -1 !== t.indexOf(r) : on.isRegExp(r) ? r.test(t) : void 0 : void 0)
//         }
//
//         class Mn {
//             constructor(e) {
//                 e && this.set(e)
//             }
//
//             set(e, t, n) {
//                 const r = this;
//
//                 function i(e, t, n) {
//                     const i = Pn(t);
//                     if (!i) throw new Error("header name must be a non-empty string");
//                     const o = on.findKey(r, i);
//                     (!o || void 0 === r[o] || !0 === n || void 0 === n && !1 !== r[o]) && (r[o || t] = On(e))
//                 }
//
//                 const o = (e, t) => on.forEach(e, ((e, n) => i(e, n, t)));
//                 return on.isPlainObject(e) || e instanceof this.constructor ? o(e, t) : on.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()) ? o((e => {
//                     const t = {};
//                     let n, r, i;
//                     return e && e.split("\n").forEach((function (e) {
//                         i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim(), !n || t[n] && Tn[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
//                     })), t
//                 })(e), t) : null != e && i(t, e, n), this
//             }
//
//             get(e, t) {
//                 if (e = Pn(e)) {
//                     const n = on.findKey(this, e);
//                     if (n) {
//                         const e = this[n];
//                         if (!t) return e;
//                         if (!0 === t) return function (e) {
//                             const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
//                             let r;
//                             for (; r = n.exec(e);) t[r[1]] = r[2];
//                             return t
//                         }(e);
//                         if (on.isFunction(t)) return t.call(this, e, n);
//                         if (on.isRegExp(t)) return t.exec(e);
//                         throw new TypeError("parser must be boolean|regexp|function")
//                     }
//                 }
//             }
//
//             has(e, t) {
//                 if (e = Pn(e)) {
//                     const n = on.findKey(this, e);
//                     return !(!n || void 0 === this[n] || t && !In(0, this[n], n, t))
//                 }
//                 return !1
//             }
//
//             delete(e, t) {
//                 const n = this;
//                 let r = !1;
//
//                 function i(e) {
//                     if (e = Pn(e)) {
//                         const i = on.findKey(n, e);
//                         !i || t && !In(0, n[i], i, t) || (delete n[i], r = !0)
//                     }
//                 }
//
//                 return on.isArray(e) ? e.forEach(i) : i(e), r
//             }
//
//             clear(e) {
//                 const t = Object.keys(this);
//                 let n = t.length, r = !1;
//                 for (; n--;) {
//                     const i = t[n];
//                     e && !In(0, this[i], i, e, !0) || (delete this[i], r = !0)
//                 }
//                 return r
//             }
//
//             normalize(e) {
//                 const t = this, n = {};
//                 return on.forEach(this, ((r, i) => {
//                     const o = on.findKey(n, i);
//                     if (o) return t[o] = On(r), void delete t[i];
//                     const s = e ? function (e) {
//                         return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
//                     }(i) : String(i).trim();
//                     s !== i && delete t[i], t[s] = On(r), n[s] = !0
//                 })), this
//             }
//
//             concat(...e) {
//                 return this.constructor.concat(this, ...e)
//             }
//
//             toJSON(e) {
//                 const t = Object.create(null);
//                 return on.forEach(this, ((n, r) => {
//                     null != n && !1 !== n && (t[r] = e && on.isArray(n) ? n.join(", ") : n)
//                 })), t
//             }
//
//             [Symbol.iterator]() {
//                 return Object.entries(this.toJSON())[Symbol.iterator]()
//             }
//
//             toString() {
//                 return Object.entries(this.toJSON()).map((([e, t]) => e + ": " + t)).join("\n")
//             }
//
//             get [Symbol.toStringTag]() {
//                 return "AxiosHeaders"
//             }
//
//             static from(e) {
//                 return e instanceof this ? e : new this(e)
//             }
//
//             static concat(e, ...t) {
//                 const n = new this(e);
//                 return t.forEach((e => n.set(e))), n
//             }
//
//             static accessor(e) {
//                 const t = (this[Ln] = this[Ln] = {accessors: {}}).accessors, n = this.prototype;
//
//                 function r(e) {
//                     const r = Pn(e);
//                     t[r] || (function (e, t) {
//                         const n = on.toCamelCase(" " + t);
//                         ["get", "set", "has"].forEach((r => {
//                             Object.defineProperty(e, r + n, {
//                                 value: function (e, n, i) {
//                                     return this[r].call(this, t, e, n, i)
//                                 }, configurable: !0
//                             })
//                         }))
//                     }(n, e), t[r] = !0)
//                 }
//
//                 return on.isArray(e) ? e.forEach(r) : r(e), this
//             }
//         }
//
//         Mn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), on.freezeMethods(Mn.prototype), on.freezeMethods(Mn);
//         var Fn = Mn;
//
//         function Bn(e, t) {
//             const n = this || An, r = t || n, i = Fn.from(r.headers);
//             let o = r.data;
//             return on.forEach(e, (function (e) {
//                 o = e.call(n, o, i.normalize(), t ? t.status : void 0)
//             })), i.normalize(), o
//         }
//
//         function Dn(e) {
//             return !(!e || !e.__CANCEL__)
//         }
//
//         function qn(e, t, n) {
//             un.call(this, null == e ? "canceled" : e, un.ERR_CANCELED, t, n), this.name = "CanceledError"
//         }
//
//         on.inherits(qn, un, {__CANCEL__: !0});
//         var Rn = qn, jn = En.isStandardBrowserEnv ? {
//             write: function (e, t, n, r, i, o) {
//                 const s = [];
//                 s.push(e + "=" + encodeURIComponent(t)), on.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), on.isString(r) && s.push("path=" + r), on.isString(i) && s.push("domain=" + i), !0 === o && s.push("secure"), document.cookie = s.join("; ")
//             }, read: function (e) {
//                 const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
//                 return t ? decodeURIComponent(t[3]) : null
//             }, remove: function (e) {
//                 this.write(e, "", Date.now() - 864e5)
//             }
//         } : {
//             write: function () {
//             }, read: function () {
//                 return null
//             }, remove: function () {
//             }
//         };
//
//         function Nn(e, t) {
//             return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function (e, t) {
//                 return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
//             }(e, t) : t
//         }
//
//         var Vn = En.isStandardBrowserEnv ? function () {
//             const e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
//             let n;
//
//             function r(n) {
//                 let r = n;
//                 return e && (t.setAttribute("href", r), r = t.href), t.setAttribute("href", r), {
//                     href: t.href,
//                     protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
//                     host: t.host,
//                     search: t.search ? t.search.replace(/^\?/, "") : "",
//                     hash: t.hash ? t.hash.replace(/^#/, "") : "",
//                     hostname: t.hostname,
//                     port: t.port,
//                     pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
//                 }
//             }
//
//             return n = r(window.location.href), function (e) {
//                 const t = on.isString(e) ? r(e) : e;
//                 return t.protocol === n.protocol && t.host === n.host
//             }
//         }() : function () {
//             return !0
//         };
//
//         function zn(e, t) {
//             let n = 0;
//             const r = function (e, t) {
//                 e = e || 10;
//                 const n = new Array(e), r = new Array(e);
//                 let i, o = 0, s = 0;
//                 return t = void 0 !== t ? t : 1e3, function (a) {
//                     const l = Date.now(), u = r[s];
//                     i || (i = l), n[o] = a, r[o] = l;
//                     let c = s, d = 0;
//                     for (; c !== o;) d += n[c++], c %= e;
//                     if (o = (o + 1) % e, o === s && (s = (s + 1) % e), l - i < t) return;
//                     const p = u && l - u;
//                     return p ? Math.round(1e3 * d / p) : void 0
//                 }
//             }(50, 250);
//             return i => {
//                 const o = i.loaded, s = i.lengthComputable ? i.total : void 0, a = o - n, l = r(a);
//                 n = o;
//                 const u = {
//                     loaded: o,
//                     total: s,
//                     progress: s ? o / s : void 0,
//                     bytes: a,
//                     rate: l || void 0,
//                     estimated: l && s && o <= s ? (s - o) / l : void 0,
//                     event: i
//                 };
//                 u[t ? "download" : "upload"] = !0, e(u)
//             }
//         }
//
//         const $n = {
//             http: null, xhr: "undefined" != typeof XMLHttpRequest && function (e) {
//                 return new Promise((function (t, n) {
//                     let r = e.data;
//                     const i = Fn.from(e.headers).normalize(), o = e.responseType;
//                     let s;
//
//                     function a() {
//                         e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s)
//                     }
//
//                     on.isFormData(r) && (En.isStandardBrowserEnv || En.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
//                     let l = new XMLHttpRequest;
//                     if (e.auth) {
//                         const t = e.auth.username || "",
//                             n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
//                         i.set("Authorization", "Basic " + btoa(t + ":" + n))
//                     }
//                     const u = Nn(e.baseURL, e.url);
//
//                     function c() {
//                         if (!l) return;
//                         const r = Fn.from("getAllResponseHeaders" in l && l.getAllResponseHeaders());
//                         !function (e, t, n) {
//                             const r = n.config.validateStatus;
//                             n.status && r && !r(n.status) ? t(new un("Request failed with status code " + n.status, [un.ERR_BAD_REQUEST, un.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
//                         }((function (e) {
//                             t(e), a()
//                         }), (function (e) {
//                             n(e), a()
//                         }), {
//                             data: o && "text" !== o && "json" !== o ? l.response : l.responseText,
//                             status: l.status,
//                             statusText: l.statusText,
//                             headers: r,
//                             config: e,
//                             request: l
//                         }), l = null
//                     }
//
//                     if (l.open(e.method.toUpperCase(), wn(u, e.params, e.paramsSerializer), !0), l.timeout = e.timeout, "onloadend" in l ? l.onloadend = c : l.onreadystatechange = function () {
//                         l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:")) && setTimeout(c)
//                     }, l.onabort = function () {
//                         l && (n(new un("Request aborted", un.ECONNABORTED, e, l)), l = null)
//                     }, l.onerror = function () {
//                         n(new un("Network Error", un.ERR_NETWORK, e, l)), l = null
//                     }, l.ontimeout = function () {
//                         let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
//                         const r = e.transitional || xn;
//                         e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new un(t, r.clarifyTimeoutError ? un.ETIMEDOUT : un.ECONNABORTED, e, l)), l = null
//                     }, En.isStandardBrowserEnv) {
//                         const t = (e.withCredentials || Vn(u)) && e.xsrfCookieName && jn.read(e.xsrfCookieName);
//                         t && i.set(e.xsrfHeaderName, t)
//                     }
//                     void 0 === r && i.setContentType(null), "setRequestHeader" in l && on.forEach(i.toJSON(), (function (e, t) {
//                         l.setRequestHeader(t, e)
//                     })), on.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), o && "json" !== o && (l.responseType = e.responseType), "function" == typeof e.onDownloadProgress && l.addEventListener("progress", zn(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", zn(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = t => {
//                         l && (n(!t || t.type ? new Rn(null, e, l) : t), l.abort(), l = null)
//                     }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
//                     const d = function (e) {
//                         const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
//                         return t && t[1] || ""
//                     }(u);
//                     d && -1 === En.protocols.indexOf(d) ? n(new un("Unsupported protocol " + d + ":", un.ERR_BAD_REQUEST, e)) : l.send(r || null)
//                 }))
//             }
//         };
//         on.forEach($n, ((e, t) => {
//             if (e) {
//                 try {
//                     Object.defineProperty(e, "name", {value: t})
//                 } catch (e) {
//                 }
//                 Object.defineProperty(e, "adapterName", {value: t})
//             }
//         }));
//
//         function Hn(e) {
//             if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Rn(null, e)
//         }
//
//         function Gn(e) {
//             return Hn(e), e.headers = Fn.from(e.headers), e.data = Bn.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), (e => {
//                 e = on.isArray(e) ? e : [e];
//                 const {length: t} = e;
//                 let n, r;
//                 for (let i = 0; i < t && (n = e[i], !(r = on.isString(n) ? $n[n.toLowerCase()] : n)); i++) ;
//                 if (!r) {
//                     if (!1 === r) throw new un(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
//                     throw new Error(on.hasOwnProp($n, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`)
//                 }
//                 if (!on.isFunction(r)) throw new TypeError("adapter is not a function");
//                 return r
//             })(e.adapter || An.adapter)(e).then((function (t) {
//                 return Hn(e), t.data = Bn.call(e, e.transformResponse, t), t.headers = Fn.from(t.headers), t
//             }), (function (t) {
//                 return Dn(t) || (Hn(e), t && t.response && (t.response.data = Bn.call(e, e.transformResponse, t.response), t.response.headers = Fn.from(t.response.headers))), Promise.reject(t)
//             }))
//         }
//
//         const Un = e => e instanceof Fn ? e.toJSON() : e;
//
//         function Wn(e, t) {
//             t = t || {};
//             const n = {};
//
//             function r(e, t, n) {
//                 return on.isPlainObject(e) && on.isPlainObject(t) ? on.merge.call({caseless: n}, e, t) : on.isPlainObject(t) ? on.merge({}, t) : on.isArray(t) ? t.slice() : t
//             }
//
//             function i(e, t, n) {
//                 return on.isUndefined(t) ? on.isUndefined(e) ? void 0 : r(void 0, e, n) : r(e, t, n)
//             }
//
//             function o(e, t) {
//                 if (!on.isUndefined(t)) return r(void 0, t)
//             }
//
//             function s(e, t) {
//                 return on.isUndefined(t) ? on.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
//             }
//
//             function a(n, i, o) {
//                 return o in t ? r(n, i) : o in e ? r(void 0, n) : void 0
//             }
//
//             const l = {
//                 url: o,
//                 method: o,
//                 data: o,
//                 baseURL: s,
//                 transformRequest: s,
//                 transformResponse: s,
//                 paramsSerializer: s,
//                 timeout: s,
//                 timeoutMessage: s,
//                 withCredentials: s,
//                 adapter: s,
//                 responseType: s,
//                 xsrfCookieName: s,
//                 xsrfHeaderName: s,
//                 onUploadProgress: s,
//                 onDownloadProgress: s,
//                 decompress: s,
//                 maxContentLength: s,
//                 maxBodyLength: s,
//                 beforeRedirect: s,
//                 transport: s,
//                 httpAgent: s,
//                 httpsAgent: s,
//                 cancelToken: s,
//                 socketPath: s,
//                 responseEncoding: s,
//                 validateStatus: a,
//                 headers: (e, t) => i(Un(e), Un(t), !0)
//             };
//             return on.forEach(Object.keys(Object.assign({}, e, t)), (function (r) {
//                 const o = l[r] || i, s = o(e[r], t[r], r);
//                 on.isUndefined(s) && o !== a || (n[r] = s)
//             })), n
//         }
//
//         const Yn = {};
//         ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
//             Yn[e] = function (n) {
//                 return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
//             }
//         }));
//         const Xn = {};
//         Yn.transitional = function (e, t, n) {
//             function r(e, t) {
//                 return "[Axios v1.4.0] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
//             }
//
//             return (n, i, o) => {
//                 if (!1 === e) throw new un(r(i, " has been removed" + (t ? " in " + t : "")), un.ERR_DEPRECATED);
//                 return t && !Xn[i] && (Xn[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, o)
//             }
//         };
//         var Kn = {
//             assertOptions: function (e, t, n) {
//                 if ("object" != typeof e) throw new un("options must be an object", un.ERR_BAD_OPTION_VALUE);
//                 const r = Object.keys(e);
//                 let i = r.length;
//                 for (; i-- > 0;) {
//                     const o = r[i], s = t[o];
//                     if (s) {
//                         const t = e[o], n = void 0 === t || s(t, o, e);
//                         if (!0 !== n) throw new un("option " + o + " must be " + n, un.ERR_BAD_OPTION_VALUE)
//                     } else if (!0 !== n) throw new un("Unknown option " + o, un.ERR_BAD_OPTION)
//                 }
//             }, validators: Yn
//         };
//         const Jn = Kn.validators;
//
//         class Zn {
//             constructor(e) {
//                 this.defaults = e, this.interceptors = {request: new Sn, response: new Sn}
//             }
//
//             request(e, t) {
//                 "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = Wn(this.defaults, t);
//                 const {transitional: n, paramsSerializer: r, headers: i} = t;
//                 let o;
//                 void 0 !== n && Kn.assertOptions(n, {
//                     silentJSONParsing: Jn.transitional(Jn.boolean),
//                     forcedJSONParsing: Jn.transitional(Jn.boolean),
//                     clarifyTimeoutError: Jn.transitional(Jn.boolean)
//                 }, !1), null != r && (on.isFunction(r) ? t.paramsSerializer = {serialize: r} : Kn.assertOptions(r, {
//                     encode: Jn.function,
//                     serialize: Jn.function
//                 }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase(), o = i && on.merge(i.common, i[t.method]), o && on.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
//                     delete i[e]
//                 })), t.headers = Fn.concat(o, i);
//                 const s = [];
//                 let a = !0;
//                 this.interceptors.request.forEach((function (e) {
//                     "function" == typeof e.runWhen && !1 === e.runWhen(t) || (a = a && e.synchronous, s.unshift(e.fulfilled, e.rejected))
//                 }));
//                 const l = [];
//                 let u;
//                 this.interceptors.response.forEach((function (e) {
//                     l.push(e.fulfilled, e.rejected)
//                 }));
//                 let c, d = 0;
//                 if (!a) {
//                     const e = [Gn.bind(this), void 0];
//                     for (e.unshift.apply(e, s), e.push.apply(e, l), c = e.length, u = Promise.resolve(t); d < c;) u = u.then(e[d++], e[d++]);
//                     return u
//                 }
//                 c = s.length;
//                 let p = t;
//                 for (d = 0; d < c;) {
//                     const e = s[d++], t = s[d++];
//                     try {
//                         p = e(p)
//                     } catch (e) {
//                         t.call(this, e);
//                         break
//                     }
//                 }
//                 try {
//                     u = Gn.call(this, p)
//                 } catch (e) {
//                     return Promise.reject(e)
//                 }
//                 for (d = 0, c = l.length; d < c;) u = u.then(l[d++], l[d++]);
//                 return u
//             }
//
//             getUri(e) {
//                 return wn(Nn((e = Wn(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
//             }
//         }
//
//         on.forEach(["delete", "get", "head", "options"], (function (e) {
//             Zn.prototype[e] = function (t, n) {
//                 return this.request(Wn(n || {}, {method: e, url: t, data: (n || {}).data}))
//             }
//         })), on.forEach(["post", "put", "patch"], (function (e) {
//             function t(t) {
//                 return function (n, r, i) {
//                     return this.request(Wn(i || {}, {
//                         method: e,
//                         headers: t ? {"Content-Type": "multipart/form-data"} : {},
//                         url: n,
//                         data: r
//                     }))
//                 }
//             }
//
//             Zn.prototype[e] = t(), Zn.prototype[e + "Form"] = t(!0)
//         }));
//         var Qn = Zn;
//
//         class er {
//             constructor(e) {
//                 if ("function" != typeof e) throw new TypeError("executor must be a function.");
//                 let t;
//                 this.promise = new Promise((function (e) {
//                     t = e
//                 }));
//                 const n = this;
//                 this.promise.then((e => {
//                     if (!n._listeners) return;
//                     let t = n._listeners.length;
//                     for (; t-- > 0;) n._listeners[t](e);
//                     n._listeners = null
//                 })), this.promise.then = e => {
//                     let t;
//                     const r = new Promise((e => {
//                         n.subscribe(e), t = e
//                     })).then(e);
//                     return r.cancel = function () {
//                         n.unsubscribe(t)
//                     }, r
//                 }, e((function (e, r, i) {
//                     n.reason || (n.reason = new Rn(e, r, i), t(n.reason))
//                 }))
//             }
//
//             throwIfRequested() {
//                 if (this.reason) throw this.reason
//             }
//
//             subscribe(e) {
//                 this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
//             }
//
//             unsubscribe(e) {
//                 if (!this._listeners) return;
//                 const t = this._listeners.indexOf(e);
//                 -1 !== t && this._listeners.splice(t, 1)
//             }
//
//             static source() {
//                 let e;
//                 return {
//                     token: new er((function (t) {
//                         e = t
//                     })), cancel: e
//                 }
//             }
//         }
//
//         var tr = er;
//         const nr = {
//             Continue: 100,
//             SwitchingProtocols: 101,
//             Processing: 102,
//             EarlyHints: 103,
//             Ok: 200,
//             Created: 201,
//             Accepted: 202,
//             NonAuthoritativeInformation: 203,
//             NoContent: 204,
//             ResetContent: 205,
//             PartialContent: 206,
//             MultiStatus: 207,
//             AlreadyReported: 208,
//             ImUsed: 226,
//             MultipleChoices: 300,
//             MovedPermanently: 301,
//             Found: 302,
//             SeeOther: 303,
//             NotModified: 304,
//             UseProxy: 305,
//             Unused: 306,
//             TemporaryRedirect: 307,
//             PermanentRedirect: 308,
//             BadRequest: 400,
//             Unauthorized: 401,
//             PaymentRequired: 402,
//             Forbidden: 403,
//             NotFound: 404,
//             MethodNotAllowed: 405,
//             NotAcceptable: 406,
//             ProxyAuthenticationRequired: 407,
//             RequestTimeout: 408,
//             Conflict: 409,
//             Gone: 410,
//             LengthRequired: 411,
//             PreconditionFailed: 412,
//             PayloadTooLarge: 413,
//             UriTooLong: 414,
//             UnsupportedMediaType: 415,
//             RangeNotSatisfiable: 416,
//             ExpectationFailed: 417,
//             ImATeapot: 418,
//             MisdirectedRequest: 421,
//             UnprocessableEntity: 422,
//             Locked: 423,
//             FailedDependency: 424,
//             TooEarly: 425,
//             UpgradeRequired: 426,
//             PreconditionRequired: 428,
//             TooManyRequests: 429,
//             RequestHeaderFieldsTooLarge: 431,
//             UnavailableForLegalReasons: 451,
//             InternalServerError: 500,
//             NotImplemented: 501,
//             BadGateway: 502,
//             ServiceUnavailable: 503,
//             GatewayTimeout: 504,
//             HttpVersionNotSupported: 505,
//             VariantAlsoNegotiates: 506,
//             InsufficientStorage: 507,
//             LoopDetected: 508,
//             NotExtended: 510,
//             NetworkAuthenticationRequired: 511
//         };
//         Object.entries(nr).forEach((([e, t]) => {
//             nr[t] = e
//         }));
//         var rr = nr;
//         const ir = function e(t) {
//             const n = new Qn(t), r = _t(Qn.prototype.request, n);
//             return on.extend(r, Qn.prototype, n, {allOwnKeys: !0}), on.extend(r, n, null, {allOwnKeys: !0}), r.create = function (n) {
//                 return e(Wn(t, n))
//             }, r
//         }(An);
//         ir.Axios = Qn, ir.CanceledError = Rn, ir.CancelToken = tr, ir.isCancel = Dn, ir.VERSION = "1.4.0", ir.toFormData = fn, ir.AxiosError = un, ir.Cancel = ir.CanceledError, ir.all = function (e) {
//             return Promise.all(e)
//         }, ir.spread = function (e) {
//             return function (t) {
//                 return e.apply(null, t)
//             }
//         }, ir.isAxiosError = function (e) {
//             return on.isObject(e) && !0 === e.isAxiosError
//         }, ir.mergeConfig = Wn, ir.AxiosHeaders = Fn, ir.formToJSON = e => _n(on.isHTMLForm(e) ? new FormData(e) : e), ir.HttpStatusCode = rr, ir.default = ir;
//         var or = ir;
//
//         function sr(e) {
//             return sr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//                 return typeof e
//             } : function (e) {
//                 return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//             }, sr(e)
//         }
//
//         function ar() {
//             ar = function () {
//                 return e
//             };
//             var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function (e, t, n) {
//                     e[t] = n.value
//                 }, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator",
//                 s = i.asyncIterator || "@@asyncIterator", a = i.toStringTag || "@@toStringTag";
//
//             function l(e, t, n) {
//                 return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
//             }
//
//             try {
//                 l({}, "")
//             } catch (e) {
//                 l = function (e, t, n) {
//                     return e[t] = n
//                 }
//             }
//
//             function u(e, t, n, i) {
//                 var o = t && t.prototype instanceof p ? t : p, s = Object.create(o.prototype), a = new k(i || []);
//                 return r(s, "_invoke", {value: S(e, n, a)}), s
//             }
//
//             function c(e, t, n) {
//                 try {
//                     return {type: "normal", arg: e.call(t, n)}
//                 } catch (e) {
//                     return {type: "throw", arg: e}
//                 }
//             }
//
//             e.wrap = u;
//             var d = {};
//
//             function p() {
//             }
//
//             function h() {
//             }
//
//             function f() {
//             }
//
//             var m = {};
//             l(m, o, (function () {
//                 return this
//             }));
//             var g = Object.getPrototypeOf, v = g && g(g(C([])));
//             v && v !== t && n.call(v, o) && (m = v);
//             var y = f.prototype = p.prototype = Object.create(m);
//
//             function b(e) {
//                 ["next", "throw", "return"].forEach((function (t) {
//                     l(e, t, (function (e) {
//                         return this._invoke(t, e)
//                     }))
//                 }))
//             }
//
//             function w(e, t) {
//                 function i(r, o, s, a) {
//                     var l = c(e[r], e, o);
//                     if ("throw" !== l.type) {
//                         var u = l.arg, d = u.value;
//                         return d && "object" == sr(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function (e) {
//                             i("next", e, s, a)
//                         }), (function (e) {
//                             i("throw", e, s, a)
//                         })) : t.resolve(d).then((function (e) {
//                             u.value = e, s(u)
//                         }), (function (e) {
//                             return i("throw", e, s, a)
//                         }))
//                     }
//                     a(l.arg)
//                 }
//
//                 var o;
//                 r(this, "_invoke", {
//                     value: function (e, n) {
//                         function r() {
//                             return new t((function (t, r) {
//                                 i(e, n, t, r)
//                             }))
//                         }
//
//                         return o = o ? o.then(r, r) : r()
//                     }
//                 })
//             }
//
//             function S(e, t, n) {
//                 var r = "suspendedStart";
//                 return function (i, o) {
//                     if ("executing" === r) throw new Error("Generator is already running");
//                     if ("completed" === r) {
//                         if ("throw" === i) throw o;
//                         return {value: void 0, done: !0}
//                     }
//                     for (n.method = i, n.arg = o; ;) {
//                         var s = n.delegate;
//                         if (s) {
//                             var a = x(s, n);
//                             if (a) {
//                                 if (a === d) continue;
//                                 return a
//                             }
//                         }
//                         if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
//                             if ("suspendedStart" === r) throw r = "completed", n.arg;
//                             n.dispatchException(n.arg)
//                         } else "return" === n.method && n.abrupt("return", n.arg);
//                         r = "executing";
//                         var l = c(e, t, n);
//                         if ("normal" === l.type) {
//                             if (r = n.done ? "completed" : "suspendedYield", l.arg === d) continue;
//                             return {value: l.arg, done: n.done}
//                         }
//                         "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
//                     }
//                 }
//             }
//
//             function x(e, t) {
//                 var n = t.method, r = e.iterator[n];
//                 if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
//                 var i = c(r, e.iterator, t.arg);
//                 if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, d;
//                 var o = i.arg;
//                 return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
//             }
//
//             function E(e) {
//                 var t = {tryLoc: e[0]};
//                 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
//             }
//
//             function _(e) {
//                 var t = e.completion || {};
//                 t.type = "normal", delete t.arg, e.completion = t
//             }
//
//             function k(e) {
//                 this.tryEntries = [{tryLoc: "root"}], e.forEach(E, this), this.reset(!0)
//             }
//
//             function C(e) {
//                 if (e || "" === e) {
//                     var t = e[o];
//                     if (t) return t.call(e);
//                     if ("function" == typeof e.next) return e;
//                     if (!isNaN(e.length)) {
//                         var r = -1, i = function t() {
//                             for (; ++r < e.length;) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
//                             return t.value = void 0, t.done = !0, t
//                         };
//                         return i.next = i
//                     }
//                 }
//                 throw new TypeError(sr(e) + " is not iterable")
//             }
//
//             return h.prototype = f, r(y, "constructor", {value: f, configurable: !0}), r(f, "constructor", {
//                 value: h,
//                 configurable: !0
//             }), h.displayName = l(f, a, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
//                 var t = "function" == typeof e && e.constructor;
//                 return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
//             }, e.mark = function (e) {
//                 return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, a, "GeneratorFunction")), e.prototype = Object.create(y), e
//             }, e.awrap = function (e) {
//                 return {__await: e}
//             }, b(w.prototype), l(w.prototype, s, (function () {
//                 return this
//             })), e.AsyncIterator = w, e.async = function (t, n, r, i, o) {
//                 void 0 === o && (o = Promise);
//                 var s = new w(u(t, n, r, i), o);
//                 return e.isGeneratorFunction(n) ? s : s.next().then((function (e) {
//                     return e.done ? e.value : s.next()
//                 }))
//             }, b(y), l(y, a, "Generator"), l(y, o, (function () {
//                 return this
//             })), l(y, "toString", (function () {
//                 return "[object Generator]"
//             })), e.keys = function (e) {
//                 var t = Object(e), n = [];
//                 for (var r in t) n.push(r);
//                 return n.reverse(), function e() {
//                     for (; n.length;) {
//                         var r = n.pop();
//                         if (r in t) return e.value = r, e.done = !1, e
//                     }
//                     return e.done = !0, e
//                 }
//             }, e.values = C, k.prototype = {
//                 constructor: k, reset: function (e) {
//                     if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
//                 }, stop: function () {
//                     this.done = !0;
//                     var e = this.tryEntries[0].completion;
//                     if ("throw" === e.type) throw e.arg;
//                     return this.rval
//                 }, dispatchException: function (e) {
//                     if (this.done) throw e;
//                     var t = this;
//
//                     function r(n, r) {
//                         return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
//                     }
//
//                     for (var i = this.tryEntries.length - 1; i >= 0; --i) {
//                         var o = this.tryEntries[i], s = o.completion;
//                         if ("root" === o.tryLoc) return r("end");
//                         if (o.tryLoc <= this.prev) {
//                             var a = n.call(o, "catchLoc"), l = n.call(o, "finallyLoc");
//                             if (a && l) {
//                                 if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
//                                 if (this.prev < o.finallyLoc) return r(o.finallyLoc)
//                             } else if (a) {
//                                 if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
//                             } else {
//                                 if (!l) throw new Error("try statement without catch or finally");
//                                 if (this.prev < o.finallyLoc) return r(o.finallyLoc)
//                             }
//                         }
//                     }
//                 }, abrupt: function (e, t) {
//                     for (var r = this.tryEntries.length - 1; r >= 0; --r) {
//                         var i = this.tryEntries[r];
//                         if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
//                             var o = i;
//                             break
//                         }
//                     }
//                     o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
//                     var s = o ? o.completion : {};
//                     return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(s)
//                 }, complete: function (e, t) {
//                     if ("throw" === e.type) throw e.arg;
//                     return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
//                 }, finish: function (e) {
//                     for (var t = this.tryEntries.length - 1; t >= 0; --t) {
//                         var n = this.tryEntries[t];
//                         if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), d
//                     }
//                 }, catch: function (e) {
//                     for (var t = this.tryEntries.length - 1; t >= 0; --t) {
//                         var n = this.tryEntries[t];
//                         if (n.tryLoc === e) {
//                             var r = n.completion;
//                             if ("throw" === r.type) {
//                                 var i = r.arg;
//                                 _(n)
//                             }
//                             return i
//                         }
//                     }
//                     throw new Error("illegal catch attempt")
//                 }, delegateYield: function (e, t, n) {
//                     return this.delegate = {
//                         iterator: C(e),
//                         resultName: t,
//                         nextLoc: n
//                     }, "next" === this.method && (this.arg = void 0), d
//                 }
//             }, e
//         }
//
//         function lr(e, t) {
//             var n = Object.keys(e);
//             if (Object.getOwnPropertySymbols) {
//                 var r = Object.getOwnPropertySymbols(e);
//                 t && (r = r.filter((function (t) {
//                     return Object.getOwnPropertyDescriptor(e, t).enumerable
//                 }))), n.push.apply(n, r)
//             }
//             return n
//         }
//
//         function ur(e) {
//             for (var t = 1; t < arguments.length; t++) {
//                 var n = null != arguments[t] ? arguments[t] : {};
//                 t % 2 ? lr(Object(n), !0).forEach((function (t) {
//                     cr(e, t, n[t])
//                 })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lr(Object(n)).forEach((function (t) {
//                     Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
//                 }))
//             }
//             return e
//         }
//
//         function cr(e, t, n) {
//             return (t = function (e) {
//                 var t = function (e, t) {
//                     if ("object" !== sr(e) || null === e) return e;
//                     var n = e[Symbol.toPrimitive];
//                     if (void 0 !== n) {
//                         var r = n.call(e, "string");
//                         if ("object" !== sr(r)) return r;
//                         throw new TypeError("@@toPrimitive must return a primitive value.")
//                     }
//                     return String(e)
//                 }(e);
//                 return "symbol" === sr(t) ? t : String(t)
//             }(t)) in e ? Object.defineProperty(e, t, {
//                 value: n,
//                 enumerable: !0,
//                 configurable: !0,
//                 writable: !0
//             }) : e[t] = n, e
//         }
//
//         function dr(e) {
//             return function (e) {
//                 if (Array.isArray(e)) return pr(e)
//             }(e) || function (e) {
//                 if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
//             }(e) || function (e, t) {
//                 if (e) {
//                     if ("string" == typeof e) return pr(e, t);
//                     var n = Object.prototype.toString.call(e).slice(8, -1);
//                     return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pr(e, t) : void 0
//                 }
//             }(e) || function () {
//                 throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
//             }()
//         }
//
//         function pr(e, t) {
//             (null == t || t > e.length) && (t = e.length);
//             for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
//             return r
//         }
//
//         function hr(e, t, n, r, i, o, s) {
//             try {
//                 var a = e[o](s), l = a.value
//             } catch (e) {
//                 return void n(e)
//             }
//             a.done ? t(l) : Promise.resolve(l).then(r, i)
//         }
//
//         function fr(e) {
//             return function () {
//                 var t = this, n = arguments;
//                 return new Promise((function (r, i) {
//                     var o = e.apply(t, n);
//
//                     function s(e) {
//                         hr(o, r, i, s, a, "next", e)
//                     }
//
//                     function a(e) {
//                         hr(o, r, i, s, a, "throw", e)
//                     }
//
//                     s(void 0)
//                 }))
//             }
//         }
//
//         var mr = function () {
//             var e = "", t = "https://flowrequests.flow.firpo.info/citizenrequest/InternalNewRequest",
//                 n = "https://2024.api.tgu-dpo.ru/citizenrequest/InternalNewRequest",
//                 r = "/files/documents/Instruction_TGU.pdf", i = "/files/documents/Instruction_irpo.pdf";
//
//             function o() {
//                 var e = document.querySelector(".form__info-change");
//                 e && (innerWidth > 996 ? e.innerHTML = "справа" : e.innerHTML = "снизу")
//             }
//
//             var s = {
//                 requried: function (e, t) {
//                     return !(!e || 0 === e.length) || (t.message = "Это поле обязательно", !1)
//                 }, phone: function (e, t) {
//                     return 18 === e.length || (t.message = "Некорректный номер", !1)
//                 }, email: function (e, t) {
//                     return !!/.+@.+\..+/.test(e) || (t.message = "Некорректный email", !1)
//                 }, birthday: function (e, t) {
//                     var n = e.split(".");
//                     return 3 == n.length && 2 == n[0].length && 2 == n[1].length && 4 == n[2].length || (t.message = "Некорректная дата рождения", !1)
//                 }
//             };
//
//             function a(e, t) {
//                 if (e.message) {
//                     var n = document.createElement("div");
//                     n.textContent = e.message, n.classList.add("form-error"), t.appendChild(n)
//                 }
//             }
//
//             function l(e) {
//                 e.querySelectorAll(".form-error").forEach((function (e) {
//                     e.remove()
//                 })), e.querySelectorAll(".form-invalid").forEach((function (e) {
//                     e.classList.remove("form-invalid")
//                 }))
//             }
//
//             function u(e) {
//                 var t = !0;
//                 Array.from(e.querySelectorAll(".form__field")).forEach((function (e) {
//                     var n = {}, r = e.querySelector("select, input, textarea");
//                     if (e.querySelector(".form-required") && !s.requried(r.value, n)) return a(n, e), r.classList.add("form-invalid"), void (t = !1);
//                     "phone" === r.id && (s.phone(r.value, n) || (a(n, e), r.classList.add("form-invalid"), t = !1)), "email" === r.id && (s.email(r.value, n) || (a(n, e), r.classList.add("form-invalid"), t = !1)), "birthday" === r.id && (s.birthday(r.value, n) || (a(n, e), r.classList.add("form-invalid"), t = !1))
//                 }));
//                 var n = document.querySelector(".form-invalid");
//                 return n && n.scrollIntoView({behavior: "smooth", block: "center"}), t
//             }
//
//             function c(e) {
//                 for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), r = 0; r < n.length; r++) {
//                     for (var i = n[r]; " " === i.charAt(0);) i = i.substring(1);
//                     if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
//                 }
//                 return ""
//             }
//
//             function d(e, t, n) {
//                 return p.apply(this, arguments)
//             }
//
//             function p() {
//                 return p = fr(ar().mark((function r(i, o, s) {
//                     var a, d, p, h, f, m, g, v, y, w, S, x, E = arguments;
//                     return ar().wrap((function (r) {
//                         for (; ;) switch (r.prev = r.next) {
//                             case 0:
//                                 if (p = E.length > 3 && void 0 !== E[3] && E[3], h = i.querySelector('button[type="submit"], input[type="submit"]'), f = {}, !s) {
//                                     r.next = 6;
//                                     break
//                                 }
//                                 f = ur({}, s), r.next = 12;
//                                 break;
//                             case 6:
//                                 if (o.preventDefault(), l(i), f = {}, u(i)) {
//                                     r.next = 11;
//                                     break
//                                 }
//                                 return r.abrupt("return");
//                             case 11:
//                                 Array.from(new FormData(i)).forEach((function (e) {
//                                     var t = e[0], n = e[1];
//                                     "BirthDate" == t ? f[t] = n.split(".").reverse().join("-") : "Region" == t ? (f[t] = T("#Regions option", n), f.RegionId = n) : f[t] = n
//                                 }));
//                             case 12:
//                                 h.disabled = !0, m = document.location.href, (g = m.indexOf("?")) > -1 && m.slice(g + 1, m.length).split("&").map((function (e) {
//                                     return e.split("=")
//                                 })).forEach((function (e) {
//                                     var t = e[0];
//                                     t = t[0].toUpperCase() + t.slice(1, t.length);
//                                     var n = e[1];
//                                     n = n.indexOf("#") > -1 ? n.slice(0, n.indexOf("#")) : n, f[t] = n
//                                 })), f.Landing = m.split("?")[0] || m, v = null === (a = document.querySelector("#Program")) || void 0 === a ? void 0 : a.children, y = i.querySelector(".program-hidden"), w = null === (d = document.querySelector("#Program-modal")) || void 0 === d ? void 0 : d.children, v && w ? [].concat(dr(v), dr(w)).forEach((function (e) {
//                                     f.Program == e.value && (f.Operator = e.getAttribute("operator"), f.ProgramOwner = e.getAttribute("programowner"), "undefined" != e.getAttribute("linkrvr") && (f.LinkRVR = e.getAttribute("linkrvr"), f.OdinId = e.getAttribute("odinid")))
//                                 })) : v && !y ? dr(v).forEach((function (e) {
//                                     f.Program == e.value && (f.Operator = e.getAttribute("operator"), f.ProgramOwner = e.getAttribute("programowner"), "undefined" != e.getAttribute("linkrvr") && (f.LinkRVR = e.getAttribute("linkrvr"), f.OdinId = e.getAttribute("odinid")))
//                                 })) : 1 == p ? f.Operator = "TGU" : (f.Operator = y.getAttribute("operator"), f.ProgramOwner = y.getAttribute("programowner"), "undefined" != y.getAttribute("linkrvr") && (f.LinkRVR = y.getAttribute("linkrvr"), f.OdinId = y.getAttribute("odinid"))), null == f.OdinId && (f.OdinId = null), c("utm_tags") && c("utm_tags").slice(g + 1, c("utm_tags").length).split("&").map((function (e) {
//                                     return e.split("=")
//                                 })).forEach((function (e) {
//                                     var t = e[0];
//                                     t = t[0].toUpperCase() + t.slice(1, t.length);
//                                     var n = e[1];
//                                     n = n.indexOf("#") > -1 ? n.slice(0, n.indexOf("#")) : n, f[t] = n
//                                 })), S = c("advcake_track_id"), void 0, (_ = c("_ym_uid")) && (sessionStorage.setItem("ym_uid", _), f.ClientId = _), function () {
//                                     for (var e = document.cookie.split("; "), t = 0; t < e.length; t++) for (var n = window.location.hostname.split("."); n.length > 0;) {
//                                         var r = encodeURIComponent(e[t].split(";")[0].split("=")[0]) + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" + n.join(".") + " ;path=",
//                                             i = location.pathname.split("/");
//                                         for (document.cookie = r + "/"; i.length > 0;) document.cookie = r + i.join("/"), i.pop();
//                                         n.shift()
//                                     }
//                                 }(), "TGU" == f.Operator ? (window.roistatCookieDomain = "tg.edu-sigma.ru", function (e, t, n, r, i) {
//                                     e.roistatProjectId = i, e.roistatHost = r;
//                                     var o = "https:" == t.location.protocol ? "https://" : "http://",
//                                         s = /^.*roistat_visit=[^;]+(.*)?$/.test(t.cookie) ? "/dist/module.js" : "/api/site/1.0/" + i + "/init?referrer=" + encodeURIComponent(t.location.href),
//                                         a = t.createElement(n);
//                                     a.charset = "UTF-8", a.async = 1, a.src = o + r + s;
//                                     var l = t.getElementsByTagName(n)[0];
//                                     l.parentNode.insertBefore(a, l)
//                                 }(window, document, "script", "cloud.roistat.com", "6b9e81bfb265b61d916b41337bfb63fc"), e = n) : (window.roistatCookieDomain = "tg.edu-sigma.ru", function (e, t, n, r, i) {
//                                     e.roistatProjectId = i, e.roistatHost = r;
//                                     var o = "https:" == t.location.protocol ? "https://" : "http://",
//                                         s = /^.*roistat_visit=[^;]+(.*)?$/.test(t.cookie) ? "/dist/module.js" : "/api/site/1.0/" + i + "/init?referrer=" + encodeURIComponent(t.location.href),
//                                         a = t.createElement(n);
//                                     a.charset = "UTF-8", a.async = 1, a.src = o + r + s;
//                                     var l = t.getElementsByTagName(n)[0];
//                                     l.parentNode.insertBefore(a, l)
//                                 }(window, document, "script", "cloud.roistat.com", "10c19597b77d6b93b655d42f52aaff69"), e = t), x = setInterval((function () {
//                                     var t = c("roistat_visit");
//                                     t && (clearInterval(x), t && (f.RoistatCookie = t), or.post(e, f).then((function (e) {
//                                         h.disabled = !1, b(f), VK.Goal("lead"), fbq("track", "Lead"), VK.Retargeting.Event("lead"), "quiz-form" == i.id ? ym(94760218, "reachGoal", "qwiz_submit_form") : ym(94760218, "reachGoal", "submit_form"), (window._tmr || (window._tmr = [])).push({
//                                             id: "3244339",
//                                             type: "reachGoal",
//                                             goal: "lead"
//                                         }), P(e.data.requestId, e.data.odinId, e.data.programName, f.Email, S), i.reset()
//                                     })).catch((function (e) {
//                                         console.log(e), h.disabled = !1, Et().error("Пожалуйста, проверьте ваше соединение с сетью или повторите попытку позже", {
//                                             duration: 3e3,
//                                             fadeDuration: 500
//                                         })
//                                     })))
//                                 }), 100);
//                             case 25:
//                             case"end":
//                                 return r.stop()
//                         }
//                         var _
//                     }), r)
//                 }))), p.apply(this, arguments)
//             }
//
//             function h(e) {
//                 var t = document.querySelector(e);
//                 t && (t.addEventListener("submit", (function (e) {
//                     d(t, e)
//                 })), function (e, t) {
//                     var n = e.querySelectorAll("input, select, textarea"), r = !1;
//                     n.forEach((function (e) {
//                         $(e).one("blur", (function (e) {
//                             r || (ym(94760218, "reachGoal", "FormStart"), fbq("track", "InitiateCheckout"), r = !0)
//                         }))
//                     }))
//                 }(t))
//             }
//
//             function f(e, t) {
//                 try {
//                     e.forEach((function (n) {
//                         n.addEventListener("change", (function () {
//                             e.find((function (e) {
//                                 return !e.checked
//                             })) ? t.setAttribute("disabled", "disabled") : t.removeAttribute("disabled")
//                         }))
//                     }))
//                 } catch (e) {
//                 }
//             }
//
//             function m() {
//                 return (m = fr(ar().mark((function e() {
//                     var t, n, r;
//                     return ar().wrap((function (e) {
//                         for (; ;) switch (e.prev = e.next) {
//                             case 0:
//                                 return e.prev = 0, t = function (e) {
//                                     var t = $(e);
//                                     r.forEach((function (e) {
//                                         var n = new Option(e.name, e.id, !1, !1);
//                                         n.accessKey = e.id, t.append(n)
//                                     })), t.val(null), t.select2({placeholder: "Ваш регион"})
//                                 }, e.next = 4, fetch("https://2024.api.tgu-dpo.ru/regions/GetRegions");
//                             case 4:
//                                 return n = e.sent, e.next = 7, n.json();
//                             case 7:
//                                 r = e.sent, t("#Regions"), t("#Regions-modal"), t("#shortFormRegions"), e.next = 16;
//                                 break;
//                             case 13:
//                                 e.prev = 13, e.t0 = e.catch(0), console.log(e.t0);
//                             case 16:
//                             case"end":
//                                 return e.stop()
//                         }
//                     }), e, null, [[0, 13]])
//                 })))).apply(this, arguments)
//             }
//
//             var g = [], v = [];
//
//             function y() {
//                 return (y = fr(ar().mark((function e() {
//                     return ar().wrap((function (e) {
//                         for (; ;) switch (e.prev = e.next) {
//                             case 0:
//                                 return e.next = 2, S("https://flowrequests.flow.firpo.info/regions/GetTop5ForRegions");
//                             case 2:
//                                 return g = e.sent, e.next = 5, S("https://2024.api.tgu-dpo.ru/regions/GetTop5ForRegions");
//                             case 5:
//                                 v = e.sent;
//                             case 6:
//                             case"end":
//                                 return e.stop()
//                         }
//                     }), e)
//                 })))).apply(this, arguments)
//             }
//
//             function b() {
//                 var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
//                 null !== e && ("12" == e.category ? w(e.Operator) : e.LinkRVR && "undefined" !== e.LinkRVR ? function (e, t) {
//                     var n = document.querySelector(".success__modal"),
//                         o = document.querySelector(".success__modal-open"), s = "";
//                     s = "TGU" == t ? r : i, n || ((n = document.createElement("div")).classList.add("success__modal", "custom-modal__hidden"), n.id = "success__modal", document.body.append(n)), n.innerHTML = '\n      <h4>Поздравляем с&nbsp;успешной регистрацией!</h4>\n      <p class="note"><b>Ваша заявка одобрена и&nbsp;допущена до&nbsp;участия</b></p>\n      <div>\n        <p><b>Обращаем внимание:</b> вы записаны на&nbsp;выбранную программу.<br> Сейчас вам необходимо подтвердить зачисление в&nbsp;группу обучения.</p>\n        <p><b>ВАЖНО:</b> необходимо подтвердить заявку на&nbsp;портале &laquo;Работа России&raquo; в&nbsp;течение 3&nbsp;дней&nbsp;&mdash; не&nbsp;подтвердившие заявку на&nbsp;портале &laquo;Работа России&raquo; не&nbsp;смогут принять участие в&nbsp;2024&nbsp;году.</p>\n        <p style="margin-bottom: 0;"><b>Вы будете перенаправлены на&nbsp;портал «Работа России», где вам нужно:</b></p>\n        <ul style="list-style: none">\n          <li><b>1.</b> Выбрать вашу программу обучения.</li>\n          <li><b>2.</b> Авторизоваться через вашу учетную запись Госуслуг. <a class="success__modal-link" href="https://www.gosuslugi.ru/" target="_blank"><b class="note">(ссылка)</b></a>\n          <li><b>3.</b> Подписаться на&nbsp;нас в&nbsp;Telegram, чтобы не&nbsp;пропустить старт обучения вашей группы.</li>\n        </ul>\n        <div class="success__modal-bottom">\n          <a href='.concat(s, ' class="btn" download>Скачать</a>\n          <p>Мы&nbsp;подготовили для&nbsp;вас инструкцию о&nbsp;том, как подтвердить заявку!</p>\n        </div>\n        <p>По&nbsp;всем вопросам просьба писать на&nbsp;почту <a class="success__modal-link" href="mailto:infosz@edu-sigma.ru" target="_blank"><b class="note">infosz@edu-sigma.ru</b></a></p>\n        <p class="сountdown">\n          Через <strong><span class="timer">15</span> секунд</strong> вы будете автоматически перенаправлены на&nbsp;портал <a class="success__modal-link timer" href="').concat(e, '" target="_blank"><b class="note">«Работа России»</b></a>\n        </p>\n      </div>\n    '), function (e) {
//                         if (e) var t = setInterval((function () {
//                             "0" === e.textContent || Number(e.textContent) < 1 ? clearInterval(t) : e.textContent = Number(e.textContent) - 1
//                         }), 1e3); else console.error("Не передан элемент")
//                     }(n.querySelector(".timer")), o || ((o = document.createElement("button")).classList.add("success__modal-open"), o.setAttribute("data-modal-id", "success__modal"), o.setAttribute("data-modal-open", ""), o.style.display = "none", document.body.append(o)), o.click(), document.querySelector(".custom-modal-close").style.display = "none", document.querySelector(".custom-modal__overlay").style.pointerEvents = "none", setTimeout((function () {
//                         var t = window.open(e, "_blank");
//                         t ? t.focus() : window.location.assign(e)
//                     }), 15e3), Ge()
//                 }(e.LinkRVR, e.Operator) : function (e, t) {
//                     var n = [];
//                     if ("TGU" == e ? v.forEach((function (e) {
//                         e.regionId == t && (n = e.programsSuggestions)
//                     })) : g.forEach((function (e) {
//                         e.regionId == t && (n = e.programsSuggestions)
//                     })), n.length < 1) w(e, !1); else {
//                         var r = document.querySelector(".ProgramsModal__btn"), i = document.createElement("div"),
//                             o = document.querySelector(".modal-programs");
//                         o && o.remove(), r || ((r = document.createElement("button")).setAttribute("data-modal-open", ""), r.setAttribute("data-modal-id", "ProgramsModal"), r.classList.add("ProgramsModal__btn"), r.style.display = "none", document.body.append(r)), i.classList.add("custom-modal__hidden", "modal-programs"), i.id = "ProgramsModal", i.innerHTML = '<div class="modal-programs__content">\n      <h3>К сожалению, в вашем регионе программа не&nbsp;реализуется</h3>\n      <p>Но вы все еще можете пройти <strong>бесплатное обучение</strong>\n      и получить помощь в старте карьеры по другим программам. Вот какие программы доступны в вашем регионе:</p>\n      <div class="modal-programs__links"></div>\n      </div>', document.body.append(i), n.forEach((function (e) {
//                             document.querySelector(".modal-programs__links").innerHTML += '\n          <a href="'.concat(e.rvrLink, '" target="_blank">').concat(e.programName, "</a>\n        ")
//                         })), r.click(), r.remove()
//                     }
//                 }(e.Operator, e.RegionId))
//             }
//
//             function w(e) {
//                 var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
//                     n = document.querySelector(".success__modal"), r = document.querySelector(".success__modal-open");
//                 n || ((n = document.createElement("div")).classList.add("success__modal", "custom-modal__hidden"), n.id = "success__modal", document.body.append(n)), n.innerHTML = t ? '\n        <h4>Благодарим за&nbsp;заявку!</h4>\n        <p><b class="note">Ваша заявка одобрена</b></p>\n        <p>Для зачисления на обучение вам необходимо:</p>\n        <ol class="success__modal__list">\n          <li><span><b>добавить резюме</b> на&nbsp;портале <b>&laquo;Работа России&raquo;</b> (это необходимое условие, которое не&nbsp;призывает вас менять работодателя);</span></li>\n          <li><span><b>создать заявление</b>, прикрепить к&nbsp;нему резюме и&nbsp;дождаться одобрения;</span></li>\n          <li><span><b>подтвердить заявку</b> на&nbsp;обучение на&nbsp;портале &laquo;Работа России&raquo;;</span></li>\n          <li><span><b>загрузить документы</b> в&nbsp;Личный кабинет гражданина;</span></li>\n          <li><span><b>предоставить документы</b>, подтверждающие категорию участника, в&nbsp;Центр занятости населения.</span></li>\n        </ol>\n        <div class="success__modal__accent">\n          <div class="success__modal__accent-content">\n            <p><b>Важно:</b> на&nbsp;указанную почту мы&nbsp;пришлем подробности и&nbsp;понятные <b>инструкции</b>, которые помогут пройти все шаги до&nbsp;зачисления на&nbsp;программу. Используйте&nbsp;их, чтобы начать обучение в&nbsp;ближайшей группе. <b>Не&nbsp;забывайте проверять папку &laquo;Спам&raquo;</b>.</p>\n          </div>\n        </div>\n        <div class="success__modal-bottom">\n          <a href="https://t.me/TGUinfoBot" class="btn TelegramClickSZ '.concat("TGU" == e ? "TelegramBotClick" : "", '" rel="nofollow noopener noreferrer" target="_blank">Подписаться на нас</a>\n          <p>Рекомендуем перейти в&nbsp;наш <a class="TelegramClickSZ ').concat("TGU" == e ? "TelegramBotClick" : "", '" href="https://t.me/TGUinfoBot" rel="nofollow noopener noreferrer" target="_blank">Telegram-бот</a>, чтобы получать уведомления и&nbsp;актуальную информацию о&nbsp;проекте</p>\n        </div>\n      ') : '\n        <h4>Благодарим за&nbsp;заявку!</h4>\n        <div class="success__modal__accent">\n          <div class="success__modal__accent-content">\n          <p><b>Важно:</b> на&nbsp;указанную почту мы&nbsp;пришлем подробности и&nbsp;понятные <b>инструкции</b>, которые помогут пройти все шаги до&nbsp;зачисления на&nbsp;программу. Используйте&nbsp;их, чтобы начать обучение в&nbsp;ближайшей группе. <b>Не&nbsp;забывайте проверять папку &laquo;Спам&raquo;</b>.</p>\n          </div>\n        </div>\n        <div class="success__modal-bottom">\n          <a href="https://t.me/TGUinfoBot" class="btn TelegramClickSZ '.concat("TGU" == e ? "TelegramBotClick" : "", '" rel="nofollow noopener noreferrer" target="_blank">Подписаться на нас</a>\n          <p>Рекомендуем перейти в&nbsp;наш <a class="TelegramClickSZ ').concat("TGU" == e ? "TelegramBotClick" : "", '" href="https://t.me/TGUinfoBot" rel="nofollow noopener noreferrer" target="_blank">Telegram-бот</a>, чтобы получать уведомления и&nbsp;актуальную информацию о&nbsp;проекте</p>\n        </div>\n      '), r || ((r = document.createElement("button")).classList.add("success__modal-open"), r.setAttribute("data-modal-id", "success__modal"), r.setAttribute("data-modal-open", ""), r.style.display = "none", document.body.append(r)), r.click(), Ge()
//             }
//
//             function S(e) {
//                 return x.apply(this, arguments)
//             }
//
//             function x() {
//                 return (x = fr(ar().mark((function e(t) {
//                     var n, r;
//                     return ar().wrap((function (e) {
//                         for (; ;) switch (e.prev = e.next) {
//                             case 0:
//                                 return e.next = 2, fetch(t);
//                             case 2:
//                                 return n = e.sent, e.next = 5, n.json();
//                             case 5:
//                                 return r = e.sent, e.abrupt("return", r);
//                             case 7:
//                             case"end":
//                                 return e.stop()
//                         }
//                     }), e)
//                 })))).apply(this, arguments)
//             }
//
//             var E, _, k, C = document.getElementById("phone"), A = document.getElementById("phone-modal");
//
//             function T(e, t) {
//                 for (var n = document.querySelectorAll(e), r = 0; r < n.length; r++) if (t == n[r].value) return n[r].textContent
//             }
//
//             function L(e, t) {
//                 var n = document.querySelectorAll(e), r = {};
//                 return dr(n).forEach((function (e) {
//                     Array.from(new FormData(e)).forEach((function (e) {
//                         var n = e[0], i = e[1];
//                         "BirthDate" == n ? r[n] = i.split(".").reverse().join("-") : "Region" == n ? "#Regions-quiz" == t ? r[n] = i : (r[n] = T("#Regions-modal option", i), r.RegionId = i) : r[n] = i
//                     })), e.reset()
//                 })), r
//             }
//
//             function P(e, t, n, r, i) {
//                 var o = document.location.href;
//                 window.advcake_data = window.advcake_data || [], window.advcake_data.push({
//                     pageType: 6,
//                     user: {email: "md5(".concat(r, ")"), type: ""},
//                     leadInfo: {
//                         id: "".concat(e),
//                         leadid: "".concat(t),
//                         name: "".concat(n),
//                         totalPrice: 0,
//                         coupon: "",
//                         marketing_cat: 1,
//                         trackId: "".concat(i),
//                         url: "".concat(o)
//                     }
//                 })
//             }
//
//             C && new Ee(C, {mask: "+{7} (000) 000-00-00"}), A && new Ee(A, {mask: "+{7} (000) 000-00-00"}), function () {
//                 m.apply(this, arguments)
//             }(), h("#form-app"), h("#modal-main"), f([document.querySelector("#form-check"), document.querySelector("#form-check--pd")], document.querySelector("#form-btn")), f([document.querySelector("#form-check-modal"), document.querySelector("#form-check-modal--pd")], document.querySelector("#form-btn-modal")), ee(o), o(), (E = document.querySelectorAll(".formModal__modal-btn")) && (null == E || E.forEach((function (e) {
//                 e.addEventListener("click", (function (t) {
//                     var n = t.target, r = n.closest(".formModal__modal-form");
//                     t.preventDefault(), l(r), u(r) ? "button" == n.type ? (e.setAttribute("data-modal-open", ""), e.setAttribute("data-modal-close", "")) : "submit" == n.type && (e.setAttribute("data-modal-close", ""), d(r, t, L(".formModal__modal-form", "#Regions-modal"))) : n.closest("[data-modal-close]") && n.closest("[data-modal-open]") && (e.removeAttribute("data-modal-open", ""), e.removeAttribute("data-modal-close", ""))
//                 }))
//             }))), _ = document.querySelectorAll(".quiz__slide"), k = document.getElementById("quiz-btn"), _.length < 1 || k.addEventListener("click", (function (e) {
//                 var t = e.target.closest(".quiz__slide-form");
//                 e.preventDefault(), l(t), u(t) && d(t, e, L(".quiz__slide-form", "#Regions-quiz"), !0)
//             })), function () {
//                 y.apply(this, arguments)
//             }(), setTimeout((function () {
//                 VK.Retargeting.Event("PageView30sec"), fbq("track", "PageView30s")
//             }), 3e4)
//         };
//
//         function gr(e) {
//             return gr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//                 return typeof e
//             } : function (e) {
//                 return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//             }, gr(e)
//         }
//
//         function vr() {
//             vr = function () {
//                 return e
//             };
//             var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function (e, t, n) {
//                     e[t] = n.value
//                 }, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator",
//                 s = i.asyncIterator || "@@asyncIterator", a = i.toStringTag || "@@toStringTag";
//
//             function l(e, t, n) {
//                 return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
//             }
//
//             try {
//                 l({}, "")
//             } catch (e) {
//                 l = function (e, t, n) {
//                     return e[t] = n
//                 }
//             }
//
//             function u(e, t, n, i) {
//                 var o = t && t.prototype instanceof p ? t : p, s = Object.create(o.prototype), a = new k(i || []);
//                 return r(s, "_invoke", {value: S(e, n, a)}), s
//             }
//
//             function c(e, t, n) {
//                 try {
//                     return {type: "normal", arg: e.call(t, n)}
//                 } catch (e) {
//                     return {type: "throw", arg: e}
//                 }
//             }
//
//             e.wrap = u;
//             var d = {};
//
//             function p() {
//             }
//
//             function h() {
//             }
//
//             function f() {
//             }
//
//             var m = {};
//             l(m, o, (function () {
//                 return this
//             }));
//             var g = Object.getPrototypeOf, v = g && g(g(C([])));
//             v && v !== t && n.call(v, o) && (m = v);
//             var y = f.prototype = p.prototype = Object.create(m);
//
//             function b(e) {
//                 ["next", "throw", "return"].forEach((function (t) {
//                     l(e, t, (function (e) {
//                         return this._invoke(t, e)
//                     }))
//                 }))
//             }
//
//             function w(e, t) {
//                 function i(r, o, s, a) {
//                     var l = c(e[r], e, o);
//                     if ("throw" !== l.type) {
//                         var u = l.arg, d = u.value;
//                         return d && "object" == gr(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function (e) {
//                             i("next", e, s, a)
//                         }), (function (e) {
//                             i("throw", e, s, a)
//                         })) : t.resolve(d).then((function (e) {
//                             u.value = e, s(u)
//                         }), (function (e) {
//                             return i("throw", e, s, a)
//                         }))
//                     }
//                     a(l.arg)
//                 }
//
//                 var o;
//                 r(this, "_invoke", {
//                     value: function (e, n) {
//                         function r() {
//                             return new t((function (t, r) {
//                                 i(e, n, t, r)
//                             }))
//                         }
//
//                         return o = o ? o.then(r, r) : r()
//                     }
//                 })
//             }
//
//             function S(e, t, n) {
//                 var r = "suspendedStart";
//                 return function (i, o) {
//                     if ("executing" === r) throw new Error("Generator is already running");
//                     if ("completed" === r) {
//                         if ("throw" === i) throw o;
//                         return {value: void 0, done: !0}
//                     }
//                     for (n.method = i, n.arg = o; ;) {
//                         var s = n.delegate;
//                         if (s) {
//                             var a = x(s, n);
//                             if (a) {
//                                 if (a === d) continue;
//                                 return a
//                             }
//                         }
//                         if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
//                             if ("suspendedStart" === r) throw r = "completed", n.arg;
//                             n.dispatchException(n.arg)
//                         } else "return" === n.method && n.abrupt("return", n.arg);
//                         r = "executing";
//                         var l = c(e, t, n);
//                         if ("normal" === l.type) {
//                             if (r = n.done ? "completed" : "suspendedYield", l.arg === d) continue;
//                             return {value: l.arg, done: n.done}
//                         }
//                         "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
//                     }
//                 }
//             }
//
//             function x(e, t) {
//                 var n = t.method, r = e.iterator[n];
//                 if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
//                 var i = c(r, e.iterator, t.arg);
//                 if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, d;
//                 var o = i.arg;
//                 return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
//             }
//
//             function E(e) {
//                 var t = {tryLoc: e[0]};
//                 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
//             }
//
//             function _(e) {
//                 var t = e.completion || {};
//                 t.type = "normal", delete t.arg, e.completion = t
//             }
//
//             function k(e) {
//                 this.tryEntries = [{tryLoc: "root"}], e.forEach(E, this), this.reset(!0)
//             }
//
//             function C(e) {
//                 if (e || "" === e) {
//                     var t = e[o];
//                     if (t) return t.call(e);
//                     if ("function" == typeof e.next) return e;
//                     if (!isNaN(e.length)) {
//                         var r = -1, i = function t() {
//                             for (; ++r < e.length;) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
//                             return t.value = void 0, t.done = !0, t
//                         };
//                         return i.next = i
//                     }
//                 }
//                 throw new TypeError(gr(e) + " is not iterable")
//             }
//
//             return h.prototype = f, r(y, "constructor", {value: f, configurable: !0}), r(f, "constructor", {
//                 value: h,
//                 configurable: !0
//             }), h.displayName = l(f, a, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
//                 var t = "function" == typeof e && e.constructor;
//                 return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
//             }, e.mark = function (e) {
//                 return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, a, "GeneratorFunction")), e.prototype = Object.create(y), e
//             }, e.awrap = function (e) {
//                 return {__await: e}
//             }, b(w.prototype), l(w.prototype, s, (function () {
//                 return this
//             })), e.AsyncIterator = w, e.async = function (t, n, r, i, o) {
//                 void 0 === o && (o = Promise);
//                 var s = new w(u(t, n, r, i), o);
//                 return e.isGeneratorFunction(n) ? s : s.next().then((function (e) {
//                     return e.done ? e.value : s.next()
//                 }))
//             }, b(y), l(y, a, "Generator"), l(y, o, (function () {
//                 return this
//             })), l(y, "toString", (function () {
//                 return "[object Generator]"
//             })), e.keys = function (e) {
//                 var t = Object(e), n = [];
//                 for (var r in t) n.push(r);
//                 return n.reverse(), function e() {
//                     for (; n.length;) {
//                         var r = n.pop();
//                         if (r in t) return e.value = r, e.done = !1, e
//                     }
//                     return e.done = !0, e
//                 }
//             }, e.values = C, k.prototype = {
//                 constructor: k, reset: function (e) {
//                     if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
//                 }, stop: function () {
//                     this.done = !0;
//                     var e = this.tryEntries[0].completion;
//                     if ("throw" === e.type) throw e.arg;
//                     return this.rval
//                 }, dispatchException: function (e) {
//                     if (this.done) throw e;
//                     var t = this;
//
//                     function r(n, r) {
//                         return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
//                     }
//
//                     for (var i = this.tryEntries.length - 1; i >= 0; --i) {
//                         var o = this.tryEntries[i], s = o.completion;
//                         if ("root" === o.tryLoc) return r("end");
//                         if (o.tryLoc <= this.prev) {
//                             var a = n.call(o, "catchLoc"), l = n.call(o, "finallyLoc");
//                             if (a && l) {
//                                 if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
//                                 if (this.prev < o.finallyLoc) return r(o.finallyLoc)
//                             } else if (a) {
//                                 if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
//                             } else {
//                                 if (!l) throw new Error("try statement without catch or finally");
//                                 if (this.prev < o.finallyLoc) return r(o.finallyLoc)
//                             }
//                         }
//                     }
//                 }, abrupt: function (e, t) {
//                     for (var r = this.tryEntries.length - 1; r >= 0; --r) {
//                         var i = this.tryEntries[r];
//                         if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
//                             var o = i;
//                             break
//                         }
//                     }
//                     o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
//                     var s = o ? o.completion : {};
//                     return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(s)
//                 }, complete: function (e, t) {
//                     if ("throw" === e.type) throw e.arg;
//                     return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
//                 }, finish: function (e) {
//                     for (var t = this.tryEntries.length - 1; t >= 0; --t) {
//                         var n = this.tryEntries[t];
//                         if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), d
//                     }
//                 }, catch: function (e) {
//                     for (var t = this.tryEntries.length - 1; t >= 0; --t) {
//                         var n = this.tryEntries[t];
//                         if (n.tryLoc === e) {
//                             var r = n.completion;
//                             if ("throw" === r.type) {
//                                 var i = r.arg;
//                                 _(n)
//                             }
//                             return i
//                         }
//                     }
//                     throw new Error("illegal catch attempt")
//                 }, delegateYield: function (e, t, n) {
//                     return this.delegate = {
//                         iterator: C(e),
//                         resultName: t,
//                         nextLoc: n
//                     }, "next" === this.method && (this.arg = void 0), d
//                 }
//             }, e
//         }
//
//         function yr(e, t, n, r, i, o, s) {
//             try {
//                 var a = e[o](s), l = a.value
//             } catch (e) {
//                 return void n(e)
//             }
//             a.done ? t(l) : Promise.resolve(l).then(r, i)
//         }
//
//         var br = function () {
//             function e() {
//                 var t;
//                 return t = vr().mark((function e() {
//                     var t;
//                     return vr().wrap((function (e) {
//                         for (; ;) switch (e.prev = e.next) {
//                             case 0:
//                                 return e.next = 2, bt();
//                             case 2:
//                                 t = e.sent, dt("", t), dt("-modal", t), St(t), n = void 0, (n = document.querySelectorAll('select[name="Program"]')).length > 0 && n.forEach((function (e) {
//                                     e.disabled = !1, e.parentElement.classList.remove("spinner")
//                                 }));
//                             case 7:
//                             case"end":
//                                 return e.stop()
//                         }
//                         var n
//                     }), e)
//                 })), e = function () {
//                     var e = this, n = arguments;
//                     return new Promise((function (r, i) {
//                         var o = t.apply(e, n);
//
//                         function s(e) {
//                             yr(o, r, i, s, a, "next", e)
//                         }
//
//                         function a(e) {
//                             yr(o, r, i, s, a, "throw", e)
//                         }
//
//                         s(void 0)
//                     }))
//                 }, e.apply(this, arguments)
//             }
//
//             new Datepicker("#BirthDate"), new Datepicker("#BirthDate-modal"), [{
//                 id: "#Education",
//                 placeholder: "Текущий уровень вашего образования"
//             }, {id: "#Direction", placeholder: "Направление"}, {
//                 id: "#Direction-modal",
//                 placeholder: "Направление"
//             }, {id: "#Education-modal", placeholder: "Текущий уровень вашего образования"}, {
//                 id: "#Program",
//                 placeholder: "Программа обучения"
//             }, {id: "#Program-modal", placeholder: "Программа обучения"}, {
//                 id: "#Category",
//                 placeholder: "Категория участника"
//             }, {id: "#Category-modal", placeholder: "Категория участника"}, {
//                 id: "#shortFormProgram",
//                 placeholder: "Программа обучения"
//             }, {id: "#EmploymentFormat", placeholder: "Форма занятости"}, {
//                 id: "#EmploymentFormat-modal",
//                 placeholder: "Форма занятости"
//             }, {id: "#shortCategory", placeholder: "Категория участника"}].forEach((function (e) {
//                 var t, n, r = $(e.id);
//                 n = "#ProgramHome" == e.id ? "Нет доступных программ" : "Ничего не найдено", t = "#Education" == e.id || "#Education-modal" == e.id ? window.innerWidth <= 767 ? "Образование" : "Текущий уровень вашего образования" : e.placeholder, r.select2({
//                     placeholder: t,
//                     language: {
//                         noResults: function () {
//                             return n
//                         }
//                     },
//                     escapeMarkup: function (e) {
//                         return e
//                     }
//                 }), r.val(null).trigger("change")
//             })), function () {
//                 e.apply(this, arguments)
//             }(), mr()
//         };
//
//         function wr(e) {
//             return wr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
//                 return typeof e
//             } : function (e) {
//                 return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//             }, wr(e)
//         }
//
//         function Sr(e, t) {
//             for (var n = 0; n < t.length; n++) {
//                 var r = t[n];
//                 r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (void 0, i = function (e, t) {
//                     if ("object" !== wr(e) || null === e) return e;
//                     var n = e[Symbol.toPrimitive];
//                     if (void 0 !== n) {
//                         var r = n.call(e, "string");
//                         if ("object" !== wr(r)) return r;
//                         throw new TypeError("@@toPrimitive must return a primitive value.")
//                     }
//                     return String(e)
//                 }(r.key), "symbol" === wr(i) ? i : String(i)), r)
//             }
//             var i
//         }
//
//         var xr = function () {
//             function e(t) {
//                 !function (e, t) {
//                     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//                 }(this, e), this.start = new Date(t.start), this.end = new Date(t.end), this.period = t.period, this.data = t.data, this.count = Math.floor((Date.now() - this.start) / 864e5), this._init()
//             }
//
//             var t, n;
//             return t = e, (n = [{
//                 key: "_init", value: function () {
//                     if ("Invalid Date" == this.end) {
//                         for (var e = this.count; e >= this.period;) e -= this.period;
//                         this.start = new Date((new Date).getTime() - 864e5 * e), this.end = new Date(this.start.getTime() + 864e5 * this.period)
//                     }
//                     (function (e) {
//                         var t = document.querySelectorAll("[data-date]"),
//                             n = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октябра", "ноября", "декабря"];
//                         t.forEach((function (t) {
//                             t.innerHTML = "".concat(e.getDate(), "&nbsp;").concat(n[e.getMonth()])
//                         }))
//                     })(this.end), function (e, t, n) {
//                         var r = document.querySelectorAll("[data-counter]"),
//                             i = document.querySelectorAll("[data-counter-program]");
//
//                         function o(e, t, n, r, i) {
//                             var o, s, a, l, u, c = e, d = t, p = n, h = r, f = i;
//                             return o = (s = Math.floor((Date.now() - c) / 864e5)) <= 0 ? 0 : f * s, u = a = s >= (d - c) / 864e5 ? h : p - o, l = (new Intl.NumberFormat).format(u) + " " + function (e, t) {
//                                 return ["место", "места", "мест"][e % 100 > 4 && e % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5]]
//                             }(a), l
//                         }
//
//                         r.length && r.forEach((function (r) {
//                             return r.innerHTML = o(e, t, n.main.total, n.main.final, n.main.rate)
//                         })), i.length && i.forEach((function (r) {
//                             return r.innerHTML = o(e, t, n.program.total, n.program.final, n.program.rate)
//                         }))
//                     }(this.start, this.end, this.data), function (e) {
//                         var t = document.querySelector("[data-timer]");
//                         t && function n() {
//                             var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate() - 1, 20, 59, 0)),
//                                 i = new Date(r).getTime(), o = setInterval(n, 6e4), s = i - (new Date).getTime(),
//                                 a = Math.floor(s / 864e5), l = Math.floor(s % 864e5 / 36e5),
//                                 u = Math.floor(s % 36e5 / 6e4);
//                             t.innerHTML = "".concat(a, "&nbsp;").concat(function (e) {
//                                 var t = "дней";
//                                 if (e > 10 && e < 20) return t;
//                                 var n = Number(String(e).slice(-1));
//                                 return 0 === n || n >= 5 ? t : 1 === n ? "день" : "дня"
//                             }(a), "&nbsp;").concat(l, "&nbsp;").concat(function (e) {
//                                 var t = "часов";
//                                 if (e > 10 && e < 20) return t;
//                                 var n = Number(String(e).slice(-1));
//                                 return 0 === n || n >= 5 ? t : 1 === n ? "час" : "часа"
//                             }(l), "&nbsp;").concat(u, "&nbsp;").concat(function (e) {
//                                 var t = "минут";
//                                 if (e > 10 && e < 20) return t;
//                                 var n = Number(String(e).slice(-1));
//                                 return 0 === n || n >= 5 ? t : 1 === n ? t + "а" : t + "ы"
//                             }(u)), s < 0 && (clearInterval(o), t.innerHTML = "0&nbsp;дней&nbsp;0&nbsp;часов&nbsp;0&nbsp;минут")
//                         }()
//                     }(this.end)
//                 }
//             }]) && Sr(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
//         }();
//         document.addEventListener("DOMContentLoaded", (function () {
//             var e, t, n, r, i, o, s, a, l, u, c, d, p, h, f, m, g, v, y;
//             (function () {
//                 var e = document.location.href, t = e.indexOf("?"), n = e.slice(t + 1, e.length);
//                 if (t > -1) {
//                     if (n.includes("category")) return void console.log("repeatCookie");
//                     !function (e, t) {
//                         var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
//                         n = function (e) {
//                             for (var t = 1; t < arguments.length; t++) {
//                                 var n = null != arguments[t] ? arguments[t] : {};
//                                 t % 2 ? Ke(Object(n), !0).forEach((function (t) {
//                                     Je(e, t, n[t])
//                                 })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ke(Object(n)).forEach((function (t) {
//                                     Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
//                                 }))
//                             }
//                             return e
//                         }({path: "/"}, n), n.expires instanceof Date && (n.expires = n.expires.toUTCString());
//                         var r = encodeURIComponent(e) + "=" + encodeURIComponent(t);
//                         for (var i in n) {
//                             r += "; " + i;
//                             var o = n[i];
//                             !0 !== o && (r += "=" + o)
//                         }
//                         document.cookie = r
//                     }("utm_tags", n, {"max-age": 86400}), console.log("setCookie")
//                 }
//             })(), Ge(), $("a[href^='#']:not([data-fslightbox])").on("click", (function (e) {
//                 e.preventDefault(), $("html,body").stop().animate({scrollTop: $("#".concat(this.href.split("#").pop())).offset().top}, 700)
//             })), ae = new le, f = document.querySelector("body"), m = document.querySelector(".participation__modal"), g = null == m ? void 0 : m.querySelector("h2"), v = null == m ? void 0 : m.querySelector(".participation__rules-list--participate"), y = null == m ? void 0 : m.querySelector(".participation__rules-list--documents"), m && f.addEventListener("click", (function (e) {
//                 if (e.target.closest('[data-modal-id="participation-modal"]')) {
//                     var t = e.target.closest(".participation__slide"),
//                         n = Array.from(t.querySelectorAll(".participation__slide-rules li")).map((function (e) {
//                             return e.outerHTML
//                         })),
//                         r = Array.from(t.querySelectorAll(".participation__slide-documents li")).map((function (e) {
//                             return e.outerHTML
//                         }));
//                     g.textContent = t.querySelector(".participation__slide-info p").textContent, v.innerHTML = n.join(" "), y.innerHTML = r.join(" ")
//                 }
//             })), function () {
//                 var e = document.querySelector("body"), t = document.querySelector(".teachers__modal"),
//                     n = null == t ? void 0 : t.querySelector("h3"),
//                     r = null == t ? void 0 : t.querySelector(".teachers__modal-description"),
//                     i = null == t ? void 0 : t.querySelector(".teachers__modal-img img"),
//                     o = null == t ? void 0 : t.querySelector(".teachers__modal-features");
//                 t && e.addEventListener("click", (function (e) {
//                     if (e.target.closest('[data-modal-id="teachers-modal"]')) {
//                         var t = e.target.closest(".teachers__item"), s = t.querySelector("h5").textContent,
//                             a = t.querySelector("p").textContent, l = t.querySelector("img"),
//                             u = t.querySelector(".teachers__item-features");
//                         if (n.textContent = s, r.textContent = a, i.src = l.src, i.alt = l.alt, u) {
//                             var c = u && Array.from(u.querySelectorAll("li")).map((function (e) {
//                                 return e.outerHTML
//                             }));
//                             o.innerHTML = c.join(" ")
//                         }
//                     }
//                 }))
//             }(), te(), new ie, function () {
//                 try {
//                     var e = document.querySelectorAll(".faq__card"), t = document.querySelectorAll(".faq__item"),
//                         n = document.querySelector(".faq__card.active"),
//                         r = document.querySelector(".faq__item.active");
//                     e.forEach((function (e, i) {
//                         e.addEventListener("click", (function () {
//                             n.classList.remove("active"), r.classList.remove("active"), e.classList.add("active"), t[i].classList.add("active"), n = e, r = t[i]
//                         }))
//                     }))
//                 } catch (e) {
//                     console.log(e)
//                 }
//             }(), ue(".program", 4), ue(".reviewsPage-cards", 5), ue(".directions", 4), function () {
//                 var e = document.querySelector(".catalog__notFound");
//                 if ("employed-job-seeker" === rt() && document.querySelectorAll(".tile__head-block__cost").forEach((function (e) {
//                     return e.innerHTML = "Подходит для трудоустроенных"
//                 })), $(document).on("click", ".tile", (function () {
//                     window.location = $(this).find("a").attr("href")
//                 })), e) {
//                     document.querySelector(".wrapper").style.overflow = "visible";
//                     var t = y("category"), n = y("level"), r = document.querySelectorAll('input[name="category"]'),
//                         i = document.querySelectorAll('input[name="level"]'),
//                         o = document.querySelectorAll(".tile__open-btn"),
//                         s = document.querySelectorAll(".catalog-filter"),
//                         a = document.querySelector(".catalog__courses"),
//                         l = ["methodist", "electric-welder", "webprogrammer", "onec144", "softwaretesting", "accountant", "personneladmin", "python", "bpla", "machine-operator", "operator1c", "repair-master", "junior-nurse", "cook", "social-worker", "social-specialist", "career-consultant", "foreman", "welder"];
//                     t && r.forEach((function (e) {
//                         e.value == t && e.setAttribute("checked", "true")
//                     })), n && i.forEach((function (e) {
//                         e.value == n && e.setAttribute("checked", "true")
//                     })), h(), function () {
//                         var e = document.querySelector(".catalog__filters-radios");
//                         if (e) {
//                             var t = document.querySelector(".catalog__filters-button"),
//                                 n = e.querySelector(".catalog__filters-close");
//                             t.addEventListener("click", (function () {
//                                 e.classList.add("is-active"), document.body.classList.add("scroll-lock"), n.addEventListener("click", (function () {
//                                     e.classList.remove("is-active"), document.body.classList.remove("scroll-lock")
//                                 }))
//                             }))
//                         }
//                     }(), o.forEach((function (e) {
//                         l.includes(v(e.href)) && (e.closest(".tile").querySelector(".tile__head-block__cost").innerHTML = "Подходит для&nbsp;ищущих работу")
//                     }));
//                     var u, c, d, p = function (e, t) {
//                         var n = new URL(document.location.href);
//                         n.searchParams.set(e, t), window.history.replaceState({}, "", n.href)
//                     };
//                     r.forEach((function (e) {
//                         e.addEventListener("change", (function () {
//                             p("category", e.value), h()
//                         }))
//                     })), i.forEach((function (e) {
//                         e.addEventListener("change", (function () {
//                             p("level", e.value), h()
//                         }))
//                     })), u = document.querySelector(".catalog__popup-menu"), c = document.body, d = document.querySelector(".catalog-close-popup"), document.querySelector(".catalog__mobile-select").addEventListener("click", (function () {
//                         u.classList.add("active"), c.style.overflow = "hidden", c.scrollIntoView()
//                     })), d.addEventListener("click", (function () {
//                         u.classList.remove("active"), c.style.overflow = "visible"
//                     }))
//                 }
//
//                 function h() {
//                     var t, n, u, c, d;
//                     !function (e) {
//                         if ("employed" == e) {
//                             var t = 0;
//                             o.forEach((function (e) {
//                                 l.includes(v(e.href)) ? (4 == t && (t = 0), f(e, ++t)) : function (e) {
//                                     e.closest(".tile").classList.contains("visible") && e.closest(".tile").classList.remove("visible"), e.closest(".tile").classList.add("hidden"), e.closest(".tile").style.display = "none"
//                                 }(e)
//                             }))
//                         } else {
//                             var n = 0;
//                             o.forEach((function (e) {
//                                 4 == n && (n = 0), f(e, ++n)
//                             }))
//                         }
//                     }(g(r)), t = g(i), n = m(".catalog__DPO"), u = m(".catalog__PO"), c = document.querySelector(".catalog__DPO"), d = document.querySelector(".catalog__PO"), "DPO" == t ? (c.style.display = "block", d && (d.style.display = "none"), n < 1 ? (a.style.display = "none", e.style.display = "flex") : (a.style.display = "flex", e.style.display = "none")) : "PO" == t ? (c.style.display = "none", d && (d.style.display = "block"), u < 1 ? (a.style.display = "none", e.style.display = "flex") : (a.style.display = "flex", e.style.display = "none")) : n < 1 && u < 1 ? (a.style.display = "none", e.style.display = "flex") : (a.style.display = "flex", e.style.display = "none"), function () {
//                         var e = g(r), t = g(i);
//                         e && !t ? s.forEach((function (t) {
//                             var n = t.href;
//                             t.href = n.split("?")[0] + "?category=".concat(e)
//                         })) : !e && t ? s.forEach((function (e) {
//                             var n = e.href;
//                             e.href = n.split("?")[0] + "?level=".concat(t)
//                         })) : e && t ? s.forEach((function (n) {
//                             var r = n.href;
//                             n.href = r.split("?")[0] + "?category=".concat(e, "&level=").concat(t)
//                         })) : s.forEach((function (e) {
//                             var t = e.href;
//                             e.href = t.split("?")[0]
//                         }))
//                     }()
//                 }
//
//                 function f(e, t) {
//                     var n = [["#703EFF", "#9373F1"], ["#3E74FF", "#7599F6"], ["#DB803E", "#F1A771"], ["#B63EFF", "#C365FD"]];
//                     e.closest(".tile").classList.contains("hidden") && e.closest(".tile").classList.remove("hidden"), e.closest(".tile").style.backgroundColor = n[t - 1][0], e.closest(".tile").querySelector(".tile__oval").style.backgroundColor = n[t - 1][1], e.closest(".tile").style.display = "flex", e.closest(".tile").classList.add("visible")
//                 }
//
//                 function m(e) {
//                     var t = document.querySelector(e);
//                     return t ? t.querySelectorAll(".tile.visible").length : 0
//                 }
//
//                 function g(e) {
//                     for (var t = 0; t < e.length; t++) if (e[t].checked) return e[t].value
//                 }
//
//                 function v(e) {
//                     var t = e.split("/");
//                     return t.pop() || t.pop()
//                 }
//
//                 function y(e) {
//                     return new URL(window.location.toString()).searchParams.get(e) || ""
//                 }
//             }(), p = document.querySelector("[data-appearing-modal]"), h = document.querySelector("[data-appearing-modal] .appearing-modal__button"), p && setTimeout((function () {
//                 var e = document.querySelector(".select2-container--open");
//                 document.querySelector(".custom-modal.active") || e || ae.openModal(p), h.addEventListener("click", (function () {
//                     p.removeAttribute("data-modal-open"), ae.closeModal(), document.querySelector("#form") ? document.querySelector("#form").scrollIntoView({
//                         behavior: "smooth",
//                         block: "start"
//                     }) : window.location.href = "/#form"
//                 }))
//             }), 18e4), function () {
//                 var e = document.getElementById("leave-page-modal");
//                 if (e) {
//                     var t = function () {
//                         1 != o && (document.querySelector(".custom-modal.active") || (o = !0, ae.openModal(e), n(), r.addEventListener("click", (function () {
//                             ae.closeModal(), document.querySelector("#form") ? document.querySelector("#form").scrollIntoView({
//                                 behavior: "smooth",
//                                 block: "start"
//                             }) : window.location.href = "/#form"
//                         }))))
//                     }, n = function () {
//                         document.removeEventListener("mouseout", a), document.removeEventListener("mousemove", l), document.removeEventListener("scroll", l), e.removeAttribute("data-modal-open")
//                     }, r = e.querySelector(".appearing-modal__button"), i = document.querySelectorAll("form"), o = !1;
//                     i.length > 0 && i.forEach((function (e) {
//                         e.addEventListener("click", (function () {
//                             o = !0, n()
//                         }))
//                     }));
//                     var s, a = function (e) {
//                         e.toElement || e.relatedTarget || t()
//                     }, l = function () {
//                         clearTimeout(s), s = setTimeout((function () {
//                             t()
//                         }), 1e4)
//                     };
//                     setTimeout((function () {
//                         document.addEventListener("mouseout", a), document.addEventListener("mousemove", l), document.addEventListener("scroll", l)
//                     }), 12e4)
//                 }
//             }(), (d = document.querySelectorAll(".form-tooltip__btn")).length && d.forEach((function (e) {
//                 e.addEventListener("click", (function () {
//                     var t = document.querySelector(".form-tooltip__text.visible");
//                     t && t.classList.remove("visible"), e.parentElement.querySelector(".form-tooltip__text").classList.add("visible"), document.addEventListener("click", (function (t) {
//                         t.target.closest(".form-tooltip__btn") || e.parentElement.querySelector(".form-tooltip__text").classList.remove("visible")
//                     }))
//                 }))
//             })), function () {
//                 var e = document.querySelectorAll(".quiz__tooltip-button");
//                 e.length && e.forEach((function (e) {
//                     e.addEventListener("click", (function () {
//                         var t = document.querySelector(".italic.visible");
//                         t && t.classList.remove("visible"), e.parentElement.querySelector(".italic").classList.add("visible"), document.addEventListener("click", (function (t) {
//                             t.target.closest(".quiz__tooltip-button") || e.parentElement.querySelector(".italic").classList.remove("visible")
//                         }))
//                     }))
//                 }))
//             }(), br(), a = document.querySelector(".banner-set"), l = document.querySelector(".form"), u = document.querySelector(".home"), c = document.querySelector(".scroll-to-top__button"), a && l && u && window.addEventListener("scroll", (function () {
//                 var e = window.pageYOffset;
//                 e < u.offsetTop + u.clientHeight || e + document.documentElement.clientHeight > l.offsetTop ? (a.style.transform = "translateY(170%)", c.classList.remove("activeScroll")) : e < l.offsetTop && (a.style.transform = "translateY(0)", c.classList.add("activeScroll"))
//             })), function () {
//                 if (location.href.split("/").includes("program")) try {
//                     var e,
//                         t = null === (e = document.querySelector(".home__title")) || void 0 === e ? void 0 : e.textContent,
//                         n = t.slice(t.indexOf("«") + 1, t.indexOf("»"));
//                     window.advcake_data = window.advcake_data || [], window.advcake_data.push({
//                         pageType: 2,
//                         user: {email: ""},
//                         currentLead: {leadid: "", name: n}
//                     })
//                 } catch (e) {
//                     console.log(e)
//                 }
//             }(), (s = document.querySelector(".teachers")) && s.querySelectorAll(".teachers__item").length < 4 && s.classList.add("teachers--alt"), de(), function () {
//                 var e = document.querySelector(".quiz__metrics");
//                 e && e.addEventListener("click", (function () {
//                     fbq("track", "InitiateCheckout")
//                 }));
//                 var t = document.querySelectorAll(".quiz__slide-switches__back"),
//                     n = document.querySelectorAll(".quiz__slide-btn"), r = document.querySelectorAll(".quiz__slide"),
//                     i = document.querySelectorAll(".quiz__slide-form");
//                 if (!(t.length < 1)) {
//                     var o = document.getElementById("BirthDate-quiz");
//                     o && new Ee(o, {mask: "00.00.0000"}), o && o.addEventListener("input", (function (e) {
//                         10 == e.target.value.length ? n[n.length - 1].disabled = !1 : n[n.length - 1].disabled = !0
//                     })), t[0].disabled = !0, function () {
//                         for (var e = function (e) {
//                             t[e].addEventListener("click", (function () {
//                                 r[e].style.display = "none", r[e - 1].style.display = "flex"
//                             }))
//                         }, n = 0; n < t.length; n++) e(n)
//                     }(), function () {
//                         i.forEach((function (e, t) {
//                             var i = e.querySelectorAll("input[type=radio]");
//                             i.length > 0 && i.forEach((function (e) {
//                                 e.addEventListener("change", (function () {
//                                     n[t].disabled = !1, setTimeout((function () {
//                                         r[t].style.display = "none", r[t + 1].style.display = "flex"
//                                     }), 500)
//                                 }))
//                             }))
//                         }));
//                         for (var e = function (e) {
//                             n[e].addEventListener("click", (function () {
//                                 r[e].style.display = "none", r[e + 1].style.display = "flex"
//                             }))
//                         }, t = 0; t < n.length; t++) e(t)
//                     }()
//                 }
//             }(), t = document.querySelector(".header-btn"), n = document.querySelector(".popup-menu"), r = document.querySelector(".popup-mob"), i = document.querySelector(".header"), o = document.body, t && (t.addEventListener("click", (function () {
//                 t.classList.contains("active") ? (t.classList.remove("active"), innerWidth < 767 ? (r.classList.remove("active"), o.style.overflow = "visible", i.style.zIndex = "unset") : n.classList.remove("active")) : (t.classList.add("active"), innerWidth < 767 ? (r.classList.add("active"), o.style.overflow = "hidden", i.style.zIndex = "100000") : n.classList.add("active"))
//             })), document.addEventListener("click", (function (e) {
//                 e.target.classList.contains("popup__link") && (t.classList.remove("active"), null == r || r.classList.remove("active"), n.classList.remove("active"), o.style.overflow = "visible", i.style.zIndex = "unset")
//             }))), (e = document.querySelector(".scroll-to-top__button")) && (window.scrollY > 200 && e.classList.add("is-visible"), window.addEventListener("scroll", (function () {
//                 window.scrollY > 200 ? e.classList.add("is-visible") : e.classList.remove("is-visible")
//             })), e.addEventListener("click", (function (e) {
//                 e.preventDefault(), window.scrollTo({top: 0, behavior: "smooth"})
//             }))), function () {
//                 var e, t, n, r, i = null === (e = document) || void 0 === e ? void 0 : e.querySelector(".banner-back"),
//                     o = null === (t = document) || void 0 === t ? void 0 : t.querySelector(".home"),
//                     s = null === (n = document) || void 0 === n ? void 0 : n.querySelector(".banner-back__close"),
//                     a = null === (r = document) || void 0 === r ? void 0 : r.querySelector(".footer");
//                 i && (window.addEventListener("scroll", (function () {
//                     o.getBoundingClientRect().bottom < -50 ? i.classList.add("banner-fixed") : i.classList.remove("banner-fixed"), a.getBoundingClientRect().bottom < 1050 && i.classList.remove("banner-fixed")
//                 })), null == s || s.addEventListener("click", (function () {
//                     i.style.opacity = "0"
//                 })))
//             }(), Ye(), function () {
//                 function e(e, t, n, r) {
//                     var i = document.querySelector(e);
//                     if (i) {
//                         var o = i.querySelectorAll(t), s = null == i ? void 0 : i.querySelectorAll(n);
//                         o.forEach((function (e, t) {
//                             var n = s[t].querySelector("ul");
//                             s[t].style.height = 0, e.addEventListener("click", (function (i) {
//                                 window.innerWidth <= 767 && (i.stopImmediatePropagation(), "0px" == s[t].style.height ? (s[t].style.height = n.clientHeight + 10 + "px", e.querySelector(r).classList.add("rotate")) : (s[t].style.height = 0, e.querySelector(r).classList.remove("rotate")))
//                             }))
//                         }))
//                     }
//                 }
//
//                 function t() {
//                     window.innerWidth <= 767 && (e(".footer__item-list--1", ".footer__item-list__title", ".footer__item-list__collapse", ".footer__item-list__title-icon"), e(".footer__item-list--2", ".footer__item-list__title", ".footer__item-list__collapse", ".footer__item-list__title-icon"), e(".footer__item-list--3", ".footer__item-list__title", ".footer__item-list__collapse", ".footer__item-list__title-icon"))
//                 }
//
//                 t(), ee(t)
//             }(), function () {
//                 var e = document.querySelector("body"), t = document.querySelector(".stories__modal"),
//                     n = null == t ? void 0 : t.querySelector("img"), r = null == t ? void 0 : t.querySelector("h5"),
//                     i = null == t ? void 0 : t.querySelector("b"), o = null == t ? void 0 : t.querySelector("q"),
//                     s = null == t ? void 0 : t.querySelector("blockquote");
//                 t && e.addEventListener("click", (function (e) {
//                     if (e.target.closest('[data-modal-id="stories-modal"]')) {
//                         var t = document.querySelector(".custom-modal__content");
//                         t.classList.add("custom-modal__content--stories"), document.querySelectorAll("[data-modal-close]").forEach((function (e) {
//                             e.addEventListener("click", (function () {
//                                 return t.classList.remove("custom-modal__content--stories")
//                             }))
//                         }));
//                         var a = e.target.closest(".stories__slide"),
//                             l = Array.from(a.querySelectorAll(".stories__slide-hidden p")).map((function (e) {
//                                 return e.outerHTML
//                             }));
//                         n.src = a.querySelector("img").src, r.textContent = a.querySelector("h5").textContent, i.textContent = a.querySelector("b").textContent, o.textContent = a.querySelector("q").textContent, s.innerHTML = l.join(" ")
//                     }
//                 }))
//             }(), function () {
//                 var e = document.querySelector(".quiz__video");
//                 if (e) {
//                     var t = e.querySelector(".quiz__video-mute"), n = e.querySelector("video").muted, r = function n() {
//                         t.style.opacity = "1", e.removeEventListener("mouseenter", n), e.addEventListener("mouseleave", i)
//                     }, i = function n() {
//                         t.style.opacity = "0", e.addEventListener("mouseenter", r), e.removeEventListener("mouseenter", n)
//                     };
//                     t.addEventListener("click", (function () {
//                         n = !n, e.querySelector("video").muted = n, t.classList.toggle("quiz__video-mute--on")
//                     })), e.addEventListener("mouseenter", r), e.addEventListener("click", r)
//                 }
//             }(), function () {
//                 var e = document.querySelector("body"), t = document.querySelector(".steps__modal");
//                 t && e.addEventListener("click", (function (e) {
//                     if (e.target.closest('[data-modal-id="steps-modal"]')) {
//                         var n = e.target.closest(".steps__item").querySelector(".steps__item-hidden").cloneNode(!0);
//                         t.innerHTML = n.innerHTML
//                     }
//                 }))
//             }(), new xr({
//                 start: "2024-03-13",
//                 end: "",
//                 period: 14,
//                 data: {main: {total: 927, final: 250, rate: 36}, program: {total: 94, final: 12, rate: 6}}
//             })
//         }))
//     }()
// }();
//# sourceMappingURL=main.js.map