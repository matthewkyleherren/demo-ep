import {
    g as A,
    a as U,
    e as C,
    b as W
} from "./swiper-core.DNlrlHI_.js";

function O(H) {
    let {
        swiper: e,
        extendParams: V,
        on: b,
        emit: x
    } = H;
    const o = A(),
        y = U();
    e.keyboard = {
        enabled: !1
    }, V({
        keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
        }
    });

    function m(K) {
        if (!e.enabled) return;
        const {
            rtlTranslate: l
        } = e;
        let t = K;
        t.originalEvent && (t = t.originalEvent);
        const i = t.keyCode || t.charCode,
            k = e.params.keyboard.pageUpDown,
            r = k && i === 33,
            a = k && i === 34,
            d = i === 37,
            f = i === 39,
            c = i === 38,
            u = i === 40;
        if (!e.allowSlideNext && (e.isHorizontal() && f || e.isVertical() && u || a) || !e.allowSlidePrev && (e.isHorizontal() && d || e.isVertical() && c || r)) return !1;
        if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey) && !(o.activeElement && o.activeElement.nodeName && (o.activeElement.nodeName.toLowerCase() === "input" || o.activeElement.nodeName.toLowerCase() === "textarea"))) {
            if (e.params.keyboard.onlyInViewport && (r || a || d || f || c || u)) {
                let h = !1;
                if (C(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && C(e.el, `.${e.params.slideActiveClass}`).length === 0) return;
                const p = e.el,
                    D = p.clientWidth,
                    E = p.clientHeight,
                    L = y.innerWidth,
                    N = y.innerHeight,
                    n = W(p);
                l && (n.left -= p.scrollLeft);
                const P = [
                    [n.left, n.top],
                    [n.left + D, n.top],
                    [n.left, n.top + E],
                    [n.left + D, n.top + E]
                ];
                for (let w = 0; w < P.length; w += 1) {
                    const s = P[w];
                    if (s[0] >= 0 && s[0] <= L && s[1] >= 0 && s[1] <= N) {
                        if (s[0] === 0 && s[1] === 0) continue;
                        h = !0
                    }
                }
                if (!h) return
            }
            e.isHorizontal() ? ((r || a || d || f) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), ((a || f) && !l || (r || d) && l) && e.slideNext(), ((r || d) && !l || (a || f) && l) && e.slidePrev()) : ((r || a || c || u) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (a || u) && e.slideNext(), (r || c) && e.slidePrev()), x("keyPress", i)
        }
    }

    function g() {
        e.keyboard.enabled || (o.addEventListener("keydown", m), e.keyboard.enabled = !0)
    }

    function v() {
        e.keyboard.enabled && (o.removeEventListener("keydown", m), e.keyboard.enabled = !1)
    }
    b("init", () => {
        e.params.keyboard.enabled && g()
    }), b("destroy", () => {
        e.keyboard.enabled && v()
    }), Object.assign(e.keyboard, {
        enable: g,
        disable: v
    })
}
export {
    O as K
};