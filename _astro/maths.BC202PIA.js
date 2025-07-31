const c = (a, r, t, o, s) => (s - a) / (r - a) * (o - t) + t,
    n = (a, r, t) => Math.max(a, Math.min(t, r)),
    e = (a, r) => {
        const t = Math.pow(10, r);
        return Math.round((a + Number.EPSILON) * t) / t
    },
    u = (a, r, t) => a * (1 - t) + r * t;
export {
    n as c, u as l, c as m, e as r
};