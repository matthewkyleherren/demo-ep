import {
    $ as a
} from "./hoisted.DEENYDYk.js";
import {
    a as o
} from "./Scroll.Bt_JG0O1.js";
import {
    l as p,
    r as h
} from "./maths.BC202PIA.js";
import {
    g as s
} from "./index.BDT3iC5Q.js";
import "./index.BSdFiPHn.js";
class i extends HTMLElement {
    static VELOCITY_MAX = 10;
    unbindScreenListener = () => {};
    angle;
    overlap;
    velocity = 0;
    strapVelocity = 0;
    constructor() {
        super(), this.onResize = this.onResize.bind(this), this.onUpdate = this.onUpdate.bind(this), this.onStrapInview = this.onStrapInview.bind(this), this.angle = parseFloat(this.dataset.angle), this.overlap = this.dataset.overlap?.split(",").map(t => parseFloat(t)) || [0, 0]
    }
    connectedCallback() {
        this.bindEvents()
    }
    disconnectedCallback() {
        this.unbindEvents(), s.ticker.remove(this.onUpdate)
    }
    bindEvents() {
        this.unbindScreenListener = a.subscribe(this.onResize), window.addEventListener("strapInview", this.onStrapInview)
    }
    unbindEvents() {
        this.unbindScreenListener(), window.removeEventListener("strapInview", this.onStrapInview)
    }
    onResize({
        width: t
    }) {
        this.style.removeProperty("--strap-angle");
        const e = this.querySelector(".c-strap_rail");
        if (e) {
            const r = e.getBoundingClientRect();
            this.style.setProperty("margin-top", `${r.height*this.overlap[0]*-1}px`), this.style.setProperty("margin-bottom", `${r.height*this.overlap[1]*-1}px`)
        }
        this.style.setProperty("--strap-angle", `${this.angle}deg`);
        const n = t * Math.tan(Math.abs(this.angle) * Math.PI / 180);
        this.style.setProperty("padding-top", `${n/2}px`), this.style.setProperty("padding-bottom", `${n/2}px`)
    }
    onStrapInview(t) {
        const {
            detail: e
        } = t;
        e.target == this && (e.way == "enter" ? s.ticker.add(this.onUpdate) : s.ticker.remove(this.onUpdate))
    }
    onUpdate() {
        this.velocity = p(this.velocity, Math.min(i.VELOCITY_MAX, o.value.velocity), .1);
        const t = h(Math.min(1, Math.abs(this.velocity) / i.VELOCITY_MAX), 3);
        this.strapVelocity !== t && (this.strapVelocity = t, this.style.setProperty("--strap-velocity", `${this.strapVelocity}`))
    }
}
customElements.define("c-strap", i);