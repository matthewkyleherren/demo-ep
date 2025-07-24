import "./hoisted.DEENYDYk.js";
import {
    g as t
} from "./index.BDT3iC5Q.js";
import "./CinematicUIContent.astro_astro_type_script_index_0_lang.CDAFEDhC.js";
import "./AutoplayVideo.CtUmkCwP.js";
import "./Scroll.Bt_JG0O1.js";
import "./index.BSdFiPHn.js";
import "./maths.BC202PIA.js";
import "./_commonjsHelpers.Cpj98o6Y.js";
class o extends HTMLElement {
    onScrollProgressBind;
    tw;
    constructor() {
        super(), this.onScrollProgressBind = this.onScrollProgress.bind(this), this.tw = t.from(this.querySelector(".c-product-tile_image"), {
            scale: 1.1,
            ease: "power2.out"
        }).progress(0).pause()
    }
    connectedCallback() {
        this.bindEvents()
    }
    disconnectedCallback() {
        this.tw?.kill?.(), this.unbindEvents()
    }
    bindEvents() {
        window.addEventListener("scrollProgress", this.onScrollProgressBind)
    }
    unbindEvents() {
        window.removeEventListener("scrollProgress", this.onScrollProgressBind)
    }
    onScrollProgress({
        detail: s
    }) {
        s.target == this && this.tw.progress(s.progress)
    }
}
customElements.define("c-product-tile", o);
const i = {
    PROGRESS: "Progress"
};
class n extends HTMLElement {
    tl;
    uid;
    constructor() {
        super(), this.onTitleProgress = this.onTitleProgress.bind(this), this.uid = this.dataset.uid, this.tl = t.timeline({})
    }
    connectedCallback() {
        this.bindEvents(), this.tl.from(Array.from(this.querySelectorAll("[data-word]")).map(s => s.children), {
            y: "100%",
            ease: "power4.out",
            stagger: .2
        }), this.tl.progress(.1).progress(0).pause()
    }
    disconnectedCallback() {
        this.unbindEvents(), this.tl?.kill?.()
    }
    bindEvents() {
        window.addEventListener(this.uid + i.PROGRESS, this.onTitleProgress)
    }
    unbindEvents() {
        window.removeEventListener(this.uid + i.PROGRESS, this.onTitleProgress)
    }
    onTitleProgress(s) {
        const {
            progress: e
        } = s.detail;
        this.tl.progress(e)
    }
}
customElements.define("c-viewfinder-title", n);
class l extends HTMLElement {
    progress = 0;
    scrollProgressEvent;
    $area;
    progressObject = {
        value: 0,
        timeline: t.timeline({
            paused: !0
        })
    };
    constructor() {
        super(), this.onScrollProgress = this.onScrollProgress.bind(this), this.$area = this.querySelector("[data-area]"), this.scrollProgressEvent = this.$area.getAttribute("data-scroll-event-progress")
    }
    connectedCallback() {
        this.bindEvents(), this.initProgressTimeline()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        this.scrollProgressEvent && window.addEventListener(this.scrollProgressEvent, this.onScrollProgress)
    }
    unbindEvents() {
        this.scrollProgressEvent && window.removeEventListener(this.scrollProgressEvent, this.onScrollProgress)
    }
    onScrollProgress(s) {
        const {
            progress: e
        } = s.detail;
        this.progress != e && (this.progress = e, this.progressObject.timeline.progress(e), requestAnimationFrame(() => {
            this.style.setProperty("--progress", this.progressObject.value.toString())
        }))
    }
    initProgressTimeline() {
        this.progressObject.timeline.to(this.progressObject, {
            value: 1,
            duration: 1,
            ease: "sine.inOut"
        })
    }
}
customElements.define("c-home-treadmill", l);