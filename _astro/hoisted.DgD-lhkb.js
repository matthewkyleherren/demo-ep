import "./hoisted.DEENYDYk.js";
import {
    a as m
} from "./index.BSdFiPHn.js";
import "./Scroll.Bt_JG0O1.js";
import "./index.BDT3iC5Q.js";
const i = m(null);
document.addEventListener("DOMContentLoaded", () => {
    const r = () => {
        const e = document.getElementById("media"),
            t = document.getElementById("pressReleases");
        if (!e || !t) {
            requestAnimationFrame(r);
            return
        }
        window.location.pathname.includes("/newsroom/media") ? (e.classList.add("c-animate-fade-in"), e.hidden = !1, t.hidden = !0, document.querySelector('[aria-controls="media"]')?.setAttribute("aria-selected", "true")) : (t.classList.add("c-animate-fade-in"), t.hidden = !1, e.hidden = !0, document.querySelector('[aria-controls="pressReleases"]')?.setAttribute("aria-selected", "true"))
    };
    requestAnimationFrame(r)
});
const u = r => {
    const e = i.get(),
        t = new URL(window.location.href),
        s = t.origin,
        n = t.search;
    if (i.set(t.pathname), r === "pressReleases") {
        const a = e ?? "/newsroom";
        window.history.replaceState("", "", `${s}${a}${n}`)
    } else if (r === "media") {
        const a = e ?? "/newsroom/media";
        window.history.replaceState("", "", `${s}${a}${n}`)
    }
    return {
        searchParams: n
    }
};
document.querySelectorAll('#sub-tab-wrapper [role="tab"]').forEach(r => {
    r.addEventListener("click", function() {
        document.querySelectorAll('#sub-tab-wrapper [role="tab"]').forEach(a => {
            a.setAttribute("aria-selected", "false")
        }), document.querySelectorAll('[role="tabpanel"]').forEach(a => {
            a.classList.remove("c-animate-fade-in"), a.hidden = !0
        });
        const e = this.getAttribute("aria-controls");
        document.getElementById(e)?.classList.add("c-animate-fade-in");
        const t = document.getElementById(e);
        t && (t.hidden = !1);
        const {
            searchParams: s
        } = u(e);
        this.setAttribute("aria-selected", "true"), document.documentElement.style.setProperty("--tabWidth", `${this.offsetWidth}px`), document.documentElement.style.setProperty("--tabOffset", `${this.offsetLeft}px`);
        const n = document.querySelectorAll('nav[aria-label="Breadcrumb"] a');
        n.length && s && n.forEach(a => {
            const o = a,
                {
                    origin: c,
                    pathname: d
                } = new URL(o.href),
                l = `${c}${d}${s}`;
            o.href = l
        })
    })
});