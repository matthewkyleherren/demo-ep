import {
    $ as p
} from "./hoisted.DEENYDYk.js";
import {
    g as i
} from "./index.BDT3iC5Q.js";
import {
    $ as m
} from "./AutoplayVideo.CtUmkCwP.js";
import {
    H as l
} from "./HorizontalOutro.Dt8UPcma.js";
import "./hoisted.DNKsZ-EY.js";
import "./Scroll.Bt_JG0O1.js";
import "./index.BSdFiPHn.js";
import "./_commonjsHelpers.Cpj98o6Y.js";
import "./maths.BC202PIA.js";
import "./index.CJ4e7_2M.js";
class b extends HTMLElement {
    MOBILE_CAROUSEL_INTERVAL = 500;
    progress;
    scrollProgressEvent;
    $dummyInitial;
    $dummyFinal;
    $title;
    titleOffset;
    $labels;
    $thumbnails;
    $thumbnailsInner;
    $inner;
    $cover;
    $coverImage;
    $line;
    clip;
    titleData;
    thumbnailsData;
    coverData;
    unbindScreenListener = () => {};
    constructor() {
        super(), this.onScrollProgress = this.onScrollProgress.bind(this), this.onResize = this.onResize.bind(this), this.onInview = this.onInview.bind(this), this.nextThumbnail = this.nextThumbnail.bind(this), this.$dummyInitial = {
            left: this.querySelector("[data-dummy-initial-left]"),
            right: this.querySelector("[data-dummy-initial-right]")
        }, this.$dummyFinal = {
            left: this.querySelector("[data-dummy-final-left]"),
            right: this.querySelector("[data-dummy-final-right]")
        }, this.$title = {
            left: this.querySelector("[data-title-left]"),
            right: this.querySelector("[data-title-right]")
        }, this.$labels = Array.from(this.querySelectorAll("[data-title-label]")), this.$thumbnails = Array.from(this.querySelectorAll("[data-thumbnail]")), this.$thumbnailsInner = this.querySelector("[data-thumbnails-inner]"), this.$inner = this.querySelector("[data-inner]"), this.$cover = this.querySelector("[data-cover]"), this.$coverImage = this.querySelector("[data-cover-image]"), this.$line = this.querySelector("[data-line]"), this.progress = 0, this.scrollProgressEvent = this.getAttribute("data-scroll-event-progress"), this.titleOffset = {
            left: 0,
            right: 0
        }, this.clip = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, this.titleData = {
            from: 0,
            to: .7,
            progress: 0,
            smoothProgress: 0,
            timeline: i.timeline({
                paused: !0
            }),
            step: 1 / this.$labels.length
        }, this.thumbnailsData = {
            from: 0,
            to: .4,
            current: 0,
            progress: 0,
            step: 1 / this.$thumbnails.length,
            interval: void 0
        }, this.coverData = {
            from: this.thumbnailsData.to,
            to: 1 - window.innerHeight / (this.clientHeight - window.innerHeight),
            scaleFrom: .7,
            progress: 0,
            smoothProgress: 0,
            timeline: i.timeline({
                paused: !0
            })
        }
    }
    connectedCallback() {
        if (m.get().isMedium) {
            this.initThumbnailsCarousel();
            return
        }
        this.bindEvents(), this.initTimelines()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        this.unbindScreenListener = p.subscribe(this.onResize), this.scrollProgressEvent && window.addEventListener(this.scrollProgressEvent, this.onScrollProgress)
    }
    unbindEvents() {
        this.unbindScreenListener?.(), this.scrollProgressEvent && window.removeEventListener(this.scrollProgressEvent, this.onScrollProgress)
    }
    onScrollProgress(t) {
        const {
            progress: e
        } = t.detail;
        this.progress != e && (this.progress = e, this.computeProgress(this.progress))
    }
    onResize() {
        this.computeMetrics(), requestAnimationFrame(() => {
            this.computeProgress(this.progress)
        })
    }
    onInview(t) {
        const e = t.detail.way,
            s = t.detail.from;
        e === "leave" && s === "end" ? this.thumbnailsData.interval !== void 0 && clearInterval(this.thumbnailsData.interval) : s === "end" && (this.thumbnailsData.interval = setInterval(this.nextThumbnail, this.MOBILE_CAROUSEL_INTERVAL))
    }
    initTimelines() {
        this.titleData.timeline.to(this.titleData, {
            smoothProgress: 1,
            ease: "power3.out"
        }), this.coverData.timeline.to(this.coverData, {
            smoothProgress: 1,
            ease: "power3.inOut"
        })
    }
    computeMetrics() {
        this.coverData.to = 1 - window.innerHeight / (this.clientHeight - window.innerHeight);
        const {
            left: t,
            right: e
        } = this.$dummyInitial, {
            left: s,
            right: r
        } = this.$dummyFinal;
        if (t && e && s && r) {
            const n = t.getBoundingClientRect(),
                o = e.getBoundingClientRect(),
                g = s.getBoundingClientRect(),
                u = r.getBoundingClientRect();
            this.titleOffset = {
                left: g.left - n.left,
                right: u.left - o.left
            };
            const d = Math.abs(Math.min(this.titleOffset.left, this.titleOffset.right));
            this.$line.style.width = `${2*d}px`
        }
        this.clip = {
            top: this.$thumbnailsInner.getBoundingClientRect().top - this.$inner.getBoundingClientRect().top,
            right: this.$thumbnailsInner.getBoundingClientRect().left,
            bottom: this.$inner.getBoundingClientRect().bottom - this.$thumbnailsInner.getBoundingClientRect().bottom,
            left: this.$thumbnailsInner.getBoundingClientRect().left
        }
    }
    computeProgress(t) {
        this.titleData.progress = i.utils.mapRange(this.titleData.from, this.titleData.to, 0, 1, t), this.titleData.progress = i.utils.clamp(0, 1, this.titleData.progress), this.titleData.timeline.progress(this.titleData.progress), this.thumbnailsData.progress = i.utils.mapRange(this.thumbnailsData.from, this.thumbnailsData.to, 0, 1, t), this.thumbnailsData.progress = i.utils.clamp(0, 1, this.thumbnailsData.progress), this.coverData.progress = i.utils.mapRange(this.coverData.from, this.coverData.to, 0, 1, t), this.coverData.progress = i.utils.clamp(0, 1, this.coverData.progress), this.coverData.timeline.progress(this.coverData.progress), this.animateTitle(), this.animateThumbnails(), this.animateCover()
    }
    animateTitle() {
        const {
            left: t,
            right: e
        } = this.$title;
        t && e && (t.style.transform = `translate3d(${this.titleOffset.left*this.titleData.smoothProgress}px, 0, 0)`, e.style.transform = `translate3d(${this.titleOffset.right*this.titleData.smoothProgress}px, 0, 0)`, this.$line.style.transform = `scaleX(${1-this.titleData.smoothProgress})`);
        const s = Math.min(Math.floor(this.titleData.smoothProgress / this.titleData.step), this.$labels.length - 1);
        this.$labels.forEach((r, n) => r.classList.toggle("is-active", n === s))
    }
    animateThumbnails() {
        const t = Math.min(Math.floor(this.thumbnailsData.progress / this.thumbnailsData.step), this.$thumbnails.length - 1);
        this.$thumbnails.forEach((e, s) => e.classList.toggle("is-active", s === t))
    }
    animateCover() {
        this.coverData.progress > 0 && !this.$inner.classList.contains("is-visible") ? this.$inner.classList.add("is-visible") : this.coverData.progress === 0 && this.$inner.classList.contains("is-visible") && this.$inner.classList.remove("is-visible");
        const t = this.clip.top * (1 - this.coverData.smoothProgress),
            e = this.clip.right * (1 - this.coverData.smoothProgress),
            s = this.clip.bottom * (1 - this.coverData.smoothProgress),
            r = this.clip.left * (1 - this.coverData.smoothProgress),
            n = 24 * (1 - this.coverData.smoothProgress);
        this.$cover.style.clipPath = `inset(${t}px ${e}px ${s}px ${r}px round ${n}px)`;
        const o = i.utils.mapRange(0, 1, this.coverData.scaleFrom, 1, this.coverData.smoothProgress);
        this.$coverImage.style.transform = `scale(${o})`
    }
    initThumbnailsCarousel() {
        window.addEventListener("heritageHeroInview", this.onInview), this.thumbnailsData.interval = setInterval(this.nextThumbnail, this.MOBILE_CAROUSEL_INTERVAL), this.nextThumbnail()
    }
    nextThumbnail() {
        this.$thumbnails.forEach((t, e) => {
            t.classList.toggle("is-active", e === this.thumbnailsData.current)
        }), this.thumbnailsData.current = (this.thumbnailsData.current + 1) % this.$thumbnails.length
    }
}
customElements.define("c-heritage-hero", b);
class v extends HTMLElement {
    tl;
    counterValue;
    uid;
    constructor() {
        super(), this.counterValue = 1961, this.uid = this.dataset.uid, this.tl = i.timeline({}), this.onProgress = this.onProgress.bind(this), document.body.appendChild(this)
    }
    connectedCallback() {
        this.bindEvents();
        const t = "power2.in",
            e = this.querySelector("[data-counter]");
        this.tl.to(this.querySelector("[data-range-bg]"), {
            x: "-100%",
            force3D: !0,
            ease: t
        }, 0), this.tl.to(this, {
            counterValue: 2024,
            ease: t,
            onUpdate: () => {
                e.innerHTML = Math.round(this.counterValue).toString()
            }
        }, 0), this.tl.from(this, {
            opacity: 0,
            duration: .025
        }, 0), this.tl.to(this, {
            opacity: 0,
            duration: .05
        }, "-=0.05"), this.tl.progress(.1).progress(0).pause()
    }
    disconnectedCallback() {
        this.unbindEvents(), this.tl?.kill?.()
    }
    bindEvents() {
        window.addEventListener(`${this.uid}${l.FIXED_PROGRESS}`, this.onProgress)
    }
    unbindEvents() {
        window.removeEventListener(`${this.uid}${l.FIXED_PROGRESS}`, this.onProgress)
    }
    onProgress(t) {
        const {
            progress: e
        } = t.detail;
        this.classList.toggle("is-active", e > 0 && e < 1), this.tl.progress(e)
    }
}
customElements.define("c-horizontal-gallery-timeline", v);
const h = {
    PROGRESS: "Progress"
};
class f extends HTMLElement {
    uid;
    $sticky;
    $list;
    imageSequence;
    imagePath;
    imageSrc;
    $image;
    tl;
    constructor() {
        super(), this.uid = this.dataset.uid, this.$sticky = this.querySelector("[data-sticky]"), this.$list = this.querySelector("[data-list]"), this.imageSequence = JSON.parse(this.dataset.imageSequence), this.imagePath = this.imageSequence.baseUrl + (m.get().isPortrait ? this.imageSequence?.sources.mobile.path : this.imageSequence?.sources.desktop.path), this.imageSrc = `${this.imagePath}${this.imageSequence.frames}.${this.imageSequence.extension}?v=readyfor`, this.$image = document.createElement("img"), this.$image.src = this.imageSrc, this.$sticky.appendChild(this.$image), this.tl = i.timeline({}), this.onProgress = this.onProgress.bind(this)
    }
    connectedCallback() {
        this.bindEvents();
        const t = Array.from(this.$list.children);
        this.tl.to(this.querySelector("[data-overlay]"), {
            opacity: .4
        }, 0), this.tl.from(this.querySelectorAll("[data-word]"), {
            y: "100%",
            stagger: .1
        }, 0), this.tl.from(t, {
            y: "100%",
            duration: .2,
            stagger: .05,
            opacity: 0
        }, .2), this.tl.addLabel("listStart"), this.tl.to(this.$list, {
            y: "-100%",
            ease: "power2.inOut"
        }, "listStart-=0.3"), this.tl.to(t.splice(0, this.$list.children.length - 0), {
            opacity: 0,
            y: "-100%",
            stagger: .025,
            duration: .3,
            ease: "power2.in"
        }, "listStart"), this.tl.to(this.querySelector("[data-fade]"), {
            opacity: .8
        }, "-=0.15"), this.tl.progress(.1).progress(0).pause()
    }
    disconnectedCallback() {
        this.unbindEvents(), this.tl?.kill?.()
    }
    bindEvents() {
        window.addEventListener(`${this.uid}${h.PROGRESS}`, this.onProgress)
    }
    unbindEvents() {
        window.removeEventListener(`${this.uid}${h.PROGRESS}`, this.onProgress)
    }
    onProgress(t) {
        const {
            progress: e
        } = t.detail;
        this.tl.progress(e)
    }
}
customElements.define("c-pdp-ready-for", f);
const c = {
    SCROLL: "Scroll"
};
class $ extends HTMLElement {
    uid;
    tl;
    titleLines;
    paragraphs;
    badge;
    constructor() {
        super(), this.uid = this.getAttribute("data-uid"), this.onProgress = this.onProgress.bind(this), this.titleLines = this.querySelectorAll("h2 > span > span"), this.paragraphs = this.querySelectorAll(".c-home-camp_text p"), this.badge = this.querySelector(".c-home-camp_badge"), this.tl = i.timeline({})
    }
    connectedCallback() {
        this.bindEvents(), this.tl.from(this.titleLines, {
            y: "100%",
            stagger: .1,
            duration: .33
        }, "0"), this.tl.from(this.paragraphs, {
            y: 10,
            opacity: 0,
            stagger: .1,
            duration: .33
        }, "0.45"), this.tl.from(this.badge, {
            y: 10,
            opacity: 0,
            rotate: "30deg"
        }, "=-0.5"), this.tl.progress(.1).progress(0).pause()
    }
    disconnectedCallback() {
        this.unbindEvents(), this.tl.kill()
    }
    bindEvents() {
        window.addEventListener(`${this.uid}${c.SCROLL}`, this.onProgress)
    }
    unbindEvents() {
        window.removeEventListener(`${this.uid}${c.SCROLL}`, this.onProgress)
    }
    onProgress(t) {
        const {
            progress: e
        } = t.detail;
        this.tl.progress(e)
    }
}
customElements.define("c-home-camp-content", $);