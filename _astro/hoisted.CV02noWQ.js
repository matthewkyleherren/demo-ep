import {
    $ as h,
    r as k,
    a as D,
    c as f
} from "./hoisted.DEENYDYk.js";
import "./HorizontalOutro.Dt8UPcma.js";
import "./hoisted.CTPyqPpE.js";
import "./hoisted.DNKsZ-EY.js";
import {
    $ as d
} from "./AutoplayVideo.CtUmkCwP.js";
import {
    g as i
} from "./index.BDT3iC5Q.js";
import {
    $,
    S as p
} from "./Scroll.Bt_JG0O1.js";
import {
    l as w
} from "./index.CJ4e7_2M.js";
import {
    S as T
} from "./CinematicUIContent.astro_astro_type_script_index_0_lang.CDAFEDhC.js";
import {
    i as O
} from "./dialog.D5RLktWU.js";
import {
    S as x
} from "./swiper-core.DNlrlHI_.js";
import {
    N as I
} from "./navigation.CoWl0vFC.js";
import {
    r as M,
    c as F,
    m as H
} from "./maths.BC202PIA.js";
import "./keyboard.ClJGhP55.js";
import "./_commonjsHelpers.Cpj98o6Y.js";
import "./index.BSdFiPHn.js";
class z extends HTMLElement {
    unbindScreenListener = () => {};
    unbindTouchOrSmallListener = () => {};
    tabsId;
    hasRequestLoading = !1;
    $turntableElements;
    $tabs;
    isTouchOrSmall = d.value?.isTouchOrSmall;
    constructor() {
        super(), this.onRequestSequenceLoading = this.onRequestSequenceLoading.bind(this), this.onResetTabs = this.onResetTabs.bind(this), this.onResize = this.onResize.bind(this), this.onTouchOrSmallStatusChange = this.onTouchOrSmallStatusChange.bind(this), this.$turntableElements = Array.from(this.querySelectorAll("[data-turntable-element]")), this.$tabs = this.querySelector("[data-tabs]"), this.tabsId = this.getAttribute("data-tabs-id")
    }
    connectedCallback() {
        this.classList.contains("is-inview") && this.onRequestSequenceLoading(), this.bindEvents()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        this.unbindScreenListener = h.subscribe(this.onResize), window.addEventListener(`${this.tabsId}Load`, this.onRequestSequenceLoading), window.addEventListener("resetTabs", this.onResetTabs), this.unbindTouchOrSmallListener = w(d, ["isTouchOrSmall"], this.onTouchOrSmallStatusChange)
    }
    unbindEvents() {
        this.unbindScreenListener(), window.removeEventListener(`${this.tabsId}Load`, this.onRequestSequenceLoading), window.removeEventListener("resetTabs", this.onResetTabs), this.unbindTouchOrSmallListener?.()
    }
    onRequestSequenceLoading() {
        this.hasRequestLoading || (this.hasRequestLoading = !0, requestAnimationFrame(() => {
            this.$turntableElements.forEach(e => {
                e.initLoad()
            })
        }))
    }
    onResetTabs(e) {
        const {
            way: t,
            from: s
        } = e.detail;
        t === "leave" && s === "start" && !this.isTouchOrSmall && i.delayedCall(.5, () => {
            this.$tabs.setSelectedTab(this.$tabs.$firstTab, !1, !0)
        })
    }
    onResize() {
        $?.value?.resize()
    }
    onTouchOrSmallStatusChange() {
        window.location.reload()
    }
}
customElements.define("c-turntable", z);
history.scrollRestoration = "manual";
class X extends HTMLElement {
    $sequence;
    sequenceBCR;
    sequenceTarget;
    sequenceDuration;
    sequenceTargetAsPixels;
    sequenceTargetAsProgress;
    progress = 0;
    sequenceUid;
    debounceScrollToTarget;
    unbindScreenListener;
    constructor() {
        super(), this.onProgress = this.onProgress.bind(this), this.scrollToTarget = this.scrollToTarget.bind(this), this.compute = this.compute.bind(this), this.debounceScrollToTarget = k(this.scrollToTarget, 50), this.$sequence = this.querySelector("c-sequence"), this.sequenceUid = this.dataset.sequenceUid, this.sequenceDuration = parseFloat(this.dataset.sequenceDuration), this.sequenceTarget = parseFloat(this.dataset.sequenceTarget), this.sequenceTargetAsProgress = this.sequenceTarget / this.sequenceDuration
    }
    connectedCallback() {
        this.bindEvents(), requestAnimationFrame(() => {
            p.scrollTo("top", {
                immediate: !0,
                duration: 0,
                lerp: 1
            }), this.compute(), this.debounceScrollToTarget()
        })
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        this.unbindScreenListener = D.listen(this.compute), window.addEventListener(`${this.sequenceUid}${T.PROGRESS}`, this.onProgress)
    }
    unbindEvents() {
        window.removeEventListener(`${this.sequenceUid}${T.PROGRESS}`, this.onProgress), this.unbindScreenListener?.()
    }
    compute() {
        this.sequenceBCR = this.$sequence.getBoundingClientRect(), this.sequenceTargetAsPixels = this.offsetTop + (this.sequenceBCR.height - window.innerHeight) * this.sequenceTarget / this.sequenceDuration
    }
    scrollToTarget() {
        p.scrollTo(this.sequenceTargetAsPixels, {
            duration: (1 - this.progress / this.sequenceTargetAsProgress) * 2,
            lerp: 0,
            easing: e => Math.sin(e * Math.PI / 2)
        })
    }
    onProgress(e) {
        const {
            progress: t
        } = e.detail;
        this.progress = t, document.documentElement.classList.toggle("has-pdp-hero-intro", this.progress <= this.sequenceTargetAsProgress + .02), this.progress <= this.sequenceTargetAsProgress && this.debounceScrollToTarget()
    }
}
customElements.define("c-pdp-hero", X);
const q = {
    PROGRESS: "Progress"
};
class N extends HTMLElement {
    uid;
    $sticky;
    $list;
    imageSequence;
    imagePath;
    imageSrc;
    $image;
    tl;
    constructor() {
        super(), this.uid = this.dataset.uid, this.$sticky = this.querySelector("[data-sticky]"), this.$list = this.querySelector("[data-list]"), this.imageSequence = JSON.parse(this.dataset.imageSequence), this.imagePath = this.imageSequence.baseUrl + (d.get().isPortrait ? this.imageSequence?.sources.mobile.path : this.imageSequence?.sources.desktop.path), this.imageSrc = `${this.imagePath}${this.imageSequence.frames}.${this.imageSequence.extension}?v=readyfor`, this.$image = document.createElement("img"), this.$image.src = this.imageSrc, this.$sticky.appendChild(this.$image), this.tl = i.timeline({}), this.onProgress = this.onProgress.bind(this)
    }
    connectedCallback() {
        this.bindEvents();
        const e = Array.from(this.$list.children);
        this.tl.to(this.querySelector("[data-overlay]"), {
            opacity: .4
        }, 0), this.tl.from(this.querySelectorAll("[data-word]"), {
            y: "100%",
            stagger: .1
        }, 0), this.tl.from(e, {
            y: "100%",
            duration: .2,
            stagger: .05,
            opacity: 0
        }, .2), this.tl.addLabel("listStart"), this.tl.to(this.$list, {
            y: "-100%",
            ease: "power2.inOut"
        }, "listStart-=0.3"), this.tl.to(e.splice(0, this.$list.children.length - 1), {
            opacity: 0,
            y: "-100%",
            stagger: .025,
            duration: .3,
            ease: "power2.in"
        }, "listStart"), this.tl.addLabel("listEnd"), this.tl.to(e, {
            x: "-10vw",
            ease: "power2.inOut"
        }, "listEnd-=0.3"), this.tl.to(this.querySelector("[data-fade]"), {
            opacity: .8
        }, "-=0.15"), this.tl.progress(.1).progress(0).pause()
    }
    disconnectedCallback() {
        this.unbindEvents(), this.tl?.kill?.()
    }
    bindEvents() {
        window.addEventListener(`${this.uid}${q.PROGRESS}`, this.onProgress)
    }
    unbindEvents() {
        window.removeEventListener(`${this.uid}${q.PROGRESS}`, this.onProgress)
    }
    onProgress(e) {
        const {
            progress: t
        } = e.detail;
        this.tl.progress(t)
    }
}
customElements.define("c-pdp-ready-for", N);
const E = {
    PROGRESS: "Progress"
};
class _ extends HTMLElement {
    uid;
    tl = null;
    $video;
    $images;
    $visual;
    constructor() {
        super(), this.onProgress = this.onProgress.bind(this), this.uid = this.dataset.uid, this.$visual = this.querySelector("[data-visual]"), this.$video = this.querySelector("[data-video]"), this.$images = this.querySelectorAll("[data-image]"), d.get().isTouchScreen || (this.tl = i.timeline({}))
    }
    connectedCallback() {
        if (this.bindEvents(), this.tl) {
            this.classList.add("-timeline");
            const e = {
                value: 0
            };
            this.tl.set(this.$images, {
                opacity: 0
            }), this.tl.from(e, {
                value: 50,
                ease: "power2.out",
                onUpdate: () => {
                    i.set(this.$video, {
                        clipPath: `inset(0 ${e.value}% 0 ${e.value}% round var(--clip-path-radius))`
                    })
                }
            }), this.tl.set(this.$images, {
                opacity: 0
            }), this.tl.addLabel("afterVideoReveal"), this.tl.set(this.$images, {
                clearProps: "opacity"
            }), this.tl.to(this.$images[0], {
                x: "-20vw",
                ease: "power2.inOut"
            }, "afterVideoReveal"), this.tl.to(this.$images[1], {
                x: "20vw",
                ease: "power2.inOut"
            }, "afterVideoReveal"), this.tl.from(this.$visual, {
                y: "-30vh",
                ease: "sine.out"
            }, 0), this.tl.progress(.1).progress(0).pause()
        }
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        window.addEventListener(`${this.uid}${E.PROGRESS}`, this.onProgress)
    }
    unbindEvents() {
        window.removeEventListener(`${this.uid}${E.PROGRESS}`, this.onProgress), this.tl?.kill?.()
    }
    onProgress(e) {
        const {
            progress: t
        } = e.detail;
        this.tl?.progress(t), this.classList.toggle("-show-content", t >= .7)
    }
}
customElements.define("c-pdp-heritage", _);
const L = {
    PROGRESS: "Progress"
};
class j extends HTMLElement {
    uid;
    constructor() {
        super(), this.uid = this.dataset.uid, this.onProgress = this.onProgress.bind(this)
    }
    connectedCallback() {
        this.bindEvents()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        window.addEventListener(`${this.uid}${L.PROGRESS}`, this.onProgress)
    }
    unbindEvents() {
        window.removeEventListener(`${this.uid}${L.PROGRESS}`, this.onProgress)
    }
    onProgress(e) {
        const {
            progress: t
        } = e.detail;
        this.classList.toggle("is-active", t >= .33)
    }
}
customElements.define("c-pdp-feature", j);
class U extends HTMLElement {
    progress;
    scrollProgressEvent;
    $area;
    unbindScreenListener = () => {};
    $dummyInitial;
    $dummyFinal;
    $title;
    titleOffset = {
        left: 0,
        right: 0
    };
    titleData;
    clipData;
    constructor() {
        super(), this.onScrollProgress = this.onScrollProgress.bind(this), this.onResize = this.onResize.bind(this), this.$area = this.querySelector("[data-area]"), this.$dummyInitial = {
            left: this.querySelector("[data-dummy-initial-left]"),
            right: this.querySelector("[data-dummy-initial-right]")
        }, this.$dummyFinal = {
            left: this.querySelector("[data-dummy-final-left]"),
            right: this.querySelector("[data-dummy-final-right]")
        }, this.$title = {
            left: this.querySelector("[data-title-left]"),
            right: this.querySelector("[data-title-right]")
        }, this.progress = 0, this.scrollProgressEvent = this.$area.getAttribute("data-scroll-event-progress"), this.titleData = {
            from: 0,
            to: 1,
            progress: 0,
            smoothProgress: 0,
            timeline: i.timeline({
                paused: !0
            })
        }, this.clipData = {
            from: 0,
            to: .8,
            progress: 0,
            smoothProgress: 0,
            timeline: i.timeline({
                paused: !0
            })
        }
    }
    connectedCallback() {
        this.bindEvents(), this.initTimelines()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        this.unbindScreenListener = h.subscribe(this.onResize), this.scrollProgressEvent && window.addEventListener(this.scrollProgressEvent, this.onScrollProgress)
    }
    unbindEvents() {
        this.unbindScreenListener?.(), this.scrollProgressEvent && window.removeEventListener(this.scrollProgressEvent, this.onScrollProgress)
    }
    onScrollProgress(e) {
        const {
            progress: t
        } = e.detail;
        this.progress != t && (this.progress = t, this.computeProgress(this.progress))
    }
    onResize() {
        this.computeMetrics(), requestAnimationFrame(() => {
            this.computeProgress(this.progress)
        })
    }
    initTimelines() {
        this.titleData.timeline.to(this.titleData, {
            smoothProgress: 1,
            ease: "power3.inOut"
        }), this.clipData.timeline.to(this.clipData, {
            smoothProgress: 1,
            ease: "power3.inOut"
        })
    }
    computeMetrics() {
        const {
            left: e,
            right: t
        } = this.$dummyInitial, {
            left: s,
            right: a
        } = this.$dummyFinal;
        if (e && t && s && a) {
            const n = e.getBoundingClientRect(),
                r = t.getBoundingClientRect(),
                l = s.getBoundingClientRect(),
                c = a.getBoundingClientRect();
            this.titleOffset = {
                left: l.left - n.left,
                right: c.left - r.left
            }
        }
    }
    computeProgress(e) {
        this.titleData.progress = i.utils.mapRange(this.titleData.from, this.titleData.to, 0, 1, e), this.titleData.progress = i.utils.clamp(0, 1, this.titleData.progress), this.titleData.timeline.progress(this.titleData.progress), this.clipData.progress = i.utils.mapRange(this.clipData.from, this.clipData.to, 0, 1, e), this.clipData.progress = i.utils.clamp(0, 1, this.clipData.progress), this.clipData.timeline.progress(this.clipData.progress), this.animateTitle(), this.animateClip()
    }
    animateTitle() {
        const {
            left: e,
            right: t
        } = this.$title;
        e && t && (e.style.transform = `translate3d(${this.titleOffset.left*this.titleData.smoothProgress}px, 0, 0)`, t.style.transform = `translate3d(${this.titleOffset.right*this.titleData.smoothProgress}px, 0, 0)`)
    }
    animateClip() {
        this.style.setProperty("--clip-progress", String(this.clipData.smoothProgress))
    }
}
customElements.define("c-push-sequence", U);

function V() {
    O.set(!0)
}
const P = document.getElementById("openDialog");
P && P.addEventListener("click", V);
class B extends HTMLElement {
    $tabs;
    $panels = [];
    $firstTab = null;
    $lastTab = null;
    $currentTab = null;
    $oldTab = null;
    $oldPanel = null;
    isTouchOrSmall = d.value?.isTouchOrSmall;
    constructor() {
        super(), this.onKeydown = this.onKeydown.bind(this), this.onClick = this.onClick.bind(this), this.$tabs = Array.from(this.querySelectorAll("[data-tab]"))
    }
    connectedCallback() {
        this.initTabs(), this.isTouchOrSmall ? this.setSelectedTab(null, !0, !0) : this.setSelectedTab(this.$firstTab, !0, !0), this.bindEvents()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        for (let e = 0; e < this.$tabs.length; e += 1) {
            const t = this.$tabs[e];
            t.addEventListener("keydown", this.onKeydown), t.addEventListener("click", this.onClick)
        }
    }
    unbindEvents() {
        for (let e = 0; e < this.$tabs.length; e += 1) {
            const t = this.$tabs[e];
            t.removeEventListener("keydown", this.onKeydown), t.removeEventListener("click", this.onClick)
        }
    }
    onKeydown(e) {
        const t = e.currentTarget;
        let s = !1;
        switch (e.key) {
            case "ArrowLeft":
                this.moveFocusToPreviousTab(t), s = !0;
                break;
            case "ArrowRight":
                this.moveFocusToNextTab(t), s = !0;
                break;
            case "Home":
                this.moveFocusToTab(this.$firstTab), s = !0;
                break;
            case "End":
                this.moveFocusToTab(this.$lastTab), s = !0;
                break
        }
        s && (e.stopPropagation(), e.preventDefault())
    }
    onClick(e) {
        this.setSelectedTab(e.currentTarget)
    }
    initTabs() {
        for (let e = 0; e < this.$tabs.length; e += 1) {
            const t = this.$tabs[e];
            t.tabIndex = -1, t.setAttribute("aria-selected", "false");
            const s = this.querySelector(`#${t.getAttribute("aria-controls")}`);
            this.$panels.push(s), this.$firstTab || (this.$firstTab = t, this.$panels[e].setAttribute("data-default-tab", "")), this.$lastTab = t
        }
    }
    setSelectedTab(e, t = !1, s = !1) {
        const a = () => {
                if (!this.$oldTab) return;
                const c = this.$tabs.indexOf(this.$oldTab);
                this.$oldPanel = this.$panels[c], this.$oldTab.setAttribute("aria-selected", "false"), this.$oldTab.tabIndex = -1, this.$oldPanel.classList.add("is-hidden"), this.$oldPanel.classList.remove("is-active"), this.$oldPanel.hidden = !0, this.$oldPanel.tabIndex = -1
            },
            n = c => {
                for (let o = 0; o < this.$tabs.length; o++) {
                    if (o === c) continue;
                    const S = this.$tabs[o],
                        m = this.$panels[o];
                    S.setAttribute("aria-selected", "false"), S.tabIndex = -1, m.classList.add("is-hidden"), m.classList.remove("is-active"), m.hidden = !0, m.tabIndex = -1
                }
            };
        if (e && e.getAttribute("aria-selected") === "true") return;
        if (!e) {
            n(-1);
            return
        }
        this.$oldTab = this.$currentTab, this.$currentTab = e;
        const r = this.$tabs.indexOf(e),
            l = this.$panels[r];
        this.$currentTab.setAttribute("aria-selected", "true"), this.$currentTab.removeAttribute("tabindex"), l.classList.remove("is-hidden"), l.hidden = !1, l.tabIndex = 0, requestAnimationFrame(() => {
            l.classList.add("is-active"), l.querySelector("[data-turntable-element]")?.active(s, this.$oldPanel ?? void 0, l)
        }), this.$oldTab && !t && this.$currentTab !== this.$oldTab && a?.(), t && n(r)
    }
    moveFocusToTab(e) {
        e.focus()
    }
    moveFocusToPreviousTab(e) {
        let t;
        e === this.$firstTab ? this.$lastTab && this.moveFocusToTab(this.$lastTab) : (t = this.$tabs.indexOf(e), this.moveFocusToTab(this.$tabs[t - 1]))
    }
    moveFocusToNextTab(e) {
        let t;
        e === this.$lastTab ? this.$firstTab && this.moveFocusToTab(this.$firstTab) : (t = this.$tabs.indexOf(e), this.moveFocusToTab(this.$tabs[t + 1]))
    }
}
customElements.define("c-tabs", B);
class b extends HTMLElement {
    static MODAL_ACTIVE_CLASS = "has-explorer-open";
    unbindScreenListener = () => {};
    idleSequencesIds;
    lazySequencesIds;
    sequencesCollection = [];
    sequences = [];
    markersData;
    markersFrameMetrics;
    wHeight = window.innerHeight;
    wWidth = window.innerWidth;
    swiper;
    $currentSequence;
    $imageTransition;
    focusTrap;
    $modal;
    $carousel;
    $carouselItems;
    $modalClose;
    $carouselPrev;
    $carouselNext;
    isAnimating = !1;
    isTouchOrSmall = d.value?.isTouchOrSmall;
    $tabsElement;
    $carouselImages;
    carouselActiveIndex = 0;
    $turntable;
    resetRequired = !1;
    constructor() {
        super(), this.onActivate = this.onActivate.bind(this), this.onPostActivate = this.onPostActivate.bind(this), this.onDeactivate = this.onDeactivate.bind(this), this.onPostDeactivate = this.onPostDeactivate.bind(this), this.onResize = this.onResize.bind(this), this.onMarkerClick = this.onMarkerClick.bind(this), this.onClose = this.onClose.bind(this), this.onCarouselPrev = this.onCarouselPrev.bind(this), this.onCarouselNext = this.onCarouselNext.bind(this), this.idleSequencesIds = JSON.parse(this.getAttribute("data-idle-sequences-ids") ?? "[]"), this.lazySequencesIds = JSON.parse(this.getAttribute("data-lazy-sequences-ids") ?? "[]"), this.markersData = JSON.parse(this.getAttribute("data-markers-data") ?? "[]"), this.markersFrameMetrics = JSON.parse(this.getAttribute("data-markers-frame-metrics") ?? "{ width: 0, height: 0 }"), this.sequencesCollection = [], this.$imageTransition = this.querySelector("[data-transition-image]"), this.$modal = this.querySelector("[data-modal]"), this.$carousel = this.querySelector("[data-carousel]"), this.$carouselItems = Array.from(this.querySelectorAll("[data-carousel-item]")), this.$modalClose = this.querySelector("[data-modal-close]"), this.$carouselPrev = this.querySelector("[data-carousel-prev]"), this.$carouselNext = this.querySelector("[data-carousel-next]"), this.$tabsElement = this.closest("c-tabs"), this.$carouselImages = Array.from(this.querySelectorAll("[data-carousel-image]")), this.$turntable = this.closest("c-turntable"), this.focusTrap = f(this.$modal, {
            onActivate: this.onActivate,
            onPostActivate: this.onPostActivate,
            onDeactivate: this.onDeactivate,
            onPostDeactivate: this.onPostDeactivate
        })
    }
    connectedCallback() {
        this.isTouchOrSmall || this.setSequences(), this.initSwiper(), this.bindEvents()
    }
    disconnectedCallback() {
        this.destroySwiper(), this.unbindEvents()
    }
    bindEvents() {
        this.unbindScreenListener = h.subscribe(this.onResize), this.$modalClose.addEventListener("click", this.onClose), this.isTouchOrSmall || (this.$carouselPrev.addEventListener("click", this.onCarouselPrev), this.$carouselNext.addEventListener("click", this.onCarouselNext), this.sequencesCollection.map(e => {
            e.$marker?.addEventListener("click", this.onMarkerClick)
        }))
    }
    unbindEvents() {
        this.unbindScreenListener?.(), this.$modalClose.addEventListener("click", this.onClose), this.isTouchOrSmall || (this.$carouselPrev.addEventListener("click", this.onCarouselPrev), this.$carouselNext.addEventListener("click", this.onCarouselNext), this.sequencesCollection.map(e => {
            e.$marker?.removeEventListener("click", this.onMarkerClick)
        }))
    }
    onResize({
        height: e
    }) {
        this.wHeight = e, this.wWidth = document.body.offsetWidth, this.setControlsHeight(), this.isTouchOrSmall || this.setMarkerPositions(), this.focusTrap.active && this.scrollToTarget(!0)
    }
    onMarkerClick(e) {
        const s = e.currentTarget.getAttribute("data-marker"),
            a = this.sequencesCollection.findIndex(r => r.uid === s),
            n = this.sequencesCollection[a];
        if (n) {
            if (!n.isReady) return;
            this.swiper?.slideTo(a, 0);
            const {
                $sequence: r
            } = n;
            r.restartSequence({
                startCallback: () => {
                    this.isAnimating = !0, this.$currentSequence?.classList.remove("is-active"), r.classList.add("is-active"), this.$currentSequence = r, this.$modal.classList.add("is-animating"), i.delayedCall(.3, () => {
                        this.$modal.classList.remove("is-animating")
                    })
                },
                endCallback: () => {
                    this.isAnimating = !1
                }
            }), this.scrollToTarget(), this.openModal()
        }
    }
    onActivate() {
        this.$modal.classList.add("is-active"), this.$carouselImages[this.carouselActiveIndex].classList.add("is-active"), requestAnimationFrame(() => {
            this.setAttribute("aria-hidden", "false")
        })
    }
    onPostActivate() {}
    onDeactivate() {
        requestAnimationFrame(() => {
            this.resetRequired = !0, this.$modal.classList.remove("is-active"), this.$modal.setAttribute("aria-hidden", "true"), this.isTouchOrSmall && this.scrollToTarget(!0), i.delayedCall(.4, () => {
                this.isTouchOrSmall && (document.documentElement.classList.remove(b.MODAL_ACTIVE_CLASS), document.querySelector(".c-turntable_inner")?.classList.add("is-inview"))
            })
        })
    }
    onPostDeactivate() {
        this.isTouchOrSmall ? (this.$carouselImages[this.carouselActiveIndex].classList.remove("is-active"), i.delayedCall(.4, () => {
            this.$tabsElement?.setSelectedTab(null, !1, !0)
        })) : this.$currentSequence?.reverseSequence({
            startCallback: () => {
                this.isAnimating = !0
            },
            endCallback: () => {
                this.$currentSequence?.classList.remove("is-active"), this.$currentSequence = void 0, this.isAnimating = !1, this.$modal.classList.remove("is-animating"), this.resetRequired && document.documentElement.classList.remove(b.MODAL_ACTIVE_CLASS), this.resetRequired = !1
            }
        })
    }
    onClose() {
        this.closeModal()
    }
    onCarouselPrev() {
        if (this.isAnimating) return;
        const e = this.$currentSequence ? this.sequences.indexOf(this.$currentSequence) : 0,
            t = e > 0 ? e - 1 : this.sequences.length - 1,
            s = this.sequences[t];
        this.$currentSequence?.reverseSequence({
            startCallback: () => {
                this.isAnimating = !0, this.$modal.classList.add("is-animating")
            },
            endCallback: () => {
                this.$currentSequence?.classList.remove("is-active"), s.classList.add("is-active"), this.swiper?.slideTo(t, 0), s.restartSequence({
                    startCallback: () => {
                        this.$currentSequence?.classList.remove("is-active"), s.classList.add("is-active"), this.$currentSequence = s, this.$modal.classList.remove("is-animating")
                    },
                    endCallback: () => {
                        this.isAnimating = !1
                    }
                })
            }
        })
    }
    onCarouselNext() {
        if (this.isAnimating) return;
        const e = this.$currentSequence ? this.sequences.indexOf(this.$currentSequence) : 0,
            t = e === this.sequences.length - 1 ? 0 : e + 1,
            s = this.sequences[t];
        this.$currentSequence?.reverseSequence({
            startCallback: () => {
                this.isAnimating = !0, this.$modal.classList.add("is-animating")
            },
            endCallback: () => {
                this.$currentSequence?.classList.remove("is-active"), s.classList.add("is-active"), this.swiper?.slideTo(t, 0), s.restartSequence({
                    startCallback: () => {
                        this.$currentSequence?.classList.remove("is-active"), s.classList.add("is-active"), this.$currentSequence = s, this.$modal.classList.remove("is-animating")
                    },
                    endCallback: () => {
                        this.isAnimating = !1
                    }
                })
            }
        })
    }
    initLoad() {
        this.isTouchOrSmall || this.load(this.idleSequencesIds)
    }
    lazyLoad() {
        this.isTouchOrSmall || this.load(this.lazySequencesIds)
    }
    load(e) {
        e.forEach(t => {
            const s = this.sequencesCollection.find(a => a.uid === t);
            if (s) {
                const {
                    $sequence: a,
                    $marker: n
                } = s;
                !s.isLoaded && !s.isReady && a.loadImages({
                    readyCallback: () => {
                        s.isReady = !0, n?.classList.add("is-ready")
                    },
                    loadedCallback: () => {
                        s.isLoaded = !0
                    }
                })
            }
        })
    }
    setSequences() {
        this.sequences = Array.from(this.querySelectorAll("c-sequence")), this.sequences.forEach(e => {
            const t = e.getAttribute("data-uid"),
                s = this.querySelector(`[data-marker="${t}"]`);
            this.sequencesCollection.push({
                uid: t,
                $sequence: e,
                $marker: s,
                isLoaded: !1,
                isReady: !1
            })
        })
    }
    active(e = !1, t, s) {
        !e && !this.isTouchOrSmall ? (this.lazyLoad(), this.onResize(h.get()), this.sequencesCollection.map(a => {
            a.$sequence?.onResize(h.get())
        }), (t.children[0].tagName === "C-TURNTABLE-EXPLORER" || s.getAttribute("data-type") === "interior") && i.fromTo(this.$imageTransition, {
            autoAlpha: 1
        }, {
            autoAlpha: 0,
            duration: 1
        }), this.scrollToTarget()) : e && !this.isTouchOrSmall ? i.set(this.$imageTransition, {
            autoAlpha: 0
        }) : this.openModal()
    }
    setMarkerPositions() {
        const e = this.wWidth / this.wHeight,
            t = this.markersFrameMetrics.width,
            s = this.markersFrameMetrics.height,
            a = t / s;
        let n = this.wWidth,
            r = this.wHeight;
        a > e ? n = this.wHeight * a : r = this.wWidth / a, this.sequencesCollection.forEach(l => {
            const c = this.markersData.find(o => o.id === l.uid);
            if (c) {
                const o = l.$marker;
                if (o) {
                    const S = n / t,
                        m = r / s,
                        A = (n - this.wWidth) / 2,
                        C = (r - this.wHeight) / 2,
                        y = c.coords.x * S - A,
                        R = c.coords.y * m - C;
                    o.style.left = `${y-o.offsetWidth/2}px`, o.style.top = `${R-o.offsetHeight/2}px`
                }
            }
        })
    }
    openModal() {
        document.documentElement.classList.add(b.MODAL_ACTIVE_CLASS), requestAnimationFrame(() => {
            this.focusTrap.activate(), this.setControlsHeight()
        })
    }
    closeModal() {
        this.focusTrap.deactivate()
    }
    initSwiper() {
        let e = {};
        this.isTouchOrSmall ? e = {
            slidesPerView: 1.1,
            loop: !0,
            spaceBetween: 16,
            modules: [I],
            navigation: {
                nextEl: this.$carouselNext,
                prevEl: this.$carouselPrev
            },
            on: {
                slideChange: () => {
                    this.$carouselImages[this.carouselActiveIndex].classList.remove("is-active"), this.carouselActiveIndex = this.swiper?.realIndex || 0, this.$carouselImages[this.carouselActiveIndex].classList.add("is-active")
                }
            },
            breakpoints: {
                780: {
                    slidesPerView: 1,
                    loop: !1
                }
            }
        } : e = {
            noSwiping: !0,
            noSwipingClass: "swiper-slide",
            slidesPerView: 1,
            on: {
                slideChange: () => {
                    this.setControlsHeight()
                }
            }
        }, this.swiper = new x(this.$carousel, e)
    }
    destroySwiper() {
        this.swiper?.destroy(!0, !0)
    }
    setControlsHeight() {
        this.$modal.style.setProperty("--tile-height", "auto"), requestAnimationFrame(() => {
            if (this.isTouchOrSmall) {
                const e = Math.max(...this.$carouselItems.map(t => t.offsetHeight));
                this.$modal.style.setProperty("--tile-height", `${e}px`)
            } else this.$modal.style.setProperty("--tile-height", `${this.$carouselItems[this.swiper?.activeIndex||0].offsetHeight}px`)
        })
    }
    scrollToTarget(e = !1) {
        const t = this.$turntable.getBoundingClientRect();
        $.value.scrollTo(this.$turntable, {
            offset: t.height - window.innerHeight,
            immediate: e
        })
    }
}
customElements.define("c-turntable-explorer", b);
class g extends HTMLElement {
    static MODAL_ACTIVE_CLASS = "has-viewer-open";
    static PIXES_PER_FRAME = 10;
    unbindScreenListener = () => {};
    $imageTransition;
    $tabsElement;
    isTouchOrSmall = d.value?.isTouchOrSmall;
    sequenceObj = null;
    $modal;
    focusTrap;
    dragState = {
        startX: 0,
        lastX: 0,
        oldX: 0,
        x: 0,
        smoothX: 0,
        lerp: .1,
        max: 0,
        isStarted: !1
    };
    isRafPlaying = !1;
    rafIncrement = 0;
    closeCallback = () => {};
    $modalClose;
    $turntable;
    isLeaving = !1;
    constructor() {
        super(), this.onActivate = this.onActivate.bind(this), this.onPostActivate = this.onPostActivate.bind(this), this.onDeactivate = this.onDeactivate.bind(this), this.onPostDeactivate = this.onPostDeactivate.bind(this), this.onDragStart = this.onDragStart.bind(this), this.onDragEnd = this.onDragEnd.bind(this), this.onDrag = this.onDrag.bind(this), this.onDragUpdate = this.onDragUpdate.bind(this), this.onClose = this.onClose.bind(this), this.onResize = this.onResize.bind(this), this.$imageTransition = this.querySelector("[data-transition-image]"), this.$modal = this.querySelector("[data-modal]"), this.$tabsElement = this.closest("c-tabs"), this.$modalClose = this.querySelector("[data-modal-close]"), this.$turntable = this.closest("c-turntable"), this.focusTrap = f(this.$modal, {
            onActivate: this.onActivate,
            onPostActivate: this.onPostActivate,
            onDeactivate: this.onDeactivate,
            onPostDeactivate: this.onPostDeactivate
        })
    }
    connectedCallback() {
        this.setSequence(), this.bindEvents()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        this.$modalClose.addEventListener("click", this.onClose), this.unbindScreenListener = h.listen(this.onResize), this.addEventListener("pointerdown", this.onDragStart), this.addEventListener("pointerup", this.onDragEnd), this.addEventListener("pointerleave", this.onDragEnd), this.addEventListener("pointermove", this.onDrag)
    }
    unbindEvents() {
        this.unbindScreenListener?.(), this.$modalClose.removeEventListener("click", this.onClose), this.removeEventListener("pointerdown", this.onDragStart), this.removeEventListener("pointerup", this.onDragEnd), this.removeEventListener("pointerleave", this.onDragEnd), this.removeEventListener("pointermove", this.onDrag)
    }
    onResize() {
        this.focusTrap.active && this.scrollToTarget(!0)
    }
    onDragStart(e) {
        this.$modalClose.contains(e.target) || e.target === this.$modalClose || this.isLeaving || (this.classList.add("is-dragging"), this.dragState.isStarted = !0, this.dragState.oldX = this.dragState.x, this.dragState.startX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, this.play())
    }
    onDragEnd() {
        this.dragState.isStarted && (this.dragState.isStarted = !1, this.classList.remove("is-dragging"))
    }
    onDrag(e) {
        if (!this.dragState.isStarted) return;
        const t = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
        this.dragState.x = this.dragState.oldX + (t - this.dragState.startX), this.dragState.lastX = t
    }
    onDragUpdate() {
        this.dragState.smoothX += (this.dragState.x - this.dragState.smoothX) * this.dragState.lerp, this.dragState.smoothX = M(this.dragState.smoothX, 1), this.computeSequenceProgress(), Math.abs(this.dragState.smoothX - this.dragState.x) <= .5 && !this.dragState.isStarted && (this.rafIncrement++, this.rafIncrement >= 1 && (this.pause(), this.closeCallback()))
    }
    onClose() {
        this.closeModal()
    }
    play() {
        this.isRafPlaying || (this.isRafPlaying = !0, this.rafIncrement = 0, i.ticker.add(this.onDragUpdate))
    }
    pause() {
        this.isRafPlaying && (this.isRafPlaying = !1, i.ticker.remove(this.onDragUpdate))
    }
    onActivate() {
        this.$modal.classList.add("is-active"), requestAnimationFrame(() => {
            this.setAttribute("aria-hidden", "false")
        })
    }
    onPostActivate() {
        this.isTouchOrSmall || this.scrollToTarget(!1)
    }
    onDeactivate() {
        requestAnimationFrame(() => {
            this.$modal.classList.remove("is-active"), this.$modal.setAttribute("aria-hidden", "true"), this.isTouchOrSmall && this.scrollToTarget(!0)
        })
    }
    onPostDeactivate() {
        this.reset()
    }
    initLoad() {}
    lazyLoad() {
        this.load()
    }
    load() {
        if (this.sequenceObj === null) return;
        const {
            $sequence: e
        } = this.sequenceObj;
        !this.sequenceObj.isLoaded && !this.sequenceObj.isReady && e.loadImages({
            readyCallback: () => {
                this.sequenceObj.isReady = !0
            },
            loadedCallback: () => {
                this.sequenceObj.isLoaded = !0
            }
        })
    }
    setSequence() {
        const e = this.querySelector("c-sequence"),
            t = e.getAttribute("data-uid");
        this.sequenceObj = {
            uid: t,
            $sequence: e,
            isLoaded: !1,
            isReady: !1
        }, requestAnimationFrame(() => {
            this.dragState.max = (e.imagesSequence?.frames || 0) * g.PIXES_PER_FRAME
        })
    }
    computeSequenceProgress() {
        if (this.sequenceObj === null) return;
        const {
            $sequence: e
        } = this.sequenceObj, t = this.dragState.smoothX % this.dragState.max;
        let s;
        Math.sign(t) === -1 ? s = t + this.dragState.max : s = t;
        const a = F(0, 1, H(0, this.dragState.max, 0, 1, s));
        e.playerTimeline?.progress(a)
    }
    active(e = !1, t) {
        e || (this.lazyLoad(), this.sequenceObj?.$sequence?.onResize(h.get()), t?.getAttribute("data-type") === "interior" ? i.fromTo(this.$imageTransition, {
            autoAlpha: 1
        }, {
            autoAlpha: 0,
            duration: 1
        }) : i.set(this.$imageTransition, {
            autoAlpha: 0
        })), this.openModal()
    }
    openModal() {
        document.documentElement.classList.add(g.MODAL_ACTIVE_CLASS), this.closeCallback = () => {}, requestAnimationFrame(() => {
            this.focusTrap.activate(), this.focus()
        })
    }
    closeModal() {
        this.focusTrap.deactivate()
    }
    reset() {
        if (this.isTouchOrSmall) document.documentElement.classList.remove(g.MODAL_ACTIVE_CLASS), document.querySelector(".c-turntable_inner")?.classList.add("is-inview"), i.delayedCall(.4, () => {
            this.$tabsElement?.setSelectedTab(null, !1, !0)
        });
        else {
            const e = Math.abs(this.dragState.smoothX % this.dragState.max),
                t = Math.min(e, this.dragState.max - e);
            Math.abs((this.dragState.smoothX + t) % this.dragState.max) === 0 ? this.dragState.x = this.dragState.smoothX + t : Math.abs((this.dragState.smoothX - t) % this.dragState.max) === 0 && (this.dragState.x = this.dragState.smoothX - t), this.isLeaving = !0, this.closeCallback = () => {
                document.documentElement.classList.remove(g.MODAL_ACTIVE_CLASS), this.$tabsElement?.setSelectedTab(this.$tabsElement?.$firstTab, !1, !0), document.activeElement?.blur(), this.isLeaving = !1
            }, this.play()
        }
    }
    scrollToTarget(e = !1, t = () => {}) {
        const s = this.$turntable.getBoundingClientRect();
        $.value.scrollTo(this.$turntable, {
            offset: s.height - window.innerHeight,
            immediate: e,
            onComplete: t
        })
    }
}
customElements.define("c-turntable-viewer", g);
class v extends HTMLElement {
    static MODAL_ACTIVE_CLASS = "has-dimensions-open";
    unbindScreenListener = () => {};
    $modal;
    $tabsElement;
    focusTrap;
    $modalClose;
    $turntable;
    isTouchOrSmall = d.value?.isTouchOrSmall;
    constructor() {
        super(), this.onActivate = this.onActivate.bind(this), this.onPostActivate = this.onPostActivate.bind(this), this.onDeactivate = this.onDeactivate.bind(this), this.onPostDeactivate = this.onPostDeactivate.bind(this), this.onClose = this.onClose.bind(this), this.onResize = this.onResize.bind(this), this.$modal = this.querySelector("[data-modal]"), this.$tabsElement = this.closest("c-tabs"), this.$modalClose = this.querySelector("[data-modal-close]"), this.$turntable = this.closest("c-turntable"), this.focusTrap = f(this.$modal, {
            onActivate: this.onActivate,
            onPostActivate: this.onPostActivate,
            onDeactivate: this.onDeactivate,
            onPostDeactivate: this.onPostDeactivate
        })
    }
    connectedCallback() {
        this.bindEvents()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        this.$modalClose.addEventListener("click", this.onClose), this.unbindScreenListener = h.listen(this.onResize)
    }
    unbindEvents() {
        this.$modalClose.removeEventListener("click", this.onClose), this.unbindScreenListener?.()
    }
    onResize() {
        this.focusTrap.active && this.scrollToTarget(!0)
    }
    onActivate() {
        this.$modal.classList.add("is-active"), requestAnimationFrame(() => {
            this.setAttribute("aria-hidden", "false")
        })
    }
    onPostActivate() {
        this.isTouchOrSmall || this.scrollToTarget(!1)
    }
    onDeactivate() {
        requestAnimationFrame(() => {
            this.$modal.classList.remove("is-active"), this.$modal.setAttribute("aria-hidden", "true"), this.isTouchOrSmall && this.scrollToTarget(!0)
        })
    }
    onPostDeactivate() {
        this.reset()
    }
    onClose() {
        this.closeModal()
    }
    initLoad() {}
    active() {
        this.openModal()
    }
    openModal() {
        document.documentElement.classList.add(v.MODAL_ACTIVE_CLASS), requestAnimationFrame(() => {
            this.focusTrap.activate(), this.focus()
        })
    }
    closeModal() {
        this.focusTrap.deactivate()
    }
    reset() {
        this.isTouchOrSmall ? (document.documentElement.classList.remove(v.MODAL_ACTIVE_CLASS), document.querySelector(".c-turntable_inner")?.classList.add("is-inview"), i.delayedCall(.4, () => {
            this.$tabsElement?.setSelectedTab(null, !1, !0)
        })) : (document.documentElement.classList.remove(v.MODAL_ACTIVE_CLASS), this.$tabsElement?.setSelectedTab(this.$tabsElement?.$firstTab, !1, !0), document.activeElement?.blur())
    }
    scrollToTarget(e = !1, t = () => {}) {
        const s = this.$turntable.getBoundingClientRect();
        $.value.scrollTo(this.$turntable, {
            offset: s.height - window.innerHeight,
            immediate: e,
            onComplete: t
        })
    }
}
customElements.define("c-turntable-dimensions", v);