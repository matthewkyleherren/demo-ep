import {
    g as l
} from "./index.BDT3iC5Q.js";
import {
    $ as S
} from "./hoisted.DEENYDYk.js";
import {
    $ as u
} from "./AutoplayVideo.CtUmkCwP.js";
import {
    c as y,
    m as C
} from "./maths.BC202PIA.js";
const r = {
        CALL: "Call",
        LAZY_CALL: "LazyCall",
        PROGRESS: "Progress"
    },
    m = {
        SCROLL: "Scroll"
    };
class f extends HTMLElement {
    uid;
    tl;
    titleLines;
    paragraphs;
    badge;
    constructor() {
        super(), this.uid = this.getAttribute("data-uid"), this.onProgress = this.onProgress.bind(this), this.titleLines = this.querySelectorAll("h2 > span > span"), this.paragraphs = this.querySelectorAll(".c-home-camp_text p"), this.badge = this.querySelector(".c-home-camp_badge"), this.tl = l.timeline({})
    }
    connectedCallback() {
        this.bindEvents(), this.tl.from(this.titleLines, {
            y: "100%",
            stagger: .1
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
        window.addEventListener(`${this.uid}${m.SCROLL}`, this.onProgress)
    }
    unbindEvents() {
        window.removeEventListener(`${this.uid}${m.SCROLL}`, this.onProgress)
    }
    onProgress(e) {
        const {
            progress: t
        } = e.detail;
        this.tl.progress(t)
    }
}
customElements.define("c-home-camp-content", f);
class q extends HTMLElement {
    unbindScreenListener = () => {};
    $video;
    $canvas;
    $wrapper;
    $lazyTrigger = null;
    duration = 0;
    progress = {
        value: 0
    };
    type = "scroll";
    loading = "auto";
    playerTimeline = null;
    isPlayRequested = !1;
    isInitialized = !1;
    loadingState = "";
    $sequenceKeys;
    imagesSequence;
    ctx = null;
    dpr = window.devicePixelRatio;
    canvasImageWidth = 0;
    canvasImageHeight = 0;
    drawingWidth = 0;
    drawingHeight = 0;
    canvasWidth = 0;
    canvasHeight = 0;
    canvasCenterX = 0;
    canvasCenterY = 0;
    canvasImagePath;
    imagesBuckets = [];
    images = [];
    isSequenceImageCanPlay = !1;
    totalLoadedImages = 0;
    currentFrameIndex = 0;
    isPlaying = !1;
    isLoadRequested = !1;
    uid = "sequence";
    onReverseSequenceCallback = () => {};
    onCompleteSequenceCallback = () => {};
    onReadyCallback = null;
    onLoadedCallback = null;
    constructor() {
        super(), this.onVideoDataLoadedChange = this.onVideoDataLoadedChange.bind(this), this.onProgress = this.onProgress.bind(this), this.onScrollCall = this.onScrollCall.bind(this), this.onLazyCall = this.onLazyCall.bind(this), this.onVideoUpdate = this.onVideoUpdate.bind(this), this.onResize = this.onResize.bind(this), this.renderSequence = this.renderSequence.bind(this), this.$video = this.querySelector("[data-sequence-videos]"), this.$canvas = this.querySelector("[data-sequence-images]"), this.$wrapper = this.querySelector("[data-sequence-wrapper]"), this.$lazyTrigger = this.querySelector("[data-sequence-lazy-trigger]"), this.$sequenceKeys = this.querySelectorAll("[data-sequence-key]"), this.imagesSequence = this.dataset.imagesSequence ? JSON.parse(this.dataset.imagesSequence) : null, this.imagesSequence && this.imagesSequence.canPlayThreshold === void 0 && (this.imagesSequence.canPlayThreshold = 1 / this.imagesSequence.frames), this.imagesSequence && this.imagesSequence.prioritizedFrames === void 0 && (this.imagesSequence.prioritizedFrames = 0), this.uid = this.getAttribute("data-uid"), this.type = this.getAttribute("data-type"), this.loading = this.getAttribute("data-loading")
    }
    connectedCallback() {
        this.init(), this.bindEvents(), this.$video && this.bindVideoEvents(), this.$canvas && this.bindCanvasEvents()
    }
    disconnectedCallback() {
        this.unbindEvents(), this.$canvas && this.unbindCanvasEvents(), l.ticker.remove(this.onVideoUpdate), this.isInitialized = !1
    }
    bindEvents() {
        this.type === "scroll" && window.addEventListener(`${this.uid}${r.PROGRESS}`, this.onProgress), this.type === "autoplay" && window.addEventListener(`${this.uid}${r.CALL}`, this.onScrollCall), this.loading === "lazy" && window.addEventListener(`${this.uid}${r.LAZY_CALL}`, this.onLazyCall, {
            once: !0
        })
    }
    unbindEvents() {
        this.type === "scroll" && window.removeEventListener(`${this.uid}${r.PROGRESS}`, this.onProgress), this.type === "autoplay" && window.removeEventListener(`${this.uid}${r.CALL}`, this.onScrollCall), this.loading === "lazy" && window.removeEventListener(`${this.uid}${r.LAZY_CALL}`, this.onLazyCall)
    }
    bindVideoEvents() {
        this.$video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA ? this.onVideoDataLoadedChange() : (this.$video.addEventListener("loadeddata", this.onVideoDataLoadedChange, {
            once: !0
        }), this.type === "autoplay" && this.classList.contains("is-inview") && this.$video && this.$video.play())
    }
    bindCanvasEvents() {
        this.unbindScreenListener = S.subscribe(this.onResize)
    }
    unbindCanvasEvents() {
        this.unbindScreenListener?.()
    }
    onProgress(e) {
        if (this.type !== "scroll") return;
        const {
            progress: t
        } = e.detail;
        this.progress.value = t, this.updateKeysProgress(), this.renderSequence()
    }
    onScrollCall(e) {
        const {
            way: t
        } = e.detail;
        switch (t) {
            case "enter":
                this.isPlayRequested = !0, this.$video && this.playVideo(), (this.loadingState === "loaded" || this.loadingState === "loaded-enough") && this.$canvas && this.playSequence({});
                break;
            case "leave":
                this.isPlayRequested = !1, this.$video && this.pauseVideo(), (this.loadingState === "loaded" || this.loadingState === "loaded-enough") && this.$canvas && this.pauseSequence();
                break
        }
    }
    onLazyCall() {
        this.$canvas && this.type !== "controls" && this.loadImages({})
    }
    onResize({
        width: e,
        height: t
    }) {
        this.$canvas && this.setCanvasSize(e, t)
    }
    onLoadingState() {
        this.updateLoadingState("loading")
    }
    onLoadedEnoughState() {
        this.updateLoadingState("loaded-enough"), this.onReadyCallback && this.onReadyCallback()
    }
    onLoadedState() {
        this.updateLoadingState("loaded"), this.onLoadedCallback && this.onLoadedCallback()
    }
    onErrorState() {
        this.updateLoadingState("loading-error")
    }
    onVideoDataLoadedChange() {
        this.duration = this.$video.duration, requestAnimationFrame(() => {
            this.$sequenceKeys.forEach(e => {
                e.onSequenceReady({
                    duration: this.duration
                })
            }), this.onLoadedState(), (this.isPlayRequested || this.classList.contains("is-inview")) && this.playVideo()
        })
    }
    onVideoUpdate() {
        this.isPlaying && (this.progress.value = this._floorToDecimals(this.$video.currentTime / this.duration, 3), this.updateKeysProgress())
    }
    onSequenceCanPlay() {
        this.renderSequence(), requestAnimationFrame(() => {
            (this.isPlayRequested || this.type === "autoplay" && this.classList.contains("is-inview")) && this.playSequence({})
        })
    }
    init() {
        this.isInitialized || (this.onLoadingState(), this.isInitialized = !0, this.$canvas && (this.duration = this.imagesSequence?.duration || 0, this.ctx = this.$canvas.getContext("2d"), this.canvasImagePath = u.get().isPortrait ? this.imagesSequence?.sources.mobile.path : this.imagesSequence?.sources.desktop.path, this.canvasImageWidth = (u.get().isPortrait ? this.imagesSequence?.sources.mobile.width : this.imagesSequence?.sources.desktop.width) || this.canvasImageWidth, this.canvasImageHeight = (u.get().isPortrait ? this.imagesSequence?.sources.mobile.height : this.imagesSequence?.sources.desktop.height) || this.canvasImageHeight, this.type !== "scroll" && this.setSequenceTimeline(), requestAnimationFrame(() => {
            this.$sequenceKeys.forEach(e => {
                e.onSequenceReady({
                    duration: this.imagesSequence?.duration || 0
                })
            }), (this.loading === "auto" || this.loading === "lazy" && this.$lazyTrigger.classList.contains("is-inview")) && this.type !== "controls" && this.loadImages({})
        })))
    }
    updateKeysProgress() {
        this.$sequenceKeys.forEach(e => {
            e.onProgressChange({
                progress: this.progress.value
            })
        })
    }
    updateLoadingState(e) {
        this.classList.remove(`-${this.loadingState}`), this.loadingState = e, this.classList.add(`-${this.loadingState}`)
    }
    playVideo() {
        !this.$video.paused || this.isPlaying || (this.isPlaying = !0, this.$video.play(), l.ticker.add(this.onVideoUpdate))
    }
    pauseVideo() {
        this.$video.paused || !this.isPlaying || (this.isPlaying = !1, this.$video.pause(), l.ticker.remove(this.onVideoUpdate))
    }
    loadImages({
        readyCallback: e = null,
        loadedCallback: t = null
    }) {
        if (this.imagesBuckets.length || !this.imagesSequence || this.isLoadRequested) return;
        e && (this.onReadyCallback = e), t && (this.onLoadedCallback = t), this.isLoadRequested = !0, this.images = new Array(this.imagesSequence.frames);
        const s = Array.from({
                length: this.imagesSequence.frames
            }, (a, c) => c).slice(this.imagesSequence.prioritizedFrames, this.imagesSequence.frames),
            i = {},
            n = this._splitArray(i, s, 0);
        this.imagesBuckets = [], Object.values(n).forEach(a => {
            this.imagesBuckets[a.bucket] || (this.imagesBuckets[a.bucket] = []), this.imagesBuckets[a.bucket].push({
                value: a.value,
                bucket: a.bucket + 1
            })
        });
        const o = [];
        for (let a = 0; a < this.imagesSequence.prioritizedFrames; a++) o.push({
            value: a,
            bucket: 0
        });
        this.imagesBuckets.unshift(o), this.loadImage(0), this.loadImage(this.imagesSequence.frames - 1), this.loadBucket()
    }
    loadImage(e, t) {
        if (!this.imagesSequence) return;
        if (this.images[e]) {
            t && t(e);
            return
        }
        const s = new Image;
        s.onload = () => {
            this.totalLoadedImages++, t && t(e), this.images[e] = s, this.imagesSequence && this.totalLoadedImages > this.imagesSequence?.frames * this.imagesSequence?.canPlayThreshold && !this.isSequenceImageCanPlay && (this.isSequenceImageCanPlay = !0, requestAnimationFrame(() => {
                this.onSequenceCanPlay(), this.onLoadedEnoughState()
            }))
        };
        const i = this.imagesSequence.index0 === !0 ? e : e + 1,
            n = this.imagesSequence.hasPaddingIndex ? String(i).padStart(String(this.imagesSequence.frames).length, "0") : String(i);
        s.src = `${this._removeTrailingSlash(this.imagesSequence.baseUrl)}/${this.canvasImagePath&&this._removeTrailingSlash(this.canvasImagePath)+"/"}${this.imagesSequence.prefix}${n}.${this.imagesSequence.extension}`, s.setAttribute("index", e.toString())
    }
    loadBucket() {
        if (!this.isInitialized) return;
        const e = this.imagesBuckets.shift();
        if (!e) {
            requestAnimationFrame(() => {
                this.onLoadedState(), this.renderSequence()
            });
            return
        }
        const t = e.map(({
            value: s
        }) => new Promise(i => {
            this.loadImage(s, i)
        }));
        Promise.all(t).then(() => {
            this.loadBucket(), this.renderSequence()
        }).catch(s => {
            this.onErrorState()
        })
    }
    setSequenceTimeline() {
        this.playerTimeline?.kill(), requestAnimationFrame(() => {
            this.playerTimeline = l.timeline({
                paused: !0,
                ...this.type === "autoplay" && {
                    repeat: -1
                },
                onReverseComplete: () => {
                    this.onReverseSequenceCallback()
                },
                onComplete: () => {
                    this.onCompleteSequenceCallback()
                }
            }), this.playerTimeline.to(this.progress, {
                value: 1,
                ease: "none",
                duration: this.duration,
                onUpdate: this.renderSequence
            })
        })
    }
    setCanvasSize(e, t) {
        const s = this.$wrapper.offsetWidth || e,
            i = this.$wrapper.offsetHeight || t;
        this.canvasWidth = Math.ceil(this.dpr * s / 4) * 4, this.canvasHeight = Math.ceil(this.dpr * i / 4) * 4, this.$canvas.width = this.canvasWidth, this.$canvas.height = this.canvasHeight, this.$canvas.style.width = `${s}px`, this.$canvas.style.height = `${i}px`;
        const n = this.$canvas.width / this.canvasImageWidth,
            o = this.$canvas.height / this.canvasImageHeight,
            a = Math.max(n, o);
        this.drawingWidth = this.canvasImageWidth * a, this.drawingHeight = this.canvasImageHeight * a, this.canvasCenterX = (this.canvasWidth - this.drawingWidth) * .5, this.canvasCenterY = (this.canvasHeight - this.drawingHeight) * .5, this.drawFrame()
    }
    playSequence({
        startCallback: e = () => {},
        endCallback: t = () => {}
    }) {
        this.type !== "scroll" && this.playerTimeline && this.playerTimeline.play(), e(), this.onCompleteSequenceCallback = t || this.onCompleteSequenceCallback, this.playerTimeline?.eventCallback("onComplete", null), this.playerTimeline?.eventCallback("onComplete", this.onCompleteSequenceCallback)
    }
    restartSequence({
        startCallback: e = () => {},
        endCallback: t = () => {}
    }) {
        this.type === "controls" && (this.playerTimeline?.restart(), e(), this.onCompleteSequenceCallback = t || this.onCompleteSequenceCallback, this.playerTimeline?.eventCallback("onComplete", null), this.playerTimeline?.eventCallback("onComplete", this.onCompleteSequenceCallback))
    }
    pauseSequence(e) {
        this.type !== "scroll" && (this.playerTimeline?.pause(), e && e())
    }
    reverseSequence({
        startCallback: e = () => {},
        endCallback: t = () => {}
    }) {
        this.type === "controls" && (this.playerTimeline?.reverse(), e(), this.onReverseSequenceCallback = t || this.onReverseSequenceCallback, this.playerTimeline?.eventCallback("onReverseComplete", null), this.playerTimeline?.eventCallback("onReverseComplete", this.onReverseSequenceCallback))
    }
    setCurrentFrameIndex() {
        const e = Math.min(Math.floor(this.progress.value * this.totalLoadedImages), this.totalLoadedImages - 1) % this.totalLoadedImages;
        if (this.images[e]) this.currentFrameIndex = e;
        else {
            let t = Number.MAX_SAFE_INTEGER,
                s = Number.MAX_SAFE_INTEGER;
            for (let i = e; i >= 0; i--)
                if (this.images[i]) {
                    t = i;
                    break
                } for (let i = e; i < this.images.length; i++)
                if (this.images[i]) {
                    s = i;
                    break
                } Math.abs(e - t) <= Math.abs(e - s) ? this.images[t] && (this.currentFrameIndex = t) : this.images[s] && (this.currentFrameIndex = s)
        }
    }
    drawFrame() {
        if (!this.ctx || !this.images.length) return;
        const e = this.images[this.currentFrameIndex];
        e && (this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight), this.ctx.drawImage(e, this.canvasCenterX, this.canvasCenterY, this.drawingWidth, this.drawingHeight))
    }
    renderSequence() {
        this.setCurrentFrameIndex(), this.drawFrame(), this.type !== "scroll" && this.updateKeysProgress()
    }
    _floorToDecimals(e, t) {
        const s = Math.pow(10, t);
        return Math.floor(s * parseFloat(e.toFixed(t + 1))) / s
    }
    _splitArray(e, t, s) {
        const i = Math.floor(t.length / 2),
            n = t[i],
            o = e[n] ? e[n].value : n;
        e[n] = {
            value: o,
            bucket: s
        };
        const a = t.slice(0, i),
            c = t.slice(i + 1);
        return a.length && this._splitArray(e, a, s + 1), c.length && this._splitArray(e, c, s + 1), e
    }
    _removeTrailingSlash(e) {
        return e.endsWith("/") ? e.slice(0, -1) : e
    }
}
customElements.define("c-sequence", q);
class d extends HTMLElement {
    static ACTIVE_CLASS = "is-active";
    static SEQUENCE_KEY_PROGRESS_ATTRIBUTE = "data-sequence-key-progress";
    from;
    to;
    isActive = !1;
    fromThreshold = 0;
    toThreshold = 0;
    currentProgress = 0;
    $progressElements;
    constructor() {
        super(), this.from = this.getAttribute("data-from") !== null ? Number(this.getAttribute("data-from")) : null, this.to = this.getAttribute("data-to") !== null ? Number(this.getAttribute("data-to")) : null, this.$progressElements = this.querySelectorAll(`[${d.SEQUENCE_KEY_PROGRESS_ATTRIBUTE}]`)
    }
    onSequenceReady({
        duration: e
    }) {
        if (this.from = this.from !== null ? this.from : 0, this.to = this.to !== null ? this.to : e, this.fromThreshold = this.from / e, this.toThreshold = this.to / e, this.from >= this.to) return this.remove()
    }
    onProgressChange({
        progress: e
    }) {
        this.setActiveClass(e), this.$progressElements.length && this.setCurrentProgress(e)
    }
    setCurrentProgress(e) {
        this.currentProgress = y(0, 1, C(this.fromThreshold, this.toThreshold, 0, 1, e)), this.$progressElements.forEach(t => {
            t.onProgressChange({
                progress: this.currentProgress
            })
        })
    }
    setActiveClass(e) {
        this.from === null || this.to === null || (!this.isActive && e >= this.fromThreshold && e < this.toThreshold ? (this.classList.add(d.ACTIVE_CLASS), this.isActive = !0) : this.isActive && (e < this.fromThreshold || e >= this.toThreshold) && (this.classList.remove(d.ACTIVE_CLASS), this.isActive = !1))
    }
}
customElements.define("c-sequence-key", d);
const g = document.getElementById("checkHeroPrice");
g && g.addEventListener("click", () => {
    const h = new CustomEvent("disclaimer-price-event", {
        detail: {
            open: !0
        }
    });
    document.dispatchEvent(h)
});
const p = document.getElementById("checkHeroPriceStart");
p && p.addEventListener("click", () => {
    const h = new CustomEvent("disclaimer-price-event", {
        detail: {
            open: !0
        }
    });
    document.dispatchEvent(h)
});
const v = document.getElementById("DisclaimerModal");
v && v.addEventListener("click", () => {
    const h = new CustomEvent("disclaimer-modal-event", {
        detail: {
            open: !0
        }
    });
    document.dispatchEvent(h)
});
export {
    r as S
};