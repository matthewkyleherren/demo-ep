import "./hoisted.DEENYDYk.js";
import {
    i as U,
    g as F,
    $ as N
} from "./dialog.D5RLktWU.js";
import {
    c as D,
    g as _,
    j as K,
    k as V,
    d as Z,
    l as J,
    S as G
} from "./swiper-core.DNlrlHI_.js";
import {
    K as Q
} from "./keyboard.ClJGhP55.js";
import {
    N as W
} from "./navigation.CoWl0vFC.js";
import "./Scroll.Bt_JG0O1.js";
import "./index.BSdFiPHn.js";
import "./index.BDT3iC5Q.js";

function ee(m) {
    let {
        swiper: e,
        extendParams: r,
        on: a
    } = m;
    r({
        parallax: {
            enabled: !1
        }
    });
    const l = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
        p = (n, s) => {
            const {
                rtl: t
            } = e, i = t ? -1 : 1, d = n.getAttribute("data-swiper-parallax") || "0";
            let o = n.getAttribute("data-swiper-parallax-x"),
                u = n.getAttribute("data-swiper-parallax-y");
            const v = n.getAttribute("data-swiper-parallax-scale"),
                c = n.getAttribute("data-swiper-parallax-opacity"),
                f = n.getAttribute("data-swiper-parallax-rotate");
            if (o || u ? (o = o || "0", u = u || "0") : e.isHorizontal() ? (o = d, u = "0") : (u = d, o = "0"), o.indexOf("%") >= 0 ? o = `${parseInt(o,10)*s*i}%` : o = `${o*s*i}px`, u.indexOf("%") >= 0 ? u = `${parseInt(u,10)*s}%` : u = `${u*s}px`, typeof c < "u" && c !== null) {
                const h = c - (c - 1) * (1 - Math.abs(s));
                n.style.opacity = h
            }
            let y = `translate3d(${o}, ${u}, 0px)`;
            if (typeof v < "u" && v !== null) {
                const h = v - (v - 1) * (1 - Math.abs(s));
                y += ` scale(${h})`
            }
            if (f && typeof f < "u" && f !== null) {
                const h = f * s * -1;
                y += ` rotate(${h}deg)`
            }
            n.style.transform = y
        },
        w = () => {
            const {
                el: n,
                slides: s,
                progress: t,
                snapGrid: i,
                isElement: d
            } = e, o = D(n, l);
            e.isElement && o.push(...D(e.hostEl, l)), o.forEach(u => {
                p(u, t)
            }), s.forEach((u, v) => {
                let c = u.progress;
                e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (c += Math.ceil(v / 2) - t * (i.length - 1)), c = Math.min(Math.max(c, -1), 1), u.querySelectorAll(`${l}, [data-swiper-parallax-rotate]`).forEach(f => {
                    p(f, c)
                })
            })
        },
        b = function(n) {
            n === void 0 && (n = e.params.speed);
            const {
                el: s,
                hostEl: t
            } = e, i = [...s.querySelectorAll(l)];
            e.isElement && i.push(...t.querySelectorAll(l)), i.forEach(d => {
                let o = parseInt(d.getAttribute("data-swiper-parallax-duration"), 10) || n;
                n === 0 && (o = 0), d.style.transitionDuration = `${o}ms`
            })
        };
    a("beforeInit", () => {
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
    }), a("init", () => {
        e.params.parallax.enabled && w()
    }), a("setTranslate", () => {
        e.params.parallax.enabled && w()
    }), a("setTransition", (n, s) => {
        e.params.parallax.enabled && b(s)
    })
}

function te(m) {
    let {
        swiper: e,
        extendParams: r,
        on: a
    } = m;
    r({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let l = !1,
        p = !1;
    e.thumbs = {
        swiper: null
    };

    function w() {
        const s = e.thumbs.swiper;
        if (!s || s.destroyed) return;
        const t = s.clickedIndex,
            i = s.clickedSlide;
        if (i && i.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof t > "u" || t === null) return;
        let d;
        s.params.loop ? d = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : d = t, e.params.loop ? e.slideToLoop(d) : e.slideTo(d)
    }

    function b() {
        const {
            thumbs: s
        } = e.params;
        if (l) return !1;
        l = !0;
        const t = e.constructor;
        if (s.swiper instanceof t) {
            if (s.swiper.destroyed) return l = !1, !1;
            e.thumbs.swiper = s.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), e.thumbs.swiper.update()
        } else if (K(s.swiper)) {
            const i = Object.assign({}, s.swiper);
            Object.assign(i, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), e.thumbs.swiper = new t(i), p = !0
        }
        return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", w), !0
    }

    function n(s) {
        const t = e.thumbs.swiper;
        if (!t || t.destroyed) return;
        const i = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : t.params.slidesPerView;
        let d = 1;
        const o = e.params.thumbs.slideThumbActiveClass;
        if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (d = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (d = 1), d = Math.floor(d), t.slides.forEach(c => c.classList.remove(o)), t.params.loop || t.params.virtual && t.params.virtual.enabled)
            for (let c = 0; c < d; c += 1) D(t.slidesEl, `[data-swiper-slide-index="${e.realIndex+c}"]`).forEach(f => {
                f.classList.add(o)
            });
        else
            for (let c = 0; c < d; c += 1) t.slides[e.realIndex + c] && t.slides[e.realIndex + c].classList.add(o);
        const u = e.params.thumbs.autoScrollOffset,
            v = u && !t.params.loop;
        if (e.realIndex !== t.realIndex || v) {
            const c = t.activeIndex;
            let f, y;
            if (t.params.loop) {
                const h = t.slides.find(S => S.getAttribute("data-swiper-slide-index") === `${e.realIndex}`);
                f = t.slides.indexOf(h), y = e.activeIndex > e.previousIndex ? "next" : "prev"
            } else f = e.realIndex, y = f > e.previousIndex ? "next" : "prev";
            v && (f += y === "next" ? u : -1 * u), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(f) < 0 && (t.params.centeredSlides ? f > c ? f = f - Math.floor(i / 2) + 1 : f = f + Math.floor(i / 2) - 1 : f > c && t.params.slidesPerGroup, t.slideTo(f, s ? 0 : void 0))
        }
    }
    a("beforeInit", () => {
        const {
            thumbs: s
        } = e.params;
        if (!(!s || !s.swiper))
            if (typeof s.swiper == "string" || s.swiper instanceof HTMLElement) {
                const t = _(),
                    i = () => {
                        const o = typeof s.swiper == "string" ? t.querySelector(s.swiper) : s.swiper;
                        if (o && o.swiper) s.swiper = o.swiper, b(), n(!0);
                        else if (o) {
                            const u = `${e.params.eventsPrefix}init`,
                                v = c => {
                                    s.swiper = c.detail[0], o.removeEventListener(u, v), b(), n(!0), s.swiper.update(), e.update()
                                };
                            o.addEventListener(u, v)
                        }
                        return o
                    },
                    d = () => {
                        if (e.destroyed) return;
                        i() || requestAnimationFrame(d)
                    };
                requestAnimationFrame(d)
            } else b(), n(!0)
    }), a("slideChange update resize observerUpdate", () => {
        n()
    }), a("setTransition", (s, t) => {
        const i = e.thumbs.swiper;
        !i || i.destroyed || i.setTransition(t)
    }), a("beforeDestroy", () => {
        const s = e.thumbs.swiper;
        !s || s.destroyed || p && s.destroy()
    }), Object.assign(e.thumbs, {
        init: b,
        update: n
    })
}

function se(m) {
    const {
        effect: e,
        swiper: r,
        on: a,
        setTranslate: l,
        setTransition: p,
        overwriteParams: w,
        perspective: b,
        recreateShadows: n,
        getEffectParams: s
    } = m;
    a("beforeInit", () => {
        if (r.params.effect !== e) return;
        r.classNames.push(`${r.params.containerModifierClass}${e}`), b && b() && r.classNames.push(`${r.params.containerModifierClass}3d`);
        const i = w ? w() : {};
        Object.assign(r.params, i), Object.assign(r.originalParams, i)
    }), a("setTranslate", () => {
        r.params.effect === e && l()
    }), a("setTransition", (i, d) => {
        r.params.effect === e && p(d)
    }), a("transitionEnd", () => {
        if (r.params.effect === e && n) {
            if (!s || !s().slideShadows) return;
            r.slides.forEach(i => {
                i.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d => d.remove())
            }), n()
        }
    });
    let t;
    a("virtualUpdate", () => {
        r.params.effect === e && (r.slides.length || (t = !0), requestAnimationFrame(() => {
            t && r.slides && r.slides.length && (l(), t = !1)
        }))
    })
}

function re(m, e) {
    const r = V(e);
    return r !== e && (r.style.backfaceVisibility = "hidden", r.style["-webkit-backface-visibility"] = "hidden"), r
}

function B(m, e, r) {
    const a = `swiper-slide-shadow${r?`-${r}`:""}${` swiper-slide-shadow-${m}`}`,
        l = V(e);
    let p = l.querySelector(`.${a.split(" ").join(".")}`);
    return p || (p = Z("div", a.split(" ")), l.append(p)), p
}

function ie(m) {
    let {
        swiper: e,
        extendParams: r,
        on: a
    } = m;
    r({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    }), se({
        effect: "coverflow",
        swiper: e,
        on: a,
        setTranslate: () => {
            const {
                width: w,
                height: b,
                slides: n,
                slidesSizesGrid: s
            } = e, t = e.params.coverflowEffect, i = e.isHorizontal(), d = e.translate, o = i ? -d + w / 2 : -d + b / 2, u = i ? t.rotate : -t.rotate, v = t.depth, c = J(e);
            for (let f = 0, y = n.length; f < y; f += 1) {
                const h = n[f],
                    S = s[f],
                    H = h.swiperSlideOffset,
                    j = (o - H - S / 2) / S,
                    g = typeof t.modifier == "function" ? t.modifier(j) : j * t.modifier;
                let $ = i ? u * g : 0,
                    k = i ? 0 : u * g,
                    C = -v * Math.abs(g),
                    E = t.stretch;
                typeof E == "string" && E.indexOf("%") !== -1 && (E = parseFloat(t.stretch) / 100 * S);
                let L = i ? 0 : E * g,
                    O = i ? E * g : 0,
                    q = 1 - (1 - t.scale) * Math.abs(g);
                Math.abs(O) < .001 && (O = 0), Math.abs(L) < .001 && (L = 0), Math.abs(C) < .001 && (C = 0), Math.abs($) < .001 && ($ = 0), Math.abs(k) < .001 && (k = 0), Math.abs(q) < .001 && (q = 0);
                const X = `translate3d(${O}px,${L}px,${C}px)  rotateX(${c(k)}deg) rotateY(${c($)}deg) scale(${q})`,
                    Y = re(t, h);
                if (Y.style.transform = X, h.style.zIndex = -Math.abs(Math.round(g)) + 1, t.slideShadows) {
                    let A = i ? h.querySelector(".swiper-slide-shadow-left") : h.querySelector(".swiper-slide-shadow-top"),
                        T = i ? h.querySelector(".swiper-slide-shadow-right") : h.querySelector(".swiper-slide-shadow-bottom");
                    A || (A = B("coverflow", h, i ? "left" : "top")), T || (T = B("coverflow", h, i ? "right" : "bottom")), A && (A.style.opacity = g > 0 ? g : 0), T && (T.style.opacity = -g > 0 ? -g : 0)
                }
            }
        },
        setTransition: w => {
            e.slides.map(n => V(n)).forEach(n => {
                n.style.transitionDuration = `${w}ms`, n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(s => {
                    s.style.transitionDuration = `${w}ms`
                })
            })
        },
        perspective: () => !0,
        overwriteParams: () => ({
            watchSlidesProgress: !0
        })
    })
}

function I() {
    document.querySelectorAll(".c-gallery-slider .swiper-slide video").forEach(e => {
        e.load(), e.closest(".c-video-link")?.setAttribute("aria-pressed", "false")
    }), U.set(!1), F.set(0)
}
U.subscribe(m => {
    const e = F.get(),
        r = document.getElementById("view-gallery-modal");
    m && r ? (r.setAttribute("data-image-index", e.toString()), N.get()?.slideTo(e), r.showModal(), document.body.classList.add("c-modal-open")) : r && (r.close(), r.setAttribute("data-image-index", "0"), document.body.classList.remove("c-modal-open"));
    const a = document.getElementById("c-modal-close");
    a && (a.removeEventListener("click", I), a.addEventListener("click", I)), r && (r.removeEventListener("close", I), r.addEventListener("close", I))
});
const ae = document.getElementById("view-gallery-modal"),
    P = document.getElementById("view-gallery-modal")?.getAttribute("data-centered") === "true",
    M = document.getElementById("download-link-centered"),
    le = new G(".c-gallery-thumbnail", {
        spaceBetween: 2,
        slidesPerView: "auto",
        watchSlidesProgress: !0,
        centeredSlidesBounds: !0,
        centeredSlides: !0,
        centerInsufficientSlides: !0,
        loop: !1
    }),
    R = ae?.getAttribute("data-image-index"),
    x = new G(".c-gallery-slider", {
        spaceBetween: 2,
        loop: !1,
        centeredSlides: !0,
        slidesPerView: 1.2,
        speed: 600,
        initialSlide: R ? parseInt(R) : 0,
        parallax: !0,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !1
        },
        navigation: {
            nextEl: P ? ".swiper-button-centered-next" : ".swiper-button-next",
            prevEl: P ? ".swiper-button-centered-prev" : ".swiper-button-prev"
        },
        thumbs: {
            swiper: le,
            autoScrollOffset: 1
        },
        keyboard: !0,
        breakpoints: {
            320: {
                slidesPerView: P ? 1.1 : 1,
                spaceBetween: P ? 5 : 0
            },
            999: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
        modules: [W, te, Q, ee, ie],
        on: {
            init: m => {
                const e = document.getElementsByClassName("c-video-link");
                Array.from(e).forEach(a => {
                    const l = a.querySelector("video");
                    l && (a.addEventListener("click", p => {
                        p.preventDefault(), l.paused || l.ended ? (l.play(), a.setAttribute("aria-pressed", "true")) : (l.pause(), a.setAttribute("aria-pressed", "false"))
                    }), ["play", "pause", "ended"].forEach(p => l.addEventListener(p, () => {
                        a.setAttribute("aria-pressed", p === "play" ? "true" : "false")
                    })))
                });
                const r = () => {
                    const l = m.slides[m.activeIndex].querySelector("video"),
                        p = l?.closest(".c-video-link");
                    return {
                        video: l,
                        wrapper: p
                    }
                };
                document.addEventListener("keydown", a => {
                    if (a.code === "Space") {
                        const {
                            video: l,
                            wrapper: p
                        } = r();
                        l && p && (a.preventDefault(), l.paused || l.ended ? (l.play(), p.setAttribute("aria-pressed", "true")) : (l.pause(), p.setAttribute("aria-pressed", "false")))
                    }
                })
            },
            slideChange: () => {
                document.querySelectorAll(".c-gallery-slider .swiper-slide video").forEach(e => {
                    e.pause(), e.closest(".c-video-link")?.setAttribute("aria-pressed", "false")
                }), z()
            },
            transitionEnd: () => z()
        }
    });

function z() {
    const m = document.querySelector(".swiper-slide-thumb-active");
    m && m.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    })
}
if (M) {
    let m = function() {
        const a = x.slides[x.activeIndex]?.querySelector("div")?.getAttribute("data-original-url");
        a && M?.setAttribute("href", a)
    };
    M.addEventListener("click", async e => {
        e.preventDefault();
        const r = document?.querySelector("#view-gallery-modal");
        r?.appendChild(Object.assign(document.createElement("div"), {
            className: "c-preloader !u-flex !u-pointer-events-auto !u-animate-none"
        }));
        try {
            const p = x.slides[x.activeIndex]?.querySelector("div");
            let w = p?.getAttribute("data-original-url");
            const b = p?.getAttribute("data-filename") || "image";
            if (w) {
                w = w.includes("https") || w.includes("http") ? w : `https:${w}`;
                const s = await (await fetch(w)).blob(),
                    t = window.URL.createObjectURL(s),
                    i = document.createElement("a");
                i.href = t, i.download = b, document.body.appendChild(i), i.click(), setTimeout(() => {
                    document.body.removeChild(i), window.URL.revokeObjectURL(t)
                }, 100)
            }
        } catch {}
        r?.querySelector(".c-preloader")?.remove()
    }), m(), x.on("slideChange", m), N.set(x)
}