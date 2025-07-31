import {
    g as fe,
    c as He
} from "./_commonjsHelpers.Cpj98o6Y.js";
import {
    m as de
} from "./Scroll.Bt_JG0O1.js";
import {
    $ as qe
} from "./hoisted.DEENYDYk.js";
import {
    g as ee
} from "./index.BDT3iC5Q.js";
var _e = {},
    Se = {},
    pe = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });

    function l(n) {
        if (n = `${n}`, n === "0") return "0";
        if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(n)) return n.replace(/^[+-]?/, u => u === "-" ? "" : "-");
        let f = ["var", "calc", "min", "max", "clamp"];
        for (const u of f)
            if (n.includes(`${u}(`)) return `calc(${n} * -1)`
    }
})(pe);
var Oe = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    const l = ["preflight", "container", "accessibility", "pointerEvents", "visibility", "position", "inset", "isolation", "zIndex", "order", "gridColumn", "gridColumnStart", "gridColumnEnd", "gridRow", "gridRowStart", "gridRowEnd", "float", "clear", "margin", "boxSizing", "lineClamp", "display", "aspectRatio", "size", "height", "maxHeight", "minHeight", "width", "minWidth", "maxWidth", "flex", "flexShrink", "flexGrow", "flexBasis", "tableLayout", "captionSide", "borderCollapse", "borderSpacing", "transformOrigin", "translate", "rotate", "skew", "scale", "transform", "animation", "cursor", "touchAction", "userSelect", "resize", "scrollSnapType", "scrollSnapAlign", "scrollSnapStop", "scrollMargin", "scrollPadding", "listStylePosition", "listStyleType", "listStyleImage", "appearance", "columns", "breakBefore", "breakInside", "breakAfter", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateColumns", "gridTemplateRows", "flexDirection", "flexWrap", "placeContent", "placeItems", "alignContent", "alignItems", "justifyContent", "justifyItems", "gap", "space", "divideWidth", "divideStyle", "divideColor", "divideOpacity", "placeSelf", "alignSelf", "justifySelf", "overflow", "overscrollBehavior", "scrollBehavior", "textOverflow", "hyphens", "whitespace", "textWrap", "wordBreak", "borderRadius", "borderWidth", "borderStyle", "borderColor", "borderOpacity", "backgroundColor", "backgroundOpacity", "backgroundImage", "gradientColorStops", "boxDecorationBreak", "backgroundSize", "backgroundAttachment", "backgroundClip", "backgroundPosition", "backgroundRepeat", "backgroundOrigin", "fill", "stroke", "strokeWidth", "objectFit", "objectPosition", "padding", "textAlign", "textIndent", "verticalAlign", "fontFamily", "fontSize", "fontWeight", "textTransform", "fontStyle", "fontVariantNumeric", "lineHeight", "letterSpacing", "textColor", "textOpacity", "textDecoration", "textDecorationColor", "textDecorationStyle", "textDecorationThickness", "textUnderlineOffset", "fontSmoothing", "placeholderColor", "placeholderOpacity", "caretColor", "accentColor", "opacity", "backgroundBlendMode", "mixBlendMode", "boxShadow", "boxShadowColor", "outlineStyle", "outlineWidth", "outlineOffset", "outlineColor", "ringWidth", "ringColor", "ringOpacity", "ringOffsetWidth", "ringOffsetColor", "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia", "filter", "backdropBlur", "backdropBrightness", "backdropContrast", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia", "backdropFilter", "transitionProperty", "transitionDelay", "transitionDuration", "transitionTimingFunction", "willChange", "contain", "content", "forcedColorAdjust"]
})(Oe);
var Ae = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });

    function l(n, f) {
        return n === void 0 ? f : Array.isArray(n) ? n : [...new Set(f.filter(o => n !== !1 && n[o] !== !1).concat(Object.keys(n).filter(o => n[o] !== !1)))]
    }
})(Ae);
var Ce = {},
    ie = {},
    me = {
        exports: {}
    },
    T = String,
    ke = function() {
        return {
            isColorSupported: !1,
            reset: T,
            bold: T,
            dim: T,
            italic: T,
            underline: T,
            inverse: T,
            hidden: T,
            strikethrough: T,
            black: T,
            red: T,
            green: T,
            yellow: T,
            blue: T,
            magenta: T,
            cyan: T,
            white: T,
            gray: T,
            bgBlack: T,
            bgRed: T,
            bgGreen: T,
            bgYellow: T,
            bgBlue: T,
            bgMagenta: T,
            bgCyan: T,
            bgWhite: T,
            blackBright: T,
            redBright: T,
            greenBright: T,
            yellowBright: T,
            blueBright: T,
            magentaBright: T,
            cyanBright: T,
            whiteBright: T,
            bgBlackBright: T,
            bgRedBright: T,
            bgGreenBright: T,
            bgYellowBright: T,
            bgBlueBright: T,
            bgMagentaBright: T,
            bgCyanBright: T,
            bgWhiteBright: T
        }
    };
me.exports = ke();
me.exports.createColors = ke;
var ze = me.exports;
(function(e) {
    var l = {};
    Object.defineProperty(e, "__esModule", {
        value: !0
    });

    function n(t, c) {
        for (var P in c) Object.defineProperty(t, P, {
            enumerable: !0,
            get: c[P]
        })
    }
    n(e, {
        dim: function() {
            return v
        },
        default: function() {
            return p
        }
    });
    const f = u(ze);

    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    let o = new Set;

    function r(t, c, P) {
        typeof process < "u" && l.JEST_WORKER_ID || P && o.has(P) || (P && o.add(P), c.forEach(m => {}))
    }

    function v(t) {
        return f.default.dim(t)
    }
    const p = {
        info(t, c) {
            r(f.default.bold(f.default.cyan("info")), ...Array.isArray(t) ? [t] : [c, t])
        },
        warn(t, c) {
            r(f.default.bold(f.default.yellow("warn")), ...Array.isArray(t) ? [t] : [c, t])
        },
        risk(t, c) {
            r(f.default.bold(f.default.magenta("risk")), ...Array.isArray(t) ? [t] : [c, t])
        }
    }
})(ie);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    const l = n(ie);

    function n(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }

    function f({
        version: o,
        from: r,
        to: v
    }) {
        l.default.warn(`${r}-color-renamed`, [`As of Tailwind CSS ${o}, \`${r}\` has been renamed to \`${v}\`.`, "Update your configuration file to silence this warning."])
    }
    const u = {
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        slate: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
            950: "#020617"
        },
        gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
            950: "#030712"
        },
        zinc: {
            50: "#fafafa",
            100: "#f4f4f5",
            200: "#e4e4e7",
            300: "#d4d4d8",
            400: "#a1a1aa",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            800: "#27272a",
            900: "#18181b",
            950: "#09090b"
        },
        neutral: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
            950: "#0a0a0a"
        },
        stone: {
            50: "#fafaf9",
            100: "#f5f5f4",
            200: "#e7e5e4",
            300: "#d6d3d1",
            400: "#a8a29e",
            500: "#78716c",
            600: "#57534e",
            700: "#44403c",
            800: "#292524",
            900: "#1c1917",
            950: "#0c0a09"
        },
        red: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
            950: "#450a0a"
        },
        orange: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#f97316",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
            950: "#431407"
        },
        amber: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
            950: "#451a03"
        },
        yellow: {
            50: "#fefce8",
            100: "#fef9c3",
            200: "#fef08a",
            300: "#fde047",
            400: "#facc15",
            500: "#eab308",
            600: "#ca8a04",
            700: "#a16207",
            800: "#854d0e",
            900: "#713f12",
            950: "#422006"
        },
        lime: {
            50: "#f7fee7",
            100: "#ecfccb",
            200: "#d9f99d",
            300: "#bef264",
            400: "#a3e635",
            500: "#84cc16",
            600: "#65a30d",
            700: "#4d7c0f",
            800: "#3f6212",
            900: "#365314",
            950: "#1a2e05"
        },
        green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
            950: "#052e16"
        },
        emerald: {
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
            950: "#022c22"
        },
        teal: {
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
            950: "#042f2e"
        },
        cyan: {
            50: "#ecfeff",
            100: "#cffafe",
            200: "#a5f3fc",
            300: "#67e8f9",
            400: "#22d3ee",
            500: "#06b6d4",
            600: "#0891b2",
            700: "#0e7490",
            800: "#155e75",
            900: "#164e63",
            950: "#083344"
        },
        sky: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
            950: "#082f49"
        },
        blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            950: "#172554"
        },
        indigo: {
            50: "#eef2ff",
            100: "#e0e7ff",
            200: "#c7d2fe",
            300: "#a5b4fc",
            400: "#818cf8",
            500: "#6366f1",
            600: "#4f46e5",
            700: "#4338ca",
            800: "#3730a3",
            900: "#312e81",
            950: "#1e1b4b"
        },
        violet: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
            950: "#2e1065"
        },
        purple: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7e22ce",
            800: "#6b21a8",
            900: "#581c87",
            950: "#3b0764"
        },
        fuchsia: {
            50: "#fdf4ff",
            100: "#fae8ff",
            200: "#f5d0fe",
            300: "#f0abfc",
            400: "#e879f9",
            500: "#d946ef",
            600: "#c026d3",
            700: "#a21caf",
            800: "#86198f",
            900: "#701a75",
            950: "#4a044e"
        },
        pink: {
            50: "#fdf2f8",
            100: "#fce7f3",
            200: "#fbcfe8",
            300: "#f9a8d4",
            400: "#f472b6",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843",
            950: "#500724"
        },
        rose: {
            50: "#fff1f2",
            100: "#ffe4e6",
            200: "#fecdd3",
            300: "#fda4af",
            400: "#fb7185",
            500: "#f43f5e",
            600: "#e11d48",
            700: "#be123c",
            800: "#9f1239",
            900: "#881337",
            950: "#4c0519"
        },
        get lightBlue() {
            return f({
                version: "v2.2",
                from: "lightBlue",
                to: "sky"
            }), this.sky
        },
        get warmGray() {
            return f({
                version: "v3.0",
                from: "warmGray",
                to: "stone"
            }), this.stone
        },
        get trueGray() {
            return f({
                version: "v3.0",
                from: "trueGray",
                to: "neutral"
            }), this.neutral
        },
        get coolGray() {
            return f({
                version: "v3.0",
                from: "coolGray",
                to: "gray"
            }), this.gray
        },
        get blueGray() {
            return f({
                version: "v3.0",
                from: "blueGray",
                to: "slate"
            }), this.slate
        }
    }
})(Ce);
var Ee = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "defaults", {
        enumerable: !0,
        get: function() {
            return l
        }
    });

    function l(n, ...f) {
        for (let r of f) {
            for (let v in r) {
                var u;
                !(n == null || (u = n.hasOwnProperty) === null || u === void 0) && u.call(n, v) || (n[v] = r[v])
            }
            for (let v of Object.getOwnPropertySymbols(r)) {
                var o;
                !(n == null || (o = n.hasOwnProperty) === null || o === void 0) && o.call(n, v) || (n[v] = r[v])
            }
        }
        return n
    }
})(Ee);
var Pe = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "toPath", {
        enumerable: !0,
        get: function() {
            return l
        }
    });

    function l(n) {
        if (Array.isArray(n)) return n;
        let f = n.split("[").length - 1,
            u = n.split("]").length - 1;
        if (f !== u) throw new Error(`Path is invalid. Has unbalanced brackets: ${n}`);
        return n.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean)
    }
})(Pe);
var $e = {},
    oe = {};
(function(e) {
    var l = {};
    Object.defineProperty(e, "__esModule", {
        value: !0
    });

    function n(m, O) {
        for (var h in O) Object.defineProperty(m, h, {
            enumerable: !0,
            get: O[h]
        })
    }
    n(e, {
        flagEnabled: function() {
            return p
        },
        issueFlagNotices: function() {
            return c
        },
        default: function() {
            return P
        }
    });
    const f = o(ze),
        u = o(ie);

    function o(m) {
        return m && m.__esModule ? m : {
            default: m
        }
    }
    let r = {
            optimizeUniversalDefaults: !1,
            generalizedModifiers: !0,
            disableColorOpacityUtilitiesByDefault: !1,
            relativeContentPathsByDefault: !1
        },
        v = {
            future: ["hoverOnlyWhenSupported", "respectDefaultRingColorOpacity", "disableColorOpacityUtilitiesByDefault", "relativeContentPathsByDefault"],
            experimental: ["optimizeUniversalDefaults", "generalizedModifiers"]
        };

    function p(m, O) {
        if (v.future.includes(O)) {
            var h, S, L;
            return m.future === "all" || ((L = (S = m == null || (h = m.future) === null || h === void 0 ? void 0 : h[O]) !== null && S !== void 0 ? S : r[O]) !== null && L !== void 0 ? L : !1)
        }
        if (v.experimental.includes(O)) {
            var D, U, F;
            return m.experimental === "all" || ((F = (U = m == null || (D = m.experimental) === null || D === void 0 ? void 0 : D[O]) !== null && U !== void 0 ? U : r[O]) !== null && F !== void 0 ? F : !1)
        }
        return !1
    }

    function t(m) {
        if (m.experimental === "all") return v.experimental;
        var O;
        return Object.keys((O = m?.experimental) !== null && O !== void 0 ? O : {}).filter(h => v.experimental.includes(h) && m.experimental[h])
    }

    function c(m) {
        if (l.JEST_WORKER_ID === void 0 && t(m).length > 0) {
            let O = t(m).map(h => f.default.yellow(h)).join(", ");
            u.default.warn("experimental-flags-enabled", [`You have enabled experimental features: ${O}`, "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."])
        }
    }
    const P = v
})(oe);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "normalizeConfig", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    const l = oe,
        n = u(ie);

    function f(r) {
        if (typeof WeakMap != "function") return null;
        var v = new WeakMap,
            p = new WeakMap;
        return (f = function(t) {
            return t ? p : v
        })(r)
    }

    function u(r, v) {
        if (r && r.__esModule) return r;
        if (r === null || typeof r != "object" && typeof r != "function") return {
            default: r
        };
        var p = f(v);
        if (p && p.has(r)) return p.get(r);
        var t = {},
            c = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var P in r)
            if (P !== "default" && Object.prototype.hasOwnProperty.call(r, P)) {
                var m = c ? Object.getOwnPropertyDescriptor(r, P) : null;
                m && (m.get || m.set) ? Object.defineProperty(t, P, m) : t[P] = r[P]
            } return t.default = r, p && p.set(r, t), t
    }

    function o(r) {
        if ((() => {
                if (r.purge || !r.content || !Array.isArray(r.content) && !(typeof r.content == "object" && r.content !== null)) return !1;
                if (Array.isArray(r.content)) return r.content.every(t => typeof t == "string" ? !0 : !(typeof t?.raw != "string" || t?.extension && typeof t?.extension != "string"));
                if (typeof r.content == "object" && r.content !== null) {
                    if (Object.keys(r.content).some(t => !["files", "relative", "extract", "transform"].includes(t))) return !1;
                    if (Array.isArray(r.content.files)) {
                        if (!r.content.files.every(t => typeof t == "string" ? !0 : !(typeof t?.raw != "string" || t?.extension && typeof t?.extension != "string"))) return !1;
                        if (typeof r.content.extract == "object") {
                            for (let t of Object.values(r.content.extract))
                                if (typeof t != "function") return !1
                        } else if (!(r.content.extract === void 0 || typeof r.content.extract == "function")) return !1;
                        if (typeof r.content.transform == "object") {
                            for (let t of Object.values(r.content.transform))
                                if (typeof t != "function") return !1
                        } else if (!(r.content.transform === void 0 || typeof r.content.transform == "function")) return !1;
                        if (typeof r.content.relative != "boolean" && typeof r.content.relative < "u") return !1
                    }
                    return !0
                }
                return !1
            })() || n.default.warn("purge-deprecation", ["The `purge`/`content` options have changed in Tailwind CSS v3.0.", "Update your configuration file to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"]), r.safelist = (() => {
                var t;
                let {
                    content: c,
                    purge: P,
                    safelist: m
                } = r;
                return Array.isArray(m) ? m : Array.isArray(c?.safelist) ? c.safelist : Array.isArray(P?.safelist) ? P.safelist : Array.isArray(P == null || (t = P.options) === null || t === void 0 ? void 0 : t.safelist) ? P.options.safelist : []
            })(), r.blocklist = (() => {
                let {
                    blocklist: t
                } = r;
                if (Array.isArray(t)) {
                    if (t.every(c => typeof c == "string")) return t;
                    n.default.warn("blocklist-invalid", ["The `blocklist` option must be an array of strings.", "https://tailwindcss.com/docs/content-configuration#discarding-classes"])
                }
                return []
            })(), typeof r.prefix == "function") n.default.warn("prefix-function", ["As of Tailwind CSS v3.0, `prefix` cannot be a function.", "Update `prefix` in your configuration to be a string to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"]), r.prefix = "";
        else {
            var p;
            r.prefix = (p = r.prefix) !== null && p !== void 0 ? p : ""
        }
        r.content = {
            relative: (() => {
                let {
                    content: t
                } = r;
                return t?.relative ? t.relative : (0, l.flagEnabled)(r, "relativeContentPathsByDefault")
            })(),
            files: (() => {
                let {
                    content: t,
                    purge: c
                } = r;
                return Array.isArray(c) ? c : Array.isArray(c?.content) ? c.content : Array.isArray(t) ? t : Array.isArray(t?.content) ? t.content : Array.isArray(t?.files) ? t.files : []
            })(),
            extract: (() => {
                let t = (() => {
                        var m, O, h, S, L, D, U, F, V, W;
                        return !((m = r.purge) === null || m === void 0) && m.extract ? r.purge.extract : !((O = r.content) === null || O === void 0) && O.extract ? r.content.extract : !((h = r.purge) === null || h === void 0 || (S = h.extract) === null || S === void 0) && S.DEFAULT ? r.purge.extract.DEFAULT : !((L = r.content) === null || L === void 0 || (D = L.extract) === null || D === void 0) && D.DEFAULT ? r.content.extract.DEFAULT : !((U = r.purge) === null || U === void 0 || (F = U.options) === null || F === void 0) && F.extractors ? r.purge.options.extractors : !((V = r.content) === null || V === void 0 || (W = V.options) === null || W === void 0) && W.extractors ? r.content.options.extractors : {}
                    })(),
                    c = {},
                    P = (() => {
                        var m, O, h, S;
                        if (!((m = r.purge) === null || m === void 0 || (O = m.options) === null || O === void 0) && O.defaultExtractor) return r.purge.options.defaultExtractor;
                        if (!((h = r.content) === null || h === void 0 || (S = h.options) === null || S === void 0) && S.defaultExtractor) return r.content.options.defaultExtractor
                    })();
                if (P !== void 0 && (c.DEFAULT = P), typeof t == "function") c.DEFAULT = t;
                else if (Array.isArray(t))
                    for (let {
                            extensions: m,
                            extractor: O
                        }
                        of t ?? [])
                        for (let h of m) c[h] = O;
                else typeof t == "object" && t !== null && Object.assign(c, t);
                return c
            })(),
            transform: (() => {
                let t = (() => {
                        var P, m, O, h, S, L;
                        return !((P = r.purge) === null || P === void 0) && P.transform ? r.purge.transform : !((m = r.content) === null || m === void 0) && m.transform ? r.content.transform : !((O = r.purge) === null || O === void 0 || (h = O.transform) === null || h === void 0) && h.DEFAULT ? r.purge.transform.DEFAULT : !((S = r.content) === null || S === void 0 || (L = S.transform) === null || L === void 0) && L.DEFAULT ? r.content.transform.DEFAULT : {}
                    })(),
                    c = {};
                return typeof t == "function" ? c.DEFAULT = t : typeof t == "object" && t !== null && Object.assign(c, t), c
            })()
        };
        for (let t of r.content.files)
            if (typeof t == "string" && /{([^,]*?)}/g.test(t)) {
                n.default.warn("invalid-glob-braces", [`The glob pattern ${(0,n.dim)(t)} in your Tailwind CSS configuration is invalid.`, `Update it to ${(0,n.dim)(t.replace(/{([^,]*?)}/g,"$1"))} to silence this warning.`]);
                break
            } return r
    }
})($e);
var Te = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });

    function l(n) {
        if (Object.prototype.toString.call(n) !== "[object Object]") return !1;
        const f = Object.getPrototypeOf(n);
        return f === null || Object.getPrototypeOf(f) === null
    }
})(Te);
var ge = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "cloneDeep", {
        enumerable: !0,
        get: function() {
            return l
        }
    });

    function l(n) {
        return Array.isArray(n) ? n.map(f => l(f)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([f, u]) => [f, l(u)])) : n
    }
})(ge);
var Fe = {},
    Me = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });

    function l(n) {
        return n.replace(/\\,/g, "\\2c ")
    }
})(Me);
var he = {},
    be = {},
    Le = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    const l = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
})(Le);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });

    function l(h, S) {
        for (var L in S) Object.defineProperty(h, L, {
            enumerable: !0,
            get: S[L]
        })
    }
    l(e, {
        parseColor: function() {
            return m
        },
        formatColor: function() {
            return O
        }
    });
    const n = f(Le);

    function f(h) {
        return h && h.__esModule ? h : {
            default: h
        }
    }
    let u = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
        o = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
        r = /(?:\d+|\d*\.\d+)%?/,
        v = /(?:\s*,\s*|\s+)/,
        p = /\s*[,/]\s*/,
        t = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/,
        c = new RegExp(`^(rgba?)\\(\\s*(${r.source}|${t.source})(?:${v.source}(${r.source}|${t.source}))?(?:${v.source}(${r.source}|${t.source}))?(?:${p.source}(${r.source}|${t.source}))?\\s*\\)$`),
        P = new RegExp(`^(hsla?)\\(\\s*((?:${r.source})(?:deg|rad|grad|turn)?|${t.source})(?:${v.source}(${r.source}|${t.source}))?(?:${v.source}(${r.source}|${t.source}))?(?:${p.source}(${r.source}|${t.source}))?\\s*\\)$`);

    function m(h, {
        loose: S = !1
    } = {}) {
        var L, D;
        if (typeof h != "string") return null;
        if (h = h.trim(), h === "transparent") return {
            mode: "rgb",
            color: ["0", "0", "0"],
            alpha: "0"
        };
        if (h in n.default) return {
            mode: "rgb",
            color: n.default[h].map(q => q.toString())
        };
        let U = h.replace(o, (q, Y, K, d, A) => ["#", Y, Y, K, K, d, d, A ? A + A : ""].join("")).match(u);
        if (U !== null) return {
            mode: "rgb",
            color: [parseInt(U[1], 16), parseInt(U[2], 16), parseInt(U[3], 16)].map(q => q.toString()),
            alpha: U[4] ? (parseInt(U[4], 16) / 255).toString() : void 0
        };
        var F;
        let V = (F = h.match(c)) !== null && F !== void 0 ? F : h.match(P);
        if (V === null) return null;
        let W = [V[2], V[3], V[4]].filter(Boolean).map(q => q.toString());
        return W.length === 2 && W[0].startsWith("var(") ? {
            mode: V[1],
            color: [W[0]],
            alpha: W[1]
        } : !S && W.length !== 3 || W.length < 3 && !W.some(q => /^var\(.*?\)$/.test(q)) ? null : {
            mode: V[1],
            color: W,
            alpha: (L = V[5]) === null || L === void 0 || (D = L.toString) === null || D === void 0 ? void 0 : D.call(L)
        }
    }

    function O({
        mode: h,
        color: S,
        alpha: L
    }) {
        let D = L !== void 0;
        return h === "rgba" || h === "hsla" ? `${h}(${S.join(", ")}${D?`, ${L}`:""})` : `${h}(${S.join(" ")}${D?` / ${L}`:""})`
    }
})(be);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });

    function l(o, r) {
        for (var v in r) Object.defineProperty(o, v, {
            enumerable: !0,
            get: r[v]
        })
    }
    l(e, {
        withAlphaValue: function() {
            return f
        },
        default: function() {
            return u
        }
    });
    const n = be;

    function f(o, r, v) {
        if (typeof o == "function") return o({
            opacityValue: r
        });
        let p = (0, n.parseColor)(o, {
            loose: !0
        });
        return p === null ? v : (0, n.formatColor)({
            ...p,
            alpha: r
        })
    }

    function u({
        color: o,
        property: r,
        variable: v
    }) {
        let p = [].concat(r);
        if (typeof o == "function") return {
            [v]: "1",
            ...Object.fromEntries(p.map(c => [c, o({
                opacityVariable: v,
                opacityValue: `var(${v}, 1)`
            })]))
        };
        const t = (0, n.parseColor)(o);
        return t === null ? Object.fromEntries(p.map(c => [c, o])) : t.alpha !== void 0 ? Object.fromEntries(p.map(c => [c, o])) : {
            [v]: "1",
            ...Object.fromEntries(p.map(c => [c, (0, n.formatColor)({
                ...t,
                alpha: `var(${v}, 1)`
            })]))
        }
    }
})(he);
var ve = {},
    De = {},
    ae = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "splitAtTopLevelOnly", {
        enumerable: !0,
        get: function() {
            return l
        }
    });

    function l(n, f) {
        let u = [],
            o = [],
            r = 0,
            v = !1;
        for (let p = 0; p < n.length; p++) {
            let t = n[p];
            u.length === 0 && t === f[0] && !v && (f.length === 1 || n.slice(p, p + f.length) === f) && (o.push(n.slice(r, p)), r = p + f.length), v = v ? !1 : t === "\\", t === "(" || t === "[" || t === "{" ? u.push(t) : (t === ")" && u[u.length - 1] === "(" || t === "]" && u[u.length - 1] === "[" || t === "}" && u[u.length - 1] === "{") && u.pop()
        }
        return o.push(n.slice(r)), o
    }
})(ae);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });

    function l(p, t) {
        for (var c in t) Object.defineProperty(p, c, {
            enumerable: !0,
            get: t[c]
        })
    }
    l(e, {
        parseBoxShadowValue: function() {
            return r
        },
        formatBoxShadowValue: function() {
            return v
        }
    });
    const n = ae;
    let f = new Set(["inset", "inherit", "initial", "revert", "unset"]),
        u = /\ +(?![^(]*\))/g,
        o = /^-?(\d+|\.\d+)(.*?)$/g;

    function r(p) {
        return (0, n.splitAtTopLevelOnly)(p, ",").map(c => {
            let P = c.trim(),
                m = {
                    raw: P
                },
                O = P.split(u),
                h = new Set;
            for (let S of O) o.lastIndex = 0, !h.has("KEYWORD") && f.has(S) ? (m.keyword = S, h.add("KEYWORD")) : o.test(S) ? h.has("X") ? h.has("Y") ? h.has("BLUR") ? h.has("SPREAD") || (m.spread = S, h.add("SPREAD")) : (m.blur = S, h.add("BLUR")) : (m.y = S, h.add("Y")) : (m.x = S, h.add("X")) : m.color ? (m.unknown || (m.unknown = []), m.unknown.push(S)) : m.color = S;
            return m.valid = m.x !== void 0 && m.y !== void 0, m
        })
    }

    function v(p) {
        return p.map(t => t.valid ? [t.keyword, t.x, t.y, t.blur, t.spread, t.color].filter(Boolean).join(" ") : t.raw).join(", ")
    }
})(De);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });

    function l(a, y) {
        for (var $ in y) Object.defineProperty(a, $, {
            enumerable: !0,
            get: y[$]
        })
    }
    l(e, {
        normalize: function() {
            return p
        },
        normalizeAttributeSelectors: function() {
            return t
        },
        url: function() {
            return P
        },
        number: function() {
            return m
        },
        percentage: function() {
            return O
        },
        length: function() {
            return L
        },
        lineWidth: function() {
            return U
        },
        shadow: function() {
            return F
        },
        color: function() {
            return V
        },
        image: function() {
            return W
        },
        gradient: function() {
            return Y
        },
        position: function() {
            return d
        },
        familyName: function() {
            return A
        },
        genericName: function() {
            return s
        },
        absoluteSize: function() {
            return w
        },
        relativeSize: function() {
            return k
        }
    });
    const n = be,
        f = De,
        u = ae;
    let o = ["min", "max", "clamp", "calc"];

    function r(a) {
        return o.some(y => new RegExp(`^${y}\\(.*\\)`).test(a))
    }
    const v = new Set(["scroll-timeline-name", "timeline-scope", "view-timeline-name", "font-palette", "anchor-name", "anchor-scope", "position-anchor", "position-try-options", "scroll-timeline", "animation-timeline", "view-timeline", "position-try"]);

    function p(a, y = null, $ = !0) {
        let z = y && v.has(y.property);
        return a.startsWith("--") && !z ? `var(${a})` : a.includes("url(") ? a.split(/(url\(.*?\))/g).filter(Boolean).map(H => /^url\(.*?\)$/.test(H) ? H : p(H, y, !1)).join("") : (a = a.replace(/([^\\])_+/g, (H, re) => re + " ".repeat(H.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), $ && (a = a.trim()), a = c(a), a)
    }

    function t(a) {
        return a.includes("=") && (a = a.replace(/(=.*)/g, (y, $) => {
            if ($[1] === "'" || $[1] === '"') return $;
            if ($.length > 2) {
                let z = $[$.length - 1];
                if ($[$.length - 2] === " " && (z === "i" || z === "I" || z === "s" || z === "S")) return `="${$.slice(1,-2)}" ${$[$.length-1]}`
            }
            return `="${$.slice(1)}"`
        })), a
    }

    function c(a) {
        let y = ["theme"],
            $ = ["min-content", "max-content", "fit-content", "safe-area-inset-top", "safe-area-inset-right", "safe-area-inset-bottom", "safe-area-inset-left", "titlebar-area-x", "titlebar-area-y", "titlebar-area-width", "titlebar-area-height", "keyboard-inset-top", "keyboard-inset-right", "keyboard-inset-bottom", "keyboard-inset-left", "keyboard-inset-width", "keyboard-inset-height", "radial-gradient", "linear-gradient", "conic-gradient", "repeating-radial-gradient", "repeating-linear-gradient", "repeating-conic-gradient", "anchor-size"];
        return a.replace(/(calc|min|max|clamp)\(.+\)/g, z => {
            let H = "";

            function re() {
                let i = H.trimEnd();
                return i[i.length - 1]
            }
            for (let i = 0; i < z.length; i++) {
                let b = function(E) {
                        return E.split("").every((j, B) => z[i + B] === j)
                    },
                    C = function(E) {
                        let j = 1 / 0;
                        for (let N of E) {
                            let I = z.indexOf(N, i);
                            I !== -1 && I < j && (j = I)
                        }
                        let B = z.slice(i, j);
                        return i += B.length - 1, B
                    },
                    M = z[i];
                if (b("var")) H += C([")", ","]);
                else if ($.some(E => b(E))) {
                    let E = $.find(j => b(j));
                    H += E, i += E.length - 1
                } else y.some(E => b(E)) ? H += C([")"]) : b("[") ? H += C(["]"]) : ["+", "-", "*", "/"].includes(M) && !["(", "+", "-", "*", "/", ","].includes(re()) ? H += ` ${M} ` : H += M
            }
            return H.replace(/\s+/g, " ")
        })
    }

    function P(a) {
        return a.startsWith("url(")
    }

    function m(a) {
        return !isNaN(Number(a)) || r(a)
    }

    function O(a) {
        return a.endsWith("%") && m(a.slice(0, -1)) || r(a)
    }
    let S = `(?:${["cm","mm","Q","in","pc","pt","px","em","ex","ch","rem","lh","rlh","vw","vh","vmin","vmax","vb","vi","svw","svh","lvw","lvh","dvw","dvh","cqw","cqh","cqi","cqb","cqmin","cqmax"].join("|")})`;

    function L(a) {
        return a === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${S}$`).test(a) || r(a)
    }
    let D = new Set(["thin", "medium", "thick"]);

    function U(a) {
        return D.has(a)
    }

    function F(a) {
        let y = (0, f.parseBoxShadowValue)(p(a));
        for (let $ of y)
            if (!$.valid) return !1;
        return !0
    }

    function V(a) {
        let y = 0;
        return (0, u.splitAtTopLevelOnly)(a, "_").every(z => (z = p(z), z.startsWith("var(") ? !0 : (0, n.parseColor)(z, {
            loose: !0
        }) !== null ? (y++, !0) : !1)) ? y > 0 : !1
    }

    function W(a) {
        let y = 0;
        return (0, u.splitAtTopLevelOnly)(a, ",").every(z => (z = p(z), z.startsWith("var(") ? !0 : P(z) || Y(z) || ["element(", "image(", "cross-fade(", "image-set("].some(H => z.startsWith(H)) ? (y++, !0) : !1)) ? y > 0 : !1
    }
    let q = new Set(["conic-gradient", "linear-gradient", "radial-gradient", "repeating-conic-gradient", "repeating-linear-gradient", "repeating-radial-gradient"]);

    function Y(a) {
        a = p(a);
        for (let y of q)
            if (a.startsWith(`${y}(`)) return !0;
        return !1
    }
    let K = new Set(["center", "top", "right", "bottom", "left"]);

    function d(a) {
        let y = 0;
        return (0, u.splitAtTopLevelOnly)(a, "_").every(z => (z = p(z), z.startsWith("var(") ? !0 : K.has(z) || L(z) || O(z) ? (y++, !0) : !1)) ? y > 0 : !1
    }

    function A(a) {
        let y = 0;
        return (0, u.splitAtTopLevelOnly)(a, ",").every(z => (z = p(z), z.startsWith("var(") ? !0 : z.includes(" ") && !/(['"])([^"']+)\1/g.test(z) || /^\d/g.test(z) ? !1 : (y++, !0))) ? y > 0 : !1
    }
    let _ = new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji", "fangsong"]);

    function s(a) {
        return _.has(a)
    }
    let x = new Set(["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large"]);

    function w(a) {
        return x.has(a)
    }
    let g = new Set(["larger", "smaller"]);

    function k(a) {
        return g.has(a)
    }
})(ve);
var je = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "backgroundSize", {
        enumerable: !0,
        get: function() {
            return f
        }
    });
    const l = ve,
        n = ae;

    function f(u) {
        let o = ["cover", "contain"];
        return (0, n.splitAtTopLevelOnly)(u, ",").every(r => {
            let v = (0, n.splitAtTopLevelOnly)(r, "_").filter(Boolean);
            return v.length === 1 && o.includes(v[0]) ? !0 : v.length !== 1 && v.length !== 2 ? !1 : v.every(p => (0, l.length)(p) || (0, l.percentage)(p) || p === "auto")
        })
    }
})(je);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });

    function l(d, A) {
        for (var _ in A) Object.defineProperty(d, _, {
            enumerable: !0,
            get: A[_]
        })
    }
    l(e, {
        updateAllClasses: function() {
            return t
        },
        asValue: function() {
            return m
        },
        parseColorFormat: function() {
            return S
        },
        asColor: function() {
            return D
        },
        asLookupValue: function() {
            return U
        },
        typeMap: function() {
            return V
        },
        coerceValue: function() {
            return Y
        },
        getMatchingTypes: function() {
            return K
        }
    });
    const n = p(Me),
        f = he,
        u = ve,
        o = p(pe),
        r = je,
        v = oe;

    function p(d) {
        return d && d.__esModule ? d : {
            default: d
        }
    }

    function t(d, A) {
        d.walkClasses(_ => {
            _.value = A(_.value), _.raws && _.raws.value && (_.raws.value = (0, n.default)(_.raws.value))
        })
    }

    function c(d, A) {
        if (!O(d)) return;
        let _ = d.slice(1, -1);
        if (A(_)) return (0, u.normalize)(_)
    }

    function P(d, A = {}, _) {
        let s = A[d];
        if (s !== void 0) return (0, o.default)(s);
        if (O(d)) {
            let x = c(d, _);
            return x === void 0 ? void 0 : (0, o.default)(x)
        }
    }

    function m(d, A = {}, {
        validate: _ = () => !0
    } = {}) {
        var s;
        let x = (s = A.values) === null || s === void 0 ? void 0 : s[d];
        return x !== void 0 ? x : A.supportsNegativeValues && d.startsWith("-") ? P(d.slice(1), A.values, _) : c(d, _)
    }

    function O(d) {
        return d.startsWith("[") && d.endsWith("]")
    }

    function h(d) {
        let A = d.lastIndexOf("/"),
            _ = d.lastIndexOf("[", A),
            s = d.indexOf("]", A);
        return d[A - 1] === "]" || d[A + 1] === "[" || _ !== -1 && s !== -1 && _ < A && A < s && (A = d.lastIndexOf("/", _)), A === -1 || A === d.length - 1 ? [d, void 0] : O(d) && !d.includes("]/[") ? [d, void 0] : [d.slice(0, A), d.slice(A + 1)]
    }

    function S(d) {
        if (typeof d == "string" && d.includes("<alpha-value>")) {
            let A = d;
            return ({
                opacityValue: _ = 1
            }) => A.replace(/<alpha-value>/g, _)
        }
        return d
    }

    function L(d) {
        return (0, u.normalize)(d.slice(1, -1))
    }

    function D(d, A = {}, {
        tailwindConfig: _ = {}
    } = {}) {
        var s;
        if (((s = A.values) === null || s === void 0 ? void 0 : s[d]) !== void 0) {
            var x;
            return S((x = A.values) === null || x === void 0 ? void 0 : x[d])
        }
        let [w, g] = h(d);
        if (g !== void 0) {
            var k, a, y, $;
            let z = ($ = (k = A.values) === null || k === void 0 ? void 0 : k[w]) !== null && $ !== void 0 ? $ : O(w) ? w.slice(1, -1) : void 0;
            return z === void 0 ? void 0 : (z = S(z), O(g) ? (0, f.withAlphaValue)(z, L(g)) : ((a = _.theme) === null || a === void 0 || (y = a.opacity) === null || y === void 0 ? void 0 : y[g]) === void 0 ? void 0 : (0, f.withAlphaValue)(z, _.theme.opacity[g]))
        }
        return m(d, A, {
            validate: u.color
        })
    }

    function U(d, A = {}) {
        var _;
        return (_ = A.values) === null || _ === void 0 ? void 0 : _[d]
    }

    function F(d) {
        return (A, _) => m(A, _, {
            validate: d
        })
    }
    let V = {
            any: m,
            color: D,
            url: F(u.url),
            image: F(u.image),
            length: F(u.length),
            percentage: F(u.percentage),
            position: F(u.position),
            lookup: U,
            "generic-name": F(u.genericName),
            "family-name": F(u.familyName),
            number: F(u.number),
            "line-width": F(u.lineWidth),
            "absolute-size": F(u.absoluteSize),
            "relative-size": F(u.relativeSize),
            shadow: F(u.shadow),
            size: F(r.backgroundSize)
        },
        W = Object.keys(V);

    function q(d, A) {
        let _ = d.indexOf(A);
        return _ === -1 ? [void 0, d] : [d.slice(0, _), d.slice(_ + 1)]
    }

    function Y(d, A, _, s) {
        if (_.values && A in _.values)
            for (let {
                    type: w
                }
                of d ?? []) {
                let g = V[w](A, _, {
                    tailwindConfig: s
                });
                if (g !== void 0) return [g, w, null]
            }
        if (O(A)) {
            let w = A.slice(1, -1),
                [g, k] = q(w, ":");
            if (!/^[\w-_]+$/g.test(g)) k = w;
            else if (g !== void 0 && !W.includes(g)) return [];
            if (k.length > 0 && W.includes(g)) return [m(`[${k}]`, _), g, null]
        }
        let x = K(d, A, _, s);
        for (let w of x) return w;
        return []
    }

    function* K(d, A, _, s) {
        let x = (0, v.flagEnabled)(s, "generalizedModifiers"),
            [w, g] = h(A);
        if (x && _.modifiers != null && (_.modifiers === "any" || typeof _.modifiers == "object" && (g && O(g) || g in _.modifiers)) || (w = A, g = void 0), g !== void 0 && w === "" && (w = "DEFAULT"), g !== void 0 && typeof _.modifiers == "object") {
            var a, y;
            let $ = (y = (a = _.modifiers) === null || a === void 0 ? void 0 : a[g]) !== null && y !== void 0 ? y : null;
            $ !== null ? g = $ : O(g) && (g = L(g))
        }
        for (let {
                type: $
            }
            of d ?? []) {
            let z = V[$](w, _, {
                tailwindConfig: s
            });
            z !== void 0 && (yield [z, $, g ?? null])
        }
    }
})(Fe);
var Re = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });

    function l(n) {
        return typeof n == "function" ? n({}) : n
    }
})(Re);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return _
        }
    });
    const l = O(pe),
        n = O(Oe),
        f = O(Ae),
        u = O(Ce),
        o = Ee,
        r = Pe,
        v = $e,
        p = O(Te),
        t = ge,
        c = Fe,
        P = he,
        m = O(Re);

    function O(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }

    function h(s) {
        return typeof s == "function"
    }

    function S(s, ...x) {
        let w = x.pop();
        for (let g of x)
            for (let k in g) {
                let a = w(s[k], g[k]);
                a === void 0 ? (0, p.default)(s[k]) && (0, p.default)(g[k]) ? s[k] = S({}, s[k], g[k], w) : s[k] = g[k] : s[k] = a
            }
        return s
    }
    const L = {
        colors: u.default,
        negative(s) {
            return Object.keys(s).filter(x => s[x] !== "0").reduce((x, w) => {
                let g = (0, l.default)(s[w]);
                return g !== void 0 && (x[`-${w}`] = g), x
            }, {})
        },
        breakpoints(s) {
            return Object.keys(s).filter(x => typeof s[x] == "string").reduce((x, w) => ({
                ...x,
                [`screen-${w}`]: s[w]
            }), {})
        }
    };

    function D(s, ...x) {
        return h(s) ? s(...x) : s
    }

    function U(s) {
        return s.reduce((x, {
            extend: w
        }) => S(x, w, (g, k) => g === void 0 ? [k] : Array.isArray(g) ? [k, ...g] : [k, g]), {})
    }

    function F(s) {
        return {
            ...s.reduce((x, w) => (0, o.defaults)(x, w), {}),
            extend: U(s)
        }
    }

    function V(s, x) {
        if (Array.isArray(s) && (0, p.default)(s[0])) return s.concat(x);
        if (Array.isArray(x) && (0, p.default)(x[0]) && (0, p.default)(s)) return [s, ...x];
        if (Array.isArray(x)) return x
    }

    function W({
        extend: s,
        ...x
    }) {
        return S(x, s, (w, g) => !h(w) && !g.some(h) ? S({}, w, ...g, V) : (k, a) => S({}, ...[w, ...g].map(y => D(y, k, a)), V))
    }

    function* q(s) {
        let x = (0, r.toPath)(s);
        if (x.length === 0 || (yield x, Array.isArray(s))) return;
        let w = /^(.*?)\s*\/\s*([^/]+)$/,
            g = s.match(w);
        if (g !== null) {
            let [, k, a] = g, y = (0, r.toPath)(k);
            y.alpha = a, yield y
        }
    }

    function Y(s) {
        const x = (w, g) => {
            for (const k of q(w)) {
                let a = 0,
                    y = s;
                for (; y != null && a < k.length;) y = y[k[a++]], y = h(y) && (k.alpha === void 0 || a <= k.length - 1) ? y(x, L) : y;
                if (y !== void 0) {
                    if (k.alpha !== void 0) {
                        let $ = (0, c.parseColorFormat)(y);
                        return (0, P.withAlphaValue)($, k.alpha, (0, m.default)($))
                    }
                    return (0, p.default)(y) ? (0, t.cloneDeep)(y) : y
                }
            }
            return g
        };
        return Object.assign(x, {
            theme: x,
            ...L
        }), Object.keys(s).reduce((w, g) => (w[g] = h(s[g]) ? s[g](x, L) : s[g], w), {})
    }

    function K(s) {
        let x = [];
        return s.forEach(w => {
            x = [...x, w];
            var g;
            const k = (g = w?.plugins) !== null && g !== void 0 ? g : [];
            k.length !== 0 && k.forEach(a => {
                a.__isOptionsFunction && (a = a());
                var y;
                x = [...x, ...K([(y = a?.config) !== null && y !== void 0 ? y : {}])]
            })
        }), x
    }

    function d(s) {
        return [...s].reduceRight((w, g) => h(g) ? g({
            corePlugins: w
        }) : (0, f.default)(g, w), n.default)
    }

    function A(s) {
        return [...s].reduceRight((w, g) => [...w, ...g], [])
    }

    function _(s) {
        let x = [...K(s), {
            prefix: "",
            important: !1,
            separator: ":"
        }];
        var w, g;
        return (0, v.normalizeConfig)((0, o.defaults)({
            theme: Y(W(F(x.map(k => (w = k?.theme) !== null && w !== void 0 ? w : {})))),
            corePlugins: d(x.map(k => k.corePlugins)),
            plugins: A(s.map(k => (g = k?.plugins) !== null && g !== void 0 ? g : []))
        }, ...x))
    }
})(Se);
var Be = {},
    Ue = {
        content: [],
        presets: [],
        darkMode: "media",
        theme: {
            accentColor: ({
                theme: e
            }) => ({
                ...e("colors"),
                auto: "auto"
            }),
            animation: {
                none: "none",
                spin: "spin 1s linear infinite",
                ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                bounce: "bounce 1s infinite"
            },
            aria: {
                busy: 'busy="true"',
                checked: 'checked="true"',
                disabled: 'disabled="true"',
                expanded: 'expanded="true"',
                hidden: 'hidden="true"',
                pressed: 'pressed="true"',
                readonly: 'readonly="true"',
                required: 'required="true"',
                selected: 'selected="true"'
            },
            aspectRatio: {
                auto: "auto",
                square: "1 / 1",
                video: "16 / 9"
            },
            backdropBlur: ({
                theme: e
            }) => e("blur"),
            backdropBrightness: ({
                theme: e
            }) => e("brightness"),
            backdropContrast: ({
                theme: e
            }) => e("contrast"),
            backdropGrayscale: ({
                theme: e
            }) => e("grayscale"),
            backdropHueRotate: ({
                theme: e
            }) => e("hueRotate"),
            backdropInvert: ({
                theme: e
            }) => e("invert"),
            backdropOpacity: ({
                theme: e
            }) => e("opacity"),
            backdropSaturate: ({
                theme: e
            }) => e("saturate"),
            backdropSepia: ({
                theme: e
            }) => e("sepia"),
            backgroundColor: ({
                theme: e
            }) => e("colors"),
            backgroundImage: {
                none: "none",
                "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
                "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
                "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
                "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
                "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
                "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
                "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
            },
            backgroundOpacity: ({
                theme: e
            }) => e("opacity"),
            backgroundPosition: {
                bottom: "bottom",
                center: "center",
                left: "left",
                "left-bottom": "left bottom",
                "left-top": "left top",
                right: "right",
                "right-bottom": "right bottom",
                "right-top": "right top",
                top: "top"
            },
            backgroundSize: {
                auto: "auto",
                cover: "cover",
                contain: "contain"
            },
            blur: {
                0: "0",
                none: "",
                sm: "4px",
                DEFAULT: "8px",
                md: "12px",
                lg: "16px",
                xl: "24px",
                "2xl": "40px",
                "3xl": "64px"
            },
            borderColor: ({
                theme: e
            }) => ({
                ...e("colors"),
                DEFAULT: e("colors.gray.200", "currentColor")
            }),
            borderOpacity: ({
                theme: e
            }) => e("opacity"),
            borderRadius: {
                none: "0px",
                sm: "0.125rem",
                DEFAULT: "0.25rem",
                md: "0.375rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
                full: "9999px"
            },
            borderSpacing: ({
                theme: e
            }) => ({
                ...e("spacing")
            }),
            borderWidth: {
                DEFAULT: "1px",
                0: "0px",
                2: "2px",
                4: "4px",
                8: "8px"
            },
            boxShadow: {
                sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
                none: "none"
            },
            boxShadowColor: ({
                theme: e
            }) => e("colors"),
            brightness: {
                0: "0",
                50: ".5",
                75: ".75",
                90: ".9",
                95: ".95",
                100: "1",
                105: "1.05",
                110: "1.1",
                125: "1.25",
                150: "1.5",
                200: "2"
            },
            caretColor: ({
                theme: e
            }) => e("colors"),
            colors: ({
                colors: e
            }) => ({
                inherit: e.inherit,
                current: e.current,
                transparent: e.transparent,
                black: e.black,
                white: e.white,
                slate: e.slate,
                gray: e.gray,
                zinc: e.zinc,
                neutral: e.neutral,
                stone: e.stone,
                red: e.red,
                orange: e.orange,
                amber: e.amber,
                yellow: e.yellow,
                lime: e.lime,
                green: e.green,
                emerald: e.emerald,
                teal: e.teal,
                cyan: e.cyan,
                sky: e.sky,
                blue: e.blue,
                indigo: e.indigo,
                violet: e.violet,
                purple: e.purple,
                fuchsia: e.fuchsia,
                pink: e.pink,
                rose: e.rose
            }),
            columns: {
                auto: "auto",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
                "3xs": "16rem",
                "2xs": "18rem",
                xs: "20rem",
                sm: "24rem",
                md: "28rem",
                lg: "32rem",
                xl: "36rem",
                "2xl": "42rem",
                "3xl": "48rem",
                "4xl": "56rem",
                "5xl": "64rem",
                "6xl": "72rem",
                "7xl": "80rem"
            },
            container: {},
            content: {
                none: "none"
            },
            contrast: {
                0: "0",
                50: ".5",
                75: ".75",
                100: "1",
                125: "1.25",
                150: "1.5",
                200: "2"
            },
            cursor: {
                auto: "auto",
                default: "default",
                pointer: "pointer",
                wait: "wait",
                text: "text",
                move: "move",
                help: "help",
                "not-allowed": "not-allowed",
                none: "none",
                "context-menu": "context-menu",
                progress: "progress",
                cell: "cell",
                crosshair: "crosshair",
                "vertical-text": "vertical-text",
                alias: "alias",
                copy: "copy",
                "no-drop": "no-drop",
                grab: "grab",
                grabbing: "grabbing",
                "all-scroll": "all-scroll",
                "col-resize": "col-resize",
                "row-resize": "row-resize",
                "n-resize": "n-resize",
                "e-resize": "e-resize",
                "s-resize": "s-resize",
                "w-resize": "w-resize",
                "ne-resize": "ne-resize",
                "nw-resize": "nw-resize",
                "se-resize": "se-resize",
                "sw-resize": "sw-resize",
                "ew-resize": "ew-resize",
                "ns-resize": "ns-resize",
                "nesw-resize": "nesw-resize",
                "nwse-resize": "nwse-resize",
                "zoom-in": "zoom-in",
                "zoom-out": "zoom-out"
            },
            divideColor: ({
                theme: e
            }) => e("borderColor"),
            divideOpacity: ({
                theme: e
            }) => e("borderOpacity"),
            divideWidth: ({
                theme: e
            }) => e("borderWidth"),
            dropShadow: {
                sm: "0 1px 1px rgb(0 0 0 / 0.05)",
                DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
                md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
                lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
                xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
                "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
                none: "0 0 #0000"
            },
            fill: ({
                theme: e
            }) => ({
                none: "none",
                ...e("colors")
            }),
            flex: {
                1: "1 1 0%",
                auto: "1 1 auto",
                initial: "0 1 auto",
                none: "none"
            },
            flexBasis: ({
                theme: e
            }) => ({
                auto: "auto",
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                "1/12": "8.333333%",
                "2/12": "16.666667%",
                "3/12": "25%",
                "4/12": "33.333333%",
                "5/12": "41.666667%",
                "6/12": "50%",
                "7/12": "58.333333%",
                "8/12": "66.666667%",
                "9/12": "75%",
                "10/12": "83.333333%",
                "11/12": "91.666667%",
                full: "100%"
            }),
            flexGrow: {
                0: "0",
                DEFAULT: "1"
            },
            flexShrink: {
                0: "0",
                DEFAULT: "1"
            },
            fontFamily: {
                sans: ["ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
                serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
                mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"]
            },
            fontSize: {
                xs: ["0.75rem", {
                    lineHeight: "1rem"
                }],
                sm: ["0.875rem", {
                    lineHeight: "1.25rem"
                }],
                base: ["1rem", {
                    lineHeight: "1.5rem"
                }],
                lg: ["1.125rem", {
                    lineHeight: "1.75rem"
                }],
                xl: ["1.25rem", {
                    lineHeight: "1.75rem"
                }],
                "2xl": ["1.5rem", {
                    lineHeight: "2rem"
                }],
                "3xl": ["1.875rem", {
                    lineHeight: "2.25rem"
                }],
                "4xl": ["2.25rem", {
                    lineHeight: "2.5rem"
                }],
                "5xl": ["3rem", {
                    lineHeight: "1"
                }],
                "6xl": ["3.75rem", {
                    lineHeight: "1"
                }],
                "7xl": ["4.5rem", {
                    lineHeight: "1"
                }],
                "8xl": ["6rem", {
                    lineHeight: "1"
                }],
                "9xl": ["8rem", {
                    lineHeight: "1"
                }]
            },
            fontWeight: {
                thin: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
                black: "900"
            },
            gap: ({
                theme: e
            }) => e("spacing"),
            gradientColorStops: ({
                theme: e
            }) => e("colors"),
            gradientColorStopPositions: {
                "0%": "0%",
                "5%": "5%",
                "10%": "10%",
                "15%": "15%",
                "20%": "20%",
                "25%": "25%",
                "30%": "30%",
                "35%": "35%",
                "40%": "40%",
                "45%": "45%",
                "50%": "50%",
                "55%": "55%",
                "60%": "60%",
                "65%": "65%",
                "70%": "70%",
                "75%": "75%",
                "80%": "80%",
                "85%": "85%",
                "90%": "90%",
                "95%": "95%",
                "100%": "100%"
            },
            grayscale: {
                0: "0",
                DEFAULT: "100%"
            },
            gridAutoColumns: {
                auto: "auto",
                min: "min-content",
                max: "max-content",
                fr: "minmax(0, 1fr)"
            },
            gridAutoRows: {
                auto: "auto",
                min: "min-content",
                max: "max-content",
                fr: "minmax(0, 1fr)"
            },
            gridColumn: {
                auto: "auto",
                "span-1": "span 1 / span 1",
                "span-2": "span 2 / span 2",
                "span-3": "span 3 / span 3",
                "span-4": "span 4 / span 4",
                "span-5": "span 5 / span 5",
                "span-6": "span 6 / span 6",
                "span-7": "span 7 / span 7",
                "span-8": "span 8 / span 8",
                "span-9": "span 9 / span 9",
                "span-10": "span 10 / span 10",
                "span-11": "span 11 / span 11",
                "span-12": "span 12 / span 12",
                "span-full": "1 / -1"
            },
            gridColumnEnd: {
                auto: "auto",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
                13: "13"
            },
            gridColumnStart: {
                auto: "auto",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
                13: "13"
            },
            gridRow: {
                auto: "auto",
                "span-1": "span 1 / span 1",
                "span-2": "span 2 / span 2",
                "span-3": "span 3 / span 3",
                "span-4": "span 4 / span 4",
                "span-5": "span 5 / span 5",
                "span-6": "span 6 / span 6",
                "span-7": "span 7 / span 7",
                "span-8": "span 8 / span 8",
                "span-9": "span 9 / span 9",
                "span-10": "span 10 / span 10",
                "span-11": "span 11 / span 11",
                "span-12": "span 12 / span 12",
                "span-full": "1 / -1"
            },
            gridRowEnd: {
                auto: "auto",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
                13: "13"
            },
            gridRowStart: {
                auto: "auto",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
                13: "13"
            },
            gridTemplateColumns: {
                none: "none",
                subgrid: "subgrid",
                1: "repeat(1, minmax(0, 1fr))",
                2: "repeat(2, minmax(0, 1fr))",
                3: "repeat(3, minmax(0, 1fr))",
                4: "repeat(4, minmax(0, 1fr))",
                5: "repeat(5, minmax(0, 1fr))",
                6: "repeat(6, minmax(0, 1fr))",
                7: "repeat(7, minmax(0, 1fr))",
                8: "repeat(8, minmax(0, 1fr))",
                9: "repeat(9, minmax(0, 1fr))",
                10: "repeat(10, minmax(0, 1fr))",
                11: "repeat(11, minmax(0, 1fr))",
                12: "repeat(12, minmax(0, 1fr))"
            },
            gridTemplateRows: {
                none: "none",
                subgrid: "subgrid",
                1: "repeat(1, minmax(0, 1fr))",
                2: "repeat(2, minmax(0, 1fr))",
                3: "repeat(3, minmax(0, 1fr))",
                4: "repeat(4, minmax(0, 1fr))",
                5: "repeat(5, minmax(0, 1fr))",
                6: "repeat(6, minmax(0, 1fr))",
                7: "repeat(7, minmax(0, 1fr))",
                8: "repeat(8, minmax(0, 1fr))",
                9: "repeat(9, minmax(0, 1fr))",
                10: "repeat(10, minmax(0, 1fr))",
                11: "repeat(11, minmax(0, 1fr))",
                12: "repeat(12, minmax(0, 1fr))"
            },
            height: ({
                theme: e
            }) => ({
                auto: "auto",
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                full: "100%",
                screen: "100vh",
                svh: "100svh",
                lvh: "100lvh",
                dvh: "100dvh",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
            hueRotate: {
                0: "0deg",
                15: "15deg",
                30: "30deg",
                60: "60deg",
                90: "90deg",
                180: "180deg"
            },
            inset: ({
                theme: e
            }) => ({
                auto: "auto",
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                full: "100%"
            }),
            invert: {
                0: "0",
                DEFAULT: "100%"
            },
            keyframes: {
                spin: {
                    to: {
                        transform: "rotate(360deg)"
                    }
                },
                ping: {
                    "75%, 100%": {
                        transform: "scale(2)",
                        opacity: "0"
                    }
                },
                pulse: {
                    "50%": {
                        opacity: ".5"
                    }
                },
                bounce: {
                    "0%, 100%": {
                        transform: "translateY(-25%)",
                        animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
                    },
                    "50%": {
                        transform: "none",
                        animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
                    }
                }
            },
            letterSpacing: {
                tighter: "-0.05em",
                tight: "-0.025em",
                normal: "0em",
                wide: "0.025em",
                wider: "0.05em",
                widest: "0.1em"
            },
            lineHeight: {
                none: "1",
                tight: "1.25",
                snug: "1.375",
                normal: "1.5",
                relaxed: "1.625",
                loose: "2",
                3: ".75rem",
                4: "1rem",
                5: "1.25rem",
                6: "1.5rem",
                7: "1.75rem",
                8: "2rem",
                9: "2.25rem",
                10: "2.5rem"
            },
            listStyleType: {
                none: "none",
                disc: "disc",
                decimal: "decimal"
            },
            listStyleImage: {
                none: "none"
            },
            margin: ({
                theme: e
            }) => ({
                auto: "auto",
                ...e("spacing")
            }),
            lineClamp: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6"
            },
            maxHeight: ({
                theme: e
            }) => ({
                ...e("spacing"),
                none: "none",
                full: "100%",
                screen: "100vh",
                svh: "100svh",
                lvh: "100lvh",
                dvh: "100dvh",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
            maxWidth: ({
                theme: e,
                breakpoints: l
            }) => ({
                ...e("spacing"),
                none: "none",
                xs: "20rem",
                sm: "24rem",
                md: "28rem",
                lg: "32rem",
                xl: "36rem",
                "2xl": "42rem",
                "3xl": "48rem",
                "4xl": "56rem",
                "5xl": "64rem",
                "6xl": "72rem",
                "7xl": "80rem",
                full: "100%",
                min: "min-content",
                max: "max-content",
                fit: "fit-content",
                prose: "65ch",
                ...l(e("screens"))
            }),
            minHeight: ({
                theme: e
            }) => ({
                ...e("spacing"),
                full: "100%",
                screen: "100vh",
                svh: "100svh",
                lvh: "100lvh",
                dvh: "100dvh",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
            minWidth: ({
                theme: e
            }) => ({
                ...e("spacing"),
                full: "100%",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
            objectPosition: {
                bottom: "bottom",
                center: "center",
                left: "left",
                "left-bottom": "left bottom",
                "left-top": "left top",
                right: "right",
                "right-bottom": "right bottom",
                "right-top": "right top",
                top: "top"
            },
            opacity: {
                0: "0",
                5: "0.05",
                10: "0.1",
                15: "0.15",
                20: "0.2",
                25: "0.25",
                30: "0.3",
                35: "0.35",
                40: "0.4",
                45: "0.45",
                50: "0.5",
                55: "0.55",
                60: "0.6",
                65: "0.65",
                70: "0.7",
                75: "0.75",
                80: "0.8",
                85: "0.85",
                90: "0.9",
                95: "0.95",
                100: "1"
            },
            order: {
                first: "-9999",
                last: "9999",
                none: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12"
            },
            outlineColor: ({
                theme: e
            }) => e("colors"),
            outlineOffset: {
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px"
            },
            outlineWidth: {
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px"
            },
            padding: ({
                theme: e
            }) => e("spacing"),
            placeholderColor: ({
                theme: e
            }) => e("colors"),
            placeholderOpacity: ({
                theme: e
            }) => e("opacity"),
            ringColor: ({
                theme: e
            }) => ({
                DEFAULT: e("colors.blue.500", "#3b82f6"),
                ...e("colors")
            }),
            ringOffsetColor: ({
                theme: e
            }) => e("colors"),
            ringOffsetWidth: {
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px"
            },
            ringOpacity: ({
                theme: e
            }) => ({
                DEFAULT: "0.5",
                ...e("opacity")
            }),
            ringWidth: {
                DEFAULT: "3px",
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px"
            },
            rotate: {
                0: "0deg",
                1: "1deg",
                2: "2deg",
                3: "3deg",
                6: "6deg",
                12: "12deg",
                45: "45deg",
                90: "90deg",
                180: "180deg"
            },
            saturate: {
                0: "0",
                50: ".5",
                100: "1",
                150: "1.5",
                200: "2"
            },
            scale: {
                0: "0",
                50: ".5",
                75: ".75",
                90: ".9",
                95: ".95",
                100: "1",
                105: "1.05",
                110: "1.1",
                125: "1.25",
                150: "1.5"
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px"
            },
            scrollMargin: ({
                theme: e
            }) => ({
                ...e("spacing")
            }),
            scrollPadding: ({
                theme: e
            }) => e("spacing"),
            sepia: {
                0: "0",
                DEFAULT: "100%"
            },
            skew: {
                0: "0deg",
                1: "1deg",
                2: "2deg",
                3: "3deg",
                6: "6deg",
                12: "12deg"
            },
            space: ({
                theme: e
            }) => ({
                ...e("spacing")
            }),
            spacing: {
                px: "1px",
                0: "0px",
                .5: "0.125rem",
                1: "0.25rem",
                1.5: "0.375rem",
                2: "0.5rem",
                2.5: "0.625rem",
                3: "0.75rem",
                3.5: "0.875rem",
                4: "1rem",
                5: "1.25rem",
                6: "1.5rem",
                7: "1.75rem",
                8: "2rem",
                9: "2.25rem",
                10: "2.5rem",
                11: "2.75rem",
                12: "3rem",
                14: "3.5rem",
                16: "4rem",
                20: "5rem",
                24: "6rem",
                28: "7rem",
                32: "8rem",
                36: "9rem",
                40: "10rem",
                44: "11rem",
                48: "12rem",
                52: "13rem",
                56: "14rem",
                60: "15rem",
                64: "16rem",
                72: "18rem",
                80: "20rem",
                96: "24rem"
            },
            stroke: ({
                theme: e
            }) => ({
                none: "none",
                ...e("colors")
            }),
            strokeWidth: {
                0: "0",
                1: "1",
                2: "2"
            },
            supports: {},
            data: {},
            textColor: ({
                theme: e
            }) => e("colors"),
            textDecorationColor: ({
                theme: e
            }) => e("colors"),
            textDecorationThickness: {
                auto: "auto",
                "from-font": "from-font",
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px"
            },
            textIndent: ({
                theme: e
            }) => ({
                ...e("spacing")
            }),
            textOpacity: ({
                theme: e
            }) => e("opacity"),
            textUnderlineOffset: {
                auto: "auto",
                0: "0px",
                1: "1px",
                2: "2px",
                4: "4px",
                8: "8px"
            },
            transformOrigin: {
                center: "center",
                top: "top",
                "top-right": "top right",
                right: "right",
                "bottom-right": "bottom right",
                bottom: "bottom",
                "bottom-left": "bottom left",
                left: "left",
                "top-left": "top left"
            },
            transitionDelay: {
                0: "0s",
                75: "75ms",
                100: "100ms",
                150: "150ms",
                200: "200ms",
                300: "300ms",
                500: "500ms",
                700: "700ms",
                1e3: "1000ms"
            },
            transitionDuration: {
                DEFAULT: "150ms",
                0: "0s",
                75: "75ms",
                100: "100ms",
                150: "150ms",
                200: "200ms",
                300: "300ms",
                500: "500ms",
                700: "700ms",
                1e3: "1000ms"
            },
            transitionProperty: {
                none: "none",
                all: "all",
                DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
                opacity: "opacity",
                shadow: "box-shadow",
                transform: "transform"
            },
            transitionTimingFunction: {
                DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
                linear: "linear",
                in: "cubic-bezier(0.4, 0, 1, 1)",
                out: "cubic-bezier(0, 0, 0.2, 1)",
                "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
            },
            translate: ({
                theme: e
            }) => ({
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                full: "100%"
            }),
            size: ({
                theme: e
            }) => ({
                auto: "auto",
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                "1/12": "8.333333%",
                "2/12": "16.666667%",
                "3/12": "25%",
                "4/12": "33.333333%",
                "5/12": "41.666667%",
                "6/12": "50%",
                "7/12": "58.333333%",
                "8/12": "66.666667%",
                "9/12": "75%",
                "10/12": "83.333333%",
                "11/12": "91.666667%",
                full: "100%",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
            width: ({
                theme: e
            }) => ({
                auto: "auto",
                ...e("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                "1/12": "8.333333%",
                "2/12": "16.666667%",
                "3/12": "25%",
                "4/12": "33.333333%",
                "5/12": "41.666667%",
                "6/12": "50%",
                "7/12": "58.333333%",
                "8/12": "66.666667%",
                "9/12": "75%",
                "10/12": "83.333333%",
                "11/12": "91.666667%",
                full: "100%",
                screen: "100vw",
                svw: "100svw",
                lvw: "100lvw",
                dvw: "100dvw",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
            willChange: {
                auto: "auto",
                scroll: "scroll-position",
                contents: "contents",
                transform: "transform"
            },
            zIndex: {
                auto: "auto",
                0: "0",
                10: "10",
                20: "20",
                30: "30",
                40: "40",
                50: "50"
            }
        },
        plugins: []
    };
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    const l = f(Ue),
        n = oe;

    function f(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }

    function u(o) {
        var r;
        const v = ((r = o?.presets) !== null && r !== void 0 ? r : [l.default]).slice().reverse().flatMap(c => u(c instanceof Function ? c() : c)),
            p = {
                respectDefaultRingColorOpacity: {
                    theme: {
                        ringColor: ({
                            theme: c
                        }) => ({
                            DEFAULT: "#3b82f67f",
                            ...c("colors")
                        })
                    }
                },
                disableColorOpacityUtilitiesByDefault: {
                    corePlugins: {
                        backgroundOpacity: !1,
                        borderOpacity: !1,
                        divideOpacity: !1,
                        placeholderOpacity: !1,
                        ringOpacity: !1,
                        textOpacity: !1
                    }
                }
            },
            t = Object.keys(p).filter(c => (0, n.flagEnabled)(o, c)).map(c => p[c]);
        return [o, ...t, ...v]
    }
})(Be);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    const l = f(Se),
        n = f(Be);

    function f(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }

    function u(...o) {
        let [, ...r] = (0, n.default)(o[0]);
        return (0, l.default)([...o, ...r])
    }
})(_e);
let ue = _e;
var Ge = (ue.__esModule ? ue : {
    default: ue
}).default;
const Ye = fe(Ge);
var We = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    const l = ge,
        n = f(Ue);

    function f(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    const u = (0, l.cloneDeep)(n.default.theme)
})(We);
let se = We;
var Ke = (se.__esModule ? se : {
    default: se
}).default;
const ne = fe(Ke),
    G = Object.freeze({
        utopia: {
            minViewport: 320,
            maxViewport: 1440,
            rootSize: 16
        }
    }),
    R = (e, l) => {
        if (e === l) return `${e/G.utopia.rootSize}rem`;
        if (!G.utopia.rootSize) throw new Error("Root size is not defined in the config.");
        const n = e / G.utopia.rootSize,
            f = l / G.utopia.rootSize,
            u = G.utopia.minViewport / G.utopia.rootSize,
            o = G.utopia.maxViewport / G.utopia.rootSize,
            r = (f - n) / (o - u),
            v = -1 * u * r + n;
        return `clamp(${n}rem, ${v.toFixed(2)}rem + ${(r*100).toFixed(2)}vw, ${f}rem)`
    },
    J = (e, l, n, f) => {
        if (e === l) return `${e/G.utopia.rootSize}rem`;
        if (!G.utopia.rootSize) throw new Error("Root size is not defined in the config.");
        const u = e * n / G.utopia.rootSize,
            o = l * f / G.utopia.rootSize,
            r = G.utopia.minViewport / G.utopia.rootSize,
            v = G.utopia.maxViewport / G.utopia.rootSize,
            p = (o - u) / (v - r),
            t = -1 * r * p + u;
        return `clamp(${u}rem, ${t.toFixed(2)}rem + ${(p*100).toFixed(2)}vw, ${o}rem)`
    },
    Xe = {
        content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
        prefix: "u-",
        corePlugins: {
            container: !1
        },
        theme: {
            extend: {
                fontFamily: {
                    scoutSansRegular: ["scout-sans-regular", ...ne.fontFamily.sans],
                    scoutSansMedium: ["scout-sans-medium", ...ne.fontFamily.sans],
                    scoutSansSemicondBold: ["scout-sans-semicond-bold", ...ne.fontFamily.sans],
                    scoutSansWideMedium: ["scout-sans-wide-medium", ...ne.fontFamily.sans],
                    mono: ["scout-ibm-plex-mono", ...ne.fontFamily.sans]
                },
                fontSize: {
                    h1: R(64, 160),
                    h2: R(32, 72),
                    h3: R(28, 48),
                    h4: R(24, 32),
                    h5: R(20, 28),
                    "h1-caps": R(120, 315),
                    "h2-caps": R(56, 150),
                    "h3-caps": R(48, 110),
                    "h4-caps": R(36, 110),
                    "body-xl": R(24, 42),
                    "body-md": R(16, 19),
                    body: "16px",
                    "body-sm": "14px",
                    "body-xs": "11px",
                    "body-2xs": "10px",
                    button: "12px",
                    "c-32": "32px",
                    "c-28": "28px",
                    "ns-poster-title": R(132, 320),
                    "ns-display-title": R(60, 160),
                    "ns-h1": R(40, 72),
                    "ns-h2": R(32, 48),
                    "ns-h3": R(28, 32),
                    "ns-h4": R(24, 28),
                    "ns-h5": R(20, 24),
                    "ns-h6": R(16, 20),
                    "ns-technical-large": R(14, 14),
                    "ns-technical-medium": R(12, 12),
                    "ns-technical-small": R(10, 10)
                },
                lineHeight: {
                    "ns-poster-title-leading": J(64, 160, .9, .9),
                    "ns-display-title-leading": J(60, 160, .9, .9),
                    "ns-h1-leading": J(40, 72, .9, .9),
                    "ns-h2-leading": J(32, 48, 1.1, 1.1),
                    "ns-h3-leading": J(28, 32, 1, .9),
                    "ns-technical-medium-leading": J(12, 12, 1, 1),
                    "ns-technical-small-leading": J(10, 10, 1, 1)
                },
                colors: {
                    "solid-black": "#000000",
                    black: "#010101",
                    white: "#ffffff",
                    primary: "#cc0000",
                    destructive: "#C73201",
                    secondary: "#000000",
                    "dust-light": "#EDE9E8",
                    wires: "#626262",
                    "brand-dark-secondary": "#162C3B",
                    "brand-harvest-orange": "#cc0000",
                    "eerie-black": "#1C1B1F",
                    "brand-onyx": "#1C1C1A",
                    "grey-50": "#F0F0F0",
                    "grey-75": "#f9f9f9",
                    "grey-100": "#EAEAEA",
                    "grey-200": "#dbdbdb",
                    "grey-300": "#CCCCCC",
                    "grey-600": "#747473",
                    "grey-700": "#585856",
                    "grey-800": " #31312C",
                    "dark-blue": "#0F253A",
                    "brand-harvest-red": "#700500",
                    "contents-common-primary": "#919190",
                    "wires-600": "#626262",
                    "error-100": "#C73201",
                    "state-light-error": "#C73201",
                    "off-white": "#DAD2CF",
                    "neutral-600": "#525252",
                    "slate-300": "#849EAE"
                },
                screens: {
                    "3xs": "320px",
                    "2xs": "340px",
                    xs: "500px",
                    sm: "700px",
                    md: "1000px",
                    lg: "1200px",
                    xl: "1400px",
                    "2xl": "1600px",
                    "3xl": "1800px",
                    "4xl": "2000px",
                    "5xl": "2400px",
                    "to-5xl": {
                        max: "2399px"
                    },
                    "to-4xl": {
                        max: "1999px"
                    },
                    "to-3xl": {
                        max: "1799px"
                    },
                    "to-2xl": {
                        max: "1599px"
                    },
                    "to-xl": {
                        max: "1399px"
                    },
                    "to-lg": {
                        max: "1199px"
                    },
                    "to-tablet": {
                        max: "768px"
                    },
                    "from-md": {
                        min: "999px"
                    },
                    "to-md": {
                        max: "998px"
                    },
                    "to-sm": {
                        max: "699px"
                    },
                    "to-xs": {
                        max: "499px"
                    },
                    "to-3xs": {
                        max: "390px"
                    },
                    "to-2xs": {
                        max: "339px"
                    }
                },
                spacing: {
                    containerMargin: R(16, 100),
                    containerMarginLarge: R(16, 48),
                    containerMarginFull: "16px",
                    "fluid-xs": R(8, 10),
                    "fluid-sm": R(16, 24),
                    "fluid-md": R(24, 32),
                    "fluid-lg": R(32, 40),
                    "fluid-xl": R(40, 56),
                    "fluid-2xl": R(56, 80),
                    "fluid-3xl": R(80, 128),
                    "fluid-4xl": R(128, 160)
                },
                transitionDuration: {
                    fast: "0.2s",
                    default: "0.4s",
                    slow: "0.6s",
                    slower: "0.8s",
                    slowest: "1s"
                },
                transitionTimingFunction: {
                    default: "cubic-bezier(0.380, 0.005, 0.215, 1)",
                    "power1.in": "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                    "power1.out": "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    "power1.inOut": "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                    "power2.in": "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                    "power2.out": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                    "power2.inOut": "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
                    "power3.in": "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                    "power3.out": "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
                    "power3.inOut": "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
                    "power4.in": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                    "power4.out": "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
                    "power4.inOut": "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
                    "expo.in": "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                    "expo.out": "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                    "expo.inOut": "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
                    "back.in": "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                    "back.out": "cubic-bezier(0.175, 00.885, 0.320, 1.275)",
                    "back.inOut": "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                    "sine.in": "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
                    "sine.out": "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
                    "sine.inOut": "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                    "circ.in": "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                    "circ.out": "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
                    "circ.inOut": "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                    "slow.out": "cubic-bezier(.04,1.15,0.4,.99)",
                    bounce: "cubic-bezier(0.17, 0.67, 0.3, 1.33)",
                    smooth: "cubic-bezier(0.380, 0.005, 0.215, 1)"
                },
                zIndex: {
                    highest: "9999",
                    modal: "999",
                    modalOverlay: "998",
                    menu: "700",
                    header: "500",
                    above: "1",
                    default: "0",
                    below: "-1"
                },
                fontWeight: {
                    "extra-light": "350",
                    "lg-extra-light": "370",
                    "light-medium": "450"
                },
                backgroundImage: {
                    "linework-bg": "url('../assets/svgs/linework.svg')",
                    "arrow-down": "url('../assets/images/arrow-down.png')"
                },
                backgroundPosition: {
                    "center-right": "right 15px center"
                },
                boxShadow: {
                    dark: "0 0 0 2px var(--color), 0 0 0 3px var(--color-bg)",
                    "dark-inner": "inset 0 0 0 2px var(--color)"
                }
            }
        },
        plugins: []
    },
    ye = Ye(Xe),
    ce = de({
        sm: ye.theme.screens.sm,
        md: ye.theme.screens.md
    }),
    te = de({
        reducedMotion: "(prefers-reduced-motion: reduce)",
        touchScreen: "(hover: none)",
        portrait: "(orientation: portrait)",
        touchOrSmall: `(max-width: ${Number(ce.value?.sm.replace("px",""))-1}px), (hover: none)`,
        touchAndSmall: `(max-width: ${Number(ce.value?.sm.replace("px",""))-1}px) and (hover: none)`,
        medium: `(max-width: ${Number(ce.value?.md.replace("px",""))-1}px)`
    }),
    X = {
        reducedMotion: matchMedia(te.value?.reducedMotion || ""),
        touchScreen: matchMedia(te.value?.touchScreen || ""),
        touchOrSmall: matchMedia(te.value?.touchOrSmall || ""),
        touchAndSmall: matchMedia(te.value?.touchAndSmall || ""),
        medium: matchMedia(te.value?.medium || ""),
        portrait: matchMedia(te.value?.portrait || "")
    },
    Qe = de({
        isReducedMotion: X.reducedMotion.matches,
        isTouchScreen: X.touchScreen.matches,
        isTouchOrSmall: X.touchOrSmall.matches,
        isTouchAndSmall: X.touchAndSmall.matches,
        isMedium: X.medium.matches,
        isPortrait: X.portrait.matches
    });
for (const e in X) X[e].addEventListener("change", () => {
    const l = `is${e.charAt(0).toUpperCase()+e.slice(1)}`;
    Qe.setKey(l, X[e].matches)
});
var Ve = {
    exports: {}
};
(function(e, l) {
    (function(n, f) {
        e.exports = f()
    })(He, function() {
        var n = document,
            f = n.createTextNode.bind(n);

        function u(i, b, C) {
            i.style.setProperty(b, C)
        }

        function o(i, b) {
            return i.appendChild(b)
        }

        function r(i, b, C, M) {
            var E = n.createElement("span");
            return b && (E.className = b), C && (!M && E.setAttribute("data-" + b, C), E.textContent = C), i && o(i, E) || E
        }

        function v(i, b) {
            return i.getAttribute("data-" + b)
        }

        function p(i, b) {
            return !i || i.length == 0 ? [] : i.nodeName ? [i] : [].slice.call(i[0].nodeName ? i : (b || n).querySelectorAll(i))
        }

        function t(i) {
            for (var b = []; i--;) b[i] = [];
            return b
        }

        function c(i, b) {
            i && i.some(b)
        }

        function P(i) {
            return function(b) {
                return i[b]
            }
        }

        function m(i, b, C) {
            var M = "--" + b,
                E = M + "-index";
            c(C, function(j, B) {
                Array.isArray(j) ? c(j, function(N) {
                    u(N, E, B)
                }) : u(j, E, B)
            }), u(i, M + "-total", C.length)
        }
        var O = {};

        function h(i, b, C) {
            var M = C.indexOf(i);
            if (M == -1) {
                C.unshift(i);
                var E = O[i];
                if (!E) throw new Error("plugin not loaded: " + i);
                c(E.depends, function(B) {
                    h(B, i, C)
                })
            } else {
                var j = C.indexOf(b);
                C.splice(M, 1), C.splice(j, 0, i)
            }
            return C
        }

        function S(i, b, C, M) {
            return {
                by: i,
                depends: b,
                key: C,
                split: M
            }
        }

        function L(i) {
            return h(i, 0, []).map(P(O))
        }

        function D(i) {
            O[i.by] = i
        }

        function U(i, b, C, M, E) {
            i.normalize();
            var j = [],
                B = document.createDocumentFragment();
            M && j.push(i.previousSibling);
            var N = [];
            return p(i.childNodes).some(function(I) {
                if (I.tagName && !I.hasChildNodes()) {
                    N.push(I);
                    return
                }
                if (I.childNodes && I.childNodes.length) {
                    N.push(I), j.push.apply(j, U(I, b, C, M, E));
                    return
                }
                var Q = I.wholeText || "",
                    Z = Q.trim();
                if (Z.length) {
                    Q[0] === " " && N.push(f(" "));
                    var Ne = C === "" && typeof Intl.Segmenter == "function";
                    c(Ne ? Array.from(new Intl.Segmenter().segment(Z)).map(function(le) {
                        return le.segment
                    }) : Z.split(C), function(le, Ie) {
                        Ie && E && N.push(r(B, "whitespace", " ", E));
                        var xe = r(B, b, le);
                        j.push(xe), N.push(xe)
                    }), Q[Q.length - 1] === " " && N.push(f(" "))
                }
            }), c(N, function(I) {
                o(B, I)
            }), i.innerHTML = "", o(i, B), j
        }
        var F = 0;

        function V(i, b) {
            for (var C in b) i[C] = b[C];
            return i
        }
        var W = "words",
            q = S(W, F, "word", function(i) {
                return U(i, "word", /\s+/, 0, 1)
            }),
            Y = "chars",
            K = S(Y, [W], "char", function(i, b, C) {
                var M = [];
                return c(C[W], function(E, j) {
                    M.push.apply(M, U(E, "char", "", b.whitespace && j))
                }), M
            });

        function d(i) {
            i = i || {};
            var b = i.key;
            return p(i.target || "[data-splitting]").map(function(C) {
                var M = C["🍌"];
                if (!i.force && M) return M;
                M = C["🍌"] = {
                    el: C
                };
                var E = i.by || v(C, "splitting");
                (!E || E == "true") && (E = Y);
                var j = L(E),
                    B = V({}, i);
                return c(j, function(N) {
                    if (N.split) {
                        var I = N.by,
                            Q = (b ? "-" + b : "") + N.key,
                            Z = N.split(C, B, M);
                        Q && m(C, Q, Z), M[I] = Z, C.classList.add(I)
                    }
                }), C.classList.add("splitting"), M
            })
        }

        function A(i) {
            i = i || {};
            var b = i.target = r();
            return b.innerHTML = i.content, d(i), b.outerHTML
        }
        d.html = A, d.add = D;

        function _(i, b, C) {
            var M = p(b.matching || i.children, i),
                E = {};
            return c(M, function(j) {
                var B = Math.round(j[C]);
                (E[B] || (E[B] = [])).push(j)
            }), Object.keys(E).map(Number).sort(s).map(P(E))
        }

        function s(i, b) {
            return i - b
        }
        var x = S("lines", [W], "line", function(i, b, C) {
                return _(i, {
                    matching: C[W]
                }, "offsetTop")
            }),
            w = S("items", F, "item", function(i, b) {
                return p(b.matching || i.children, i)
            }),
            g = S("rows", F, "row", function(i, b) {
                return _(i, b, "offsetTop")
            }),
            k = S("cols", F, "col", function(i, b) {
                return _(i, b, "offsetLeft")
            }),
            a = S("grid", ["rows", "cols"]),
            y = "layout",
            $ = S(y, F, F, function(i, b) {
                var C = b.rows = +(b.rows || v(i, "rows") || 1),
                    M = b.columns = +(b.columns || v(i, "columns") || 1);
                if (b.image = b.image || v(i, "image") || i.currentSrc || i.src, b.image) {
                    var E = p("img", i)[0];
                    b.image = E && (E.currentSrc || E.src)
                }
                b.image && u(i, "background-image", "url(" + b.image + ")");
                for (var j = C * M, B = [], N = r(F, "cell-grid"); j--;) {
                    var I = r(N, "cell");
                    r(I, "cell-inner"), B.push(I)
                }
                return o(i, N), B
            }),
            z = S("cellRows", [y], "row", function(i, b, C) {
                var M = b.rows,
                    E = t(M);
                return c(C[y], function(j, B, N) {
                    E[Math.floor(B / (N.length / M))].push(j)
                }), E
            }),
            H = S("cellColumns", [y], "col", function(i, b, C) {
                var M = b.columns,
                    E = t(M);
                return c(C[y], function(j, B) {
                    E[B % M].push(j)
                }), E
            }),
            re = S("cells", ["cellRows", "cellColumns"], "cell", function(i, b, C) {
                return C[y]
            });
        return D(q), D(K), D(x), D(w), D(g), D(k), D(a), D($), D(z), D(H), D(re), d
    })
})(Ve);
var Je = Ve.exports;
const Ze = fe(Je);
class et extends HTMLElement {
    unbindScreenListener = () => {};
    originalContent = [];
    wWidth = 0;
    constructor() {
        super(), this.onResize = this.onResize.bind(this);
        for (let l = 0; l < this.children.length; l++) {
            const n = this.children[l];
            this.originalContent.push(n.cloneNode(!0))
        }
    }
    connectedCallback() {
        this.bindEvents()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        this.unbindScreenListener = qe.subscribe(this.onResize)
    }
    unbindEvents() {
        this.unbindScreenListener?.()
    }
    onResize({
        width: l
    }) {
        this.wWidth !== l && (this.wWidth = l, this.split())
    }
    split() {
        this.revertSplit(), requestAnimationFrame(() => {
            for (let l = 0; l < this.children.length; l++) {
                const n = this.children[l],
                    f = Ze({
                        target: n,
                        by: "lines"
                    });
                requestAnimationFrame(() => {
                    f.length && f.forEach(u => {
                        let o = "";
                        u.lines?.forEach((r, v) => {
                            const p = `<span class="c-splitlines_item"><span class="c-splitlines_mask">${r.map(t=>t.outerHTML).join('<span class="whitespace">&nbsp;</span>')}</span>${this.createSvg(v)}</span>`;
                            o += p
                        }), n.innerHTML = o
                    })
                })
            }
        })
    }
    revertSplit() {
        for (let l = 0; l < this.children.length; l++) this.children[l].remove(), this.appendChild(this.originalContent[l].cloneNode(!0))
    }
    createSvg(l) {
        const n = {
                x: 2,
                y: ee.utils.random(2, 5),
                bezier: {
                    x: ee.utils.random(2, 98),
                    y: ee.utils.random(2, 5)
                }
            },
            f = {
                x: 98,
                y: ee.utils.random(2, 5),
                bezier: {
                    x: ee.utils.random(2, 98),
                    y: ee.utils.random(2, 5)
                }
            };
        return `<svg class="c-splitlines_shape" viewBox="0 0 100 10" aria-hidden="true" preserveAspectRatio="none" style="--line-index: ${l};">
                        <path style="fill:none;stroke-width:1px;stroke-linecap:round;" d="M${n.x},${n.y}C${n.bezier.x},${n.bezier.y},${f.bezier.x},${f.bezier.y},${f.x},${f.y}"/>
                    </svg>`
    }
}
customElements.define("c-splitlines", et);
const we = {
    CALL: "Call"
};
class tt extends HTMLElement {
    $video;
    uid;
    constructor() {
        super(), this.onScrollCall = this.onScrollCall.bind(this), this.$video = this.querySelector("video"), this.uid = this.getAttribute("data-uid")
    }
    connectedCallback() {
        this.bindEvents()
    }
    disconnectedCallback() {
        this.unbindEvents()
    }
    bindEvents() {
        window.addEventListener(`${this.uid}${we.CALL}`, this.onScrollCall)
    }
    unbindEvents() {
        window.removeEventListener(`${this.uid}${we.CALL}`, this.onScrollCall)
    }
    onScrollCall(l) {
        const {
            way: n
        } = l.detail;
        switch (n) {
            case "enter":
                this.$video.play();
                break;
            case "leave":
                this.$video.pause();
                break
        }
    }
}
customElements.define("c-autoplay-video", tt);
export {
    Qe as $
};