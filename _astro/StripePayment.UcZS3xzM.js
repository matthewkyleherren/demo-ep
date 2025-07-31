import {
    j as c
} from "./jsx-runtime.DAW3kIbQ.js";
import {
    R as P,
    r as f
} from "./index.l3JPYhe8.js";
import {
    P as $
} from "./index.D5iyYF_4.js";
import {
    a as Ee,
    c as bo,
    R as Te,
    f as Eo,
    u as Ro,
    d as Ve,
    I as Be
} from "./InputError.DrRxTOiV.js";
import {
    r as Tt
} from "./index.yNAdRnty.js";
import {
    c as Nt,
    u as ee,
    f as vt,
    d as X,
    a as ae,
    n as cn,
    e as q,
    b as ko,
    k as _t,
    h as Ao,
    g as Io,
    R as To,
    F as No,
    D as _o,
    j as $t,
    C as Mo,
    P as Wt,
    l as J,
    V as Po,
    m as Oo
} from "./VehicleEnergyOption.N9liIp9U.js";
import {
    M as V
} from "./Message.BZwHJWoZ.js";
import {
    r as me,
    m as ge
} from "./GlobalFunction.Bevo4Wx4.js";
import {
    C as ve
} from "./Constant.B9wrUrrZ.js";
import {
    l as jo
} from "./logo.DpjBDGFl.js";
import {
    L as Ho
} from "./loader-circle.CU4WZn4J.js";
import {
    g as Do,
    c as Vo
} from "./auth0.lVSljASH.js";
import {
    c as ln
} from "./createLucideIcon.C_SjNh3H.js";
import "./_commonjsHelpers.Cpj98o6Y.js";
import "./index.DPypXweU.js";
import "./index.Cxecge6t.js";
import "./reactive.DqYsbDQg.js";
import "./index.BSdFiPHn.js";
import "./clsx.B-dksMZM.js";
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = ln("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = ln("ChevronUp", [
    ["path", {
        d: "m18 15-6-6-6 6",
        key: "153udz"
    }]
]);
var un = "https://js.stripe.com/v3",
    Uo = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var $o = function() {
        for (var t = document.querySelectorAll('script[src^="'.concat(un, '"]')), n = 0; n < t.length; n++) {
            var o = t[n];
            if (Uo.test(o.src)) return o
        }
        return null
    },
    Zt = function(t) {
        var n = "",
            o = document.createElement("script");
        o.src = "".concat(un).concat(n);
        var r = document.head || document.body;
        if (!r) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
        return r.appendChild(o), o
    },
    Wo = function(t, n) {
        !t || !t._registerWrapper || t._registerWrapper({
            name: "stripe-js",
            version: "4.6.0",
            startTime: n
        })
    },
    Fe = null,
    ze = null,
    Ke = null,
    Zo = function(t) {
        return function() {
            t(new Error("Failed to load Stripe.js"))
        }
    },
    Go = function(t, n) {
        return function() {
            window.Stripe ? t(window.Stripe) : n(new Error("Stripe.js not available"))
        }
    },
    zo = function(t) {
        return Fe !== null ? Fe : (Fe = new Promise(function(n, o) {
            if (typeof window > "u" || typeof document > "u") {
                n(null);
                return
            }
            if (window.Stripe) {
                n(window.Stripe);
                return
            }
            try {
                var r = $o();
                if (!(r && t)) {
                    if (!r) r = Zt(t);
                    else if (r && Ke !== null && ze !== null) {
                        var a;
                        r.removeEventListener("load", Ke), r.removeEventListener("error", ze), (a = r.parentNode) === null || a === void 0 || a.removeChild(r), r = Zt(t)
                    }
                }
                Ke = Go(n, o), ze = Zo(o), r.addEventListener("load", Ke), r.addEventListener("error", ze)
            } catch (s) {
                o(s);
                return
            }
        }), Fe.catch(function(n) {
            return Fe = null, Promise.reject(n)
        }))
    },
    Ko = function(t, n, o) {
        if (t === null) return null;
        var r = t.apply(void 0, n);
        return Wo(r, o), r
    },
    Ue, dn = !1,
    mn = function() {
        return Ue || (Ue = zo(null).catch(function(t) {
            return Ue = null, Promise.reject(t)
        }), Ue)
    };
Promise.resolve().then(function() {
    return mn()
}).catch(function(e) {});
var Yo = function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
    dn = !0;
    var r = Date.now();
    return mn().then(function(a) {
        return Ko(a, n, r)
    })
};

function Gt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), n.push.apply(n, o)
    }
    return n
}

function zt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Gt(Object(n), !0).forEach(function(o) {
            fn(e, o, n[o])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gt(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
        })
    }
    return e
}

function Xe(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xe = function(t) {
        return typeof t
    } : Xe = function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Xe(e)
}

function fn(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function pn(e, t) {
    return qo(e) || Xo(e, t) || Jo(e, t) || Qo()
}

function qo(e) {
    if (Array.isArray(e)) return e
}

function Xo(e, t) {
    var n = e && (typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"]);
    if (n != null) {
        var o = [],
            r = !0,
            a = !1,
            s, u;
        try {
            for (n = n.call(e); !(r = (s = n.next()).done) && (o.push(s.value), !(t && o.length === t)); r = !0);
        } catch (l) {
            a = !0, u = l
        } finally {
            try {
                !r && n.return != null && n.return()
            } finally {
                if (a) throw u
            }
        }
        return o
    }
}

function Jo(e, t) {
    if (e) {
        if (typeof e == "string") return Kt(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Kt(e, t)
    }
}

function Kt(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o
}

function Qo() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var te = function(t, n, o) {
        var r = !!o,
            a = P.useRef(o);
        P.useEffect(function() {
            a.current = o
        }, [o]), P.useEffect(function() {
            if (!r || !t) return function() {};
            var s = function() {
                a.current && a.current.apply(a, arguments)
            };
            return t.on(n, s),
                function() {
                    t.off(n, s)
                }
        }, [r, n, t, a])
    },
    xt = function(t) {
        var n = P.useRef(t);
        return P.useEffect(function() {
            n.current = t
        }, [t]), n.current
    },
    _e = function(t) {
        return t !== null && Xe(t) === "object"
    },
    er = function(t) {
        return _e(t) && typeof t.then == "function"
    },
    tr = function(t) {
        return _e(t) && typeof t.elements == "function" && typeof t.createToken == "function" && typeof t.createPaymentMethod == "function" && typeof t.confirmCardPayment == "function"
    },
    Yt = "[object Object]",
    nr = function e(t, n) {
        if (!_e(t) || !_e(n)) return t === n;
        var o = Array.isArray(t),
            r = Array.isArray(n);
        if (o !== r) return !1;
        var a = Object.prototype.toString.call(t) === Yt,
            s = Object.prototype.toString.call(n) === Yt;
        if (a !== s) return !1;
        if (!a && !o) return t === n;
        var u = Object.keys(t),
            l = Object.keys(n);
        if (u.length !== l.length) return !1;
        for (var d = {}, m = 0; m < u.length; m += 1) d[u[m]] = !0;
        for (var p = 0; p < l.length; p += 1) d[l[p]] = !0;
        var v = Object.keys(d);
        if (v.length !== u.length) return !1;
        var g = t,
            x = n,
            i = function(C) {
                return e(g[C], x[C])
            };
        return v.every(i)
    },
    hn = function(t, n, o) {
        return _e(t) ? Object.keys(t).reduce(function(r, a) {
            var s = !_e(n) || !nr(t[a], n[a]);
            return o.includes(a) || !s ? r : zt(zt({}, r || {}), {}, fn({}, a, t[a]))
        }, null) : null
    },
    gn = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
    qt = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : gn;
        if (t === null || tr(t)) return t;
        throw new Error(n)
    },
    or = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : gn;
        if (er(t)) return {
            tag: "async",
            stripePromise: Promise.resolve(t).then(function(r) {
                return qt(r, n)
            })
        };
        var o = qt(t, n);
        return o === null ? {
            tag: "empty"
        } : {
            tag: "sync",
            stripe: o
        }
    },
    rr = function(t) {
        !t || !t._registerWrapper || !t.registerAppInfo || (t._registerWrapper({
            name: "react-stripe-js",
            version: "2.8.1"
        }), t.registerAppInfo({
            name: "react-stripe-js",
            version: "2.8.1",
            url: "https://stripe.com/docs/stripe-js/react"
        }))
    },
    rt = P.createContext(null);
rt.displayName = "ElementsContext";
var vn = function(t, n) {
        if (!t) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n, " in an <Elements> provider."));
        return t
    },
    xn = function(t) {
        var n = t.stripe,
            o = t.options,
            r = t.children,
            a = P.useMemo(function() {
                return or(n)
            }, [n]),
            s = P.useState(function() {
                return {
                    stripe: a.tag === "sync" ? a.stripe : null,
                    elements: a.tag === "sync" ? a.stripe.elements(o) : null
                }
            }),
            u = pn(s, 2),
            l = u[0],
            d = u[1];
        P.useEffect(function() {
            var v = !0,
                g = function(i) {
                    d(function(L) {
                        return L.stripe ? L : {
                            stripe: i,
                            elements: i.elements(o)
                        }
                    })
                };
            return a.tag === "async" && !l.stripe ? a.stripePromise.then(function(x) {
                    x && v && g(x)
                }) : a.tag === "sync" && !l.stripe && g(a.stripe),
                function() {
                    v = !1
                }
        }, [a, l, o]);
        var m = xt(n);
        P.useEffect(function() {}, [m, n]);
        var p = xt(o);
        return P.useEffect(function() {
            if (l.elements) {
                var v = hn(o, p, ["clientSecret", "fonts"]);
                v && l.elements.update(v)
            }
        }, [o, p, l.elements]), P.useEffect(function() {
            rr(l.stripe)
        }, [l.stripe]), P.createElement(rt.Provider, {
            value: l
        }, r)
    };
xn.propTypes = {
    stripe: $.any,
    options: $.object
};
var sr = function(t) {
        var n = P.useContext(rt);
        return vn(n, t)
    },
    ar = function() {
        var t = sr("calls useElements()"),
            n = t.elements;
        return n
    };
$.func.isRequired;
var yn = P.createContext(null);
yn.displayName = "CustomCheckoutSdkContext";
var ir = function(t, n) {
        if (!t) throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(n, " in an <CustomCheckoutProvider> provider."));
        return t
    },
    cr = P.createContext(null);
cr.displayName = "CustomCheckoutContext";
$.any, $.shape({
    clientSecret: $.string.isRequired,
    elementsOptions: $.object
}).isRequired;
var yt = function(t) {
        var n = P.useContext(yn),
            o = P.useContext(rt);
        if (n && o) throw new Error("You cannot wrap the part of your app that ".concat(t, " in both <CustomCheckoutProvider> and <Elements> providers."));
        return n ? ir(n, t) : vn(o, t)
    },
    lr = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    z = function(t, n) {
        var o = "".concat(lr(t), "Element"),
            r = function(l) {
                var d = l.id,
                    m = l.className,
                    p = l.options,
                    v = p === void 0 ? {} : p,
                    g = l.onBlur,
                    x = l.onFocus,
                    i = l.onReady,
                    L = l.onChange,
                    C = l.onEscape,
                    w = l.onClick,
                    b = l.onLoadError,
                    R = l.onLoaderStart,
                    k = l.onNetworksChange,
                    T = l.onConfirm,
                    A = l.onCancel,
                    O = l.onShippingAddressChange,
                    B = l.onShippingRateChange,
                    j = yt("mounts <".concat(o, ">")),
                    H = "elements" in j ? j.elements : null,
                    M = "customCheckoutSdk" in j ? j.customCheckoutSdk : null,
                    D = P.useState(null),
                    N = pn(D, 2),
                    h = N[0],
                    y = N[1],
                    S = P.useRef(null),
                    E = P.useRef(null);
                te(h, "blur", g), te(h, "focus", x), te(h, "escape", C), te(h, "click", w), te(h, "loaderror", b), te(h, "loaderstart", R), te(h, "networkschange", k), te(h, "confirm", T), te(h, "cancel", A), te(h, "shippingaddresschange", O), te(h, "shippingratechange", B), te(h, "change", L);
                var _;
                i && (t === "expressCheckout" ? _ = i : _ = function() {
                    i(h)
                }), te(h, "ready", _), P.useLayoutEffect(function() {
                    if (S.current === null && E.current !== null && (H || M)) {
                        var W = null;
                        M ? W = M.createElement(t, v) : H && (W = H.create(t, v)), S.current = W, y(W), W && W.mount(E.current)
                    }
                }, [H, M, v]);
                var Y = xt(v);
                return P.useEffect(function() {
                    if (S.current) {
                        var W = hn(v, Y, ["paymentRequest"]);
                        W && "update" in S.current && S.current.update(W)
                    }
                }, [v, Y]), P.useLayoutEffect(function() {
                    return function() {
                        if (S.current && typeof S.current.destroy == "function") try {
                            S.current.destroy(), S.current = null
                        } catch {}
                    }
                }, []), P.createElement("div", {
                    id: d,
                    className: m,
                    ref: E
                })
            },
            a = function(l) {
                yt("mounts <".concat(o, ">"));
                var d = l.id,
                    m = l.className;
                return P.createElement("div", {
                    id: d,
                    className: m
                })
            },
            s = n ? a : r;
        return s.propTypes = {
            id: $.string,
            className: $.string,
            onChange: $.func,
            onBlur: $.func,
            onFocus: $.func,
            onReady: $.func,
            onEscape: $.func,
            onClick: $.func,
            onLoadError: $.func,
            onLoaderStart: $.func,
            onNetworksChange: $.func,
            onConfirm: $.func,
            onCancel: $.func,
            onShippingAddressChange: $.func,
            onShippingRateChange: $.func,
            options: $.object
        }, s.displayName = o, s.__elementType = t, s
    },
    K = typeof window > "u",
    ur = P.createContext(null);
ur.displayName = "EmbeddedCheckoutProviderContext";
var dr = function() {
    var t = yt("calls useStripe()"),
        n = t.stripe;
    return n
};
z("auBankAccount", K);
z("card", K);
z("cardNumber", K);
z("cardExpiry", K);
z("cardCvc", K);
z("fpxBank", K);
z("iban", K);
z("idealBank", K);
z("p24Bank", K);
z("epsBank", K);
var Ln = z("payment", K),
    mr = z("expressCheckout", K);
z("currencySelector", K);
z("paymentRequestButton", K);
z("linkAuthentication", K);
z("address", K);
z("shippingAddress", K);
z("paymentMethodMessaging", K);
z("affirmMessage", K);
z("afterpayClearpayMessage", K);
const Xt = [{
    name: "United States",
    iso2: "US",
    cc: "+1",
    mask: "+1 (000) 000-0000"
}, {
    name: "Canada",
    iso2: "CA",
    cc: "+1",
    mask: "+1 (000) 000-0000"
}, {
    name: "Afghanistan",
    iso2: "AF",
    cc: "+93",
    mask: "+93 00 000 0000"
}, {
    name: "Aland Islands",
    iso2: "AX",
    cc: "+358",
    mask: "+358 00 000 0000"
}, {
    name: "Albania",
    iso2: "AL",
    cc: "+355",
    mask: "+355 00 000 0000"
}, {
    name: "Algeria",
    iso2: "DZ",
    cc: "+213",
    mask: "+213 00 000 00 00"
}, {
    name: "American Samoa",
    iso2: "AS",
    cc: "+1",
    mask: "+1 (684) 000-0000"
}, {
    name: "Andorra",
    iso2: "AD",
    cc: "+376",
    mask: "+376 000 000"
}, {
    name: "Angola",
    iso2: "AO",
    cc: "+244",
    mask: "+244 000 000 000"
}, {
    name: "Anguilla",
    iso2: "AI",
    cc: "+1",
    mask: "+1 (264) 000-0000"
}, {
    name: "Antarctica",
    iso2: "AQ",
    cc: "+672",
    mask: "+672 1 00 000"
}, {
    name: "Antigua And Barbuda",
    iso2: "AG",
    cc: "+1",
    mask: "+1 (268) 000-0000"
}, {
    name: "Argentina",
    iso2: "AR",
    cc: "+54",
    mask: "+54 9 00 000-0000"
}, {
    name: "Armenia",
    iso2: "AM",
    cc: "+374",
    mask: "+374 00 000 000"
}, {
    name: "Aruba",
    iso2: "AW",
    cc: "+297",
    mask: "+297 000 0000"
}, {
    name: "Australia",
    iso2: "AU",
    cc: "+61",
    mask: "+61 0 0000 0000"
}, {
    name: "Austria",
    iso2: "AT",
    cc: "+43",
    mask: "+43 00 000 0000"
}, {
    name: "Azerbaijan",
    iso2: "AZ",
    cc: "+994",
    mask: "+994 00 000 00 00"
}, {
    name: "Bahamas",
    iso2: "BS",
    cc: "+1",
    mask: "+1 (242) 000-0000"
}, {
    name: "Bahrain",
    iso2: "BH",
    cc: "+973",
    mask: "+973 0000 0000"
}, {
    name: "Bangladesh",
    iso2: "BD",
    cc: "+880",
    mask: "+880 0 000 000[0]"
}, {
    name: "Barbados",
    iso2: "BB",
    cc: "+1",
    mask: "+1 (246) 000-0000"
}, {
    name: "Belarus",
    iso2: "BY",
    cc: "+375",
    mask: "+375 (00) 000-00-00"
}, {
    name: "Belgium",
    iso2: "BE",
    cc: "+32",
    mask: "+32 0 000 00 00"
}, {
    name: "Belize",
    iso2: "BZ",
    cc: "+501",
    mask: "+501 000-0000"
}, {
    name: "Benin",
    iso2: "BJ",
    cc: "+229",
    mask: "+229 00 00 0000"
}, {
    name: "Bermuda",
    iso2: "BM",
    cc: "+1",
    mask: "+1 (441) 000-0000"
}, {
    name: "Bhutan",
    iso2: "BT",
    cc: "+975",
    mask: "+975 0 000 000"
}, {
    name: "Bolivia",
    iso2: "BO",
    cc: "+591",
    mask: "+591 0 000 0000"
}, {
    name: "Bosnia And Herzegovina",
    iso2: "BA",
    cc: "+387",
    mask: "+387 00 000-000[0]"
}, {
    name: "Botswana",
    iso2: "BW",
    cc: "+267",
    mask: "+267 00 000 000"
}, {
    name: "Bouvet Island",
    iso2: "BV",
    cc: "+47",
    mask: "+47 000 00 000"
}, {
    name: "Brazil",
    iso2: "BR",
    cc: "+55",
    mask: "+55 00 0000 0000[0]"
}, {
    name: "British Indian Ocean Territory",
    iso2: "IO",
    cc: "+246",
    mask: "+246 000 0000"
}, {
    name: "Brunei Darussalam",
    iso2: "BN",
    cc: "+673",
    mask: "+673 000 0000"
}, {
    name: "Bulgaria",
    iso2: "BG",
    cc: "+359",
    mask: "+359 00 000 0000"
}, {
    name: "Burkina Faso",
    iso2: "BF",
    cc: "+226",
    mask: "+226 00 00 0000"
}, {
    name: "Burundi",
    iso2: "BI",
    cc: "+257",
    mask: "+257 00 00 0000"
}, {
    name: "Cambodia",
    iso2: "KH",
    cc: "+855",
    mask: "+855 00 000 000"
}, {
    name: "Cameroon",
    iso2: "CM",
    cc: "+237",
    mask: "+237 0 00 00 00 00"
}, {
    name: "Cape Verde",
    iso2: "CV",
    cc: "+238",
    mask: "+238 (00) 00 00"
}, {
    name: "Cayman Islands",
    iso2: "KY",
    cc: "+1",
    mask: "+1 (345) 000-0000"
}, {
    name: "Central African Republic",
    iso2: "CF",
    cc: "+236",
    mask: "+236 00 00 0000"
}, {
    name: "Chad",
    iso2: "TD",
    cc: "+235",
    mask: "+235 00 00 00 00"
}, {
    name: "Chile",
    iso2: "CL",
    cc: "+56",
    mask: "+56 0 0000 0000"
}, {
    name: "China",
    iso2: "CN",
    cc: "+86",
    mask: "+86 00 0000 0000"
}, {
    name: "Christmas Island",
    iso2: "CX",
    cc: "+61",
    mask: "+61 4 00 000 000"
}, {
    name: "Cocos (Keeling) Islands",
    iso2: "CC",
    cc: "+61",
    mask: "+61 4 00 000 000"
}, {
    name: "Colombia",
    iso2: "CO",
    cc: "+57",
    mask: "+57 0 000 0000"
}, {
    name: "Comoros",
    iso2: "KM",
    cc: "+269",
    mask: "+269 00 00 00"
}, {
    name: "Congo",
    iso2: "CG",
    cc: "+242",
    mask: "+242 00 000 0000"
}, {
    name: "Congo, Democratic Republic",
    iso2: "CD",
    cc: "+243",
    mask: "+243 00 000 0000"
}, {
    name: "Cook Islands",
    iso2: "CK",
    cc: "+682",
    mask: "+682 00 000"
}, {
    name: "Costa Rica",
    iso2: "CR",
    cc: "+506",
    mask: "+506 0000 0000"
}, {
    name: "Cote D'Ivoire",
    iso2: "CI",
    cc: "+225",
    mask: "+225 00 00 00 00"
}, {
    name: "Croatia",
    iso2: "HR",
    cc: "+385",
    mask: "+385 0 000 0000"
}, {
    name: "Cuba",
    iso2: "CU",
    cc: "+53",
    mask: "+53 0 000 0000"
}, {
    name: "Cyprus",
    iso2: "CY",
    cc: "+357",
    mask: "+357 00 000 000"
}, {
    name: "Czech Republic",
    iso2: "CZ",
    cc: "+420",
    mask: "+420 000 000 000"
}, {
    name: "Denmark",
    iso2: "DK",
    cc: "+45",
    mask: "+45 00 00 00 00"
}, {
    name: "Djibouti",
    iso2: "DJ",
    cc: "+253",
    mask: "+253 00 00 00 00"
}, {
    name: "Dominica",
    iso2: "DM",
    cc: "+1",
    mask: "+1 (767) 000-0000"
}, {
    name: "Dominican Republic",
    iso2: "DO",
    cc: "+1",
    mask: "+1 (000) 000-0000"
}, {
    name: "Ecuador",
    iso2: "EC",
    cc: "+593",
    mask: "+593 00 000 0000"
}, {
    name: "Egypt",
    iso2: "EG",
    cc: "+20",
    mask: "+20 0 0000 0000"
}, {
    name: "El Salvador",
    iso2: "SV",
    cc: "+503",
    mask: "+503 0000 0000"
}, {
    name: "Equatorial Guinea",
    iso2: "GQ",
    cc: "+240",
    mask: "+240 00 000 0000"
}, {
    name: "Eritrea",
    iso2: "ER",
    cc: "+291",
    mask: "+291 0 000 000"
}, {
    name: "Estonia",
    iso2: "EE",
    cc: "+372",
    mask: "+372 0000 0000"
}, {
    name: "Ethiopia",
    iso2: "ET",
    cc: "+251",
    mask: "+251 00 000 0000"
}, {
    name: "Falkland Islands (Malvinas)",
    iso2: "FK",
    cc: "+500",
    mask: "+500 00000"
}, {
    name: "Faroe Islands",
    iso2: "FO",
    cc: "+298",
    mask: "+298 000000"
}, {
    name: "Fiji",
    iso2: "FJ",
    cc: "+679",
    mask: "+679 000 0000"
}, {
    name: "Finland",
    iso2: "FI",
    cc: "+358",
    mask: "+358 00 000 0000"
}, {
    name: "France",
    iso2: "FR",
    cc: "+33",
    mask: "+33 0 00 00 00 00"
}, {
    name: "French Guiana",
    iso2: "GF",
    cc: "+594",
    mask: "+594 00000 0000"
}, {
    name: "French Polynesia",
    iso2: "PF",
    cc: "+689",
    mask: "+689 00 00 00"
}, {
    name: "French Southern Territories",
    iso2: "TF",
    cc: "+262",
    mask: "+262 00000 0000"
}, {
    name: "Gabon",
    iso2: "GA",
    cc: "+241",
    mask: "+241 0 00 00 00"
}, {
    name: "Gambia",
    iso2: "GM",
    cc: "+220",
    mask: "+220 000 0000"
}, {
    name: "Georgia",
    iso2: "GE",
    cc: "+995",
    mask: "+995 00 000 0000"
}, {
    name: "Germany",
    iso2: "DE",
    cc: "+49",
    mask: "+49 00 000000"
}, {
    name: "Ghana",
    iso2: "GH",
    cc: "+233",
    mask: "+233 00 000 0000"
}, {
    name: "Gibraltar",
    iso2: "GI",
    cc: "+350",
    mask: "+350 200 00000"
}, {
    name: "Greece",
    iso2: "GR",
    cc: "+30",
    mask: "+30 00 000 0000"
}, {
    name: "Greenland",
    iso2: "GL",
    cc: "+299",
    mask: "+299 00 00 00"
}, {
    name: "Grenada",
    iso2: "GD",
    cc: "+1",
    mask: "+1 (473) 000-0000"
}, {
    name: "Guadeloupe",
    iso2: "GP",
    cc: "+590",
    mask: "+590 0000 0000"
}, {
    name: "Guam",
    iso2: "GU",
    cc: "+1",
    mask: "+1 (671) 000-0000"
}, {
    name: "Guatemala",
    iso2: "GT",
    cc: "+502",
    mask: "+502 0 000 0000"
}, {
    name: "Guernsey",
    iso2: "GG",
    cc: "+44",
    mask: "+44 1481 00 0000"
}, {
    name: "Guinea",
    iso2: "GN",
    cc: "+224",
    mask: "+224 00 000 0000"
}, {
    name: "Guinea-Bissau",
    iso2: "GW",
    cc: "+245",
    mask: "+245 0 000 000"
}, {
    name: "Guyana",
    iso2: "GY",
    cc: "+592",
    mask: "+592 000 0000"
}, {
    name: "Haiti",
    iso2: "HT",
    cc: "+509",
    mask: "+509 00 00 0000"
}, {
    name: "Heard Island & Mcdonald Islands",
    iso2: "HM",
    cc: "+672",
    mask: "+672 1 00 000"
}, {
    name: "Holy See (Vatican City State)",
    iso2: "VA",
    cc: "+39",
    mask: "+39 06 698 00000"
}, {
    name: "Honduras",
    iso2: "HN",
    cc: "+504",
    mask: "+504 0000 0000"
}, {
    name: "Hong Kong",
    iso2: "HK",
    cc: "+852",
    mask: "+852 0000 0000"
}, {
    name: "Hungary",
    iso2: "HU",
    cc: "+36",
    mask: "+36 0[0] 000 000[0]"
}, {
    name: "Iceland",
    iso2: "IS",
    cc: "+354",
    mask: "+354 000 0000"
}, {
    name: "India",
    iso2: "IN",
    cc: "+91",
    mask: "+91 00 0000 0000"
}, {
    name: "Indonesia",
    iso2: "ID",
    cc: "+62",
    mask: "+62 00 0000 0000"
}, {
    name: "Iran, Islamic Republic Of",
    iso2: "IR",
    cc: "+98",
    mask: "+98 00 0000 0000"
}, {
    name: "Iraq",
    iso2: "IQ",
    cc: "+964",
    mask: "+964 00 000 0000"
}, {
    name: "Ireland",
    iso2: "IE",
    cc: "+353",
    mask: "+353 00 000 0000"
}, {
    name: "Isle Of Man",
    iso2: "IM",
    cc: "+44",
    mask: "+44 1624 000000"
}, {
    name: "Israel",
    iso2: "IL",
    cc: "+972",
    mask: "+972 0 000 0000"
}, {
    name: "Italy",
    iso2: "IT",
    cc: "+39",
    mask: "+39 00 0000 0000"
}, {
    name: "Jamaica",
    iso2: "JM",
    cc: "+1",
    mask: "+1 (876) 000-0000"
}, {
    name: "Japan",
    iso2: "JP",
    cc: "+81",
    mask: "+81 00-0000-0000"
}, {
    name: "Jersey",
    iso2: "JE",
    cc: "+44",
    mask: "+44 1534 000000"
}, {
    name: "Jordan",
    iso2: "JO",
    cc: "+962",
    mask: "+962 0 0000 0000"
}, {
    name: "Kazakhstan",
    iso2: "KZ",
    cc: "+7",
    mask: "+7 700 000 0000"
}, {
    name: "Kenya",
    iso2: "KE",
    cc: "+254",
    mask: "+254 00 0000000"
}, {
    name: "Kiribati",
    iso2: "KI",
    cc: "+686",
    mask: "+686 00 000"
}, {
    name: "Korea",
    iso2: "KR",
    cc: "+82",
    mask: "+82 00-0000-0000"
}, {
    name: "Kuwait",
    iso2: "KW",
    cc: "+965",
    mask: "+965 0000 0000"
}, {
    name: "Kyrgyzstan",
    iso2: "KG",
    cc: "+996",
    mask: "+996 00 000 0000"
}, {
    name: "Lao People's Democratic Republic",
    iso2: "LA",
    cc: "+856",
    mask: "+856 00 000 000"
}, {
    name: "Latvia",
    iso2: "LV",
    cc: "+371",
    mask: "+371 0000 0000"
}, {
    name: "Lebanon",
    iso2: "LB",
    cc: "+961",
    mask: "+961 0 000 000"
}, {
    name: "Lesotho",
    iso2: "LS",
    cc: "+266",
    mask: "+266 0 000 0000"
}, {
    name: "Liberia",
    iso2: "LR",
    cc: "+231",
    mask: "+231 00 000 000"
}, {
    name: "Libyan Arab Jamahiriya",
    iso2: "LY",
    cc: "+218",
    mask: "+218 00 000 0000"
}, {
    name: "Liechtenstein",
    iso2: "LI",
    cc: "+423",
    mask: "+423 000 0000"
}, {
    name: "Lithuania",
    iso2: "LT",
    cc: "+370",
    mask: "+370 000 00000"
}, {
    name: "Luxembourg",
    iso2: "LU",
    cc: "+352",
    mask: "+352 000 000 000"
}, {
    name: "Macao",
    iso2: "MO",
    cc: "+853",
    mask: "+853 0000 0000"
}, {
    name: "Macedonia",
    iso2: "MK",
    cc: "+389",
    mask: "+389 00 000 000"
}, {
    name: "Madagascar",
    iso2: "MG",
    cc: "+261",
    mask: "+261 00 00 00000"
}, {
    name: "Malawi",
    iso2: "MW",
    cc: "+265",
    mask: "+265 0 000 0000"
}, {
    name: "Malaysia",
    iso2: "MY",
    cc: "+60",
    mask: "+60 00-000 0000"
}, {
    name: "Maldives",
    iso2: "MV",
    cc: "+960",
    mask: "+960 000-0000"
}, {
    name: "Mali",
    iso2: "ML",
    cc: "+223",
    mask: "+223 00 00 0000"
}, {
    name: "Malta",
    iso2: "MT",
    cc: "+356",
    mask: "+356 0000 0000"
}, {
    name: "Marshall Islands",
    iso2: "MH",
    cc: "+692",
    mask: "+692 000-0000"
}, {
    name: "Martinique",
    iso2: "MQ",
    cc: "+596",
    mask: "+596 000 00 00"
}, {
    name: "Mauritania",
    iso2: "MR",
    cc: "+222",
    mask: "+222 00 00 0000"
}, {
    name: "Mauritius",
    iso2: "MU",
    cc: "+230",
    mask: "+230 000 0000"
}, {
    name: "Mayotte",
    iso2: "YT",
    cc: "+262",
    mask: "+262 00000 0000"
}, {
    name: "Mexico",
    iso2: "MX",
    cc: "+52",
    mask: "+52 00 0000 0000"
}, {
    name: "Micronesia, Federated States Of",
    iso2: "FM",
    cc: "+691",
    mask: "+691 000 0000"
}, {
    name: "Moldova",
    iso2: "MD",
    cc: "+373",
    mask: "+373 0000 0000"
}, {
    name: "Monaco",
    iso2: "MC",
    cc: "+377",
    mask: "+377 00 00 00 00"
}, {
    name: "Mongolia",
    iso2: "MN",
    cc: "+976",
    mask: "+976 00 00 0000"
}, {
    name: "Montenegro",
    iso2: "ME",
    cc: "+382",
    mask: "+382 00 000 000"
}, {
    name: "Montserrat",
    iso2: "MS",
    cc: "+1",
    mask: "+1 (664) 000-0000"
}, {
    name: "Morocco",
    iso2: "MA",
    cc: "+212",
    mask: "+212 00 0000 0000"
}, {
    name: "Mozambique",
    iso2: "MZ",
    cc: "+258",
    mask: "+258 00 000 000"
}, {
    name: "Myanmar",
    iso2: "MM",
    cc: "+95",
    mask: "+95 00 000 000"
}, {
    name: "Namibia",
    iso2: "NA",
    cc: "+264",
    mask: "+264 00 000 0000"
}, {
    name: "Nauru",
    iso2: "NR",
    cc: "+674",
    mask: "+674 000 0000"
}, {
    name: "Nepal",
    iso2: "NP",
    cc: "+977",
    mask: "+977 00 000 0000"
}, {
    name: "Netherlands",
    iso2: "NL",
    cc: "+31",
    mask: "+31 00 000 0000"
}, {
    name: "New Caledonia",
    iso2: "NC",
    cc: "+687",
    mask: "+687 00 0000"
}, {
    name: "New Zealand",
    iso2: "NZ",
    cc: "+64",
    mask: "+64 0 000 0000"
}, {
    name: "Nicaragua",
    iso2: "NI",
    cc: "+505",
    mask: "+505 0000 0000"
}, {
    name: "Niger",
    iso2: "NE",
    cc: "+227",
    mask: "+227 00 00 0000"
}, {
    name: "Nigeria",
    iso2: "NG",
    cc: "+234",
    mask: "+234 00 000 0000"
}, {
    name: "Niue",
    iso2: "NU",
    cc: "+683",
    mask: "+683 0000"
}, {
    name: "Norfolk Island",
    iso2: "NF",
    cc: "+672",
    mask: "+672 00 000"
}, {
    name: "Northern Mariana Islands",
    iso2: "MP",
    cc: "+1",
    mask: "+1 (670) 000-0000"
}, {
    name: "Norway",
    iso2: "NO",
    cc: "+47",
    mask: "+47 00 00 00 00"
}, {
    name: "Oman",
    iso2: "OM",
    cc: "+968",
    mask: "+968 0000 0000"
}, {
    name: "Pakistan",
    iso2: "PK",
    cc: "+92",
    mask: "+92 00 000 0000"
}, {
    name: "Palau",
    iso2: "PW",
    cc: "+680",
    mask: "+680 000 0000"
}, {
    name: "Palestinian Territory, Occupied",
    iso2: "PS",
    cc: "+970",
    mask: "+970 00 000 0000"
}, {
    name: "Panama",
    iso2: "PA",
    cc: "+507",
    mask: "+507 000 0000"
}, {
    name: "Papua New Guinea",
    iso2: "PG",
    cc: "+675",
    mask: "+675 00 000 000"
}, {
    name: "Paraguay",
    iso2: "PY",
    cc: "+595",
    mask: "+595 00 000 0000"
}, {
    name: "Peru",
    iso2: "PE",
    cc: "+51",
    mask: "+51 00 000 000"
}, {
    name: "Philippines",
    iso2: "PH",
    cc: "+63",
    mask: "+63 00 000 0000"
}, {
    name: "Pitcairn",
    iso2: "PN",
    cc: "+64",
    mask: "+64 00 000 0000"
}, {
    name: "Poland",
    iso2: "PL",
    cc: "+48",
    mask: "+48 00 000 0000"
}, {
    name: "Portugal",
    iso2: "PT",
    cc: "+351",
    mask: "+351 00 000 0000"
}, {
    name: "Puerto Rico",
    iso2: "PR",
    cc: "+1",
    mask: "+1 (000) 000-0000"
}, {
    name: "Qatar",
    iso2: "QA",
    cc: "+974",
    mask: "+974 0000 0000"
}, {
    name: "Reunion",
    iso2: "RE",
    cc: "+262",
    mask: "+262 00000 0000"
}, {
    name: "Romania",
    iso2: "RO",
    cc: "+40",
    mask: "+40 00 000 0000"
}, {
    name: "Russian Federation",
    iso2: "RU",
    cc: "+7",
    mask: "+7 (000) 000-00-00"
}, {
    name: "Rwanda",
    iso2: "RW",
    cc: "+250",
    mask: "+250 00 000 000"
}, {
    name: "Saint Barthelemy",
    iso2: "BL",
    cc: "+590",
    mask: "+590 000 0000"
}, {
    name: "Saint Helena",
    iso2: "SH",
    cc: "+290",
    mask: "+290 0000"
}, {
    name: "Saint Kitts And Nevis",
    iso2: "KN",
    cc: "+1",
    mask: "+1 (869) 000-0000"
}, {
    name: "Saint Lucia",
    iso2: "LC",
    cc: "+1",
    mask: "+1 (758) 000-0000"
}, {
    name: "Saint Martin",
    iso2: "MF",
    cc: "+590",
    mask: "+590 000 0000"
}, {
    name: "Saint Pierre And Miquelon",
    iso2: "PM",
    cc: "+508",
    mask: "+508 00 00 00"
}, {
    name: "Saint Vincent And Grenadines",
    iso2: "VC",
    cc: "+1",
    mask: "+1 (784) 000-0000"
}, {
    name: "Samoa",
    iso2: "WS",
    cc: "+685",
    mask: "+685 00 0000"
}, {
    name: "San Marino",
    iso2: "SM",
    cc: "+378",
    mask: "+378 0000 000000"
}, {
    name: "Sao Tome And Principe",
    iso2: "ST",
    cc: "+239",
    mask: "+239 00 00 00"
}, {
    name: "Saudi Arabia",
    iso2: "SA",
    cc: "+966",
    mask: "+966 0 0000 0000"
}, {
    name: "Senegal",
    iso2: "SN",
    cc: "+221",
    mask: "+221 00 000 0000"
}, {
    name: "Serbia",
    iso2: "RS",
    cc: "+381",
    mask: "+381 00 0000 000"
}, {
    name: "Seychelles",
    iso2: "SC",
    cc: "+248",
    mask: "+248 0 000 000"
}, {
    name: "Sierra Leone",
    iso2: "SL",
    cc: "+232",
    mask: "+232 00 000000"
}, {
    name: "Singapore",
    iso2: "SG",
    cc: "+65",
    mask: "+65 0000 0000"
}, {
    name: "Slovakia",
    iso2: "SK",
    cc: "+421",
    mask: "+421 [00]0 000 0000"
}, {
    name: "Slovenia",
    iso2: "SI",
    cc: "+386",
    mask: "+386 0 000 00 00"
}, {
    name: "Solomon Islands",
    iso2: "SB",
    cc: "+677",
    mask: "+677 00000"
}, {
    name: "Somalia",
    iso2: "SO",
    cc: "+252",
    mask: "+252 0 000 000"
}, {
    name: "South Africa",
    iso2: "ZA",
    cc: "+27",
    mask: "+27 00 000 0000"
}, {
    name: "South Georgia And Sandwich Isl.",
    iso2: "GS",
    cc: "+500",
    mask: "+500 00000"
}, {
    name: "Spain",
    iso2: "ES",
    cc: "+34",
    mask: "+34 000 000 000"
}, {
    name: "Sri Lanka",
    iso2: "LK",
    cc: "+94",
    mask: "+94 00 000 0000"
}, {
    name: "Sudan",
    iso2: "SD",
    cc: "+249",
    mask: "+249 00 000 0000"
}, {
    name: "Suriname",
    iso2: "SR",
    cc: "+597",
    mask: "+597 000 000"
}, {
    name: "Svalbard And Jan Mayen",
    iso2: "SJ",
    cc: "+47",
    mask: "+47 000 00 000"
}, {
    name: "Swaziland",
    iso2: "SZ",
    cc: "+268",
    mask: "+268 00 00 0000"
}, {
    name: "Sweden",
    iso2: "SE",
    cc: "+46",
    mask: "+46 00 000 0000"
}, {
    name: "Switzerland",
    iso2: "CH",
    cc: "+41",
    mask: "+41 00 000 0000"
}, {
    name: "Syrian Arab Republic",
    iso2: "SY",
    cc: "+963",
    mask: "+963 00 0000 000"
}, {
    name: "Taiwan",
    iso2: "TW",
    cc: "+886",
    mask: "+886 0 0000 0000"
}, {
    name: "Tajikistan",
    iso2: "TJ",
    cc: "+992",
    mask: "+992 00 000 0000"
}, {
    name: "Tanzania",
    iso2: "TZ",
    cc: "+255",
    mask: "+255 00 000 0000"
}, {
    name: "Thailand",
    iso2: "TH",
    cc: "+66",
    mask: "+66 0 0000 0000"
}, {
    name: "Timor-Leste",
    iso2: "TL",
    cc: "+670",
    mask: "+670 000 0000"
}, {
    name: "Togo",
    iso2: "TG",
    cc: "+228",
    mask: "+228 00 000 000"
}, {
    name: "Tokelau",
    iso2: "TK",
    cc: "+690",
    mask: "+690 0000"
}, {
    name: "Tonga",
    iso2: "TO",
    cc: "+676",
    mask: "+676 00 000"
}, {
    name: "Trinidad And Tobago",
    iso2: "TT",
    cc: "+1",
    mask: "+1 (868) 000-0000"
}, {
    name: "Tunisia",
    iso2: "TN",
    cc: "+216",
    mask: "+216 00 000 000"
}, {
    name: "Turkey",
    iso2: "TR",
    cc: "+90",
    mask: "+90 (000) 000 0000"
}, {
    name: "Turkmenistan",
    iso2: "TM",
    cc: "+993",
    mask: "+993 0 000 000"
}, {
    name: "Turks And Caicos Islands",
    iso2: "TC",
    cc: "+1",
    mask: "+1 (649) 000-0000"
}, {
    name: "Tuvalu",
    iso2: "TV",
    cc: "+688",
    mask: "+688 00 000"
}, {
    name: "Uganda",
    iso2: "UG",
    cc: "+256",
    mask: "+256 [0]00 000 000"
}, {
    name: "Ukraine",
    iso2: "UA",
    cc: "+380",
    mask: "+380 00 000 0000"
}, {
    name: "United Arab Emirates",
    iso2: "AE",
    cc: "+971",
    mask: "+971 0 000 0000"
}, {
    name: "United Kingdom",
    iso2: "GB",
    cc: "+44",
    mask: "+44 00 0000 0000"
}, {
    name: "United States Outlying Islands",
    iso2: "UM",
    cc: "+581",
    mask: "+581 00 0000 0000"
}, {
    name: "Uruguay",
    iso2: "UY",
    cc: "+598",
    mask: "+598 0 000 00 00"
}, {
    name: "Uzbekistan",
    iso2: "UZ",
    cc: "+998",
    mask: "+998 00 000 0000"
}, {
    name: "Vanuatu",
    iso2: "VU",
    cc: "+678",
    mask: "+678 00 0000"
}, {
    name: "Venezuela",
    iso2: "VE",
    cc: "+58",
    mask: "+58 000-0000000"
}, {
    name: "Viet Nam",
    iso2: "VN",
    cc: "+84",
    mask: "+84 00 0000 000"
}, {
    name: "Virgin Islands, British",
    iso2: "VG",
    cc: "+1",
    mask: "+1 (284) 000-0000"
}, {
    name: "Virgin Islands, U.S.",
    iso2: "VI",
    cc: "+1",
    mask: "+1 (340) 000-0000"
}, {
    name: "Wallis And Futuna",
    iso2: "WF",
    cc: "+681",
    mask: "+681 00 0000"
}, {
    name: "Western Sahara",
    iso2: "EH",
    cc: "+212",
    mask: "+212 5288-00000"
}, {
    name: "Yemen",
    iso2: "YE",
    cc: "+967",
    mask: "+967 0 000 000"
}, {
    name: "Zambia",
    iso2: "ZM",
    cc: "+260",
    mask: "+260 00 000 0000"
}, {
    name: "Zimbabwe",
    iso2: "ZW",
    cc: "+263",
    mask: "+263 0 000000"
}];

function Jt(e, [t, n]) {
    return Math.min(n, Math.max(t, e))
}

function fr(e) {
    const t = e + "CollectionProvider",
        [n, o] = Nt(t),
        [r, a] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = i => {
            const {
                scope: L,
                children: C
            } = i, w = P.useRef(null), b = P.useRef(new Map).current;
            return c.jsx(r, {
                scope: L,
                itemMap: b,
                collectionRef: w,
                children: C
            })
        };
    s.displayName = t;
    const u = e + "CollectionSlot",
        l = vt(u),
        d = P.forwardRef((i, L) => {
            const {
                scope: C,
                children: w
            } = i, b = a(u, C), R = ee(L, b.collectionRef);
            return c.jsx(l, {
                ref: R,
                children: w
            })
        });
    d.displayName = u;
    const m = e + "CollectionItemSlot",
        p = "data-radix-collection-item",
        v = vt(m),
        g = P.forwardRef((i, L) => {
            const {
                scope: C,
                children: w,
                ...b
            } = i, R = P.useRef(null), k = ee(L, R), T = a(m, C);
            return P.useEffect(() => (T.itemMap.set(R, {
                ref: R,
                ...b
            }), () => void T.itemMap.delete(R))), c.jsx(v, {
                [p]: "",
                ref: k,
                children: w
            })
        });
    g.displayName = m;

    function x(i) {
        const L = a(e + "CollectionConsumer", i);
        return P.useCallback(() => {
            const w = L.collectionRef.current;
            if (!w) return [];
            const b = Array.from(w.querySelectorAll(`[${p}]`));
            return Array.from(L.itemMap.values()).sort((T, A) => b.indexOf(T.ref.current) - b.indexOf(A.ref.current))
        }, [L.collectionRef, L.itemMap])
    }
    return [{
        Provider: s,
        Slot: d,
        ItemSlot: g
    }, x, o]
}
var pr = f.createContext(void 0);

function hr(e) {
    const t = f.useContext(pr);
    return e || t || "ltr"
}
const gr = ["top", "right", "bottom", "left"],
    xe = Math.min,
    ne = Math.max,
    Qe = Math.round,
    Ye = Math.floor,
    le = e => ({
        x: e,
        y: e
    }),
    vr = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    xr = {
        start: "end",
        end: "start"
    };

function Lt(e, t, n) {
    return ne(e, xe(t, n))
}

function fe(e, t) {
    return typeof e == "function" ? e(t) : e
}

function pe(e) {
    return e.split("-")[0]
}

function Pe(e) {
    return e.split("-")[1]
}

function Mt(e) {
    return e === "x" ? "y" : "x"
}

function Pt(e) {
    return e === "y" ? "height" : "width"
}

function ye(e) {
    return ["top", "bottom"].includes(pe(e)) ? "y" : "x"
}

function Ot(e) {
    return Mt(ye(e))
}

function yr(e, t, n) {
    n === void 0 && (n = !1);
    const o = Pe(e),
        r = Ot(e),
        a = Pt(r);
    let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (s = et(s)), [s, et(s)]
}

function Lr(e) {
    const t = et(e);
    return [wt(e), t, wt(t)]
}

function wt(e) {
    return e.replace(/start|end/g, t => xr[t])
}

function wr(e, t, n) {
    const o = ["left", "right"],
        r = ["right", "left"],
        a = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? r : o : t ? o : r;
        case "left":
        case "right":
            return t ? a : s;
        default:
            return []
    }
}

function Cr(e, t, n, o) {
    const r = Pe(e);
    let a = wr(pe(e), n === "start", o);
    return r && (a = a.map(s => s + "-" + r), t && (a = a.concat(a.map(wt)))), a
}

function et(e) {
    return e.replace(/left|right|bottom|top/g, t => vr[t])
}

function Sr(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function wn(e) {
    return typeof e != "number" ? Sr(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function tt(e) {
    const {
        x: t,
        y: n,
        width: o,
        height: r
    } = e;
    return {
        width: o,
        height: r,
        top: n,
        left: t,
        right: t + o,
        bottom: n + r,
        x: t,
        y: n
    }
}

function Qt(e, t, n) {
    let {
        reference: o,
        floating: r
    } = e;
    const a = ye(t),
        s = Ot(t),
        u = Pt(s),
        l = pe(t),
        d = a === "y",
        m = o.x + o.width / 2 - r.width / 2,
        p = o.y + o.height / 2 - r.height / 2,
        v = o[u] / 2 - r[u] / 2;
    let g;
    switch (l) {
        case "top":
            g = {
                x: m,
                y: o.y - r.height
            };
            break;
        case "bottom":
            g = {
                x: m,
                y: o.y + o.height
            };
            break;
        case "right":
            g = {
                x: o.x + o.width,
                y: p
            };
            break;
        case "left":
            g = {
                x: o.x - r.width,
                y: p
            };
            break;
        default:
            g = {
                x: o.x,
                y: o.y
            }
    }
    switch (Pe(t)) {
        case "start":
            g[s] -= v * (n && d ? -1 : 1);
            break;
        case "end":
            g[s] += v * (n && d ? -1 : 1);
            break
    }
    return g
}
const br = async (e, t, n) => {
    const {
        placement: o = "bottom",
        strategy: r = "absolute",
        middleware: a = [],
        platform: s
    } = n, u = a.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let d = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }),
        {
            x: m,
            y: p
        } = Qt(d, o, l),
        v = o,
        g = {},
        x = 0;
    for (let i = 0; i < u.length; i++) {
        const {
            name: L,
            fn: C
        } = u[i], {
            x: w,
            y: b,
            data: R,
            reset: k
        } = await C({
            x: m,
            y: p,
            initialPlacement: o,
            placement: v,
            strategy: r,
            middlewareData: g,
            rects: d,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        m = w ?? m, p = b ?? p, g = {
            ...g,
            [L]: {
                ...g[L],
                ...R
            }
        }, k && x <= 50 && (x++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (d = k.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }) : k.rects), {
            x: m,
            y: p
        } = Qt(d, v, l)), i = -1)
    }
    return {
        x: m,
        y: p,
        placement: v,
        strategy: r,
        middlewareData: g
    }
};
async function We(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: o,
        y: r,
        platform: a,
        rects: s,
        elements: u,
        strategy: l
    } = e, {
        boundary: d = "clippingAncestors",
        rootBoundary: m = "viewport",
        elementContext: p = "floating",
        altBoundary: v = !1,
        padding: g = 0
    } = fe(t, e), x = wn(g), L = u[v ? p === "floating" ? "reference" : "floating" : p], C = tt(await a.getClippingRect({
        element: (n = await (a.isElement == null ? void 0 : a.isElement(L))) == null || n ? L : L.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
        boundary: d,
        rootBoundary: m,
        strategy: l
    })), w = p === "floating" ? {
        x: o,
        y: r,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)), R = await (a.isElement == null ? void 0 : a.isElement(b)) ? await (a.getScale == null ? void 0 : a.getScale(b)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, k = tt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: u,
        rect: w,
        offsetParent: b,
        strategy: l
    }) : w);
    return {
        top: (C.top - k.top + x.top) / R.y,
        bottom: (k.bottom - C.bottom + x.bottom) / R.y,
        left: (C.left - k.left + x.left) / R.x,
        right: (k.right - C.right + x.right) / R.x
    }
}
const Er = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: o,
                placement: r,
                rects: a,
                platform: s,
                elements: u,
                middlewareData: l
            } = t, {
                element: d,
                padding: m = 0
            } = fe(e, t) || {};
            if (d == null) return {};
            const p = wn(m),
                v = {
                    x: n,
                    y: o
                },
                g = Ot(r),
                x = Pt(g),
                i = await s.getDimensions(d),
                L = g === "y",
                C = L ? "top" : "left",
                w = L ? "bottom" : "right",
                b = L ? "clientHeight" : "clientWidth",
                R = a.reference[x] + a.reference[g] - v[g] - a.floating[x],
                k = v[g] - a.reference[g],
                T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
            let A = T ? T[b] : 0;
            (!A || !await (s.isElement == null ? void 0 : s.isElement(T))) && (A = u.floating[b] || a.floating[x]);
            const O = R / 2 - k / 2,
                B = A / 2 - i[x] / 2 - 1,
                j = xe(p[C], B),
                H = xe(p[w], B),
                M = j,
                D = A - i[x] - H,
                N = A / 2 - i[x] / 2 + O,
                h = Lt(M, N, D),
                y = !l.arrow && Pe(r) != null && N !== h && a.reference[x] / 2 - (N < M ? j : H) - i[x] / 2 < 0,
                S = y ? N < M ? N - M : N - D : 0;
            return {
                [g]: v[g] + S,
                data: {
                    [g]: h,
                    centerOffset: N - h - S,
                    ...y && {
                        alignmentOffset: S
                    }
                },
                reset: y
            }
        }
    }),
    Rr = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, o;
                const {
                    placement: r,
                    middlewareData: a,
                    rects: s,
                    initialPlacement: u,
                    platform: l,
                    elements: d
                } = t, {
                    mainAxis: m = !0,
                    crossAxis: p = !0,
                    fallbackPlacements: v,
                    fallbackStrategy: g = "bestFit",
                    fallbackAxisSideDirection: x = "none",
                    flipAlignment: i = !0,
                    ...L
                } = fe(e, t);
                if ((n = a.arrow) != null && n.alignmentOffset) return {};
                const C = pe(r),
                    w = ye(u),
                    b = pe(u) === u,
                    R = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)),
                    k = v || (b || !i ? [et(u)] : Lr(u)),
                    T = x !== "none";
                !v && T && k.push(...Cr(u, i, x, R));
                const A = [u, ...k],
                    O = await We(t, L),
                    B = [];
                let j = ((o = a.flip) == null ? void 0 : o.overflows) || [];
                if (m && B.push(O[C]), p) {
                    const N = yr(r, s, R);
                    B.push(O[N[0]], O[N[1]])
                }
                if (j = [...j, {
                        placement: r,
                        overflows: B
                    }], !B.every(N => N <= 0)) {
                    var H, M;
                    const N = (((H = a.flip) == null ? void 0 : H.index) || 0) + 1,
                        h = A[N];
                    if (h) return {
                        data: {
                            index: N,
                            overflows: j
                        },
                        reset: {
                            placement: h
                        }
                    };
                    let y = (M = j.filter(S => S.overflows[0] <= 0).sort((S, E) => S.overflows[1] - E.overflows[1])[0]) == null ? void 0 : M.placement;
                    if (!y) switch (g) {
                        case "bestFit": {
                            var D;
                            const S = (D = j.filter(E => {
                                if (T) {
                                    const _ = ye(E.placement);
                                    return _ === w || _ === "y"
                                }
                                return !0
                            }).map(E => [E.placement, E.overflows.filter(_ => _ > 0).reduce((_, Y) => _ + Y, 0)]).sort((E, _) => E[1] - _[1])[0]) == null ? void 0 : D[0];
                            S && (y = S);
                            break
                        }
                        case "initialPlacement":
                            y = u;
                            break
                    }
                    if (r !== y) return {
                        reset: {
                            placement: y
                        }
                    }
                }
                return {}
            }
        }
    };

function en(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function tn(e) {
    return gr.some(t => e[t] >= 0)
}
const kr = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: o = "referenceHidden",
                ...r
            } = fe(e, t);
            switch (o) {
                case "referenceHidden": {
                    const a = await We(t, {
                            ...r,
                            elementContext: "reference"
                        }),
                        s = en(a, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: tn(s)
                        }
                    }
                }
                case "escaped": {
                    const a = await We(t, {
                            ...r,
                            altBoundary: !0
                        }),
                        s = en(a, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: tn(s)
                        }
                    }
                }
                default:
                    return {}
            }
        }
    }
};
async function Ar(e, t) {
    const {
        placement: n,
        platform: o,
        elements: r
    } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = pe(n), u = Pe(n), l = ye(n) === "y", d = ["left", "top"].includes(s) ? -1 : 1, m = a && l ? -1 : 1, p = fe(t, e);
    let {
        mainAxis: v,
        crossAxis: g,
        alignmentAxis: x
    } = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return u && typeof x == "number" && (g = u === "end" ? x * -1 : x), l ? {
        x: g * m,
        y: v * d
    } : {
        x: v * d,
        y: g * m
    }
}
const Ir = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, o;
                const {
                    x: r,
                    y: a,
                    placement: s,
                    middlewareData: u
                } = t, l = await Ar(t, e);
                return s === ((n = u.offset) == null ? void 0 : n.placement) && (o = u.arrow) != null && o.alignmentOffset ? {} : {
                    x: r + l.x,
                    y: a + l.y,
                    data: {
                        ...l,
                        placement: s
                    }
                }
            }
        }
    },
    Tr = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: o,
                    placement: r
                } = t, {
                    mainAxis: a = !0,
                    crossAxis: s = !1,
                    limiter: u = {
                        fn: L => {
                            let {
                                x: C,
                                y: w
                            } = L;
                            return {
                                x: C,
                                y: w
                            }
                        }
                    },
                    ...l
                } = fe(e, t), d = {
                    x: n,
                    y: o
                }, m = await We(t, l), p = ye(pe(r)), v = Mt(p);
                let g = d[v],
                    x = d[p];
                if (a) {
                    const L = v === "y" ? "top" : "left",
                        C = v === "y" ? "bottom" : "right",
                        w = g + m[L],
                        b = g - m[C];
                    g = Lt(w, g, b)
                }
                if (s) {
                    const L = p === "y" ? "top" : "left",
                        C = p === "y" ? "bottom" : "right",
                        w = x + m[L],
                        b = x - m[C];
                    x = Lt(w, x, b)
                }
                const i = u.fn({
                    ...t,
                    [v]: g,
                    [p]: x
                });
                return {
                    ...i,
                    data: {
                        x: i.x - n,
                        y: i.y - o,
                        enabled: {
                            [v]: a,
                            [p]: s
                        }
                    }
                }
            }
        }
    },
    Nr = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: o,
                    placement: r,
                    rects: a,
                    middlewareData: s
                } = t, {
                    offset: u = 0,
                    mainAxis: l = !0,
                    crossAxis: d = !0
                } = fe(e, t), m = {
                    x: n,
                    y: o
                }, p = ye(r), v = Mt(p);
                let g = m[v],
                    x = m[p];
                const i = fe(u, t),
                    L = typeof i == "number" ? {
                        mainAxis: i,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...i
                    };
                if (l) {
                    const b = v === "y" ? "height" : "width",
                        R = a.reference[v] - a.floating[b] + L.mainAxis,
                        k = a.reference[v] + a.reference[b] - L.mainAxis;
                    g < R ? g = R : g > k && (g = k)
                }
                if (d) {
                    var C, w;
                    const b = v === "y" ? "width" : "height",
                        R = ["top", "left"].includes(pe(r)),
                        k = a.reference[p] - a.floating[b] + (R && ((C = s.offset) == null ? void 0 : C[p]) || 0) + (R ? 0 : L.crossAxis),
                        T = a.reference[p] + a.reference[b] + (R ? 0 : ((w = s.offset) == null ? void 0 : w[p]) || 0) - (R ? L.crossAxis : 0);
                    x < k ? x = k : x > T && (x = T)
                }
                return {
                    [v]: g,
                    [p]: x
                }
            }
        }
    },
    _r = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, o;
                const {
                    placement: r,
                    rects: a,
                    platform: s,
                    elements: u
                } = t, {
                    apply: l = () => {},
                    ...d
                } = fe(e, t), m = await We(t, d), p = pe(r), v = Pe(r), g = ye(r) === "y", {
                    width: x,
                    height: i
                } = a.floating;
                let L, C;
                p === "top" || p === "bottom" ? (L = p, C = v === (await (s.isRTL == null ? void 0 : s.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (C = p, L = v === "end" ? "top" : "bottom");
                const w = i - m.top - m.bottom,
                    b = x - m.left - m.right,
                    R = xe(i - m[L], w),
                    k = xe(x - m[C], b),
                    T = !t.middlewareData.shift;
                let A = R,
                    O = k;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = b), (o = t.middlewareData.shift) != null && o.enabled.y && (A = w), T && !v) {
                    const j = ne(m.left, 0),
                        H = ne(m.right, 0),
                        M = ne(m.top, 0),
                        D = ne(m.bottom, 0);
                    g ? O = x - 2 * (j !== 0 || H !== 0 ? j + H : ne(m.left, m.right)) : A = i - 2 * (M !== 0 || D !== 0 ? M + D : ne(m.top, m.bottom))
                }
                await l({
                    ...t,
                    availableWidth: O,
                    availableHeight: A
                });
                const B = await s.getDimensions(u.floating);
                return x !== B.width || i !== B.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function st() {
    return typeof window < "u"
}

function Oe(e) {
    return Cn(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function oe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function de(e) {
    var t;
    return (t = (Cn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Cn(e) {
    return st() ? e instanceof Node || e instanceof oe(e).Node : !1
}

function ie(e) {
    return st() ? e instanceof Element || e instanceof oe(e).Element : !1
}

function ue(e) {
    return st() ? e instanceof HTMLElement || e instanceof oe(e).HTMLElement : !1
}

function nn(e) {
    return !st() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof oe(e).ShadowRoot
}

function Ge(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: o,
        display: r
    } = ce(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r)
}

function Mr(e) {
    return ["table", "td", "th"].includes(Oe(e))
}

function at(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function jt(e) {
    const t = Ht(),
        n = ie(e) ? ce(e) : e;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(o => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(o => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some(o => (n.contain || "").includes(o))
}

function Pr(e) {
    let t = Le(e);
    for (; ue(t) && !Me(t);) {
        if (jt(t)) return t;
        if (at(t)) return null;
        t = Le(t)
    }
    return null
}

function Ht() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Me(e) {
    return ["html", "body", "#document"].includes(Oe(e))
}

function ce(e) {
    return oe(e).getComputedStyle(e)
}

function it(e) {
    return ie(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Le(e) {
    if (Oe(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || nn(e) && e.host || de(e);
    return nn(t) ? t.host : t
}

function Sn(e) {
    const t = Le(e);
    return Me(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && Ge(t) ? t : Sn(t)
}

function Ze(e, t, n) {
    var o;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const r = Sn(e),
        a = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
        s = oe(r);
    if (a) {
        const u = Ct(s);
        return t.concat(s, s.visualViewport || [], Ge(r) ? r : [], u && n ? Ze(u) : [])
    }
    return t.concat(r, Ze(r, [], n))
}

function Ct(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function bn(e) {
    const t = ce(e);
    let n = parseFloat(t.width) || 0,
        o = parseFloat(t.height) || 0;
    const r = ue(e),
        a = r ? e.offsetWidth : n,
        s = r ? e.offsetHeight : o,
        u = Qe(n) !== a || Qe(o) !== s;
    return u && (n = a, o = s), {
        width: n,
        height: o,
        $: u
    }
}

function Dt(e) {
    return ie(e) ? e : e.contextElement
}

function Ne(e) {
    const t = Dt(e);
    if (!ue(t)) return le(1);
    const n = t.getBoundingClientRect(),
        {
            width: o,
            height: r,
            $: a
        } = bn(t);
    let s = (a ? Qe(n.width) : n.width) / o,
        u = (a ? Qe(n.height) : n.height) / r;
    return (!s || !Number.isFinite(s)) && (s = 1), (!u || !Number.isFinite(u)) && (u = 1), {
        x: s,
        y: u
    }
}
const Or = le(0);

function En(e) {
    const t = oe(e);
    return !Ht() || !t.visualViewport ? Or : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function jr(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== oe(e) ? !1 : t
}

function Re(e, t, n, o) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        a = Dt(e);
    let s = le(1);
    t && (o ? ie(o) && (s = Ne(o)) : s = Ne(e));
    const u = jr(a, n, o) ? En(a) : le(0);
    let l = (r.left + u.x) / s.x,
        d = (r.top + u.y) / s.y,
        m = r.width / s.x,
        p = r.height / s.y;
    if (a) {
        const v = oe(a),
            g = o && ie(o) ? oe(o) : o;
        let x = v,
            i = Ct(x);
        for (; i && o && g !== x;) {
            const L = Ne(i),
                C = i.getBoundingClientRect(),
                w = ce(i),
                b = C.left + (i.clientLeft + parseFloat(w.paddingLeft)) * L.x,
                R = C.top + (i.clientTop + parseFloat(w.paddingTop)) * L.y;
            l *= L.x, d *= L.y, m *= L.x, p *= L.y, l += b, d += R, x = oe(i), i = Ct(x)
        }
    }
    return tt({
        width: m,
        height: p,
        x: l,
        y: d
    })
}

function Vt(e, t) {
    const n = it(e).scrollLeft;
    return t ? t.left + n : Re(de(e)).left + n
}

function Rn(e, t, n) {
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        r = o.left + t.scrollLeft - (n ? 0 : Vt(e, o)),
        a = o.top + t.scrollTop;
    return {
        x: r,
        y: a
    }
}

function Hr(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: o,
        strategy: r
    } = e;
    const a = r === "fixed",
        s = de(o),
        u = t ? at(t.floating) : !1;
    if (o === s || u && a) return n;
    let l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        d = le(1);
    const m = le(0),
        p = ue(o);
    if ((p || !p && !a) && ((Oe(o) !== "body" || Ge(s)) && (l = it(o)), ue(o))) {
        const g = Re(o);
        d = Ne(o), m.x = g.x + o.clientLeft, m.y = g.y + o.clientTop
    }
    const v = s && !p && !a ? Rn(s, l, !0) : le(0);
    return {
        width: n.width * d.x,
        height: n.height * d.y,
        x: n.x * d.x - l.scrollLeft * d.x + m.x + v.x,
        y: n.y * d.y - l.scrollTop * d.y + m.y + v.y
    }
}

function Dr(e) {
    return Array.from(e.getClientRects())
}

function Vr(e) {
    const t = de(e),
        n = it(e),
        o = e.ownerDocument.body,
        r = ne(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
        a = ne(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
    let s = -n.scrollLeft + Vt(e);
    const u = -n.scrollTop;
    return ce(o).direction === "rtl" && (s += ne(t.clientWidth, o.clientWidth) - r), {
        width: r,
        height: a,
        x: s,
        y: u
    }
}

function Br(e, t) {
    const n = oe(e),
        o = de(e),
        r = n.visualViewport;
    let a = o.clientWidth,
        s = o.clientHeight,
        u = 0,
        l = 0;
    if (r) {
        a = r.width, s = r.height;
        const d = Ht();
        (!d || d && t === "fixed") && (u = r.offsetLeft, l = r.offsetTop)
    }
    return {
        width: a,
        height: s,
        x: u,
        y: l
    }
}

function Fr(e, t) {
    const n = Re(e, !0, t === "fixed"),
        o = n.top + e.clientTop,
        r = n.left + e.clientLeft,
        a = ue(e) ? Ne(e) : le(1),
        s = e.clientWidth * a.x,
        u = e.clientHeight * a.y,
        l = r * a.x,
        d = o * a.y;
    return {
        width: s,
        height: u,
        x: l,
        y: d
    }
}

function on(e, t, n) {
    let o;
    if (t === "viewport") o = Br(e, n);
    else if (t === "document") o = Vr(de(e));
    else if (ie(t)) o = Fr(t, n);
    else {
        const r = En(e);
        o = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
        }
    }
    return tt(o)
}

function kn(e, t) {
    const n = Le(e);
    return n === t || !ie(n) || Me(n) ? !1 : ce(n).position === "fixed" || kn(n, t)
}

function Ur(e, t) {
    const n = t.get(e);
    if (n) return n;
    let o = Ze(e, [], !1).filter(u => ie(u) && Oe(u) !== "body"),
        r = null;
    const a = ce(e).position === "fixed";
    let s = a ? Le(e) : e;
    for (; ie(s) && !Me(s);) {
        const u = ce(s),
            l = jt(s);
        !l && u.position === "fixed" && (r = null), (a ? !l && !r : !l && u.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Ge(s) && !l && kn(e, s)) ? o = o.filter(m => m !== s) : r = u, s = Le(s)
    }
    return t.set(e, o), o
}

function $r(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: o,
        strategy: r
    } = e;
    const s = [...n === "clippingAncestors" ? at(t) ? [] : Ur(t, this._c) : [].concat(n), o],
        u = s[0],
        l = s.reduce((d, m) => {
            const p = on(t, m, r);
            return d.top = ne(p.top, d.top), d.right = xe(p.right, d.right), d.bottom = xe(p.bottom, d.bottom), d.left = ne(p.left, d.left), d
        }, on(t, u, r));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}

function Wr(e) {
    const {
        width: t,
        height: n
    } = bn(e);
    return {
        width: t,
        height: n
    }
}

function Zr(e, t, n) {
    const o = ue(t),
        r = de(t),
        a = n === "fixed",
        s = Re(e, !0, a, t);
    let u = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = le(0);
    if (o || !o && !a)
        if ((Oe(t) !== "body" || Ge(r)) && (u = it(t)), o) {
            const v = Re(t, !0, a, t);
            l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop
        } else r && (l.x = Vt(r));
    const d = r && !o && !a ? Rn(r, u) : le(0),
        m = s.left + u.scrollLeft - l.x - d.x,
        p = s.top + u.scrollTop - l.y - d.y;
    return {
        x: m,
        y: p,
        width: s.width,
        height: s.height
    }
}

function pt(e) {
    return ce(e).position === "static"
}

function rn(e, t) {
    if (!ue(e) || ce(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return de(e) === n && (n = n.ownerDocument.body), n
}

function An(e, t) {
    const n = oe(e);
    if (at(e)) return n;
    if (!ue(e)) {
        let r = Le(e);
        for (; r && !Me(r);) {
            if (ie(r) && !pt(r)) return r;
            r = Le(r)
        }
        return n
    }
    let o = rn(e, t);
    for (; o && Mr(o) && pt(o);) o = rn(o, t);
    return o && Me(o) && pt(o) && !jt(o) ? n : o || Pr(e) || n
}
const Gr = async function(e) {
    const t = this.getOffsetParent || An,
        n = this.getDimensions,
        o = await n(e.floating);
    return {
        reference: Zr(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: o.width,
            height: o.height
        }
    }
};

function zr(e) {
    return ce(e).direction === "rtl"
}
const Kr = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Hr,
    getDocumentElement: de,
    getClippingRect: $r,
    getOffsetParent: An,
    getElementRects: Gr,
    getClientRects: Dr,
    getDimensions: Wr,
    getScale: Ne,
    isElement: ie,
    isRTL: zr
};

function In(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function Yr(e, t) {
    let n = null,
        o;
    const r = de(e);

    function a() {
        var u;
        clearTimeout(o), (u = n) == null || u.disconnect(), n = null
    }

    function s(u, l) {
        u === void 0 && (u = !1), l === void 0 && (l = 1), a();
        const d = e.getBoundingClientRect(),
            {
                left: m,
                top: p,
                width: v,
                height: g
            } = d;
        if (u || t(), !v || !g) return;
        const x = Ye(p),
            i = Ye(r.clientWidth - (m + v)),
            L = Ye(r.clientHeight - (p + g)),
            C = Ye(m),
            b = {
                rootMargin: -x + "px " + -i + "px " + -L + "px " + -C + "px",
                threshold: ne(0, xe(1, l)) || 1
            };
        let R = !0;

        function k(T) {
            const A = T[0].intersectionRatio;
            if (A !== l) {
                if (!R) return s();
                A ? s(!1, A) : o = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            A === 1 && !In(d, e.getBoundingClientRect()) && s(), R = !1
        }
        try {
            n = new IntersectionObserver(k, {
                ...b,
                root: r.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(k, b)
        }
        n.observe(e)
    }
    return s(!0), a
}

function qr(e, t, n, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: r = !0,
        ancestorResize: a = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: u = typeof IntersectionObserver == "function",
        animationFrame: l = !1
    } = o, d = Dt(e), m = r || a ? [...d ? Ze(d) : [], ...Ze(t)] : [];
    m.forEach(C => {
        r && C.addEventListener("scroll", n, {
            passive: !0
        }), a && C.addEventListener("resize", n)
    });
    const p = d && u ? Yr(d, n) : null;
    let v = -1,
        g = null;
    s && (g = new ResizeObserver(C => {
        let [w] = C;
        w && w.target === d && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
            var b;
            (b = g) == null || b.observe(t)
        })), n()
    }), d && !l && g.observe(d), g.observe(t));
    let x, i = l ? Re(e) : null;
    l && L();

    function L() {
        const C = Re(e);
        i && !In(i, C) && n(), i = C, x = requestAnimationFrame(L)
    }
    return n(), () => {
        var C;
        m.forEach(w => {
            r && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n)
        }), p?.(), (C = g) == null || C.disconnect(), g = null, l && cancelAnimationFrame(x)
    }
}
const Xr = Ir,
    Jr = Tr,
    Qr = Rr,
    es = _r,
    ts = kr,
    sn = Er,
    ns = Nr,
    os = (e, t, n) => {
        const o = new Map,
            r = {
                platform: Kr,
                ...n
            },
            a = {
                ...r.platform,
                _c: o
            };
        return br(e, t, {
            ...r,
            platform: a
        })
    };
var Je = typeof document < "u" ? f.useLayoutEffect : f.useEffect;

function nt(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, o, r;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (o = n; o-- !== 0;)
                if (!nt(e[o], t[o])) return !1;
            return !0
        }
        if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length) return !1;
        for (o = n; o-- !== 0;)
            if (!{}.hasOwnProperty.call(t, r[o])) return !1;
        for (o = n; o-- !== 0;) {
            const a = r[o];
            if (!(a === "_owner" && e.$$typeof) && !nt(e[a], t[a])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Tn(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function an(e, t) {
    const n = Tn(e);
    return Math.round(t * n) / n
}

function ht(e) {
    const t = f.useRef(e);
    return Je(() => {
        t.current = e
    }), t
}

function rs(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: o = [],
        platform: r,
        elements: {
            reference: a,
            floating: s
        } = {},
        transform: u = !0,
        whileElementsMounted: l,
        open: d
    } = e, [m, p] = f.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [v, g] = f.useState(o);
    nt(v, o) || g(o);
    const [x, i] = f.useState(null), [L, C] = f.useState(null), w = f.useCallback(E => {
        E !== T.current && (T.current = E, i(E))
    }, []), b = f.useCallback(E => {
        E !== A.current && (A.current = E, C(E))
    }, []), R = a || x, k = s || L, T = f.useRef(null), A = f.useRef(null), O = f.useRef(m), B = l != null, j = ht(l), H = ht(r), M = ht(d), D = f.useCallback(() => {
        if (!T.current || !A.current) return;
        const E = {
            placement: t,
            strategy: n,
            middleware: v
        };
        H.current && (E.platform = H.current), os(T.current, A.current, E).then(_ => {
            const Y = {
                ..._,
                isPositioned: M.current !== !1
            };
            N.current && !nt(O.current, Y) && (O.current = Y, Tt.flushSync(() => {
                p(Y)
            }))
        })
    }, [v, t, n, H, M]);
    Je(() => {
        d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, p(E => ({
            ...E,
            isPositioned: !1
        })))
    }, [d]);
    const N = f.useRef(!1);
    Je(() => (N.current = !0, () => {
        N.current = !1
    }), []), Je(() => {
        if (R && (T.current = R), k && (A.current = k), R && k) {
            if (j.current) return j.current(R, k, D);
            D()
        }
    }, [R, k, D, j, B]);
    const h = f.useMemo(() => ({
            reference: T,
            floating: A,
            setReference: w,
            setFloating: b
        }), [w, b]),
        y = f.useMemo(() => ({
            reference: R,
            floating: k
        }), [R, k]),
        S = f.useMemo(() => {
            const E = {
                position: n,
                left: 0,
                top: 0
            };
            if (!y.floating) return E;
            const _ = an(y.floating, m.x),
                Y = an(y.floating, m.y);
            return u ? {
                ...E,
                transform: "translate(" + _ + "px, " + Y + "px)",
                ...Tn(y.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: _,
                top: Y
            }
        }, [n, u, y.floating, m.x, m.y]);
    return f.useMemo(() => ({
        ...m,
        update: D,
        refs: h,
        elements: y,
        floatingStyles: S
    }), [m, D, h, y, S])
}
const ss = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: o,
                    padding: r
                } = typeof e == "function" ? e(n) : e;
                return o && t(o) ? o.current != null ? sn({
                    element: o.current,
                    padding: r
                }).fn(n) : {} : o ? sn({
                    element: o,
                    padding: r
                }).fn(n) : {}
            }
        }
    },
    as = (e, t) => ({
        ...Xr(e),
        options: [e, t]
    }),
    is = (e, t) => ({
        ...Jr(e),
        options: [e, t]
    }),
    cs = (e, t) => ({
        ...ns(e),
        options: [e, t]
    }),
    ls = (e, t) => ({
        ...Qr(e),
        options: [e, t]
    }),
    us = (e, t) => ({
        ...es(e),
        options: [e, t]
    }),
    ds = (e, t) => ({
        ...ts(e),
        options: [e, t]
    }),
    ms = (e, t) => ({
        ...ss(e),
        options: [e, t]
    });
var fs = "Arrow",
    Nn = f.forwardRef((e, t) => {
        const {
            children: n,
            width: o = 10,
            height: r = 5,
            ...a
        } = e;
        return c.jsx(X.svg, {
            ...a,
            ref: t,
            width: o,
            height: r,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : c.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Nn.displayName = fs;
var ps = Nn;

function hs(e) {
    const [t, n] = f.useState(void 0);
    return ae(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const o = new ResizeObserver(r => {
                if (!Array.isArray(r) || !r.length) return;
                const a = r[0];
                let s, u;
                if ("borderBoxSize" in a) {
                    const l = a.borderBoxSize,
                        d = Array.isArray(l) ? l[0] : l;
                    s = d.inlineSize, u = d.blockSize
                } else s = e.offsetWidth, u = e.offsetHeight;
                n({
                    width: s,
                    height: u
                })
            });
            return o.observe(e, {
                box: "border-box"
            }), () => o.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var Bt = "Popper",
    [_n, Mn] = Nt(Bt),
    [gs, Pn] = _n(Bt),
    On = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [o, r] = f.useState(null);
        return c.jsx(gs, {
            scope: t,
            anchor: o,
            onAnchorChange: r,
            children: n
        })
    };
On.displayName = Bt;
var jn = "PopperAnchor",
    Hn = f.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: o,
            ...r
        } = e, a = Pn(jn, n), s = f.useRef(null), u = ee(t, s);
        return f.useEffect(() => {
            a.onAnchorChange(o?.current || s.current)
        }), o ? null : c.jsx(X.div, {
            ...r,
            ref: u
        })
    });
Hn.displayName = jn;
var Ft = "PopperContent",
    [vs, xs] = _n(Ft),
    Dn = f.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: r = 0,
            align: a = "center",
            alignOffset: s = 0,
            arrowPadding: u = 0,
            avoidCollisions: l = !0,
            collisionBoundary: d = [],
            collisionPadding: m = 0,
            sticky: p = "partial",
            hideWhenDetached: v = !1,
            updatePositionStrategy: g = "optimized",
            onPlaced: x,
            ...i
        } = e, L = Pn(Ft, n), [C, w] = f.useState(null), b = ee(t, I => w(I)), [R, k] = f.useState(null), T = hs(R), A = T?.width ?? 0, O = T?.height ?? 0, B = o + (a !== "center" ? "-" + a : ""), j = typeof m == "number" ? m : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...m
        }, H = Array.isArray(d) ? d : [d], M = H.length > 0, D = {
            padding: j,
            boundary: H.filter(Ls),
            altBoundary: M
        }, {
            refs: N,
            floatingStyles: h,
            placement: y,
            isPositioned: S,
            middlewareData: E
        } = rs({
            strategy: "fixed",
            placement: B,
            whileElementsMounted: (...I) => qr(...I, {
                animationFrame: g === "always"
            }),
            elements: {
                reference: L.anchor
            },
            middleware: [as({
                mainAxis: r + O,
                alignmentAxis: s
            }), l && is({
                mainAxis: !0,
                crossAxis: !1,
                limiter: p === "partial" ? cs() : void 0,
                ...D
            }), l && ls({
                ...D
            }), us({
                ...D,
                apply: ({
                    elements: I,
                    rects: Z,
                    availableWidth: Q,
                    availableHeight: F
                }) => {
                    const {
                        width: U,
                        height: G
                    } = Z.reference, re = I.floating.style;
                    re.setProperty("--radix-popper-available-width", `${Q}px`), re.setProperty("--radix-popper-available-height", `${F}px`), re.setProperty("--radix-popper-anchor-width", `${U}px`), re.setProperty("--radix-popper-anchor-height", `${G}px`)
                }
            }), R && ms({
                element: R,
                padding: u
            }), ws({
                arrowWidth: A,
                arrowHeight: O
            }), v && ds({
                strategy: "referenceHidden",
                ...D
            })]
        }), [_, Y] = Fn(y), W = cn(x);
        ae(() => {
            S && W?.()
        }, [S, W]);
        const He = E.arrow?.x,
            De = E.arrow?.y,
            he = E.arrow?.centerOffset !== 0,
            [Ie, Se] = f.useState();
        return ae(() => {
            C && Se(window.getComputedStyle(C).zIndex)
        }, [C]), c.jsx("div", {
            ref: N.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...h,
                transform: S ? h.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: Ie,
                "--radix-popper-transform-origin": [E.transformOrigin?.x, E.transformOrigin?.y].join(" "),
                ...E.hide?.referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: c.jsx(vs, {
                scope: n,
                placedSide: _,
                onArrowChange: k,
                arrowX: He,
                arrowY: De,
                shouldHideArrow: he,
                children: c.jsx(X.div, {
                    "data-side": _,
                    "data-align": Y,
                    ...i,
                    ref: b,
                    style: {
                        ...i.style,
                        animation: S ? void 0 : "none"
                    }
                })
            })
        })
    });
Dn.displayName = Ft;
var Vn = "PopperArrow",
    ys = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Bn = f.forwardRef(function(t, n) {
        const {
            __scopePopper: o,
            ...r
        } = t, a = xs(Vn, o), s = ys[a.placedSide];
        return c.jsx("span", {
            ref: a.onArrowChange,
            style: {
                position: "absolute",
                left: a.arrowX,
                top: a.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                } [a.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                } [a.placedSide],
                visibility: a.shouldHideArrow ? "hidden" : void 0
            },
            children: c.jsx(ps, {
                ...r,
                ref: n,
                style: {
                    ...r.style,
                    display: "block"
                }
            })
        })
    });
Bn.displayName = Vn;

function Ls(e) {
    return e !== null
}
var ws = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        const {
            placement: n,
            rects: o,
            middlewareData: r
        } = t, s = r.arrow?.centerOffset !== 0, u = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, m] = Fn(n), p = {
            start: "0%",
            center: "50%",
            end: "100%"
        } [m], v = (r.arrow?.x ?? 0) + u / 2, g = (r.arrow?.y ?? 0) + l / 2;
        let x = "",
            i = "";
        return d === "bottom" ? (x = s ? p : `${v}px`, i = `${-l}px`) : d === "top" ? (x = s ? p : `${v}px`, i = `${o.floating.height+l}px`) : d === "right" ? (x = `${-l}px`, i = s ? p : `${g}px`) : d === "left" && (x = `${o.floating.width+l}px`, i = s ? p : `${g}px`), {
            data: {
                x,
                y: i
            }
        }
    }
});

function Fn(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var Cs = On,
    Ss = Hn,
    bs = Dn,
    Es = Bn;

function Rs(e) {
    const t = f.useRef({
        value: e,
        previous: e
    });
    return f.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var Un = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    ks = "VisuallyHidden",
    As = f.forwardRef((e, t) => c.jsx(X.span, {
        ...e,
        ref: t,
        style: {
            ...Un,
            ...e.style
        }
    }));
As.displayName = ks;
var Is = [" ", "Enter", "ArrowUp", "ArrowDown"],
    Ts = [" ", "Enter"],
    ke = "Select",
    [ct, lt, Ns] = fr(ke),
    [je, Ba] = Nt(ke, [Ns, Mn]),
    ut = Mn(),
    [_s, we] = je(ke),
    [Ms, Ps] = je(ke),
    $n = e => {
        const {
            __scopeSelect: t,
            children: n,
            open: o,
            defaultOpen: r,
            onOpenChange: a,
            value: s,
            defaultValue: u,
            onValueChange: l,
            dir: d,
            name: m,
            autoComplete: p,
            disabled: v,
            required: g,
            form: x
        } = e, i = ut(t), [L, C] = f.useState(null), [w, b] = f.useState(null), [R, k] = f.useState(!1), T = hr(d), [A, O] = $t({
            prop: o,
            defaultProp: r ?? !1,
            onChange: a,
            caller: ke
        }), [B, j] = $t({
            prop: s,
            defaultProp: u,
            onChange: l,
            caller: ke
        }), H = f.useRef(null), M = L ? x || !!L.closest("form") : !0, [D, N] = f.useState(new Set), h = Array.from(D).map(y => y.props.value).join(";");
        return c.jsx(Cs, {
            ...i,
            children: c.jsxs(_s, {
                required: g,
                scope: t,
                trigger: L,
                onTriggerChange: C,
                valueNode: w,
                onValueNodeChange: b,
                valueNodeHasChildren: R,
                onValueNodeHasChildrenChange: k,
                contentId: _t(),
                value: B,
                onValueChange: j,
                open: A,
                onOpenChange: O,
                dir: T,
                triggerPointerDownPosRef: H,
                disabled: v,
                children: [c.jsx(ct.Provider, {
                    scope: t,
                    children: c.jsx(Ms, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: f.useCallback(y => {
                            N(S => new Set(S).add(y))
                        }, []),
                        onNativeOptionRemove: f.useCallback(y => {
                            N(S => {
                                const E = new Set(S);
                                return E.delete(y), E
                            })
                        }, []),
                        children: n
                    })
                }), M ? c.jsxs(mo, {
                    "aria-hidden": !0,
                    required: g,
                    tabIndex: -1,
                    name: m,
                    autoComplete: p,
                    value: B,
                    onChange: y => j(y.target.value),
                    disabled: v,
                    form: x,
                    children: [B === void 0 ? c.jsx("option", {
                        value: ""
                    }) : null, Array.from(D)]
                }, h) : null]
            })
        })
    };
$n.displayName = ke;
var Wn = "SelectTrigger",
    Zn = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            disabled: o = !1,
            ...r
        } = e, a = ut(n), s = we(Wn, n), u = s.disabled || o, l = ee(t, s.onTriggerChange), d = lt(n), m = f.useRef("touch"), [p, v, g] = po(i => {
            const L = d().filter(b => !b.disabled),
                C = L.find(b => b.value === s.value),
                w = ho(L, i, C);
            w !== void 0 && s.onValueChange(w.value)
        }), x = i => {
            u || (s.onOpenChange(!0), g()), i && (s.triggerPointerDownPosRef.current = {
                x: Math.round(i.pageX),
                y: Math.round(i.pageY)
            })
        };
        return c.jsx(Ss, {
            asChild: !0,
            ...a,
            children: c.jsx(X.button, {
                type: "button",
                role: "combobox",
                "aria-controls": s.contentId,
                "aria-expanded": s.open,
                "aria-required": s.required,
                "aria-autocomplete": "none",
                dir: s.dir,
                "data-state": s.open ? "open" : "closed",
                disabled: u,
                "data-disabled": u ? "" : void 0,
                "data-placeholder": fo(s.value) ? "" : void 0,
                ...r,
                ref: l,
                onClick: q(r.onClick, i => {
                    i.currentTarget.focus(), m.current !== "mouse" && x(i)
                }),
                onPointerDown: q(r.onPointerDown, i => {
                    m.current = i.pointerType;
                    const L = i.target;
                    L.hasPointerCapture(i.pointerId) && L.releasePointerCapture(i.pointerId), i.button === 0 && i.ctrlKey === !1 && i.pointerType === "mouse" && (x(i), i.preventDefault())
                }),
                onKeyDown: q(r.onKeyDown, i => {
                    const L = p.current !== "";
                    !(i.ctrlKey || i.altKey || i.metaKey) && i.key.length === 1 && v(i.key), !(L && i.key === " ") && Is.includes(i.key) && (x(), i.preventDefault())
                })
            })
        })
    });
Zn.displayName = Wn;
var Gn = "SelectValue",
    zn = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: o,
            style: r,
            children: a,
            placeholder: s = "",
            ...u
        } = e, l = we(Gn, n), {
            onValueNodeHasChildrenChange: d
        } = l, m = a !== void 0, p = ee(t, l.onValueNodeChange);
        return ae(() => {
            d(m)
        }, [d, m]), c.jsx(X.span, {
            ...u,
            ref: p,
            style: {
                pointerEvents: "none"
            },
            children: fo(l.value) ? c.jsx(c.Fragment, {
                children: s
            }) : a
        })
    });
zn.displayName = Gn;
var Os = "SelectIcon",
    Kn = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            children: o,
            ...r
        } = e;
        return c.jsx(X.span, {
            "aria-hidden": !0,
            ...r,
            ref: t,
            children: o || "▼"
        })
    });
Kn.displayName = Os;
var js = "SelectPortal",
    Yn = e => c.jsx(ko, {
        asChild: !0,
        ...e
    });
Yn.displayName = js;
var Ae = "SelectContent",
    qn = f.forwardRef((e, t) => {
        const n = we(Ae, e.__scopeSelect),
            [o, r] = f.useState();
        if (ae(() => {
                r(new DocumentFragment)
            }, []), !n.open) {
            const a = o;
            return a ? Tt.createPortal(c.jsx(Xn, {
                scope: e.__scopeSelect,
                children: c.jsx(ct.Slot, {
                    scope: e.__scopeSelect,
                    children: c.jsx("div", {
                        children: e.children
                    })
                })
            }), a) : null
        }
        return c.jsx(Jn, {
            ...e,
            ref: t
        })
    });
qn.displayName = Ae;
var se = 10,
    [Xn, Ce] = je(Ae),
    Hs = "SelectContentImpl",
    Ds = vt("SelectContent.RemoveScroll"),
    Jn = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            position: o = "item-aligned",
            onCloseAutoFocus: r,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            side: u,
            sideOffset: l,
            align: d,
            alignOffset: m,
            arrowPadding: p,
            collisionBoundary: v,
            collisionPadding: g,
            sticky: x,
            hideWhenDetached: i,
            avoidCollisions: L,
            ...C
        } = e, w = we(Ae, n), [b, R] = f.useState(null), [k, T] = f.useState(null), A = ee(t, I => R(I)), [O, B] = f.useState(null), [j, H] = f.useState(null), M = lt(n), [D, N] = f.useState(!1), h = f.useRef(!1);
        f.useEffect(() => {
            if (b) return Ao(b)
        }, [b]), Io();
        const y = f.useCallback(I => {
                const [Z, ...Q] = M().map(G => G.ref.current), [F] = Q.slice(-1), U = document.activeElement;
                for (const G of I)
                    if (G === U || (G?.scrollIntoView({
                            block: "nearest"
                        }), G === Z && k && (k.scrollTop = 0), G === F && k && (k.scrollTop = k.scrollHeight), G?.focus(), document.activeElement !== U)) return
            }, [M, k]),
            S = f.useCallback(() => y([O, b]), [y, O, b]);
        f.useEffect(() => {
            D && S()
        }, [D, S]);
        const {
            onOpenChange: E,
            triggerPointerDownPosRef: _
        } = w;
        f.useEffect(() => {
            if (b) {
                let I = {
                    x: 0,
                    y: 0
                };
                const Z = F => {
                        I = {
                            x: Math.abs(Math.round(F.pageX) - (_.current?.x ?? 0)),
                            y: Math.abs(Math.round(F.pageY) - (_.current?.y ?? 0))
                        }
                    },
                    Q = F => {
                        I.x <= 10 && I.y <= 10 ? F.preventDefault() : b.contains(F.target) || E(!1), document.removeEventListener("pointermove", Z), _.current = null
                    };
                return _.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", Q, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", Q, {
                        capture: !0
                    })
                }
            }
        }, [b, E, _]), f.useEffect(() => {
            const I = () => E(!1);
            return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
                window.removeEventListener("blur", I), window.removeEventListener("resize", I)
            }
        }, [E]);
        const [Y, W] = po(I => {
            const Z = M().filter(U => !U.disabled),
                Q = Z.find(U => U.ref.current === document.activeElement),
                F = ho(Z, I, Q);
            F && setTimeout(() => F.ref.current.focus())
        }), He = f.useCallback((I, Z, Q) => {
            const F = !h.current && !Q;
            (w.value !== void 0 && w.value === Z || F) && (B(I), F && (h.current = !0))
        }, [w.value]), De = f.useCallback(() => b?.focus(), [b]), he = f.useCallback((I, Z, Q) => {
            const F = !h.current && !Q;
            (w.value !== void 0 && w.value === Z || F) && H(I)
        }, [w.value]), Ie = o === "popper" ? St : Qn, Se = Ie === St ? {
            side: u,
            sideOffset: l,
            align: d,
            alignOffset: m,
            arrowPadding: p,
            collisionBoundary: v,
            collisionPadding: g,
            sticky: x,
            hideWhenDetached: i,
            avoidCollisions: L
        } : {};
        return c.jsx(Xn, {
            scope: n,
            content: b,
            viewport: k,
            onViewportChange: T,
            itemRefCallback: He,
            selectedItem: O,
            onItemLeave: De,
            itemTextRefCallback: he,
            focusSelectedItem: S,
            selectedItemText: j,
            position: o,
            isPositioned: D,
            searchRef: Y,
            children: c.jsx(To, {
                as: Ds,
                allowPinchZoom: !0,
                children: c.jsx(No, {
                    asChild: !0,
                    trapped: w.open,
                    onMountAutoFocus: I => {
                        I.preventDefault()
                    },
                    onUnmountAutoFocus: q(r, I => {
                        w.trigger?.focus({
                            preventScroll: !0
                        }), I.preventDefault()
                    }),
                    children: c.jsx(_o, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        onFocusOutside: I => I.preventDefault(),
                        onDismiss: () => w.onOpenChange(!1),
                        children: c.jsx(Ie, {
                            role: "listbox",
                            id: w.contentId,
                            "data-state": w.open ? "open" : "closed",
                            dir: w.dir,
                            onContextMenu: I => I.preventDefault(),
                            ...C,
                            ...Se,
                            onPlaced: () => N(!0),
                            ref: A,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...C.style
                            },
                            onKeyDown: q(C.onKeyDown, I => {
                                const Z = I.ctrlKey || I.altKey || I.metaKey;
                                if (I.key === "Tab" && I.preventDefault(), !Z && I.key.length === 1 && W(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                                    let F = M().filter(U => !U.disabled).map(U => U.ref.current);
                                    if (["ArrowUp", "End"].includes(I.key) && (F = F.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                                        const U = I.target,
                                            G = F.indexOf(U);
                                        F = F.slice(G + 1)
                                    }
                                    setTimeout(() => y(F)), I.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
Jn.displayName = Hs;
var Vs = "SelectItemAlignedPosition",
    Qn = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onPlaced: o,
            ...r
        } = e, a = we(Ae, n), s = Ce(Ae, n), [u, l] = f.useState(null), [d, m] = f.useState(null), p = ee(t, A => m(A)), v = lt(n), g = f.useRef(!1), x = f.useRef(!0), {
            viewport: i,
            selectedItem: L,
            selectedItemText: C,
            focusSelectedItem: w
        } = s, b = f.useCallback(() => {
            if (a.trigger && a.valueNode && u && d && i && L && C) {
                const A = a.trigger.getBoundingClientRect(),
                    O = d.getBoundingClientRect(),
                    B = a.valueNode.getBoundingClientRect(),
                    j = C.getBoundingClientRect();
                if (a.dir !== "rtl") {
                    const U = j.left - O.left,
                        G = B.left - U,
                        re = A.left - G,
                        be = A.width + re,
                        dt = Math.max(be, O.width),
                        mt = window.innerWidth - se,
                        ft = Jt(G, [se, Math.max(se, mt - dt)]);
                    u.style.minWidth = be + "px", u.style.left = ft + "px"
                } else {
                    const U = O.right - j.right,
                        G = window.innerWidth - B.right - U,
                        re = window.innerWidth - A.right - G,
                        be = A.width + re,
                        dt = Math.max(be, O.width),
                        mt = window.innerWidth - se,
                        ft = Jt(G, [se, Math.max(se, mt - dt)]);
                    u.style.minWidth = be + "px", u.style.right = ft + "px"
                }
                const H = v(),
                    M = window.innerHeight - se * 2,
                    D = i.scrollHeight,
                    N = window.getComputedStyle(d),
                    h = parseInt(N.borderTopWidth, 10),
                    y = parseInt(N.paddingTop, 10),
                    S = parseInt(N.borderBottomWidth, 10),
                    E = parseInt(N.paddingBottom, 10),
                    _ = h + y + D + E + S,
                    Y = Math.min(L.offsetHeight * 5, _),
                    W = window.getComputedStyle(i),
                    He = parseInt(W.paddingTop, 10),
                    De = parseInt(W.paddingBottom, 10),
                    he = A.top + A.height / 2 - se,
                    Ie = M - he,
                    Se = L.offsetHeight / 2,
                    I = L.offsetTop + Se,
                    Z = h + y + I,
                    Q = _ - Z;
                if (Z <= he) {
                    const U = H.length > 0 && L === H[H.length - 1].ref.current;
                    u.style.bottom = "0px";
                    const G = d.clientHeight - i.offsetTop - i.offsetHeight,
                        re = Math.max(Ie, Se + (U ? De : 0) + G + S),
                        be = Z + re;
                    u.style.height = be + "px"
                } else {
                    const U = H.length > 0 && L === H[0].ref.current;
                    u.style.top = "0px";
                    const re = Math.max(he, h + i.offsetTop + (U ? He : 0) + Se) + Q;
                    u.style.height = re + "px", i.scrollTop = Z - he + i.offsetTop
                }
                u.style.margin = `${se}px 0`, u.style.minHeight = Y + "px", u.style.maxHeight = M + "px", o?.(), requestAnimationFrame(() => g.current = !0)
            }
        }, [v, a.trigger, a.valueNode, u, d, i, L, C, a.dir, o]);
        ae(() => b(), [b]);
        const [R, k] = f.useState();
        ae(() => {
            d && k(window.getComputedStyle(d).zIndex)
        }, [d]);
        const T = f.useCallback(A => {
            A && x.current === !0 && (b(), w?.(), x.current = !1)
        }, [b, w]);
        return c.jsx(Fs, {
            scope: n,
            contentWrapper: u,
            shouldExpandOnScrollRef: g,
            onScrollButtonChange: T,
            children: c.jsx("div", {
                ref: l,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: R
                },
                children: c.jsx(X.div, {
                    ...r,
                    ref: p,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...r.style
                    }
                })
            })
        })
    });
Qn.displayName = Vs;
var Bs = "SelectPopperPosition",
    St = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            align: o = "start",
            collisionPadding: r = se,
            ...a
        } = e, s = ut(n);
        return c.jsx(bs, {
            ...s,
            ...a,
            ref: t,
            align: o,
            collisionPadding: r,
            style: {
                boxSizing: "border-box",
                ...a.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
St.displayName = Bs;
var [Fs, Ut] = je(Ae, {}), bt = "SelectViewport", eo = f.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        nonce: o,
        ...r
    } = e, a = Ce(bt, n), s = Ut(bt, n), u = ee(t, a.onViewportChange), l = f.useRef(0);
    return c.jsxs(c.Fragment, {
        children: [c.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
        }), c.jsx(ct.Slot, {
            scope: n,
            children: c.jsx(X.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...r,
                ref: u,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...r.style
                },
                onScroll: q(r.onScroll, d => {
                    const m = d.currentTarget,
                        {
                            contentWrapper: p,
                            shouldExpandOnScrollRef: v
                        } = s;
                    if (v?.current && p) {
                        const g = Math.abs(l.current - m.scrollTop);
                        if (g > 0) {
                            const x = window.innerHeight - se * 2,
                                i = parseFloat(p.style.minHeight),
                                L = parseFloat(p.style.height),
                                C = Math.max(i, L);
                            if (C < x) {
                                const w = C + g,
                                    b = Math.min(x, w),
                                    R = w - b;
                                p.style.height = b + "px", p.style.bottom === "0px" && (m.scrollTop = R > 0 ? R : 0, p.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = m.scrollTop
                })
            })
        })]
    })
});
eo.displayName = bt;
var to = "SelectGroup",
    [Us, $s] = je(to),
    Ws = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e, r = _t();
        return c.jsx(Us, {
            scope: n,
            id: r,
            children: c.jsx(X.div, {
                role: "group",
                "aria-labelledby": r,
                ...o,
                ref: t
            })
        })
    });
Ws.displayName = to;
var no = "SelectLabel",
    oo = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e, r = $s(no, n);
        return c.jsx(X.div, {
            id: r.id,
            ...o,
            ref: t
        })
    });
oo.displayName = no;
var ot = "SelectItem",
    [Zs, ro] = je(ot),
    so = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            value: o,
            disabled: r = !1,
            textValue: a,
            ...s
        } = e, u = we(ot, n), l = Ce(ot, n), d = u.value === o, [m, p] = f.useState(a ?? ""), [v, g] = f.useState(!1), x = ee(t, w => l.itemRefCallback?.(w, o, r)), i = _t(), L = f.useRef("touch"), C = () => {
            r || (u.onValueChange(o), u.onOpenChange(!1))
        };
        if (o === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return c.jsx(Zs, {
            scope: n,
            value: o,
            disabled: r,
            textId: i,
            isSelected: d,
            onItemTextChange: f.useCallback(w => {
                p(b => b || (w?.textContent ?? "").trim())
            }, []),
            children: c.jsx(ct.ItemSlot, {
                scope: n,
                value: o,
                disabled: r,
                textValue: m,
                children: c.jsx(X.div, {
                    role: "option",
                    "aria-labelledby": i,
                    "data-highlighted": v ? "" : void 0,
                    "aria-selected": d && v,
                    "data-state": d ? "checked" : "unchecked",
                    "aria-disabled": r || void 0,
                    "data-disabled": r ? "" : void 0,
                    tabIndex: r ? void 0 : -1,
                    ...s,
                    ref: x,
                    onFocus: q(s.onFocus, () => g(!0)),
                    onBlur: q(s.onBlur, () => g(!1)),
                    onClick: q(s.onClick, () => {
                        L.current !== "mouse" && C()
                    }),
                    onPointerUp: q(s.onPointerUp, () => {
                        L.current === "mouse" && C()
                    }),
                    onPointerDown: q(s.onPointerDown, w => {
                        L.current = w.pointerType
                    }),
                    onPointerMove: q(s.onPointerMove, w => {
                        L.current = w.pointerType, r ? l.onItemLeave?.() : L.current === "mouse" && w.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: q(s.onPointerLeave, w => {
                        w.currentTarget === document.activeElement && l.onItemLeave?.()
                    }),
                    onKeyDown: q(s.onKeyDown, w => {
                        l.searchRef?.current !== "" && w.key === " " || (Ts.includes(w.key) && C(), w.key === " " && w.preventDefault())
                    })
                })
            })
        })
    });
so.displayName = ot;
var $e = "SelectItemText",
    ao = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            className: o,
            style: r,
            ...a
        } = e, s = we($e, n), u = Ce($e, n), l = ro($e, n), d = Ps($e, n), [m, p] = f.useState(null), v = ee(t, C => p(C), l.onItemTextChange, C => u.itemTextRefCallback?.(C, l.value, l.disabled)), g = m?.textContent, x = f.useMemo(() => c.jsx("option", {
            value: l.value,
            disabled: l.disabled,
            children: g
        }, l.value), [l.disabled, l.value, g]), {
            onNativeOptionAdd: i,
            onNativeOptionRemove: L
        } = d;
        return ae(() => (i(x), () => L(x)), [i, L, x]), c.jsxs(c.Fragment, {
            children: [c.jsx(X.span, {
                id: l.textId,
                ...a,
                ref: v
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Tt.createPortal(a.children, s.valueNode) : null]
        })
    });
ao.displayName = $e;
var io = "SelectItemIndicator",
    co = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e;
        return ro(io, n).isSelected ? c.jsx(X.span, {
            "aria-hidden": !0,
            ...o,
            ref: t
        }) : null
    });
co.displayName = io;
var Et = "SelectScrollUpButton",
    Gs = f.forwardRef((e, t) => {
        const n = Ce(Et, e.__scopeSelect),
            o = Ut(Et, e.__scopeSelect),
            [r, a] = f.useState(!1),
            s = ee(t, o.onScrollButtonChange);
        return ae(() => {
            if (n.viewport && n.isPositioned) {
                let u = function() {
                    const d = l.scrollTop > 0;
                    a(d)
                };
                const l = n.viewport;
                return u(), l.addEventListener("scroll", u), () => l.removeEventListener("scroll", u)
            }
        }, [n.viewport, n.isPositioned]), r ? c.jsx(lo, {
            ...e,
            ref: s,
            onAutoScroll: () => {
                const {
                    viewport: u,
                    selectedItem: l
                } = n;
                u && l && (u.scrollTop = u.scrollTop - l.offsetHeight)
            }
        }) : null
    });
Gs.displayName = Et;
var Rt = "SelectScrollDownButton",
    zs = f.forwardRef((e, t) => {
        const n = Ce(Rt, e.__scopeSelect),
            o = Ut(Rt, e.__scopeSelect),
            [r, a] = f.useState(!1),
            s = ee(t, o.onScrollButtonChange);
        return ae(() => {
            if (n.viewport && n.isPositioned) {
                let u = function() {
                    const d = l.scrollHeight - l.clientHeight,
                        m = Math.ceil(l.scrollTop) < d;
                    a(m)
                };
                const l = n.viewport;
                return u(), l.addEventListener("scroll", u), () => l.removeEventListener("scroll", u)
            }
        }, [n.viewport, n.isPositioned]), r ? c.jsx(lo, {
            ...e,
            ref: s,
            onAutoScroll: () => {
                const {
                    viewport: u,
                    selectedItem: l
                } = n;
                u && l && (u.scrollTop = u.scrollTop + l.offsetHeight)
            }
        }) : null
    });
zs.displayName = Rt;
var lo = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            onAutoScroll: o,
            ...r
        } = e, a = Ce("SelectScrollButton", n), s = f.useRef(null), u = lt(n), l = f.useCallback(() => {
            s.current !== null && (window.clearInterval(s.current), s.current = null)
        }, []);
        return f.useEffect(() => () => l(), [l]), ae(() => {
            u().find(m => m.ref.current === document.activeElement)?.ref.current?.scrollIntoView({
                block: "nearest"
            })
        }, [u]), c.jsx(X.div, {
            "aria-hidden": !0,
            ...r,
            ref: t,
            style: {
                flexShrink: 0,
                ...r.style
            },
            onPointerDown: q(r.onPointerDown, () => {
                s.current === null && (s.current = window.setInterval(o, 50))
            }),
            onPointerMove: q(r.onPointerMove, () => {
                a.onItemLeave?.(), s.current === null && (s.current = window.setInterval(o, 50))
            }),
            onPointerLeave: q(r.onPointerLeave, () => {
                l()
            })
        })
    }),
    Ks = "SelectSeparator",
    uo = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e;
        return c.jsx(X.div, {
            "aria-hidden": !0,
            ...o,
            ref: t
        })
    });
uo.displayName = Ks;
var kt = "SelectArrow",
    Ys = f.forwardRef((e, t) => {
        const {
            __scopeSelect: n,
            ...o
        } = e, r = ut(n), a = we(kt, n), s = Ce(kt, n);
        return a.open && s.position === "popper" ? c.jsx(Es, {
            ...r,
            ...o,
            ref: t
        }) : null
    });
Ys.displayName = kt;
var qs = "SelectBubbleInput",
    mo = f.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
    }, o) => {
        const r = f.useRef(null),
            a = ee(o, r),
            s = Rs(t);
        return f.useEffect(() => {
            const u = r.current;
            if (!u) return;
            const l = window.HTMLSelectElement.prototype,
                m = Object.getOwnPropertyDescriptor(l, "value").set;
            if (s !== t && m) {
                const p = new Event("change", {
                    bubbles: !0
                });
                m.call(u, t), u.dispatchEvent(p)
            }
        }, [s, t]), c.jsx(X.select, {
            ...n,
            style: {
                ...Un,
                ...n.style
            },
            ref: a,
            defaultValue: t
        })
    });
mo.displayName = qs;

function fo(e) {
    return e === "" || e === void 0
}

function po(e) {
    const t = cn(e),
        n = f.useRef(""),
        o = f.useRef(0),
        r = f.useCallback(s => {
            const u = n.current + s;
            t(u),
                function l(d) {
                    n.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => l(""), 1e3))
                }(u)
        }, [t]),
        a = f.useCallback(() => {
            n.current = "", window.clearTimeout(o.current)
        }, []);
    return f.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, a]
}

function ho(e, t, n) {
    const r = t.length > 1 && Array.from(t).every(d => d === t[0]) ? t[0] : t,
        a = n ? e.indexOf(n) : -1;
    let s = Xs(e, Math.max(a, 0));
    r.length === 1 && (s = s.filter(d => d !== n));
    const l = s.find(d => d.textValue.toLowerCase().startsWith(r.toLowerCase()));
    return l !== n ? l : void 0
}

function Xs(e, t) {
    return e.map((n, o) => e[(t + o) % e.length])
}
var Js = $n,
    go = Zn,
    Qs = zn,
    ea = Kn,
    ta = Yn,
    vo = qn,
    na = eo,
    xo = oo,
    yo = so,
    oa = ao,
    ra = co,
    Lo = uo;
const sa = Js,
    aa = Qs,
    ia = ea,
    wo = f.forwardRef(({
        className: e,
        children: t,
        ...n
    }, o) => c.jsx(go, {
        ref: o,
        tabIndex: 0,
        className: `u-flex u-h-8 u-flex-wrap u-items-center u-rounded u-border u-border-black u-px-2 u-py-[6px] u-text-base u-leading-none ${e}`,
        ...n,
        children: t
    }));
wo.displayName = go.displayName;
const Co = f.forwardRef(({
    className: e,
    children: t,
    position: n = "popper",
    ...o
}, r) => c.jsx(ta, {
    children: c.jsx(vo, {
        ref: r,
        className: `u-bg-popover u-text-popover-foreground data-[state=open]:u-animate-in data-[state=closed]:u-animate-out data-[state=closed]:u-fade-out-0 data-[state=open]:u-fade-in-0 data-[state=closed]:u-zoom-out-95 data-[state=open]:u-zoom-in-95 data-[side=bottom]:u-slide-in-from-top-2 data-[side=left]:u-slide-in-from-right-2 data-[side=right]:u-slide-in-from-left-2 data-[side=top]:u-slide-in-from-bottom-2 u-z-highest u-max-h-96 u-min-w-[90px] u-overflow-hidden u-rounded-md u-border u-shadow-md ${n==="popper"&&"data-[side=bottom]:u-translate-y-1 data-[side=left]:-u-translate-x-1 data-[side=right]:u-translate-x-1 data-[side=top]:-u-translate-y-1"} ${e}`,
        position: n,
        ...o,
        children: c.jsx(na, {
            className: `${n==="popper"&&"u-h-[var(--radix-select-trigger-height)] u-w-full u-min-w-[var(--radix-select-trigger-width)]"}`,
            children: t
        })
    })
}));
Co.displayName = vo.displayName;
const ca = f.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx(xo, {
    ref: n,
    className: `u-py-1.5 u-pr-2 u-text-sm u-font-semibold ${e}`,
    ...t
}));
ca.displayName = xo.displayName;
const So = f.forwardRef(({
    className: e,
    children: t,
    ...n
}, o) => c.jsxs(yo, {
    ref: o,
    className: `focus:u-bg-accent focus:u-text-accent-foreground u-relative u-flex u-h-10 u-w-full u-cursor-default u-select-none u-items-center u-rounded-sm u-px-2 u-py-[10px] u-text-base !u-outline-none data-[disabled]:u-pointer-events-none data-[state=checked]:u-bg-grey-100 data-[disabled]:u-opacity-50 ${e}`,
    ...n,
    children: [c.jsx(oa, {
        children: t
    }), c.jsx("span", {
        className: "u-absolute u-right-0 u-flex u-items-center u-justify-center u-pr-1",
        children: c.jsx(ra, {
            children: c.jsx(Mo, {
                className: "u-size-4"
            })
        })
    })]
}));
So.displayName = yo.displayName;
const la = f.forwardRef(({
    className: e,
    ...t
}, n) => c.jsx(Lo, {
    ref: n,
    className: `u-bg-muted -u-mx-1 u-my-1 u-h-px ${e}`,
    ...t
}));
la.displayName = Lo.displayName;
const ua = {
        vehicle_model: Ee().required(me(V.FIELD_REQUIRED, "#ATTR#", "Vehicle model")),
        vehicle_type: Ee().required(me(V.FIELD_REQUIRED, "#ATTR#", "Vehicle type"))
    },
    da = bo().shape({
        first_name: Ee().required(me(V.FIELD_REQUIRED, "#ATTR#", "First name")).matches(Te.COMMON_RESTRICTION, me(V.FIELD_VALIDATE, "#ATTR#", "first name")).max(100, ge(V.FIELD_MAX, {
            "#ATTR#": "First name",
            "#MAX#": "100"
        })),
        last_name: Ee().required(me(V.FIELD_REQUIRED, "#ATTR#", "Last name")).matches(Te.COMMON_RESTRICTION, me(V.FIELD_VALIDATE, "#ATTR#", "last name")).max(100, ge(V.FIELD_MAX, {
            "#ATTR#": "Last name",
            "#MAX#": "100"
        })),
        email: Ee().required(me(V.FIELD_REQUIRED, "#ATTR#", "Email address")).matches(Te.RESERVATION_EMAIL, V.SC_EMAIL).max(150, ge(V.FIELD_MAX, {
            "#ATTR#": "Email address",
            "#MAX#": "150"
        })).test("not allow Escort Privat", V.SCOUT_EMAIL_ERROR, e => !e || !e.toLowerCase().endsWith("@scoutmotors.com")),
        confirm_email: Ee().oneOf([Eo("email")], "Emails must match").required(me(V.FIELD_REQUIRED, "#ATTR#", "Confirm email address")).matches(Te.RESERVATION_EMAIL, V.SC_EMAIL).max(150, ge(V.FIELD_MAX, {
            "#ATTR#": "Confirm Email address",
            "#MAX#": "150"
        })),
        phone: Ee().required(me(V.FIELD_REQUIRED, "#ATTR#", "Phone number")).max(50, ge(V.FIELD_PHONE_MAX, {
            "#ATTR#": "Phone number",
            "#MAX#": "50"
        })).when("country", (e, t) => e[0] === "Canada +1" || e[0] === "United States +1" ? t.min(10, ge(V.FIELD_PHONE_MIN, {
            "#ATTR#": "Phone number",
            "#MIN#": "10"
        })).matches(Te.US_NUMBER_VALIDATE, ge(V.FIELD_PHONE_MIN, {
            "#ATTR#": "Phone number",
            "#MIN#": "10"
        })) : e ? t.min(4, ge(V.FIELD_PHONE_MIN, {
            "#ATTR#": "Phone number",
            "#MIN#": "4"
        })).matches(Te.PHONE_NUMBER, V.FILED_NUMERIC) : t),
        ...ua
    }),
    At = ({
        icon: e
    }) => {
        switch (e.toLowerCase()) {
            case "canada":
                return c.jsx(fa, {});
            case "usa":
                return c.jsx(pa, {});
            case "credit-card":
                return c.jsx(ma, {});
            case "loader":
                return c.jsx(Ho, {
                    className: "u-animate-spin"
                })
        }
    },
    ma = () => c.jsx("svg", {
        width: "24",
        height: "20",
        viewBox: "0 0 24 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: c.jsx("path", {
            d: "M24 2.82034V17.1793C24 17.793 23.7944 18.3054 23.3833 18.7165C22.9722 19.1276 22.4598 19.3332 21.8462 19.3332H2.15383C1.54017 19.3332 1.02778 19.1276 0.616667 18.7165C0.205556 18.3054 0 17.793 0 17.1793V2.82034C0 2.20667 0.205556 1.69428 0.616667 1.28317C1.02778 0.872059 1.54017 0.666504 2.15383 0.666504H21.8462C22.4598 0.666504 22.9722 0.872059 23.3833 1.28317C23.7944 1.69428 24 2.20667 24 2.82034ZM1.33333 5.7434H22.6667V2.82034C22.6667 2.61523 22.5812 2.42719 22.4103 2.25624C22.2393 2.0853 22.0513 1.99984 21.8462 1.99984H2.15383C1.94872 1.99984 1.76069 2.0853 1.58973 2.25624C1.4188 2.42719 1.33333 2.61523 1.33333 2.82034V5.7434ZM1.33333 8.92294V17.1793C1.33333 17.3844 1.4188 17.5725 1.58973 17.7434C1.76069 17.9144 1.94872 17.9998 2.15383 17.9998H21.8462C22.0513 17.9998 22.2393 17.9144 22.4103 17.7434C22.5812 17.5725 22.6667 17.3844 22.6667 17.1793V8.92294H1.33333Z",
            fill: "#000000"
        })
    }),
    fa = () => c.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: [c.jsxs("g", {
            clipPath: "url(#clip0_208_820)",
            children: [c.jsx("path", {
                d: "M4.06869 0.694824H11.8234V15.3048H4.06641L4.06869 0.694824Z",
                fill: "white"
            }), c.jsx("path", {
                d: "M0.191406 0.694824H4.06762V15.3048H0.191406V0.694824ZM11.8223 0.694824H15.6985V15.3048H11.8246L11.8223 0.694824ZM5.22957 7.75632L4.92596 7.89025L6.32761 9.53387C6.4349 9.95087 6.29108 10.0757 6.19977 10.2948L7.72012 10.0391L7.6836 12.0784L8.00091 12.0693L7.93014 10.0422L9.45278 10.2857C9.35918 10.0209 9.27472 9.88086 9.36146 9.45778L10.7608 7.90547L10.5166 7.78372C10.3157 7.57674 10.6033 6.79146 10.6444 6.29532C10.6444 6.29532 9.82944 6.66971 9.77694 6.47186L9.56692 5.93921L8.82272 7.02887C8.74282 7.05626 8.70858 7.01365 8.68803 6.92234L9.03046 4.64561L8.48715 5.05347C8.44149 5.08087 8.39583 5.05652 8.36844 4.98651L7.84339 3.58639L7.30465 5.0413C7.26356 5.09304 7.22247 5.09913 7.19051 5.06261L6.66775 4.67605L6.98049 6.93147C6.95538 7.02278 6.89603 7.04713 6.82754 6.99843L6.1153 5.92399C6.02399 6.12183 5.96007 6.44447 5.8368 6.51752C5.71353 6.58752 5.30034 6.38055 5.02412 6.30446C5.12 6.75493 5.4122 7.50978 5.22957 7.75632Z",
                fill: "#D52B1E"
            })]
        }), c.jsx("defs", {
            children: c.jsx("clipPath", {
                id: "clip0_208_820",
                children: c.jsx("rect", {
                    x: "0.640625",
                    y: "0.694824",
                    width: "14.61",
                    height: "14.61",
                    rx: "7.305",
                    fill: "white"
                })
            })
        })]
    }),
    pa = () => c.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: [c.jsxs("g", {
            clipPath: "url(#clip0_208_1732)",
            children: [c.jsx("mask", {
                id: "mask0_208_1732",
                style: {
                    maskType: "luminance"
                },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "16",
                height: "16",
                children: c.jsx("path", {
                    d: "M0.644531 0.695312H15.2852V15.3047H0.644531V0.695312Z",
                    fill: "white"
                })
            }), c.jsxs("g", {
                mask: "url(#mask0_208_1732)",
                children: [c.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.644531 0.695312H21.5065V1.81955H0.644531V0.695312ZM0.644531 2.94379H21.5065V4.06802H0.644531V2.94379ZM0.644531 5.18941H21.5065V6.3165H0.644531V5.18941ZM0.644531 7.43788H21.5065V8.56212H0.644531V7.43788ZM0.644531 9.68636H21.5065V10.8106H0.644531V9.68636ZM0.644531 11.932H21.5065V13.0562H0.644531V11.932ZM0.644531 14.1804H21.5065V15.3047H0.644531V14.1804Z",
                    fill: "#BD3D44"
                }), c.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.644531 1.81836H21.5065V2.9426H0.644531V1.81836ZM0.644531 4.06683H21.5065V5.18822H0.644531V4.06683ZM0.644531 6.31245H21.5065V7.43669H0.644531V6.31245ZM0.644531 8.56093H21.5065V9.68516H0.644531V8.56093ZM0.644531 10.8094H21.5065V11.9336H0.644531V10.8094ZM0.644531 13.055H21.5065V14.1793H0.644531V13.055Z",
                    fill: "white"
                }), c.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.644531 0.695312H8.9889V8.56212H0.644531V0.695312Z",
                    fill: "#192F5D"
                }), c.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.34121 1.0332L1.41841 1.34422H1.66289L1.46559 1.5354L1.54065 1.84927L1.34121 1.65524L1.14391 1.84642L1.21897 1.5354L1.01953 1.34422H1.2683L1.34121 1.0332ZM2.73301 1.0332L2.80807 1.34422H3.05469L2.85525 1.5354L2.93031 1.84927L2.73301 1.65524L2.53357 1.84642L2.60863 1.5354L2.41133 1.34422H2.65581L2.73301 1.0332ZM4.12267 1.0332L4.19987 1.34422H4.4422L4.24491 1.5354L4.31996 1.84927L4.12052 1.65524L3.92323 1.84642L3.99829 1.5354L3.79884 1.34422H4.04546L4.12267 1.0332ZM5.51447 1.0332L5.58953 1.34422H5.83615L5.63671 1.5354L5.71391 1.84927L5.51447 1.65524L5.31503 1.84642L5.39223 1.5354L5.19279 1.34422H5.43727L5.51447 1.0332ZM6.90412 1.0332L6.98133 1.34422H7.2258L7.02851 1.5354L7.10357 1.84927L6.90412 1.65524L6.70683 1.84642L6.78189 1.5354L6.58459 1.34422H6.82907L6.90412 1.0332ZM8.29593 1.0332L8.37098 1.34422H8.61761L8.41816 1.5354L8.49537 1.84927L8.29593 1.65524L8.09648 1.84642L8.17369 1.5354L7.97425 1.34422H8.22087L8.29593 1.0332ZM2.03818 1.82074L2.11324 2.13176H2.35986L2.16042 2.32294L2.23334 2.63396L2.04033 2.44278L1.84089 2.63396L1.91166 2.32294L1.71865 2.13176H1.96312L2.03818 1.82074ZM3.42784 1.82074L3.50504 2.13176H3.74952L3.55008 2.32294L3.62728 2.63396L3.42784 2.44278L3.2284 2.63396L3.3056 2.32294L3.10616 2.13176H3.35278L3.42784 1.82074ZM4.81964 1.82074L4.8947 2.13176H5.14132L4.94188 2.32294L5.01694 2.63396L4.81964 2.44278L4.6202 2.63396L4.69526 2.32294L4.49796 2.13176H4.74244L4.81964 1.82074ZM6.2093 1.82074L6.2865 2.13176H6.53098L6.33154 2.32294L6.40874 2.63396L6.2093 2.44278L6.012 2.63396L6.08706 2.32294L5.88762 2.13176H6.13638L6.2093 1.82074ZM7.6011 1.82074L7.67616 2.13176H7.92278L7.72334 2.32294L7.79839 2.63396L7.6011 2.44278L7.40166 2.63396L7.47671 2.32294L7.27942 2.13176H7.52389L7.6011 1.82074ZM1.34121 2.60542L1.41841 2.92215H1.66289L1.46559 3.11333L1.54065 3.42435L1.34121 3.23032L1.14391 3.42435L1.21897 3.11047L1.01953 2.9193H1.2683L1.34121 2.60542ZM2.73301 2.60542L2.80807 2.9193H3.05469L2.85525 3.11047L2.93031 3.42149L2.73301 3.22746L2.53357 3.42149L2.60863 3.10762L2.41133 2.91644H2.65581L2.73301 2.60542ZM4.12267 2.60542L4.19987 2.9193H4.4422L4.24491 3.11047L4.31996 3.42149L4.12052 3.22746L3.92323 3.42149L3.99829 3.10762L3.79884 2.91644H4.04546L4.12267 2.60542ZM5.51447 2.60542L5.58953 2.9193H5.83615L5.63671 3.11047L5.71391 3.42149L5.51447 3.22746L5.31503 3.42149L5.39223 3.10762L5.19279 2.91644H5.43727L5.51447 2.60542ZM6.90412 2.60542L6.98133 2.9193H7.2258L7.02851 3.11047L7.10357 3.42149L6.90412 3.22746L6.70683 3.42149L6.78189 3.10762L6.58459 2.91644H6.82907L6.90412 2.60542ZM8.29593 2.60542L8.37098 2.9193H8.61761L8.41816 3.11047L8.49537 3.42149L8.29593 3.22746L8.09648 3.42149L8.17369 3.10762L7.97425 2.91644H8.22087L8.29593 2.60542ZM2.03818 3.39296L2.11324 3.70398H2.35986L2.16042 3.89516L2.23548 4.20903L2.03818 4.015L1.83874 4.20618L1.9138 3.89516L1.7165 3.70398H1.96098L2.03818 3.39296ZM3.42784 3.39296L3.50504 3.70398H3.74952L3.55008 3.89516L3.62728 4.20903L3.42784 4.015L3.2284 4.20618L3.3056 3.89516L3.10616 3.70398H3.35278L3.42784 3.39296ZM4.81964 3.39296L4.8947 3.70398H5.14132L4.94188 3.89516L5.01694 4.20903L4.81964 4.015L4.6202 4.20618L4.69526 3.89516L4.49796 3.70398H4.74244L4.81964 3.39296ZM6.2093 3.39296L6.2865 3.70398H6.53098L6.33368 3.89516L6.40874 4.20903L6.2093 4.015L6.012 4.20618L6.08706 3.89516L5.88762 3.70398H6.13638L6.2093 3.39296ZM7.6011 3.39296L7.67616 3.70398H7.92278L7.72334 3.89516L7.79839 4.20903L7.6011 4.015L7.40166 4.20618L7.47671 3.89516L7.27942 3.70398H7.52389L7.6011 3.39296ZM1.34121 4.1805L1.41841 4.49152H1.66289L1.46559 4.68269L1.54065 4.99657L1.34121 4.80254L1.14391 4.99371L1.21897 4.68269L1.01953 4.49152H1.2683L1.34121 4.1805ZM2.73301 4.1805L2.80807 4.49152H3.05469L2.85525 4.68269L2.93031 4.99371L2.73301 4.80254L2.53357 4.99371L2.60863 4.68269L2.41133 4.49152H2.65581L2.73301 4.1805ZM4.12267 4.1805L4.19987 4.49152H4.4422L4.24491 4.68269L4.31996 4.99657L4.12052 4.80254L3.92323 4.99371L3.99829 4.68269L3.79884 4.49152H4.04546L4.12267 4.1805ZM5.51447 4.1805L5.58953 4.49152H5.83615L5.63671 4.68269L5.71391 4.99657L5.51447 4.80254L5.31503 4.99371L5.39223 4.68269L5.19279 4.49152H5.43727L5.51447 4.1805ZM6.90412 4.1805L6.98133 4.49152H7.2258L7.02851 4.68269L7.10357 4.99657L6.90412 4.80254L6.70683 4.99371L6.78189 4.68269L6.58459 4.49152H6.82907L6.90412 4.1805ZM8.29593 4.1805L8.37098 4.49152H8.61761L8.41816 4.68269L8.49537 4.99657L8.29593 4.80254L8.09648 4.99371L8.17369 4.68269L7.97425 4.49152H8.22087L8.29593 4.1805ZM2.03818 4.96803L2.11324 5.27905H2.35986L2.16042 5.47023L2.23548 5.78125L2.03818 5.58722L1.83874 5.78125L1.9138 5.46738L1.7165 5.2762H1.96098L2.03818 4.96803ZM3.42784 4.96803L3.50504 5.27905H3.74952L3.55008 5.47023L3.62728 5.78125L3.42784 5.58722L3.2284 5.78125L3.3056 5.46738L3.10616 5.2762H3.35278L3.42784 4.96803ZM4.81964 4.96803L4.8947 5.27905H5.14132L4.94188 5.47023L5.01694 5.78125L4.81964 5.58722L4.6202 5.78125L4.69526 5.46738L4.49796 5.2762H4.74244L4.81964 4.96803ZM6.2093 4.96803L6.2865 5.27905H6.53098L6.33368 5.47023L6.40874 5.78125L6.2093 5.58722L6.012 5.78125L6.08706 5.46738L5.88762 5.2762H6.13638L6.2093 4.96803ZM7.6011 4.96803L7.67616 5.27905H7.92278L7.72334 5.47023L7.79839 5.78125L7.6011 5.58722L7.40166 5.78125L7.47671 5.46738L7.27942 5.2762H7.52389L7.6011 4.96803ZM1.34121 5.75272L1.41841 6.06659H1.66289L1.46559 6.25777L1.54065 6.56593L1.34121 6.37476L1.14391 6.56593L1.21897 6.25491L1.01953 6.06374H1.2683L1.34121 5.75272ZM2.73301 5.75272L2.80807 6.06659H3.05469L2.85525 6.25777L2.93245 6.56593L2.73301 6.37476L2.53357 6.56593L2.61077 6.25491L2.41133 6.06374H2.65581L2.73301 5.75272ZM4.12267 5.75272L4.19987 6.06659H4.4422L4.24491 6.25777L4.31996 6.56593L4.12052 6.37476L3.92323 6.56593L3.99829 6.25491L3.79884 6.06374H4.04546L4.12267 5.75272ZM5.51447 5.75272L5.58953 6.06659H5.83615L5.63671 6.25777L5.71391 6.56593L5.51447 6.37476L5.31503 6.56593L5.39223 6.25491L5.19279 6.06374H5.43727L5.51447 5.75272ZM6.90412 5.75272L6.98133 6.06659H7.2258L7.02851 6.25777L7.10357 6.56593L6.90412 6.37476L6.70683 6.56593L6.78189 6.25491L6.58459 6.06374H6.82907L6.90412 5.75272ZM8.29593 5.75272L8.37098 6.06659H8.61761L8.41816 6.25777L8.49537 6.56593L8.29593 6.37476L8.09648 6.56593L8.17369 6.25491L7.97425 6.06374H8.22087L8.29593 5.75272ZM2.03818 6.54025L2.11324 6.85127H2.35986L2.16042 7.04245L2.23548 7.35632L2.03818 7.16229L1.83874 7.35347L1.9138 7.04245L1.7165 6.85127H1.96098L2.03818 6.54025ZM3.42784 6.54025L3.50504 6.85127H3.74952L3.55008 7.04245L3.62728 7.35632L3.42784 7.16229L3.2284 7.35347L3.3056 7.04245L3.10616 6.85127H3.35278L3.42784 6.54025ZM4.81964 6.54025L4.8947 6.85127H5.14132L4.94188 7.04245L5.01694 7.35632L4.81964 7.16229L4.6202 7.35347L4.69526 7.04245L4.49796 6.85127H4.74244L4.81964 6.54025ZM6.2093 6.54025L6.2865 6.85127H6.53098L6.33368 7.04245L6.40874 7.35632L6.2093 7.16229L6.012 7.35347L6.08706 7.04245L5.88762 6.85127H6.13638L6.2093 6.54025ZM7.6011 6.54025L7.67616 6.85127H7.92278L7.72334 7.04245L7.79839 7.35632L7.6011 7.16229L7.40166 7.35347L7.47671 7.04245L7.27942 6.85127H7.52389L7.6011 6.54025ZM1.34121 7.32779L1.41841 7.63881H1.66289L1.46559 7.82999L1.54065 8.14101L1.34121 7.94983L1.14391 8.14101L1.21897 7.82713L1.01953 7.63596H1.2683L1.34121 7.32779ZM2.73301 7.32779L2.80807 7.63881H3.05469L2.85525 7.82999L2.93245 8.14101L2.73301 7.94983L2.53357 8.14101L2.61077 7.82713L2.41133 7.63596H2.65581L2.73301 7.32779ZM4.12267 7.32779L4.19987 7.63881H4.4422L4.2492 7.82999L4.32425 8.14101L4.12481 7.94983L3.92752 8.14101L4.00257 7.82713L3.80313 7.63596H4.04975L4.12267 7.32779ZM5.51447 7.32779L5.58953 7.63881H5.83615L5.63671 7.82999L5.71391 8.14101L5.51447 7.94983L5.31503 8.14101L5.39223 7.82713L5.19279 7.63596H5.43727L5.51447 7.32779ZM6.90412 7.32779L6.98133 7.63881H7.2258L7.02851 7.82999L7.10357 8.14101L6.90412 7.94983L6.70683 8.14101L6.78189 7.82713L6.58459 7.63596H6.82907L6.90412 7.32779ZM8.29593 7.32779L8.37098 7.63881H8.61761L8.41816 7.82999L8.49537 8.14101L8.29593 7.94983L8.09648 8.14101L8.17369 7.82713L7.97425 7.63596H8.22087L8.29593 7.32779Z",
                    fill: "white"
                })]
            })]
        }), c.jsx("defs", {
            children: c.jsx("clipPath", {
                id: "clip0_208_1732",
                children: c.jsx("rect", {
                    x: "0.640625",
                    y: "0.695312",
                    width: "14.64",
                    height: "14.6094",
                    rx: "7.30469",
                    fill: "white"
                })
            })
        })]
    }),
    ha = ({
        clientCardData: e,
        stripe: t,
        formValues: n,
        resetWalletData: o,
        handlePaymentSubmit: r,
        setIsConfirmedPayment: a,
        setConfirmationToken: s
    }) => {
        const [u, l] = f.useState(!1), [d, m] = f.useState(!1), p = f.useRef(null), v = {
            buttonHeight: 54,
            buttonType: {
                applePay: "plain",
                googlePay: "plain"
            },
            buttonTheme: {
                applePay: "white-outline",
                googlePay: "white"
            },
            paymentMethodOrder: ["apple_pay", "google_pay"]
        }, g = {
            layout: "tabs",
            paymentMethodOrder: ["card"],
            fields: {
                billingDetails: {
                    phone: "auto",
                    email: "auto",
                    address: {
                        country: "auto",
                        postalCode: "auto"
                    }
                }
            }
        };
        return c.jsx(c.Fragment, {
            children: e ? c.jsxs("div", {
                className: "u-flex u-items-center u-justify-between u-gap-2",
                children: [c.jsxs("div", {
                    className: "c-body-reg-blue u-flex u-gap-2 u-break-words u-pt-[9px]",
                    children: [c.jsx(Wt, {
                        brand: e.card_type
                    }), e && e.wallet_type && c.jsxs(c.Fragment, {
                        children: ["+", c.jsx(Wt, {
                            brand: e.wallet_type
                        })]
                    }), "•••• •••• •••• ", e.last4]
                }), c.jsx("button", {
                    className: "u-rounded-sm u-border u-border-brand-onyx u-px-4 u-py-1",
                    type: "button",
                    onClick: o,
                    children: "Remove"
                })]
            }) : c.jsxs("div", {
                children: [c.jsxs("div", {
                    className: "u-flex u-w-full u-gap-3 to-sm:u-flex-wrap to-sm:u-gap-0",
                    children: [u && !d && c.jsx("div", {
                        className: "u-mb-5 u-w-1/2 to-sm:u-order-2 to-sm:u-w-full",
                        children: c.jsxs("button", {
                            type: "button",
                            className: "u-flex u-h-14 u-w-full u-items-center u-justify-center u-gap-4 u-rounded-lg u-border u-border-secondary u-bg-white u-text-xl u-leading-5 hover:u-bg-grey-75",
                            children: [c.jsx(At, {
                                icon: "credit-card"
                            }), "Credit Card"]
                        })
                    }), c.jsx("div", {
                        className: "u-mb-5 u-w-1/2 to-sm:u-order-1 to-sm:u-w-full",
                        children: c.jsx(mr, {
                            options: v,
                            onReady: x => {
                                "availablePaymentMethods" in x ? l(!0) : l(!1)
                            },
                            onConfirm: () => {
                                n.vehicle_model && n.vehicle_type && (m(!0), r())
                            },
                            onCancel: () => {
                                m(!1)
                            }
                        })
                    })]
                }), c.jsxs("div", {
                    id: "checkout",
                    className: `u-w-full ${d?"u-invisible":"u-visible"}`,
                    children: [c.jsx(Ln, {
                        onLoaderStart: () => {
                            m(!0)
                        },
                        onReady: () => {
                            m(!1)
                        },
                        onChange: x => {
                            n.vehicle_model && n.vehicle_type && x.value.type === "card" && p.current && (a(x.complete), x.complete ? p.current.click() : s(null))
                        },
                        options: g
                    }), c.jsx("button", {
                        className: "u-hidden",
                        ref: p,
                        type: "button",
                        onClick: r,
                        disabled: !t,
                        children: "Submit"
                    })]
                })]
            })
        })
    },
    ga = () => c.jsxs("div", {
        className: "u-scout-mobile-devices:mb-3 u-w-full u-justify-end to-md:u-text-left to-sm:u-order-2",
        children: [c.jsxs("p", {
            className: "c-reserve-caption-reg-grey700 u-mb-[18px] to-md:u-max-w-full",
            children: ["By continuing my reservation, I have read and I agree to the", " ", c.jsx("a", {
                target: "_blank",
                className: "c-reserve-caption-med-grey700",
                href: "/legal/reservation",
                title: "",
                rel: "noreferrer",
                children: "Reservation Agreement"
            }), ",", " ", c.jsx("a", {
                target: "_blank",
                className: "c-reserve-caption-med-grey700",
                href: "/legal/terms-of-use",
                title: "",
                rel: "noreferrer",
                children: "Scout Terms"
            }), ", and", " ", c.jsx("a", {
                target: "_blank",
                className: "c-reserve-caption-med-grey700",
                href: "/legal/privacy",
                title: "",
                rel: "noreferrer",
                children: "Data Privacy Notice."
            }), " ", "Pricing, available options, and specs are subject to change until we build your actual vehicle."]
        }), c.jsxs("p", {
            className: "c-reserve-caption-reg-grey700",
            children: [c.jsx("sup", {
                children: "1"
            }), " Pricing is for U.S. market only. Entry model price reflects targeted starting price with incentives. Available incentives at the time of sale may vary based on current federal, state, and local offerings and are subject to change without notice; this may impact the final purchase price. Retail price reflects lowest starting Manufacturer Suggested Retail Price (MSRP). Price does not include any federal, state and/or local tax subsidies or incentives that may be available. All prices are subject to change and excludes taxes, title, license and other fees, as well as certain premium features and add-ons."]
        }), c.jsxs("p", {
            className: "c-reserve-caption-reg-grey700",
            children: [c.jsx("sup", {
                children: "2"
            }), " Initial production targeted to start in 2027 based on current projections, and is subject to change. Actual availability may differ."]
        }), c.jsxs("p", {
            className: "c-reserve-caption-reg-grey700",
            children: [c.jsx("sup", {
                children: "3"
            }), " Manufacturer's projected estimate based on internal targets; EPA estimates will be provided when available. Range varies with temperature, driving habits, charging, and battery condition."]
        }), c.jsxs("p", {
            className: "c-reserve-caption-reg-grey700",
            children: [c.jsx("sup", {
                children: "4"
            }), ` "Refuel anywhere" refers to the vehicle's ability to be charged at electric charging stations or powered by a gasoline generator. Charging times and availability may vary by location. Always consult the owner's manual for specific operating instructions and limitations.`]
        })]
    }); /*! js-cookie v3.0.5 | MIT */
function qe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) e[o] = n[o]
    }
    return e
}
var va = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function It(e, t) {
    function n(r, a, s) {
        if (!(typeof document > "u")) {
            s = qe({}, t, s), typeof s.expires == "number" && (s.expires = new Date(Date.now() + s.expires * 864e5)), s.expires && (s.expires = s.expires.toUTCString()), r = encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var u = "";
            for (var l in s) s[l] && (u += "; " + l, s[l] !== !0 && (u += "=" + s[l].split(";")[0]));
            return document.cookie = r + "=" + e.write(a, r) + u
        }
    }

    function o(r) {
        if (!(typeof document > "u" || arguments.length && !r)) {
            for (var a = document.cookie ? document.cookie.split("; ") : [], s = {}, u = 0; u < a.length; u++) {
                var l = a[u].split("="),
                    d = l.slice(1).join("=");
                try {
                    var m = decodeURIComponent(l[0]);
                    if (s[m] = e.read(d, m), r === m) break
                } catch {}
            }
            return r ? s[r] : s
        }
    }
    return Object.create({
        set: n,
        get: o,
        remove: function(r, a) {
            n(r, "", qe({}, a, {
                expires: -1
            }))
        },
        withAttributes: function(r) {
            return It(this.converter, qe({}, this.attributes, r))
        },
        withConverter: function(r) {
            return It(qe({}, this.converter, r), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(t)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var gt = It(va, {
    path: "/"
});
const xa = Do(`
	mutation CreateReservationConsumer($createReservationInput: CreateReservationInput) {
		createReservationConsumer(
			create_reservation_input: $createReservationInput
		) {
			data {
				pending_reservation_id
                client_secret
			}
			STATUS {
				NOTIFICATION
			}
		}
	}
`),
    ya = new Set(J.STRIPE_ERROR_CODE_GREEN_LIST),
    La = ({
        setPayment: e
    }) => {
        const t = dr(),
            n = ar(),
            [o, r] = f.useState(!1),
            [a, s] = f.useState(!1),
            [u, l] = f.useState(!1),
            [d, m] = f.useState(null),
            [p, v] = f.useState(null),
            [g] = Vo(xa),
            i = Ro({
                initialValues: {
                    first_name: "",
                    last_name: "",
                    email: "",
                    vehicle_model: "",
                    vehicle_type: "",
                    confirm_email: "",
                    phone: "",
                    country: "United States +1",
                    delivery_country: "United States",
                    pending_reservation_id: null,
                    sms_notification: !1,
                    email_notification: !1,
                    affiliate_code: null,
                    location: null
                },
                validationSchema: da,
                onSubmit: () => {
                    l(!0), R()
                }
            });
        f.useEffect(() => {
            const h = new URLSearchParams(window.location.search),
                y = h.get("email"),
                S = h.get("location");
            if (y && S) gt.set("affiliateUser", JSON.stringify({
                email: y,
                location: S
            }), {
                expires: 30
            }), i.setFieldValue("affiliate_code", y), i.setFieldValue("location", S);
            else if (gt.get("affiliateUser")) {
                const E = gt.get("affiliateUser");
                if (E) {
                    const _ = JSON.parse(E);
                    i.setFieldValue("affiliate_code", _.email), i.setFieldValue("location", _.location)
                }
            }
        }, []), f.useEffect(() => {
            (async () => {
                try {
                    const h = await fetch(document.location.href, {
                            method: "HEAD"
                        }),
                        S = Object.fromEntries(h.headers.entries())["cloudfront-viewer-country"] === "CA" ? "Canada" : "United States";
                    i.setFieldValue("delivery_country", S), L(S)
                } catch {}
            })()
        }, []), f.useEffect(() => {
            const h = i.values.delivery_country;
            if (h) {
                const y = w(h);
                i.setFieldValue("country", y)
            }
        }, [i.values.delivery_country]);
        const L = h => {
                const y = h === "Canada" ? {
                    amount: ve.RESERVATION.CAD_AMOUNT_PENNY,
                    currency: "cad"
                } : {
                    amount: ve.RESERVATION.US_AMOUNT_PENNY,
                    currency: "usd"
                };
                e(y)
            },
            C = (h, y) => {
                const S = new CustomEvent(h, {
                    detail: y
                });
                document.dispatchEvent(S)
            },
            w = h => {
                const y = Xt.find(S => S.name === h);
                return y ? `${y.name} ${y.cc}` : ""
            },
            b = async h => {
                g({
                    variables: h,
                    onCompleted: y => {
                        if (y && y?.createReservationConsumer) {
                            const S = y.createReservationConsumer.data,
                                E = S?.client_secret ?? "",
                                _ = S ? S.pending_reservation_id : null;
                            k(E, _)
                        }
                    },
                    onError: ({
                        networkError: y,
                        graphQLErrors: S
                    }) => {
                        if (l(!1), S && S.length > 0 && "extensions" in S[0]) {
                            const E = S[0].extensions?.STATUS;
                            if (E && typeof E == "object")
                                if ("NOTIFICATION" in E && Array.isArray(E.NOTIFICATION) && E.NOTIFICATION.length > 0) {
                                    const _ = E.NOTIFICATION[0];
                                    C("error-modal-event", {
                                        open: !0,
                                        ..._
                                    })
                                } else Object.entries(E).map(([_, Y]) => {
                                    const W = Y;
                                    return i.setFieldError(_, W.join(", ")), `{${_}: ${W}}`
                                })
                        } else y ? C("error-modal-event", {
                            open: !0,
                            title: V.COMMON_ERROR,
                            message: V.NETWORK_ERROR
                        }) : C("error-modal-event", {
                            open: !0,
                            title: V.COMMON_ERROR,
                            message: S?.[0]?.message
                        })
                    }
                })
            }, R = async () => {
                const h = {
                    createReservationInput: {
                        email: i.values.email,
                        first_name: i.values.first_name,
                        last_name: i.values.last_name,
                        phone: i.values.phone,
                        delivery_country: i.values.delivery_country,
                        car_model: i.values.vehicle_model,
                        sub_model: i.values.vehicle_type,
                        country: i.values.country?.split("+")[0]?.trim(),
                        country_code: `+${i.values.country?.split("+")[1]}`,
                        pending_reservation_id: i.values.pending_reservation_id ? i.values.pending_reservation_id : null,
                        sms_notification: i.values.sms_notification,
                        email_notification: i.values.email_notification,
                        affiliate_code: i.values.affiliate_code ? i.values.affiliate_code : null,
                        location: i.values.location ? i.values.location : null
                    }
                };
                await b(h)
            }, k = async (h, y) => {
                if (t && d) {
                    const {
                        error: S
                    } = await t.confirmPayment({
                        clientSecret: h,
                        confirmParams: {
                            confirmation_token: d,
                            return_url: `${window.location.origin}/reserve/success`
                        }
                    });
                    if (S) {
                        A(), T();
                        const E = ya.has(S.code ?? "") ? S.message : S.code === "payment_intent_confirmation_token_invalid" ? V.PAYMENT_INTENT_INVALID_ERROR : V.PAYMENT_GENERAL_ERROR;
                        C("error-modal-event", {
                            open: !0,
                            title: V.COMMON_ERROR,
                            message: E ?? V.PAYMENT_GENERAL_ERROR
                        }), y !== null && (i.values.pending_reservation_id = y), l(!1)
                    }
                }
            }, T = () => {
                v(null), m(null), s(!1)
            }, A = () => {
                const h = n && n.getElement(Ln);
                h && h.clear()
            }, O = async () => {
                if (!t || !n) return;
                const {
                    error: h
                } = await n.submit();
                if (h) {
                    A(), C("error-modal-event", {
                        open: !0,
                        title: V.COMMON_ERROR,
                        message: "Payment information not submitted yet."
                    });
                    return
                }
                const {
                    error: y,
                    confirmationToken: S
                } = await t.createConfirmationToken({
                    elements: n
                });
                if (y) {
                    A(), C("error-modal-event", {
                        open: !0,
                        title: V.COMMON_ERROR,
                        message: y?.message ?? V.PAYMENT_GENERAL_ERROR
                    });
                    return
                }
                return m(S.id), B(S)
            }, B = async h => {
                if (h.payment_method_preview.card && h.payment_method_preview.card.wallet !== null) {
                    const y = h.payment_method_preview?.card,
                        S = {
                            card_type: y.brand,
                            last4: y.last4,
                            wallet_type: y.wallet?.type ?? null
                        };
                    v(S), s(!0)
                }
            }, j = h => h?.map((y, S) => c.jsxs("option", {
                value: `${y?.name} ${y?.cc}`,
                children: [y?.name, " ", y.cc]
            }, S)), H = h => {
                if (!h) return h;
                const y = h.replace(/[^\d]/g, ""),
                    S = y.length;
                return S < 4 ? y : S < 7 ? `(${y.slice(0,3)}) ${y.slice(3)}` : `(${y.slice(0,3)}) ${y.slice(3,6)}-${y.slice(6,10)}`
            }, M = async h => {
                const y = h?.phone || "";
                if (h?.country) {
                    let S = y;
                    await i.validateField("phone"), (h?.country === "United States +1" || h?.country === "Canada +1") && (S = H(y)), i.setFieldValue("phone", S), await i.validateField("phone")
                }
            };
        f.useEffect(() => {
            i.dirty && C("reservation-form-event", {
                open: !0,
                formik: i
            })
        }, [i.dirty]);
        const D = h => {
                document.getElementById(h)?.click()
            },
            N = h => {
                i.setFieldValue(h, "")
            };
        return c.jsx("section", {
            className: "reserve-form u-pb-20 u-pt-16",
            style: {
                backgroundImage: "url(https://images.ctfassets.net/bi0eniwfxrs8/3AGRXHp2CBMi6IvLwDPPJO/f6b8badb675c5ff1a8c2bf93b7bb8b4d/community-bg.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            },
            children: c.jsx("div", {
                className: `u-container-small ${u?"overlay":""}`,
                children: c.jsx("form", {
                    id: "form",
                    onSubmit: i.handleSubmit,
                    children: c.jsxs("div", {
                        className: "u-py-0",
                        children: [c.jsx("a", {
                            href: "/",
                            id: "reservation_form_visible",
                            tabIndex: 0,
                            className: "focus:u-shadow-none focus-visible:u-shadow-none",
                            children: c.jsx("img", {
                                className: "reserve-outer-logo u-mb-9 u-mt-0.5",
                                src: jo,
                                width: 132,
                                height: 42
                            })
                        }), c.jsx("h1", {
                            className: "c-h1 u-max-w-[450px]",
                            children: J.RESERVATION_TITLE
                        }), c.jsx("p", {
                            className: "c-body-sub-reg u-mb-[30px] sm:u-mb-9 md:u-mb-[20px]",
                            children: `${J.RESERVATION_SUBTITLE_PREFIX} ${i.values.delivery_country==="Canada"?ve.RESERVATION.CAD_AMOUNT_DISPLAY:ve.RESERVATION.US_AMOUNT_DISPLAY}`
                        }), c.jsxs("div", {
                            className: "u-my-[30px] sm:u-mb-12 sm:u-mt-[46px] md:u-mt-[38px]",
                            children: [c.jsx("h4", {
                                className: "c-technical -large -large-medium u-mb-1",
                                children: J.VEHICLE_DETAILS.VEHICLE_MODEL_TITLE
                            }), c.jsx("p", {
                                className: "c-body-sub-reg u-mb-[30px] sm:u-mb-9 md:u-mb-[20px]",
                                children: J.VEHICLE_DETAILS.VEHICLE_MODEL_DESCRIPTION
                            }), c.jsx("div", {
                                className: "u-flex u-flex-wrap u-gap-x-1 u-gap-y-[34px] to-sm:u-gap-y-4",
                                children: J.VEHICLE_DETAILS.VEHICLE_MODEL.map((h, y) => c.jsx(Po, {
                                    name: "vehicle_model",
                                    modelValue: h.VALUE,
                                    currentModel: i.values.vehicle_model,
                                    onChange: i.handleChange,
                                    imageSrc: h.IMAGE,
                                    options: h.OPTIONS
                                }, y))
                            })]
                        }), c.jsxs("div", {
                            className: "u-mb-[44px]",
                            children: [c.jsx("h4", {
                                className: "c-technical -large -large-medium u-mb-1 sm:u-mb-[18px]",
                                children: J.VEHICLE_DETAILS.VEHICLE_ENERGY_TITLE
                            }), c.jsx("div", {
                                className: "u-flex u-flex-wrap u-divide-y u-rounded-lg u-bg-white u-px-3 to-sm:u-mt-7",
                                children: J.VEHICLE_DETAILS.VEHICLE_ENERGY_MODEL.map((h, y) => c.jsx(Oo, {
                                    name: "vehicle_type",
                                    subModelValue: h.VALUE,
                                    currentSubModel: i.values.vehicle_type,
                                    onChange: i.handleChange,
                                    title: h.TITLE,
                                    range: h.RANGE,
                                    descriptionList: h.DESCRIPTION
                                }, y))
                            })]
                        }), c.jsxs("div", {
                            className: `to-md:pt-[14px] u-mb-14 u-flex u-flex-wrap u-items-start u-justify-between u-pt-[13px] to-sm:u-mb-6 ${u?"u-pointer-events-none u-opacity-50":""}`,
                            children: [c.jsxs("div", {
                                className: "u-w-3/5",
                                children: [c.jsx("small", {
                                    className: "c-technical -large -large-medium u-mb-2 u-inline-block",
                                    children: J.FEES_TITLE
                                }), c.jsx("div", {
                                    className: "c-h3-black u-mb-[6px] to-sm:u-mb-[2px]",
                                    children: c.jsx("span", {
                                        children: i.values.delivery_country === "Canada" ? ve.RESERVATION.CAD_AMOUNT_DISPLAY : ve.RESERVATION.US_AMOUNT_DISPLAY
                                    })
                                })]
                            }), c.jsx("div", {
                                className: "u-w-2/5",
                                children: c.jsx("div", {
                                    className: `u-relative u-mt-[30px] u-flex u-w-full u-flex-wrap u-justify-end to-sm:u-mt-6 ${d?"select-disable":""}`,
                                    children: c.jsxs(sa, {
                                        name: "delivery_country",
                                        onValueChange: h => {
                                            const y = h;
                                            i.setFieldValue("delivery_country", y), i.setFieldValue("country", y), M({
                                                country: `${y} +1`,
                                                phone: i.values.phone
                                            }), L(y)
                                        },
                                        open: o,
                                        onOpenChange: r,
                                        value: i.values.delivery_country,
                                        children: [c.jsxs(wo, {
                                            className: "u-relative u-right-2 u-w-[91px] u-gap-1 u-pr-0 to-sm:u-right-1",
                                            children: [c.jsx(aa, {}), c.jsx(ia, {
                                                asChild: !0,
                                                children: o ? c.jsx(Fo, {
                                                    className: "u-size-4"
                                                }) : c.jsx(Bo, {
                                                    className: "u-size-4"
                                                })
                                            })]
                                        }), c.jsx(Co, {
                                            className: "u-border u-border-gray-200 u-bg-white u-text-base u-shadow-md",
                                            children: J.DELIVERY_COUNTRY.map(h => c.jsx(So, {
                                                value: `${h.name}`,
                                                className: "focus:u-outline-0 focus-visible:u-shadow-dark-inner focus-visible:u-outline-0",
                                                children: c.jsxs("div", {
                                                    className: "u-flex u-items-center u-gap-[10px] u-font-medium u-outline-none",
                                                    children: [c.jsx(At, {
                                                        icon: h.name === "Canada" ? "canada" : "usa"
                                                    }), h.label]
                                                })
                                            }, h.name))
                                        })]
                                    })
                                })
                            }), c.jsx("p", {
                                className: "c-body-reg-blue u-max-w-[60%] to-sm:u-max-w-full",
                                children: J.FEES_DESCRIPTION
                            })]
                        }), c.jsxs("div", {
                            className: `${i.values.vehicle_model&&i.values.vehicle_type?"":"disabled-form u-pointer-events-none u-cursor-not-allowed u-opacity-50"} `,
                            children: [c.jsxs("div", {
                                className: "u-mb-20",
                                children: [c.jsx("h2", {
                                    className: "c-technical -large -large-medium u-mb-4",
                                    children: J.PAYMENT_TITLE
                                }), c.jsx("div", {
                                    className: `u-my-5 ${u&&"overlay"}`,
                                    children: c.jsx(ha, {
                                        clientCardData: p,
                                        stripe: t,
                                        formValues: {
                                            vehicle_model: i.values.vehicle_model,
                                            vehicle_type: i.values.vehicle_type
                                        },
                                        resetWalletData: T,
                                        handlePaymentSubmit: O,
                                        setIsConfirmedPayment: s,
                                        setConfirmationToken: m
                                    })
                                })]
                            }), c.jsx("h2", {
                                className: "c-technical -large -large-medium u-mb-[13px]",
                                children: J.USER_DETAILS_TITLE
                            }), c.jsxs("div", {
                                className: `fieldset u-flex u-flex-wrap u-gap-x-1 u-gap-y-[26px] ${u&&"overlay"}`,
                                children: [c.jsxs("div", {
                                    className: `u-field u-after:bg-warning u-relative u-w-full sm:u-w-[calc(50%-2px)] ${i?.errors.email&&i?.touched.email&&"input-error"} ${i.values.email}`,
                                    children: [c.jsx(Ve, {
                                        id: "reservation-email",
                                        type: "email",
                                        name: "email",
                                        label: "Email",
                                        onChange: i.handleChange,
                                        onBlur: i.handleBlur,
                                        value: i.values.email,
                                        closeAction: {
                                            icon: !!i.values.email,
                                            action: N
                                        }
                                    }), i?.errors.email && i?.touched.email && c.jsx(Be, {
                                        errorMessage: i?.errors.email
                                    })]
                                }), c.jsxs("div", {
                                    className: `field u-after:bg-warning u-relative u-w-full sm:u-w-[calc(50%-2px)] ${i?.errors.confirm_email&&i?.touched.confirm_email&&"input-error"} ${i.values.confirm_email}`,
                                    children: [c.jsx(Ve, {
                                        id: "reservation-confirm-email",
                                        type: "email",
                                        name: "confirm_email",
                                        label: "Confirm email",
                                        onChange: i.handleChange,
                                        onBlur: i.handleBlur,
                                        value: i.values.confirm_email,
                                        closeAction: {
                                            icon: !!i.values.confirm_email,
                                            action: N
                                        }
                                    }), i?.errors.confirm_email && i?.touched.confirm_email && c.jsx(Be, {
                                        errorMessage: i?.errors.confirm_email
                                    })]
                                }), c.jsxs("div", {
                                    className: `field u-after:bg-warning u-relative u-w-full sm:u-w-[calc(50%-2px)] ${i?.errors.first_name&&i?.touched.first_name&&"input-error"} ${i.values.first_name}`,
                                    children: [c.jsx(Ve, {
                                        id: "reservation-first-name",
                                        type: "text",
                                        name: "first_name",
                                        label: "First name",
                                        onChange: i.handleChange,
                                        onBlur: i.handleBlur,
                                        value: i.values.first_name,
                                        closeAction: {
                                            icon: !!i.values.first_name,
                                            action: N
                                        }
                                    }), i?.errors.first_name && i?.touched.first_name && c.jsx(Be, {
                                        errorMessage: i?.errors.first_name
                                    })]
                                }), c.jsxs("div", {
                                    className: `field u-after:bg-warning u-relative u-w-full sm:u-w-[calc(50%-2px)] ${i?.errors.last_name&&i?.touched.last_name&&"input-error"} ${i.values.last_name}`,
                                    children: [c.jsx(Ve, {
                                        id: "reservation-last-name",
                                        type: "text",
                                        name: "last_name",
                                        label: "Last name",
                                        onChange: i.handleChange,
                                        onBlur: i.handleBlur,
                                        value: i.values.last_name,
                                        closeAction: {
                                            icon: !!i.values.last_name,
                                            action: N
                                        }
                                    }), i?.errors.last_name && i?.touched.last_name && c.jsx(Be, {
                                        errorMessage: i?.errors.last_name
                                    })]
                                }), c.jsxs("div", {
                                    className: `field u-after:bg-warning u-relative u-w-full sm:u-w-[calc(33%-4px)] ${i?.errors.country&&i?.touched.country&&"input-error"} ${i.values.country}`,
                                    children: [c.jsxs("select", {
                                        id: "reservation-country-region",
                                        className: `c-select selected ${i.touched.country&&i.values.country?"":"selected"}`,
                                        onChange: h => {
                                            h.preventDefault();
                                            const y = h.target.value;
                                            i.setFieldValue("country", y), M({
                                                country: y,
                                                phone: i.values.phone
                                            })
                                        },
                                        value: i.values.country,
                                        name: "country",
                                        children: [c.jsx("option", {
                                            value: "",
                                            disabled: !0,
                                            hidden: !0,
                                            children: " "
                                        }), j(Xt)]
                                    }), c.jsx("label", {
                                        htmlFor: "reservation-country-region",
                                        className: "c-floating-label u-origin-0",
                                        children: "Country / Region"
                                    })]
                                }), c.jsxs("div", {
                                    className: `field u-after:bg-warning u-relative u-w-full sm:u-w-[67%] ${i?.errors.phone&&i?.touched.phone&&"input-error"} ${i.values.phone}`,
                                    children: [c.jsx(Ve, {
                                        id: "reservation-phone",
                                        type: "text",
                                        name: "phone",
                                        label: "Phone",
                                        onChange: h => {
                                            i.setFieldValue("phone", h.target.value), M({
                                                country: i.values.country,
                                                phone: h.target.value
                                            })
                                        },
                                        onBlur: i.handleBlur,
                                        value: i.values.phone,
                                        closeAction: {
                                            icon: !!i.values.phone,
                                            action: N
                                        }
                                    }), i?.errors.phone && i?.touched.phone && c.jsx(Be, {
                                        errorMessage: i?.errors.phone
                                    })]
                                })]
                            }), c.jsxs("div", {
                                className: "u-my-6",
                                children: [c.jsx("h6", {
                                    className: "c-body-reg",
                                    children: J.SUBSCRIBE_TITLE
                                }), c.jsx("div", {
                                    className: "c-reservation-sms-check u-mt-2 u-flex u-flex-wrap u-gap-4",
                                    children: J.SUBSCRIBE_TYPE.map((h, y) => c.jsx("div", {
                                        className: "u-flex u-items-center u-gap-2",
                                        children: c.jsxs("div", {
                                            className: "checkbox",
                                            children: [c.jsx("input", {
                                                className: "!u-h-auto !u-p-0",
                                                type: "checkbox",
                                                id: h.ID,
                                                name: h.NAME,
                                                value: h.VALUE,
                                                onChange: i.handleChange
                                            }), " ", c.jsx("label", {
                                                onKeyUp: S => S.key === ve.ENTER && D(h.ID),
                                                tabIndex: 0,
                                                htmlFor: h.ID,
                                                className: "!u-pointer-events-auto !u-transform-none focus-visible:!u-shadow-none focus-visible:u-outline-none focus-visible:u-outline-0 focus-visible:before:u-shadow-dark to-md:!u-top-0",
                                                children: h.LABEL
                                            })]
                                        })
                                    }, y))
                                }), c.jsx("p", {
                                    className: "c-caption-reg-grey700 u-mt-4 u-block u-w-full u-max-w-[510px]",
                                    children: J.SUBSCRIBE_DESCRIPTION
                                })]
                            }), c.jsx("div", {
                                className: "u-pt-[18px]",
                                children: c.jsx("div", {
                                    className: "u-scout-mobile-devices:block u-scout-mobile-devices:text-center u-mb-[29px] u-flex u-flex-wrap u-items-start u-justify-end u-gap-3.5 sm:u-flex-nowrap",
                                    children: c.jsxs("button", {
                                        className: "c-reserve-grey-large-button",
                                        disabled: !(i?.isValid && i?.dirty && a),
                                        children: [u && c.jsx(At, {
                                            icon: "loader"
                                        }), "RESERVE"]
                                    })
                                })
                            })]
                        }), c.jsx("div", {
                            className: "u-pb-6",
                            children: c.jsx(ga, {})
                        })]
                    })
                })
            })
        })
    },
    Fa = ({
        stripePK: e
    }) => {
        const [t] = f.useState(() => Yo(e)), [n, o] = f.useState({
            amount: ve.RESERVATION.US_AMOUNT_PENNY,
            currency: "usd"
        }), r = {
            theme: "flat",
            labels: "floating",
            variables: {
                fontFamily: "scout-sans-regular-stripe, ui-sans-serif, system-ui, sans-serif",
                fontLineHeight: "1.5",
                borderRadius: "8px",
                colorBackground: "#F9F9F9",
                accessibleColorOnColorPrimary: "#262626",
                colorPrimary: "#DBDBDB",
                gridColumnSpacing: "16px"
            },
            rules: {
                ".Block": {
                    backgroundColor: "var(--colorBackground)",
                    boxShadow: "none",
                    padding: "14px"
                },
                ".Input": {
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                    fontFamily: "scout-sans-regular-stripe, ui-sans-serif, system-ui, sans-serif",
                    padding: "5px 12px 8px 12px",
                    backgroundColor: "#F0F0F0",
                    border: "1px solid var(--colorPrimary)",
                    fontWeight: "400",
                    fontSize: "1.25rem"
                },
                ".Input:focus": {
                    border: "1px solid var(--colorPrimary)",
                    boxShadow: "none",
                    backgroundColor: "var(--colorBackground)",
                    fontWeight: "400",
                    fontSize: "1.25rem"
                },
                ".Input:hover": {
                    boxShadow: "none",
                    backgroundColor: "var(--colorBackground)"
                },
                ".Input::placeholder": {
                    color: "#747473",
                    lineHeight: "20px",
                    fontWeight: "400",
                    fontSize: "20px"
                },
                ".Input--invalid": {
                    color: "#1c1c1a",
                    boxShadow: "none",
                    fontWeight: "400",
                    fontSize: "1.25rem",
                    border: "2px solid #C73201"
                },
                ".Input:disabled, .Input--invalid:disabled": {
                    color: "lightgray"
                },
                ".Tab": {
                    padding: "10px 12px 8px 12px",
                    border: "none"
                },
                ".Tab:hover": {
                    border: "none",
                    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)"
                },
                ".Tab--selected, .Tab--selected:focus, .Tab--selected:hover": {
                    border: "none",
                    backgroundColor: "#fff",
                    boxShadow: "0 0 0 1.5px var(--colorPrimary), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)"
                },
                ".Label": {
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                    fontFamily: "scout-sans-regular-stripe, ui-sans-serif, system-ui, sans-serif",
                    color: "#747473",
                    lineHeight: "1.4",
                    fontWeight: "400"
                },
                ".Label--floating": {
                    fontWeight: "350",
                    opacity: "1"
                },
                ".Label--resting": {
                    fontSize: "1.2rem"
                },
                ".Error": {
                    color: "#C73201",
                    fontWeight: "400",
                    lineHeight: "0.75rem",
                    fontSize: "0.875rem",
                    borderColor: "#C73201"
                }
            }
        }, a = {
            mode: "payment",
            amount: n.amount,
            currency: n.currency,
            appearance: r,
            fonts: [{
                family: "scout-sans-regular-stripe",
                src: 'url(/fonts/ScoutSansV4-Regular_ttf.woff2) format("woff2")'
            }]
        };
        return c.jsx(xn, {
            stripe: t,
            options: a,
            children: c.jsx(La, {
                setPayment: o
            })
        })
    };
export {
    Fa as
    default
};