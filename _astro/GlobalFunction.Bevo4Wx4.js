import {
    d as s
} from "./index.Cxecge6t.js";
const d = (e, t, a) => e && e.replace(t, a),
    i = (e, t) => Object.entries(t).reduce((a, [n, r]) => a.replace(n, r), e),
    u = e => {
        const t = new Date(e),
            a = t.getFullYear(),
            n = ("0" + (t.getMonth() + 1)).slice(-2),
            r = ("0" + t.getDate()).slice(-2);
        return n + "." + r + "." + a
    },
    l = e => {
        const t = new Date(e),
            a = t.getFullYear(),
            n = ("0" + (t.getMonth() + 1)).slice(-2),
            r = ("0" + t.getDate()).slice(-2);
        return a + "-" + n + "-" + r
    };
s.INLINES.HYPERLINK + "";
const m = e => {
        const t = ["", "k", "M", "B", "T", "Q"],
            a = Math.abs(e);
        if (a < 1e3) return e.toString();
        const n = Math.floor(Math.log10(a) / 3);
        return `${(a/Math.pow(1e3,n)).toFixed(2)} ${t[n]}`
    },
    g = (e, t = "en-US") => new Date(e).toLocaleDateString(t, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
export {
    l as a, u as d, g as f, m as g, i as m, d as r
};