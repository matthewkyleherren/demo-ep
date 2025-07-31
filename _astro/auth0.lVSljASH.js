import {
    b as Dn,
    c as Or,
    $ as Cn,
    a as ir
} from "./reactive.DqYsbDQg.js";
import {
    c as wo
} from "./clsx.B-dksMZM.js";
import {
    g as _o
} from "./_commonjsHelpers.Cpj98o6Y.js";
import {
    r as So
} from "./index.l3JPYhe8.js";

function Oo(t, e) {
    for (var r = 0; r < e.length; r++) {
        const n = e[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const i in n)
                if (i !== "default" && !(i in t)) {
                    const a = Object.getOwnPropertyDescriptor(n, i);
                    a && Object.defineProperty(t, i, a.get ? a : {
                        enumerable: !0,
                        get: () => n[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}

function ne(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") {
        var i = 0;
        for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
    }
    return r
}
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Jr(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

function Kr(t, e) {
    return t(e = {
        exports: {}
    }, e.exports), e.exports
}
var Te = Kr(function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function n() {
            var i = this;
            this.locked = new Map, this.addToLocked = function(a, o) {
                var s = i.locked.get(a);
                s === void 0 ? o === void 0 ? i.locked.set(a, []) : i.locked.set(a, [o]) : o !== void 0 && (s.unshift(o), i.locked.set(a, s))
            }, this.isLocked = function(a) {
                return i.locked.has(a)
            }, this.lock = function(a) {
                return new Promise(function(o, s) {
                    i.isLocked(a) ? i.addToLocked(a, o) : (i.addToLocked(a), o())
                })
            }, this.unlock = function(a) {
                var o = i.locked.get(a);
                if (o !== void 0 && o.length !== 0) {
                    var s = o.pop();
                    i.locked.set(a, o), s !== void 0 && setTimeout(s, 0)
                } else i.locked.delete(a)
            }
        }
        return n.getInstance = function() {
            return n.instance === void 0 && (n.instance = new n), n.instance
        }, n
    }();
    e.default = function() {
        return r.getInstance()
    }
});
Jr(Te);
var To = Jr(Kr(function(t, e) {
    var r = Ie && Ie.__awaiter || function(l, f, d, h) {
            return new(d || (d = Promise))(function(v, y) {
                function m(k) {
                    try {
                        b(h.next(k))
                    } catch (w) {
                        y(w)
                    }
                }

                function p(k) {
                    try {
                        b(h.throw(k))
                    } catch (w) {
                        y(w)
                    }
                }

                function b(k) {
                    k.done ? v(k.value) : new d(function(w) {
                        w(k.value)
                    }).then(m, p)
                }
                b((h = h.apply(l, f || [])).next())
            })
        },
        n = Ie && Ie.__generator || function(l, f) {
            var d, h, v, y, m = {
                label: 0,
                sent: function() {
                    if (1 & v[0]) throw v[1];
                    return v[1]
                },
                trys: [],
                ops: []
            };
            return y = {
                next: p(0),
                throw: p(1),
                return: p(2)
            }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
                return this
            }), y;

            function p(b) {
                return function(k) {
                    return function(w) {
                        if (d) throw new TypeError("Generator is already executing.");
                        for (; m;) try {
                            if (d = 1, h && (v = 2 & w[0] ? h.return : w[0] ? h.throw || ((v = h.return) && v.call(h), 0) : h.next) && !(v = v.call(h, w[1])).done) return v;
                            switch (h = 0, v && (w = [2 & w[0], v.value]), w[0]) {
                                case 0:
                                case 1:
                                    v = w;
                                    break;
                                case 4:
                                    return m.label++, {
                                        value: w[1],
                                        done: !1
                                    };
                                case 5:
                                    m.label++, h = w[1], w = [0];
                                    continue;
                                case 7:
                                    w = m.ops.pop(), m.trys.pop();
                                    continue;
                                default:
                                    if (v = m.trys, !((v = v.length > 0 && v[v.length - 1]) || w[0] !== 6 && w[0] !== 2)) {
                                        m = 0;
                                        continue
                                    }
                                    if (w[0] === 3 && (!v || w[1] > v[0] && w[1] < v[3])) {
                                        m.label = w[1];
                                        break
                                    }
                                    if (w[0] === 6 && m.label < v[1]) {
                                        m.label = v[1], v = w;
                                        break
                                    }
                                    if (v && m.label < v[2]) {
                                        m.label = v[2], m.ops.push(w);
                                        break
                                    }
                                    v[2] && m.ops.pop(), m.trys.pop();
                                    continue
                            }
                            w = f.call(l, m)
                        } catch (_) {
                            w = [6, _], h = 0
                        } finally {
                            d = v = 0
                        }
                        if (5 & w[0]) throw w[1];
                        return {
                            value: w[0] ? w[1] : void 0,
                            done: !0
                        }
                    }([b, k])
                }
            }
        },
        i = Ie;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = "browser-tabs-lock-key",
        o = {
            key: function(l) {
                return r(i, void 0, void 0, function() {
                    return n(this, function(f) {
                        throw new Error("Unsupported")
                    })
                })
            },
            getItem: function(l) {
                return r(i, void 0, void 0, function() {
                    return n(this, function(f) {
                        throw new Error("Unsupported")
                    })
                })
            },
            clear: function() {
                return r(i, void 0, void 0, function() {
                    return n(this, function(l) {
                        return [2, window.localStorage.clear()]
                    })
                })
            },
            removeItem: function(l) {
                return r(i, void 0, void 0, function() {
                    return n(this, function(f) {
                        throw new Error("Unsupported")
                    })
                })
            },
            setItem: function(l, f) {
                return r(i, void 0, void 0, function() {
                    return n(this, function(d) {
                        throw new Error("Unsupported")
                    })
                })
            },
            keySync: function(l) {
                return window.localStorage.key(l)
            },
            getItemSync: function(l) {
                return window.localStorage.getItem(l)
            },
            clearSync: function() {
                return window.localStorage.clear()
            },
            removeItemSync: function(l) {
                return window.localStorage.removeItem(l)
            },
            setItemSync: function(l, f) {
                return window.localStorage.setItem(l, f)
            }
        };

    function s(l) {
        return new Promise(function(f) {
            return setTimeout(f, l)
        })
    }

    function u(l) {
        for (var f = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", d = "", h = 0; h < l; h++) d += f[Math.floor(Math.random() * f.length)];
        return d
    }
    var c = function() {
        function l(f) {
            this.acquiredIatSet = new Set, this.storageHandler = void 0, this.id = Date.now().toString() + u(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = f, l.waiters === void 0 && (l.waiters = [])
        }
        return l.prototype.acquireLock = function(f, d) {
            return d === void 0 && (d = 5e3), r(this, void 0, void 0, function() {
                var h, v, y, m, p, b, k;
                return n(this, function(w) {
                    switch (w.label) {
                        case 0:
                            h = Date.now() + u(4), v = Date.now() + d, y = a + "-" + f, m = this.storageHandler === void 0 ? o : this.storageHandler, w.label = 1;
                        case 1:
                            return Date.now() < v ? [4, s(30)] : [3, 8];
                        case 2:
                            return w.sent(), m.getItemSync(y) !== null ? [3, 5] : (p = this.id + "-" + f + "-" + h, [4, s(Math.floor(25 * Math.random()))]);
                        case 3:
                            return w.sent(), m.setItemSync(y, JSON.stringify({
                                id: this.id,
                                iat: h,
                                timeoutKey: p,
                                timeAcquired: Date.now(),
                                timeRefreshed: Date.now()
                            })), [4, s(30)];
                        case 4:
                            return w.sent(), (b = m.getItemSync(y)) !== null && (k = JSON.parse(b)).id === this.id && k.iat === h ? (this.acquiredIatSet.add(h), this.refreshLockWhileAcquired(y, h), [2, !0]) : [3, 7];
                        case 5:
                            return l.lockCorrector(this.storageHandler === void 0 ? o : this.storageHandler), [4, this.waitForSomethingToChange(v)];
                        case 6:
                            w.sent(), w.label = 7;
                        case 7:
                            return h = Date.now() + u(4), [3, 1];
                        case 8:
                            return [2, !1]
                    }
                })
            })
        }, l.prototype.refreshLockWhileAcquired = function(f, d) {
            return r(this, void 0, void 0, function() {
                var h = this;
                return n(this, function(v) {
                    return setTimeout(function() {
                        return r(h, void 0, void 0, function() {
                            var y, m, p;
                            return n(this, function(b) {
                                switch (b.label) {
                                    case 0:
                                        return [4, Te.default().lock(d)];
                                    case 1:
                                        return b.sent(), this.acquiredIatSet.has(d) ? (y = this.storageHandler === void 0 ? o : this.storageHandler, (m = y.getItemSync(f)) === null ? (Te.default().unlock(d), [2]) : ((p = JSON.parse(m)).timeRefreshed = Date.now(), y.setItemSync(f, JSON.stringify(p)), Te.default().unlock(d), this.refreshLockWhileAcquired(f, d), [2])) : (Te.default().unlock(d), [2])
                                }
                            })
                        })
                    }, 1e3), [2]
                })
            })
        }, l.prototype.waitForSomethingToChange = function(f) {
            return r(this, void 0, void 0, function() {
                return n(this, function(d) {
                    switch (d.label) {
                        case 0:
                            return [4, new Promise(function(h) {
                                var v = !1,
                                    y = Date.now(),
                                    m = !1;

                                function p() {
                                    if (m || (window.removeEventListener("storage", p), l.removeFromWaiting(p), clearTimeout(b), m = !0), !v) {
                                        v = !0;
                                        var k = 50 - (Date.now() - y);
                                        k > 0 ? setTimeout(h, k) : h(null)
                                    }
                                }
                                window.addEventListener("storage", p), l.addToWaiting(p);
                                var b = setTimeout(p, Math.max(0, f - Date.now()))
                            })];
                        case 1:
                            return d.sent(), [2]
                    }
                })
            })
        }, l.addToWaiting = function(f) {
            this.removeFromWaiting(f), l.waiters !== void 0 && l.waiters.push(f)
        }, l.removeFromWaiting = function(f) {
            l.waiters !== void 0 && (l.waiters = l.waiters.filter(function(d) {
                return d !== f
            }))
        }, l.notifyWaiters = function() {
            l.waiters !== void 0 && l.waiters.slice().forEach(function(f) {
                return f()
            })
        }, l.prototype.releaseLock = function(f) {
            return r(this, void 0, void 0, function() {
                return n(this, function(d) {
                    switch (d.label) {
                        case 0:
                            return [4, this.releaseLock__private__(f)];
                        case 1:
                            return [2, d.sent()]
                    }
                })
            })
        }, l.prototype.releaseLock__private__ = function(f) {
            return r(this, void 0, void 0, function() {
                var d, h, v, y;
                return n(this, function(m) {
                    switch (m.label) {
                        case 0:
                            return d = this.storageHandler === void 0 ? o : this.storageHandler, h = a + "-" + f, (v = d.getItemSync(h)) === null ? [2] : (y = JSON.parse(v)).id !== this.id ? [3, 2] : [4, Te.default().lock(y.iat)];
                        case 1:
                            m.sent(), this.acquiredIatSet.delete(y.iat), d.removeItemSync(h), Te.default().unlock(y.iat), l.notifyWaiters(), m.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, l.lockCorrector = function(f) {
            for (var d = Date.now() - 5e3, h = f, v = [], y = 0;;) {
                var m = h.keySync(y);
                if (m === null) break;
                v.push(m), y++
            }
            for (var p = !1, b = 0; b < v.length; b++) {
                var k = v[b];
                if (k.includes(a)) {
                    var w = h.getItemSync(k);
                    if (w !== null) {
                        var _ = JSON.parse(w);
                        (_.timeRefreshed === void 0 && _.timeAcquired < d || _.timeRefreshed !== void 0 && _.timeRefreshed < d) && (h.removeItemSync(k), p = !0)
                    }
                }
            }
            p && l.notifyWaiters()
        }, l.waiters = void 0, l
    }();
    e.default = c
}));
const Eo = {
        timeoutInSeconds: 60
    },
    Bi = {
        name: "auth0-spa-js",
        version: "2.1.3"
    },
    Gi = () => Date.now();
class $ extends Error {
    constructor(e, r) {
        super(r), this.error = e, this.error_description = r, Object.setPrototypeOf(this, $.prototype)
    }
    static fromPayload({
        error: e,
        error_description: r
    }) {
        return new $(e, r)
    }
}
class Xr extends $ {
    constructor(e, r, n, i = null) {
        super(e, r), this.state = n, this.appState = i, Object.setPrototypeOf(this, Xr.prototype)
    }
}
class kt extends $ {
    constructor() {
        super("timeout", "Timeout"), Object.setPrototypeOf(this, kt.prototype)
    }
}
class Yr extends kt {
    constructor(e) {
        super(), this.popup = e, Object.setPrototypeOf(this, Yr.prototype)
    }
}
class en extends $ {
    constructor(e) {
        super("cancelled", "Popup closed"), this.popup = e, Object.setPrototypeOf(this, en.prototype)
    }
}
class tn extends $ {
    constructor(e, r, n) {
        super(e, r), this.mfa_token = n, Object.setPrototypeOf(this, tn.prototype)
    }
}
class $t extends $ {
    constructor(e, r) {
        super("missing_refresh_token", `Missing Refresh Token (audience: '${xn(e,["default"])}', scope: '${xn(r)}')`), this.audience = e, this.scope = r, Object.setPrototypeOf(this, $t.prototype)
    }
}

function xn(t, e = []) {
    return t && !e.includes(t) ? t : ""
}
const At = () => window.crypto,
    ar = () => {
        const t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
        let e = "";
        return Array.from(At().getRandomValues(new Uint8Array(43))).forEach(r => e += t[r % t.length]), e
    },
    Rn = t => btoa(t),
    Tr = t => {
        var {
            clientId: e
        } = t, r = ne(t, ["clientId"]);
        return new URLSearchParams((n => Object.keys(n).filter(i => n[i] !== void 0).reduce((i, a) => Object.assign(Object.assign({}, i), {
            [a]: n[a]
        }), {}))(Object.assign({
            client_id: e
        }, r))).toString()
    },
    Fn = t => (e => decodeURIComponent(atob(e).split("").map(r => "%" + ("00" + r.charCodeAt(0).toString(16)).slice(-2)).join("")))(t.replace(/_/g, "/").replace(/-/g, "+")),
    Io = async (t, e) => {
        const r = await fetch(t, e);
        return {
            ok: r.ok,
            json: await r.json()
        }
    }, No = async (t, e, r) => {
        const n = new AbortController;
        let i;
        return e.signal = n.signal, Promise.race([Io(t, e), new Promise((a, o) => {
            i = setTimeout(() => {
                n.abort(), o(new Error("Timeout when executing 'fetch'"))
            }, r)
        })]).finally(() => {
            clearTimeout(i)
        })
    }, Do = async (t, e, r, n, i, a, o) => {
        return s = {
            auth: {
                audience: e,
                scope: r
            },
            timeout: i,
            fetchUrl: t,
            fetchOptions: n,
            useFormData: o
        }, u = a, new Promise(function(c, l) {
            const f = new MessageChannel;
            f.port1.onmessage = function(d) {
                d.data.error ? l(new Error(d.data.error)) : c(d.data), f.port1.close()
            }, u.postMessage(s, [f.port2])
        });
        var s, u
    }, Co = async (t, e, r, n, i, a, o = 1e4) => i ? Do(t, e, r, n, o, i, a) : No(t, n, o);
async function xo(t, e) {
    var {
        baseUrl: r,
        timeout: n,
        audience: i,
        scope: a,
        auth0Client: o,
        useFormData: s
    } = t, u = ne(t, ["baseUrl", "timeout", "audience", "scope", "auth0Client", "useFormData"]);
    const c = s ? Tr(u) : JSON.stringify(u);
    return await async function(l, f, d, h, v, y, m) {
        let p, b = null;
        for (let T = 0; T < 3; T++) try {
            p = await Co(l, d, h, v, y, m, f), b = null;
            break
        } catch (N) {
            b = N
        }
        if (b) throw b;
        const k = p.json,
            {
                error: w,
                error_description: _
            } = k,
            S = ne(k, ["error", "error_description"]),
            {
                ok: I
            } = p;
        if (!I) {
            const T = _ || `HTTP error. Unable to fetch ${l}`;
            throw w === "mfa_required" ? new tn(w, T, S.mfa_token) : w === "missing_refresh_token" ? new $t(d, h) : new $(w || "request_error", T)
        }
        return S
    }(`${r}/oauth/token`, n, i || "default", a, {
        method: "POST",
        body: c,
        headers: {
            "Content-Type": s ? "application/x-www-form-urlencoded" : "application/json",
            "Auth0-Client": btoa(JSON.stringify(o || Bi))
        }
    }, e, s)
}
const Rt = (...t) => {
    return (e = t.filter(Boolean).join(" ").trim().split(/\s+/), Array.from(new Set(e))).join(" ");
    var e
};
class ae {
    constructor(e, r = "@@auth0spajs@@", n) {
        this.prefix = r, this.suffix = n, this.clientId = e.clientId, this.scope = e.scope, this.audience = e.audience
    }
    toKey() {
        return [this.prefix, this.clientId, this.audience, this.scope, this.suffix].filter(Boolean).join("::")
    }
    static fromKey(e) {
        const [r, n, i, a] = e.split("::");
        return new ae({
            clientId: n,
            scope: a,
            audience: i
        }, r)
    }
    static fromCacheEntry(e) {
        const {
            scope: r,
            audience: n,
            client_id: i
        } = e;
        return new ae({
            scope: r,
            audience: n,
            clientId: i
        })
    }
}
class Ro {
    set(e, r) {
        localStorage.setItem(e, JSON.stringify(r))
    }
    get(e) {
        const r = window.localStorage.getItem(e);
        if (r) try {
            return JSON.parse(r)
        } catch {
            return
        }
    }
    remove(e) {
        localStorage.removeItem(e)
    }
    allKeys() {
        return Object.keys(window.localStorage).filter(e => e.startsWith("@@auth0spajs@@"))
    }
}
class $i {
    constructor() {
        this.enclosedCache = function() {
            let e = {};
            return {
                set(r, n) {
                    e[r] = n
                },
                get(r) {
                    const n = e[r];
                    if (n) return n
                },
                remove(r) {
                    delete e[r]
                },
                allKeys: () => Object.keys(e)
            }
        }()
    }
}
class Fo {
    constructor(e, r, n) {
        this.cache = e, this.keyManifest = r, this.nowProvider = n || Gi
    }
    async setIdToken(e, r, n) {
        var i;
        const a = this.getIdTokenCacheKey(e);
        await this.cache.set(a, {
            id_token: r,
            decodedToken: n
        }), await ((i = this.keyManifest) === null || i === void 0 ? void 0 : i.add(a))
    }
    async getIdToken(e) {
        const r = await this.cache.get(this.getIdTokenCacheKey(e.clientId));
        if (!r && e.scope && e.audience) {
            const n = await this.get(e);
            return !n || !n.id_token || !n.decodedToken ? void 0 : {
                id_token: n.id_token,
                decodedToken: n.decodedToken
            }
        }
        if (r) return {
            id_token: r.id_token,
            decodedToken: r.decodedToken
        }
    }
    async get(e, r = 0) {
        var n;
        let i = await this.cache.get(e.toKey());
        if (!i) {
            const s = await this.getCacheKeys();
            if (!s) return;
            const u = this.matchExistingCacheKey(e, s);
            u && (i = await this.cache.get(u))
        }
        if (!i) return;
        const a = await this.nowProvider(),
            o = Math.floor(a / 1e3);
        return i.expiresAt - r < o ? i.body.refresh_token ? (i.body = {
            refresh_token: i.body.refresh_token
        }, await this.cache.set(e.toKey(), i), i.body) : (await this.cache.remove(e.toKey()), void await ((n = this.keyManifest) === null || n === void 0 ? void 0 : n.remove(e.toKey()))) : i.body
    }
    async set(e) {
        var r;
        const n = new ae({
                clientId: e.client_id,
                scope: e.scope,
                audience: e.audience
            }),
            i = await this.wrapCacheEntry(e);
        await this.cache.set(n.toKey(), i), await ((r = this.keyManifest) === null || r === void 0 ? void 0 : r.add(n.toKey()))
    }
    async clear(e) {
        var r;
        const n = await this.getCacheKeys();
        n && (await n.filter(i => !e || i.includes(e)).reduce(async (i, a) => {
            await i, await this.cache.remove(a)
        }, Promise.resolve()), await ((r = this.keyManifest) === null || r === void 0 ? void 0 : r.clear()))
    }
    async wrapCacheEntry(e) {
        const r = await this.nowProvider();
        return {
            body: e,
            expiresAt: Math.floor(r / 1e3) + e.expires_in
        }
    }
    async getCacheKeys() {
        var e;
        return this.keyManifest ? (e = await this.keyManifest.get()) === null || e === void 0 ? void 0 : e.keys : this.cache.allKeys ? this.cache.allKeys() : void 0
    }
    getIdTokenCacheKey(e) {
        return new ae({
            clientId: e
        }, "@@auth0spajs@@", "@@user@@").toKey()
    }
    matchExistingCacheKey(e, r) {
        return r.filter(n => {
            var i;
            const a = ae.fromKey(n),
                o = new Set(a.scope && a.scope.split(" ")),
                s = ((i = e.scope) === null || i === void 0 ? void 0 : i.split(" ")) || [],
                u = a.scope && s.reduce((c, l) => c && o.has(l), !0);
            return a.prefix === "@@auth0spajs@@" && a.clientId === e.clientId && a.audience === e.audience && u
        })[0]
    }
}
class Po {
    constructor(e, r, n) {
        this.storage = e, this.clientId = r, this.cookieDomain = n, this.storageKey = `a0.spajs.txs.${this.clientId}`
    }
    create(e) {
        this.storage.save(this.storageKey, e, {
            daysUntilExpire: 1,
            cookieDomain: this.cookieDomain
        })
    }
    get() {
        return this.storage.get(this.storageKey)
    }
    remove() {
        this.storage.remove(this.storageKey, {
            cookieDomain: this.cookieDomain
        })
    }
}
const at = t => typeof t == "number",
    Mo = ["iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr", "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch", "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm"],
    Ao = t => {
        if (!t.id_token) throw new Error("ID token is required but missing");
        const e = (a => {
            const o = a.split("."),
                [s, u, c] = o;
            if (o.length !== 3 || !s || !u || !c) throw new Error("ID token could not be decoded");
            const l = JSON.parse(Fn(u)),
                f = {
                    __raw: a
                },
                d = {};
            return Object.keys(l).forEach(h => {
                f[h] = l[h], Mo.includes(h) || (d[h] = l[h])
            }), {
                encoded: {
                    header: s,
                    payload: u,
                    signature: c
                },
                header: JSON.parse(Fn(s)),
                claims: f,
                user: d
            }
        })(t.id_token);
        if (!e.claims.iss) throw new Error("Issuer (iss) claim must be a string present in the ID token");
        if (e.claims.iss !== t.iss) throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${t.iss}", found "${e.claims.iss}"`);
        if (!e.user.sub) throw new Error("Subject (sub) claim must be a string present in the ID token");
        if (e.header.alg !== "RS256") throw new Error(`Signature algorithm of "${e.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);
        if (!e.claims.aud || typeof e.claims.aud != "string" && !Array.isArray(e.claims.aud)) throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
        if (Array.isArray(e.claims.aud)) {
            if (!e.claims.aud.includes(t.aud)) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but was not one of "${e.claims.aud.join(", ")}"`);
            if (e.claims.aud.length > 1) {
                if (!e.claims.azp) throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
                if (e.claims.azp !== t.aud) throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${t.aud}", found "${e.claims.azp}"`)
            }
        } else if (e.claims.aud !== t.aud) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${t.aud}" but found "${e.claims.aud}"`);
        if (t.nonce) {
            if (!e.claims.nonce) throw new Error("Nonce (nonce) claim must be a string present in the ID token");
            if (e.claims.nonce !== t.nonce) throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${t.nonce}", found "${e.claims.nonce}"`)
        }
        if (t.max_age && !at(e.claims.auth_time)) throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
        if (e.claims.exp == null || !at(e.claims.exp)) throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
        if (!at(e.claims.iat)) throw new Error("Issued At (iat) claim must be a number present in the ID token");
        const r = t.leeway || 60,
            n = new Date(t.now || Date.now()),
            i = new Date(0);
        if (i.setUTCSeconds(e.claims.exp + r), n > i) throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${n}) is after expiration time (${i})`);
        if (e.claims.nbf != null && at(e.claims.nbf)) {
            const a = new Date(0);
            if (a.setUTCSeconds(e.claims.nbf - r), n < a) throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${n}) is before ${a}`)
        }
        if (e.claims.auth_time != null && at(e.claims.auth_time)) {
            const a = new Date(0);
            if (a.setUTCSeconds(parseInt(e.claims.auth_time) + t.max_age + r), n > a) throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${n}) is after last auth at ${a}`)
        }
        if (t.organization) {
            const a = t.organization.trim();
            if (a.startsWith("org_")) {
                const o = a;
                if (!e.claims.org_id) throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
                if (o !== e.claims.org_id) throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${o}", found "${e.claims.org_id}"`)
            } else {
                const o = a.toLowerCase();
                if (!e.claims.org_name) throw new Error("Organization Name (org_name) claim must be a string present in the ID token");
                if (o !== e.claims.org_name) throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${o}", found "${e.claims.org_name}"`)
            }
        }
        return e
    };
var De = Kr(function(t, e) {
    var r = Ie && Ie.__assign || function() {
        return r = Object.assign || function(u) {
            for (var c, l = 1, f = arguments.length; l < f; l++)
                for (var d in c = arguments[l]) Object.prototype.hasOwnProperty.call(c, d) && (u[d] = c[d]);
            return u
        }, r.apply(this, arguments)
    };

    function n(u, c) {
        if (!c) return "";
        var l = "; " + u;
        return c === !0 ? l : l + "=" + c
    }

    function i(u, c, l) {
        return encodeURIComponent(u).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(c).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function(f) {
            if (typeof f.expires == "number") {
                var d = new Date;
                d.setMilliseconds(d.getMilliseconds() + 864e5 * f.expires), f.expires = d
            }
            return n("Expires", f.expires ? f.expires.toUTCString() : "") + n("Domain", f.domain) + n("Path", f.path) + n("Secure", f.secure) + n("SameSite", f.sameSite)
        }(l)
    }

    function a(u) {
        for (var c = {}, l = u ? u.split("; ") : [], f = /(%[\dA-F]{2})+/gi, d = 0; d < l.length; d++) {
            var h = l[d].split("="),
                v = h.slice(1).join("=");
            v.charAt(0) === '"' && (v = v.slice(1, -1));
            try {
                c[h[0].replace(f, decodeURIComponent)] = v.replace(f, decodeURIComponent)
            } catch {}
        }
        return c
    }

    function o() {
        return a(document.cookie)
    }

    function s(u, c, l) {
        document.cookie = i(u, c, r({
            path: "/"
        }, l))
    }
    e.__esModule = !0, e.encode = i, e.parse = a, e.getAll = o, e.get = function(u) {
        return o()[u]
    }, e.set = s, e.remove = function(u, c) {
        s(u, "", r(r({}, c), {
            expires: -1
        }))
    }
});
Jr(De), De.encode, De.parse, De.getAll;
var jo = De.get,
    Zi = De.set,
    Hi = De.remove;
const qe = {
        get(t) {
            const e = jo(t);
            if (e !== void 0) return JSON.parse(e)
        },
        save(t, e, r) {
            let n = {};
            window.location.protocol === "https:" && (n = {
                secure: !0,
                sameSite: "none"
            }), r?.daysUntilExpire && (n.expires = r.daysUntilExpire), r?.cookieDomain && (n.domain = r.cookieDomain), Zi(t, JSON.stringify(e), n)
        },
        remove(t, e) {
            let r = {};
            e?.cookieDomain && (r.domain = e.cookieDomain), Hi(t, r)
        }
    },
    Vo = {
        get(t) {
            return qe.get(t) || qe.get(`_legacy_${t}`)
        },
        save(t, e, r) {
            let n = {};
            window.location.protocol === "https:" && (n = {
                secure: !0
            }), r?.daysUntilExpire && (n.expires = r.daysUntilExpire), r?.cookieDomain && (n.domain = r.cookieDomain), Zi(`_legacy_${t}`, JSON.stringify(e), n), qe.save(t, e, r)
        },
        remove(t, e) {
            let r = {};
            e?.cookieDomain && (r.domain = e.cookieDomain), Hi(t, r), qe.remove(t, e), qe.remove(`_legacy_${t}`, e)
        }
    },
    qo = {
        get(t) {
            if (typeof sessionStorage > "u") return;
            const e = sessionStorage.getItem(t);
            return e != null ? JSON.parse(e) : void 0
        },
        save(t, e) {
            sessionStorage.setItem(t, JSON.stringify(e))
        },
        remove(t) {
            sessionStorage.removeItem(t)
        }
    };

function Lo(t, e, r) {
    var n = e === void 0 ? null : e,
        i = function(u, c) {
            var l = atob(u);
            if (c) {
                for (var f = new Uint8Array(l.length), d = 0, h = l.length; d < h; ++d) f[d] = l.charCodeAt(d);
                return String.fromCharCode.apply(null, new Uint16Array(f.buffer))
            }
            return l
        }(t, r !== void 0 && r),
        a = i.indexOf(`
`, 10) + 1,
        o = i.substring(a) + (n ? "//# sourceMappingURL=" + n : ""),
        s = new Blob([o], {
            type: "application/javascript"
        });
    return URL.createObjectURL(s)
}
var Pn, Mn, An, or, zo = (Pn = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo=", Mn = null, An = !1, function(t) {
    return or = or || Lo(Pn, Mn, An), new Worker(or, t)
});
const sr = {};
class Qo {
    constructor(e, r) {
        this.cache = e, this.clientId = r, this.manifestKey = this.createManifestKeyFrom(this.clientId)
    }
    async add(e) {
        var r;
        const n = new Set(((r = await this.cache.get(this.manifestKey)) === null || r === void 0 ? void 0 : r.keys) || []);
        n.add(e), await this.cache.set(this.manifestKey, {
            keys: [...n]
        })
    }
    async remove(e) {
        const r = await this.cache.get(this.manifestKey);
        if (r) {
            const n = new Set(r.keys);
            return n.delete(e), n.size > 0 ? await this.cache.set(this.manifestKey, {
                keys: [...n]
            }) : await this.cache.remove(this.manifestKey)
        }
    }
    get() {
        return this.cache.get(this.manifestKey)
    }
    clear() {
        return this.cache.remove(this.manifestKey)
    }
    createManifestKeyFrom(e) {
        return `@@auth0spajs@@::${e}`
    }
}
const Wo = {
        memory: () => new $i().enclosedCache,
        localstorage: () => new Ro
    },
    jn = t => Wo[t],
    Vn = t => {
        const {
            openUrl: e,
            onRedirect: r
        } = t, n = ne(t, ["openUrl", "onRedirect"]);
        return Object.assign(Object.assign({}, n), {
            openUrl: e === !1 || e ? e : r
        })
    },
    ur = new To;
class Uo {
    constructor(e) {
        let r, n;
        if (this.userCache = new $i().enclosedCache, this.defaultOptions = {
                authorizationParams: {
                    scope: "openid profile email"
                },
                useRefreshTokensFallback: !1,
                useFormData: !0
            }, this._releaseLockOnPageHide = async () => {
                await ur.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide)
            }, this.options = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), e), {
                authorizationParams: Object.assign(Object.assign({}, this.defaultOptions.authorizationParams), e.authorizationParams)
            }), typeof window < "u" && (() => {
                if (!At()) throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
                if (At().subtle === void 0) throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `)
            })(), e.cache && e.cacheLocation, e.cache) n = e.cache;
        else {
            if (r = e.cacheLocation || "memory", !jn(r)) throw new Error(`Invalid cache location "${r}"`);
            n = jn(r)()
        }
        this.httpTimeoutMs = e.httpTimeoutInSeconds ? 1e3 * e.httpTimeoutInSeconds : 1e4, this.cookieStorage = e.legacySameSiteCookie === !1 ? qe : Vo, this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`, this.isAuthenticatedCookieName = (o => `auth0.${o}.is.authenticated`)(this.options.clientId), this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1;
        const i = e.useCookiesForTransactions ? this.cookieStorage : qo;
        var a;
        this.scope = Rt("openid", this.options.authorizationParams.scope, this.options.useRefreshTokens ? "offline_access" : ""), this.transactionManager = new Po(i, this.options.clientId, this.options.cookieDomain), this.nowProvider = this.options.nowProvider || Gi, this.cacheManager = new Fo(n, n.allKeys ? void 0 : new Qo(n, this.options.clientId), this.nowProvider), this.domainUrl = (a = this.options.domain, /^https?:\/\//.test(a) ? a : `https://${a}`), this.tokenIssuer = ((o, s) => o ? o.startsWith("https://") ? o : `https://${o}/` : `${s}/`)(this.options.issuer, this.domainUrl), typeof window < "u" && window.Worker && this.options.useRefreshTokens && r === "memory" && (this.options.workerUrl ? this.worker = new Worker(this.options.workerUrl) : this.worker = new zo)
    }
    _url(e) {
        const r = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || Bi)));
        return `${this.domainUrl}${e}&auth0Client=${r}`
    }
    _authorizeUrl(e) {
        return this._url(`/authorize?${Tr(e)}`)
    }
    async _verifyIdToken(e, r, n) {
        const i = await this.nowProvider();
        return Ao({
            iss: this.tokenIssuer,
            aud: this.options.clientId,
            id_token: e,
            nonce: r,
            organization: n,
            leeway: this.options.leeway,
            max_age: (a = this.options.authorizationParams.max_age, typeof a != "string" ? a : parseInt(a, 10) || void 0),
            now: i
        });
        var a
    }
    _processOrgHint(e) {
        e ? this.cookieStorage.save(this.orgHintCookieName, e, {
            daysUntilExpire: this.sessionCheckExpiryDays,
            cookieDomain: this.options.cookieDomain
        }) : this.cookieStorage.remove(this.orgHintCookieName, {
            cookieDomain: this.options.cookieDomain
        })
    }
    async _prepareAuthorizeUrl(e, r, n) {
        const i = Rn(ar()),
            a = Rn(ar()),
            o = ar(),
            s = (l => {
                const f = new Uint8Array(l);
                return (d => {
                    const h = {
                        "+": "-",
                        "/": "_",
                        "=": ""
                    };
                    return d.replace(/[+/=]/g, v => h[v])
                })(window.btoa(String.fromCharCode(...Array.from(f))))
            })(await (async l => await At().subtle.digest({
                name: "SHA-256"
            }, new TextEncoder().encode(l)))(o)),
            u = ((l, f, d, h, v, y, m, p) => Object.assign(Object.assign(Object.assign({
                client_id: l.clientId
            }, l.authorizationParams), d), {
                scope: Rt(f, d.scope),
                response_type: "code",
                response_mode: p || "query",
                state: h,
                nonce: v,
                redirect_uri: m || l.authorizationParams.redirect_uri,
                code_challenge: y,
                code_challenge_method: "S256"
            }))(this.options, this.scope, e, i, a, s, e.redirect_uri || this.options.authorizationParams.redirect_uri || n, r?.response_mode),
            c = this._authorizeUrl(u);
        return {
            nonce: a,
            code_verifier: o,
            scope: u.scope,
            audience: u.audience || "default",
            redirect_uri: u.redirect_uri,
            state: i,
            url: c
        }
    }
    async loginWithPopup(e, r) {
        var n;
        if (e = e || {}, !(r = r || {}).popup && (r.popup = (s => {
                const u = window.screenX + (window.innerWidth - 400) / 2,
                    c = window.screenY + (window.innerHeight - 600) / 2;
                return window.open(s, "auth0:authorize:popup", `left=${u},top=${c},width=400,height=600,resizable,scrollbars=yes,status=1`)
            })(""), !r.popup)) throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
        const i = await this._prepareAuthorizeUrl(e.authorizationParams || {}, {
            response_mode: "web_message"
        }, window.location.origin);
        r.popup.location.href = i.url;
        const a = await (s => new Promise((u, c) => {
            let l;
            const f = setInterval(() => {
                    s.popup && s.popup.closed && (clearInterval(f), clearTimeout(d), window.removeEventListener("message", l, !1), c(new en(s.popup)))
                }, 1e3),
                d = setTimeout(() => {
                    clearInterval(f), c(new Yr(s.popup)), window.removeEventListener("message", l, !1)
                }, 1e3 * (s.timeoutInSeconds || 60));
            l = function(h) {
                if (h.data && h.data.type === "authorization_response") {
                    if (clearTimeout(d), clearInterval(f), window.removeEventListener("message", l, !1), s.popup.close(), h.data.response.error) return c($.fromPayload(h.data.response));
                    u(h.data.response)
                }
            }, window.addEventListener("message", l)
        }))(Object.assign(Object.assign({}, r), {
            timeoutInSeconds: r.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60
        }));
        if (i.state !== a.state) throw new $("state_mismatch", "Invalid state");
        const o = ((n = e.authorizationParams) === null || n === void 0 ? void 0 : n.organization) || this.options.authorizationParams.organization;
        await this._requestToken({
            audience: i.audience,
            scope: i.scope,
            code_verifier: i.code_verifier,
            grant_type: "authorization_code",
            code: a.code,
            redirect_uri: i.redirect_uri
        }, {
            nonceIn: i.nonce,
            organization: o
        })
    }
    async getUser() {
        var e;
        const r = await this._getIdTokenFromCache();
        return (e = r?.decodedToken) === null || e === void 0 ? void 0 : e.user
    }
    async getIdTokenClaims() {
        var e;
        const r = await this._getIdTokenFromCache();
        return (e = r?.decodedToken) === null || e === void 0 ? void 0 : e.claims
    }
    async loginWithRedirect(e = {}) {
        var r;
        const n = Vn(e),
            {
                openUrl: i,
                fragment: a,
                appState: o
            } = n,
            s = ne(n, ["openUrl", "fragment", "appState"]),
            u = ((r = s.authorizationParams) === null || r === void 0 ? void 0 : r.organization) || this.options.authorizationParams.organization,
            c = await this._prepareAuthorizeUrl(s.authorizationParams || {}),
            {
                url: l
            } = c,
            f = ne(c, ["url"]);
        this.transactionManager.create(Object.assign(Object.assign(Object.assign({}, f), {
            appState: o
        }), u && {
            organization: u
        }));
        const d = a ? `${l}#${a}` : l;
        i ? await i(d) : window.location.assign(d)
    }
    async handleRedirectCallback(e = window.location.href) {
        const r = e.split("?").slice(1);
        if (r.length === 0) throw new Error("There are no query params available for parsing.");
        const {
            state: n,
            code: i,
            error: a,
            error_description: o
        } = (f => {
            f.indexOf("#") > -1 && (f = f.substring(0, f.indexOf("#")));
            const d = new URLSearchParams(f);
            return {
                state: d.get("state"),
                code: d.get("code") || void 0,
                error: d.get("error") || void 0,
                error_description: d.get("error_description") || void 0
            }
        })(r.join("")), s = this.transactionManager.get();
        if (!s) throw new $("missing_transaction", "Invalid state");
        if (this.transactionManager.remove(), a) throw new Xr(a, o || a, n, s.appState);
        if (!s.code_verifier || s.state && s.state !== n) throw new $("state_mismatch", "Invalid state");
        const u = s.organization,
            c = s.nonce,
            l = s.redirect_uri;
        return await this._requestToken(Object.assign({
            audience: s.audience,
            scope: s.scope,
            code_verifier: s.code_verifier,
            grant_type: "authorization_code",
            code: i
        }, l ? {
            redirect_uri: l
        } : {}), {
            nonceIn: c,
            organization: u
        }), {
            appState: s.appState
        }
    }
    async checkSession(e) {
        if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
            if (!this.cookieStorage.get("auth0.is.authenticated")) return;
            this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                daysUntilExpire: this.sessionCheckExpiryDays,
                cookieDomain: this.options.cookieDomain
            }), this.cookieStorage.remove("auth0.is.authenticated")
        }
        try {
            await this.getTokenSilently(e)
        } catch {}
    }
    async getTokenSilently(e = {}) {
        var r;
        const n = Object.assign(Object.assign({
                cacheMode: "on"
            }, e), {
                authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e.authorizationParams), {
                    scope: Rt(this.scope, (r = e.authorizationParams) === null || r === void 0 ? void 0 : r.scope)
                })
            }),
            i = await ((a, o) => {
                let s = sr[o];
                return s || (s = a().finally(() => {
                    delete sr[o], s = null
                }), sr[o] = s), s
            })(() => this._getTokenSilently(n), `${this.options.clientId}::${n.authorizationParams.audience}::${n.authorizationParams.scope}`);
        return e.detailedResponse ? i : i?.access_token
    }
    async _getTokenSilently(e) {
        const {
            cacheMode: r
        } = e, n = ne(e, ["cacheMode"]);
        if (r !== "off") {
            const i = await this._getEntryFromCache({
                scope: n.authorizationParams.scope,
                audience: n.authorizationParams.audience || "default",
                clientId: this.options.clientId
            });
            if (i) return i
        }
        if (r !== "cache-only") {
            if (!await (async (i, a = 3) => {
                    for (let o = 0; o < a; o++)
                        if (await i()) return !0;
                    return !1
                })(() => ur.acquireLock("auth0.lock.getTokenSilently", 5e3), 10)) throw new kt;
            try {
                if (window.addEventListener("pagehide", this._releaseLockOnPageHide), r !== "off") {
                    const c = await this._getEntryFromCache({
                        scope: n.authorizationParams.scope,
                        audience: n.authorizationParams.audience || "default",
                        clientId: this.options.clientId
                    });
                    if (c) return c
                }
                const i = this.options.useRefreshTokens ? await this._getTokenUsingRefreshToken(n) : await this._getTokenFromIFrame(n),
                    {
                        id_token: a,
                        access_token: o,
                        oauthTokenScope: s,
                        expires_in: u
                    } = i;
                return Object.assign(Object.assign({
                    id_token: a,
                    access_token: o
                }, s ? {
                    scope: s
                } : null), {
                    expires_in: u
                })
            } finally {
                await ur.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide)
            }
        }
    }
    async getTokenWithPopup(e = {}, r = {}) {
        var n;
        const i = Object.assign(Object.assign({}, e), {
            authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e.authorizationParams), {
                scope: Rt(this.scope, (n = e.authorizationParams) === null || n === void 0 ? void 0 : n.scope)
            })
        });
        return r = Object.assign(Object.assign({}, Eo), r), await this.loginWithPopup(i, r), (await this.cacheManager.get(new ae({
            scope: i.authorizationParams.scope,
            audience: i.authorizationParams.audience || "default",
            clientId: this.options.clientId
        }))).access_token
    }
    async isAuthenticated() {
        return !!await this.getUser()
    }
    _buildLogoutUrl(e) {
        e.clientId !== null ? e.clientId = e.clientId || this.options.clientId : delete e.clientId;
        const r = e.logoutParams || {},
            {
                federated: n
            } = r,
            i = ne(r, ["federated"]),
            a = n ? "&federated" : "";
        return this._url(`/v2/logout?${Tr(Object.assign({clientId:e.clientId},i))}`) + a
    }
    async logout(e = {}) {
        const r = Vn(e),
            {
                openUrl: n
            } = r,
            i = ne(r, ["openUrl"]);
        e.clientId === null ? await this.cacheManager.clear() : await this.cacheManager.clear(e.clientId || this.options.clientId), this.cookieStorage.remove(this.orgHintCookieName, {
            cookieDomain: this.options.cookieDomain
        }), this.cookieStorage.remove(this.isAuthenticatedCookieName, {
            cookieDomain: this.options.cookieDomain
        }), this.userCache.remove("@@user@@");
        const a = this._buildLogoutUrl(i);
        n ? await n(a) : n !== !1 && window.location.assign(a)
    }
    async _getTokenFromIFrame(e) {
        const r = Object.assign(Object.assign({}, e.authorizationParams), {
                prompt: "none"
            }),
            n = this.cookieStorage.get(this.orgHintCookieName);
        n && !r.organization && (r.organization = n);
        const {
            url: i,
            state: a,
            nonce: o,
            code_verifier: s,
            redirect_uri: u,
            scope: c,
            audience: l
        } = await this._prepareAuthorizeUrl(r, {
            response_mode: "web_message"
        }, window.location.origin);
        try {
            if (window.crossOriginIsolated) throw new $("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
            const f = e.timeoutInSeconds || this.options.authorizeTimeoutInSeconds,
                d = await ((v, y, m = 60) => new Promise((p, b) => {
                    const k = window.document.createElement("iframe");
                    k.setAttribute("width", "0"), k.setAttribute("height", "0"), k.style.display = "none";
                    const w = () => {
                        window.document.body.contains(k) && (window.document.body.removeChild(k), window.removeEventListener("message", _, !1))
                    };
                    let _;
                    const S = setTimeout(() => {
                        b(new kt), w()
                    }, 1e3 * m);
                    _ = function(I) {
                        if (I.origin != y || !I.data || I.data.type !== "authorization_response") return;
                        const T = I.source;
                        T && T.close(), I.data.response.error ? b($.fromPayload(I.data.response)) : p(I.data.response), clearTimeout(S), window.removeEventListener("message", _, !1), setTimeout(w, 2e3)
                    }, window.addEventListener("message", _, !1), window.document.body.appendChild(k), k.setAttribute("src", v)
                }))(i, this.domainUrl, f);
            if (a !== d.state) throw new $("state_mismatch", "Invalid state");
            const h = await this._requestToken(Object.assign(Object.assign({}, e.authorizationParams), {
                code_verifier: s,
                code: d.code,
                grant_type: "authorization_code",
                redirect_uri: u,
                timeout: e.authorizationParams.timeout || this.httpTimeoutMs
            }), {
                nonceIn: o,
                organization: r.organization
            });
            return Object.assign(Object.assign({}, h), {
                scope: c,
                oauthTokenScope: h.scope,
                audience: l
            })
        } catch (f) {
            throw f.error === "login_required" && this.logout({
                openUrl: !1
            }), f
        }
    }
    async _getTokenUsingRefreshToken(e) {
        const r = await this.cacheManager.get(new ae({
            scope: e.authorizationParams.scope,
            audience: e.authorizationParams.audience || "default",
            clientId: this.options.clientId
        }));
        if (!(r && r.refresh_token || this.worker)) {
            if (this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e);
            throw new $t(e.authorizationParams.audience || "default", e.authorizationParams.scope)
        }
        const n = e.authorizationParams.redirect_uri || this.options.authorizationParams.redirect_uri || window.location.origin,
            i = typeof e.timeoutInSeconds == "number" ? 1e3 * e.timeoutInSeconds : null;
        try {
            const a = await this._requestToken(Object.assign(Object.assign(Object.assign({}, e.authorizationParams), {
                grant_type: "refresh_token",
                refresh_token: r && r.refresh_token,
                redirect_uri: n
            }), i && {
                timeout: i
            }));
            return Object.assign(Object.assign({}, a), {
                scope: e.authorizationParams.scope,
                oauthTokenScope: a.scope,
                audience: e.authorizationParams.audience || "default"
            })
        } catch (a) {
            if ((a.message.indexOf("Missing Refresh Token") > -1 || a.message && a.message.indexOf("invalid refresh token") > -1) && this.options.useRefreshTokensFallback) return await this._getTokenFromIFrame(e);
            throw a
        }
    }
    async _saveEntryInCache(e) {
        const {
            id_token: r,
            decodedToken: n
        } = e, i = ne(e, ["id_token", "decodedToken"]);
        this.userCache.set("@@user@@", {
            id_token: r,
            decodedToken: n
        }), await this.cacheManager.setIdToken(this.options.clientId, e.id_token, e.decodedToken), await this.cacheManager.set(i)
    }
    async _getIdTokenFromCache() {
        const e = this.options.authorizationParams.audience || "default",
            r = await this.cacheManager.getIdToken(new ae({
                clientId: this.options.clientId,
                audience: e,
                scope: this.scope
            })),
            n = this.userCache.get("@@user@@");
        return r && r.id_token === n?.id_token ? n : (this.userCache.set("@@user@@", r), r)
    }
    async _getEntryFromCache({
        scope: e,
        audience: r,
        clientId: n
    }) {
        const i = await this.cacheManager.get(new ae({
            scope: e,
            audience: r,
            clientId: n
        }), 60);
        if (i && i.access_token) {
            const {
                access_token: a,
                oauthTokenScope: o,
                expires_in: s
            } = i, u = await this._getIdTokenFromCache();
            return u && Object.assign(Object.assign({
                id_token: u.id_token,
                access_token: a
            }, o ? {
                scope: o
            } : null), {
                expires_in: s
            })
        }
    }
    async _requestToken(e, r) {
        const {
            nonceIn: n,
            organization: i
        } = r || {}, a = await xo(Object.assign({
            baseUrl: this.domainUrl,
            client_id: this.options.clientId,
            auth0Client: this.options.auth0Client,
            useFormData: this.options.useFormData,
            timeout: this.httpTimeoutMs
        }, e), this.worker), o = await this._verifyIdToken(a.id_token, n, i);
        return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({}, a), {
            decodedToken: o,
            scope: e.scope,
            audience: e.audience || "default"
        }), a.scope ? {
            oauthTokenScope: a.scope
        } : null), {
            client_id: this.options.clientId
        })), this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
            daysUntilExpire: this.sessionCheckExpiryDays,
            cookieDomain: this.options.cookieDomain
        }), this._processOrgHint(i || o.claims.org_id), Object.assign(Object.assign({}, a), {
            decodedToken: o
        })
    }
}
const Bo = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "query",
            name: {
                kind: "Name",
                value: "GetCustomerReservations"
            },
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    alias: {
                        kind: "Name",
                        value: "customer"
                    },
                    name: {
                        kind: "Name",
                        value: "myUser"
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "first_name"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "reservations"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "code"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "status"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "car_model"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sub_model"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "delivery_country"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "created_at"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "transactions"
                                    },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "card_last_four"
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "card_brand"
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "payment_amount"
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "payment_method"
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    },
    Go = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "mutation",
            name: {
                kind: "Name",
                value: "UpdateCustomerConsumer"
            },
            variableDefinitions: [{
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "input"
                    }
                },
                type: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "UpdateCustomerConsumerInput"
                    }
                }
            }],
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "updateCustomerConsumer"
                    },
                    arguments: [{
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "input"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "input"
                            }
                        }
                    }],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "STATUS"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "NOTIFICATION"
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    },
    $o = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "mutation",
            name: {
                kind: "Name",
                value: "UpdateReservationConsumer"
            },
            variableDefinitions: [{
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "updateReservationInput"
                    }
                },
                type: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "UpdateReservationInput"
                    }
                }
            }],
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "updateReservationConsumer"
                    },
                    arguments: [{
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "update_reservation_input"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "updateReservationInput"
                            }
                        }
                    }],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "STATUS"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "NOTIFICATION"
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    },
    Zo = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "mutation",
            name: {
                kind: "Name",
                value: "CancelReservationConsumer"
            },
            variableDefinitions: [{
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "cancelReservationInput"
                    }
                },
                type: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "CancelReservationInput"
                    }
                }
            }],
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "cancelReservationConsumer"
                    },
                    arguments: [{
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "cancel_reservation_input"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "cancelReservationInput"
                            }
                        }
                    }],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "STATUS"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "NOTIFICATION"
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    },
    Ho = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "mutation",
            name: {
                kind: "Name",
                value: "subscribe"
            },
            variableDefinitions: [{
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "email"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "first_name"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "last_name"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "postal_code"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "recaptcha_token"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "recaptcha_token_type"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }],
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "subscribe"
                    },
                    arguments: [{
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "email"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "email"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "first_name"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "first_name"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "last_name"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "last_name"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "postal_code"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "postal_code"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "recaptcha_token"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "recaptcha_token"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "recaptcha_token_type"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "recaptcha_token_type"
                            }
                        }
                    }],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "data"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "STATUS"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "NOTIFICATION"
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    },
    Jo = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "query",
            name: {
                kind: "Name",
                value: "GetCustomerProfile"
            },
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    alias: {
                        kind: "Name",
                        value: "customer"
                    },
                    name: {
                        kind: "Name",
                        value: "myUser"
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "uuid"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "first_name"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "last_name"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "email"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "phone"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "country_code"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "country"
                            }
                        }]
                    }
                }]
            }
        }]
    },
    Ko = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "mutation",
            name: {
                kind: "Name",
                value: "CreateReservationConsumer"
            },
            variableDefinitions: [{
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "createReservationInput"
                    }
                },
                type: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "CreateReservationInput"
                    }
                }
            }],
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "createReservationConsumer"
                    },
                    arguments: [{
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "create_reservation_input"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "createReservationInput"
                            }
                        }
                    }],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "data"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "pending_reservation_id"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "client_secret"
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "STATUS"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "NOTIFICATION"
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    },
    Xo = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "query",
            name: {
                kind: "Name",
                value: "PaymentDetail"
            },
            variableDefinitions: [{
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "paymentDetailInput"
                    }
                },
                type: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "PaymentDetailInput"
                    }
                }
            }],
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "paymentDetail"
                    },
                    arguments: [{
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "payment_detail_input"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "paymentDetailInput"
                            }
                        }
                    }],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "data"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "reservation_code"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "car_model"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sub_model"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "created_at"
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "STATUS"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "NOTIFICATION"
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    },
    Yo = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "query",
            name: {
                kind: "Name",
                value: "GetReservationByReservationCode"
            },
            variableDefinitions: [{
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "reservationInput"
                    }
                },
                type: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ReservationInput"
                    }
                }
            }],
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "getReservationByReservationCode"
                    },
                    arguments: [{
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "reservation_input"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "reservationInput"
                            }
                        }
                    }],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "data"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "reservation_code"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "car_model"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sub_model"
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "created_at"
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "STATUS"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "NOTIFICATION"
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    },
    es = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "mutation",
            name: {
                kind: "Name",
                value: "scRequest"
            },
            variableDefinitions: [{
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "first_name"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "last_name"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "email"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "phone"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "org_name"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "org_type"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "org_location"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "req_title"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "req_category"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "req_pillar"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "response_request_deadline"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "req_additional_details"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "recaptcha_token"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "event_date"
                    }
                },
                type: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "String"
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "org_website"
                    }
                },
                type: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "String"
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "monetary_request"
                    }
                },
                type: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Float"
                    }
                }
            }, {
                kind: "VariableDefinition",
                variable: {
                    kind: "Variable",
                    name: {
                        kind: "Name",
                        value: "recaptcha_token_type"
                    }
                },
                type: {
                    kind: "NonNullType",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }
            }],
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    name: {
                        kind: "Name",
                        value: "scRequest"
                    },
                    arguments: [{
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "first_name"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "first_name"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "last_name"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "last_name"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "email"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "email"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "phone"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "phone"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "org_name"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "org_name"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "org_type"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "org_type"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "org_location"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "org_location"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "req_title"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "req_title"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "req_category"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "req_category"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "req_pillar"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "req_pillar"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "response_request_deadline"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "response_request_deadline"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "req_additional_details"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "req_additional_details"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "recaptcha_token"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "recaptcha_token"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "event_date"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "event_date"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "org_website"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "org_website"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "monetary_request"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "monetary_request"
                            }
                        }
                    }, {
                        kind: "Argument",
                        name: {
                            kind: "Name",
                            value: "recaptcha_token_type"
                        },
                        value: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "recaptcha_token_type"
                            }
                        }
                    }],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "data"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "STATUS"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "NOTIFICATION"
                                    },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "title"
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "message"
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    },
    ts = {
        kind: "Document",
        definitions: [{
            kind: "OperationDefinition",
            operation: "query",
            name: {
                kind: "Name",
                value: "GetCustomerInformation"
            },
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "Field",
                    alias: {
                        kind: "Name",
                        value: "customer"
                    },
                    name: {
                        kind: "Name",
                        value: "myUser"
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "first_name"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "last_name"
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "email"
                            }
                        }]
                    }
                }]
            }
        }]
    },
    rs = {
        "\n    query GetCustomerReservations {\n        customer: myUser {\n            first_name\n            reservations {\n                code\n                status\n                car_model\n                sub_model\n                delivery_country\n                created_at\n                transactions {\n                    card_last_four\n                    card_brand\n                    payment_amount\n                    payment_method\n                }\n            }\n        }\n    }\n": Bo,
        "\n   mutation UpdateCustomerConsumer($input: UpdateCustomerConsumerInput) {\n        updateCustomerConsumer(input: $input) {\n            STATUS {\n                NOTIFICATION\n            }\n        }\n    }\n": Go,
        "\n    mutation UpdateReservationConsumer($updateReservationInput: UpdateReservationInput) {\n        updateReservationConsumer(update_reservation_input: $updateReservationInput) {\n            STATUS {\n                NOTIFICATION\n            }\n        }\n    }\n": $o,
        "\n    mutation CancelReservationConsumer($cancelReservationInput: CancelReservationInput) {\n        cancelReservationConsumer(cancel_reservation_input: $cancelReservationInput) {\n            STATUS {\n                NOTIFICATION\n            }\n        }\n    }\n": Zo,
        "\n mutation subscribe($email: String!, $first_name: String!, $last_name: String!, $postal_code: String!,  $recaptcha_token: String!,$recaptcha_token_type:String!) {\n    subscribe(email: $email, first_name: $first_name, last_name: $last_name, postal_code: $postal_code, recaptcha_token: $recaptcha_token,recaptcha_token_type:$recaptcha_token_type) {\n    data\n    STATUS {\n        NOTIFICATION\n        }\n    }\n}\n": Ho,
        "\n    query GetCustomerProfile {\n        customer: myUser {\n            uuid\n            first_name\n            last_name\n            email\n            phone\n            country_code\n            country\n        }\n    }\n": Jo,
        "\n	mutation CreateReservationConsumer($createReservationInput: CreateReservationInput) {\n		createReservationConsumer(\n			create_reservation_input: $createReservationInput\n		) {\n			data {\n				pending_reservation_id\n                client_secret\n			}\n			STATUS {\n				NOTIFICATION\n			}\n		}\n	}\n": Ko,
        "\nquery PaymentDetail($paymentDetailInput: PaymentDetailInput) {\n	paymentDetail(payment_detail_input: $paymentDetailInput) {\n	  data {\n			reservation_code\n            car_model\n            sub_model\n            created_at\n		}\n	  STATUS {\n			NOTIFICATION\n		}\n	}\n}\n": Xo,
        "\nquery GetReservationByReservationCode($reservationInput: ReservationInput) {\n	getReservationByReservationCode(reservation_input: $reservationInput) {\n	    data {\n			reservation_code\n            car_model\n            sub_model\n            created_at\n		}\n	    STATUS {\n			NOTIFICATION\n		}\n	}\n}\n": Yo,
        "\nmutation scRequest($first_name: String!, $last_name: String!, $email: String!, $phone: String!, $org_name: String!, $org_type: String!, $org_location: String!, $req_title: String!, $req_category: String!, $req_pillar: String!, $response_request_deadline: String!, $req_additional_details: String!, $recaptcha_token: String!, $event_date: String, $org_website: String, $monetary_request: Float,$recaptcha_token_type:String!){\n	scRequest(first_name: $first_name, last_name: $last_name, email: $email, phone: $phone, org_name: $org_name, org_type: $org_type, org_location: $org_location, req_title: $req_title, req_category: $req_category, req_pillar: $req_pillar, response_request_deadline: $response_request_deadline, req_additional_details: $req_additional_details, recaptcha_token: $recaptcha_token,event_date: $event_date,org_website: $org_website,monetary_request: $monetary_request,recaptcha_token_type:$recaptcha_token_type) {\n	data\n	STATUS {\n	NOTIFICATION{\n    title\n    message\n    }\n	}\n	}\n	}\n": es,
        "\n    query GetCustomerInformation {\n        customer: myUser {\n            first_name\n            last_name\n            email\n        }\n    }\n": ts
    };

function ns(t) {
    return rs[t] ?? {}
}
var Er = function(t, e) {
    return Er = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
    }, Er(t, e)
};

function ue(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Er(t, e);

    function r() {
        this.constructor = t
    }
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r)
}
var g = function() {
    return g = Object.assign || function(e) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
        }
        return e
    }, g.apply(this, arguments)
};

function X(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
    return r
}

function ve(t, e, r, n) {
    function i(a) {
        return a instanceof r ? a : new r(function(o) {
            o(a)
        })
    }
    return new(r || (r = Promise))(function(a, o) {
        function s(l) {
            try {
                c(n.next(l))
            } catch (f) {
                o(f)
            }
        }

        function u(l) {
            try {
                c(n.throw(l))
            } catch (f) {
                o(f)
            }
        }

        function c(l) {
            l.done ? a(l.value) : i(l.value).then(s, u)
        }
        c((n = n.apply(t, e || [])).next())
    })
}

function me(t, e) {
    var r = {
            label: 0,
            sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        },
        n, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }), o;

    function s(c) {
        return function(l) {
            return u([c, l])
        }
    }

    function u(c) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; o && (o = 0, c[0] && (r = 0)), r;) try {
            if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
            switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
                case 0:
                case 1:
                    a = c;
                    break;
                case 4:
                    return r.label++, {
                        value: c[1],
                        done: !1
                    };
                case 5:
                    r.label++, i = c[1], c = [0];
                    continue;
                case 7:
                    c = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
                        r.label = c[1];
                        break
                    }
                    if (c[0] === 6 && r.label < a[1]) {
                        r.label = a[1], a = c;
                        break
                    }
                    if (a && r.label < a[2]) {
                        r.label = a[2], r.ops.push(c);
                        break
                    }
                    a[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            c = e.call(t, r)
        } catch (l) {
            c = [6, l], i = 0
        } finally {
            n = a = 0
        }
        if (c[0] & 5) throw c[1];
        return {
            value: c[0] ? c[1] : void 0,
            done: !0
        }
    }
}

function Z(t, e, r) {
    if (r || arguments.length === 2)
        for (var n = 0, i = e.length, a; n < i; n++)(a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
    return t.concat(a || Array.prototype.slice.call(e))
}
var cr = "Invariant Violation",
    qn = Object.setPrototypeOf,
    is = qn === void 0 ? function(t, e) {
        return t.__proto__ = e, t
    } : qn,
    Ji = function(t) {
        ue(e, t);

        function e(r) {
            r === void 0 && (r = cr);
            var n = t.call(this, typeof r == "number" ? cr + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
            return n.framesToPop = 1, n.name = cr, is(n, e.prototype), n
        }
        return e
    }(Error);

function Ne(t, e) {
    if (!t) throw new Ji(e)
}
var Ki = ["debug", "log", "warn", "error", "silent"],
    as = Ki.indexOf("log");

function Ft(t) {
    return function() {
        if (Ki.indexOf(t) >= as) {
            var e = console[t] || console.log;
            return e.apply(console, arguments)
        }
    }
}(function(t) {
    t.debug = Ft("debug"), t.log = Ft("log"), t.warn = Ft("warn"), t.error = Ft("error")
})(Ne || (Ne = {}));
var rn = "3.13.8";

function te(t) {
    try {
        return t()
    } catch {}
}
const Ir = te(function() {
    return globalThis
}) || te(function() {
    return window
}) || te(function() {
    return self
}) || te(function() {
    return global
}) || te(function() {
    return te.constructor("return this")()
});
var Ln = new Map;

function Nr(t) {
    var e = Ln.get(t) || 1;
    return Ln.set(t, e + 1), "".concat(t, ":").concat(e, ":").concat(Math.random().toString(36).slice(2))
}

function Xi(t, e) {
    e === void 0 && (e = 0);
    var r = Nr("stringifyForDisplay");
    return JSON.stringify(t, function(n, i) {
        return i === void 0 ? r : i
    }, e).split(JSON.stringify(r)).join("<undefined>")
}

function Pt(t) {
    return function(e) {
        for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
        if (typeof e == "number") {
            var i = e;
            e = nn(i), e || (e = an(i, r), r = [])
        }
        t.apply(void 0, [e].concat(r))
    }
}
var O = Object.assign(function(e, r) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    e || Ne(e, nn(r, n) || an(r, n))
}, {
    debug: Pt(Ne.debug),
    log: Pt(Ne.log),
    warn: Pt(Ne.warn),
    error: Pt(Ne.error)
});

function J(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    return new Ji(nn(t, e) || an(t, e))
}
var zn = Symbol.for("ApolloErrorMessageHandler_" + rn);

function Yi(t) {
    if (typeof t == "string") return t;
    try {
        return Xi(t, 2).slice(0, 1e3)
    } catch {
        return "<non-serializable>"
    }
}

function nn(t, e) {
    if (e === void 0 && (e = []), !!t) return Ir[zn] && Ir[zn](t, e.map(Yi))
}

function an(t, e) {
    if (e === void 0 && (e = []), !!t) return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
        version: rn,
        message: t,
        args: e.map(Yi)
    })))
}

function os(t, e) {
    if (!!!t) throw new Error(e)
}
class gf {
    constructor(e, r, n) {
        this.start = e.start, this.end = r.end, this.startToken = e, this.endToken = r, this.source = n
    }
    get[Symbol.toStringTag]() {
        return "Location"
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        }
    }
}
class bf {
    constructor(e, r, n, i, a, o) {
        this.kind = e, this.start = r, this.end = n, this.line = i, this.column = a, this.value = o, this.prev = null, this.next = null
    }
    get[Symbol.toStringTag]() {
        return "Token"
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        }
    }
}
const ea = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
        VariableDefinition: ["variable", "type", "defaultValue", "directives"],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["description", "directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        FieldDefinition: ["description", "name", "arguments", "type", "directives"],
        InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
        InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
        DirectiveDefinition: ["description", "name", "arguments", "locations"],
        SchemaExtension: ["directives", "operationTypes"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"]
    },
    ss = new Set(Object.keys(ea));

function Qn(t) {
    const e = t?.kind;
    return typeof e == "string" && ss.has(e)
}
var Wn;
(function(t) {
    t.QUERY = "query", t.MUTATION = "mutation", t.SUBSCRIPTION = "subscription"
})(Wn || (Wn = {}));
var V;
(function(t) {
    t.NAME = "Name", t.DOCUMENT = "Document", t.OPERATION_DEFINITION = "OperationDefinition", t.VARIABLE_DEFINITION = "VariableDefinition", t.SELECTION_SET = "SelectionSet", t.FIELD = "Field", t.ARGUMENT = "Argument", t.FRAGMENT_SPREAD = "FragmentSpread", t.INLINE_FRAGMENT = "InlineFragment", t.FRAGMENT_DEFINITION = "FragmentDefinition", t.VARIABLE = "Variable", t.INT = "IntValue", t.FLOAT = "FloatValue", t.STRING = "StringValue", t.BOOLEAN = "BooleanValue", t.NULL = "NullValue", t.ENUM = "EnumValue", t.LIST = "ListValue", t.OBJECT = "ObjectValue", t.OBJECT_FIELD = "ObjectField", t.DIRECTIVE = "Directive", t.NAMED_TYPE = "NamedType", t.LIST_TYPE = "ListType", t.NON_NULL_TYPE = "NonNullType", t.SCHEMA_DEFINITION = "SchemaDefinition", t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", t.FIELD_DEFINITION = "FieldDefinition", t.INPUT_VALUE_DEFINITION = "InputValueDefinition", t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", t.UNION_TYPE_DEFINITION = "UnionTypeDefinition", t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", t.ENUM_VALUE_DEFINITION = "EnumValueDefinition", t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", t.DIRECTIVE_DEFINITION = "DirectiveDefinition", t.SCHEMA_EXTENSION = "SchemaExtension", t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", t.UNION_TYPE_EXTENSION = "UnionTypeExtension", t.ENUM_TYPE_EXTENSION = "EnumTypeExtension", t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"
})(V || (V = {}));

function Dr(t) {
    return t === 9 || t === 32
}

function us(t) {
    return t >= 48 && t <= 57
}

function ta(t) {
    return t >= 97 && t <= 122 || t >= 65 && t <= 90
}

function kf(t) {
    return ta(t) || t === 95
}

function wf(t) {
    return ta(t) || us(t) || t === 95
}

function _f(t) {
    var e;
    let r = Number.MAX_SAFE_INTEGER,
        n = null,
        i = -1;
    for (let o = 0; o < t.length; ++o) {
        var a;
        const s = t[o],
            u = cs(s);
        u !== s.length && (n = (a = n) !== null && a !== void 0 ? a : o, i = o, o !== 0 && u < r && (r = u))
    }
    return t.map((o, s) => s === 0 ? o : o.slice(r)).slice((e = n) !== null && e !== void 0 ? e : 0, i + 1)
}

function cs(t) {
    let e = 0;
    for (; e < t.length && Dr(t.charCodeAt(e));) ++e;
    return e
}

function ls(t, e) {
    const r = t.replace(/"""/g, '\\"""'),
        n = r.split(/\r\n|[\n\r]/g),
        i = n.length === 1,
        a = n.length > 1 && n.slice(1).every(h => h.length === 0 || Dr(h.charCodeAt(0))),
        o = r.endsWith('\\"""'),
        s = t.endsWith('"') && !o,
        u = t.endsWith("\\"),
        c = s || u,
        l = !i || t.length > 70 || c || a || o;
    let f = "";
    const d = i && Dr(t.charCodeAt(0));
    return (l && !d || a) && (f += `
`), f += r, (l || c) && (f += `
`), '"""' + f + '"""'
}
const fs = 10,
    ra = 2;

function ds(t) {
    return Zt(t, [])
}

function Zt(t, e) {
    switch (typeof t) {
        case "string":
            return JSON.stringify(t);
        case "function":
            return t.name ? `[function ${t.name}]` : "[function]";
        case "object":
            return hs(t, e);
        default:
            return String(t)
    }
}

function hs(t, e) {
    if (t === null) return "null";
    if (e.includes(t)) return "[Circular]";
    const r = [...e, t];
    if (ps(t)) {
        const n = t.toJSON();
        if (n !== t) return typeof n == "string" ? n : Zt(n, r)
    } else if (Array.isArray(t)) return ms(t, r);
    return vs(t, r)
}

function ps(t) {
    return typeof t.toJSON == "function"
}

function vs(t, e) {
    const r = Object.entries(t);
    return r.length === 0 ? "{}" : e.length > ra ? "[" + ys(t) + "]" : "{ " + r.map(([i, a]) => i + ": " + Zt(a, e)).join(", ") + " }"
}

function ms(t, e) {
    if (t.length === 0) return "[]";
    if (e.length > ra) return "[Array]";
    const r = Math.min(fs, t.length),
        n = t.length - r,
        i = [];
    for (let a = 0; a < r; ++a) i.push(Zt(t[a], e));
    return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]"
}

function ys(t) {
    const e = Object.prototype.toString.call(t).replace(/^\[object /, "").replace(/]$/, "");
    if (e === "Object" && typeof t.constructor == "function") {
        const r = t.constructor.name;
        if (typeof r == "string" && r !== "") return r
    }
    return e
}

function gs(t) {
    return `"${t.replace(bs,ks)}"`
}
const bs = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

function ks(t) {
    return ws[t.charCodeAt(0)]
}
const ws = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"],
    Ht = Object.freeze({});

function re(t, e, r = ea) {
    const n = new Map;
    for (const p of Object.values(V)) n.set(p, _s(e, p));
    let i, a = Array.isArray(t),
        o = [t],
        s = -1,
        u = [],
        c = t,
        l, f;
    const d = [],
        h = [];
    do {
        s++;
        const p = s === o.length,
            b = p && u.length !== 0;
        if (p) {
            if (l = h.length === 0 ? void 0 : d[d.length - 1], c = f, f = h.pop(), b)
                if (a) {
                    c = c.slice();
                    let w = 0;
                    for (const [_, S] of u) {
                        const I = _ - w;
                        S === null ? (c.splice(I, 1), w++) : c[I] = S
                    }
                } else {
                    c = Object.defineProperties({}, Object.getOwnPropertyDescriptors(c));
                    for (const [w, _] of u) c[w] = _
                } s = i.index, o = i.keys, u = i.edits, a = i.inArray, i = i.prev
        } else if (f) {
            if (l = a ? s : o[s], c = f[l], c == null) continue;
            d.push(l)
        }
        let k;
        if (!Array.isArray(c)) {
            var v, y;
            Qn(c) || os(!1, `Invalid AST Node: ${ds(c)}.`);
            const w = p ? (v = n.get(c.kind)) === null || v === void 0 ? void 0 : v.leave : (y = n.get(c.kind)) === null || y === void 0 ? void 0 : y.enter;
            if (k = w?.call(e, c, l, f, d, h), k === Ht) break;
            if (k === !1) {
                if (!p) {
                    d.pop();
                    continue
                }
            } else if (k !== void 0 && (u.push([l, k]), !p))
                if (Qn(k)) c = k;
                else {
                    d.pop();
                    continue
                }
        }
        if (k === void 0 && b && u.push([l, c]), p) d.pop();
        else {
            var m;
            i = {
                inArray: a,
                index: s,
                keys: o,
                edits: u,
                prev: i
            }, a = Array.isArray(c), o = a ? c : (m = r[c.kind]) !== null && m !== void 0 ? m : [], s = -1, u = [], f && h.push(f), f = c
        }
    } while (i !== void 0);
    return u.length !== 0 ? u[u.length - 1][1] : t
}

function _s(t, e) {
    const r = t[e];
    return typeof r == "object" ? r : typeof r == "function" ? {
        enter: r,
        leave: void 0
    } : {
        enter: t.enter,
        leave: t.leave
    }
}

function Ss(t) {
    return re(t, Ts)
}
const Os = 80,
    Ts = {
        Name: {
            leave: t => t.value
        },
        Variable: {
            leave: t => "$" + t.name
        },
        Document: {
            leave: t => E(t.definitions, `

`)
        },
        OperationDefinition: {
            leave(t) {
                const e = C("(", E(t.variableDefinitions, ", "), ")"),
                    r = E([t.operation, E([t.name, e]), E(t.directives, " ")], " ");
                return (r === "query" ? "" : r + " ") + t.selectionSet
            }
        },
        VariableDefinition: {
            leave: ({
                variable: t,
                type: e,
                defaultValue: r,
                directives: n
            }) => t + ": " + e + C(" = ", r) + C(" ", E(n, " "))
        },
        SelectionSet: {
            leave: ({
                selections: t
            }) => ee(t)
        },
        Field: {
            leave({
                alias: t,
                name: e,
                arguments: r,
                directives: n,
                selectionSet: i
            }) {
                const a = C("", t, ": ") + e;
                let o = a + C("(", E(r, ", "), ")");
                return o.length > Os && (o = a + C(`(
`, jt(E(r, `
`)), `
)`)), E([o, E(n, " "), i], " ")
            }
        },
        Argument: {
            leave: ({
                name: t,
                value: e
            }) => t + ": " + e
        },
        FragmentSpread: {
            leave: ({
                name: t,
                directives: e
            }) => "..." + t + C(" ", E(e, " "))
        },
        InlineFragment: {
            leave: ({
                typeCondition: t,
                directives: e,
                selectionSet: r
            }) => E(["...", C("on ", t), E(e, " "), r], " ")
        },
        FragmentDefinition: {
            leave: ({
                name: t,
                typeCondition: e,
                variableDefinitions: r,
                directives: n,
                selectionSet: i
            }) => `fragment ${t}${C("(",E(r,", "),")")} on ${e} ${C("",E(n," ")," ")}` + i
        },
        IntValue: {
            leave: ({
                value: t
            }) => t
        },
        FloatValue: {
            leave: ({
                value: t
            }) => t
        },
        StringValue: {
            leave: ({
                value: t,
                block: e
            }) => e ? ls(t) : gs(t)
        },
        BooleanValue: {
            leave: ({
                value: t
            }) => t ? "true" : "false"
        },
        NullValue: {
            leave: () => "null"
        },
        EnumValue: {
            leave: ({
                value: t
            }) => t
        },
        ListValue: {
            leave: ({
                values: t
            }) => "[" + E(t, ", ") + "]"
        },
        ObjectValue: {
            leave: ({
                fields: t
            }) => "{" + E(t, ", ") + "}"
        },
        ObjectField: {
            leave: ({
                name: t,
                value: e
            }) => t + ": " + e
        },
        Directive: {
            leave: ({
                name: t,
                arguments: e
            }) => "@" + t + C("(", E(e, ", "), ")")
        },
        NamedType: {
            leave: ({
                name: t
            }) => t
        },
        ListType: {
            leave: ({
                type: t
            }) => "[" + t + "]"
        },
        NonNullType: {
            leave: ({
                type: t
            }) => t + "!"
        },
        SchemaDefinition: {
            leave: ({
                description: t,
                directives: e,
                operationTypes: r
            }) => C("", t, `
`) + E(["schema", E(e, " "), ee(r)], " ")
        },
        OperationTypeDefinition: {
            leave: ({
                operation: t,
                type: e
            }) => t + ": " + e
        },
        ScalarTypeDefinition: {
            leave: ({
                description: t,
                name: e,
                directives: r
            }) => C("", t, `
`) + E(["scalar", e, E(r, " ")], " ")
        },
        ObjectTypeDefinition: {
            leave: ({
                description: t,
                name: e,
                interfaces: r,
                directives: n,
                fields: i
            }) => C("", t, `
`) + E(["type", e, C("implements ", E(r, " & ")), E(n, " "), ee(i)], " ")
        },
        FieldDefinition: {
            leave: ({
                description: t,
                name: e,
                arguments: r,
                type: n,
                directives: i
            }) => C("", t, `
`) + e + (Un(r) ? C(`(
`, jt(E(r, `
`)), `
)`) : C("(", E(r, ", "), ")")) + ": " + n + C(" ", E(i, " "))
        },
        InputValueDefinition: {
            leave: ({
                description: t,
                name: e,
                type: r,
                defaultValue: n,
                directives: i
            }) => C("", t, `
`) + E([e + ": " + r, C("= ", n), E(i, " ")], " ")
        },
        InterfaceTypeDefinition: {
            leave: ({
                description: t,
                name: e,
                interfaces: r,
                directives: n,
                fields: i
            }) => C("", t, `
`) + E(["interface", e, C("implements ", E(r, " & ")), E(n, " "), ee(i)], " ")
        },
        UnionTypeDefinition: {
            leave: ({
                description: t,
                name: e,
                directives: r,
                types: n
            }) => C("", t, `
`) + E(["union", e, E(r, " "), C("= ", E(n, " | "))], " ")
        },
        EnumTypeDefinition: {
            leave: ({
                description: t,
                name: e,
                directives: r,
                values: n
            }) => C("", t, `
`) + E(["enum", e, E(r, " "), ee(n)], " ")
        },
        EnumValueDefinition: {
            leave: ({
                description: t,
                name: e,
                directives: r
            }) => C("", t, `
`) + E([e, E(r, " ")], " ")
        },
        InputObjectTypeDefinition: {
            leave: ({
                description: t,
                name: e,
                directives: r,
                fields: n
            }) => C("", t, `
`) + E(["input", e, E(r, " "), ee(n)], " ")
        },
        DirectiveDefinition: {
            leave: ({
                description: t,
                name: e,
                arguments: r,
                repeatable: n,
                locations: i
            }) => C("", t, `
`) + "directive @" + e + (Un(r) ? C(`(
`, jt(E(r, `
`)), `
)`) : C("(", E(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + E(i, " | ")
        },
        SchemaExtension: {
            leave: ({
                directives: t,
                operationTypes: e
            }) => E(["extend schema", E(t, " "), ee(e)], " ")
        },
        ScalarTypeExtension: {
            leave: ({
                name: t,
                directives: e
            }) => E(["extend scalar", t, E(e, " ")], " ")
        },
        ObjectTypeExtension: {
            leave: ({
                name: t,
                interfaces: e,
                directives: r,
                fields: n
            }) => E(["extend type", t, C("implements ", E(e, " & ")), E(r, " "), ee(n)], " ")
        },
        InterfaceTypeExtension: {
            leave: ({
                name: t,
                interfaces: e,
                directives: r,
                fields: n
            }) => E(["extend interface", t, C("implements ", E(e, " & ")), E(r, " "), ee(n)], " ")
        },
        UnionTypeExtension: {
            leave: ({
                name: t,
                directives: e,
                types: r
            }) => E(["extend union", t, E(e, " "), C("= ", E(r, " | "))], " ")
        },
        EnumTypeExtension: {
            leave: ({
                name: t,
                directives: e,
                values: r
            }) => E(["extend enum", t, E(e, " "), ee(r)], " ")
        },
        InputObjectTypeExtension: {
            leave: ({
                name: t,
                directives: e,
                fields: r
            }) => E(["extend input", t, E(e, " "), ee(r)], " ")
        }
    };

function E(t, e = "") {
    var r;
    return (r = t?.filter(n => n).join(e)) !== null && r !== void 0 ? r : ""
}

function ee(t) {
    return C(`{
`, jt(E(t, `
`)), `
}`)
}

function C(t, e, r = "") {
    return e != null && e !== "" ? t + e + r : ""
}

function jt(t) {
    return C("  ", t.replace(/\n/g, `
  `))
}

function Un(t) {
    var e;
    return (e = t?.some(r => r.includes(`
`))) !== null && e !== void 0 ? e : !1
}

function Bn(t) {
    return t.kind === V.FIELD || t.kind === V.FRAGMENT_SPREAD || t.kind === V.INLINE_FRAGMENT
}

function Tt(t, e) {
    var r = t.directives;
    return !r || !r.length ? !0 : Ns(r).every(function(n) {
        var i = n.directive,
            a = n.ifArgument,
            o = !1;
        return a.value.kind === "Variable" ? (o = e && e[a.value.name.value], O(o !== void 0, 78, i.name.value)) : o = a.value.value, i.name.value === "skip" ? !o : o
    })
}

function wt(t, e, r) {
    var n = new Set(t),
        i = n.size;
    return re(e, {
        Directive: function(a) {
            if (n.delete(a.name.value) && (!r || !n.size)) return Ht
        }
    }), r ? !n.size : n.size < i
}

function Es(t) {
    return t && wt(["client", "export"], t, !0)
}

function Is(t) {
    var e = t.name.value;
    return e === "skip" || e === "include"
}

function Ns(t) {
    var e = [];
    return t && t.length && t.forEach(function(r) {
        if (Is(r)) {
            var n = r.arguments,
                i = r.name.value;
            O(n && n.length === 1, 79, i);
            var a = n[0];
            O(a.name && a.name.value === "if", 80, i);
            var o = a.value;
            O(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 81, i), e.push({
                directive: r,
                ifArgument: a
            })
        }
    }), e
}

function Ds(t) {
    var e, r, n = (e = t.directives) === null || e === void 0 ? void 0 : e.find(function(a) {
        var o = a.name;
        return o.value === "unmask"
    });
    if (!n) return "mask";
    var i = (r = n.arguments) === null || r === void 0 ? void 0 : r.find(function(a) {
        var o = a.name;
        return o.value === "mode"
    });
    return globalThis.__DEV__ !== !1 && i && (i.value.kind === V.VARIABLE ? globalThis.__DEV__ !== !1 && O.warn(82) : i.value.kind !== V.STRING ? globalThis.__DEV__ !== !1 && O.warn(83) : i.value.value !== "migrate" && globalThis.__DEV__ !== !1 && O.warn(84, i.value.value)), i && "value" in i.value && i.value.value === "migrate" ? "migrate" : "unmask"
}
const Cs = () => Object.create(null),
    {
        forEach: xs,
        slice: Gn
    } = Array.prototype,
    {
        hasOwnProperty: Rs
    } = Object.prototype;
class fe {
    constructor(e = !0, r = Cs) {
        this.weakness = e, this.makeData = r
    }
    lookup() {
        return this.lookupArray(arguments)
    }
    lookupArray(e) {
        let r = this;
        return xs.call(e, n => r = r.getChildTrie(n)), Rs.call(r, "data") ? r.data : r.data = this.makeData(Gn.call(e))
    }
    peek() {
        return this.peekArray(arguments)
    }
    peekArray(e) {
        let r = this;
        for (let n = 0, i = e.length; r && n < i; ++n) {
            const a = r.mapFor(e[n], !1);
            r = a && a.get(e[n])
        }
        return r && r.data
    }
    remove() {
        return this.removeArray(arguments)
    }
    removeArray(e) {
        let r;
        if (e.length) {
            const n = e[0],
                i = this.mapFor(n, !1),
                a = i && i.get(n);
            a && (r = a.removeArray(Gn.call(e, 1)), !a.data && !a.weak && !(a.strong && a.strong.size) && i.delete(n))
        } else r = this.data, delete this.data;
        return r
    }
    getChildTrie(e) {
        const r = this.mapFor(e, !0);
        let n = r.get(e);
        return n || r.set(e, n = new fe(this.weakness, this.makeData)), n
    }
    mapFor(e, r) {
        return this.weakness && Fs(e) ? this.weak || (r ? this.weak = new WeakMap : void 0) : this.strong || (r ? this.strong = new Map : void 0)
    }
}

function Fs(t) {
    switch (typeof t) {
        case "object":
            if (t === null) break;
        case "function":
            return !0
    }
    return !1
}
var na = te(function() {
        return navigator.product
    }) == "ReactNative",
    Me = typeof WeakMap == "function" && !(na && !global.HermesInternal),
    on = typeof WeakSet == "function",
    sn = typeof Symbol == "function" && typeof Symbol.for == "function",
    Jt = sn && Symbol.asyncIterator,
    ia = typeof te(function() {
        return window.document.createElement
    }) == "function",
    Ps = te(function() {
        return navigator.userAgent.indexOf("jsdom") >= 0
    }) || !1,
    Ms = (ia || na) && !Ps;

function z(t) {
    return t !== null && typeof t == "object"
}

function As(t, e) {
    var r = e,
        n = [];
    t.definitions.forEach(function(a) {
        if (a.kind === "OperationDefinition") throw J(85, a.operation, a.name ? " named '".concat(a.name.value, "'") : "");
        a.kind === "FragmentDefinition" && n.push(a)
    }), typeof r > "u" && (O(n.length === 1, 86, n.length), r = n[0].name.value);
    var i = g(g({}, t), {
        definitions: Z([{
            kind: "OperationDefinition",
            operation: "query",
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "FragmentSpread",
                    name: {
                        kind: "Name",
                        value: r
                    }
                }]
            }
        }], t.definitions, !0)
    });
    return i
}

function et(t) {
    t === void 0 && (t = []);
    var e = {};
    return t.forEach(function(r) {
        e[r.name.value] = r
    }), e
}

function Kt(t, e) {
    switch (t.kind) {
        case "InlineFragment":
            return t;
        case "FragmentSpread": {
            var r = t.name.value;
            if (typeof e == "function") return e(r);
            var n = e && e[r];
            return O(n, 87, r), n || null
        }
        default:
            return null
    }
}

function js(t) {
    var e = !0;
    return re(t, {
        FragmentSpread: function(r) {
            if (e = !!r.directives && r.directives.some(function(n) {
                    return n.name.value === "unmask"
                }), !e) return Ht
        }
    }), e
}

function Vs() {}
class Cr {
    constructor(e = 1 / 0, r = Vs) {
        this.max = e, this.dispose = r, this.map = new Map, this.newest = null, this.oldest = null
    }
    has(e) {
        return this.map.has(e)
    }
    get(e) {
        const r = this.getNode(e);
        return r && r.value
    }
    get size() {
        return this.map.size
    }
    getNode(e) {
        const r = this.map.get(e);
        if (r && r !== this.newest) {
            const {
                older: n,
                newer: i
            } = r;
            i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i)
        }
        return r
    }
    set(e, r) {
        let n = this.getNode(e);
        return n ? n.value = r : (n = {
            key: e,
            value: r,
            newer: null,
            older: this.newest
        }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(e, n), n.value)
    }
    clean() {
        for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key)
    }
    delete(e) {
        const r = this.map.get(e);
        return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(e), this.dispose(r.value, e), !0) : !1
    }
}

function xr() {}
const qs = xr,
    Ls = typeof WeakRef < "u" ? WeakRef : function(t) {
        return {
            deref: () => t
        }
    },
    zs = typeof WeakMap < "u" ? WeakMap : Map,
    Qs = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
        return {
            register: xr,
            unregister: xr
        }
    },
    Ws = 10024;
class Wt {
    constructor(e = 1 / 0, r = qs) {
        this.max = e, this.dispose = r, this.map = new zs, this.newest = null, this.oldest = null, this.unfinalizedNodes = new Set, this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
            const n = this.unfinalizedNodes.values();
            for (let i = 0; i < Ws; i++) {
                const a = n.next().value;
                if (!a) break;
                this.unfinalizedNodes.delete(a);
                const o = a.key;
                delete a.key, a.keyRef = new Ls(o), this.registry.register(o, a, a)
            }
            this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1
        }, this.registry = new Qs(this.deleteNode.bind(this))
    }
    has(e) {
        return this.map.has(e)
    }
    get(e) {
        const r = this.getNode(e);
        return r && r.value
    }
    getNode(e) {
        const r = this.map.get(e);
        if (r && r !== this.newest) {
            const {
                older: n,
                newer: i
            } = r;
            i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i)
        }
        return r
    }
    set(e, r) {
        let n = this.getNode(e);
        return n ? n.value = r : (n = {
            key: e,
            value: r,
            newer: null,
            older: this.newest
        }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.scheduleFinalization(n), this.map.set(e, n), this.size++, n.value)
    }
    clean() {
        for (; this.oldest && this.size > this.max;) this.deleteNode(this.oldest)
    }
    deleteNode(e) {
        e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
        const r = e.key || e.keyRef && e.keyRef.deref();
        this.dispose(e.value, r), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), r && this.map.delete(r)
    }
    delete(e) {
        const r = this.map.get(e);
        return r ? (this.deleteNode(r), !0) : !1
    }
    scheduleFinalization(e) {
        this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize))
    }
}
var lr = new WeakSet;

function aa(t) {
    t.size <= (t.max || -1) || lr.has(t) || (lr.add(t), setTimeout(function() {
        t.clean(), lr.delete(t)
    }, 100))
}
var un = function(t, e) {
        var r = new Wt(t, e);
        return r.set = function(n, i) {
            var a = Wt.prototype.set.call(this, n, i);
            return aa(this), a
        }, r
    },
    Us = function(t, e) {
        var r = new Cr(t, e);
        return r.set = function(n, i) {
            var a = Cr.prototype.set.call(this, n, i);
            return aa(this), a
        }, r
    },
    Bs = Symbol.for("apollo.cacheSize"),
    se = g({}, Ir[Bs]),
    Ee = {};

function cn(t, e) {
    Ee[t] = e
}
var Gs = globalThis.__DEV__ !== !1 ? Js : void 0,
    $s = globalThis.__DEV__ !== !1 ? Ks : void 0,
    Zs = globalThis.__DEV__ !== !1 ? oa : void 0;

function Hs() {
    var t = {
        parser: 1e3,
        canonicalStringify: 1e3,
        print: 2e3,
        "documentTransform.cache": 2e3,
        "queryManager.getDocumentInfo": 2e3,
        "PersistedQueryLink.persistedQueryHashes": 2e3,
        "fragmentRegistry.transform": 2e3,
        "fragmentRegistry.lookup": 1e3,
        "fragmentRegistry.findFragmentSpreads": 4e3,
        "cache.fragmentQueryDocuments": 1e3,
        "removeTypenameFromVariables.getVariableDefinitions": 2e3,
        "inMemoryCache.maybeBroadcastWatch": 5e3,
        "inMemoryCache.executeSelectionSet": 5e4,
        "inMemoryCache.executeSubSelectedArray": 1e4
    };
    return Object.fromEntries(Object.entries(t).map(function(e) {
        var r = e[0],
            n = e[1];
        return [r, se[r] || n]
    }))
}

function Js() {
    var t, e, r, n, i;
    if (globalThis.__DEV__ === !1) throw new Error("only supported in development mode");
    return {
        limits: Hs(),
        sizes: g({
            print: (t = Ee.print) === null || t === void 0 ? void 0 : t.call(Ee),
            parser: (e = Ee.parser) === null || e === void 0 ? void 0 : e.call(Ee),
            canonicalStringify: (r = Ee.canonicalStringify) === null || r === void 0 ? void 0 : r.call(Ee),
            links: Fr(this.link),
            queryManager: {
                getDocumentInfo: this.queryManager.transformCache.size,
                documentTransforms: ua(this.queryManager.documentTransform)
            }
        }, (i = (n = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(n))
    }
}

function oa() {
    return {
        cache: {
            fragmentQueryDocuments: ye(this.getFragmentDoc)
        }
    }
}

function Ks() {
    var t = this.config.fragments;
    return g(g({}, oa.apply(this)), {
        addTypenameDocumentTransform: ua(this.addTypenameTransform),
        inMemoryCache: {
            executeSelectionSet: ye(this.storeReader.executeSelectionSet),
            executeSubSelectedArray: ye(this.storeReader.executeSubSelectedArray),
            maybeBroadcastWatch: ye(this.maybeBroadcastWatch)
        },
        fragmentRegistry: {
            findFragmentSpreads: ye(t?.findFragmentSpreads),
            lookup: ye(t?.lookup),
            transform: ye(t?.transform)
        }
    })
}

function Xs(t) {
    return !!t && "dirtyKey" in t
}

function ye(t) {
    return Xs(t) ? t.size : void 0
}

function sa(t) {
    return t != null
}

function ua(t) {
    return Rr(t).map(function(e) {
        return {
            cache: e
        }
    })
}

function Rr(t) {
    return t ? Z(Z([ye(t?.performWork)], Rr(t?.left), !0), Rr(t?.right), !0).filter(sa) : []
}

function Fr(t) {
    var e;
    return t ? Z(Z([(e = t?.getMemoryInternals) === null || e === void 0 ? void 0 : e.call(t)], Fr(t?.left), !0), Fr(t?.right), !0).filter(sa) : []
}
var be = Object.assign(function(e) {
    return JSON.stringify(e, Ys)
}, {
    reset: function() {
        Qe = new Us(se.canonicalStringify || 1e3)
    }
});
globalThis.__DEV__ !== !1 && cn("canonicalStringify", function() {
    return Qe.size
});
var Qe;
be.reset();

function Ys(t, e) {
    if (e && typeof e == "object") {
        var r = Object.getPrototypeOf(e);
        if (r === Object.prototype || r === null) {
            var n = Object.keys(e);
            if (n.every(eu)) return e;
            var i = JSON.stringify(n),
                a = Qe.get(i);
            if (!a) {
                n.sort();
                var o = JSON.stringify(n);
                a = Qe.get(o) || n, Qe.set(i, a), Qe.set(o, a)
            }
            var s = Object.create(r);
            return a.forEach(function(u) {
                s[u] = e[u]
            }), s
        }
    }
    return e
}

function eu(t, e, r) {
    return e === 0 || r[e - 1] <= t
}

function Ge(t) {
    return {
        __ref: String(t)
    }
}

function A(t) {
    return !!(t && typeof t == "object" && typeof t.__ref == "string")
}

function tu(t) {
    return z(t) && t.kind === "Document" && Array.isArray(t.definitions)
}

function ru(t) {
    return t.kind === "StringValue"
}

function nu(t) {
    return t.kind === "BooleanValue"
}

function iu(t) {
    return t.kind === "IntValue"
}

function au(t) {
    return t.kind === "FloatValue"
}

function ou(t) {
    return t.kind === "Variable"
}

function su(t) {
    return t.kind === "ObjectValue"
}

function uu(t) {
    return t.kind === "ListValue"
}

function cu(t) {
    return t.kind === "EnumValue"
}

function lu(t) {
    return t.kind === "NullValue"
}

function Je(t, e, r, n) {
    if (iu(r) || au(r)) t[e.value] = Number(r.value);
    else if (nu(r) || ru(r)) t[e.value] = r.value;
    else if (su(r)) {
        var i = {};
        r.fields.map(function(o) {
            return Je(i, o.name, o.value, n)
        }), t[e.value] = i
    } else if (ou(r)) {
        var a = (n || {})[r.name.value];
        t[e.value] = a
    } else if (uu(r)) t[e.value] = r.values.map(function(o) {
        var s = {};
        return Je(s, e, o, n), s[e.value]
    });
    else if (cu(r)) t[e.value] = r.value;
    else if (lu(r)) t[e.value] = null;
    else throw J(96, e.value, r.kind)
}

function fu(t, e) {
    var r = null;
    t.directives && (r = {}, t.directives.forEach(function(i) {
        r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(a) {
            var o = a.name,
                s = a.value;
            return Je(r[i.name.value], o, s, e)
        })
    }));
    var n = null;
    return t.arguments && t.arguments.length && (n = {}, t.arguments.forEach(function(i) {
        var a = i.name,
            o = i.value;
        return Je(n, a, o, e)
    })), ca(t.name.value, n, r)
}
var du = ["connection", "include", "skip", "client", "rest", "export", "nonreactive"],
    ot = be,
    ca = Object.assign(function(t, e, r) {
        if (e && r && r.connection && r.connection.key)
            if (r.connection.filter && r.connection.filter.length > 0) {
                var n = r.connection.filter ? r.connection.filter : [];
                n.sort();
                var i = {};
                return n.forEach(function(s) {
                    i[s] = e[s]
                }), "".concat(r.connection.key, "(").concat(ot(i), ")")
            } else return r.connection.key;
        var a = t;
        if (e) {
            var o = ot(e);
            a += "(".concat(o, ")")
        }
        return r && Object.keys(r).forEach(function(s) {
            du.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? a += "@".concat(s, "(").concat(ot(r[s]), ")") : a += "@".concat(s))
        }), a
    }, {
        setStringify: function(t) {
            var e = ot;
            return ot = t, e
        }
    });

function Xt(t, e) {
    if (t.arguments && t.arguments.length) {
        var r = {};
        return t.arguments.forEach(function(n) {
            var i = n.name,
                a = n.value;
            return Je(r, i, a, e)
        }), r
    }
    return null
}

function le(t) {
    return t.alias ? t.alias.value : t.name.value
}

function Pr(t, e, r) {
    for (var n, i = 0, a = e.selections; i < a.length; i++) {
        var o = a[i];
        if (ke(o)) {
            if (o.name.value === "__typename") return t[le(o)]
        } else n ? n.push(o) : n = [o]
    }
    if (typeof t.__typename == "string") return t.__typename;
    if (n)
        for (var s = 0, u = n; s < u.length; s++) {
            var o = u[s],
                c = Pr(t, Kt(o, r).selectionSet, r);
            if (typeof c == "string") return c
        }
}

function ke(t) {
    return t.kind === "Field"
}

function hu(t) {
    return t.kind === "InlineFragment"
}

function tt(t) {
    O(t && t.kind === "Document", 88);
    var e = t.definitions.filter(function(r) {
        return r.kind !== "FragmentDefinition"
    }).map(function(r) {
        if (r.kind !== "OperationDefinition") throw J(89, r.kind);
        return r
    });
    return O(e.length <= 1, 90, e.length), t
}

function Fe(t) {
    return tt(t), t.definitions.filter(function(e) {
        return e.kind === "OperationDefinition"
    })[0]
}

function dt(t) {
    return t.definitions.filter(function(e) {
        return e.kind === "OperationDefinition" && !!e.name
    }).map(function(e) {
        return e.name.value
    })[0] || null
}

function rt(t) {
    return t.definitions.filter(function(e) {
        return e.kind === "FragmentDefinition"
    })
}

function la(t) {
    var e = Fe(t);
    return O(e && e.operation === "query", 91), e
}

function fa(t) {
    O(t.kind === "Document", 92), O(t.definitions.length <= 1, 93);
    var e = t.definitions[0];
    return O(e.kind === "FragmentDefinition", 94), e
}

function Et(t) {
    tt(t);
    for (var e, r = 0, n = t.definitions; r < n.length; r++) {
        var i = n[r];
        if (i.kind === "OperationDefinition") {
            var a = i.operation;
            if (a === "query" || a === "mutation" || a === "subscription") return i
        }
        i.kind === "FragmentDefinition" && !e && (e = i)
    }
    if (e) return e;
    throw J(95)
}

function ln(t) {
    var e = Object.create(null),
        r = t && t.variableDefinitions;
    return r && r.length && r.forEach(function(n) {
        n.defaultValue && Je(e, n.variable.name, n.defaultValue)
    }), e
}
let G = null;
const $n = {};
let pu = 1;
const vu = () => class {
    constructor() {
        this.id = ["slot", pu++, Date.now(), Math.random().toString(36).slice(2)].join(":")
    }
    hasValue() {
        for (let e = G; e; e = e.parent)
            if (this.id in e.slots) {
                const r = e.slots[this.id];
                if (r === $n) break;
                return e !== G && (G.slots[this.id] = r), !0
            } return G && (G.slots[this.id] = $n), !1
    }
    getValue() {
        if (this.hasValue()) return G.slots[this.id]
    }
    withValue(e, r, n, i) {
        const a = {
                __proto__: null,
                [this.id]: e
            },
            o = G;
        G = {
            parent: o,
            slots: a
        };
        try {
            return r.apply(i, n)
        } finally {
            G = o
        }
    }
    static bind(e) {
        const r = G;
        return function() {
            const n = G;
            try {
                return G = r, e.apply(this, arguments)
            } finally {
                G = n
            }
        }
    }
    static noContext(e, r, n) {
        if (G) {
            const i = G;
            try {
                return G = null, e.apply(n, r)
            } finally {
                G = i
            }
        } else return e.apply(n, r)
    }
};

function Zn(t) {
    try {
        return t()
    } catch {}
}
const fr = "@wry/context:Slot",
    mu = Zn(() => globalThis) || Zn(() => global) || Object.create(null),
    Hn = mu,
    It = Hn[fr] || Array[fr] || function(t) {
        try {
            Object.defineProperty(Hn, fr, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        } finally {
            return t
        }
    }(vu()),
    {
        bind: Of,
        noContext: Tf
    } = It,
    Yt = new It,
    {
        hasOwnProperty: yu
    } = Object.prototype,
    fn = Array.from || function(t) {
        const e = [];
        return t.forEach(r => e.push(r)), e
    };

function dn(t) {
    const {
        unsubscribe: e
    } = t;
    typeof e == "function" && (t.unsubscribe = void 0, e())
}
const _t = [],
    gu = 100;

function Ke(t, e) {
    if (!t) throw new Error(e || "assertion failure")
}

function da(t, e) {
    const r = t.length;
    return r > 0 && r === e.length && t[r - 1] === e[r - 1]
}

function ha(t) {
    switch (t.length) {
        case 0:
            throw new Error("unknown value");
        case 1:
            return t[0];
        case 2:
            throw t[1]
    }
}

function pa(t) {
    return t.slice(0)
}
class er {
    constructor(e) {
        this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++er.count
    }
    peek() {
        if (this.value.length === 1 && !we(this)) return Jn(this), this.value[0]
    }
    recompute(e) {
        return Ke(!this.recomputing, "already recomputing"), Jn(this), we(this) ? bu(this, e) : ha(this.value)
    }
    setDirty() {
        this.dirty || (this.dirty = !0, va(this), dn(this))
    }
    dispose() {
        this.setDirty(), ka(this), hn(this, (e, r) => {
            e.setDirty(), wa(e, this)
        })
    }
    forget() {
        this.dispose()
    }
    dependOn(e) {
        e.add(this), this.deps || (this.deps = _t.pop() || new Set), this.deps.add(e)
    }
    forgetDeps() {
        this.deps && (fn(this.deps).forEach(e => e.delete(this)), this.deps.clear(), _t.push(this.deps), this.deps = null)
    }
}
er.count = 0;

function Jn(t) {
    const e = Yt.getValue();
    if (e) return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), we(t) ? ya(e, t) : ga(e, t), e
}

function bu(t, e) {
    return ka(t), Yt.withValue(t, ku, [t, e]), _u(t, e) && wu(t), ha(t.value)
}

function ku(t, e) {
    t.recomputing = !0;
    const {
        normalizeResult: r
    } = t;
    let n;
    r && t.value.length === 1 && (n = pa(t.value)), t.value.length = 0;
    try {
        if (t.value[0] = t.fn.apply(null, e), r && n && !da(n, t.value)) try {
            t.value[0] = r(t.value[0], n[0])
        } catch {}
    } catch (i) {
        t.value[1] = i
    }
    t.recomputing = !1
}

function we(t) {
    return t.dirty || !!(t.dirtyChildren && t.dirtyChildren.size)
}

function wu(t) {
    t.dirty = !1, !we(t) && ma(t)
}

function va(t) {
    hn(t, ya)
}

function ma(t) {
    hn(t, ga)
}

function hn(t, e) {
    const r = t.parents.size;
    if (r) {
        const n = fn(t.parents);
        for (let i = 0; i < r; ++i) e(n[i], t)
    }
}

function ya(t, e) {
    Ke(t.childValues.has(e)), Ke(we(e));
    const r = !we(t);
    if (!t.dirtyChildren) t.dirtyChildren = _t.pop() || new Set;
    else if (t.dirtyChildren.has(e)) return;
    t.dirtyChildren.add(e), r && va(t)
}

function ga(t, e) {
    Ke(t.childValues.has(e)), Ke(!we(e));
    const r = t.childValues.get(e);
    r.length === 0 ? t.childValues.set(e, pa(e.value)) : da(r, e.value) || t.setDirty(), ba(t, e), !we(t) && ma(t)
}

function ba(t, e) {
    const r = t.dirtyChildren;
    r && (r.delete(e), r.size === 0 && (_t.length < gu && _t.push(r), t.dirtyChildren = null))
}

function ka(t) {
    t.childValues.size > 0 && t.childValues.forEach((e, r) => {
        wa(t, r)
    }), t.forgetDeps(), Ke(t.dirtyChildren === null)
}

function wa(t, e) {
    e.parents.delete(t), t.childValues.delete(e), ba(t, e)
}

function _u(t, e) {
    if (typeof t.subscribe == "function") try {
        dn(t), t.unsubscribe = t.subscribe.apply(null, e)
    } catch {
        return t.setDirty(), !1
    }
    return !0
}
const Su = {
    setDirty: !0,
    dispose: !0,
    forget: !0
};

function _a(t) {
    const e = new Map;

    function r(n) {
        const i = Yt.getValue();
        if (i) {
            let a = e.get(n);
            a || e.set(n, a = new Set), i.dependOn(a)
        }
    }
    return r.dirty = function(i, a) {
        const o = e.get(i);
        if (o) {
            const s = a && yu.call(Su, a) ? a : "setDirty";
            fn(o).forEach(u => u[s]()), e.delete(i), dn(o)
        }
    }, r
}
let Kn;

function Ou(...t) {
    return (Kn || (Kn = new fe(typeof WeakMap == "function"))).lookupArray(t)
}
const dr = new Set;

function St(t, {
    max: e = Math.pow(2, 16),
    keyArgs: r,
    makeCacheKey: n = Ou,
    normalizeResult: i,
    subscribe: a,
    cache: o = Cr
} = Object.create(null)) {
    const s = typeof o == "function" ? new o(e, d => d.dispose()) : o,
        u = function() {
            const d = n.apply(null, r ? r.apply(null, arguments) : arguments);
            if (d === void 0) return t.apply(null, arguments);
            let h = s.get(d);
            h || (s.set(d, h = new er(t)), h.normalizeResult = i, h.subscribe = a, h.forget = () => s.delete(d));
            const v = h.recompute(Array.prototype.slice.call(arguments));
            return s.set(d, h), dr.add(s), Yt.hasValue() || (dr.forEach(y => y.clean()), dr.clear()), v
        };
    Object.defineProperty(u, "size", {
        get: () => s.size,
        configurable: !1,
        enumerable: !1
    }), Object.freeze(u.options = {
        max: e,
        keyArgs: r,
        makeCacheKey: n,
        normalizeResult: i,
        subscribe: a,
        cache: s
    });

    function c(d) {
        const h = d && s.get(d);
        h && h.setDirty()
    }
    u.dirtyKey = c, u.dirty = function() {
        c(n.apply(null, arguments))
    };

    function l(d) {
        const h = d && s.get(d);
        if (h) return h.peek()
    }
    u.peekKey = l, u.peek = function() {
        return l(n.apply(null, arguments))
    };

    function f(d) {
        return d ? s.delete(d) : !1
    }
    return u.forgetKey = f, u.forget = function() {
        return f(n.apply(null, arguments))
    }, u.makeCacheKey = n, u.getKey = r ? function() {
        return n.apply(null, r.apply(null, arguments))
    } : n, Object.freeze(u)
}

function Tu(t) {
    return t
}
var Sa = function() {
        function t(e, r) {
            r === void 0 && (r = Object.create(null)), this.resultCache = on ? new WeakSet : new Set, this.transform = e, r.getCacheKey && (this.getCacheKey = r.getCacheKey), this.cached = r.cache !== !1, this.resetCache()
        }
        return t.prototype.getCacheKey = function(e) {
            return [e]
        }, t.identity = function() {
            return new t(Tu, {
                cache: !1
            })
        }, t.split = function(e, r, n) {
            return n === void 0 && (n = t.identity()), Object.assign(new t(function(i) {
                var a = e(i) ? r : n;
                return a.transformDocument(i)
            }, {
                cache: !1
            }), {
                left: r,
                right: n
            })
        }, t.prototype.resetCache = function() {
            var e = this;
            if (this.cached) {
                var r = new fe(Me);
                this.performWork = St(t.prototype.performWork.bind(this), {
                    makeCacheKey: function(n) {
                        var i = e.getCacheKey(n);
                        if (i) return O(Array.isArray(i), 77), r.lookupArray(i)
                    },
                    max: se["documentTransform.cache"],
                    cache: Wt
                })
            }
        }, t.prototype.performWork = function(e) {
            return tt(e), this.transform(e)
        }, t.prototype.transformDocument = function(e) {
            if (this.resultCache.has(e)) return e;
            var r = this.performWork(e);
            return this.resultCache.add(r), r
        }, t.prototype.concat = function(e) {
            var r = this;
            return Object.assign(new t(function(n) {
                return e.transformDocument(r.transformDocument(n))
            }, {
                cache: !1
            }), {
                left: this,
                right: e
            })
        }, t
    }(),
    vt, Ce = Object.assign(function(t) {
        var e = vt.get(t);
        return e || (e = Ss(t), vt.set(t, e)), e
    }, {
        reset: function() {
            vt = new un(se.print || 2e3)
        }
    });
Ce.reset();
globalThis.__DEV__ !== !1 && cn("print", function() {
    return vt ? vt.size : 0
});
var Q = Array.isArray;

function Y(t) {
    return Array.isArray(t) && t.length > 0
}
var Xn = {
    kind: V.FIELD,
    name: {
        kind: V.NAME,
        value: "__typename"
    }
};

function Oa(t, e) {
    return !t || t.selectionSet.selections.every(function(r) {
        return r.kind === V.FRAGMENT_SPREAD && Oa(e[r.name.value], e)
    })
}

function Eu(t) {
    return Oa(Fe(t) || fa(t), et(rt(t))) ? null : t
}

function Iu(t) {
    var e = new Map,
        r = new Map;
    return t.forEach(function(n) {
            n && (n.name ? e.set(n.name, n) : n.test && r.set(n.test, n))
        }),
        function(n) {
            var i = e.get(n.name.value);
            return !i && r.size && r.forEach(function(a, o) {
                o(n) && (i = a)
            }), i
        }
}

function Yn(t) {
    var e = new Map;
    return function(n) {
        n === void 0 && (n = t);
        var i = e.get(n);
        return i || e.set(n, i = {
            variables: new Set,
            fragmentSpreads: new Set
        }), i
    }
}

function Ta(t, e) {
    tt(e);
    for (var r = Yn(""), n = Yn(""), i = function(p) {
            for (var b = 0, k = void 0; b < p.length && (k = p[b]); ++b)
                if (!Q(k)) {
                    if (k.kind === V.OPERATION_DEFINITION) return r(k.name && k.name.value);
                    if (k.kind === V.FRAGMENT_DEFINITION) return n(k.name.value)
                } return globalThis.__DEV__ !== !1 && O.error(97), null
        }, a = 0, o = e.definitions.length - 1; o >= 0; --o) e.definitions[o].kind === V.OPERATION_DEFINITION && ++a;
    var s = Iu(t),
        u = function(p) {
            return Y(p) && p.map(s).some(function(b) {
                return b && b.remove
            })
        },
        c = new Map,
        l = !1,
        f = {
            enter: function(p) {
                if (u(p.directives)) return l = !0, null
            }
        },
        d = re(e, {
            Field: f,
            InlineFragment: f,
            VariableDefinition: {
                enter: function() {
                    return !1
                }
            },
            Variable: {
                enter: function(p, b, k, w, _) {
                    var S = i(_);
                    S && S.variables.add(p.name.value)
                }
            },
            FragmentSpread: {
                enter: function(p, b, k, w, _) {
                    if (u(p.directives)) return l = !0, null;
                    var S = i(_);
                    S && S.fragmentSpreads.add(p.name.value)
                }
            },
            FragmentDefinition: {
                enter: function(p, b, k, w) {
                    c.set(JSON.stringify(w), p)
                },
                leave: function(p, b, k, w) {
                    var _ = c.get(JSON.stringify(w));
                    if (p === _) return p;
                    if (a > 0 && p.selectionSet.selections.every(function(S) {
                            return S.kind === V.FIELD && S.name.value === "__typename"
                        })) return n(p.name.value).removed = !0, l = !0, null
                }
            },
            Directive: {
                leave: function(p) {
                    if (s(p)) return l = !0, null
                }
            }
        });
    if (!l) return e;
    var h = function(p) {
            return p.transitiveVars || (p.transitiveVars = new Set(p.variables), p.removed || p.fragmentSpreads.forEach(function(b) {
                h(n(b)).transitiveVars.forEach(function(k) {
                    p.transitiveVars.add(k)
                })
            })), p
        },
        v = new Set;
    d.definitions.forEach(function(p) {
        p.kind === V.OPERATION_DEFINITION ? h(r(p.name && p.name.value)).fragmentSpreads.forEach(function(b) {
            v.add(b)
        }) : p.kind === V.FRAGMENT_DEFINITION && a === 0 && !n(p.name.value).removed && v.add(p.name.value)
    }), v.forEach(function(p) {
        h(n(p)).fragmentSpreads.forEach(function(b) {
            v.add(b)
        })
    });
    var y = function(p) {
            return !!(!v.has(p) || n(p).removed)
        },
        m = {
            enter: function(p) {
                if (y(p.name.value)) return null
            }
        };
    return Eu(re(d, {
        FragmentSpread: m,
        FragmentDefinition: m,
        OperationDefinition: {
            leave: function(p) {
                if (p.variableDefinitions) {
                    var b = h(r(p.name && p.name.value)).transitiveVars;
                    if (b.size < p.variableDefinitions.length) return g(g({}, p), {
                        variableDefinitions: p.variableDefinitions.filter(function(k) {
                            return b.has(k.variable.name.value)
                        })
                    })
                }
            }
        }
    }))
}
var pn = Object.assign(function(t) {
    return re(t, {
        SelectionSet: {
            enter: function(e, r, n) {
                if (!(n && n.kind === V.OPERATION_DEFINITION)) {
                    var i = e.selections;
                    if (i) {
                        var a = i.some(function(s) {
                            return ke(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0)
                        });
                        if (!a) {
                            var o = n;
                            if (!(ke(o) && o.directives && o.directives.some(function(s) {
                                    return s.name.value === "export"
                                }))) return g(g({}, e), {
                                selections: Z(Z([], i, !0), [Xn], !1)
                            })
                        }
                    }
                }
            }
        }
    })
}, {
    added: function(t) {
        return t === Xn
    }
});

function Nu(t) {
    var e = Et(t),
        r = e.operation;
    if (r === "query") return t;
    var n = re(t, {
        OperationDefinition: {
            enter: function(i) {
                return g(g({}, i), {
                    operation: "query"
                })
            }
        }
    });
    return n
}

function Ea(t) {
    tt(t);
    var e = Ta([{
        test: function(r) {
            return r.name.value === "client"
        },
        remove: !0
    }], t);
    return e
}

function Du(t) {
    return tt(t), re(t, {
        FragmentSpread: function(e) {
            var r;
            if (!(!((r = e.directives) === null || r === void 0) && r.some(function(n) {
                    return n.name.value === "unmask"
                }))) return g(g({}, e), {
                directives: Z(Z([], e.directives || [], !0), [{
                    kind: V.DIRECTIVE,
                    name: {
                        kind: V.NAME,
                        value: "nonreactive"
                    }
                }], !1)
            })
        }
    })
}
var Cu = Object.prototype.hasOwnProperty;

function ei() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return tr(t)
}

function tr(t) {
    var e = t[0] || {},
        r = t.length;
    if (r > 1)
        for (var n = new _e, i = 1; i < r; ++i) e = n.merge(e, t[i]);
    return e
}
var xu = function(t, e, r) {
        return this.merge(t[r], e[r])
    },
    _e = function() {
        function t(e) {
            e === void 0 && (e = xu), this.reconciler = e, this.isObject = z, this.pastCopies = new Set
        }
        return t.prototype.merge = function(e, r) {
            for (var n = this, i = [], a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
            return z(r) && z(e) ? (Object.keys(r).forEach(function(o) {
                if (Cu.call(e, o)) {
                    var s = e[o];
                    if (r[o] !== s) {
                        var u = n.reconciler.apply(n, Z([e, r, o], i, !1));
                        u !== s && (e = n.shallowCopyForMerge(e), e[o] = u)
                    }
                } else e = n.shallowCopyForMerge(e), e[o] = r[o]
            }), e) : r
        }, t.prototype.shallowCopyForMerge = function(e) {
            return z(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = g({
                __proto__: Object.getPrototypeOf(e)
            }, e), this.pastCopies.add(e))), e
        }, t
    }();

function Ru(t, e) {
    var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r) return (r = r.call(t)).next.bind(r);
    if (Array.isArray(t) || (r = Fu(t)) || e) {
        r && (t = r);
        var n = 0;
        return function() {
            return n >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[n++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Fu(t, e) {
    if (t) {
        if (typeof t == "string") return ti(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ti(t, e)
    }
}

function ti(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function ri(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
}

function vn(t, e, r) {
    return e && ri(t.prototype, e), r && ri(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}
var mn = function() {
        return typeof Symbol == "function"
    },
    yn = function(t) {
        return mn() && !!Symbol[t]
    },
    gn = function(t) {
        return yn(t) ? Symbol[t] : "@@" + t
    };
mn() && !yn("observable") && (Symbol.observable = Symbol("observable"));
var Pu = gn("iterator"),
    Mr = gn("observable"),
    Ia = gn("species");

function Ut(t, e) {
    var r = t[e];
    if (r != null) {
        if (typeof r != "function") throw new TypeError(r + " is not a function");
        return r
    }
}

function st(t) {
    var e = t.constructor;
    return e !== void 0 && (e = e[Ia], e === null && (e = void 0)), e !== void 0 ? e : j
}

function Mu(t) {
    return t instanceof j
}

function Xe(t) {
    Xe.log ? Xe.log(t) : setTimeout(function() {
        throw t
    })
}

function Vt(t) {
    Promise.resolve().then(function() {
        try {
            t()
        } catch (e) {
            Xe(e)
        }
    })
}

function Na(t) {
    var e = t._cleanup;
    if (e !== void 0 && (t._cleanup = void 0, !!e)) try {
        if (typeof e == "function") e();
        else {
            var r = Ut(e, "unsubscribe");
            r && r.call(e)
        }
    } catch (n) {
        Xe(n)
    }
}

function Ar(t) {
    t._observer = void 0, t._queue = void 0, t._state = "closed"
}

function Au(t) {
    var e = t._queue;
    if (e) {
        t._queue = void 0, t._state = "ready";
        for (var r = 0; r < e.length && (Da(t, e[r].type, e[r].value), t._state !== "closed"); ++r);
    }
}

function Da(t, e, r) {
    t._state = "running";
    var n = t._observer;
    try {
        var i = Ut(n, e);
        switch (e) {
            case "next":
                i && i.call(n, r);
                break;
            case "error":
                if (Ar(t), i) i.call(n, r);
                else throw r;
                break;
            case "complete":
                Ar(t), i && i.call(n);
                break
        }
    } catch (a) {
        Xe(a)
    }
    t._state === "closed" ? Na(t) : t._state === "running" && (t._state = "ready")
}

function hr(t, e, r) {
    if (t._state !== "closed") {
        if (t._state === "buffering") {
            t._queue.push({
                type: e,
                value: r
            });
            return
        }
        if (t._state !== "ready") {
            t._state = "buffering", t._queue = [{
                type: e,
                value: r
            }], Vt(function() {
                return Au(t)
            });
            return
        }
        Da(t, e, r)
    }
}
var ju = function() {
        function t(r, n) {
            this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
            var i = new Vu(this);
            try {
                this._cleanup = n.call(void 0, i)
            } catch (a) {
                i.error(a)
            }
            this._state === "initializing" && (this._state = "ready")
        }
        var e = t.prototype;
        return e.unsubscribe = function() {
            this._state !== "closed" && (Ar(this), Na(this))
        }, vn(t, [{
            key: "closed",
            get: function() {
                return this._state === "closed"
            }
        }]), t
    }(),
    Vu = function() {
        function t(r) {
            this._subscription = r
        }
        var e = t.prototype;
        return e.next = function(n) {
            hr(this._subscription, "next", n)
        }, e.error = function(n) {
            hr(this._subscription, "error", n)
        }, e.complete = function() {
            hr(this._subscription, "complete")
        }, vn(t, [{
            key: "closed",
            get: function() {
                return this._subscription._state === "closed"
            }
        }]), t
    }(),
    j = function() {
        function t(r) {
            if (!(this instanceof t)) throw new TypeError("Observable cannot be called as a function");
            if (typeof r != "function") throw new TypeError("Observable initializer must be a function");
            this._subscriber = r
        }
        var e = t.prototype;
        return e.subscribe = function(n) {
            return (typeof n != "object" || n === null) && (n = {
                next: n,
                error: arguments[1],
                complete: arguments[2]
            }), new ju(n, this._subscriber)
        }, e.forEach = function(n) {
            var i = this;
            return new Promise(function(a, o) {
                if (typeof n != "function") {
                    o(new TypeError(n + " is not a function"));
                    return
                }

                function s() {
                    u.unsubscribe(), a()
                }
                var u = i.subscribe({
                    next: function(c) {
                        try {
                            n(c, s)
                        } catch (l) {
                            o(l), u.unsubscribe()
                        }
                    },
                    error: o,
                    complete: a
                })
            })
        }, e.map = function(n) {
            var i = this;
            if (typeof n != "function") throw new TypeError(n + " is not a function");
            var a = st(this);
            return new a(function(o) {
                return i.subscribe({
                    next: function(s) {
                        try {
                            s = n(s)
                        } catch (u) {
                            return o.error(u)
                        }
                        o.next(s)
                    },
                    error: function(s) {
                        o.error(s)
                    },
                    complete: function() {
                        o.complete()
                    }
                })
            })
        }, e.filter = function(n) {
            var i = this;
            if (typeof n != "function") throw new TypeError(n + " is not a function");
            var a = st(this);
            return new a(function(o) {
                return i.subscribe({
                    next: function(s) {
                        try {
                            if (!n(s)) return
                        } catch (u) {
                            return o.error(u)
                        }
                        o.next(s)
                    },
                    error: function(s) {
                        o.error(s)
                    },
                    complete: function() {
                        o.complete()
                    }
                })
            })
        }, e.reduce = function(n) {
            var i = this;
            if (typeof n != "function") throw new TypeError(n + " is not a function");
            var a = st(this),
                o = arguments.length > 1,
                s = !1,
                u = arguments[1],
                c = u;
            return new a(function(l) {
                return i.subscribe({
                    next: function(f) {
                        var d = !s;
                        if (s = !0, !d || o) try {
                            c = n(c, f)
                        } catch (h) {
                            return l.error(h)
                        } else c = f
                    },
                    error: function(f) {
                        l.error(f)
                    },
                    complete: function() {
                        if (!s && !o) return l.error(new TypeError("Cannot reduce an empty sequence"));
                        l.next(c), l.complete()
                    }
                })
            })
        }, e.concat = function() {
            for (var n = this, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            var s = st(this);
            return new s(function(u) {
                var c, l = 0;

                function f(d) {
                    c = d.subscribe({
                        next: function(h) {
                            u.next(h)
                        },
                        error: function(h) {
                            u.error(h)
                        },
                        complete: function() {
                            l === a.length ? (c = void 0, u.complete()) : f(s.from(a[l++]))
                        }
                    })
                }
                return f(n),
                    function() {
                        c && (c.unsubscribe(), c = void 0)
                    }
            })
        }, e.flatMap = function(n) {
            var i = this;
            if (typeof n != "function") throw new TypeError(n + " is not a function");
            var a = st(this);
            return new a(function(o) {
                var s = [],
                    u = i.subscribe({
                        next: function(l) {
                            if (n) try {
                                l = n(l)
                            } catch (d) {
                                return o.error(d)
                            }
                            var f = a.from(l).subscribe({
                                next: function(d) {
                                    o.next(d)
                                },
                                error: function(d) {
                                    o.error(d)
                                },
                                complete: function() {
                                    var d = s.indexOf(f);
                                    d >= 0 && s.splice(d, 1), c()
                                }
                            });
                            s.push(f)
                        },
                        error: function(l) {
                            o.error(l)
                        },
                        complete: function() {
                            c()
                        }
                    });

                function c() {
                    u.closed && s.length === 0 && o.complete()
                }
                return function() {
                    s.forEach(function(l) {
                        return l.unsubscribe()
                    }), u.unsubscribe()
                }
            })
        }, e[Mr] = function() {
            return this
        }, t.from = function(n) {
            var i = typeof this == "function" ? this : t;
            if (n == null) throw new TypeError(n + " is not an object");
            var a = Ut(n, Mr);
            if (a) {
                var o = a.call(n);
                if (Object(o) !== o) throw new TypeError(o + " is not an object");
                return Mu(o) && o.constructor === i ? o : new i(function(s) {
                    return o.subscribe(s)
                })
            }
            if (yn("iterator") && (a = Ut(n, Pu), a)) return new i(function(s) {
                Vt(function() {
                    if (!s.closed) {
                        for (var u = Ru(a.call(n)), c; !(c = u()).done;) {
                            var l = c.value;
                            if (s.next(l), s.closed) return
                        }
                        s.complete()
                    }
                })
            });
            if (Array.isArray(n)) return new i(function(s) {
                Vt(function() {
                    if (!s.closed) {
                        for (var u = 0; u < n.length; ++u)
                            if (s.next(n[u]), s.closed) return;
                        s.complete()
                    }
                })
            });
            throw new TypeError(n + " is not observable")
        }, t.of = function() {
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            var o = typeof this == "function" ? this : t;
            return new o(function(s) {
                Vt(function() {
                    if (!s.closed) {
                        for (var u = 0; u < i.length; ++u)
                            if (s.next(i[u]), s.closed) return;
                        s.complete()
                    }
                })
            })
        }, vn(t, null, [{
            key: Ia,
            get: function() {
                return this
            }
        }]), t
    }();
mn() && Object.defineProperty(j, Symbol("extensions"), {
    value: {
        symbol: Mr,
        hostReportError: Xe
    },
    configurable: !0
});

function qu(t) {
    var e, r = t.Symbol;
    if (typeof r == "function")
        if (r.observable) e = r.observable;
        else {
            typeof r.for == "function" ? e = r.for("https://github.com/benlesh/symbol-observable") : e = r("https://github.com/benlesh/symbol-observable");
            try {
                r.observable = e
            } catch {}
        }
    else e = "@@observable";
    return e
}
var Le;
typeof self < "u" ? Le = self : typeof window < "u" ? Le = window : typeof global < "u" ? Le = global : typeof module < "u" ? Le = module : Le = Function("return this")();
qu(Le);
var ni = j.prototype,
    ii = "@@observable";
ni[ii] || (ni[ii] = function() {
    return this
});

function Lu(t) {
    return t.catch(function() {}), t
}
var zu = Object.prototype.toString;

function Ca(t) {
    return jr(t)
}

function jr(t, e) {
    switch (zu.call(t)) {
        case "[object Array]": {
            if (e = e || new Map, e.has(t)) return e.get(t);
            var r = t.slice(0);
            return e.set(t, r), r.forEach(function(i, a) {
                r[a] = jr(i, e)
            }), r
        }
        case "[object Object]": {
            if (e = e || new Map, e.has(t)) return e.get(t);
            var n = Object.create(Object.getPrototypeOf(t));
            return e.set(t, n), Object.keys(t).forEach(function(i) {
                n[i] = jr(t[i], e)
            }), n
        }
        default:
            return t
    }
}

function Qu(t) {
    var e = new Set([t]);
    return e.forEach(function(r) {
        z(r) && Wu(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
            z(r[n]) && e.add(r[n])
        })
    }), t
}

function Wu(t) {
    if (globalThis.__DEV__ !== !1 && !Object.isFrozen(t)) try {
        Object.freeze(t)
    } catch (e) {
        if (e instanceof TypeError) return null;
        throw e
    }
    return t
}

function Ye(t) {
    return globalThis.__DEV__ !== !1 && Qu(t), t
}

function mt(t, e, r) {
    var n = [];
    t.forEach(function(i) {
        return i[e] && n.push(i)
    }), n.forEach(function(i) {
        return i[e](r)
    })
}

function pr(t, e, r) {
    return new j(function(n) {
        var i = {
            then: function(u) {
                return new Promise(function(c) {
                    return c(u())
                })
            }
        };

        function a(u, c) {
            return function(l) {
                if (u) {
                    var f = function() {
                        return n.closed ? 0 : u(l)
                    };
                    i = i.then(f, f).then(function(d) {
                        return n.next(d)
                    }, function(d) {
                        return n.error(d)
                    })
                } else n[c](l)
            }
        }
        var o = {
                next: a(e, "next"),
                error: a(r, "error"),
                complete: function() {
                    i.then(function() {
                        return n.complete()
                    })
                }
            },
            s = t.subscribe(o);
        return function() {
            return s.unsubscribe()
        }
    })
}

function xa(t) {
    function e(r) {
        Object.defineProperty(t, r, {
            value: j
        })
    }
    return sn && Symbol.species && e(Symbol.species), e("@@species"), t
}

function ai(t) {
    return t && typeof t.then == "function"
}
var ze = function(t) {
    ue(e, t);

    function e(r) {
        var n = t.call(this, function(i) {
            return n.addObserver(i),
                function() {
                    return n.removeObserver(i)
                }
        }) || this;
        return n.observers = new Set, n.promise = new Promise(function(i, a) {
            n.resolve = i, n.reject = a
        }), n.handlers = {
            next: function(i) {
                n.sub !== null && (n.latest = ["next", i], n.notify("next", i), mt(n.observers, "next", i))
            },
            error: function(i) {
                var a = n.sub;
                a !== null && (a && setTimeout(function() {
                    return a.unsubscribe()
                }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), mt(n.observers, "error", i))
            },
            complete: function() {
                var i = n,
                    a = i.sub,
                    o = i.sources,
                    s = o === void 0 ? [] : o;
                if (a !== null) {
                    var u = s.shift();
                    u ? ai(u) ? u.then(function(c) {
                        return n.sub = c.subscribe(n.handlers)
                    }, n.handlers.error) : n.sub = u.subscribe(n.handlers) : (a && setTimeout(function() {
                        return a.unsubscribe()
                    }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), mt(n.observers, "complete"))
                }
            }
        }, n.nextResultListeners = new Set, n.cancel = function(i) {
            n.reject(i), n.sources = [], n.handlers.error(i)
        }, n.promise.catch(function(i) {}), typeof r == "function" && (r = [new j(r)]), ai(r) ? r.then(function(i) {
            return n.start(i)
        }, n.handlers.error) : n.start(r), n
    }
    return e.prototype.start = function(r) {
        this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete())
    }, e.prototype.deliverLastMessage = function(r) {
        if (this.latest) {
            var n = this.latest[0],
                i = r[n];
            i && i.call(r, this.latest[1]), this.sub === null && n === "next" && r.complete && r.complete()
        }
    }, e.prototype.addObserver = function(r) {
        this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r))
    }, e.prototype.removeObserver = function(r) {
        this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete()
    }, e.prototype.notify = function(r, n) {
        var i = this.nextResultListeners;
        i.size && (this.nextResultListeners = new Set, i.forEach(function(a) {
            return a(r, n)
        }))
    }, e.prototype.beforeNext = function(r) {
        var n = !1;
        this.nextResultListeners.add(function(i, a) {
            n || (n = !0, r(i, a))
        })
    }, e
}(j);
xa(ze);

function $e(t) {
    return "incremental" in t
}

function Uu(t) {
    return "hasNext" in t && "data" in t
}

function Bu(t) {
    return $e(t) || Uu(t)
}

function Gu(t) {
    return z(t) && "payload" in t
}

function Ra(t, e) {
    var r = t,
        n = new _e;
    return $e(e) && Y(e.incremental) && e.incremental.forEach(function(i) {
        for (var a = i.data, o = i.path, s = o.length - 1; s >= 0; --s) {
            var u = o[s],
                c = !isNaN(+u),
                l = c ? [] : {};
            l[u] = a, a = l
        }
        r = n.merge(r, a)
    }), r
}

function qt(t) {
    var e = Vr(t);
    return Y(e)
}

function Vr(t) {
    var e = Y(t.errors) ? t.errors.slice(0) : [];
    return $e(t) && Y(t.incremental) && t.incremental.forEach(function(r) {
        r.errors && e.push.apply(e, r.errors)
    }), e
}

function Pe() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var r = Object.create(null);
    return t.forEach(function(n) {
        n && Object.keys(n).forEach(function(i) {
            var a = n[i];
            a !== void 0 && (r[i] = a)
        })
    }), r
}

function Re(t, e) {
    return Pe(t, e, e.variables && {
        variables: Pe(g(g({}, t && t.variables), e.variables))
    })
}

function vr(t) {
    return new j(function(e) {
        e.error(t)
    })
}
var Fa = function(t, e, r) {
    var n = new Error(r);
    throw n.name = "ServerError", n.response = t, n.statusCode = t.status, n.result = e, n
};

function $u(t) {
    for (var e = ["query", "operationName", "variables", "extensions", "context"], r = 0, n = Object.keys(t); r < n.length; r++) {
        var i = n[r];
        if (e.indexOf(i) < 0) throw J(46, i)
    }
    return t
}

function Zu(t, e) {
    var r = g({}, t),
        n = function(a) {
            typeof a == "function" ? r = g(g({}, r), a(r)) : r = g(g({}, r), a)
        },
        i = function() {
            return g({}, r)
        };
    return Object.defineProperty(e, "setContext", {
        enumerable: !1,
        value: n
    }), Object.defineProperty(e, "getContext", {
        enumerable: !1,
        value: i
    }), e
}

function Hu(t) {
    var e = {
        variables: t.variables || {},
        extensions: t.extensions || {},
        operationName: t.operationName,
        query: t.query
    };
    return e.operationName || (e.operationName = typeof e.query != "string" ? dt(e.query) || void 0 : ""), e
}

function Ju(t, e) {
    var r = g({}, t),
        n = new Set(Object.keys(t));
    return re(e, {
        Variable: function(i, a, o) {
            o && o.kind !== "VariableDefinition" && n.delete(i.name.value)
        }
    }), n.forEach(function(i) {
        delete r[i]
    }), r
}

function oi(t, e) {
    return e ? e(t) : j.of()
}

function ut(t) {
    return typeof t == "function" ? new nt(t) : t
}

function Mt(t) {
    return t.request.length <= 1
}
var nt = function() {
        function t(e) {
            e && (this.request = e)
        }
        return t.empty = function() {
            return new t(function() {
                return j.of()
            })
        }, t.from = function(e) {
            return e.length === 0 ? t.empty() : e.map(ut).reduce(function(r, n) {
                return r.concat(n)
            })
        }, t.split = function(e, r, n) {
            var i = ut(r),
                a = ut(n || new t(oi)),
                o;
            return Mt(i) && Mt(a) ? o = new t(function(s) {
                return e(s) ? i.request(s) || j.of() : a.request(s) || j.of()
            }) : o = new t(function(s, u) {
                return e(s) ? i.request(s, u) || j.of() : a.request(s, u) || j.of()
            }), Object.assign(o, {
                left: i,
                right: a
            })
        }, t.execute = function(e, r) {
            return e.request(Zu(r.context, Hu($u(r)))) || j.of()
        }, t.concat = function(e, r) {
            var n = ut(e);
            if (Mt(n)) return globalThis.__DEV__ !== !1 && O.warn(38, n), n;
            var i = ut(r),
                a;
            return Mt(i) ? a = new t(function(o) {
                return n.request(o, function(s) {
                    return i.request(s) || j.of()
                }) || j.of()
            }) : a = new t(function(o, s) {
                return n.request(o, function(u) {
                    return i.request(u, s) || j.of()
                }) || j.of()
            }), Object.assign(a, {
                left: n,
                right: i
            })
        }, t.prototype.split = function(e, r, n) {
            return this.concat(t.split(e, r, n || new t(oi)))
        }, t.prototype.concat = function(e) {
            return t.concat(this, e)
        }, t.prototype.request = function(e, r) {
            throw J(39)
        }, t.prototype.onError = function(e, r) {
            if (r && r.error) return r.error(e), !1;
            throw e
        }, t.prototype.setOnError = function(e) {
            return this.onError = e, this
        }, t
    }(),
    qr = nt.execute;

function Ku(t) {
    var e, r = t[Symbol.asyncIterator]();
    return e = {
        next: function() {
            return r.next()
        }
    }, e[Symbol.asyncIterator] = function() {
        return this
    }, e
}

function Xu(t) {
    var e = null,
        r = null,
        n = !1,
        i = [],
        a = [];

    function o(f) {
        if (!r) {
            if (a.length) {
                var d = a.shift();
                if (Array.isArray(d) && d[0]) return d[0]({
                    value: f,
                    done: !1
                })
            }
            i.push(f)
        }
    }

    function s(f) {
        r = f;
        var d = a.slice();
        d.forEach(function(h) {
            h[1](f)
        }), !e || e()
    }

    function u() {
        n = !0;
        var f = a.slice();
        f.forEach(function(d) {
            d[0]({
                value: void 0,
                done: !0
            })
        }), !e || e()
    }
    e = function() {
        e = null, t.removeListener("data", o), t.removeListener("error", s), t.removeListener("end", u), t.removeListener("finish", u), t.removeListener("close", u)
    }, t.on("data", o), t.on("error", s), t.on("end", u), t.on("finish", u), t.on("close", u);

    function c() {
        return new Promise(function(f, d) {
            if (r) return d(r);
            if (i.length) return f({
                value: i.shift(),
                done: !1
            });
            if (n) return f({
                value: void 0,
                done: !0
            });
            a.push([f, d])
        })
    }
    var l = {
        next: function() {
            return c()
        }
    };
    return Jt && (l[Symbol.asyncIterator] = function() {
        return this
    }), l
}

function Yu(t) {
    var e = !1,
        r = {
            next: function() {
                return e ? Promise.resolve({
                    value: void 0,
                    done: !0
                }) : (e = !0, new Promise(function(n, i) {
                    t.then(function(a) {
                        n({
                            value: a,
                            done: !1
                        })
                    }).catch(i)
                }))
            }
        };
    return Jt && (r[Symbol.asyncIterator] = function() {
        return this
    }), r
}

function si(t) {
    var e = {
        next: function() {
            return t.read()
        }
    };
    return Jt && (e[Symbol.asyncIterator] = function() {
        return this
    }), e
}

function ec(t) {
    return !!t.body
}

function tc(t) {
    return !!t.getReader
}

function rc(t) {
    return !!(Jt && t[Symbol.asyncIterator])
}

function nc(t) {
    return !!t.stream
}

function ic(t) {
    return !!t.arrayBuffer
}

function ac(t) {
    return !!t.pipe
}

function oc(t) {
    var e = t;
    if (ec(t) && (e = t.body), rc(e)) return Ku(e);
    if (tc(e)) return si(e.getReader());
    if (nc(e)) return si(e.stream().getReader());
    if (ic(e)) return Yu(e.arrayBuffer());
    if (ac(e)) return Xu(e);
    throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")
}
var bn = Symbol();

function sc(t) {
    return t.extensions ? Array.isArray(t.extensions[bn]) : !1
}

function Pa(t) {
    return t.hasOwnProperty("graphQLErrors")
}
var uc = function(t) {
        var e = Z(Z(Z([], t.graphQLErrors, !0), t.clientErrors, !0), t.protocolErrors, !0);
        return t.networkError && e.push(t.networkError), e.map(function(r) {
            return z(r) && r.message || "Error message not found."
        }).join(`
`)
    },
    ie = function(t) {
        ue(e, t);

        function e(r) {
            var n = r.graphQLErrors,
                i = r.protocolErrors,
                a = r.clientErrors,
                o = r.networkError,
                s = r.errorMessage,
                u = r.extraInfo,
                c = t.call(this, s) || this;
            return c.name = "ApolloError", c.graphQLErrors = n || [], c.protocolErrors = i || [], c.clientErrors = a || [], c.networkError = o || null, c.message = s || uc(c), c.extraInfo = u, c.cause = Z(Z(Z([o], n || [], !0), i || [], !0), a || [], !0).find(function(l) {
                return !!l
            }) || null, c.__proto__ = e.prototype, c
        }
        return e
    }(Error),
    ui = Object.prototype.hasOwnProperty;

function cc(t, e) {
    return ve(this, void 0, void 0, function() {
        var r, n, i, a, o, s, u, c, l, f, d, h, v, y, m, p, b, k, w, _, S, I, T, N;
        return me(this, function(P) {
            switch (P.label) {
                case 0:
                    if (TextDecoder === void 0) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                    r = new TextDecoder("utf-8"), n = (N = t.headers) === null || N === void 0 ? void 0 : N.get("content-type"), i = "boundary=", a = n?.includes(i) ? n?.substring(n?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--`.concat(a), s = "", u = oc(t), c = !0, P.label = 1;
                case 1:
                    return c ? [4, u.next()] : [3, 3];
                case 2:
                    for (l = P.sent(), f = l.value, d = l.done, h = typeof f == "string" ? f : r.decode(f), v = s.length - o.length + 1, c = !d, s += h, y = s.indexOf(o, v); y > -1;) {
                        if (m = void 0, I = [s.slice(0, y), s.slice(y + o.length)], m = I[0], s = I[1], p = m.indexOf(`\r
\r
`), b = lc(m.slice(0, p)), k = b["content-type"], k && k.toLowerCase().indexOf("application/json") === -1) throw new Error("Unsupported patch content type: application/json is required.");
                        if (w = m.slice(p), w) {
                            if (_ = Ma(t, w), Object.keys(_).length > 1 || "data" in _ || "incremental" in _ || "errors" in _ || "payload" in _)
                                if (Gu(_)) {
                                    if (S = {}, "payload" in _) {
                                        if (Object.keys(_).length === 1 && _.payload === null) return [2];
                                        S = g({}, _.payload)
                                    }
                                    "errors" in _ && (S = g(g({}, S), {
                                        extensions: g(g({}, "extensions" in S ? S.extensions : null), (T = {}, T[bn] = _.errors, T))
                                    })), e(S)
                                } else e(_);
                            else if (Object.keys(_).length === 1 && "hasNext" in _ && !_.hasNext) return [2]
                        }
                        y = s.indexOf(o)
                    }
                    return [3, 1];
                case 3:
                    return [2]
            }
        })
    })
}

function lc(t) {
    var e = {};
    return t.split(`
`).forEach(function(r) {
        var n = r.indexOf(":");
        if (n > -1) {
            var i = r.slice(0, n).trim().toLowerCase(),
                a = r.slice(n + 1).trim();
            e[i] = a
        }
    }), e
}

function Ma(t, e) {
    if (t.status >= 300) {
        var r = function() {
            try {
                return JSON.parse(e)
            } catch {
                return e
            }
        };
        Fa(t, r(), "Response not successful: Received status code ".concat(t.status))
    }
    try {
        return JSON.parse(e)
    } catch (i) {
        var n = i;
        throw n.name = "ServerParseError", n.response = t, n.statusCode = t.status, n.bodyText = e, n
    }
}

function fc(t, e) {
    t.result && t.result.errors && t.result.data && e.next(t.result), e.error(t)
}

function dc(t) {
    return function(e) {
        return e.text().then(function(r) {
            return Ma(e, r)
        }).then(function(r) {
            return !Array.isArray(r) && !ui.call(r, "data") && !ui.call(r, "errors") && Fa(e, r, "Server response was missing for query '".concat(Array.isArray(t) ? t.map(function(n) {
                return n.operationName
            }) : t.operationName, "'.")), r
        })
    }
}
var Lr = function(t, e) {
        var r;
        try {
            r = JSON.stringify(t)
        } catch (i) {
            var n = J(42, e, i.message);
            throw n.parseError = i, n
        }
        return r
    },
    hc = {
        includeQuery: !0,
        includeExtensions: !1,
        preserveHeaderCase: !1
    },
    pc = {
        accept: "*/*",
        "content-type": "application/json"
    },
    vc = {
        method: "POST"
    },
    mc = {
        http: hc,
        headers: pc,
        options: vc
    },
    yc = function(t, e) {
        return e(t)
    };

function gc(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    var i = {},
        a = {};
    r.forEach(function(f) {
        i = g(g(g({}, i), f.options), {
            headers: g(g({}, i.headers), f.headers)
        }), f.credentials && (i.credentials = f.credentials), a = g(g({}, a), f.http)
    }), i.headers && (i.headers = bc(i.headers, a.preserveHeaderCase));
    var o = t.operationName,
        s = t.extensions,
        u = t.variables,
        c = t.query,
        l = {
            operationName: o,
            variables: u
        };
    return a.includeExtensions && (l.extensions = s), a.includeQuery && (l.query = e(c, Ce)), {
        options: i,
        body: l
    }
}

function bc(t, e) {
    if (!e) {
        var r = {};
        return Object.keys(Object(t)).forEach(function(a) {
            r[a.toLowerCase()] = t[a]
        }), r
    }
    var n = {};
    Object.keys(Object(t)).forEach(function(a) {
        n[a.toLowerCase()] = {
            originalName: a,
            value: t[a]
        }
    });
    var i = {};
    return Object.keys(n).forEach(function(a) {
        i[n[a].originalName] = n[a].value
    }), i
}
var kc = function(t) {
        if (!t && typeof fetch > "u") throw J(40)
    },
    wc = function(t, e) {
        var r = t.getContext(),
            n = r.uri;
        return n || (typeof e == "function" ? e(t) : e || "/graphql")
    };

function _c(t, e) {
    var r = [],
        n = function(f, d) {
            r.push("".concat(f, "=").concat(encodeURIComponent(d)))
        };
    if ("query" in e && n("query", e.query), e.operationName && n("operationName", e.operationName), e.variables) {
        var i = void 0;
        try {
            i = Lr(e.variables, "Variables map")
        } catch (f) {
            return {
                parseError: f
            }
        }
        n("variables", i)
    }
    if (e.extensions) {
        var a = void 0;
        try {
            a = Lr(e.extensions, "Extensions map")
        } catch (f) {
            return {
                parseError: f
            }
        }
        n("extensions", a)
    }
    var o = "",
        s = t,
        u = t.indexOf("#");
    u !== -1 && (o = t.substr(u), s = t.substr(0, u));
    var c = s.indexOf("?") === -1 ? "?" : "&",
        l = s + c + r.join("&") + o;
    return {
        newURI: l
    }
}
var ci = te(function() {
        return fetch
    }),
    Aa = function(t) {
        t === void 0 && (t = {});
        var e = t.uri,
            r = e === void 0 ? "/graphql" : e,
            n = t.fetch,
            i = t.print,
            a = i === void 0 ? yc : i,
            o = t.includeExtensions,
            s = t.preserveHeaderCase,
            u = t.useGETForQueries,
            c = t.includeUnusedVariables,
            l = c === void 0 ? !1 : c,
            f = X(t, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
        globalThis.__DEV__ !== !1 && kc(n || ci);
        var d = {
            http: {
                includeExtensions: o,
                preserveHeaderCase: s
            },
            options: f.fetchOptions,
            credentials: f.credentials,
            headers: f.headers
        };
        return new nt(function(h) {
            var v = wc(h, r),
                y = h.getContext(),
                m = {};
            if (y.clientAwareness) {
                var p = y.clientAwareness,
                    b = p.name,
                    k = p.version;
                b && (m["apollographql-client-name"] = b), k && (m["apollographql-client-version"] = k)
            }
            var w = g(g({}, m), y.headers),
                _ = {
                    http: y.http,
                    options: y.fetchOptions,
                    credentials: y.credentials,
                    headers: w
                };
            if (wt(["client"], h.query)) {
                var S = Ea(h.query);
                if (!S) return vr(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
                h.query = S
            }
            var I = gc(h, a, mc, d, _),
                T = I.options,
                N = I.body;
            N.variables && !l && (N.variables = Ju(N.variables, h.query));
            var P;
            !T.signal && typeof AbortController < "u" && (P = new AbortController, T.signal = P.signal);
            var W = function(U) {
                    return U.kind === "OperationDefinition" && U.operation === "mutation"
                },
                R = function(U) {
                    return U.kind === "OperationDefinition" && U.operation === "subscription"
                },
                L = R(Et(h.query)),
                H = wt(["defer"], h.query);
            if (u && !h.query.definitions.some(W) && (T.method = "GET"), H || L) {
                T.headers = T.headers || {};
                var Ae = "multipart/mixed;";
                L && H && globalThis.__DEV__ !== !1 && O.warn(41), L ? Ae += "boundary=graphql;subscriptionSpec=1.0,application/json" : H && (Ae += "deferSpec=20220824,application/json"), T.headers.accept = Ae
            }
            if (T.method === "GET") {
                var Oe = _c(v, N),
                    Ct = Oe.newURI,
                    je = Oe.parseError;
                if (je) return vr(je);
                v = Ct
            } else try {
                T.body = Lr(N, "Payload")
            } catch (U) {
                return vr(U)
            }
            return new j(function(U) {
                var xt = n || te(function() {
                        return fetch
                    }) || ci,
                    K = U.next.bind(U);
                return xt(v, T).then(function(Ve) {
                        var nr;
                        h.setContext({
                            response: Ve
                        });
                        var Nn = (nr = Ve.headers) === null || nr === void 0 ? void 0 : nr.get("content-type");
                        return Nn !== null && /^multipart\/mixed/i.test(Nn) ? cc(Ve, K) : dc(h)(Ve).then(K)
                    }).then(function() {
                        P = void 0, U.complete()
                    }).catch(function(Ve) {
                        P = void 0, fc(Ve, U)
                    }),
                    function() {
                        P && P.abort()
                    }
            })
        })
    },
    Sc = function(t) {
        ue(e, t);

        function e(r) {
            r === void 0 && (r = {});
            var n = t.call(this, Aa(r).request) || this;
            return n.options = r, n
        }
        return e
    }(nt);
const {
    toString: li,
    hasOwnProperty: Oc
} = Object.prototype, fi = Function.prototype.toString, zr = new Map;

function M(t, e) {
    try {
        return Qr(t, e)
    } finally {
        zr.clear()
    }
}

function Qr(t, e) {
    if (t === e) return !0;
    const r = li.call(t),
        n = li.call(e);
    if (r !== n) return !1;
    switch (r) {
        case "[object Array]":
            if (t.length !== e.length) return !1;
        case "[object Object]": {
            if (hi(t, e)) return !0;
            const i = di(t),
                a = di(e),
                o = i.length;
            if (o !== a.length) return !1;
            for (let s = 0; s < o; ++s)
                if (!Oc.call(e, i[s])) return !1;
            for (let s = 0; s < o; ++s) {
                const u = i[s];
                if (!Qr(t[u], e[u])) return !1
            }
            return !0
        }
        case "[object Error]":
            return t.name === e.name && t.message === e.message;
        case "[object Number]":
            if (t !== t) return e !== e;
        case "[object Boolean]":
        case "[object Date]":
            return +t == +e;
        case "[object RegExp]":
        case "[object String]":
            return t == `${e}`;
        case "[object Map]":
        case "[object Set]": {
            if (t.size !== e.size) return !1;
            if (hi(t, e)) return !0;
            const i = t.entries(),
                a = r === "[object Map]";
            for (;;) {
                const o = i.next();
                if (o.done) break;
                const [s, u] = o.value;
                if (!e.has(s) || a && !Qr(u, e.get(s))) return !1
            }
            return !0
        }
        case "[object Uint16Array]":
        case "[object Uint8Array]":
        case "[object Uint32Array]":
        case "[object Int32Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object ArrayBuffer]":
            t = new Uint8Array(t), e = new Uint8Array(e);
        case "[object DataView]": {
            let i = t.byteLength;
            if (i === e.byteLength)
                for (; i-- && t[i] === e[i];);
            return i === -1
        }
        case "[object AsyncFunction]":
        case "[object GeneratorFunction]":
        case "[object AsyncGeneratorFunction]":
        case "[object Function]": {
            const i = fi.call(t);
            return i !== fi.call(e) ? !1 : !Ic(i, Ec)
        }
    }
    return !1
}

function di(t) {
    return Object.keys(t).filter(Tc, t)
}

function Tc(t) {
    return this[t] !== void 0
}
const Ec = "{ [native code] }";

function Ic(t, e) {
    const r = t.length - e.length;
    return r >= 0 && t.indexOf(e, r) === r
}

function hi(t, e) {
    let r = zr.get(t);
    if (r) {
        if (r.has(e)) return !0
    } else zr.set(t, r = new Set);
    return r.add(e), !1
}

function ja(t, e, r, n) {
    var i = e.data,
        a = X(e, ["data"]),
        o = r.data,
        s = X(r, ["data"]);
    return M(a, s) && Lt(Et(t).selectionSet, i, o, {
        fragmentMap: et(rt(t)),
        variables: n
    })
}

function Lt(t, e, r, n) {
    if (e === r) return !0;
    var i = new Set;
    return t.selections.every(function(a) {
        if (i.has(a) || (i.add(a), !Tt(a, n.variables)) || pi(a)) return !0;
        if (ke(a)) {
            var o = le(a),
                s = e && e[o],
                u = r && r[o],
                c = a.selectionSet;
            if (!c) return M(s, u);
            var l = Array.isArray(s),
                f = Array.isArray(u);
            if (l !== f) return !1;
            if (l && f) {
                var d = s.length;
                if (u.length !== d) return !1;
                for (var h = 0; h < d; ++h)
                    if (!Lt(c, s[h], u[h], n)) return !1;
                return !0
            }
            return Lt(c, s, u, n)
        } else {
            var v = Kt(a, n.fragmentMap);
            if (v) return pi(v) ? !0 : Lt(v.selectionSet, e, r, n)
        }
    })
}

function pi(t) {
    return !!t.directives && t.directives.some(Nc)
}

function Nc(t) {
    return t.name.value === "nonreactive"
}
var Va = Me ? WeakMap : Map,
    qa = on ? WeakSet : Set,
    kn = new It,
    vi = !1;

function La() {
    vi || (vi = !0, globalThis.__DEV__ !== !1 && O.warn(52))
}

function za(t, e, r) {
    return kn.withValue(!0, function() {
        var n = ht(t, e, r, !1);
        return Object.isFrozen(t) && Ye(n), n
    })
}

function Dc(t, e) {
    if (e.has(t)) return e.get(t);
    var r = Array.isArray(t) ? [] : Object.create(null);
    return e.set(t, r), r
}

function ht(t, e, r, n, i) {
    var a, o = r.knownChanged,
        s = Dc(t, r.mutableTargets);
    if (Array.isArray(t)) {
        for (var u = 0, c = Array.from(t.entries()); u < c.length; u++) {
            var l = c[u],
                f = l[0],
                d = l[1];
            if (d === null) {
                s[f] = null;
                continue
            }
            var h = ht(d, e, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", "[").concat(f, "]") : void 0);
            o.has(h) && o.add(s), s[f] = h
        }
        return o.has(s) ? s : t
    }
    for (var v = 0, y = e.selections; v < y.length; v++) {
        var m = y[v],
            p = void 0;
        if (n && o.add(s), m.kind === V.FIELD) {
            var b = le(m),
                k = m.selectionSet;
            if (p = s[b] || t[b], p === void 0) continue;
            if (k && p !== null) {
                var h = ht(t[b], k, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", ".").concat(b) : void 0);
                o.has(h) && (p = h)
            }
            globalThis.__DEV__ === !1 && (s[b] = p), globalThis.__DEV__ !== !1 && (n && b !== "__typename" && !(!((a = Object.getOwnPropertyDescriptor(s, b)) === null || a === void 0) && a.value) ? Object.defineProperty(s, b, Cc(b, p, i || "", r.operationName, r.operationType)) : (delete s[b], s[b] = p))
        }
        if (m.kind === V.INLINE_FRAGMENT && (!m.typeCondition || r.cache.fragmentMatches(m, t.__typename)) && (p = ht(t, m.selectionSet, r, n, i)), m.kind === V.FRAGMENT_SPREAD) {
            var w = m.name.value,
                _ = r.fragmentMap[w] || (r.fragmentMap[w] = r.cache.lookupFragment(w));
            O(_, 47, w);
            var S = Ds(m);
            S !== "mask" && (p = ht(t, _.selectionSet, r, S === "migrate", i))
        }
        o.has(p) && o.add(s)
    }
    return "__typename" in t && !("__typename" in s) && (s.__typename = t.__typename), Object.keys(s).length !== Object.keys(t).length && o.add(s), o.has(s) ? s : t
}

function Cc(t, e, r, n, i) {
    var a = function() {
        return kn.getValue() || (globalThis.__DEV__ !== !1 && O.warn(48, n ? "".concat(i, " '").concat(n, "'") : "anonymous ".concat(i), "".concat(r, ".").concat(t).replace(/^\./, "")), a = function() {
            return e
        }), e
    };
    return {
        get: function() {
            return a()
        },
        set: function(o) {
            a = function() {
                return o
            }
        },
        enumerable: !0,
        configurable: !0
    }
}

function Qa(t, e, r, n) {
    if (!r.fragmentMatches) return globalThis.__DEV__ !== !1 && La(), t;
    var i = e.definitions.filter(function(o) {
        return o.kind === V.FRAGMENT_DEFINITION
    });
    typeof n > "u" && (O(i.length === 1, 49, i.length), n = i[0].name.value);
    var a = i.find(function(o) {
        return o.name.value === n
    });
    return O(!!a, 50, n), t == null || M(t, {}) ? t : za(t, a.selectionSet, {
        operationType: "fragment",
        operationName: a.name.value,
        fragmentMap: et(rt(e)),
        cache: r,
        mutableTargets: new Va,
        knownChanged: new qa
    })
}

function xc(t, e, r) {
    var n;
    if (!r.fragmentMatches) return globalThis.__DEV__ !== !1 && La(), t;
    var i = Fe(e);
    return O(i, 51), t == null ? t : za(t, i.selectionSet, {
        operationType: i.operation,
        operationName: (n = i.name) === null || n === void 0 ? void 0 : n.value,
        fragmentMap: et(rt(e)),
        cache: r,
        mutableTargets: new Va,
        knownChanged: new qa
    })
}
var Wa = function() {
    function t() {
        this.assumeImmutableResults = !1, this.getFragmentDoc = St(As, {
            max: se["cache.fragmentQueryDocuments"] || 1e3,
            cache: Wt
        })
    }
    return t.prototype.lookupFragment = function(e) {
        return null
    }, t.prototype.batch = function(e) {
        var r = this,
            n = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0,
            i;
        return this.performTransaction(function() {
            return i = e.update(r)
        }, n), i
    }, t.prototype.recordOptimisticTransaction = function(e, r) {
        this.performTransaction(e, r)
    }, t.prototype.transformDocument = function(e) {
        return e
    }, t.prototype.transformForLink = function(e) {
        return e
    }, t.prototype.identify = function(e) {}, t.prototype.gc = function() {
        return []
    }, t.prototype.modify = function(e) {
        return !1
    }, t.prototype.readQuery = function(e, r) {
        return r === void 0 && (r = !!e.optimistic), this.read(g(g({}, e), {
            rootId: e.id || "ROOT_QUERY",
            optimistic: r
        }))
    }, t.prototype.watchFragment = function(e) {
        var r = this,
            n = e.fragment,
            i = e.fragmentName,
            a = e.from,
            o = e.optimistic,
            s = o === void 0 ? !0 : o,
            u = X(e, ["fragment", "fragmentName", "from", "optimistic"]),
            c = this.getFragmentDoc(n, i),
            l = typeof a > "u" || typeof a == "string" ? a : this.identify(a),
            f = !!e[Symbol.for("apollo.dataMasking")];
        if (globalThis.__DEV__ !== !1) {
            var d = i || fa(n).name.value;
            l || globalThis.__DEV__ !== !1 && O.warn(1, d)
        }
        var h = g(g({}, u), {
                returnPartialData: !0,
                id: l,
                query: c,
                optimistic: s
            }),
            v;
        return new j(function(y) {
            return r.watch(g(g({}, h), {
                immediate: !0,
                callback: function(m) {
                    var p = f ? Qa(m.result, n, r, i) : m.result;
                    if (!(v && ja(c, {
                            data: v.result
                        }, {
                            data: p
                        }, e.variables))) {
                        var b = {
                            data: p,
                            complete: !!m.complete
                        };
                        m.missing && (b.missing = tr(m.missing.map(function(k) {
                            return k.missing
                        }))), v = g(g({}, m), {
                            result: p
                        }), y.next(b)
                    }
                }
            }))
        })
    }, t.prototype.readFragment = function(e, r) {
        return r === void 0 && (r = !!e.optimistic), this.read(g(g({}, e), {
            query: this.getFragmentDoc(e.fragment, e.fragmentName),
            rootId: e.id,
            optimistic: r
        }))
    }, t.prototype.writeQuery = function(e) {
        var r = e.id,
            n = e.data,
            i = X(e, ["id", "data"]);
        return this.write(Object.assign(i, {
            dataId: r || "ROOT_QUERY",
            result: n
        }))
    }, t.prototype.writeFragment = function(e) {
        var r = e.id,
            n = e.data,
            i = e.fragment,
            a = e.fragmentName,
            o = X(e, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(o, {
            query: this.getFragmentDoc(i, a),
            dataId: r,
            result: n
        }))
    }, t.prototype.updateQuery = function(e, r) {
        return this.batch({
            update: function(n) {
                var i = n.readQuery(e),
                    a = r(i);
                return a == null ? i : (n.writeQuery(g(g({}, e), {
                    data: a
                })), a)
            }
        })
    }, t.prototype.updateFragment = function(e, r) {
        return this.batch({
            update: function(n) {
                var i = n.readFragment(e),
                    a = r(i);
                return a == null ? i : (n.writeFragment(g(g({}, e), {
                    data: a
                })), a)
            }
        })
    }, t
}();
globalThis.__DEV__ !== !1 && (Wa.prototype.getMemoryInternals = Zs);
var Ua = function(t) {
        ue(e, t);

        function e(r, n, i, a) {
            var o, s = t.call(this, r) || this;
            if (s.message = r, s.path = n, s.query = i, s.variables = a, Array.isArray(s.path)) {
                s.missing = s.message;
                for (var u = s.path.length - 1; u >= 0; --u) s.missing = (o = {}, o[s.path[u]] = s.missing, o)
            } else s.missing = s.path;
            return s.__proto__ = e.prototype, s
        }
        return e
    }(Error),
    B = Object.prototype.hasOwnProperty;

function ct(t) {
    return t == null
}

function Ba(t, e) {
    var r = t.__typename,
        n = t.id,
        i = t._id;
    if (typeof r == "string" && (e && (e.keyObject = ct(n) ? ct(i) ? void 0 : {
            _id: i
        } : {
            id: n
        }), ct(n) && !ct(i) && (n = i), !ct(n))) return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n))
}
var Ga = {
    dataIdFromObject: Ba,
    addTypename: !0,
    resultCaching: !0,
    canonizeResults: !1
};

function Rc(t) {
    return Pe(Ga, t)
}

function $a(t) {
    var e = t.canonizeResults;
    return e === void 0 ? Ga.canonizeResults : e
}

function Fc(t, e) {
    return A(e) ? t.get(e.__ref, "__typename") : e && e.__typename
}
var Za = /^[_a-z][_0-9a-z]*/i;

function Se(t) {
    var e = t.match(Za);
    return e ? e[0] : t
}

function Wr(t, e, r) {
    return z(e) ? Q(e) ? e.every(function(n) {
        return Wr(t, n, r)
    }) : t.selections.every(function(n) {
        if (ke(n) && Tt(n, r)) {
            var i = le(n);
            return B.call(e, i) && (!n.selectionSet || Wr(n.selectionSet, e[i], r))
        }
        return !0
    }) : !1
}

function We(t) {
    return z(t) && !A(t) && !Q(t)
}

function Pc() {
    return new _e
}

function Ha(t, e) {
    var r = et(rt(t));
    return {
        fragmentMap: r,
        lookupFragment: function(n) {
            var i = r[n];
            return !i && e && (i = e.lookup(n)), i || null
        }
    }
}
var zt = Object.create(null),
    mr = function() {
        return zt
    },
    mi = Object.create(null),
    Ot = function() {
        function t(e, r) {
            var n = this;
            this.policies = e, this.group = r, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(i, a) {
                return Ye(A(i) ? n.get(i.__ref, a) : i && i[a])
            }, this.canRead = function(i) {
                return A(i) ? n.has(i.__ref) : typeof i == "object"
            }, this.toReference = function(i, a) {
                if (typeof i == "string") return Ge(i);
                if (A(i)) return i;
                var o = n.policies.identify(i)[0];
                if (o) {
                    var s = Ge(o);
                    return a && n.merge(o, i), s
                }
            }
        }
        return t.prototype.toObject = function() {
            return g({}, this.data)
        }, t.prototype.has = function(e) {
            return this.lookup(e, !0) !== void 0
        }, t.prototype.get = function(e, r) {
            if (this.group.depend(e, r), B.call(this.data, e)) {
                var n = this.data[e];
                if (n && B.call(n, r)) return n[r]
            }
            if (r === "__typename" && B.call(this.policies.rootTypenamesById, e)) return this.policies.rootTypenamesById[e];
            if (this instanceof pe) return this.parent.get(e, r)
        }, t.prototype.lookup = function(e, r) {
            if (r && this.group.depend(e, "__exists"), B.call(this.data, e)) return this.data[e];
            if (this instanceof pe) return this.parent.lookup(e, r);
            if (this.policies.rootTypenamesById[e]) return Object.create(null)
        }, t.prototype.merge = function(e, r) {
            var n = this,
                i;
            A(e) && (e = e.__ref), A(r) && (r = r.__ref);
            var a = typeof e == "string" ? this.lookup(i = e) : e,
                o = typeof r == "string" ? this.lookup(i = r) : r;
            if (o) {
                O(typeof i == "string", 2);
                var s = new _e(Ac).merge(a, o);
                if (this.data[i] = s, s !== a && (delete this.refs[i], this.group.caching)) {
                    var u = Object.create(null);
                    a || (u.__exists = 1), Object.keys(o).forEach(function(c) {
                        if (!a || a[c] !== s[c]) {
                            u[c] = 1;
                            var l = Se(c);
                            l !== c && !n.policies.hasKeyArgs(s.__typename, l) && (u[l] = 1), s[c] === void 0 && !(n instanceof pe) && delete s[c]
                        }
                    }), u.__typename && !(a && a.__typename) && this.policies.rootTypenamesById[i] === s.__typename && delete u.__typename, Object.keys(u).forEach(function(c) {
                        return n.group.dirty(i, c)
                    })
                }
            }
        }, t.prototype.modify = function(e, r) {
            var n = this,
                i = this.lookup(e);
            if (i) {
                var a = Object.create(null),
                    o = !1,
                    s = !0,
                    u = {
                        DELETE: zt,
                        INVALIDATE: mi,
                        isReference: A,
                        toReference: this.toReference,
                        canRead: this.canRead,
                        readField: function(c, l) {
                            return n.policies.readField(typeof c == "string" ? {
                                fieldName: c,
                                from: l || Ge(e)
                            } : c, {
                                store: n
                            })
                        }
                    };
                if (Object.keys(i).forEach(function(c) {
                        var l = Se(c),
                            f = i[c];
                        if (f !== void 0) {
                            var d = typeof r == "function" ? r : r[c] || r[l];
                            if (d) {
                                var h = d === mr ? zt : d(Ye(f), g(g({}, u), {
                                    fieldName: l,
                                    storeFieldName: c,
                                    storage: n.getStorage(e, c)
                                }));
                                if (h === mi) n.group.dirty(e, c);
                                else if (h === zt && (h = void 0), h !== f && (a[c] = h, o = !0, f = h, globalThis.__DEV__ !== !1)) {
                                    var v = function(_) {
                                        if (n.lookup(_.__ref) === void 0) return globalThis.__DEV__ !== !1 && O.warn(3, _), !0
                                    };
                                    if (A(h)) v(h);
                                    else if (Array.isArray(h))
                                        for (var y = !1, m = void 0, p = 0, b = h; p < b.length; p++) {
                                            var k = b[p];
                                            if (A(k)) {
                                                if (y = !0, v(k)) break
                                            } else if (typeof k == "object" && k) {
                                                var w = n.policies.identify(k)[0];
                                                w && (m = k)
                                            }
                                            if (y && m !== void 0) {
                                                globalThis.__DEV__ !== !1 && O.warn(4, m);
                                                break
                                            }
                                        }
                                }
                            }
                            f !== void 0 && (s = !1)
                        }
                    }), o) return this.merge(e, a), s && (this instanceof pe ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
            }
            return !1
        }, t.prototype.delete = function(e, r, n) {
            var i, a = this.lookup(e);
            if (a) {
                var o = this.getFieldValue(a, "__typename"),
                    s = r && n ? this.policies.getStoreFieldName({
                        typename: o,
                        fieldName: r,
                        args: n
                    }) : r;
                return this.modify(e, s ? (i = {}, i[s] = mr, i) : mr)
            }
            return !1
        }, t.prototype.evict = function(e, r) {
            var n = !1;
            return e.id && (B.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof pe && this !== r && (n = this.parent.evict(e, r) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n
        }, t.prototype.clear = function() {
            this.replace(null)
        }, t.prototype.extract = function() {
            var e = this,
                r = this.toObject(),
                n = [];
            return this.getRootIdSet().forEach(function(i) {
                B.call(e.policies.rootTypenamesById, i) || n.push(i)
            }), n.length && (r.__META = {
                extraRootIds: n.sort()
            }), r
        }, t.prototype.replace = function(e) {
            var r = this;
            if (Object.keys(this.data).forEach(function(a) {
                    e && B.call(e, a) || r.delete(a)
                }), e) {
                var n = e.__META,
                    i = X(e, ["__META"]);
                Object.keys(i).forEach(function(a) {
                    r.merge(a, i[a])
                }), n && n.extraRootIds.forEach(this.retain, this)
            }
        }, t.prototype.retain = function(e) {
            return this.rootIds[e] = (this.rootIds[e] || 0) + 1
        }, t.prototype.release = function(e) {
            if (this.rootIds[e] > 0) {
                var r = --this.rootIds[e];
                return r || delete this.rootIds[e], r
            }
            return 0
        }, t.prototype.getRootIdSet = function(e) {
            return e === void 0 && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof pe ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
        }, t.prototype.gc = function() {
            var e = this,
                r = this.getRootIdSet(),
                n = this.toObject();
            r.forEach(function(o) {
                B.call(n, o) && (Object.keys(e.findChildRefIds(o)).forEach(r.add, r), delete n[o])
            });
            var i = Object.keys(n);
            if (i.length) {
                for (var a = this; a instanceof pe;) a = a.parent;
                i.forEach(function(o) {
                    return a.delete(o)
                })
            }
            return i
        }, t.prototype.findChildRefIds = function(e) {
            if (!B.call(this.refs, e)) {
                var r = this.refs[e] = Object.create(null),
                    n = this.data[e];
                if (!n) return r;
                var i = new Set([n]);
                i.forEach(function(a) {
                    A(a) && (r[a.__ref] = !0), z(a) && Object.keys(a).forEach(function(o) {
                        var s = a[o];
                        z(s) && i.add(s)
                    })
                })
            }
            return this.refs[e]
        }, t.prototype.makeCacheKey = function() {
            return this.group.keyMaker.lookupArray(arguments)
        }, t
    }(),
    Ja = function() {
        function t(e, r) {
            r === void 0 && (r = null), this.caching = e, this.parent = r, this.d = null, this.resetCaching()
        }
        return t.prototype.resetCaching = function() {
            this.d = this.caching ? _a() : null, this.keyMaker = new fe(Me)
        }, t.prototype.depend = function(e, r) {
            if (this.d) {
                this.d(yr(e, r));
                var n = Se(r);
                n !== r && this.d(yr(e, n)), this.parent && this.parent.depend(e, r)
            }
        }, t.prototype.dirty = function(e, r) {
            this.d && this.d.dirty(yr(e, r), r === "__exists" ? "forget" : "setDirty")
        }, t
    }();

function yr(t, e) {
    return e + "#" + t
}

function yi(t, e) {
    yt(t) && t.group.depend(e, "__exists")
}(function(t) {
    var e = function(r) {
        ue(n, r);

        function n(i) {
            var a = i.policies,
                o = i.resultCaching,
                s = o === void 0 ? !0 : o,
                u = i.seed,
                c = r.call(this, a, new Ja(s)) || this;
            return c.stump = new Mc(c), c.storageTrie = new fe(Me), u && c.replace(u), c
        }
        return n.prototype.addLayer = function(i, a) {
            return this.stump.addLayer(i, a)
        }, n.prototype.removeLayer = function() {
            return this
        }, n.prototype.getStorage = function() {
            return this.storageTrie.lookupArray(arguments)
        }, n
    }(t);
    t.Root = e
})(Ot || (Ot = {}));
var pe = function(t) {
        ue(e, t);

        function e(r, n, i, a) {
            var o = t.call(this, n.policies, a) || this;
            return o.id = r, o.parent = n, o.replay = i, o.group = a, i(o), o
        }
        return e.prototype.addLayer = function(r, n) {
            return new e(r, this, n, this.group)
        }, e.prototype.removeLayer = function(r) {
            var n = this,
                i = this.parent.removeLayer(r);
            return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(a) {
                var o = n.data[a],
                    s = i.lookup(a);
                s ? o ? o !== s && Object.keys(o).forEach(function(u) {
                    M(o[u], s[u]) || n.group.dirty(a, u)
                }) : (n.group.dirty(a, "__exists"), Object.keys(s).forEach(function(u) {
                    n.group.dirty(a, u)
                })) : n.delete(a)
            }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay)
        }, e.prototype.toObject = function() {
            return g(g({}, this.parent.toObject()), this.data)
        }, e.prototype.findChildRefIds = function(r) {
            var n = this.parent.findChildRefIds(r);
            return B.call(this.data, r) ? g(g({}, n), t.prototype.findChildRefIds.call(this, r)) : n
        }, e.prototype.getStorage = function() {
            for (var r = this.parent; r.parent;) r = r.parent;
            return r.getStorage.apply(r, arguments)
        }, e
    }(Ot),
    Mc = function(t) {
        ue(e, t);

        function e(r) {
            return t.call(this, "EntityStore.Stump", r, function() {}, new Ja(r.group.caching, r.group)) || this
        }
        return e.prototype.removeLayer = function() {
            return this
        }, e.prototype.merge = function(r, n) {
            return this.parent.merge(r, n)
        }, e
    }(pe);

function Ac(t, e, r) {
    var n = t[r],
        i = e[r];
    return M(n, i) ? n : i
}

function yt(t) {
    return !!(t instanceof Ot && t.group.caching)
}

function jc(t) {
    return z(t) ? Q(t) ? t.slice(0) : g({
        __proto__: Object.getPrototypeOf(t)
    }, t) : t
}
var gi = function() {
    function t() {
        this.known = new(on ? WeakSet : Set), this.pool = new fe(Me), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
    }
    return t.prototype.isKnown = function(e) {
        return z(e) && this.known.has(e)
    }, t.prototype.pass = function(e) {
        if (z(e)) {
            var r = jc(e);
            return this.passes.set(r, e), r
        }
        return e
    }, t.prototype.admit = function(e) {
        var r = this;
        if (z(e)) {
            var n = this.passes.get(e);
            if (n) return n;
            var i = Object.getPrototypeOf(e);
            switch (i) {
                case Array.prototype: {
                    if (this.known.has(e)) return e;
                    var a = e.map(this.admit, this),
                        o = this.pool.lookupArray(a);
                    return o.array || (this.known.add(o.array = a), globalThis.__DEV__ !== !1 && Object.freeze(a)), o.array
                }
                case null:
                case Object.prototype: {
                    if (this.known.has(e)) return e;
                    var s = Object.getPrototypeOf(e),
                        u = [s],
                        c = this.sortedKeys(e);
                    u.push(c.json);
                    var l = u.length;
                    c.sorted.forEach(function(h) {
                        u.push(r.admit(e[h]))
                    });
                    var o = this.pool.lookupArray(u);
                    if (!o.object) {
                        var f = o.object = Object.create(s);
                        this.known.add(f), c.sorted.forEach(function(h, v) {
                            f[h] = u[l + v]
                        }), globalThis.__DEV__ !== !1 && Object.freeze(f)
                    }
                    return o.object
                }
            }
        }
        return e
    }, t.prototype.sortedKeys = function(e) {
        var r = Object.keys(e),
            n = this.pool.lookupArray(r);
        if (!n.keys) {
            r.sort();
            var i = JSON.stringify(r);
            (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = {
                sorted: r,
                json: i
            })
        }
        return n.keys
    }, t
}();

function bi(t) {
    return [t.selectionSet, t.objectOrReference, t.context, t.context.canonizeResults]
}
var Vc = function() {
    function t(e) {
        var r = this;
        this.knownResults = new(Me ? WeakMap : Map), this.config = Pe(e, {
            addTypename: e.addTypename !== !1,
            canonizeResults: $a(e)
        }), this.canon = e.canon || new gi, this.executeSelectionSet = St(function(n) {
            var i, a = n.context.canonizeResults,
                o = bi(n);
            o[3] = !a;
            var s = (i = r.executeSelectionSet).peek.apply(i, o);
            return s ? a ? g(g({}, s), {
                result: r.canon.admit(s.result)
            }) : s : (yi(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n))
        }, {
            max: this.config.resultCacheMaxSize || se["inMemoryCache.executeSelectionSet"] || 5e4,
            keyArgs: bi,
            makeCacheKey: function(n, i, a, o) {
                if (yt(a.store)) return a.store.makeCacheKey(n, A(i) ? i.__ref : i, a.varString, o)
            }
        }), this.executeSubSelectedArray = St(function(n) {
            return yi(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n)
        }, {
            max: this.config.resultCacheMaxSize || se["inMemoryCache.executeSubSelectedArray"] || 1e4,
            makeCacheKey: function(n) {
                var i = n.field,
                    a = n.array,
                    o = n.context;
                if (yt(o.store)) return o.store.makeCacheKey(i, a, o.varString)
            }
        })
    }
    return t.prototype.resetCanon = function() {
        this.canon = new gi
    }, t.prototype.diffQueryAgainstStore = function(e) {
        var r = e.store,
            n = e.query,
            i = e.rootId,
            a = i === void 0 ? "ROOT_QUERY" : i,
            o = e.variables,
            s = e.returnPartialData,
            u = s === void 0 ? !0 : s,
            c = e.canonizeResults,
            l = c === void 0 ? this.config.canonizeResults : c,
            f = this.config.cache.policies;
        o = g(g({}, ln(la(n))), o);
        var d = Ge(a),
            h = this.executeSelectionSet({
                selectionSet: Et(n).selectionSet,
                objectOrReference: d,
                enclosingRef: d,
                context: g({
                    store: r,
                    query: n,
                    policies: f,
                    variables: o,
                    varString: be(o),
                    canonizeResults: l
                }, Ha(n, this.config.fragments))
            }),
            v;
        if (h.missing && (v = [new Ua(qc(h.missing), h.missing, n, o)], !u)) throw v[0];
        return {
            result: h.result,
            complete: !v,
            missing: v
        }
    }, t.prototype.isFresh = function(e, r, n, i) {
        if (yt(i.store) && this.knownResults.get(e) === n) {
            var a = this.executeSelectionSet.peek(n, r, i, this.canon.isKnown(e));
            if (a && e === a.result) return !0
        }
        return !1
    }, t.prototype.execSelectionSetImpl = function(e) {
        var r = this,
            n = e.selectionSet,
            i = e.objectOrReference,
            a = e.enclosingRef,
            o = e.context;
        if (A(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
        var s = o.variables,
            u = o.policies,
            c = o.store,
            l = c.getFieldValue(i, "__typename"),
            f = [],
            d, h = new _e;
        this.config.addTypename && typeof l == "string" && !u.rootIdsByTypename[l] && f.push({
            __typename: l
        });

        function v(k, w) {
            var _;
            return k.missing && (d = h.merge(d, (_ = {}, _[w] = k.missing, _))), k.result
        }
        var y = new Set(n.selections);
        y.forEach(function(k) {
            var w, _;
            if (Tt(k, s))
                if (ke(k)) {
                    var S = u.readField({
                            fieldName: k.name.value,
                            field: k,
                            variables: o.variables,
                            from: i
                        }, o),
                        I = le(k);
                    S === void 0 ? pn.added(k) || (d = h.merge(d, (w = {}, w[I] = "Can't find field '".concat(k.name.value, "' on ").concat(A(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), w))) : Q(S) ? S.length > 0 && (S = v(r.executeSubSelectedArray({
                        field: k,
                        array: S,
                        enclosingRef: a,
                        context: o
                    }), I)) : k.selectionSet ? S != null && (S = v(r.executeSelectionSet({
                        selectionSet: k.selectionSet,
                        objectOrReference: S,
                        enclosingRef: A(S) ? S : a,
                        context: o
                    }), I)) : o.canonizeResults && (S = r.canon.pass(S)), S !== void 0 && f.push((_ = {}, _[I] = S, _))
                } else {
                    var T = Kt(k, o.lookupFragment);
                    if (!T && k.kind === V.FRAGMENT_SPREAD) throw J(10, k.name.value);
                    T && u.fragmentMatches(T, l) && T.selectionSet.selections.forEach(y.add, y)
                }
        });
        var m = tr(f),
            p = {
                result: m,
                missing: d
            },
            b = o.canonizeResults ? this.canon.admit(p) : Ye(p);
        return b.result && this.knownResults.set(b.result, n), b
    }, t.prototype.execSubSelectedArrayImpl = function(e) {
        var r = this,
            n = e.field,
            i = e.array,
            a = e.enclosingRef,
            o = e.context,
            s, u = new _e;

        function c(l, f) {
            var d;
            return l.missing && (s = u.merge(s, (d = {}, d[f] = l.missing, d))), l.result
        }
        return n.selectionSet && (i = i.filter(o.store.canRead)), i = i.map(function(l, f) {
            return l === null ? null : Q(l) ? c(r.executeSubSelectedArray({
                field: n,
                array: l,
                enclosingRef: a,
                context: o
            }), f) : n.selectionSet ? c(r.executeSelectionSet({
                selectionSet: n.selectionSet,
                objectOrReference: l,
                enclosingRef: A(l) ? l : a,
                context: o
            }), f) : (globalThis.__DEV__ !== !1 && Lc(o.store, n, l), l)
        }), {
            result: o.canonizeResults ? this.canon.admit(i) : i,
            missing: s
        }
    }, t
}();

function qc(t) {
    try {
        JSON.stringify(t, function(e, r) {
            if (typeof r == "string") throw r;
            return r
        })
    } catch (e) {
        return e
    }
}

function Lc(t, e, r) {
    if (!e.selectionSet) {
        var n = new Set([r]);
        n.forEach(function(i) {
            z(i) && (O(!A(i), 11, Fc(t, i), e.name.value), Object.values(i).forEach(n.add, n))
        })
    }
}
var wn = new It,
    ki = new WeakMap;

function gt(t) {
    var e = ki.get(t);
    return e || ki.set(t, e = {
        vars: new Set,
        dep: _a()
    }), e
}

function wi(t) {
    gt(t).vars.forEach(function(e) {
        return e.forgetCache(t)
    })
}

function zc(t) {
    gt(t).vars.forEach(function(e) {
        return e.attachCache(t)
    })
}

function Qc(t) {
    var e = new Set,
        r = new Set,
        n = function(a) {
            if (arguments.length > 0) {
                if (t !== a) {
                    t = a, e.forEach(function(u) {
                        gt(u).dep.dirty(n), Wc(u)
                    });
                    var o = Array.from(r);
                    r.clear(), o.forEach(function(u) {
                        return u(t)
                    })
                }
            } else {
                var s = wn.getValue();
                s && (i(s), gt(s).dep(n))
            }
            return t
        };
    n.onNextChange = function(a) {
        return r.add(a),
            function() {
                r.delete(a)
            }
    };
    var i = n.attachCache = function(a) {
        return e.add(a), gt(a).vars.add(n), n
    };
    return n.forgetCache = function(a) {
        return e.delete(a)
    }, n
}

function Wc(t) {
    t.broadcastWatches && t.broadcastWatches()
}
var _i = Object.create(null);

function _n(t) {
    var e = JSON.stringify(t);
    return _i[e] || (_i[e] = Object.create(null))
}

function Si(t) {
    var e = _n(t);
    return e.keyFieldsFn || (e.keyFieldsFn = function(r, n) {
        var i = function(o, s) {
                return n.readField(s, o)
            },
            a = n.keyObject = Sn(t, function(o) {
                var s = Ze(n.storeObject, o, i);
                return s === void 0 && r !== n.storeObject && B.call(r, o[0]) && (s = Ze(r, o, Xa)), O(s !== void 0, 5, o.join("."), r), s
            });
        return "".concat(n.typename, ":").concat(JSON.stringify(a))
    })
}

function Oi(t) {
    var e = _n(t);
    return e.keyArgsFn || (e.keyArgsFn = function(r, n) {
        var i = n.field,
            a = n.variables,
            o = n.fieldName,
            s = Sn(t, function(c) {
                var l = c[0],
                    f = l.charAt(0);
                if (f === "@") {
                    if (i && Y(i.directives)) {
                        var d = l.slice(1),
                            h = i.directives.find(function(p) {
                                return p.name.value === d
                            }),
                            v = h && Xt(h, a);
                        return v && Ze(v, c.slice(1))
                    }
                    return
                }
                if (f === "$") {
                    var y = l.slice(1);
                    if (a && B.call(a, y)) {
                        var m = c.slice(0);
                        return m[0] = y, Ze(a, m)
                    }
                    return
                }
                if (r) return Ze(r, c)
            }),
            u = JSON.stringify(s);
        return (r || u !== "{}") && (o += ":" + u), o
    })
}

function Sn(t, e) {
    var r = new _e;
    return Ka(t).reduce(function(n, i) {
        var a, o = e(i);
        if (o !== void 0) {
            for (var s = i.length - 1; s >= 0; --s) o = (a = {}, a[i[s]] = o, a);
            n = r.merge(n, o)
        }
        return n
    }, Object.create(null))
}

function Ka(t) {
    var e = _n(t);
    if (!e.paths) {
        var r = e.paths = [],
            n = [];
        t.forEach(function(i, a) {
            Q(i) ? (Ka(i).forEach(function(o) {
                return r.push(n.concat(o))
            }), n.length = 0) : (n.push(i), Q(t[a + 1]) || (r.push(n.slice(0)), n.length = 0))
        })
    }
    return e.paths
}

function Xa(t, e) {
    return t[e]
}

function Ze(t, e, r) {
    return r = r || Xa, Ya(e.reduce(function n(i, a) {
        return Q(i) ? i.map(function(o) {
            return n(o, a)
        }) : i && r(i, a)
    }, t))
}

function Ya(t) {
    return z(t) ? Q(t) ? t.map(Ya) : Sn(Object.keys(t).sort(), function(e) {
        return Ze(t, e)
    }) : t
}

function Ur(t) {
    return t.args !== void 0 ? t.args : t.field ? Xt(t.field, t.variables) : null
}
var Uc = function() {},
    Ti = function(t, e) {
        return e.fieldName
    },
    Ei = function(t, e, r) {
        var n = r.mergeObjects;
        return n(t, e)
    },
    Ii = function(t, e) {
        return e
    },
    Bc = function() {
        function t(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = g({
                dataIdFromObject: Ba
            }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies)
        }
        return t.prototype.identify = function(e, r) {
            var n, i = this,
                a = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || e.__typename;
            if (a === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
            var o = r && r.storeObject || e,
                s = g(g({}, r), {
                    typename: a,
                    storeObject: o,
                    readField: r && r.readField || function() {
                        var f = On(arguments, o);
                        return i.readField(f, {
                            store: i.cache.data,
                            variables: f.variables
                        })
                    }
                }),
                u, c = a && this.getTypePolicy(a),
                l = c && c.keyFn || this.config.dataIdFromObject;
            return kn.withValue(!0, function() {
                for (; l;) {
                    var f = l(g(g({}, e), o), s);
                    if (Q(f)) l = Si(f);
                    else {
                        u = f;
                        break
                    }
                }
            }), u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u]
        }, t.prototype.addTypePolicies = function(e) {
            var r = this;
            Object.keys(e).forEach(function(n) {
                var i = e[n],
                    a = i.queryType,
                    o = i.mutationType,
                    s = i.subscriptionType,
                    u = X(i, ["queryType", "mutationType", "subscriptionType"]);
                a && r.setRootTypename("Query", n), o && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), B.call(r.toBeAdded, n) ? r.toBeAdded[n].push(u) : r.toBeAdded[n] = [u]
            })
        }, t.prototype.updateTypePolicy = function(e, r) {
            var n = this,
                i = this.getTypePolicy(e),
                a = r.keyFields,
                o = r.fields;

            function s(u, c) {
                u.merge = typeof c == "function" ? c : c === !0 ? Ei : c === !1 ? Ii : u.merge
            }
            s(i, r.merge), i.keyFn = a === !1 ? Uc : Q(a) ? Si(a) : typeof a == "function" ? a : i.keyFn, o && Object.keys(o).forEach(function(u) {
                var c = n.getFieldPolicy(e, u, !0),
                    l = o[u];
                if (typeof l == "function") c.read = l;
                else {
                    var f = l.keyArgs,
                        d = l.read,
                        h = l.merge;
                    c.keyFn = f === !1 ? Ti : Q(f) ? Oi(f) : typeof f == "function" ? f : c.keyFn, typeof d == "function" && (c.read = d), s(c, h)
                }
                c.read && c.merge && (c.keyFn = c.keyFn || Ti)
            })
        }, t.prototype.setRootTypename = function(e, r) {
            r === void 0 && (r = e);
            var n = "ROOT_" + e.toUpperCase(),
                i = this.rootTypenamesById[n];
            r !== i && (O(!i || i === e, 6, e), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r)
        }, t.prototype.addPossibleTypes = function(e) {
            var r = this;
            this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
                r.getSupertypeSet(n, !0), e[n].forEach(function(i) {
                    r.getSupertypeSet(i, !0).add(n);
                    var a = i.match(Za);
                    (!a || a[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i))
                })
            })
        }, t.prototype.getTypePolicy = function(e) {
            var r = this;
            if (!B.call(this.typePolicies, e)) {
                var n = this.typePolicies[e] = Object.create(null);
                n.fields = Object.create(null);
                var i = this.supertypeMap.get(e);
                !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(o, s) {
                    if (o.test(e)) {
                        var u = r.supertypeMap.get(s);
                        u && u.forEach(function(c) {
                            return i.add(c)
                        })
                    }
                })), i && i.size && i.forEach(function(o) {
                    var s = r.getTypePolicy(o),
                        u = s.fields,
                        c = X(s, ["fields"]);
                    Object.assign(n, c), Object.assign(n.fields, u)
                })
            }
            var a = this.toBeAdded[e];
            return a && a.length && a.splice(0).forEach(function(o) {
                r.updateTypePolicy(e, o)
            }), this.typePolicies[e]
        }, t.prototype.getFieldPolicy = function(e, r, n) {
            if (e) {
                var i = this.getTypePolicy(e).fields;
                return i[r] || n && (i[r] = Object.create(null))
            }
        }, t.prototype.getSupertypeSet = function(e, r) {
            var n = this.supertypeMap.get(e);
            return !n && r && this.supertypeMap.set(e, n = new Set), n
        }, t.prototype.fragmentMatches = function(e, r, n, i) {
            var a = this;
            if (!e.typeCondition) return !0;
            if (!r) return !1;
            var o = e.typeCondition.name.value;
            if (r === o) return !0;
            if (this.usingPossibleTypes && this.supertypeMap.has(o))
                for (var s = this.getSupertypeSet(r, !0), u = [s], c = function(v) {
                        var y = a.getSupertypeSet(v, !1);
                        y && y.size && u.indexOf(y) < 0 && u.push(y)
                    }, l = !!(n && this.fuzzySubtypes.size), f = !1, d = 0; d < u.length; ++d) {
                    var h = u[d];
                    if (h.has(o)) return s.has(o) || (f && globalThis.__DEV__ !== !1 && O.warn(7, r, o), s.add(o)), !0;
                    h.forEach(c), l && d === u.length - 1 && Wr(e.selectionSet, n, i) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(v, y) {
                        var m = r.match(v);
                        m && m[0] === r && c(y)
                    }))
                }
            return !1
        }, t.prototype.hasKeyArgs = function(e, r) {
            var n = this.getFieldPolicy(e, r, !1);
            return !!(n && n.keyFn)
        }, t.prototype.getStoreFieldName = function(e) {
            var r = e.typename,
                n = e.fieldName,
                i = this.getFieldPolicy(r, n, !1),
                a, o = i && i.keyFn;
            if (o && r)
                for (var s = {
                        typename: r,
                        fieldName: n,
                        field: e.field || null,
                        variables: e.variables
                    }, u = Ur(e); o;) {
                    var c = o(u, s);
                    if (Q(c)) o = Oi(c);
                    else {
                        a = c || n;
                        break
                    }
                }
            return a === void 0 && (a = e.field ? fu(e.field, e.variables) : ca(n, Ur(e))), a === !1 ? n : n === Se(a) ? a : n + ":" + a
        }, t.prototype.readField = function(e, r) {
            var n = e.from;
            if (n) {
                var i = e.field || e.fieldName;
                if (i) {
                    if (e.typename === void 0) {
                        var a = r.store.getFieldValue(n, "__typename");
                        a && (e.typename = a)
                    }
                    var o = this.getStoreFieldName(e),
                        s = Se(o),
                        u = r.store.getFieldValue(n, o),
                        c = this.getFieldPolicy(e.typename, s, !1),
                        l = c && c.read;
                    if (l) {
                        var f = Ni(this, n, e, r, r.store.getStorage(A(n) ? n.__ref : n, o));
                        return wn.withValue(this.cache, l, [u, f])
                    }
                    return u
                }
            }
        }, t.prototype.getReadFunction = function(e, r) {
            var n = this.getFieldPolicy(e, r, !1);
            return n && n.read
        }, t.prototype.getMergeFunction = function(e, r, n) {
            var i = this.getFieldPolicy(e, r, !1),
                a = i && i.merge;
            return !a && n && (i = this.getTypePolicy(n), a = i && i.merge), a
        }, t.prototype.runMergeFunction = function(e, r, n, i, a) {
            var o = n.field,
                s = n.typename,
                u = n.merge;
            return u === Ei ? eo(i.store)(e, r) : u === Ii ? r : (i.overwrite && (e = void 0), u(e, r, Ni(this, void 0, {
                typename: s,
                fieldName: o.name.value,
                field: o,
                variables: i.variables
            }, i, a || Object.create(null))))
        }, t
    }();

function Ni(t, e, r, n, i) {
    var a = t.getStoreFieldName(r),
        o = Se(a),
        s = r.variables || n.variables,
        u = n.store,
        c = u.toReference,
        l = u.canRead;
    return {
        args: Ur(r),
        field: r.field || null,
        fieldName: o,
        storeFieldName: a,
        variables: s,
        isReference: A,
        toReference: c,
        storage: i,
        cache: t.cache,
        canRead: l,
        readField: function() {
            return t.readField(On(arguments, e, s), n)
        },
        mergeObjects: eo(n.store)
    }
}

function On(t, e, r) {
    var n = t[0],
        i = t[1],
        a = t.length,
        o;
    return typeof n == "string" ? o = {
        fieldName: n,
        from: a > 1 ? i : e
    } : (o = g({}, n), B.call(o, "from") || (o.from = e)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && O.warn(8, Xi(Array.from(t))), o.variables === void 0 && (o.variables = r), o
}

function eo(t) {
    return function(r, n) {
        if (Q(r) || Q(n)) throw J(9);
        if (z(r) && z(n)) {
            var i = t.getFieldValue(r, "__typename"),
                a = t.getFieldValue(n, "__typename"),
                o = i && a && i !== a;
            if (o) return n;
            if (A(r) && We(n)) return t.merge(r.__ref, n), r;
            if (We(r) && A(n)) return t.merge(r, n.__ref), n;
            if (We(r) && We(n)) return g(g({}, r), n)
        }
        return n
    }
}

function gr(t, e, r) {
    var n = "".concat(e).concat(r),
        i = t.flavors.get(n);
    return i || t.flavors.set(n, i = t.clientOnly === e && t.deferred === r ? t : g(g({}, t), {
        clientOnly: e,
        deferred: r
    })), i
}
var Gc = function() {
        function t(e, r, n) {
            this.cache = e, this.reader = r, this.fragments = n
        }
        return t.prototype.writeToStore = function(e, r) {
            var n = this,
                i = r.query,
                a = r.result,
                o = r.dataId,
                s = r.variables,
                u = r.overwrite,
                c = Fe(i),
                l = Pc();
            s = g(g({}, ln(c)), s);
            var f = g(g({
                    store: e,
                    written: Object.create(null),
                    merge: function(h, v) {
                        return l.merge(h, v)
                    },
                    variables: s,
                    varString: be(s)
                }, Ha(i, this.fragments)), {
                    overwrite: !!u,
                    incomingById: new Map,
                    clientOnly: !1,
                    deferred: !1,
                    flavors: new Map
                }),
                d = this.processSelectionSet({
                    result: a || Object.create(null),
                    dataId: o,
                    selectionSet: c.selectionSet,
                    mergeTree: {
                        map: new Map
                    },
                    context: f
                });
            if (!A(d)) throw J(12, a);
            return f.incomingById.forEach(function(h, v) {
                var y = h.storeObject,
                    m = h.mergeTree,
                    p = h.fieldNodeSet,
                    b = Ge(v);
                if (m && m.map.size) {
                    var k = n.applyMerges(m, b, y, f);
                    if (A(k)) return;
                    y = k
                }
                if (globalThis.__DEV__ !== !1 && !f.overwrite) {
                    var w = Object.create(null);
                    p.forEach(function(I) {
                        I.selectionSet && (w[I.name.value] = !0)
                    });
                    var _ = function(I) {
                            return w[Se(I)] === !0
                        },
                        S = function(I) {
                            var T = m && m.map.get(I);
                            return !!(T && T.info && T.info.merge)
                        };
                    Object.keys(y).forEach(function(I) {
                        _(I) && !S(I) && $c(b, y, I, f.store)
                    })
                }
                e.merge(v, y)
            }), e.retain(d.__ref), d
        }, t.prototype.processSelectionSet = function(e) {
            var r = this,
                n = e.dataId,
                i = e.result,
                a = e.selectionSet,
                o = e.context,
                s = e.mergeTree,
                u = this.cache.policies,
                c = Object.create(null),
                l = n && u.rootTypenamesById[n] || Pr(i, a, o.fragmentMap) || n && o.store.get(n, "__typename");
            typeof l == "string" && (c.__typename = l);
            var f = function() {
                    var k = On(arguments, c, o.variables);
                    if (A(k.from)) {
                        var w = o.incomingById.get(k.from.__ref);
                        if (w) {
                            var _ = u.readField(g(g({}, k), {
                                from: w.storeObject
                            }), o);
                            if (_ !== void 0) return _
                        }
                    }
                    return u.readField(k, o)
                },
                d = new Set;
            this.flattenFields(a, i, o, l).forEach(function(k, w) {
                var _, S = le(w),
                    I = i[S];
                if (d.add(w), I !== void 0) {
                    var T = u.getStoreFieldName({
                            typename: l,
                            fieldName: w.name.value,
                            field: w,
                            variables: k.variables
                        }),
                        N = Di(s, T),
                        P = r.processFieldValue(I, w, w.selectionSet ? gr(k, !1, !1) : k, N),
                        W = void 0;
                    w.selectionSet && (A(P) || We(P)) && (W = f("__typename", P));
                    var R = u.getMergeFunction(l, w.name.value, W);
                    R ? N.info = {
                        field: w,
                        typename: l,
                        merge: R
                    } : Ci(s, T), c = k.merge(c, (_ = {}, _[T] = P, _))
                } else globalThis.__DEV__ !== !1 && !k.clientOnly && !k.deferred && !pn.added(w) && !u.getReadFunction(l, w.name.value) && globalThis.__DEV__ !== !1 && O.error(13, le(w), i)
            });
            try {
                var h = u.identify(i, {
                        typename: l,
                        selectionSet: a,
                        fragmentMap: o.fragmentMap,
                        storeObject: c,
                        readField: f
                    }),
                    v = h[0],
                    y = h[1];
                n = n || v, y && (c = o.merge(c, y))
            } catch (k) {
                if (!n) throw k
            }
            if (typeof n == "string") {
                var m = Ge(n),
                    p = o.written[n] || (o.written[n] = []);
                if (p.indexOf(a) >= 0 || (p.push(a), this.reader && this.reader.isFresh(i, m, a, o))) return m;
                var b = o.incomingById.get(n);
                return b ? (b.storeObject = o.merge(b.storeObject, c), b.mergeTree = Br(b.mergeTree, s), d.forEach(function(k) {
                    return b.fieldNodeSet.add(k)
                })) : o.incomingById.set(n, {
                    storeObject: c,
                    mergeTree: Bt(s) ? void 0 : s,
                    fieldNodeSet: d
                }), m
            }
            return c
        }, t.prototype.processFieldValue = function(e, r, n, i) {
            var a = this;
            return !r.selectionSet || e === null ? globalThis.__DEV__ !== !1 ? Ca(e) : e : Q(e) ? e.map(function(o, s) {
                var u = a.processFieldValue(o, r, n, Di(i, s));
                return Ci(i, s), u
            }) : this.processSelectionSet({
                result: e,
                selectionSet: r.selectionSet,
                context: n,
                mergeTree: i
            })
        }, t.prototype.flattenFields = function(e, r, n, i) {
            i === void 0 && (i = Pr(r, e, n.fragmentMap));
            var a = new Map,
                o = this.cache.policies,
                s = new fe(!1);
            return function u(c, l) {
                var f = s.lookup(c, l.clientOnly, l.deferred);
                f.visited || (f.visited = !0, c.selections.forEach(function(d) {
                    if (Tt(d, n.variables)) {
                        var h = l.clientOnly,
                            v = l.deferred;
                        if (!(h && v) && Y(d.directives) && d.directives.forEach(function(p) {
                                var b = p.name.value;
                                if (b === "client" && (h = !0), b === "defer") {
                                    var k = Xt(p, n.variables);
                                    (!k || k.if !== !1) && (v = !0)
                                }
                            }), ke(d)) {
                            var y = a.get(d);
                            y && (h = h && y.clientOnly, v = v && y.deferred), a.set(d, gr(n, h, v))
                        } else {
                            var m = Kt(d, n.lookupFragment);
                            if (!m && d.kind === V.FRAGMENT_SPREAD) throw J(14, d.name.value);
                            m && o.fragmentMatches(m, i, r, n.variables) && u(m.selectionSet, gr(n, h, v))
                        }
                    }
                }))
            }(e, n), a
        }, t.prototype.applyMerges = function(e, r, n, i, a) {
            var o, s = this;
            if (e.map.size && !A(n)) {
                var u = !Q(n) && (A(r) || We(r)) ? r : void 0,
                    c = n;
                u && !a && (a = [A(u) ? u.__ref : u]);
                var l, f = function(d, h) {
                    return Q(d) ? typeof h == "number" ? d[h] : void 0 : i.store.getFieldValue(d, String(h))
                };
                e.map.forEach(function(d, h) {
                    var v = f(u, h),
                        y = f(c, h);
                    if (y !== void 0) {
                        a && a.push(h);
                        var m = s.applyMerges(d, v, y, i, a);
                        m !== y && (l = l || new Map, l.set(h, m)), a && O(a.pop() === h)
                    }
                }), l && (n = Q(c) ? c.slice(0) : g({}, c), l.forEach(function(d, h) {
                    n[h] = d
                }))
            }
            return e.info ? this.cache.policies.runMergeFunction(r, n, e.info, i, a && (o = i.store).getStorage.apply(o, a)) : n
        }, t
    }(),
    to = [];

function Di(t, e) {
    var r = t.map;
    return r.has(e) || r.set(e, to.pop() || {
        map: new Map
    }), r.get(e)
}

function Br(t, e) {
    if (t === e || !e || Bt(e)) return t;
    if (!t || Bt(t)) return e;
    var r = t.info && e.info ? g(g({}, t.info), e.info) : t.info || e.info,
        n = t.map.size && e.map.size,
        i = n ? new Map : t.map.size ? t.map : e.map,
        a = {
            info: r,
            map: i
        };
    if (n) {
        var o = new Set(e.map.keys());
        t.map.forEach(function(s, u) {
            a.map.set(u, Br(s, e.map.get(u))), o.delete(u)
        }), o.forEach(function(s) {
            a.map.set(s, Br(e.map.get(s), t.map.get(s)))
        })
    }
    return a
}

function Bt(t) {
    return !t || !(t.info || t.map.size)
}

function Ci(t, e) {
    var r = t.map,
        n = r.get(e);
    n && Bt(n) && (to.push(n), r.delete(e))
}
var xi = new Set;

function $c(t, e, r, n) {
    var i = function(f) {
            var d = n.getFieldValue(f, r);
            return typeof d == "object" && d
        },
        a = i(t);
    if (a) {
        var o = i(e);
        if (o && !A(a) && !M(a, o) && !Object.keys(a).every(function(f) {
                return n.getFieldValue(o, f) !== void 0
            })) {
            var s = n.getFieldValue(t, "__typename") || n.getFieldValue(e, "__typename"),
                u = Se(r),
                c = "".concat(s, ".").concat(u);
            if (!xi.has(c)) {
                xi.add(c);
                var l = [];
                !Q(a) && !Q(o) && [a, o].forEach(function(f) {
                    var d = n.getFieldValue(f, "__typename");
                    typeof d == "string" && !l.includes(d) && l.push(d)
                }), globalThis.__DEV__ !== !1 && O.warn(15, u, s, l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", c, g({}, a), g({}, o))
            }
        }
    }
}
var ro = function(t) {
    ue(e, t);

    function e(r) {
        r === void 0 && (r = {});
        var n = t.call(this) || this;
        return n.watches = new Set, n.addTypenameTransform = new Sa(pn), n.assumeImmutableResults = !0, n.makeVar = Qc, n.txCount = 0, n.config = Rc(r), n.addTypename = !!n.config.addTypename, n.policies = new Bc({
            cache: n,
            dataIdFromObject: n.config.dataIdFromObject,
            possibleTypes: n.config.possibleTypes,
            typePolicies: n.config.typePolicies
        }), n.init(), n
    }
    return e.prototype.init = function() {
        var r = this.data = new Ot.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching
        });
        this.optimisticData = r.stump, this.resetResultCache()
    }, e.prototype.resetResultCache = function(r) {
        var n = this,
            i = this.storeReader,
            a = this.config.fragments;
        this.storeWriter = new Gc(this, this.storeReader = new Vc({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: $a(this.config),
            canon: r ? void 0 : i && i.canon,
            fragments: a
        }), a), this.maybeBroadcastWatch = St(function(o, s) {
            return n.broadcastWatch(o, s)
        }, {
            max: this.config.resultCacheMaxSize || se["inMemoryCache.maybeBroadcastWatch"] || 5e3,
            makeCacheKey: function(o) {
                var s = o.optimistic ? n.optimisticData : n.data;
                if (yt(s)) {
                    var u = o.optimistic,
                        c = o.id,
                        l = o.variables;
                    return s.makeCacheKey(o.query, o.callback, be({
                        optimistic: u,
                        id: c,
                        variables: l
                    }))
                }
            }
        }), new Set([this.data.group, this.optimisticData.group]).forEach(function(o) {
            return o.resetCaching()
        })
    }, e.prototype.restore = function(r) {
        return this.init(), r && this.data.replace(r), this
    }, e.prototype.extract = function(r) {
        return r === void 0 && (r = !1), (r ? this.optimisticData : this.data).extract()
    }, e.prototype.read = function(r) {
        var n = r.returnPartialData,
            i = n === void 0 ? !1 : n;
        try {
            return this.storeReader.diffQueryAgainstStore(g(g({}, r), {
                store: r.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: i
            })).result || null
        } catch (a) {
            if (a instanceof Ua) return null;
            throw a
        }
    }, e.prototype.write = function(r) {
        try {
            return ++this.txCount, this.storeWriter.writeToStore(this.data, r)
        } finally {
            !--this.txCount && r.broadcast !== !1 && this.broadcastWatches()
        }
    }, e.prototype.modify = function(r) {
        if (B.call(r, "id") && !r.id) return !1;
        var n = r.optimistic ? this.optimisticData : this.data;
        try {
            return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields)
        } finally {
            !--this.txCount && r.broadcast !== !1 && this.broadcastWatches()
        }
    }, e.prototype.diff = function(r) {
        return this.storeReader.diffQueryAgainstStore(g(g({}, r), {
            store: r.optimistic ? this.optimisticData : this.data,
            rootId: r.id || "ROOT_QUERY",
            config: this.config
        }))
    }, e.prototype.watch = function(r) {
        var n = this;
        return this.watches.size || zc(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r),
            function() {
                n.watches.delete(r) && !n.watches.size && wi(n), n.maybeBroadcastWatch.forget(r)
            }
    }, e.prototype.gc = function(r) {
        var n;
        be.reset(), Ce.reset(), this.addTypenameTransform.resetCache(), (n = this.config.fragments) === null || n === void 0 || n.resetCaches();
        var i = this.optimisticData.gc();
        return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), i
    }, e.prototype.retain = function(r, n) {
        return (n ? this.optimisticData : this.data).retain(r)
    }, e.prototype.release = function(r, n) {
        return (n ? this.optimisticData : this.data).release(r)
    }, e.prototype.identify = function(r) {
        if (A(r)) return r.__ref;
        try {
            return this.policies.identify(r)[0]
        } catch (n) {
            globalThis.__DEV__ !== !1 && O.warn(n)
        }
    }, e.prototype.evict = function(r) {
        if (!r.id) {
            if (B.call(r, "id")) return !1;
            r = g(g({}, r), {
                id: "ROOT_QUERY"
            })
        }
        try {
            return ++this.txCount, this.optimisticData.evict(r, this.data)
        } finally {
            !--this.txCount && r.broadcast !== !1 && this.broadcastWatches()
        }
    }, e.prototype.reset = function(r) {
        var n = this;
        return this.init(), be.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
            return n.maybeBroadcastWatch.forget(i)
        }), this.watches.clear(), wi(this)) : this.broadcastWatches(), Promise.resolve()
    }, e.prototype.removeOptimistic = function(r) {
        var n = this.optimisticData.removeLayer(r);
        n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches())
    }, e.prototype.batch = function(r) {
        var n = this,
            i = r.update,
            a = r.optimistic,
            o = a === void 0 ? !0 : a,
            s = r.removeOptimistic,
            u = r.onWatchUpdated,
            c, l = function(d) {
                var h = n,
                    v = h.data,
                    y = h.optimisticData;
                ++n.txCount, d && (n.data = n.optimisticData = d);
                try {
                    return c = i(n)
                } finally {
                    --n.txCount, n.data = v, n.optimisticData = y
                }
            },
            f = new Set;
        return u && !this.txCount && this.broadcastWatches(g(g({}, r), {
            onWatchUpdated: function(d) {
                return f.add(d), !1
            }
        })), typeof o == "string" ? this.optimisticData = this.optimisticData.addLayer(o, l) : o === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && f.size ? (this.broadcastWatches(g(g({}, r), {
            onWatchUpdated: function(d, h) {
                var v = u.call(this, d, h);
                return v !== !1 && f.delete(d), v
            }
        })), f.size && f.forEach(function(d) {
            return n.maybeBroadcastWatch.dirty(d)
        })) : this.broadcastWatches(r), c
    }, e.prototype.performTransaction = function(r, n) {
        return this.batch({
            update: r,
            optimistic: n || n !== null
        })
    }, e.prototype.transformDocument = function(r) {
        return this.addTypenameToDocument(this.addFragmentsToDocument(r))
    }, e.prototype.fragmentMatches = function(r, n) {
        return this.policies.fragmentMatches(r, n)
    }, e.prototype.lookupFragment = function(r) {
        var n;
        return ((n = this.config.fragments) === null || n === void 0 ? void 0 : n.lookup(r)) || null
    }, e.prototype.broadcastWatches = function(r) {
        var n = this;
        this.txCount || this.watches.forEach(function(i) {
            return n.maybeBroadcastWatch(i, r)
        })
    }, e.prototype.addFragmentsToDocument = function(r) {
        var n = this.config.fragments;
        return n ? n.transform(r) : r
    }, e.prototype.addTypenameToDocument = function(r) {
        return this.addTypename ? this.addTypenameTransform.transformDocument(r) : r
    }, e.prototype.broadcastWatch = function(r, n) {
        var i = r.lastDiff,
            a = this.diff(r);
        n && (r.optimistic && typeof n.optimistic == "string" && (a.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, a, i) === !1) || (!i || !M(i.result, a.result)) && r.callback(r.lastDiff = a, i)
    }, e
}(Wa);
globalThis.__DEV__ !== !1 && (ro.prototype.getMemoryInternals = $s);
var x;
(function(t) {
    t[t.loading = 1] = "loading", t[t.setVariables = 2] = "setVariables", t[t.fetchMore = 3] = "fetchMore", t[t.refetch = 4] = "refetch", t[t.poll = 6] = "poll", t[t.ready = 7] = "ready", t[t.error = 8] = "error"
})(x || (x = {}));

function Ue(t) {
    return t ? t < 7 : !1
}
var Ri = Object.assign,
    Zc = Object.hasOwnProperty,
    bt = function(t) {
        ue(e, t);

        function e(r) {
            var n = r.queryManager,
                i = r.queryInfo,
                a = r.options,
                o = this,
                s = e.inactiveOnCreation.getValue();
            o = t.call(this, function(p) {
                s && (n.queries.set(o.queryId, i), s = !1);
                try {
                    var b = p._subscription._observer;
                    b && !b.error && (b.error = Hc)
                } catch {}
                var k = !o.observers.size;
                o.observers.add(p);
                var w = o.last;
                return w && w.error ? p.error && p.error(w.error) : w && w.result && p.next && p.next(o.maskResult(w.result)), k && o.reobserve().catch(function() {}),
                    function() {
                        o.observers.delete(p) && !o.observers.size && o.tearDownQuery()
                    }
            }) || this, o.observers = new Set, o.subscriptions = new Set, o.dirty = !1, o.queryInfo = i, o.queryManager = n, o.waitForOwnResult = br(a.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
            var u = n.defaultOptions.watchQuery,
                c = u === void 0 ? {} : u,
                l = c.fetchPolicy,
                f = l === void 0 ? "cache-first" : l,
                d = a.fetchPolicy,
                h = d === void 0 ? f : d,
                v = a.initialFetchPolicy,
                y = v === void 0 ? h === "standby" ? f : h : v;
            o.options = g(g({}, a), {
                initialFetchPolicy: y,
                fetchPolicy: h
            }), o.queryId = i.queryId || n.generateQueryId();
            var m = Fe(o.query);
            return o.queryName = m && m.name && m.name.value, o
        }
        return Object.defineProperty(e.prototype, "query", {
            get: function() {
                return this.lastQuery || this.options.query
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "variables", {
            get: function() {
                return this.options.variables
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.result = function() {
            var r = this;
            return new Promise(function(n, i) {
                var a = {
                        next: function(s) {
                            n(s), r.observers.delete(a), r.observers.size || r.queryManager.removeQuery(r.queryId), setTimeout(function() {
                                o.unsubscribe()
                            }, 0)
                        },
                        error: i
                    },
                    o = r.subscribe(a)
            })
        }, e.prototype.resetDiff = function() {
            this.queryInfo.resetDiff()
        }, e.prototype.getCurrentFullResult = function(r) {
            r === void 0 && (r = !0);
            var n = this.getLastResult(!0),
                i = this.queryInfo.networkStatus || n && n.networkStatus || x.ready,
                a = g(g({}, n), {
                    loading: Ue(i),
                    networkStatus: i
                }),
                o = this.options.fetchPolicy,
                s = o === void 0 ? "cache-first" : o;
            if (!(br(s) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))
                if (this.waitForOwnResult) this.queryInfo.updateWatch();
                else {
                    var u = this.queryInfo.getDiff();
                    (u.complete || this.options.returnPartialData) && (a.data = u.result), M(a.data, {}) && (a.data = void 0), u.complete ? (delete a.partial, u.complete && a.networkStatus === x.loading && (s === "cache-first" || s === "cache-only") && (a.networkStatus = x.ready, a.loading = !1)) : a.partial = !0, a.networkStatus === x.ready && (a.error || a.errors) && (a.networkStatus = x.error), globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !a.loading && !a.data && !a.error && no(u.missing)
                } return r && this.updateLastResult(a), a
        }, e.prototype.getCurrentResult = function(r) {
            return r === void 0 && (r = !0), this.maskResult(this.getCurrentFullResult(r))
        }, e.prototype.isDifferentFromLastResult = function(r, n) {
            if (!this.last) return !0;
            var i = this.queryManager.getDocumentInfo(this.query),
                a = this.queryManager.dataMasking,
                o = a ? i.nonReactiveQuery : this.query,
                s = a || i.hasNonreactiveDirective ? !ja(o, this.last.result, r, this.variables) : !M(this.last.result, r);
            return s || n && !M(this.last.variables, n)
        }, e.prototype.getLast = function(r, n) {
            var i = this.last;
            if (i && i[r] && (!n || M(i.variables, this.variables))) return i[r]
        }, e.prototype.getLastResult = function(r) {
            return this.getLast("result", r)
        }, e.prototype.getLastError = function(r) {
            return this.getLast("error", r)
        }, e.prototype.resetLastResults = function() {
            delete this.last, this.isTornDown = !1
        }, e.prototype.resetQueryStoreErrors = function() {
            this.queryManager.resetErrors(this.queryId)
        }, e.prototype.refetch = function(r) {
            var n, i = {
                    pollInterval: 0
                },
                a = this.options.fetchPolicy;
            if (a === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && Zc.call(r, "variables")) {
                var o = la(this.query),
                    s = o.variableDefinitions;
                (!s || !s.some(function(u) {
                    return u.variable.name.value === "variables"
                })) && globalThis.__DEV__ !== !1 && O.warn(21, r, ((n = o.name) === null || n === void 0 ? void 0 : n.value) || o)
            }
            return r && !M(this.options.variables, r) && (i.variables = this.options.variables = g(g({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, x.refetch)
        }, e.prototype.fetchMore = function(r) {
            var n = this,
                i = g(g({}, r.query ? r : g(g(g(g({}, this.options), {
                    query: this.options.query
                }), r), {
                    variables: g(g({}, this.options.variables), r.variables)
                })), {
                    fetchPolicy: "no-cache"
                });
            i.query = this.transformDocument(i.query);
            var a = this.queryManager.generateQueryId();
            this.lastQuery = r.query ? this.transformDocument(this.options.query) : i.query;
            var o = this.queryInfo,
                s = o.networkStatus;
            o.networkStatus = x.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
            var u = new Set,
                c = r?.updateQuery,
                l = this.options.fetchPolicy !== "no-cache";
            return l || O(c, 22), this.queryManager.fetchQuery(a, i, x.fetchMore).then(function(f) {
                if (n.queryManager.removeQuery(a), o.networkStatus === x.fetchMore && (o.networkStatus = s), l) n.queryManager.cache.batch({
                    update: function(v) {
                        var y = r.updateQuery;
                        y ? v.updateQuery({
                            query: n.query,
                            variables: n.variables,
                            returnPartialData: !0,
                            optimistic: !1
                        }, function(m) {
                            return y(m, {
                                fetchMoreResult: f.data,
                                variables: i.variables
                            })
                        }) : v.writeQuery({
                            query: i.query,
                            variables: i.variables,
                            data: f.data
                        })
                    },
                    onWatchUpdated: function(v) {
                        u.add(v.query)
                    }
                });
                else {
                    var d = n.getLast("result"),
                        h = c(d.data, {
                            fetchMoreResult: f.data,
                            variables: i.variables
                        });
                    n.reportResult(g(g({}, d), {
                        networkStatus: s,
                        loading: Ue(s),
                        data: h
                    }), n.variables)
                }
                return n.maskResult(f)
            }).finally(function() {
                l && !u.has(n.query) && n.reobserveCacheFirst()
            })
        }, e.prototype.subscribeToMore = function(r) {
            var n = this,
                i = this.queryManager.startGraphQLSubscription({
                    query: r.document,
                    variables: r.variables,
                    context: r.context
                }).subscribe({
                    next: function(a) {
                        var o = r.updateQuery;
                        o && n.updateQuery(function(s, u) {
                            return o(s, g({
                                subscriptionData: a
                            }, u))
                        })
                    },
                    error: function(a) {
                        if (r.onError) {
                            r.onError(a);
                            return
                        }
                        globalThis.__DEV__ !== !1 && O.error(23, a)
                    }
                });
            return this.subscriptions.add(i),
                function() {
                    n.subscriptions.delete(i) && i.unsubscribe()
                }
        }, e.prototype.setOptions = function(r) {
            return this.reobserve(r)
        }, e.prototype.silentSetOptions = function(r) {
            var n = Pe(this.options, r || {});
            Ri(this.options, n)
        }, e.prototype.setVariables = function(r) {
            return M(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
                fetchPolicy: this.options.initialFetchPolicy,
                variables: r
            }, x.setVariables) : Promise.resolve())
        }, e.prototype.updateQuery = function(r) {
            var n = this.queryManager,
                i = n.cache.diff({
                    query: this.options.query,
                    variables: this.variables,
                    returnPartialData: !0,
                    optimistic: !1
                }),
                a = i.result,
                o = i.complete,
                s = r(a, {
                    variables: this.variables,
                    complete: !!o,
                    previousData: a
                });
            s && (n.cache.writeQuery({
                query: this.options.query,
                data: s,
                variables: this.variables
            }), n.broadcastQueries())
        }, e.prototype.startPolling = function(r) {
            this.options.pollInterval = r, this.updatePolling()
        }, e.prototype.stopPolling = function() {
            this.options.pollInterval = 0, this.updatePolling()
        }, e.prototype.applyNextFetchPolicy = function(r, n) {
            if (n.nextFetchPolicy) {
                var i = n.fetchPolicy,
                    a = i === void 0 ? "cache-first" : i,
                    o = n.initialFetchPolicy,
                    s = o === void 0 ? a : o;
                a === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(a, {
                    reason: r,
                    options: n,
                    observable: this,
                    initialFetchPolicy: s
                }) : r === "variables-changed" ? n.fetchPolicy = s : n.fetchPolicy = n.nextFetchPolicy)
            }
            return n.fetchPolicy
        }, e.prototype.fetch = function(r, n, i) {
            var a = this.queryManager.getOrCreateQuery(this.queryId);
            return a.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(a, r, n, i)
        }, e.prototype.updatePolling = function() {
            var r = this;
            if (!this.queryManager.ssrMode) {
                var n = this,
                    i = n.pollingInfo,
                    a = n.options.pollInterval;
                if (!a || !this.hasObservers()) {
                    i && (clearTimeout(i.timeout), delete this.pollingInfo);
                    return
                }
                if (!(i && i.interval === a)) {
                    O(a, 24);
                    var o = i || (this.pollingInfo = {});
                    o.interval = a;
                    var s = function() {
                            var c, l;
                            r.pollingInfo && (!Ue(r.queryInfo.networkStatus) && !(!((l = (c = r.options).skipPollAttempt) === null || l === void 0) && l.call(c)) ? r.reobserve({
                                fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
                            }, x.poll).then(u, u) : u())
                        },
                        u = function() {
                            var c = r.pollingInfo;
                            c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval))
                        };
                    u()
                }
            }
        }, e.prototype.updateLastResult = function(r, n) {
            n === void 0 && (n = this.variables);
            var i = this.getLastError();
            return i && this.last && !M(n, this.last.variables) && (i = void 0), this.last = g({
                result: this.queryManager.assumeImmutableResults ? r : Ca(r),
                variables: n
            }, i ? {
                error: i
            } : null)
        }, e.prototype.reobserveAsConcast = function(r, n) {
            var i = this;
            this.isTornDown = !1;
            var a = n === x.refetch || n === x.fetchMore || n === x.poll,
                o = this.options.variables,
                s = this.options.fetchPolicy,
                u = Pe(this.options, r || {}),
                c = a ? u : Ri(this.options, u),
                l = this.transformDocument(c.query);
            this.lastQuery = l, a || (this.updatePolling(), r && r.variables && !M(r.variables, o) && c.fetchPolicy !== "standby" && (c.fetchPolicy === s || typeof c.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", c), n === void 0 && (n = x.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = br(c.fetchPolicy));
            var f = function() {
                    i.concast === v && (i.waitForOwnResult = !1)
                },
                d = c.variables && g({}, c.variables),
                h = this.fetch(c, n, l),
                v = h.concast,
                y = h.fromLink,
                m = {
                    next: function(p) {
                        M(i.variables, d) && (f(), i.reportResult(p, d))
                    },
                    error: function(p) {
                        M(i.variables, d) && (Pa(p) || (p = new ie({
                            networkError: p
                        })), f(), i.reportError(p, d))
                    }
                };
            return !a && (y || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = v, this.observer = m), v.addObserver(m), v
        }, e.prototype.reobserve = function(r, n) {
            return Lu(this.reobserveAsConcast(r, n).promise.then(this.maskResult))
        }, e.prototype.resubscribeAfterError = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            var i = this.last;
            this.resetLastResults();
            var a = this.subscribe.apply(this, r);
            return this.last = i, a
        }, e.prototype.observe = function() {
            this.reportResult(this.getCurrentFullResult(!1), this.variables)
        }, e.prototype.reportResult = function(r, n) {
            var i = this.getLastError(),
                a = this.isDifferentFromLastResult(r, n);
            (i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (i || a) && mt(this.observers, "next", this.maskResult(r))
        }, e.prototype.reportError = function(r, n) {
            var i = g(g({}, this.getLastResult()), {
                error: r,
                errors: r.graphQLErrors,
                networkStatus: x.error,
                loading: !1
            });
            this.updateLastResult(i, n), mt(this.observers, "error", this.last.error = r)
        }, e.prototype.hasObservers = function() {
            return this.observers.size > 0
        }, e.prototype.tearDownQuery = function() {
            this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
                return r.unsubscribe()
            }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0)
        }, e.prototype.transformDocument = function(r) {
            return this.queryManager.transform(r)
        }, e.prototype.maskResult = function(r) {
            return r && "data" in r ? g(g({}, r), {
                data: this.queryManager.maskOperation({
                    document: this.query,
                    data: r.data,
                    fetchPolicy: this.options.fetchPolicy,
                    id: this.queryId
                })
            }) : r
        }, e.prototype.resetNotifications = function() {
            this.cancelNotifyTimeout(), this.dirty = !1
        }, e.prototype.cancelNotifyTimeout = function() {
            this.notifyTimeout && (clearTimeout(this.notifyTimeout), this.notifyTimeout = void 0)
        }, e.prototype.scheduleNotify = function() {
            var r = this;
            this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
                return r.notify()
            }, 0)))
        }, e.prototype.notify = function() {
            if (this.cancelNotifyTimeout(), this.dirty && (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !Ue(this.queryInfo.networkStatus))) {
                var r = this.queryInfo.getDiff();
                r.fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst()
            }
            this.dirty = !1
        }, e.prototype.reobserveCacheFirst = function() {
            var r = this.options,
                n = r.fetchPolicy,
                i = r.nextFetchPolicy;
            return n === "cache-and-network" || n === "network-only" ? this.reobserve({
                fetchPolicy: "cache-first",
                nextFetchPolicy: function(a, o) {
                    return this.nextFetchPolicy = i, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(a, o) : n
                }
            }) : this.reobserve()
        }, e.inactiveOnCreation = new It, e
    }(j);
xa(bt);

function Hc(t) {
    globalThis.__DEV__ !== !1 && O.error(25, t.message, t.stack)
}

function no(t) {
    globalThis.__DEV__ !== !1 && t && globalThis.__DEV__ !== !1 && O.debug(26, t)
}

function br(t) {
    return t === "network-only" || t === "no-cache" || t === "standby"
}
var Be = new(Me ? WeakMap : Map);

function kr(t, e) {
    var r = t[e];
    typeof r == "function" && (t[e] = function() {
        return Be.set(t, (Be.get(t) + 1) % 1e15), r.apply(this, arguments)
    })
}
var wr = function() {
    function t(e, r) {
        r === void 0 && (r = e.generateQueryId()), this.queryId = r, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
        var n = this.cache = e.cache;
        Be.has(n) || (Be.set(n, 0), kr(n, "evict"), kr(n, "modify"), kr(n, "reset"))
    }
    return t.prototype.init = function(e) {
        var r = e.networkStatus || x.loading;
        return this.variables && this.networkStatus !== x.loading && !M(this.variables, e.variables) && (r = x.setVariables), M(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: r
        }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this
    }, t.prototype.resetDiff = function() {
        this.lastDiff = void 0
    }, t.prototype.getDiff = function() {
        var e = this.getDiffOptions();
        if (this.lastDiff && M(e, this.lastDiff.options)) return this.lastDiff.diff;
        this.updateWatch(this.variables);
        var r = this.observableQuery;
        if (r && r.options.fetchPolicy === "no-cache") return {
            complete: !1
        };
        var n = this.cache.diff(e);
        return this.updateLastDiff(n, e), n
    }, t.prototype.updateLastDiff = function(e, r) {
        this.lastDiff = e ? {
            diff: e,
            options: r || this.getDiffOptions()
        } : void 0
    }, t.prototype.getDiffOptions = function(e) {
        var r;
        return e === void 0 && (e = this.variables), {
            query: this.document,
            variables: e,
            returnPartialData: !0,
            optimistic: !0,
            canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
        }
    }, t.prototype.setDiff = function(e) {
        var r, n, i = this.lastDiff && this.lastDiff.diff;
        e && !e.complete && (!((r = this.observableQuery) === null || r === void 0) && r.getLastError()) || (this.updateLastDiff(e), M(i && i.result, e && e.result) || (n = this.observableQuery) === null || n === void 0 || n.scheduleNotify())
    }, t.prototype.setObservableQuery = function(e) {
        e !== this.observableQuery && (this.observableQuery = e, e && (e.queryInfo = this))
    }, t.prototype.stop = function() {
        var e;
        if (!this.stopped) {
            this.stopped = !0, (e = this.observableQuery) === null || e === void 0 || e.resetNotifications(), this.cancel();
            var r = this.observableQuery;
            r && r.stopPolling()
        }
    }, t.prototype.cancel = function() {
        var e;
        (e = this.cancelWatch) === null || e === void 0 || e.call(this), this.cancelWatch = void 0
    }, t.prototype.updateWatch = function(e) {
        var r = this;
        e === void 0 && (e = this.variables);
        var n = this.observableQuery;
        if (!(n && n.options.fetchPolicy === "no-cache")) {
            var i = g(g({}, this.getDiffOptions(e)), {
                watcher: this,
                callback: function(a) {
                    return r.setDiff(a)
                }
            });
            (!this.lastWatch || !M(i, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i))
        }
    }, t.prototype.resetLastWrite = function() {
        this.lastWrite = void 0
    }, t.prototype.shouldWrite = function(e, r) {
        var n = this.lastWrite;
        return !(n && n.dmCount === Be.get(this.cache) && M(r, n.variables) && M(e.data, n.result.data))
    }, t.prototype.markResult = function(e, r, n, i) {
        var a = this,
            o, s = new _e,
            u = Y(e.errors) ? e.errors.slice(0) : [];
        if ((o = this.observableQuery) === null || o === void 0 || o.resetNotifications(), "incremental" in e && Y(e.incremental)) {
            var c = Ra(this.getDiff().result, e);
            e.data = c
        } else if ("hasNext" in e && e.hasNext) {
            var l = this.getDiff();
            e.data = s.merge(l.result, e.data)
        }
        this.graphQLErrors = u, n.fetchPolicy === "no-cache" ? this.updateLastDiff({
            result: e.data,
            complete: !0
        }, this.getDiffOptions(n.variables)) : i !== 0 && (Gr(e, n.errorPolicy) ? this.cache.performTransaction(function(f) {
            if (a.shouldWrite(e, n.variables)) f.writeQuery({
                query: r,
                data: e.data,
                variables: n.variables,
                overwrite: i === 1
            }), a.lastWrite = {
                result: e,
                variables: n.variables,
                dmCount: Be.get(a.cache)
            };
            else if (a.lastDiff && a.lastDiff.diff.complete) {
                e.data = a.lastDiff.diff.result;
                return
            }
            var d = a.getDiffOptions(n.variables),
                h = f.diff(d);
            !a.stopped && M(a.variables, n.variables) && a.updateWatch(n.variables), a.updateLastDiff(h, d), h.complete && (e.data = h.result)
        }) : this.lastWrite = void 0)
    }, t.prototype.markReady = function() {
        return this.networkError = null, this.networkStatus = x.ready
    }, t.prototype.markError = function(e) {
        var r;
        return this.networkStatus = x.error, this.lastWrite = void 0, (r = this.observableQuery) === null || r === void 0 || r.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
    }, t
}();

function Gr(t, e) {
    e === void 0 && (e = "none");
    var r = e === "ignore" || e === "all",
        n = !qt(t);
    return !n && r && t.data && (n = !0), n
}
var Jc = Object.prototype.hasOwnProperty,
    Fi = Object.create(null),
    Kc = function() {
        function t(e) {
            var r = this;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new un(se["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new fe(!1), this.noCacheWarningsByQueryId = new Set;
            var n = new Sa(function(a) {
                return r.cache.transformDocument(a)
            }, {
                cache: !1
            });
            this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking;
            var i = e.documentTransform;
            this.documentTransform = i ? n.concat(i).concat(n) : n, this.defaultContext = e.defaultContext || Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = Object.create(null))
        }
        return t.prototype.stop = function() {
            var e = this;
            this.queries.forEach(function(r, n) {
                e.stopQueryNoBroadcast(n)
            }), this.cancelPendingFetches(J(27))
        }, t.prototype.cancelPendingFetches = function(e) {
            this.fetchCancelFns.forEach(function(r) {
                return r(e)
            }), this.fetchCancelFns.clear()
        }, t.prototype.mutate = function(e) {
            return ve(this, arguments, void 0, function(r) {
                var n, i, a, o, s, u, c, l = r.mutation,
                    f = r.variables,
                    d = r.optimisticResponse,
                    h = r.updateQueries,
                    v = r.refetchQueries,
                    y = v === void 0 ? [] : v,
                    m = r.awaitRefetchQueries,
                    p = m === void 0 ? !1 : m,
                    b = r.update,
                    k = r.onQueryUpdated,
                    w = r.fetchPolicy,
                    _ = w === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.fetchPolicy) || "network-only" : w,
                    S = r.errorPolicy,
                    I = S === void 0 ? ((c = this.defaultOptions.mutate) === null || c === void 0 ? void 0 : c.errorPolicy) || "none" : S,
                    T = r.keepRootFields,
                    N = r.context;
                return me(this, function(P) {
                    switch (P.label) {
                        case 0:
                            return O(l, 28), O(_ === "network-only" || _ === "no-cache", 29), n = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), i = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), i ? [4, this.localState.addExportedVariables(l, f, N)] : [3, 2];
                        case 1:
                            f = P.sent(), P.label = 2;
                        case 2:
                            return a = this.mutationStore && (this.mutationStore[n] = {
                                mutation: l,
                                variables: f,
                                loading: !0,
                                error: null
                            }), o = d && this.markMutationOptimistic(d, {
                                mutationId: n,
                                document: l,
                                variables: f,
                                fetchPolicy: _,
                                errorPolicy: I,
                                context: N,
                                updateQueries: h,
                                update: b,
                                keepRootFields: T
                            }), this.broadcastQueries(), s = this, [2, new Promise(function(W, R) {
                                return pr(s.getObservableFromLink(l, g(g({}, N), {
                                    optimisticResponse: o ? d : void 0
                                }), f, {}, !1), function(L) {
                                    if (qt(L) && I === "none") throw new ie({
                                        graphQLErrors: Vr(L)
                                    });
                                    a && (a.loading = !1, a.error = null);
                                    var H = g({}, L);
                                    return typeof y == "function" && (y = y(H)), I === "ignore" && qt(H) && delete H.errors, s.markMutationResult({
                                        mutationId: n,
                                        result: H,
                                        document: l,
                                        variables: f,
                                        fetchPolicy: _,
                                        errorPolicy: I,
                                        context: N,
                                        update: b,
                                        updateQueries: h,
                                        awaitRefetchQueries: p,
                                        refetchQueries: y,
                                        removeOptimistic: o ? n : void 0,
                                        onQueryUpdated: k,
                                        keepRootFields: T
                                    })
                                }).subscribe({
                                    next: function(L) {
                                        s.broadcastQueries(), (!("hasNext" in L) || L.hasNext === !1) && W(g(g({}, L), {
                                            data: s.maskOperation({
                                                document: l,
                                                data: L.data,
                                                fetchPolicy: _,
                                                id: n
                                            })
                                        }))
                                    },
                                    error: function(L) {
                                        a && (a.loading = !1, a.error = L), o && s.cache.removeOptimistic(n), s.broadcastQueries(), R(L instanceof ie ? L : new ie({
                                            networkError: L
                                        }))
                                    }
                                })
                            })]
                    }
                })
            })
        }, t.prototype.markMutationResult = function(e, r) {
            var n = this;
            r === void 0 && (r = this.cache);
            var i = e.result,
                a = [],
                o = e.fetchPolicy === "no-cache";
            if (!o && Gr(i, e.errorPolicy)) {
                if ($e(i) || a.push({
                        result: i.data,
                        dataId: "ROOT_MUTATION",
                        query: e.document,
                        variables: e.variables
                    }), $e(i) && Y(i.incremental)) {
                    var s = r.diff({
                            id: "ROOT_MUTATION",
                            query: this.getDocumentInfo(e.document).asQuery,
                            variables: e.variables,
                            optimistic: !1,
                            returnPartialData: !0
                        }),
                        u = void 0;
                    s.result && (u = Ra(s.result, i)), typeof u < "u" && (i.data = u, a.push({
                        result: u,
                        dataId: "ROOT_MUTATION",
                        query: e.document,
                        variables: e.variables
                    }))
                }
                var c = e.updateQueries;
                c && this.queries.forEach(function(f, d) {
                    var h = f.observableQuery,
                        v = h && h.queryName;
                    if (!(!v || !Jc.call(c, v))) {
                        var y = c[v],
                            m = n.queries.get(d),
                            p = m.document,
                            b = m.variables,
                            k = r.diff({
                                query: p,
                                variables: b,
                                returnPartialData: !0,
                                optimistic: !1
                            }),
                            w = k.result,
                            _ = k.complete;
                        if (_ && w) {
                            var S = y(w, {
                                mutationResult: i,
                                queryName: p && dt(p) || void 0,
                                queryVariables: b
                            });
                            S && a.push({
                                result: S,
                                dataId: "ROOT_QUERY",
                                query: p,
                                variables: b
                            })
                        }
                    }
                })
            }
            if (a.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
                var l = [];
                if (this.refetchQueries({
                        updateCache: function(f) {
                            o || a.forEach(function(y) {
                                return f.write(y)
                            });
                            var d = e.update,
                                h = !Bu(i) || $e(i) && !i.hasNext;
                            if (d) {
                                if (!o) {
                                    var v = f.diff({
                                        id: "ROOT_MUTATION",
                                        query: n.getDocumentInfo(e.document).asQuery,
                                        variables: e.variables,
                                        optimistic: !1,
                                        returnPartialData: !0
                                    });
                                    v.complete && (i = g(g({}, i), {
                                        data: v.result
                                    }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext)
                                }
                                h && d(f, i, {
                                    context: e.context,
                                    variables: e.variables
                                })
                            }!o && !e.keepRootFields && h && f.modify({
                                id: "ROOT_MUTATION",
                                fields: function(y, m) {
                                    var p = m.fieldName,
                                        b = m.DELETE;
                                    return p === "__typename" ? y : b
                                }
                            })
                        },
                        include: e.refetchQueries,
                        optimistic: !1,
                        removeOptimistic: e.removeOptimistic,
                        onQueryUpdated: e.onQueryUpdated || null
                    }).forEach(function(f) {
                        return l.push(f)
                    }), e.awaitRefetchQueries || e.onQueryUpdated) return Promise.all(l).then(function() {
                    return i
                })
            }
            return Promise.resolve(i)
        }, t.prototype.markMutationOptimistic = function(e, r) {
            var n = this,
                i = typeof e == "function" ? e(r.variables, {
                    IGNORE: Fi
                }) : e;
            return i === Fi ? !1 : (this.cache.recordOptimisticTransaction(function(a) {
                try {
                    n.markMutationResult(g(g({}, r), {
                        result: {
                            data: i
                        }
                    }), a)
                } catch (o) {
                    globalThis.__DEV__ !== !1 && O.error(o)
                }
            }, r.mutationId), !0)
        }, t.prototype.fetchQuery = function(e, r, n) {
            return this.fetchConcastWithInfo(this.getOrCreateQuery(e), r, n).concast.promise
        }, t.prototype.getQueryStore = function() {
            var e = Object.create(null);
            return this.queries.forEach(function(r, n) {
                e[n] = {
                    variables: r.variables,
                    networkStatus: r.networkStatus,
                    networkError: r.networkError,
                    graphQLErrors: r.graphQLErrors
                }
            }), e
        }, t.prototype.resetErrors = function(e) {
            var r = this.queries.get(e);
            r && (r.networkError = void 0, r.graphQLErrors = [])
        }, t.prototype.transform = function(e) {
            return this.documentTransform.transformDocument(e)
        }, t.prototype.getDocumentInfo = function(e) {
            var r = this.transformCache;
            if (!r.has(e)) {
                var n = {
                    hasClientExports: Es(e),
                    hasForcedResolvers: this.localState.shouldForceResolvers(e),
                    hasNonreactiveDirective: wt(["nonreactive"], e),
                    nonReactiveQuery: Du(e),
                    clientQuery: this.localState.clientQuery(e),
                    serverQuery: Ta([{
                        name: "client",
                        remove: !0
                    }, {
                        name: "connection"
                    }, {
                        name: "nonreactive"
                    }, {
                        name: "unmask"
                    }], e),
                    defaultVars: ln(Fe(e)),
                    asQuery: g(g({}, e), {
                        definitions: e.definitions.map(function(i) {
                            return i.kind === "OperationDefinition" && i.operation !== "query" ? g(g({}, i), {
                                operation: "query"
                            }) : i
                        })
                    })
                };
                r.set(e, n)
            }
            return r.get(e)
        }, t.prototype.getVariables = function(e, r) {
            return g(g({}, this.getDocumentInfo(e).defaultVars), r)
        }, t.prototype.watchQuery = function(e) {
            var r = this.transform(e.query);
            e = g(g({}, e), {
                variables: this.getVariables(r, e.variables)
            }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
            var n = new wr(this),
                i = new bt({
                    queryManager: this,
                    queryInfo: n,
                    options: e
                });
            return i.lastQuery = r, bt.inactiveOnCreation.getValue() || this.queries.set(i.queryId, n), n.init({
                document: r,
                observableQuery: i,
                variables: i.variables
            }), i
        }, t.prototype.query = function(e, r) {
            var n = this;
            r === void 0 && (r = this.generateQueryId()), O(e.query, 30), O(e.query.kind === "Document", 31), O(!e.returnPartialData, 32), O(!e.pollInterval, 33);
            var i = this.transform(e.query);
            return this.fetchQuery(r, g(g({}, e), {
                query: i
            })).then(function(a) {
                return a && g(g({}, a), {
                    data: n.maskOperation({
                        document: i,
                        data: a.data,
                        fetchPolicy: e.fetchPolicy,
                        id: r
                    })
                })
            }).finally(function() {
                return n.stopQuery(r)
            })
        }, t.prototype.generateQueryId = function() {
            return String(this.queryIdCounter++)
        }, t.prototype.generateRequestId = function() {
            return this.requestIdCounter++
        }, t.prototype.generateMutationId = function() {
            return String(this.mutationIdCounter++)
        }, t.prototype.stopQueryInStore = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries()
        }, t.prototype.stopQueryInStoreNoBroadcast = function(e) {
            var r = this.queries.get(e);
            r && r.stop()
        }, t.prototype.clearStore = function(e) {
            return e === void 0 && (e = {
                discardWatches: !0
            }), this.cancelPendingFetches(J(34)), this.queries.forEach(function(r) {
                r.observableQuery ? r.networkStatus = x.loading : r.stop()
            }), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e)
        }, t.prototype.getObservableQueries = function(e) {
            var r = this;
            e === void 0 && (e = "active");
            var n = new Map,
                i = new Map,
                a = new Map,
                o = new Set;
            return Array.isArray(e) && e.forEach(function(s) {
                if (typeof s == "string") i.set(s, s), a.set(s, !1);
                else if (tu(s)) {
                    var u = Ce(r.transform(s));
                    i.set(u, dt(s)), a.set(u, !1)
                } else z(s) && s.query && o.add(s)
            }), this.queries.forEach(function(s, u) {
                var c = s.observableQuery,
                    l = s.document;
                if (c) {
                    if (e === "all") {
                        n.set(u, c);
                        return
                    }
                    var f = c.queryName,
                        d = c.options.fetchPolicy;
                    if (d === "standby" || e === "active" && !c.hasObservers()) return;
                    (e === "active" || f && a.has(f) || l && a.has(Ce(l))) && (n.set(u, c), f && a.set(f, !0), l && a.set(Ce(l), !0))
                }
            }), o.size && o.forEach(function(s) {
                var u = Nr("legacyOneTimeQuery"),
                    c = r.getOrCreateQuery(u).init({
                        document: s.query,
                        variables: s.variables
                    }),
                    l = new bt({
                        queryManager: r,
                        queryInfo: c,
                        options: g(g({}, s), {
                            fetchPolicy: "network-only"
                        })
                    });
                O(l.queryId === u), c.setObservableQuery(l), n.set(u, l)
            }), globalThis.__DEV__ !== !1 && a.size && a.forEach(function(s, u) {
                if (!s) {
                    var c = i.get(u);
                    c ? globalThis.__DEV__ !== !1 && O.warn(35, c) : globalThis.__DEV__ !== !1 && O.warn(36)
                }
            }), n
        }, t.prototype.reFetchObservableQueries = function(e) {
            var r = this;
            e === void 0 && (e = !1);
            var n = [];
            return this.getObservableQueries(e ? "all" : "active").forEach(function(i, a) {
                var o = i.options.fetchPolicy;
                i.resetLastResults(), (e || o !== "standby" && o !== "cache-only") && n.push(i.refetch()), (r.queries.get(a) || i.queryInfo).setDiff(null)
            }), this.broadcastQueries(), Promise.all(n)
        }, t.prototype.startGraphQLSubscription = function(e) {
            var r = this,
                n = e.query,
                i = e.variables,
                a = e.fetchPolicy,
                o = e.errorPolicy,
                s = o === void 0 ? "none" : o,
                u = e.context,
                c = u === void 0 ? {} : u,
                l = e.extensions,
                f = l === void 0 ? {} : l;
            n = this.transform(n), i = this.getVariables(n, i);
            var d = function(v) {
                return r.getObservableFromLink(n, c, v, f).map(function(y) {
                    a !== "no-cache" && (Gr(y, s) && r.cache.write({
                        query: n,
                        result: y.data,
                        dataId: "ROOT_SUBSCRIPTION",
                        variables: v
                    }), r.broadcastQueries());
                    var m = qt(y),
                        p = sc(y);
                    if (m || p) {
                        var b = {};
                        if (m && (b.graphQLErrors = y.errors), p && (b.protocolErrors = y.extensions[bn]), s === "none" || p) throw new ie(b)
                    }
                    return s === "ignore" && delete y.errors, y
                })
            };
            if (this.getDocumentInfo(n).hasClientExports) {
                var h = this.localState.addExportedVariables(n, i, c).then(d);
                return new j(function(v) {
                    var y = null;
                    return h.then(function(m) {
                            return y = m.subscribe(v)
                        }, v.error),
                        function() {
                            return y && y.unsubscribe()
                        }
                })
            }
            return d(i)
        }, t.prototype.stopQuery = function(e) {
            this.stopQueryNoBroadcast(e), this.broadcastQueries()
        }, t.prototype.stopQueryNoBroadcast = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e)
        }, t.prototype.removeQuery = function(e) {
            var r;
            this.fetchCancelFns.delete(e), this.queries.has(e) && ((r = this.queries.get(e)) === null || r === void 0 || r.stop(), this.queries.delete(e))
        }, t.prototype.broadcastQueries = function() {
            this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
                var r;
                return (r = e.observableQuery) === null || r === void 0 ? void 0 : r.notify()
            })
        }, t.prototype.getLocalState = function() {
            return this.localState
        }, t.prototype.getObservableFromLink = function(e, r, n, i, a) {
            var o = this,
                s;
            a === void 0 && (a = (s = r?.queryDeduplication) !== null && s !== void 0 ? s : this.queryDeduplication);
            var u, c = this.getDocumentInfo(e),
                l = c.serverQuery,
                f = c.clientQuery;
            if (l) {
                var d = this,
                    h = d.inFlightLinkObservables,
                    v = d.link,
                    y = {
                        query: l,
                        variables: n,
                        operationName: dt(l) || void 0,
                        context: this.prepareContext(g(g({}, r), {
                            forceFetch: !a
                        })),
                        extensions: i
                    };
                if (r = y.context, a) {
                    var m = Ce(l),
                        p = be(n),
                        b = h.lookup(m, p);
                    if (u = b.observable, !u) {
                        var k = new ze([qr(v, y)]);
                        u = b.observable = k, k.beforeNext(function w(_, S) {
                            _ === "next" && "hasNext" in S && S.hasNext ? k.beforeNext(w) : h.remove(m, p)
                        })
                    }
                } else u = new ze([qr(v, y)])
            } else u = new ze([j.of({
                data: {}
            })]), r = this.prepareContext(r);
            return f && (u = pr(u, function(w) {
                return o.localState.runResolvers({
                    document: f,
                    remoteResult: w,
                    context: r,
                    variables: n
                })
            })), u
        }, t.prototype.getResultsFromLink = function(e, r, n) {
            var i = e.lastRequestId = this.generateRequestId(),
                a = this.cache.transformForLink(n.query);
            return pr(this.getObservableFromLink(a, n.context, n.variables), function(o) {
                var s = Vr(o),
                    u = s.length > 0,
                    c = n.errorPolicy;
                if (i >= e.lastRequestId) {
                    if (u && c === "none") throw e.markError(new ie({
                        graphQLErrors: s
                    }));
                    e.markResult(o, a, n, r), e.markReady()
                }
                var l = {
                    data: o.data,
                    loading: !1,
                    networkStatus: x.ready
                };
                return u && c === "none" && (l.data = void 0), u && c !== "ignore" && (l.errors = s, l.networkStatus = x.error), l
            }, function(o) {
                var s = Pa(o) ? o : new ie({
                    networkError: o
                });
                throw i >= e.lastRequestId && e.markError(s), s
            })
        }, t.prototype.fetchConcastWithInfo = function(e, r, n, i) {
            var a = this;
            n === void 0 && (n = x.loading), i === void 0 && (i = r.query);
            var o = this.getVariables(i, r.variables),
                s = this.defaultOptions.watchQuery,
                u = r.fetchPolicy,
                c = u === void 0 ? s && s.fetchPolicy || "cache-first" : u,
                l = r.errorPolicy,
                f = l === void 0 ? s && s.errorPolicy || "none" : l,
                d = r.returnPartialData,
                h = d === void 0 ? !1 : d,
                v = r.notifyOnNetworkStatusChange,
                y = v === void 0 ? !1 : v,
                m = r.context,
                p = m === void 0 ? {} : m,
                b = Object.assign({}, r, {
                    query: i,
                    variables: o,
                    fetchPolicy: c,
                    errorPolicy: f,
                    returnPartialData: h,
                    notifyOnNetworkStatusChange: y,
                    context: p
                }),
                k = function(T) {
                    b.variables = T;
                    var N = a.fetchQueryByPolicy(e, b, n);
                    return b.fetchPolicy !== "standby" && N.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", r), N
                },
                w = function() {
                    return a.fetchCancelFns.delete(e.queryId)
                };
            this.fetchCancelFns.set(e.queryId, function(T) {
                w(), setTimeout(function() {
                    return _.cancel(T)
                })
            });
            var _, S;
            if (this.getDocumentInfo(b.query).hasClientExports) _ = new ze(this.localState.addExportedVariables(b.query, b.variables, b.context).then(k).then(function(T) {
                return T.sources
            })), S = !0;
            else {
                var I = k(b.variables);
                S = I.fromLink, _ = new ze(I.sources)
            }
            return _.promise.then(w, w), {
                concast: _,
                fromLink: S
            }
        }, t.prototype.refetchQueries = function(e) {
            var r = this,
                n = e.updateCache,
                i = e.include,
                a = e.optimistic,
                o = a === void 0 ? !1 : a,
                s = e.removeOptimistic,
                u = s === void 0 ? o ? Nr("refetchQueries") : void 0 : s,
                c = e.onQueryUpdated,
                l = new Map;
            i && this.getObservableQueries(i).forEach(function(d, h) {
                l.set(h, {
                    oq: d,
                    lastDiff: (r.queries.get(h) || d.queryInfo).getDiff()
                })
            });
            var f = new Map;
            return n && this.cache.batch({
                update: n,
                optimistic: o && u || !1,
                removeOptimistic: u,
                onWatchUpdated: function(d, h, v) {
                    var y = d.watcher instanceof wr && d.watcher.observableQuery;
                    if (y) {
                        if (c) {
                            l.delete(y.queryId);
                            var m = c(y, h, v);
                            return m === !0 && (m = y.refetch()), m !== !1 && f.set(y, m), m
                        }
                        c !== null && l.set(y.queryId, {
                            oq: y,
                            lastDiff: v,
                            diff: h
                        })
                    }
                }
            }), l.size && l.forEach(function(d, h) {
                var v = d.oq,
                    y = d.lastDiff,
                    m = d.diff,
                    p;
                c && (m || (m = r.cache.diff(v.queryInfo.getDiffOptions())), p = c(v, m, y)), (!c || p === !0) && (p = v.refetch()), p !== !1 && f.set(v, p), h.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(h)
            }), u && this.cache.removeOptimistic(u), f
        }, t.prototype.maskOperation = function(e) {
            var r, n, i, a = e.document,
                o = e.data;
            if (globalThis.__DEV__ !== !1) {
                var s = e.fetchPolicy,
                    u = e.id,
                    c = (r = Fe(a)) === null || r === void 0 ? void 0 : r.operation,
                    l = ((n = c?.[0]) !== null && n !== void 0 ? n : "o") + u;
                this.dataMasking && s === "no-cache" && !js(a) && !this.noCacheWarningsByQueryId.has(l) && (this.noCacheWarningsByQueryId.add(l), globalThis.__DEV__ !== !1 && O.warn(37, (i = dt(a)) !== null && i !== void 0 ? i : "Unnamed ".concat(c ?? "operation")))
            }
            return this.dataMasking ? xc(o, a, this.cache) : o
        }, t.prototype.maskFragment = function(e) {
            var r = e.data,
                n = e.fragment,
                i = e.fragmentName;
            return this.dataMasking ? Qa(r, n, this.cache, i) : r
        }, t.prototype.fetchQueryByPolicy = function(e, r, n) {
            var i = this,
                a = r.query,
                o = r.variables,
                s = r.fetchPolicy,
                u = r.refetchWritePolicy,
                c = r.errorPolicy,
                l = r.returnPartialData,
                f = r.context,
                d = r.notifyOnNetworkStatusChange,
                h = e.networkStatus;
            e.init({
                document: a,
                variables: o,
                networkStatus: n
            });
            var v = function() {
                    return e.getDiff()
                },
                y = function(w, _) {
                    _ === void 0 && (_ = e.networkStatus || x.loading);
                    var S = w.result;
                    globalThis.__DEV__ !== !1 && !l && !M(S, {}) && no(w.missing);
                    var I = function(T) {
                        return j.of(g({
                            data: T,
                            loading: Ue(_),
                            networkStatus: _
                        }, w.complete ? null : {
                            partial: !0
                        }))
                    };
                    return S && i.getDocumentInfo(a).hasForcedResolvers ? i.localState.runResolvers({
                        document: a,
                        remoteResult: {
                            data: S
                        },
                        context: f,
                        variables: o,
                        onlyRunForcedResolvers: !0
                    }).then(function(T) {
                        return I(T.data || void 0)
                    }) : c === "none" && _ === x.refetch && Array.isArray(w.missing) ? I(void 0) : I(S)
                },
                m = s === "no-cache" ? 0 : n === x.refetch && u !== "merge" ? 1 : 2,
                p = function() {
                    return i.getResultsFromLink(e, m, {
                        query: a,
                        variables: o,
                        context: f,
                        fetchPolicy: s,
                        errorPolicy: c
                    })
                },
                b = d && typeof h == "number" && h !== n && Ue(n);
            switch (s) {
                default:
                case "cache-first": {
                    var k = v();
                    return k.complete ? {
                        fromLink: !1,
                        sources: [y(k, e.markReady())]
                    } : l || b ? {
                        fromLink: !0,
                        sources: [y(k), p()]
                    } : {
                        fromLink: !0,
                        sources: [p()]
                    }
                }
                case "cache-and-network": {
                    var k = v();
                    return k.complete || l || b ? {
                        fromLink: !0,
                        sources: [y(k), p()]
                    } : {
                        fromLink: !0,
                        sources: [p()]
                    }
                }
                case "cache-only":
                    return {
                        fromLink: !1, sources: [y(v(), e.markReady())]
                    };
                case "network-only":
                    return b ? {
                        fromLink: !0,
                        sources: [y(v()), p()]
                    } : {
                        fromLink: !0,
                        sources: [p()]
                    };
                case "no-cache":
                    return b ? {
                        fromLink: !0,
                        sources: [y(e.getDiff()), p()]
                    } : {
                        fromLink: !0,
                        sources: [p()]
                    };
                case "standby":
                    return {
                        fromLink: !1, sources: []
                    }
            }
        }, t.prototype.getOrCreateQuery = function(e) {
            return e && !this.queries.has(e) && this.queries.set(e, new wr(this, e)), this.queries.get(e)
        }, t.prototype.prepareContext = function(e) {
            e === void 0 && (e = {});
            var r = this.localState.prepareContext(e);
            return g(g(g({}, this.defaultContext), r), {
                clientAwareness: this.clientAwareness
            })
        }, t
    }(),
    Xc = function() {
        function t(e) {
            var r = e.cache,
                n = e.client,
                i = e.resolvers,
                a = e.fragmentMatcher;
            this.selectionsToResolveCache = new WeakMap, this.cache = r, n && (this.client = n), i && this.addResolvers(i), a && this.setFragmentMatcher(a)
        }
        return t.prototype.addResolvers = function(e) {
            var r = this;
            this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(n) {
                r.resolvers = ei(r.resolvers, n)
            }) : this.resolvers = ei(this.resolvers, e)
        }, t.prototype.setResolvers = function(e) {
            this.resolvers = {}, this.addResolvers(e)
        }, t.prototype.getResolvers = function() {
            return this.resolvers || {}
        }, t.prototype.runResolvers = function(e) {
            return ve(this, arguments, void 0, function(r) {
                var n = r.document,
                    i = r.remoteResult,
                    a = r.context,
                    o = r.variables,
                    s = r.onlyRunForcedResolvers,
                    u = s === void 0 ? !1 : s;
                return me(this, function(c) {
                    return n ? [2, this.resolveDocument(n, i.data, a, o, this.fragmentMatcher, u).then(function(l) {
                        return g(g({}, i), {
                            data: l.result
                        })
                    })] : [2, i]
                })
            })
        }, t.prototype.setFragmentMatcher = function(e) {
            this.fragmentMatcher = e
        }, t.prototype.getFragmentMatcher = function() {
            return this.fragmentMatcher
        }, t.prototype.clientQuery = function(e) {
            return wt(["client"], e) && this.resolvers ? e : null
        }, t.prototype.serverQuery = function(e) {
            return Ea(e)
        }, t.prototype.prepareContext = function(e) {
            var r = this.cache;
            return g(g({}, e), {
                cache: r,
                getCacheKey: function(n) {
                    return r.identify(n)
                }
            })
        }, t.prototype.addExportedVariables = function(e) {
            return ve(this, arguments, void 0, function(r, n, i) {
                return n === void 0 && (n = {}), i === void 0 && (i = {}), me(this, function(a) {
                    return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, n) || {}, this.prepareContext(i), n).then(function(o) {
                        return g(g({}, n), o.exportedVariables)
                    })] : [2, g({}, n)]
                })
            })
        }, t.prototype.shouldForceResolvers = function(e) {
            var r = !1;
            return re(e, {
                Directive: {
                    enter: function(n) {
                        if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
                                return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0
                            }), r)) return Ht
                    }
                }
            }), r
        }, t.prototype.buildRootValueFromCache = function(e, r) {
            return this.cache.diff({
                query: Nu(e),
                variables: r,
                returnPartialData: !0,
                optimistic: !1
            }).result
        }, t.prototype.resolveDocument = function(e, r) {
            return ve(this, arguments, void 0, function(n, i, a, o, s, u) {
                var c, l, f, d, h, v, y, m, p, b, k;
                return a === void 0 && (a = {}), o === void 0 && (o = {}), s === void 0 && (s = function() {
                    return !0
                }), u === void 0 && (u = !1), me(this, function(w) {
                    return c = Et(n), l = rt(n), f = et(l), d = this.collectSelectionsToResolve(c, f), h = c.operation, v = h ? h.charAt(0).toUpperCase() + h.slice(1) : "Query", y = this, m = y.cache, p = y.client, b = {
                        fragmentMap: f,
                        context: g(g({}, a), {
                            cache: m,
                            client: p
                        }),
                        variables: o,
                        fragmentMatcher: s,
                        defaultOperationType: v,
                        exportedVariables: {},
                        selectionsToResolve: d,
                        onlyRunForcedResolvers: u
                    }, k = !1, [2, this.resolveSelectionSet(c.selectionSet, k, i, b).then(function(_) {
                        return {
                            result: _,
                            exportedVariables: b.exportedVariables
                        }
                    })]
                })
            })
        }, t.prototype.resolveSelectionSet = function(e, r, n, i) {
            return ve(this, void 0, void 0, function() {
                var a, o, s, u, c, l = this;
                return me(this, function(f) {
                    return a = i.fragmentMap, o = i.context, s = i.variables, u = [n], c = function(d) {
                        return ve(l, void 0, void 0, function() {
                            var h, v;
                            return me(this, function(y) {
                                return !r && !i.selectionsToResolve.has(d) ? [2] : Tt(d, s) ? ke(d) ? [2, this.resolveField(d, r, n, i).then(function(m) {
                                    var p;
                                    typeof m < "u" && u.push((p = {}, p[le(d)] = m, p))
                                })] : (hu(d) ? h = d : (h = a[d.name.value], O(h, 19, d.name.value)), h && h.typeCondition && (v = h.typeCondition.name.value, i.fragmentMatcher(n, v, o)) ? [2, this.resolveSelectionSet(h.selectionSet, r, n, i).then(function(m) {
                                    u.push(m)
                                })] : [2]) : [2]
                            })
                        })
                    }, [2, Promise.all(e.selections.map(c)).then(function() {
                        return tr(u)
                    })]
                })
            })
        }, t.prototype.resolveField = function(e, r, n, i) {
            return ve(this, void 0, void 0, function() {
                var a, o, s, u, c, l, f, d, h, v = this;
                return me(this, function(y) {
                    return n ? (a = i.variables, o = e.name.value, s = le(e), u = o !== s, c = n[s] || n[o], l = Promise.resolve(c), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (f = n.__typename || i.defaultOperationType, d = this.resolvers && this.resolvers[f], d && (h = d[u ? o : s], h && (l = Promise.resolve(wn.withValue(this.cache, h, [n, Xt(e, a), i.context, {
                        field: e,
                        fragmentMap: i.fragmentMap
                    }]))))), [2, l.then(function(m) {
                        var p, b;
                        if (m === void 0 && (m = c), e.directives && e.directives.forEach(function(w) {
                                w.name.value === "export" && w.arguments && w.arguments.forEach(function(_) {
                                    _.name.value === "as" && _.value.kind === "StringValue" && (i.exportedVariables[_.value.value] = m)
                                })
                            }), !e.selectionSet || m == null) return m;
                        var k = (b = (p = e.directives) === null || p === void 0 ? void 0 : p.some(function(w) {
                            return w.name.value === "client"
                        })) !== null && b !== void 0 ? b : !1;
                        if (Array.isArray(m)) return v.resolveSubSelectedArray(e, r || k, m, i);
                        if (e.selectionSet) return v.resolveSelectionSet(e.selectionSet, r || k, m, i)
                    })]) : [2, null]
                })
            })
        }, t.prototype.resolveSubSelectedArray = function(e, r, n, i) {
            var a = this;
            return Promise.all(n.map(function(o) {
                if (o === null) return null;
                if (Array.isArray(o)) return a.resolveSubSelectedArray(e, r, o, i);
                if (e.selectionSet) return a.resolveSelectionSet(e.selectionSet, r, o, i)
            }))
        }, t.prototype.collectSelectionsToResolve = function(e, r) {
            var n = function(o) {
                    return !Array.isArray(o)
                },
                i = this.selectionsToResolveCache;

            function a(o) {
                if (!i.has(o)) {
                    var s = new Set;
                    i.set(o, s), re(o, {
                        Directive: function(u, c, l, f, d) {
                            u.name.value === "client" && d.forEach(function(h) {
                                n(h) && Bn(h) && s.add(h)
                            })
                        },
                        FragmentSpread: function(u, c, l, f, d) {
                            var h = r[u.name.value];
                            O(h, 20, u.name.value);
                            var v = a(h);
                            v.size > 0 && (d.forEach(function(y) {
                                n(y) && Bn(y) && s.add(y)
                            }), s.add(u), v.forEach(function(y) {
                                s.add(y)
                            }))
                        }
                    })
                }
                return i.get(o)
            }
            return a(e)
        }, t
    }(),
    Pi = !1,
    io = function() {
        function t(e) {
            var r = this,
                n;
            if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw J(16);
            var i = e.uri,
                a = e.credentials,
                o = e.headers,
                s = e.cache,
                u = e.documentTransform,
                c = e.ssrMode,
                l = c === void 0 ? !1 : c,
                f = e.ssrForceFetchDelay,
                d = f === void 0 ? 0 : f,
                h = e.connectToDevTools,
                v = e.queryDeduplication,
                y = v === void 0 ? !0 : v,
                m = e.defaultOptions,
                p = e.defaultContext,
                b = e.assumeImmutableResults,
                k = b === void 0 ? s.assumeImmutableResults : b,
                w = e.resolvers,
                _ = e.typeDefs,
                S = e.fragmentMatcher,
                I = e.name,
                T = e.version,
                N = e.devtools,
                P = e.dataMasking,
                W = e.link;
            W || (W = i ? new Sc({
                uri: i,
                credentials: a,
                headers: o
            }) : nt.empty()), this.link = W, this.cache = s, this.disableNetworkFetches = l || d > 0, this.queryDeduplication = y, this.defaultOptions = m || Object.create(null), this.typeDefs = _, this.devtoolsConfig = g(g({}, N), {
                enabled: (n = N?.enabled) !== null && n !== void 0 ? n : h
            }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), d && setTimeout(function() {
                return r.disableNetworkFetches = !1
            }, d), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = rn, this.localState = new Xc({
                cache: s,
                client: this,
                resolvers: w,
                fragmentMatcher: S
            }), this.queryManager = new Kc({
                cache: this.cache,
                link: this.link,
                defaultOptions: this.defaultOptions,
                defaultContext: p,
                documentTransform: u,
                queryDeduplication: y,
                ssrMode: l,
                dataMasking: !!P,
                clientAwareness: {
                    name: I,
                    version: T
                },
                localState: this.localState,
                assumeImmutableResults: k,
                onBroadcast: this.devtoolsConfig.enabled ? function() {
                    r.devToolsHookCb && r.devToolsHookCb({
                        action: {},
                        state: {
                            queries: r.queryManager.getQueryStore(),
                            mutations: r.queryManager.mutationStore || {}
                        },
                        dataWithOptimisticResults: r.cache.extract(!0)
                    })
                } : void 0
            }), this.devtoolsConfig.enabled && this.connectToDevTools()
        }
        return t.prototype.connectToDevTools = function() {
            if (!(typeof window > "u")) {
                var e = window,
                    r = Symbol.for("apollo.devtools");
                (e[r] = e[r] || []).push(this), e.__APOLLO_CLIENT__ = this, !Pi && globalThis.__DEV__ !== !1 && (Pi = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
                    if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                        var n = window.navigator,
                            i = n && n.userAgent,
                            a = void 0;
                        typeof i == "string" && (i.indexOf("Chrome/") > -1 ? a = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (a = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), a && globalThis.__DEV__ !== !1 && O.log("Download the Apollo DevTools for a better development experience: %s", a)
                    }
                }, 1e4))
            }
        }, Object.defineProperty(t.prototype, "documentTransform", {
            get: function() {
                return this.queryManager.documentTransform
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.stop = function() {
            this.queryManager.stop()
        }, t.prototype.watchQuery = function(e) {
            return this.defaultOptions.watchQuery && (e = Re(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = g(g({}, e), {
                fetchPolicy: "cache-first"
            })), this.queryManager.watchQuery(e)
        }, t.prototype.query = function(e) {
            return this.defaultOptions.query && (e = Re(this.defaultOptions.query, e)), O(e.fetchPolicy !== "cache-and-network", 17), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = g(g({}, e), {
                fetchPolicy: "cache-first"
            })), this.queryManager.query(e)
        }, t.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = Re(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
        }, t.prototype.subscribe = function(e) {
            var r = this,
                n = this.queryManager.generateQueryId();
            return this.queryManager.startGraphQLSubscription(e).map(function(i) {
                return g(g({}, i), {
                    data: r.queryManager.maskOperation({
                        document: e.query,
                        data: i.data,
                        fetchPolicy: e.fetchPolicy,
                        id: n
                    })
                })
            })
        }, t.prototype.readQuery = function(e, r) {
            return r === void 0 && (r = !1), this.cache.readQuery(e, r)
        }, t.prototype.watchFragment = function(e) {
            var r;
            return this.cache.watchFragment(g(g({}, e), (r = {}, r[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, r)))
        }, t.prototype.readFragment = function(e, r) {
            return r === void 0 && (r = !1), this.cache.readFragment(e, r)
        }, t.prototype.writeQuery = function(e) {
            var r = this.cache.writeQuery(e);
            return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r
        }, t.prototype.writeFragment = function(e) {
            var r = this.cache.writeFragment(e);
            return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r
        }, t.prototype.__actionHookForDevTools = function(e) {
            this.devToolsHookCb = e
        }, t.prototype.__requestRaw = function(e) {
            return qr(this.link, e)
        }, t.prototype.resetStore = function() {
            var e = this;
            return Promise.resolve().then(function() {
                return e.queryManager.clearStore({
                    discardWatches: !1
                })
            }).then(function() {
                return Promise.all(e.resetStoreCallbacks.map(function(r) {
                    return r()
                }))
            }).then(function() {
                return e.reFetchObservableQueries()
            })
        }, t.prototype.clearStore = function() {
            var e = this;
            return Promise.resolve().then(function() {
                return e.queryManager.clearStore({
                    discardWatches: !0
                })
            }).then(function() {
                return Promise.all(e.clearStoreCallbacks.map(function(r) {
                    return r()
                }))
            })
        }, t.prototype.onResetStore = function(e) {
            var r = this;
            return this.resetStoreCallbacks.push(e),
                function() {
                    r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function(n) {
                        return n !== e
                    })
                }
        }, t.prototype.onClearStore = function(e) {
            var r = this;
            return this.clearStoreCallbacks.push(e),
                function() {
                    r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function(n) {
                        return n !== e
                    })
                }
        }, t.prototype.reFetchObservableQueries = function(e) {
            return this.queryManager.reFetchObservableQueries(e)
        }, t.prototype.refetchQueries = function(e) {
            var r = this.queryManager.refetchQueries(e),
                n = [],
                i = [];
            r.forEach(function(o, s) {
                n.push(s), i.push(o)
            });
            var a = Promise.all(i);
            return a.queries = n, a.results = i, a.catch(function(o) {
                globalThis.__DEV__ !== !1 && O.debug(18, o)
            }), a
        }, t.prototype.getObservableQueries = function(e) {
            return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e)
        }, t.prototype.extract = function(e) {
            return this.cache.extract(e)
        }, t.prototype.restore = function(e) {
            return this.cache.restore(e)
        }, t.prototype.addResolvers = function(e) {
            this.localState.addResolvers(e)
        }, t.prototype.setResolvers = function(e) {
            this.localState.setResolvers(e)
        }, t.prototype.getResolvers = function() {
            return this.localState.getResolvers()
        }, t.prototype.setLocalStateFragmentMatcher = function(e) {
            this.localState.setFragmentMatcher(e)
        }, t.prototype.setLink = function(e) {
            this.link = this.queryManager.link = e
        }, Object.defineProperty(t.prototype, "defaultContext", {
            get: function() {
                return this.queryManager.defaultContext
            },
            enumerable: !1,
            configurable: !0
        }), t
    }();
globalThis.__DEV__ !== !1 && (io.prototype.getMemoryInternals = Gs);
var ao = {
    exports: {}
};
(function(t) {
    t.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, t.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, t.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(t.exports, So)
})(ao);
var F = ao.exports;
const Yc = _o(F),
    oo = Oo({
        __proto__: null,
        default: Yc
    }, [F]);
var Mi = sn ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";

function so() {
    O("createContext" in oo, 54);
    var t = F.createContext[Mi];
    return t || (Object.defineProperty(F.createContext, Mi, {
        value: t = F.createContext({}),
        enumerable: !1,
        writable: !1,
        configurable: !0
    }), t.displayName = "ApolloContext"), t
}

function Tn(t) {
    var e = F.useContext(so()),
        r = t || e.client;
    return O(!!r, 58), r
}
var Ai = !1,
    el = "useSyncExternalStore",
    tl = oo[el],
    rl = tl || function(t, e, r) {
        var n = e();
        globalThis.__DEV__ !== !1 && !Ai && n !== e() && (Ai = !0, globalThis.__DEV__ !== !1 && O.error(68));
        var i = F.useState({
                inst: {
                    value: n,
                    getSnapshot: e
                }
            }),
            a = i[0].inst,
            o = i[1];
        return Ms ? F.useLayoutEffect(function() {
            Object.assign(a, {
                value: n,
                getSnapshot: e
            }), _r(a) && o({
                inst: a
            })
        }, [t, n, e]) : Object.assign(a, {
            value: n,
            getSnapshot: e
        }), F.useEffect(function() {
            return _r(a) && o({
                inst: a
            }), t(function() {
                _r(a) && o({
                    inst: a
                })
            })
        }, [t]), n
    };

function _r(t) {
    var e = t.value,
        r = t.getSnapshot;
    try {
        return e !== r()
    } catch {
        return !0
    }
}
var oe;
(function(t) {
    t[t.Query = 0] = "Query", t[t.Mutation = 1] = "Mutation", t[t.Subscription = 2] = "Subscription"
})(oe || (oe = {}));
var xe;

function ji(t) {
    var e;
    switch (t) {
        case oe.Query:
            e = "Query";
            break;
        case oe.Mutation:
            e = "Mutation";
            break;
        case oe.Subscription:
            e = "Subscription";
            break
    }
    return e
}

function uo(t) {
    xe || (xe = new un(se.parser || 1e3));
    var e = xe.get(t);
    if (e) return e;
    var r, n, i;
    O(!!t && !!t.kind, 70, t);
    for (var a = [], o = [], s = [], u = [], c = 0, l = t.definitions; c < l.length; c++) {
        var f = l[c];
        if (f.kind === "FragmentDefinition") {
            a.push(f);
            continue
        }
        if (f.kind === "OperationDefinition") switch (f.operation) {
            case "query":
                o.push(f);
                break;
            case "mutation":
                s.push(f);
                break;
            case "subscription":
                u.push(f);
                break
        }
    }
    O(!a.length || o.length || s.length || u.length, 71), O(o.length + s.length + u.length <= 1, 72, t, o.length, u.length, s.length), n = o.length ? oe.Query : oe.Mutation, !o.length && !s.length && (n = oe.Subscription);
    var d = o.length ? o : s.length ? s : u;
    O(d.length === 1, 73, t, d.length);
    var h = d[0];
    r = h.variableDefinitions || [], h.name && h.name.kind === "Name" ? i = h.name.value : i = "data";
    var v = {
        name: i,
        type: n,
        variables: r
    };
    return xe.set(t, v), v
}
uo.resetCache = function() {
    xe = void 0
};
globalThis.__DEV__ !== !1 && cn("parser", function() {
    return xe ? xe.size : 0
});

function co(t, e) {
    var r = uo(t),
        n = ji(e),
        i = ji(r.type);
    O(r.type === e, 74, n, n, i)
}
var lo = ia ? F.useLayoutEffect : F.useEffect,
    nl = Symbol.for("apollo.hook.wrappers");

function il(t, e, r) {
    var n = r.queryManager,
        i = n && n[nl],
        a = i && i[t];
    return a ? a(e) : e
}
var al = Object.prototype.hasOwnProperty;

function Vi() {}
var Qt = Symbol();

function ol(t, e) {
    return e === void 0 && (e = Object.create(null)), il("useQuery", sl, Tn(e && e.client))(t, e)
}

function sl(t, e) {
    var r = fo(t, e),
        n = r.result,
        i = r.obsQueryFields;
    return F.useMemo(function() {
        return g(g({}, n), i)
    }, [n, i])
}

function ul(t, e, r, n, i) {
    function a(f) {
        var d;
        co(e, oe.Query);
        var h = {
            client: t,
            query: e,
            observable: n && n.getSSRObservable(i()) || bt.inactiveOnCreation.withValue(!n, function() {
                return t.watchQuery(En(void 0, t, r, i()))
            }),
            resultData: {
                previousData: (d = f?.resultData.current) === null || d === void 0 ? void 0 : d.data
            }
        };
        return h
    }
    var o = F.useState(a),
        s = o[0],
        u = o[1];

    function c(f) {
        var d, h;
        Object.assign(s.observable, (d = {}, d[Qt] = f, d));
        var v = s.resultData;
        u(g(g({}, s), {
            query: f.query,
            resultData: Object.assign(v, {
                previousData: ((h = v.current) === null || h === void 0 ? void 0 : h.data) || v.previousData,
                current: void 0
            })
        }))
    }
    if (t !== s.client || e !== s.query) {
        var l = a(s);
        return u(l), [l, c]
    }
    return [s, c]
}

function fo(t, e) {
    var r = Tn(e.client),
        n = F.useContext(so()).renderPromises,
        i = !!n,
        a = r.disableNetworkFetches,
        o = e.ssr !== !1 && !e.skip,
        s = e.partialRefetch,
        u = ho(r, t, e, i),
        c = ul(r, t, e, n, u),
        l = c[0],
        f = l.observable,
        d = l.resultData,
        h = c[1],
        v = u(f);
    fl(d, f, r, e, v);
    var y = F.useMemo(function() {
        return vl(f)
    }, [f]);
    ll(f, n, o);
    var m = cl(d, f, r, e, v, a, s, i, {
        onCompleted: e.onCompleted || Vi,
        onError: e.onError || Vi
    });
    return {
        result: m,
        obsQueryFields: y,
        observable: f,
        resultData: d,
        client: r,
        onQueryExecuted: h
    }
}

function cl(t, e, r, n, i, a, o, s, u) {
    var c = F.useRef(u);
    F.useEffect(function() {
        c.current = u
    });
    var l = (s || a) && n.ssr === !1 && !n.skip ? po : n.skip || i.fetchPolicy === "standby" ? vo : void 0,
        f = t.previousData,
        d = F.useMemo(function() {
            return l && Gt(l, f, e, r)
        }, [r, e, l, f]);
    return rl(F.useCallback(function(h) {
        if (s) return function() {};
        var v = function() {
                var p = t.current,
                    b = e.getCurrentResult();
                p && p.loading === b.loading && p.networkStatus === b.networkStatus && M(p.data, b.data) || $r(b, t, e, r, o, h, c.current)
            },
            y = function(p) {
                if (m.current.unsubscribe(), m.current = e.resubscribeAfterError(v, y), !al.call(p, "graphQLErrors")) throw p;
                var b = t.current;
                (!b || b && b.loading || !M(p, b.error)) && $r({
                    data: b && b.data,
                    error: p,
                    loading: !1,
                    networkStatus: x.error
                }, t, e, r, o, h, c.current)
            },
            m = {
                current: e.subscribe(v, y)
            };
        return function() {
            setTimeout(function() {
                return m.current.unsubscribe()
            })
        }
    }, [a, s, e, t, o, r]), function() {
        return d || qi(t, e, c.current, o, r)
    }, function() {
        return d || qi(t, e, c.current, o, r)
    })
}

function ll(t, e, r) {
    e && r && (e.registerSSRObservable(t), t.getCurrentResult().loading && e.addObservableQueryPromise(t))
}

function fl(t, e, r, n, i) {
    var a;
    e[Qt] && !M(e[Qt], i) && (e.reobserve(En(e, r, n, i)), t.previousData = ((a = t.current) === null || a === void 0 ? void 0 : a.data) || t.previousData, t.current = void 0), e[Qt] = i
}

function ho(t, e, r, n) {
    r === void 0 && (r = {});
    var i = r.skip;
    r.ssr, r.onCompleted, r.onError;
    var a = r.defaultOptions,
        o = X(r, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
    return function(s) {
        var u = Object.assign(o, {
            query: e
        });
        return n && (u.fetchPolicy === "network-only" || u.fetchPolicy === "cache-and-network") && (u.fetchPolicy = "cache-first"), u.variables || (u.variables = {}), i ? (u.initialFetchPolicy = u.initialFetchPolicy || u.fetchPolicy || Zr(a, t.defaultOptions), u.fetchPolicy = "standby") : u.fetchPolicy || (u.fetchPolicy = s?.options.initialFetchPolicy || Zr(a, t.defaultOptions)), u
    }
}

function En(t, e, r, n) {
    var i = [],
        a = e.defaultOptions.watchQuery;
    return a && i.push(a), r.defaultOptions && i.push(r.defaultOptions), i.push(Pe(t && t.options, n)), i.reduce(Re)
}

function $r(t, e, r, n, i, a, o) {
    var s = e.current;
    s && s.data && (e.previousData = s.data), !t.error && Y(t.errors) && (t.error = new ie({
        graphQLErrors: t.errors
    })), e.current = Gt(pl(t, r, i), e.previousData, r, n), a(), dl(t, s?.networkStatus, o)
}

function dl(t, e, r) {
    if (!t.loading) {
        var n = hl(t);
        Promise.resolve().then(function() {
            n ? r.onError(n) : t.data && e !== t.networkStatus && t.networkStatus === x.ready && r.onCompleted(t.data)
        }).catch(function(i) {
            globalThis.__DEV__ !== !1 && O.warn(i)
        })
    }
}

function qi(t, e, r, n, i) {
    return t.current || $r(e.getCurrentResult(), t, e, i, n, function() {}, r), t.current
}

function Zr(t, e) {
    var r;
    return t?.fetchPolicy || ((r = e?.watchQuery) === null || r === void 0 ? void 0 : r.fetchPolicy) || "cache-first"
}

function hl(t) {
    return Y(t.errors) ? new ie({
        graphQLErrors: t.errors
    }) : t.error
}

function Gt(t, e, r, n) {
    var i = t.data;
    t.partial;
    var a = X(t, ["data", "partial"]),
        o = g(g({
            data: i
        }, a), {
            client: n,
            observable: r,
            variables: r.variables,
            called: t !== po && t !== vo,
            previousData: e
        });
    return o
}

function pl(t, e, r) {
    return t.partial && r && !t.loading && (!t.data || Object.keys(t.data).length === 0) && e.options.fetchPolicy !== "cache-only" ? (e.refetch(), g(g({}, t), {
        loading: !0,
        networkStatus: x.refetch
    })) : t
}
var po = Ye({
        loading: !0,
        data: void 0,
        error: void 0,
        networkStatus: x.loading
    }),
    vo = Ye({
        loading: !1,
        data: void 0,
        error: void 0,
        networkStatus: x.ready
    });

function vl(t) {
    return {
        refetch: t.refetch.bind(t),
        reobserve: t.reobserve.bind(t),
        fetchMore: t.fetchMore.bind(t),
        updateQuery: t.updateQuery.bind(t),
        startPolling: t.startPolling.bind(t),
        stopPolling: t.stopPolling.bind(t),
        subscribeToMore: t.subscribeToMore.bind(t)
    }
}
var ml = ["refetch", "reobserve", "fetchMore", "updateQuery", "startPolling", "stopPolling", "subscribeToMore"];

function yl(t, e) {
    var r, n = F.useRef(void 0),
        i = F.useRef(void 0),
        a = F.useRef(void 0),
        o = Re(e, n.current || {}),
        s = (r = o?.query) !== null && r !== void 0 ? r : t;
    i.current = e, a.current = s;
    var u = g(g({}, o), {
            skip: !n.current
        }),
        c = fo(s, u),
        l = c.obsQueryFields,
        f = c.result,
        d = c.client,
        h = c.resultData,
        v = c.observable,
        y = c.onQueryExecuted,
        m = v.options.initialFetchPolicy || Zr(u.defaultOptions, d.defaultOptions),
        p = F.useReducer(function(T) {
            return T + 1
        }, 0)[1],
        b = F.useMemo(function() {
            for (var T = {}, N = function(L) {
                    var H = l[L];
                    T[L] = function() {
                        return n.current || (n.current = Object.create(null), p()), H.apply(this, arguments)
                    }
                }, P = 0, W = ml; P < W.length; P++) {
                var R = W[P];
                N(R)
            }
            return T
        }, [p, l]),
        k = !!n.current,
        w = F.useMemo(function() {
            return g(g(g({}, f), b), {
                called: k
            })
        }, [f, b, k]),
        _ = F.useCallback(function(T) {
            n.current = T ? g(g({}, T), {
                fetchPolicy: T.fetchPolicy || m
            }) : {
                fetchPolicy: m
            };
            var N = Re(i.current, g({
                    query: a.current
                }, n.current)),
                P = gl(h, v, d, s, g(g({}, N), {
                    skip: !1
                }), y).then(function(W) {
                    return Object.assign(W, b)
                });
            return P.catch(function() {}), P
        }, [d, s, b, m, v, h, y]),
        S = F.useRef(_);
    lo(function() {
        S.current = _
    });
    var I = F.useCallback(function() {
        for (var T = [], N = 0; N < arguments.length; N++) T[N] = arguments[N];
        return S.current.apply(S, T)
    }, []);
    return [I, w]
}

function gl(t, e, r, n, i, a) {
    var o = i.query || n,
        s = ho(r, o, i, !1)(e),
        u = e.reobserveAsConcast(En(e, r, i, s));
    return a(s), new Promise(function(c) {
        var l;
        u.subscribe({
            next: function(f) {
                l = f
            },
            error: function() {
                c(Gt(e.getCurrentResult(), t.previousData, e, r))
            },
            complete: function() {
                c(Gt(e.maskResult(l), t.previousData, e, r))
            }
        })
    })
}

function bl(t, e) {
    var r = Tn(e?.client);
    co(t, oe.Mutation);
    var n = F.useState({
            called: !1,
            loading: !1,
            client: r
        }),
        i = n[0],
        a = n[1],
        o = F.useRef({
            result: i,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: t,
            options: e
        });
    lo(function() {
        Object.assign(o.current, {
            client: r,
            options: e,
            mutation: t
        })
    });
    var s = F.useCallback(function(c) {
            c === void 0 && (c = {});
            var l = o.current,
                f = l.options,
                d = l.mutation,
                h = g(g({}, f), {
                    mutation: d
                }),
                v = c.client || o.current.client;
            !o.current.result.loading && !h.ignoreResults && o.current.isMounted && a(o.current.result = {
                loading: !0,
                error: void 0,
                data: void 0,
                called: !0,
                client: v
            });
            var y = ++o.current.mutationId,
                m = Re(h, c);
            return v.mutate(m).then(function(p) {
                var b, k, w = p.data,
                    _ = p.errors,
                    S = _ && _.length > 0 ? new ie({
                        graphQLErrors: _
                    }) : void 0,
                    I = c.onError || ((b = o.current.options) === null || b === void 0 ? void 0 : b.onError);
                if (S && I && I(S, m), y === o.current.mutationId && !m.ignoreResults) {
                    var T = {
                        called: !0,
                        loading: !1,
                        data: w,
                        error: S,
                        client: v
                    };
                    o.current.isMounted && !M(o.current.result, T) && a(o.current.result = T)
                }
                var N = c.onCompleted || ((k = o.current.options) === null || k === void 0 ? void 0 : k.onCompleted);
                return S || N?.(p.data, m), p
            }, function(p) {
                var b;
                if (y === o.current.mutationId && o.current.isMounted) {
                    var k = {
                        loading: !1,
                        error: p,
                        data: void 0,
                        called: !0,
                        client: v
                    };
                    M(o.current.result, k) || a(o.current.result = k)
                }
                var w = c.onError || ((b = o.current.options) === null || b === void 0 ? void 0 : b.onError);
                if (w) return w(p, m), {
                    data: void 0,
                    errors: p
                };
                throw p
            })
        }, []),
        u = F.useCallback(function() {
            if (o.current.isMounted) {
                var c = {
                    called: !1,
                    loading: !1,
                    client: o.current.client
                };
                Object.assign(o.current, {
                    mutationId: 0,
                    result: c
                }), a(c)
            }
        }, []);
    return F.useEffect(function() {
        var c = o.current;
        return c.isMounted = !0,
            function() {
                c.isMounted = !1
            }
    }, []), [s, g({
        reset: u
    }, i)]
}

function kl(t) {
    return new nt(function(e, r) {
        var n = X(e, []);
        return new j(function(i) {
            var a, o = !1;
            return Promise.resolve(n).then(function(s) {
                    return t(s, e.getContext())
                }).then(e.setContext).then(function() {
                    o || (a = r(e).subscribe({
                        next: i.next.bind(i),
                        error: i.error.bind(i),
                        complete: i.complete.bind(i)
                    }))
                }).catch(i.error.bind(i)),
                function() {
                    o = !0, a && a.unsubscribe()
                }
        })
    })
}
const wl = Aa({
        uri: "/api"
    }),
    _l = kl(async (t, {
        headers: e
    }) => {
        try {
            const r = await ge.getTokenSilently({
                cacheMode: "cache-only"
            });
            return {
                headers: {
                    ...e,
                    ...r && {
                        Authorization: `Bearer ${r}`
                    }
                }
            }
        } catch {
            return {
                headers: {
                    ...e
                }
            }
        }
    }),
    rr = new io({
        link: _l.concat(wl),
        cache: new ro
    }),
    Ef = (t, e) => ol(t, {
        ...e,
        client: rr
    }),
    If = (t, e) => bl(t, {
        ...e,
        client: rr
    }),
    Nf = (t, e) => yl(t, {
        ...e,
        client: rr
    }),
    In = "-",
    Sl = t => {
        const e = Tl(t),
            {
                conflictingClassGroups: r,
                conflictingClassGroupModifiers: n
            } = t;
        return {
            getClassGroupId: o => {
                const s = o.split(In);
                return s[0] === "" && s.length !== 1 && s.shift(), mo(s, e) || Ol(o)
            },
            getConflictingClassGroupIds: (o, s) => {
                const u = r[o] || [];
                return s && n[o] ? [...u, ...n[o]] : u
            }
        }
    },
    mo = (t, e) => {
        if (t.length === 0) return e.classGroupId;
        const r = t[0],
            n = e.nextPart.get(r),
            i = n ? mo(t.slice(1), n) : void 0;
        if (i) return i;
        if (e.validators.length === 0) return;
        const a = t.join(In);
        return e.validators.find(({
            validator: o
        }) => o(a))?.classGroupId
    },
    Li = /^\[(.+)\]$/,
    Ol = t => {
        if (Li.test(t)) {
            const e = Li.exec(t)[1],
                r = e?.substring(0, e.indexOf(":"));
            if (r) return "arbitrary.." + r
        }
    },
    Tl = t => {
        const {
            theme: e,
            prefix: r
        } = t, n = {
            nextPart: new Map,
            validators: []
        };
        return Il(Object.entries(t.classGroups), r).forEach(([a, o]) => {
            Hr(o, n, a, e)
        }), n
    },
    Hr = (t, e, r, n) => {
        t.forEach(i => {
            if (typeof i == "string") {
                const a = i === "" ? e : zi(e, i);
                a.classGroupId = r;
                return
            }
            if (typeof i == "function") {
                if (El(i)) {
                    Hr(i(n), e, r, n);
                    return
                }
                e.validators.push({
                    validator: i,
                    classGroupId: r
                });
                return
            }
            Object.entries(i).forEach(([a, o]) => {
                Hr(o, zi(e, a), r, n)
            })
        })
    },
    zi = (t, e) => {
        let r = t;
        return e.split(In).forEach(n => {
            r.nextPart.has(n) || r.nextPart.set(n, {
                nextPart: new Map,
                validators: []
            }), r = r.nextPart.get(n)
        }), r
    },
    El = t => t.isThemeGetter,
    Il = (t, e) => e ? t.map(([r, n]) => {
        const i = n.map(a => typeof a == "string" ? e + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([o, s]) => [e + o, s])) : a);
        return [r, i]
    }) : t,
    Nl = t => {
        if (t < 1) return {
            get: () => {},
            set: () => {}
        };
        let e = 0,
            r = new Map,
            n = new Map;
        const i = (a, o) => {
            r.set(a, o), e++, e > t && (e = 0, n = r, r = new Map)
        };
        return {
            get(a) {
                let o = r.get(a);
                if (o !== void 0) return o;
                if ((o = n.get(a)) !== void 0) return i(a, o), o
            },
            set(a, o) {
                r.has(a) ? r.set(a, o) : i(a, o)
            }
        }
    },
    yo = "!",
    Dl = t => {
        const {
            separator: e,
            experimentalParseClassName: r
        } = t, n = e.length === 1, i = e[0], a = e.length, o = s => {
            const u = [];
            let c = 0,
                l = 0,
                f;
            for (let m = 0; m < s.length; m++) {
                let p = s[m];
                if (c === 0) {
                    if (p === i && (n || s.slice(m, m + a) === e)) {
                        u.push(s.slice(l, m)), l = m + a;
                        continue
                    }
                    if (p === "/") {
                        f = m;
                        continue
                    }
                }
                p === "[" ? c++ : p === "]" && c--
            }
            const d = u.length === 0 ? s : s.substring(l),
                h = d.startsWith(yo),
                v = h ? d.substring(1) : d,
                y = f && f > l ? f - l : void 0;
            return {
                modifiers: u,
                hasImportantModifier: h,
                baseClassName: v,
                maybePostfixModifierPosition: y
            }
        };
        return r ? s => r({
            className: s,
            parseClassName: o
        }) : o
    },
    Cl = t => {
        if (t.length <= 1) return t;
        const e = [];
        let r = [];
        return t.forEach(n => {
            n[0] === "[" ? (e.push(...r.sort(), n), r = []) : r.push(n)
        }), e.push(...r.sort()), e
    },
    xl = t => ({
        cache: Nl(t.cacheSize),
        parseClassName: Dl(t),
        ...Sl(t)
    }),
    Rl = /\s+/,
    Fl = (t, e) => {
        const {
            parseClassName: r,
            getClassGroupId: n,
            getConflictingClassGroupIds: i
        } = e, a = [], o = t.trim().split(Rl);
        let s = "";
        for (let u = o.length - 1; u >= 0; u -= 1) {
            const c = o[u],
                {
                    modifiers: l,
                    hasImportantModifier: f,
                    baseClassName: d,
                    maybePostfixModifierPosition: h
                } = r(c);
            let v = !!h,
                y = n(v ? d.substring(0, h) : d);
            if (!y) {
                if (!v) {
                    s = c + (s.length > 0 ? " " + s : s);
                    continue
                }
                if (y = n(d), !y) {
                    s = c + (s.length > 0 ? " " + s : s);
                    continue
                }
                v = !1
            }
            const m = Cl(l).join(":"),
                p = f ? m + yo : m,
                b = p + y;
            if (a.includes(b)) continue;
            a.push(b);
            const k = i(y, v);
            for (let w = 0; w < k.length; ++w) {
                const _ = k[w];
                a.push(p + _)
            }
            s = c + (s.length > 0 ? " " + s : s)
        }
        return s
    };

function Pl() {
    let t = 0,
        e, r, n = "";
    for (; t < arguments.length;)(e = arguments[t++]) && (r = go(e)) && (n && (n += " "), n += r);
    return n
}
const go = t => {
    if (typeof t == "string") return t;
    let e, r = "";
    for (let n = 0; n < t.length; n++) t[n] && (e = go(t[n])) && (r && (r += " "), r += e);
    return r
};

function Qi(t, ...e) {
    let r, n, i, a = o;

    function o(u) {
        const c = e.reduce((l, f) => f(l), t());
        return r = xl(c), n = r.cache.get, i = r.cache.set, a = s, s(u)
    }

    function s(u) {
        const c = n(u);
        if (c) return c;
        const l = Fl(u, r);
        return i(u, l), l
    }
    return function() {
        return a(Pl.apply(null, arguments))
    }
}
const q = t => {
        const e = r => r[t] || [];
        return e.isThemeGetter = !0, e
    },
    bo = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Ml = /^\d+\/\d+$/,
    Al = new Set(["px", "full", "screen"]),
    jl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Vl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    ql = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Ll = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    zl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    ce = t => He(t) || Al.has(t) || Ml.test(t),
    de = t => it(t, "length", Hl),
    He = t => !!t && !Number.isNaN(Number(t)),
    Sr = t => it(t, "number", He),
    lt = t => !!t && Number.isInteger(Number(t)),
    Ql = t => t.endsWith("%") && He(t.slice(0, -1)),
    D = t => bo.test(t),
    he = t => jl.test(t),
    Wl = new Set(["length", "size", "percentage"]),
    Ul = t => it(t, Wl, ko),
    Bl = t => it(t, "position", ko),
    Gl = new Set(["image", "url"]),
    $l = t => it(t, Gl, Kl),
    Zl = t => it(t, "", Jl),
    ft = () => !0,
    it = (t, e, r) => {
        const n = bo.exec(t);
        return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1
    },
    Hl = t => Vl.test(t) && !ql.test(t),
    ko = () => !1,
    Jl = t => Ll.test(t),
    Kl = t => zl.test(t),
    Wi = () => {
        const t = q("colors"),
            e = q("spacing"),
            r = q("blur"),
            n = q("brightness"),
            i = q("borderColor"),
            a = q("borderRadius"),
            o = q("borderSpacing"),
            s = q("borderWidth"),
            u = q("contrast"),
            c = q("grayscale"),
            l = q("hueRotate"),
            f = q("invert"),
            d = q("gap"),
            h = q("gradientColorStops"),
            v = q("gradientColorStopPositions"),
            y = q("inset"),
            m = q("margin"),
            p = q("opacity"),
            b = q("padding"),
            k = q("saturate"),
            w = q("scale"),
            _ = q("sepia"),
            S = q("skew"),
            I = q("space"),
            T = q("translate"),
            N = () => ["auto", "contain", "none"],
            P = () => ["auto", "hidden", "clip", "visible", "scroll"],
            W = () => ["auto", D, e],
            R = () => [D, e],
            L = () => ["", ce, de],
            H = () => ["auto", He, D],
            Ae = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            Oe = () => ["solid", "dashed", "dotted", "double", "none"],
            Ct = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            je = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            U = () => ["", "0", D],
            xt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            K = () => [He, D];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [ft],
                spacing: [ce, de],
                blur: ["none", "", he, D],
                brightness: K(),
                borderColor: [t],
                borderRadius: ["none", "", "full", he, D],
                borderSpacing: R(),
                borderWidth: L(),
                contrast: K(),
                grayscale: U(),
                hueRotate: K(),
                invert: U(),
                gap: R(),
                gradientColorStops: [t],
                gradientColorStopPositions: [Ql, de],
                inset: W(),
                margin: W(),
                opacity: K(),
                padding: R(),
                saturate: K(),
                scale: K(),
                sepia: U(),
                skew: K(),
                space: R(),
                translate: R()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", D]
                }],
                container: ["container"],
                columns: [{
                    columns: [he]
                }],
                "break-after": [{
                    "break-after": xt()
                }],
                "break-before": [{
                    "break-before": xt()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...Ae(), D]
                }],
                overflow: [{
                    overflow: P()
                }],
                "overflow-x": [{
                    "overflow-x": P()
                }],
                "overflow-y": [{
                    "overflow-y": P()
                }],
                overscroll: [{
                    overscroll: N()
                }],
                "overscroll-x": [{
                    "overscroll-x": N()
                }],
                "overscroll-y": [{
                    "overscroll-y": N()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [y]
                }],
                "inset-x": [{
                    "inset-x": [y]
                }],
                "inset-y": [{
                    "inset-y": [y]
                }],
                start: [{
                    start: [y]
                }],
                end: [{
                    end: [y]
                }],
                top: [{
                    top: [y]
                }],
                right: [{
                    right: [y]
                }],
                bottom: [{
                    bottom: [y]
                }],
                left: [{
                    left: [y]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", lt, D]
                }],
                basis: [{
                    basis: W()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", D]
                }],
                grow: [{
                    grow: U()
                }],
                shrink: [{
                    shrink: U()
                }],
                order: [{
                    order: ["first", "last", "none", lt, D]
                }],
                "grid-cols": [{
                    "grid-cols": [ft]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", lt, D]
                    }, D]
                }],
                "col-start": [{
                    "col-start": H()
                }],
                "col-end": [{
                    "col-end": H()
                }],
                "grid-rows": [{
                    "grid-rows": [ft]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [lt, D]
                    }, D]
                }],
                "row-start": [{
                    "row-start": H()
                }],
                "row-end": [{
                    "row-end": H()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", D]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", D]
                }],
                gap: [{
                    gap: [d]
                }],
                "gap-x": [{
                    "gap-x": [d]
                }],
                "gap-y": [{
                    "gap-y": [d]
                }],
                "justify-content": [{
                    justify: ["normal", ...je()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...je(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...je(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [b]
                }],
                px: [{
                    px: [b]
                }],
                py: [{
                    py: [b]
                }],
                ps: [{
                    ps: [b]
                }],
                pe: [{
                    pe: [b]
                }],
                pt: [{
                    pt: [b]
                }],
                pr: [{
                    pr: [b]
                }],
                pb: [{
                    pb: [b]
                }],
                pl: [{
                    pl: [b]
                }],
                m: [{
                    m: [m]
                }],
                mx: [{
                    mx: [m]
                }],
                my: [{
                    my: [m]
                }],
                ms: [{
                    ms: [m]
                }],
                me: [{
                    me: [m]
                }],
                mt: [{
                    mt: [m]
                }],
                mr: [{
                    mr: [m]
                }],
                mb: [{
                    mb: [m]
                }],
                ml: [{
                    ml: [m]
                }],
                "space-x": [{
                    "space-x": [I]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [I]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, e]
                }],
                "min-w": [{
                    "min-w": [D, e, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [D, e, "none", "full", "min", "max", "fit", "prose", {
                        screen: [he]
                    }, he]
                }],
                h: [{
                    h: [D, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [D, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [D, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [D, e, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", he, de]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Sr]
                }],
                "font-family": [{
                    font: [ft]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", D]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", He, Sr]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ce, D]
                }],
                "list-image": [{
                    "list-image": ["none", D]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", D]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [t]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [p]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [t]
                }],
                "text-opacity": [{
                    "text-opacity": [p]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...Oe(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", ce, de]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", ce, D]
                }],
                "text-decoration-color": [{
                    decoration: [t]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: R()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", D]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [p]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...Ae(), Bl]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", Ul]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, $l]
                }],
                "bg-color": [{
                    bg: [t]
                }],
                "gradient-from-pos": [{
                    from: [v]
                }],
                "gradient-via-pos": [{
                    via: [v]
                }],
                "gradient-to-pos": [{
                    to: [v]
                }],
                "gradient-from": [{
                    from: [h]
                }],
                "gradient-via": [{
                    via: [h]
                }],
                "gradient-to": [{
                    to: [h]
                }],
                rounded: [{
                    rounded: [a]
                }],
                "rounded-s": [{
                    "rounded-s": [a]
                }],
                "rounded-e": [{
                    "rounded-e": [a]
                }],
                "rounded-t": [{
                    "rounded-t": [a]
                }],
                "rounded-r": [{
                    "rounded-r": [a]
                }],
                "rounded-b": [{
                    "rounded-b": [a]
                }],
                "rounded-l": [{
                    "rounded-l": [a]
                }],
                "rounded-ss": [{
                    "rounded-ss": [a]
                }],
                "rounded-se": [{
                    "rounded-se": [a]
                }],
                "rounded-ee": [{
                    "rounded-ee": [a]
                }],
                "rounded-es": [{
                    "rounded-es": [a]
                }],
                "rounded-tl": [{
                    "rounded-tl": [a]
                }],
                "rounded-tr": [{
                    "rounded-tr": [a]
                }],
                "rounded-br": [{
                    "rounded-br": [a]
                }],
                "rounded-bl": [{
                    "rounded-bl": [a]
                }],
                "border-w": [{
                    border: [s]
                }],
                "border-w-x": [{
                    "border-x": [s]
                }],
                "border-w-y": [{
                    "border-y": [s]
                }],
                "border-w-s": [{
                    "border-s": [s]
                }],
                "border-w-e": [{
                    "border-e": [s]
                }],
                "border-w-t": [{
                    "border-t": [s]
                }],
                "border-w-r": [{
                    "border-r": [s]
                }],
                "border-w-b": [{
                    "border-b": [s]
                }],
                "border-w-l": [{
                    "border-l": [s]
                }],
                "border-opacity": [{
                    "border-opacity": [p]
                }],
                "border-style": [{
                    border: [...Oe(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [s]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [s]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [p]
                }],
                "divide-style": [{
                    divide: Oe()
                }],
                "border-color": [{
                    border: [i]
                }],
                "border-color-x": [{
                    "border-x": [i]
                }],
                "border-color-y": [{
                    "border-y": [i]
                }],
                "border-color-s": [{
                    "border-s": [i]
                }],
                "border-color-e": [{
                    "border-e": [i]
                }],
                "border-color-t": [{
                    "border-t": [i]
                }],
                "border-color-r": [{
                    "border-r": [i]
                }],
                "border-color-b": [{
                    "border-b": [i]
                }],
                "border-color-l": [{
                    "border-l": [i]
                }],
                "divide-color": [{
                    divide: [i]
                }],
                "outline-style": [{
                    outline: ["", ...Oe()]
                }],
                "outline-offset": [{
                    "outline-offset": [ce, D]
                }],
                "outline-w": [{
                    outline: [ce, de]
                }],
                "outline-color": [{
                    outline: [t]
                }],
                "ring-w": [{
                    ring: L()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [t]
                }],
                "ring-opacity": [{
                    "ring-opacity": [p]
                }],
                "ring-offset-w": [{
                    "ring-offset": [ce, de]
                }],
                "ring-offset-color": [{
                    "ring-offset": [t]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", he, Zl]
                }],
                "shadow-color": [{
                    shadow: [ft]
                }],
                opacity: [{
                    opacity: [p]
                }],
                "mix-blend": [{
                    "mix-blend": [...Ct(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": Ct()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [r]
                }],
                brightness: [{
                    brightness: [n]
                }],
                contrast: [{
                    contrast: [u]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", he, D]
                }],
                grayscale: [{
                    grayscale: [c]
                }],
                "hue-rotate": [{
                    "hue-rotate": [l]
                }],
                invert: [{
                    invert: [f]
                }],
                saturate: [{
                    saturate: [k]
                }],
                sepia: [{
                    sepia: [_]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [r]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [n]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [u]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [c]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [l]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [f]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [p]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [k]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [_]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [o]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [o]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [o]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", D]
                }],
                duration: [{
                    duration: K()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", D]
                }],
                delay: [{
                    delay: K()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", D]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [w]
                }],
                "scale-x": [{
                    "scale-x": [w]
                }],
                "scale-y": [{
                    "scale-y": [w]
                }],
                rotate: [{
                    rotate: [lt, D]
                }],
                "translate-x": [{
                    "translate-x": [T]
                }],
                "translate-y": [{
                    "translate-y": [T]
                }],
                "skew-x": [{
                    "skew-x": [S]
                }],
                "skew-y": [{
                    "skew-y": [S]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", D]
                }],
                accent: [{
                    accent: ["auto", t]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D]
                }],
                "caret-color": [{
                    caret: [t]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": R()
                }],
                "scroll-mx": [{
                    "scroll-mx": R()
                }],
                "scroll-my": [{
                    "scroll-my": R()
                }],
                "scroll-ms": [{
                    "scroll-ms": R()
                }],
                "scroll-me": [{
                    "scroll-me": R()
                }],
                "scroll-mt": [{
                    "scroll-mt": R()
                }],
                "scroll-mr": [{
                    "scroll-mr": R()
                }],
                "scroll-mb": [{
                    "scroll-mb": R()
                }],
                "scroll-ml": [{
                    "scroll-ml": R()
                }],
                "scroll-p": [{
                    "scroll-p": R()
                }],
                "scroll-px": [{
                    "scroll-px": R()
                }],
                "scroll-py": [{
                    "scroll-py": R()
                }],
                "scroll-ps": [{
                    "scroll-ps": R()
                }],
                "scroll-pe": [{
                    "scroll-pe": R()
                }],
                "scroll-pt": [{
                    "scroll-pt": R()
                }],
                "scroll-pr": [{
                    "scroll-pr": R()
                }],
                "scroll-pb": [{
                    "scroll-pb": R()
                }],
                "scroll-pl": [{
                    "scroll-pl": R()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", D]
                }],
                fill: [{
                    fill: [t, "none"]
                }],
                "stroke-w": [{
                    stroke: [ce, de, Sr]
                }],
                stroke: [{
                    stroke: [t, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    Xl = (t, {
        cacheSize: e,
        prefix: r,
        separator: n,
        experimentalParseClassName: i,
        extend: a = {},
        override: o = {}
    }) => {
        pt(t, "cacheSize", e), pt(t, "prefix", r), pt(t, "separator", n), pt(t, "experimentalParseClassName", i);
        for (const s in o) Yl(t[s], o[s]);
        for (const s in a) ef(t[s], a[s]);
        return t
    },
    pt = (t, e, r) => {
        r !== void 0 && (t[e] = r)
    },
    Yl = (t, e) => {
        if (e)
            for (const r in e) pt(t, r, e[r])
    },
    ef = (t, e) => {
        if (e)
            for (const r in e) {
                const n = e[r];
                n !== void 0 && (t[r] = (t[r] || []).concat(n))
            }
    },
    tf = (t, ...e) => typeof t == "function" ? Qi(Wi, t, ...e) : Qi(() => Xl(Wi(), t), ...e),
    rf = {
        prefix: "u-"
    },
    nf = tf(rf);

function Df(...t) {
    return nf(wo(t))
}
const Nt = (t, e) => {
        const r = document.getElementById(t);
        if (!r) return null;
        const n = r.getAttribute(e);
        try {
            return n ? JSON.parse(n) : null
        } catch {
            return null
        }
    },
    Dt = "scout-env-banner",
    Cf = Nt(Dt, "data-captcha-site-key-v2"),
    xf = Nt(Dt, "data-captcha-site-key-v3"),
    af = Nt(Dt, "data-auth-domain"),
    of = Nt(Dt, "data-auth-client-id"),
    sf = Nt(Dt, "data-auth-audience"),
    uf = {
        domain: af,
        clientId: of,
        authorizationParams: {
            redirect_uri: `${window.location.origin}/account`,
            audience: sf
        },
        cacheLocation: "localstorage"
    },
    ge = new Uo(uf),
    Rf = async () => {
        await ge.loginWithRedirect()
    }, Ff = () => {
        ge.logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        })
    }, cf = /[?&]code=[^&]+/, lf = /[?&]state=[^&]+/, ff = /[?&]error=[^&]+/, df = (t = window.location.search) => (cf.test(t) || ff.test(t)) && lf.test(t);
async function Pf() {
    Dn.set(!0), Or.set(null);
    try {
        df() ? (await ge.handleRedirectCallback(), Cn.set(await ge.isAuthenticated()), await Ui()) : (await ge.checkSession(), Cn.set(await ge.isAuthenticated()), await Ui())
    } catch {
        Or.set("Error checking auth")
    } finally {
        Dn.set(!1)
    }
}
const hf = ns(`
    query GetCustomerInformation {
        customer: myUser {
            first_name
            last_name
            email
        }
    }
`);
async function Ui() {
    if (!await ge.isAuthenticated()) {
        ir.set(null);
        return
    }
    if (!ir.get()) try {
        const e = await rr.query({
                query: hf
            }),
            {
                customer: r
            } = e.data;
        if (!r) return;
        ir.set({
            firstname: r.first_name,
            lastname: r.last_name,
            email: r.email
        })
    } catch (e) {
        const r = e instanceof Error ? e : new Error(String(e));
        Or.set(r.message)
    }
}
export {
    Cf as C, V as K, gf as L, Wn as O, bf as T, g as _, ge as a, Rf as b, If as c, xf as d, kf as e, _f as f, ns as g, Pf as h, us as i, wf as j, ds as k, Ff as l, os as m, Ef as n, Df as o, X as p, Z as q, Nf as u
};