import {
    m as Dt,
    S as Ot,
    $ as tn
} from "./Scroll.Bt_JG0O1.js";
import {
    g as se
} from "./index.BDT3iC5Q.js";
import "./index.BSdFiPHn.js";
const nn = "CSS" in window && "supports" in window.CSS && window.CSS.supports("height: 100svh") && window.CSS.supports("height: 100dvh") && window.CSS.supports("height: 100lvh"),
    rn = () => {
        const o = document.documentElement.style,
            e = document.body.clientWidth * .01;
        if (o.setProperty("--vw", `${e}px`), nn) return;
        const t = document.documentElement.clientHeight * .01;
        o.setProperty("--svh", `${t}px`);
        const n = window.innerHeight * .01;
        if (o.setProperty("--dvh", `${n}px`), document.body) {
            const i = document.createElement("div");
            i.style.width = "1px", i.style.height = "100vh", i.style.position = "fixed", i.style.left = "0", i.style.top = "0", i.style.bottom = "0", i.style.visibility = "hidden", document.body.appendChild(i);
            const r = i.clientHeight;
            i.remove();
            const a = r * .01;
            o.setProperty("--lvh", `${a}px`)
        }
    };

function an(o, e, t) {
    var n, i, r;
    e === void 0 && (e = 50), t === void 0 && (t = {});
    var a = (n = t.isImmediate) != null && n,
        u = (i = t.callback) != null && i,
        l = t.maxWait,
        s = Date.now(),
        p = [];

    function h() {
        if (l !== void 0) {
            var g = Date.now() - s;
            if (g + e >= l) return l - g
        }
        return e
    }
    var v = function() {
        var g = [].slice.call(arguments),
            m = this;
        return new Promise(function(C, S) {
            var _ = a && r === void 0;
            if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
                    if (r = void 0, s = Date.now(), !a) {
                        var b = o.apply(m, g);
                        u && u(b), p.forEach(function(O) {
                            return (0, O.resolve)(b)
                        }), p = []
                    }
                }, h()), _) {
                var B = o.apply(m, g);
                return u && u(B), C(B)
            }
            p.push({
                resolve: C,
                reject: S
            })
        })
    };
    return v.cancel = function(g) {
        r !== void 0 && clearTimeout(r), p.forEach(function(m) {
            return (0, m.reject)(g)
        }), p = []
    }, v
}
const on = Dt({
        width: window.innerWidth,
        height: window.innerHeight
    }),
    Bt = Dt({
        width: window.innerWidth,
        height: window.innerHeight
    });
window.addEventListener("resize", () => {
    on.set({
        width: window.innerWidth,
        height: window.innerHeight
    })
});
const sn = () => {
    Bt.set({
        width: window.innerWidth,
        height: window.innerHeight
    })
};
window.addEventListener("resize", an(sn, 200));
Bt.subscribe(() => {
    rn()
});
class ot {
    static READY_CLASS = "is-ready";
    init() {
        requestAnimationFrame(() => {
            document.documentElement.classList.add(ot.READY_CLASS)
        })
    }
}

function ln() {
    const o = document.createElement("div");
    o.style.cssText = "position: fixed; top: 0; left: 0; width: 0; height: 100lvh;", document.body.appendChild(o);
    const e = parseFloat(getComputedStyle(o).getPropertyValue("height"));
    o.style.cssText = "position: fixed; top: 0; left: 0; width: 0; height: 100svh;";
    const t = parseFloat(getComputedStyle(o).getPropertyValue("height"));
    document.body.removeChild(o), t !== e ? document.documentElement.classList.add("lvh-svh-different") : document.documentElement.classList.remove("lvh-svh-different")
}

function un() {
    document.documentElement.classList.toggle("is-firefox", navigator.userAgent.indexOf("Firefox") != -1)
}

function cn() {
    document.documentElement.classList.toggle("is-safari", navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Version") != -1)
}

function dn() {
    ln(), un(), cn()
}
const fn = new ot;
fn.init();
Ot.init();
tn.set(Ot);
dn();
window.addEventListener("footerInview", o => {
    const {
        way: e
    } = o.detail;
    document.documentElement.classList.toggle("has-footer-inview", e == "enter")
});
const bt = document.getElementById("menu-reservation-footer");
bt && bt.addEventListener("click", () => {
    const o = new CustomEvent("reservation-modal-event", {
        detail: {
            open: !0
        }
    });
    document.dispatchEvent(o), typeof window < "u" && typeof window.dataLayer < "u" && window.dataLayer.push({
        event: "reservation_drawer_open"
    })
});
const yt = document.getElementById("suscription-modal");
yt && yt.addEventListener("click", () => {
    const o = new CustomEvent("subscription-modal-event", {
        detail: {
            open: !0
        }
    });
    document.dispatchEvent(o), typeof window < "u" && typeof window.dataLayer < "u" && window.dataLayer.push({
        event: "subscription_form_open_top"
    })
});
const wt = document.getElementsByClassName("menu-reservation");
wt && Array.from(wt).map(o => o.addEventListener("click", () => {
    const e = new CustomEvent("reservation-modal-event", {
        detail: {
            open: !0
        }
    });
    document.dispatchEvent(e), typeof window < "u" && typeof window.dataLayer < "u" && window.dataLayer.push({
        event: "reservation_drawer_open"
    })
}));
class hn extends HTMLElement {
    onClickBind;
    constructor() {
        super(), this.onClickBind = this.onClick.bind(this)
    }
    connectedCallback() {
        this.bindEvents()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        this.addEventListener("click", this.onClickBind)
    }
    unbindEvents() {
        this.removeEventListener("click", this.onClickBind)
    }
    onClick(e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute("target") ?? "#main-content");
        t && (t.scrollIntoView({
            behavior: "smooth",
            block: "start"
        }), t.focus(), document.activeElement != t && (t.setAttribute("tabindex", "-1"), t.focus(), t.addEventListener("blur", () => {
            t.removeAttribute("tabindex")
        }, {
            once: !0
        })))
    }
}
customElements.define("c-skip-link", hn);
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var Rt = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
    Le = Rt.join(","),
    Vt = typeof Element > "u",
    ce = Vt ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    Pe = !Vt && Element.prototype.getRootNode ? function(o) {
        var e;
        return o == null || (e = o.getRootNode) === null || e === void 0 ? void 0 : e.call(o)
    } : function(o) {
        return o?.ownerDocument
    },
    Ne = function o(e, t) {
        var n;
        t === void 0 && (t = !0);
        var i = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"),
            r = i === "" || i === "true",
            a = r || t && e && o(e.parentNode);
        return a
    },
    pn = function(e) {
        var t, n = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
        return n === "" || n === "true"
    },
    Mt = function(e, t, n) {
        if (Ne(e)) return [];
        var i = Array.prototype.slice.apply(e.querySelectorAll(Le));
        return t && ce.call(e, Le) && i.unshift(e), i = i.filter(n), i
    },
    $t = function o(e, t, n) {
        for (var i = [], r = Array.from(e); r.length;) {
            var a = r.shift();
            if (!Ne(a, !1))
                if (a.tagName === "SLOT") {
                    var u = a.assignedElements(),
                        l = u.length ? u : a.children,
                        s = o(l, !0, n);
                    n.flatten ? i.push.apply(i, s) : i.push({
                        scopeParent: a,
                        candidates: s
                    })
                } else {
                    var p = ce.call(a, Le);
                    p && n.filter(a) && (t || !e.includes(a)) && i.push(a);
                    var h = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a),
                        v = !Ne(h, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
                    if (h && v) {
                        var g = o(h === !0 ? a.children : h.children, !0, n);
                        n.flatten ? i.push.apply(i, g) : i.push({
                            scopeParent: a,
                            candidates: g
                        })
                    } else r.unshift.apply(r, a.children)
                }
        }
        return i
    },
    jt = function(e) {
        return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
    },
    le = function(e) {
        if (!e) throw new Error("No node provided");
        return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || pn(e)) && !jt(e) ? 0 : e.tabIndex
    },
    vn = function(e, t) {
        var n = le(e);
        return n < 0 && t && !jt(e) ? 0 : n
    },
    gn = function(e, t) {
        return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
    },
    qt = function(e) {
        return e.tagName === "INPUT"
    },
    mn = function(e) {
        return qt(e) && e.type === "hidden"
    },
    bn = function(e) {
        var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
            return n.tagName === "SUMMARY"
        });
        return t
    },
    yn = function(e, t) {
        for (var n = 0; n < e.length; n++)
            if (e[n].checked && e[n].form === t) return e[n]
    },
    wn = function(e) {
        if (!e.name) return !0;
        var t = e.form || Pe(e),
            n = function(u) {
                return t.querySelectorAll('input[type="radio"][name="' + u + '"]')
            },
            i;
        if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") i = n(window.CSS.escape(e.name));
        else try {
            i = n(e.name)
        } catch {
            return !1
        }
        var r = yn(i, e.form);
        return !r || r === e
    },
    En = function(e) {
        return qt(e) && e.type === "radio"
    },
    xn = function(e) {
        return En(e) && !wn(e)
    },
    Tn = function(e) {
        var t, n = e && Pe(e),
            i = (t = n) === null || t === void 0 ? void 0 : t.host,
            r = !1;
        if (n && n !== e) {
            var a, u, l;
            for (r = !!((a = i) !== null && a !== void 0 && (u = a.ownerDocument) !== null && u !== void 0 && u.contains(i) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !r && i;) {
                var s, p, h;
                n = Pe(i), i = (s = n) === null || s === void 0 ? void 0 : s.host, r = !!((p = i) !== null && p !== void 0 && (h = p.ownerDocument) !== null && h !== void 0 && h.contains(i))
            }
        }
        return r
    },
    Et = function(e) {
        var t = e.getBoundingClientRect(),
            n = t.width,
            i = t.height;
        return n === 0 && i === 0
    },
    _n = function(e, t) {
        var n = t.displayCheck,
            i = t.getShadowRoot;
        if (getComputedStyle(e).visibility === "hidden") return !0;
        var r = ce.call(e, "details>summary:first-of-type"),
            a = r ? e.parentElement : e;
        if (ce.call(a, "details:not([open]) *")) return !0;
        if (!n || n === "full" || n === "legacy-full") {
            if (typeof i == "function") {
                for (var u = e; e;) {
                    var l = e.parentElement,
                        s = Pe(e);
                    if (l && !l.shadowRoot && i(l) === !0) return Et(e);
                    e.assignedSlot ? e = e.assignedSlot : !l && s !== e.ownerDocument ? e = s.host : e = l
                }
                e = u
            }
            if (Tn(e)) return !e.getClientRects().length;
            if (n !== "legacy-full") return !0
        } else if (n === "non-zero-area") return Et(e);
        return !1
    },
    Sn = function(e) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
            for (var t = e.parentElement; t;) {
                if (t.tagName === "FIELDSET" && t.disabled) {
                    for (var n = 0; n < t.children.length; n++) {
                        var i = t.children.item(n);
                        if (i.tagName === "LEGEND") return ce.call(t, "fieldset[disabled] *") ? !0 : !i.contains(e)
                    }
                    return !0
                }
                t = t.parentElement
            }
        return !1
    },
    Ie = function(e, t) {
        return !(t.disabled || Ne(t) || mn(t) || _n(t, e) || bn(t) || Sn(t))
    },
    et = function(e, t) {
        return !(xn(t) || le(t) < 0 || !Ie(e, t))
    },
    Cn = function(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return !!(isNaN(t) || t >= 0)
    },
    kn = function o(e) {
        var t = [],
            n = [];
        return e.forEach(function(i, r) {
            var a = !!i.scopeParent,
                u = a ? i.scopeParent : i,
                l = vn(u, a),
                s = a ? o(i.candidates) : u;
            l === 0 ? a ? t.push.apply(t, s) : t.push(u) : n.push({
                documentOrder: r,
                tabIndex: l,
                item: i,
                isScope: a,
                content: s
            })
        }), n.sort(gn).reduce(function(i, r) {
            return r.isScope ? i.push.apply(i, r.content) : i.push(r.content), i
        }, []).concat(t)
    },
    Fn = function(e, t) {
        t = t || {};
        var n;
        return t.getShadowRoot ? n = $t([e], t.includeContainer, {
            filter: et.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: Cn
        }) : n = Mt(e, t.includeContainer, et.bind(null, t)), kn(n)
    },
    An = function(e, t) {
        t = t || {};
        var n;
        return t.getShadowRoot ? n = $t([e], t.includeContainer, {
            filter: Ie.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot
        }) : n = Mt(e, t.includeContainer, Ie.bind(null, t)), n
    },
    he = function(e, t) {
        if (t = t || {}, !e) throw new Error("No node provided");
        return ce.call(e, Le) === !1 ? !1 : et(t, e)
    },
    Ln = Rt.concat("iframe").join(","),
    Ye = function(e, t) {
        if (t = t || {}, !e) throw new Error("No node provided");
        return ce.call(e, Ln) === !1 ? !1 : Ie(t, e)
    };
/*!
 * focus-trap 7.6.4
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */
function tt(o, e) {
    (e == null || e > o.length) && (e = o.length);
    for (var t = 0, n = Array(e); t < e; t++) n[t] = o[t];
    return n
}

function Pn(o) {
    if (Array.isArray(o)) return tt(o)
}

function Nn(o, e, t) {
    return (e = Rn(e)) in o ? Object.defineProperty(o, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[e] = t, o
}

function In(o) {
    if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o)
}

function Dn() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function xt(o, e) {
    var t = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(o);
        e && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(o, i).enumerable
        })), t.push.apply(t, n)
    }
    return t
}

function Tt(o) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? xt(Object(t), !0).forEach(function(n) {
            Nn(o, n, t[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : xt(Object(t)).forEach(function(n) {
            Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(t, n))
        })
    }
    return o
}

function On(o) {
    return Pn(o) || In(o) || Vn(o) || Dn()
}

function Bn(o, e) {
    if (typeof o != "object" || !o) return o;
    var t = o[Symbol.toPrimitive];
    if (t !== void 0) {
        var n = t.call(o, e);
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(o)
}

function Rn(o) {
    var e = Bn(o, "string");
    return typeof e == "symbol" ? e : e + ""
}

function Vn(o, e) {
    if (o) {
        if (typeof o == "string") return tt(o, e);
        var t = {}.toString.call(o).slice(8, -1);
        return t === "Object" && o.constructor && (t = o.constructor.name), t === "Map" || t === "Set" ? Array.from(o) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? tt(o, e) : void 0
    }
}
var _t = {
        activateTrap: function(e, t) {
            if (e.length > 0) {
                var n = e[e.length - 1];
                n !== t && n._setPausedState(!0)
            }
            var i = e.indexOf(t);
            i === -1 || e.splice(i, 1), e.push(t)
        },
        deactivateTrap: function(e, t) {
            var n = e.indexOf(t);
            n !== -1 && e.splice(n, 1), e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1)
        }
    },
    Mn = function(e) {
        return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function"
    },
    $n = function(e) {
        return e?.key === "Escape" || e?.key === "Esc" || e?.keyCode === 27
    },
    Ee = function(e) {
        return e?.key === "Tab" || e?.keyCode === 9
    },
    jn = function(e) {
        return Ee(e) && !e.shiftKey
    },
    qn = function(e) {
        return Ee(e) && e.shiftKey
    },
    St = function(e) {
        return setTimeout(e, 0)
    },
    ye = function(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return typeof e == "function" ? e.apply(void 0, n) : e
    },
    Ce = function(e) {
        return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target
    },
    Xn = [],
    zn = function(e, t) {
        var n = t?.document || document,
            i = t?.trapStack || Xn,
            r = Tt({
                returnFocusOnDeactivate: !0,
                escapeDeactivates: !0,
                delayInitialFocus: !0,
                isKeyForward: jn,
                isKeyBackward: qn
            }, t),
            a = {
                containers: [],
                containerGroups: [],
                tabbableGroups: [],
                nodeFocusedBeforeActivation: null,
                mostRecentlyFocusedNode: null,
                active: !1,
                paused: !1,
                manuallyPaused: !1,
                delayInitialFocusTimer: void 0,
                recentNavEvent: void 0
            },
            u, l = function(c, d, f) {
                return c && c[d] !== void 0 ? c[d] : r[f || d]
            },
            s = function(c, d) {
                var f = typeof d?.composedPath == "function" ? d.composedPath() : void 0;
                return a.containerGroups.findIndex(function(T) {
                    var k = T.container,
                        A = T.tabbableNodes;
                    return k.contains(c) || f?.includes(k) || A.find(function(w) {
                        return w === c
                    })
                })
            },
            p = function(c) {
                var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    f = d.hasFallback,
                    T = f === void 0 ? !1 : f,
                    k = d.params,
                    A = k === void 0 ? [] : k,
                    w = r[c];
                if (typeof w == "function" && (w = w.apply(void 0, On(A))), w === !0 && (w = void 0), !w) {
                    if (w === void 0 || w === !1) return w;
                    throw new Error("`".concat(c, "` was specified but was not a node, or did not return a node"))
                }
                var R = w;
                if (typeof w == "string") {
                    try {
                        R = n.querySelector(w)
                    } catch (L) {
                        throw new Error("`".concat(c, '` appears to be an invalid selector; error="').concat(L.message, '"'))
                    }
                    if (!R && !T) throw new Error("`".concat(c, "` as selector refers to no known node"))
                }
                return R
            },
            h = function() {
                var c = p("initialFocus", {
                    hasFallback: !0
                });
                if (c === !1) return !1;
                if (c === void 0 || c && !Ye(c, r.tabbableOptions))
                    if (s(n.activeElement) >= 0) c = n.activeElement;
                    else {
                        var d = a.tabbableGroups[0],
                            f = d && d.firstTabbableNode;
                        c = f || p("fallbackFocus")
                    }
                else c === null && (c = p("fallbackFocus"));
                if (!c) throw new Error("Your focus-trap needs to have at least one focusable element");
                return c
            },
            v = function() {
                if (a.containerGroups = a.containers.map(function(c) {
                        var d = Fn(c, r.tabbableOptions),
                            f = An(c, r.tabbableOptions),
                            T = d.length > 0 ? d[0] : void 0,
                            k = d.length > 0 ? d[d.length - 1] : void 0,
                            A = f.find(function(L) {
                                return he(L)
                            }),
                            w = f.slice().reverse().find(function(L) {
                                return he(L)
                            }),
                            R = !!d.find(function(L) {
                                return le(L) > 0
                            });
                        return {
                            container: c,
                            tabbableNodes: d,
                            focusableNodes: f,
                            posTabIndexesFound: R,
                            firstTabbableNode: T,
                            lastTabbableNode: k,
                            firstDomTabbableNode: A,
                            lastDomTabbableNode: w,
                            nextTabbableNode: function(V) {
                                var re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                                    q = d.indexOf(V);
                                return q < 0 ? re ? f.slice(f.indexOf(V) + 1).find(function(P) {
                                    return he(P)
                                }) : f.slice(0, f.indexOf(V)).reverse().find(function(P) {
                                    return he(P)
                                }) : d[q + (re ? 1 : -1)]
                            }
                        }
                    }), a.tabbableGroups = a.containerGroups.filter(function(c) {
                        return c.tabbableNodes.length > 0
                    }), a.tabbableGroups.length <= 0 && !p("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                if (a.containerGroups.find(function(c) {
                        return c.posTabIndexesFound
                    }) && a.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            g = function(c) {
                var d = c.activeElement;
                if (d) return d.shadowRoot && d.shadowRoot.activeElement !== null ? g(d.shadowRoot) : d
            },
            m = function(c) {
                if (c !== !1 && c !== g(document)) {
                    if (!c || !c.focus) {
                        m(h());
                        return
                    }
                    c.focus({
                        preventScroll: !!r.preventScroll
                    }), a.mostRecentlyFocusedNode = c, Mn(c) && c.select()
                }
            },
            C = function(c) {
                var d = p("setReturnFocus", {
                    params: [c]
                });
                return d || (d === !1 ? !1 : c)
            },
            S = function(c) {
                var d = c.target,
                    f = c.event,
                    T = c.isBackward,
                    k = T === void 0 ? !1 : T;
                d = d || Ce(f), v();
                var A = null;
                if (a.tabbableGroups.length > 0) {
                    var w = s(d, f),
                        R = w >= 0 ? a.containerGroups[w] : void 0;
                    if (w < 0) k ? A = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : A = a.tabbableGroups[0].firstTabbableNode;
                    else if (k) {
                        var L = a.tabbableGroups.findIndex(function(Z) {
                            var Y = Z.firstTabbableNode;
                            return d === Y
                        });
                        if (L < 0 && (R.container === d || Ye(d, r.tabbableOptions) && !he(d, r.tabbableOptions) && !R.nextTabbableNode(d, !1)) && (L = w), L >= 0) {
                            var V = L === 0 ? a.tabbableGroups.length - 1 : L - 1,
                                re = a.tabbableGroups[V];
                            A = le(d) >= 0 ? re.lastTabbableNode : re.lastDomTabbableNode
                        } else Ee(f) || (A = R.nextTabbableNode(d, !1))
                    } else {
                        var q = a.tabbableGroups.findIndex(function(Z) {
                            var Y = Z.lastTabbableNode;
                            return d === Y
                        });
                        if (q < 0 && (R.container === d || Ye(d, r.tabbableOptions) && !he(d, r.tabbableOptions) && !R.nextTabbableNode(d)) && (q = w), q >= 0) {
                            var P = q === a.tabbableGroups.length - 1 ? 0 : q + 1,
                                N = a.tabbableGroups[P];
                            A = le(d) >= 0 ? N.firstTabbableNode : N.firstDomTabbableNode
                        } else Ee(f) || (A = R.nextTabbableNode(d))
                    }
                } else A = p("fallbackFocus");
                return A
            },
            _ = function(c) {
                var d = Ce(c);
                if (!(s(d, c) >= 0)) {
                    if (ye(r.clickOutsideDeactivates, c)) {
                        u.deactivate({
                            returnFocus: r.returnFocusOnDeactivate
                        });
                        return
                    }
                    ye(r.allowOutsideClick, c) || c.preventDefault()
                }
            },
            B = function(c) {
                var d = Ce(c),
                    f = s(d, c) >= 0;
                if (f || d instanceof Document) f && (a.mostRecentlyFocusedNode = d);
                else {
                    c.stopImmediatePropagation();
                    var T, k = !0;
                    if (a.mostRecentlyFocusedNode)
                        if (le(a.mostRecentlyFocusedNode) > 0) {
                            var A = s(a.mostRecentlyFocusedNode),
                                w = a.containerGroups[A].tabbableNodes;
                            if (w.length > 0) {
                                var R = w.findIndex(function(L) {
                                    return L === a.mostRecentlyFocusedNode
                                });
                                R >= 0 && (r.isKeyForward(a.recentNavEvent) ? R + 1 < w.length && (T = w[R + 1], k = !1) : R - 1 >= 0 && (T = w[R - 1], k = !1))
                            }
                        } else a.containerGroups.some(function(L) {
                            return L.tabbableNodes.some(function(V) {
                                return le(V) > 0
                            })
                        }) || (k = !1);
                    else k = !1;
                    k && (T = S({
                        target: a.mostRecentlyFocusedNode,
                        isBackward: r.isKeyBackward(a.recentNavEvent)
                    })), m(T || a.mostRecentlyFocusedNode || h())
                }
                a.recentNavEvent = void 0
            },
            b = function(c) {
                var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                a.recentNavEvent = c;
                var f = S({
                    event: c,
                    isBackward: d
                });
                f && (Ee(c) && c.preventDefault(), m(f))
            },
            O = function(c) {
                (r.isKeyForward(c) || r.isKeyBackward(c)) && b(c, r.isKeyBackward(c))
            },
            D = function(c) {
                $n(c) && ye(r.escapeDeactivates, c) !== !1 && (c.preventDefault(), u.deactivate())
            },
            M = function(c) {
                var d = Ce(c);
                s(d, c) >= 0 || ye(r.clickOutsideDeactivates, c) || ye(r.allowOutsideClick, c) || (c.preventDefault(), c.stopImmediatePropagation())
            },
            K = function() {
                if (a.active) return _t.activateTrap(i, u), a.delayInitialFocusTimer = r.delayInitialFocus ? St(function() {
                    m(h())
                }) : m(h()), n.addEventListener("focusin", B, !0), n.addEventListener("mousedown", _, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("touchstart", _, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("click", M, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("keydown", O, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("keydown", D), u
            },
            H = function() {
                if (a.active) return n.removeEventListener("focusin", B, !0), n.removeEventListener("mousedown", _, !0), n.removeEventListener("touchstart", _, !0), n.removeEventListener("click", M, !0), n.removeEventListener("keydown", O, !0), n.removeEventListener("keydown", D), u
            },
            $ = function(c) {
                var d = c.some(function(f) {
                    var T = Array.from(f.removedNodes);
                    return T.some(function(k) {
                        return k === a.mostRecentlyFocusedNode
                    })
                });
                d && m(h())
            },
            E = typeof window < "u" && "MutationObserver" in window ? new MutationObserver($) : void 0,
            F = function() {
                E && (E.disconnect(), a.active && !a.paused && a.containers.map(function(c) {
                    E.observe(c, {
                        subtree: !0,
                        childList: !0
                    })
                }))
            };
        return u = {
            get active() {
                return a.active
            },
            get paused() {
                return a.paused
            },
            activate: function(c) {
                if (a.active) return this;
                var d = l(c, "onActivate"),
                    f = l(c, "onPostActivate"),
                    T = l(c, "checkCanFocusTrap");
                T || v(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = n.activeElement, d?.();
                var k = function() {
                    T && v(), K(), F(), f?.()
                };
                return T ? (T(a.containers.concat()).then(k, k), this) : (k(), this)
            },
            deactivate: function(c) {
                if (!a.active) return this;
                var d = Tt({
                    onDeactivate: r.onDeactivate,
                    onPostDeactivate: r.onPostDeactivate,
                    checkCanReturnFocus: r.checkCanReturnFocus
                }, c);
                clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, H(), a.active = !1, a.paused = !1, F(), _t.deactivateTrap(i, u);
                var f = l(d, "onDeactivate"),
                    T = l(d, "onPostDeactivate"),
                    k = l(d, "checkCanReturnFocus"),
                    A = l(d, "returnFocus", "returnFocusOnDeactivate");
                f?.();
                var w = function() {
                    St(function() {
                        A && m(C(a.nodeFocusedBeforeActivation)), T?.()
                    })
                };
                return A && k ? (k(C(a.nodeFocusedBeforeActivation)).then(w, w), this) : (w(), this)
            },
            pause: function(c) {
                return a.active ? (a.manuallyPaused = !0, this._setPausedState(!0, c)) : this
            },
            unpause: function(c) {
                return a.active ? (a.manuallyPaused = !1, i[i.length - 1] !== this ? this : this._setPausedState(!1, c)) : this
            },
            updateContainerElements: function(c) {
                var d = [].concat(c).filter(Boolean);
                return a.containers = d.map(function(f) {
                    return typeof f == "string" ? n.querySelector(f) : f
                }), a.active && v(), F(), this
            }
        }, Object.defineProperties(u, {
            _isManuallyPaused: {
                value: function() {
                    return a.manuallyPaused
                }
            },
            _setPausedState: {
                value: function(c, d) {
                    if (a.paused === c) return this;
                    if (a.paused = c, c) {
                        var f = l(d, "onPause"),
                            T = l(d, "onPostPause");
                        f?.(), H(), F(), T?.()
                    } else {
                        var k = l(d, "onUnpause"),
                            A = l(d, "onPostUnpause");
                        k?.(), v(), K(), F(), A?.()
                    }
                    return this
                }
            }
        }), u.updateContainerElements(e), u
    };
/*!
 * matrix 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var ne, ue, st, Ve, we, Ae, De, xe, G = "transform",
    nt = G + "Origin",
    Xt, lt = function(e) {
        var t = e.ownerDocument || e;
        for (!(G in e.style) && ("msTransform" in e.style) && (G = "msTransform", nt = G + "Origin"); t.parentNode && (t = t.parentNode););
        if (ue = window, De = new de, t) {
            ne = t, st = t.documentElement, Ve = t.body, xe = ne.createElementNS("http://www.w3.org/2000/svg", "g"), xe.style.transform = "none";
            var n = t.createElement("div"),
                i = t.createElement("div"),
                r = t && (t.body || t.firstElementChild);
            r && r.appendChild && (r.appendChild(n), n.appendChild(i), n.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), Xt = i.offsetParent !== n, r.removeChild(n))
        }
        return t
    },
    Yn = function(e) {
        for (var t, n; e && e !== Ve;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
        return t
    },
    zt = [],
    Yt = [],
    ut = function() {
        return ue.pageYOffset || ne.scrollTop || st.scrollTop || Ve.scrollTop || 0
    },
    ct = function() {
        return ue.pageXOffset || ne.scrollLeft || st.scrollLeft || Ve.scrollLeft || 0
    },
    dt = function(e) {
        return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    },
    Kn = function o(e) {
        if (ue.getComputedStyle(e).position === "fixed") return !0;
        if (e = e.parentNode, e && e.nodeType === 1) return o(e)
    },
    Ke = function o(e, t) {
        if (e.parentNode && (ne || lt(e))) {
            var n = dt(e),
                i = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                r = n ? t ? "rect" : "g" : "div",
                a = t !== 2 ? 0 : 100,
                u = t === 3 ? 100 : 0,
                l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                s = ne.createElementNS ? ne.createElementNS(i.replace(/^https/, "http"), r) : ne.createElement(r);
            return t && (n ? (Ae || (Ae = o(e)), s.setAttribute("width", .01), s.setAttribute("height", .01), s.setAttribute("transform", "translate(" + a + "," + u + ")"), Ae.appendChild(s)) : (we || (we = o(e), we.style.cssText = l), s.style.cssText = l + "width:0.1px;height:0.1px;top:" + u + "px;left:" + a + "px", we.appendChild(s))), s
        }
        throw "Need document and parent."
    },
    Hn = function(e) {
        for (var t = new de, n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
        return t
    },
    Kt = function(e) {
        var t = e.getCTM(),
            n;
        return t || (n = e.style[G], e.style[G] = "none", e.appendChild(xe), t = xe.getCTM(), e.removeChild(xe), n ? e.style[G] = n : e.style.removeProperty(G.replace(/([A-Z])/g, "-$1").toLowerCase())), t || De.clone()
    },
    Wn = function(e, t) {
        var n = dt(e),
            i = e === n,
            r = n ? zt : Yt,
            a = e.parentNode,
            u, l, s, p, h, v;
        if (e === ue) return e;
        if (r.length || r.push(Ke(e, 1), Ke(e, 2), Ke(e, 3)), u = n ? Ae : we, n) i ? (s = Kt(e), p = -s.e / s.a, h = -s.f / s.d, l = De) : e.getBBox ? (s = e.getBBox(), l = e.transform ? e.transform.baseVal : {}, l = l.numberOfItems ? l.numberOfItems > 1 ? Hn(l) : l.getItem(0).matrix : De, p = l.a * s.x + l.c * s.y, h = l.b * s.x + l.d * s.y) : (l = new de, p = h = 0), t && e.tagName.toLowerCase() === "g" && (p = h = 0), (i ? n : a).appendChild(u), u.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + p) + "," + (l.f + h) + ")");
        else {
            if (p = h = 0, Xt)
                for (l = e.offsetParent, s = e; s && (s = s.parentNode) && s !== l && s.parentNode;)(ue.getComputedStyle(s)[G] + "").length > 4 && (p = s.offsetLeft, h = s.offsetTop, s = 0);
            if (v = ue.getComputedStyle(e), v.position !== "absolute" && v.position !== "fixed")
                for (l = e.offsetParent; a && a !== l;) p += a.scrollLeft || 0, h += a.scrollTop || 0, a = a.parentNode;
            s = u.style, s.top = e.offsetTop - h + "px", s.left = e.offsetLeft - p + "px", s[G] = v[G], s[nt] = v[nt], s.position = v.position === "fixed" ? "fixed" : "absolute", e.parentNode.appendChild(u)
        }
        return u
    },
    He = function(e, t, n, i, r, a, u) {
        return e.a = t, e.b = n, e.c = i, e.d = r, e.e = a, e.f = u, e
    },
    de = function() {
        function o(t, n, i, r, a, u) {
            t === void 0 && (t = 1), n === void 0 && (n = 0), i === void 0 && (i = 0), r === void 0 && (r = 1), a === void 0 && (a = 0), u === void 0 && (u = 0), He(this, t, n, i, r, a, u)
        }
        var e = o.prototype;
        return e.inverse = function() {
            var n = this.a,
                i = this.b,
                r = this.c,
                a = this.d,
                u = this.e,
                l = this.f,
                s = n * a - i * r || 1e-10;
            return He(this, a / s, -i / s, -r / s, n / s, (r * l - a * u) / s, -(n * l - i * u) / s)
        }, e.multiply = function(n) {
            var i = this.a,
                r = this.b,
                a = this.c,
                u = this.d,
                l = this.e,
                s = this.f,
                p = n.a,
                h = n.c,
                v = n.b,
                g = n.d,
                m = n.e,
                C = n.f;
            return He(this, p * i + v * a, p * r + v * u, h * i + g * a, h * r + g * u, l + m * i + C * a, s + m * r + C * u)
        }, e.clone = function() {
            return new o(this.a, this.b, this.c, this.d, this.e, this.f)
        }, e.equals = function(n) {
            var i = this.a,
                r = this.b,
                a = this.c,
                u = this.d,
                l = this.e,
                s = this.f;
            return i === n.a && r === n.b && a === n.c && u === n.d && l === n.e && s === n.f
        }, e.apply = function(n, i) {
            i === void 0 && (i = {});
            var r = n.x,
                a = n.y,
                u = this.a,
                l = this.b,
                s = this.c,
                p = this.d,
                h = this.e,
                v = this.f;
            return i.x = r * u + a * s + h || 0, i.y = r * l + a * p + v || 0, i
        }, o
    }();

function J(o, e, t, n) {
    if (!o || !o.parentNode || (ne || lt(o)).documentElement === o) return new de;
    var i = Yn(o),
        r = dt(o),
        a = r ? zt : Yt,
        u = Wn(o, t),
        l = a[0].getBoundingClientRect(),
        s = a[1].getBoundingClientRect(),
        p = a[2].getBoundingClientRect(),
        h = u.parentNode,
        v = !n && Kn(o),
        g = new de((s.left - l.left) / 100, (s.top - l.top) / 100, (p.left - l.left) / 100, (p.top - l.top) / 100, l.left + (v ? 0 : ct()), l.top + (v ? 0 : ut()));
    if (h.removeChild(u), i)
        for (l = i.length; l--;) s = i[l], s.scaleX = s.scaleY = 0, s.renderTransform(1, s);
    return e ? g.inverse() : g
}
/*!
 * Flip 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Gn = 1,
    be, X, I, Te, ae, ie, it, Ct = function(e, t) {
        return e.actions.forEach(function(n) {
            return n.vars[t] && n.vars[t](n)
        })
    },
    rt = {},
    kt = 180 / Math.PI,
    Un = Math.PI / 180,
    Oe = {},
    Ft = {},
    Me = {},
    ft = function(e) {
        return typeof e == "string" ? e.split(" ").join("").split(",") : e
    },
    Zn = ft("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
    $e = ft("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),
    _e = function(e) {
        return be(e)[0] || void 0
    },
    pe = function(e) {
        return Math.round(e * 1e4) / 1e4 || 0
    },
    We = function(e, t, n) {
        return e.forEach(function(i) {
            return i.classList[n](t)
        })
    },
    At = {
        zIndex: 1,
        kill: 1,
        simple: 1,
        spin: 1,
        clearProps: 1,
        targets: 1,
        toggleClass: 1,
        onComplete: 1,
        onUpdate: 1,
        onInterrupt: 1,
        onStart: 1,
        delay: 1,
        repeat: 1,
        repeatDelay: 1,
        yoyo: 1,
        scale: 1,
        fade: 1,
        absolute: 1,
        props: 1,
        onEnter: 1,
        onLeave: 1,
        custom: 1,
        paused: 1,
        nested: 1,
        prune: 1,
        absoluteOnLeave: 1
    },
    Ht = {
        zIndex: 1,
        simple: 1,
        clearProps: 1,
        scale: 1,
        absolute: 1,
        fitChild: 1,
        getVars: 1,
        props: 1
    },
    Wt = function(e) {
        return e.replace(/([A-Z])/g, "-$1").toLowerCase()
    },
    ve = function(e, t) {
        var n = {},
            i;
        for (i in e) t[i] || (n[i] = e[i]);
        return n
    },
    ht = {},
    Gt = function(e) {
        var t = ht[e] = ft(e);
        return Me[e] = t.concat($e), t
    },
    Jn = function(e) {
        var t = e._gsap || X.core.getCache(e);
        return t.gmCache === X.ticker.frame ? t.gMatrix : (t.gmCache = X.ticker.frame, t.gMatrix = J(e, !0, !1, !0))
    },
    Qn = function o(e, t, n) {
        n === void 0 && (n = 0);
        for (var i = e.parentNode, r = 1e3 * Math.pow(10, n) * (t ? -1 : 1), a = t ? -r * 900 : 0; e;) a += r, e = e.previousSibling;
        return i ? a + o(i, t, n + 1) : a
    },
    Be = function(e, t, n) {
        return e.forEach(function(i) {
            return i.d = Qn(n ? i.element : i.t, t)
        }), e.sort(function(i, r) {
            return i.d - r.d
        }), e
    },
    Se = function(e, t) {
        for (var n = e.element.style, i = e.css = e.css || [], r = t.length, a, u; r--;) a = t[r], u = n[a] || n.getPropertyValue(a), i.push(u ? a : Ft[a] || (Ft[a] = Wt(a)), u);
        return n
    },
    Re = function(e) {
        var t = e.css,
            n = e.element.style,
            i = 0;
        for (e.cache.uncache = 1; i < t.length; i += 2) t[i + 1] ? n[t[i]] = t[i + 1] : n.removeProperty(t[i]);
        !t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"))
    },
    Lt = function(e, t) {
        e.forEach(function(n) {
            return n.a.cache.uncache = 1
        }), t || e.finalStates.forEach(Re)
    },
    Ge = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),
    pt = function(e, t, n) {
        var i = e.element,
            r = e.width,
            a = e.height,
            u = e.uncache,
            l = e.getProp,
            s = i.style,
            p = 4,
            h, v, g;
        if (typeof t != "object" && (t = e), I && n !== 1) return I._abs.push({
            t: i,
            b: e,
            a: e,
            sd: 0
        }), I._final.push(function() {
            return (e.cache.uncache = 1) && Re(e)
        }), i;
        for (v = l("display") === "none", (!e.isVisible || v) && (v && (Se(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = r = e.width || t.width, e.height = a = e.height || t.height), Se(e, Ge), g = window.getComputedStyle(i); p--;) s[Ge[p]] = g[Ge[p]];
        if (s.gridArea = "1 / 1 / 1 / 1", s.transition = "none", s.position = "absolute", s.width = r + "px", s.height = a + "px", s.top || (s.top = "0px"), s.left || (s.left = "0px"), u) h = new fe(i);
        else if (h = ve(e, Oe), h.position = "absolute", e.simple) {
            var m = i.getBoundingClientRect();
            h.matrix = new de(1, 0, 0, 1, m.left + ct(), m.top + ut())
        } else h.matrix = J(i, !1, !1, !0);
        return h = me(h, e, !0), e.x = ie(h.x, .01), e.y = ie(h.y, .01), i
    },
    Pt = function(e, t) {
        return t !== !0 && (t = be(t), e = e.filter(function(n) {
            if (t.indexOf((n.sd < 0 ? n.b : n.a).element) !== -1) return !0;
            n.t._gsap.renderTransform(1), n.b.isVisible && (n.t.style.width = n.b.width + "px", n.t.style.height = n.b.height + "px")
        })), e
    },
    Ut = function(e) {
        return Be(e, !0).forEach(function(t) {
            return (t.a.isVisible || t.b.isVisible) && pt(t.sd < 0 ? t.b : t.a, t.b, 1)
        })
    },
    ei = function(e, t) {
        return t && e.idLookup[at(t).id] || e.elementStates[0]
    },
    at = function(e, t, n, i) {
        return e instanceof fe ? e : e instanceof U ? ei(e, i) : new fe(typeof e == "string" ? _e(e) || void 0 : e, t, n)
    },
    ti = function(e, t) {
        for (var n = X.getProperty(e.element, null, "native"), i = e.props = {}, r = t.length; r--;) i[t[r]] = (n(t[r]) + "").trim();
        return i.zIndex && (i.zIndex = parseFloat(i.zIndex) || 0), e
    },
    Zt = function(e, t) {
        var n = e.style || e,
            i;
        for (i in t) n[i] = t[i]
    },
    ni = function(e) {
        var t = e.getAttribute("data-flip-id");
        return t || e.setAttribute("data-flip-id", t = "auto-" + Gn++), t
    },
    Jt = function(e) {
        return e.map(function(t) {
            return t.element
        })
    },
    Nt = function(e, t, n) {
        return e && t.length && n.add(e(Jt(t), n, new U(t, 0, !0)), 0)
    },
    me = function(e, t, n, i, r, a) {
        var u = e.element,
            l = e.cache,
            s = e.parent,
            p = e.x,
            h = e.y,
            v = t.width,
            g = t.height,
            m = t.scaleX,
            C = t.scaleY,
            S = t.rotation,
            _ = t.bounds,
            B = a && it && it(u, "transform,width,height"),
            b = e,
            O = t.matrix,
            D = O.e,
            M = O.f,
            K = e.bounds.width !== _.width || e.bounds.height !== _.height || e.scaleX !== m || e.scaleY !== C || e.rotation !== S,
            H = !K && e.simple && t.simple && !r,
            $, E, F, x, c, d, f;
        return H || !s ? (m = C = 1, S = $ = 0) : (c = Jn(s), d = c.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), S = pe(Math.atan2(d.b, d.a) * kt), $ = pe(Math.atan2(d.c, d.d) * kt + S) % 360, m = Math.sqrt(Math.pow(d.a, 2) + Math.pow(d.b, 2)), C = Math.sqrt(Math.pow(d.c, 2) + Math.pow(d.d, 2)) * Math.cos($ * Un), r && (r = be(r)[0], x = X.getProperty(r), f = r.getBBox && typeof r.getBBox == "function" && r.getBBox(), b = {
            scaleX: x("scaleX"),
            scaleY: x("scaleY"),
            width: f ? f.width : Math.ceil(parseFloat(x("width", "px"))),
            height: f ? f.height : parseFloat(x("height", "px"))
        }), l.rotation = S + "deg", l.skewX = $ + "deg"), n ? (m *= v === b.width || !b.width ? 1 : v / b.width, C *= g === b.height || !b.height ? 1 : g / b.height, l.scaleX = m, l.scaleY = C) : (v = ie(v * m / b.scaleX, 0), g = ie(g * C / b.scaleY, 0), u.style.width = v + "px", u.style.height = g + "px"), i && Zt(u, t.props), H || !s ? (p += D - e.matrix.e, h += M - e.matrix.f) : K || s !== t.parent ? (l.renderTransform(1, l), d = J(r || u, !1, !1, !0), E = c.apply({
            x: d.e,
            y: d.f
        }), F = c.apply({
            x: D,
            y: M
        }), p += F.x - E.x, h += F.y - E.y) : (c.e = c.f = 0, F = c.apply({
            x: D - e.matrix.e,
            y: M - e.matrix.f
        }), p += F.x, h += F.y), p = ie(p, .02), h = ie(h, .02), a && !(a instanceof fe) ? B && B.revert() : (l.x = p + "px", l.y = h + "px", l.renderTransform(1, l)), a && (a.x = p, a.y = h, a.rotation = S, a.skewX = $, n ? (a.scaleX = m, a.scaleY = C) : (a.width = v, a.height = g)), a || l
    },
    Ue = function(e, t) {
        return e instanceof U ? e : new U(e, t)
    },
    Qt = function(e, t, n) {
        var i = e.idLookup[n],
            r = e.alt[n];
        return r.isVisible && (!(t.getElementState(r.element) || r).isVisible || !i.isVisible) ? r : i
    },
    Ze = [],
    Je = "width,height,overflowX,overflowY".split(","),
    ke, It = function(e) {
        if (e !== ke) {
            var t = ae.style,
                n = ae.clientWidth === window.outerWidth,
                i = ae.clientHeight === window.outerHeight,
                r = 4;
            if (e && (n || i)) {
                for (; r--;) Ze[r] = t[Je[r]];
                n && (t.width = ae.clientWidth + "px", t.overflowY = "hidden"), i && (t.height = ae.clientHeight + "px", t.overflowX = "hidden"), ke = e
            } else if (ke) {
                for (; r--;) Ze[r] ? t[Je[r]] = Ze[r] : t.removeProperty(Wt(Je[r]));
                ke = e
            }
        }
    },
    Qe = function(e, t, n, i) {
        e instanceof U && t instanceof U, n = n || {};
        var r = n,
            a = r.clearProps,
            u = r.onEnter,
            l = r.onLeave,
            s = r.absolute,
            p = r.absoluteOnLeave,
            h = r.custom,
            v = r.delay,
            g = r.paused,
            m = r.repeat,
            C = r.repeatDelay,
            S = r.yoyo,
            _ = r.toggleClass,
            B = r.nested,
            b = r.zIndex,
            O = r.scale,
            D = r.fade,
            M = r.stagger,
            K = r.spin,
            H = r.prune,
            $ = ("props" in n ? n : e).props,
            E = ve(n, At),
            F = X.timeline({
                delay: v,
                paused: g,
                repeat: m,
                repeatDelay: C,
                yoyo: S,
                data: "isFlip"
            }),
            x = E,
            c = [],
            d = [],
            f = [],
            T = [],
            k = K === !0 ? 1 : K || 0,
            A = typeof K == "function" ? K : function() {
                return k
            },
            w = e.interrupted || t.interrupted,
            R = F[i !== 1 ? "to" : "from"],
            L, V, re, q, P, N, Z, Y, je, Q, ee, qe, j, z;
        for (V in t.idLookup) ee = t.alt[V] ? Qt(t, e, V) : t.idLookup[V], P = ee.element, Q = e.idLookup[V], e.alt[V] && P === Q.element && (e.alt[V].isVisible || !ee.isVisible) && (Q = e.alt[V]), Q ? (N = {
            t: P,
            b: Q,
            a: ee,
            sd: Q.element === P ? 0 : ee.isVisible ? 1 : -1
        }, f.push(N), N.sd && (N.sd < 0 && (N.b = ee, N.a = Q), w && Se(N.b, $ ? Me[$] : $e), D && f.push(N.swap = {
            t: Q.element,
            b: N.b,
            a: N.a,
            sd: -N.sd,
            swap: N
        })), P._flip = Q.element._flip = I ? I.timeline : F) : ee.isVisible && (f.push({
            t: P,
            b: ve(ee, {
                isVisible: 1
            }),
            a: ee,
            sd: 0,
            entering: 1
        }), P._flip = I ? I.timeline : F);
        if ($ && (ht[$] || Gt($)).forEach(function(te) {
                return E[te] = function(oe) {
                    return f[oe].a.props[te]
                }
            }), f.finalStates = je = [], qe = function() {
                for (Be(f), It(!0), q = 0; q < f.length; q++) N = f[q], j = N.a, z = N.b, H && !j.isDifferent(z) && !N.entering ? f.splice(q--, 1) : (P = N.t, B && !(N.sd < 0) && q && (j.matrix = J(P, !1, !1, !0)), z.isVisible && j.isVisible ? (N.sd < 0 ? (Z = new fe(P, $, e.simple), me(Z, j, O, 0, 0, Z), Z.matrix = J(P, !1, !1, !0), Z.css = N.b.css, N.a = j = Z, D && (P.style.opacity = w ? z.opacity : j.opacity), M && T.push(P)) : N.sd > 0 && D && (P.style.opacity = w ? j.opacity - z.opacity : "0"), me(j, z, O, $)) : z.isVisible !== j.isVisible && (z.isVisible ? j.isVisible || (z.css = j.css, d.push(z), f.splice(q--, 1), s && B && me(j, z, O, $)) : (j.isVisible && c.push(j), f.splice(q--, 1))), O || (P.style.maxWidth = Math.max(j.width, z.width) + "px", P.style.maxHeight = Math.max(j.height, z.height) + "px", P.style.minWidth = Math.min(j.width, z.width) + "px", P.style.minHeight = Math.min(j.height, z.height) + "px"), B && _ && P.classList.add(_)), je.push(j);
                var oe;
                if (_ && (oe = je.map(function(y) {
                        return y.element
                    }), B && oe.forEach(function(y) {
                        return y.classList.remove(_)
                    })), It(!1), O ? (E.scaleX = function(y) {
                        return f[y].a.scaleX
                    }, E.scaleY = function(y) {
                        return f[y].a.scaleY
                    }) : (E.width = function(y) {
                        return f[y].a.width + "px"
                    }, E.height = function(y) {
                        return f[y].a.height + "px"
                    }, E.autoRound = n.autoRound || !1), E.x = function(y) {
                        return f[y].a.x + "px"
                    }, E.y = function(y) {
                        return f[y].a.y + "px"
                    }, E.rotation = function(y) {
                        return f[y].a.rotation + (K ? A(y, Y[y], Y) * 360 : 0)
                    }, E.skewX = function(y) {
                        return f[y].a.skewX
                    }, Y = f.map(function(y) {
                        return y.t
                    }), (b || b === 0) && (E.modifiers = {
                        zIndex: function() {
                            return b
                        }
                    }, E.zIndex = b, E.immediateRender = n.immediateRender !== !1), D && (E.opacity = function(y) {
                        return f[y].sd < 0 ? 0 : f[y].sd > 0 ? f[y].a.opacity : "+=0"
                    }), T.length) {
                    M = X.utils.distribute(M);
                    var en = Y.slice(T.length);
                    E.stagger = function(y, mt) {
                        return M(~T.indexOf(mt) ? Y.indexOf(f[y].swap.t) : y, mt, en)
                    }
                }
                if (Zn.forEach(function(y) {
                        return n[y] && F.eventCallback(y, n[y], n[y + "Params"])
                    }), h && Y.length) {
                    x = ve(E, At), "scale" in h && (h.scaleX = h.scaleY = h.scale, delete h.scale);
                    for (V in h) L = ve(h[V], Ht), L[V] = E[V], !("duration" in L) && "duration" in E && (L.duration = E.duration), L.stagger = E.stagger, R.call(F, Y, L, 0), delete x[V]
                }(Y.length || d.length || c.length) && (_ && F.add(function() {
                    return We(oe, _, F._zTime < 0 ? "remove" : "add")
                }, 0) && !g && We(oe, _, "add"), Y.length && R.call(F, Y, x, 0)), Nt(u, c, F), Nt(l, d, F);
                var ze = I && I.timeline;
                ze && (ze.add(F, 0), I._final.push(function() {
                    return Lt(f, !a)
                })), re = F.duration(), F.call(function() {
                    var y = F.time() >= re;
                    y && !ze && Lt(f, !a), _ && We(oe, _, y ? "remove" : "add")
                })
            }, p && (s = f.filter(function(te) {
                return !te.sd && !te.a.isVisible && te.b.isVisible
            }).map(function(te) {
                return te.a.element
            })), I) {
            var gt;
            s && (gt = I._abs).push.apply(gt, Pt(f, s)), I._run.push(qe)
        } else s && Ut(Pt(f, s)), qe();
        var Xe = I ? I.timeline : F;
        return Xe.revert = function() {
            return vt(Xe, 1, 1)
        }, Xe
    },
    ii = function o(e) {
        e.vars.onInterrupt && e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []), e.getChildren(!0, !1, !0).forEach(o)
    },
    vt = function(e, t, n) {
        if (e && e.progress() < 1 && (!e.paused() || n)) return t && (ii(e), t < 2 && e.progress(1), e.kill()), !0
    },
    Fe = function(e) {
        for (var t = e.idLookup = {}, n = e.alt = {}, i = e.elementStates, r = i.length, a; r--;) a = i[r], t[a.id] ? n[a.id] = a : t[a.id] = a
    },
    U = function() {
        function o(t, n, i) {
            if (this.props = n && n.props, this.simple = !!(n && n.simple), i) this.targets = Jt(t), this.elementStates = t, Fe(this);
            else {
                this.targets = be(t);
                var r = n && (n.kill === !1 || n.batch && !n.kill);
                I && !r && I._kill.push(this), this.update(r || !!I)
            }
        }
        var e = o.prototype;
        return e.update = function(n) {
            var i = this;
            return this.elementStates = this.targets.map(function(r) {
                return new fe(r, i.props, i.simple)
            }), Fe(this), this.interrupt(n), this.recordInlineStyles(), this
        }, e.clear = function() {
            return this.targets.length = this.elementStates.length = 0, Fe(this), this
        }, e.fit = function(n, i, r) {
            for (var a = Be(this.elementStates.slice(0), !1, !0), u = (n || this).idLookup, l = 0, s, p; l < a.length; l++) s = a[l], r && (s.matrix = J(s.element, !1, !1, !0)), p = u[s.id], p && me(s, p, i, !0, 0, s), s.matrix = J(s.element, !1, !1, !0);
            return this
        }, e.getProperty = function(n, i) {
            var r = this.getElementState(n) || Oe;
            return (i in r ? r : r.props || Oe)[i]
        }, e.add = function(n) {
            for (var i = n.targets.length, r = this.idLookup, a = this.alt, u, l, s; i--;) l = n.elementStates[i], s = r[l.id], s && (l.element === s.element || a[l.id] && a[l.id].element === l.element) ? (u = this.elementStates.indexOf(l.element === s.element ? s : a[l.id]), this.targets.splice(u, 1, n.targets[i]), this.elementStates.splice(u, 1, l)) : (this.targets.push(n.targets[i]), this.elementStates.push(l));
            return n.interrupted && (this.interrupted = !0), n.simple || (this.simple = !1), Fe(this), this
        }, e.compare = function(n) {
            var i = n.idLookup,
                r = this.idLookup,
                a = [],
                u = [],
                l = [],
                s = [],
                p = [],
                h = n.alt,
                v = this.alt,
                g = function(H, $, E) {
                    return (H.isVisible !== $.isVisible ? H.isVisible ? l : s : H.isVisible ? u : a).push(E) && p.push(E)
                },
                m = function(H, $, E) {
                    return p.indexOf(E) < 0 && g(H, $, E)
                },
                C, S, _, B, b, O, D, M;
            for (_ in i) b = h[_], O = v[_], C = b ? Qt(n, this, _) : i[_], B = C.element, S = r[_], O ? (M = S.isVisible || !O.isVisible && B === S.element ? S : O, D = b && !C.isVisible && !b.isVisible && M.element === b.element ? b : C, D.isVisible && M.isVisible && D.element !== M.element ? ((D.isDifferent(M) ? u : a).push(D.element, M.element), p.push(D.element, M.element)) : g(D, M, D.element), b && D.element === b.element && (b = i[_]), m(D.element !== S.element && b ? b : D, S, S.element), m(b && b.element === O.element ? b : D, O, O.element), b && m(b, O.element === b.element ? O : S, b.element)) : (S ? S.isDifferent(C) ? g(C, S, B) : a.push(B) : l.push(B), b && m(b, S, b.element));
            for (_ in r) i[_] || (s.push(r[_].element), v[_] && s.push(v[_].element));
            return {
                changed: u,
                unchanged: a,
                enter: l,
                leave: s
            }
        }, e.recordInlineStyles = function() {
            for (var n = Me[this.props] || $e, i = this.elementStates.length; i--;) Se(this.elementStates[i], n)
        }, e.interrupt = function(n) {
            var i = this,
                r = [];
            this.targets.forEach(function(a) {
                var u = a._flip,
                    l = vt(u, n ? 0 : 1);
                n && l && r.indexOf(u) < 0 && u.add(function() {
                    return i.updateVisibility()
                }), l && r.push(u)
            }), !n && r.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!r.length)
        }, e.updateVisibility = function() {
            this.elementStates.forEach(function(n) {
                var i = n.element.getBoundingClientRect();
                n.isVisible = !!(i.width || i.height || i.top || i.left), n.uncache = 1
            })
        }, e.getElementState = function(n) {
            return this.elementStates[this.targets.indexOf(_e(n))]
        }, e.makeAbsolute = function() {
            return Be(this.elementStates.slice(0), !0, !0).map(pt)
        }, o
    }(),
    fe = function() {
        function o(t, n, i) {
            this.element = t, this.update(n, i)
        }
        var e = o.prototype;
        return e.isDifferent = function(n) {
            var i = this.bounds,
                r = n.bounds;
            return i.top !== r.top || i.left !== r.left || i.width !== r.width || i.height !== r.height || !this.matrix.equals(n.matrix) || this.opacity !== n.opacity || this.props && n.props && JSON.stringify(this.props) !== JSON.stringify(n.props)
        }, e.update = function(n, i) {
            var r = this,
                a = r.element,
                u = X.getProperty(a),
                l = X.core.getCache(a),
                s = a.getBoundingClientRect(),
                p = a.getBBox && typeof a.getBBox == "function" && a.nodeName.toLowerCase() !== "svg" && a.getBBox(),
                h = i ? new de(1, 0, 0, 1, s.left + ct(), s.top + ut()) : J(a, !1, !1, !0);
            r.getProp = u, r.element = a, r.id = ni(a), r.matrix = h, r.cache = l, r.bounds = s, r.isVisible = !!(s.width || s.height || s.left || s.top), r.display = u("display"), r.position = u("position"), r.parent = a.parentNode, r.x = u("x"), r.y = u("y"), r.scaleX = l.scaleX, r.scaleY = l.scaleY, r.rotation = u("rotation"), r.skewX = u("skewX"), r.opacity = u("opacity"), r.width = p ? p.width : ie(u("width", "px"), .04), r.height = p ? p.height : ie(u("height", "px"), .04), n && ti(r, ht[n] || Gt(n)), r.ctm = a.getCTM && a.nodeName.toLowerCase() === "svg" && Kt(a).inverse(), r.simple = i || pe(h.a) === 1 && !pe(h.b) && !pe(h.c) && pe(h.d) === 1, r.uncache = 0
        }, o
    }(),
    ri = function() {
        function o(t, n) {
            this.vars = t, this.batch = n, this.states = [], this.timeline = n.timeline
        }
        var e = o.prototype;
        return e.getStateById = function(n) {
            for (var i = this.states.length; i--;)
                if (this.states[i].idLookup[n]) return this.states[i]
        }, e.kill = function() {
            this.batch.remove(this)
        }, o
    }(),
    ai = function() {
        function o(t) {
            this.id = t, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new U, this.timeline = X.timeline()
        }
        var e = o.prototype;
        return e.add = function(n) {
            var i = this.actions.filter(function(r) {
                return r.vars === n
            });
            return i.length ? i[0] : (i = new ri(typeof n == "function" ? {
                animate: n
            } : n, this), this.actions.push(i), i)
        }, e.remove = function(n) {
            var i = this.actions.indexOf(n);
            return i >= 0 && this.actions.splice(i, 1), this
        }, e.getState = function(n) {
            var i = this,
                r = I,
                a = Te;
            return I = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(u) {
                u.vars.getState && (u.states.length = 0, Te = u, u.state = u.vars.getState(u)), n && u.states.forEach(function(l) {
                    return i.state.add(l)
                })
            }), Te = a, I = r, this.killConflicts(), this
        }, e.animate = function() {
            var n = this,
                i = I,
                r = this.timeline,
                a = this.actions.length,
                u, l;
            for (I = this, r.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(s) {
                    s.vars.animate && s.vars.animate(s);
                    var p = s.vars.onEnter,
                        h = s.vars.onLeave,
                        v = s.targets,
                        g, m;
                    v && v.length && (p || h) && (g = new U, s.states.forEach(function(C) {
                        return g.add(C)
                    }), m = g.compare(W.getState(v)), m.enter.length && p && p(m.enter), m.leave.length && h && h(m.leave))
                }), Ut(this._abs), this._run.forEach(function(s) {
                    return s()
                }), l = r.duration(), u = this._final.slice(0), r.add(function() {
                    l <= r.time() && (u.forEach(function(s) {
                        return s()
                    }), Ct(n, "onComplete"))
                }), I = i; a--;) this.actions[a].vars.once && this.actions[a].kill();
            return Ct(this, "onStart"), r.restart(), this
        }, e.loadState = function(n) {
            n || (n = function() {
                return 0
            });
            var i = [];
            return this.actions.forEach(function(r) {
                if (r.vars.loadState) {
                    var a, u = function l(s) {
                        s && (r.targets = s), a = i.indexOf(l), ~a && (i.splice(a, 1), i.length || n())
                    };
                    i.push(u), r.vars.loadState(u)
                }
            }), i.length || n(), this
        }, e.setState = function() {
            return this.actions.forEach(function(n) {
                return n.targets = n.vars.setState && n.vars.setState(n)
            }), this
        }, e.killConflicts = function(n) {
            return this.state.interrupt(n), this._kill.forEach(function(i) {
                return i.interrupt(n)
            }), this
        }, e.run = function(n, i) {
            var r = this;
            return this !== I && (n || this.getState(i), this.loadState(function() {
                r._killed || (r.setState(), r.animate())
            })), this
        }, e.clear = function(n) {
            this.state.clear(), n || (this.actions.length = 0)
        }, e.getStateById = function(n) {
            for (var i = this.actions.length, r; i--;)
                if (r = this.actions[i].getStateById(n), r) return r;
            return this.state.idLookup[n] && this.state
        }, e.kill = function() {
            this._killed = 1, this.clear(), delete rt[this.id]
        }, o
    }(),
    W = function() {
        function o() {}
        return o.getState = function(t, n) {
            var i = Ue(t, n);
            return Te && Te.states.push(i), n && n.batch && o.batch(n.batch).state.add(i), i
        }, o.from = function(t, n) {
            return n = n || {}, "clearProps" in n || (n.clearProps = !0), Qe(t, Ue(n.targets || t.targets, {
                props: n.props || t.props,
                simple: n.simple,
                kill: !!n.kill
            }), n, -1)
        }, o.to = function(t, n) {
            return Qe(t, Ue(n.targets || t.targets, {
                props: n.props || t.props,
                simple: n.simple,
                kill: !!n.kill
            }), n, 1)
        }, o.fromTo = function(t, n, i) {
            return Qe(t, n, i)
        }, o.fit = function(t, n, i) {
            var r = i ? ve(i, Ht) : {},
                a = i || r,
                u = a.absolute,
                l = a.scale,
                s = a.getVars,
                p = a.props,
                h = a.runBackwards,
                v = a.onComplete,
                g = a.simple,
                m = i && i.fitChild && _e(i.fitChild),
                C = at(n, p, g, t),
                S = at(t, 0, g, C),
                _ = p ? Me[p] : $e,
                B = X.context();
            return p && Zt(r, C.props), Se(S, _), h && ("immediateRender" in r || (r.immediateRender = !0), r.onComplete = function() {
                Re(S), v && v.apply(this, arguments)
            }), u && pt(S, C), r = me(S, C, l || m, p, m, r.duration || s ? r : 0), typeof i == "object" && "zIndex" in i && (r.zIndex = i.zIndex), B && !s && B.add(function() {
                return function() {
                    return Re(S)
                }
            }), s ? r : r.duration ? X.to(S.element, r) : null
        }, o.makeAbsolute = function(t, n) {
            return (t instanceof U ? t : new U(t, n)).makeAbsolute()
        }, o.batch = function(t) {
            return t || (t = "default"), rt[t] || (rt[t] = new ai(t))
        }, o.killFlipsOf = function(t, n) {
            (t instanceof U ? t.targets : be(t)).forEach(function(i) {
                return i && vt(i._flip, n !== !1 ? 1 : 2)
            })
        }, o.isFlipping = function(t) {
            var n = o.getByTarget(t);
            return !!n && n.isActive()
        }, o.getByTarget = function(t) {
            return (_e(t) || Oe)._flip
        }, o.getElementState = function(t, n) {
            return new fe(_e(t), n)
        }, o.convertCoordinates = function(t, n, i) {
            var r = J(n, !0, !0).multiply(J(t));
            return i ? r.apply(i) : r
        }, o.register = function(t) {
            if (ae = typeof document < "u" && document.body, ae) {
                X = t, lt(ae), be = X.utils.toArray, it = X.core.getStyleSaver;
                var n = X.utils.snap(.1);
                ie = function(r, a) {
                    return n(parseFloat(r) + a)
                }
            }
        }, o
    }();
W.version = "3.12.7";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(W);
se.registerPlugin(W);
class ge extends HTMLElement {
    static ACTIVE_CLASS = "has-menu-open";
    static CLOSE_CLASS = "has-menu-closing";
    $menu;
    $logo;
    $close;
    $togglers;
    isOpened;
    focusTrap;
    timeout = null;
    isAuthenticatedListener = () => {};
    authenticatedUserListener = () => {};
    constructor() {
        super(), this.onToggleMenu = this.onToggleMenu.bind(this), this.close = this.close.bind(this), this.onFocusTrapActivate = this.onFocusTrapActivate.bind(this), this.onFocusTrapPostActivate = this.onFocusTrapPostActivate.bind(this), this.onFocusTrapDeactivate = this.onFocusTrapDeactivate.bind(this), this.onFocusTrapPostDeactivate = this.onFocusTrapPostDeactivate.bind(this), this.onIsAuthenticatedChange = this.onIsAuthenticatedChange.bind(this), this.onAuthenticatedUserChange = this.onAuthenticatedUserChange.bind(this), this.$togglers = Array.from(document.documentElement.querySelectorAll("[data-menu-toggler]")), this.$menu = this.querySelector("[data-menu]"), this.$menu.setAttribute("id", "menu"), this.$logo = this.querySelector("#menuLogo"), this.$close = this.querySelector("#menuClose"), this.isOpened = !1, this.focusTrap = null
    }
    connectedCallback() {
        this.bindEvents(), this.initFocusTrap()
    }
    disconnectedCallback() {
        this.unbindEvents(), this.close(), this.destroyFocusTrap()
    }
    bindEvents() {
        for (const e of this.$togglers) e.setAttribute("aria-controls", "#menu"), e.addEventListener("click", this.onToggleMenu)
    }
    unbindEvents() {
        for (const e of this.$togglers) e.removeEventListener("click", this.onToggleMenu);
        this.isAuthenticatedListener?.(), this.authenticatedUserListener?.()
    }
    onToggleMenu() {
        this.isOpened ? this.close() : this.open()
    }
    onFocusTrapActivate() {
        this.isOpened = !0, this.$menu.setAttribute("aria-hidden", "false");
        const e = parseFloat(getComputedStyle(this).getPropertyValue("--menu-animation-delay")) * 1e3;
        this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
            this.$menu.classList.add("is-active");
            const t = parseFloat(getComputedStyle(this).getPropertyValue("--menu-animation-duration")),
                n = document.querySelector("#headerLogo"),
                i = document.querySelector("#headerMenuToggler");
            W.killFlipsOf([this.$logo, this.$close]), se.killTweensOf([this.$logo, this.$close]), se.set([this.$close, this.$logo], {
                clearProps: "all"
            });
            const r = W.getState([this.$logo, this.$close]);
            se.set(n, {
                opacity: 0
            }), W.fit(this.$close, i, {
                scale: !0
            }), W.fit(this.$logo, n, {
                scale: !0
            }), W.to(r, {
                duration: t,
                scale: !0,
                ease: "power2.out"
            })
        }, e)
    }
    onFocusTrapPostActivate() {
        for (const e of this.$togglers) e.setAttribute("aria-expanded", "true")
    }
    onFocusTrapDeactivate() {
        document.documentElement.classList.add(ge.CLOSE_CLASS), this.isOpened = !1, this.$menu.classList.remove("is-active"), this.$menu.setAttribute("aria-hidden", "true");
        const e = parseFloat(getComputedStyle(this).getPropertyValue("--menu-animation-duration")),
            t = document.querySelector("#headerLogo"),
            n = document.querySelector("#headerMenuToggler"),
            i = {
                duration: e,
                scale: !0,
                ease: "power2.out"
            };
        W.killFlipsOf([this.$logo, this.$close]), se.killTweensOf([this.$logo, this.$close]), se.set([this.$close, this.$logo], {
            clearProps: "all"
        }), W.fit(this.$close, n, i), W.fit(this.$logo, t, {
            onComplete: () => {
                se.set(t, {
                    clearProps: "all"
                })
            },
            ...i
        }), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
            document.documentElement.classList.remove(ge.ACTIVE_CLASS), document.documentElement.classList.remove(ge.CLOSE_CLASS)
        }, e * 1e3)
    }
    onFocusTrapPostDeactivate() {
        for (const e of this.$togglers) e.setAttribute("aria-expanded", "false")
    }
    onIsAuthenticatedChange(e) {}
    onAuthenticatedUserChange(e) {}
    initFocusTrap() {
        this.focusTrap = zn(this.$menu, {
            onActivate: this.onFocusTrapActivate,
            onPostActivate: this.onFocusTrapPostActivate,
            onDeactivate: this.onFocusTrapDeactivate,
            onPostDeactivate: this.onFocusTrapPostDeactivate,
            clickOutsideDeactivates: !0,
            initialFocus: this.$menu.querySelector("[data-menu-toggler]")
        })
    }
    destroyFocusTrap() {
        this.focusTrap?.deactivate(), requestAnimationFrame(() => {
            this.focusTrap = null
        })
    }
    open() {
        document.documentElement.classList.add(ge.ACTIVE_CLASS), this.focusTrap?.activate()
    }
    close() {
        this.focusTrap?.deactivate()
    }
}
customElements.define("c-menu", ge);
export {
    Bt as $, on as a, zn as c, an as r
};