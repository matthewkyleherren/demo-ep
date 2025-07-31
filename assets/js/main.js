// Main JavaScript file - extracted from inline scripts

// Session Management
(function() {
    // Use existing or create new session ID
    let sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
        sessionId = '74c07181-47aa-4a29-8c33-9c0ed870467c';
        sessionStorage.setItem('session_id', sessionId);
    }

    // Store for use in this page
    window.sessionId = sessionId;
    window.requestId = 'e0b3435d-a537-4de1-8667-27f1ceac403e';

    // Apply session tracking to XHR requests
    const originalXhrOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(...args) {
        const method = args[0];
        const url = args[1];
        const result = originalXhrOpen.apply(this, args);

        // Only add session header for same-origin requests
        if (isSameOriginRequest(url) && window.sessionId) {
            this.setRequestHeader("X-Session-ID", window.sessionId);
        }
        return result;
    };

    // Apply session tracking to fetch requests
    const originalFetch = window.fetch;
    window.fetch = function(resource, options) {
        options = options || {};
        options.headers = options.headers || {};

        // Check if this is a same-origin request before adding session header
        let isSameOrigin = false;

        if (typeof resource === 'string') {
            isSameOrigin = isSameOriginRequest(resource);
        } else if (resource instanceof URL) {
            isSameOrigin = isSameOriginRequest(resource.href);
        } else if (resource instanceof Request) {
            isSameOrigin = isSameOriginRequest(resource.url);
        }

        // Only add session header for same-origin requests
        if (isSameOrigin && window.sessionId) {
            if (options.headers instanceof Headers) {
                options.headers.set("X-Session-ID", window.sessionId);
            } else {
                options.headers["X-Session-ID"] = window.sessionId;
            }
        }

        return originalFetch.call(this, resource, options);
    };

    // Fix anchor tags with protocol-relative URLs
    document.addEventListener('DOMContentLoaded', function() {
        // Process all anchor tags on the page
        document.querySelectorAll('a').forEach(function(anchor) {
            // Get the original click handler if any
            const originalClickHandler = anchor.onclick;

            // Add our handler to process clicks on anchor tags
            anchor.addEventListener('click', function(event) {
                const href = this.getAttribute('href');

                // If it's a protocol-relative URL, don't add any custom headers
                if (href && (href.startsWith('//') || href.includes('://') && !isSameOriginRequest(href))) {
                    // Let default browser behavior handle it without our XHR/fetch overrides
                    return;
                }
            });
        });
    });

    /**
     * Checks if a given URL is same-origin with the current page.
     * @param {string} urlString The URL to check.
     * @returns {boolean} True if the URL is same-origin, false otherwise.
     */
    function isSameOriginRequest(urlString) {
        try {
            const currentOrigin = window.location.origin;

            // Handle relative URLs - they're always same origin
            if (urlString.startsWith('/') && !urlString.startsWith('//')) {
                return true;
            }

            // Protocol-relative URLs (//example.com/...) need special handling
            if (urlString.startsWith('//')) {
                const protocol = window.location.protocol;
                const fullUrl = protocol + urlString;
                const targetOrigin = new URL(fullUrl).origin;
                return targetOrigin === currentOrigin;
            }

            // For absolute URLs, compare origins
            if (urlString.includes('://')) {
                const targetOrigin = new URL(urlString).origin;
                return targetOrigin === currentOrigin;
            }

            // For URLs without protocol or leading slash, they're relative and same-origin
            return true;
        } catch (e) {
            console.warn("Error checking origin for URL: " + urlString, e);
            // If there's an error parsing the URL, assume it's cross-origin to be safe
            return false;
        }
    }
})();

// Astro Framework Scripts
(function() {
    var e = async t => {
        await (await t())()
    };
    (self.Astro || (self.Astro = {})).only = e;
    window.dispatchEvent(new Event("astro:only"));
})();

(function() {
    var A = Object.defineProperty;
    var g = (i, o, a) => o in i ? A(i, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : i[o] = a;
    var d = (i, o, a) => g(i, typeof o != "symbol" ? o + "" : o, a);
    {
        let i = {
                0: t => m(t),
                1: t => a(t),
                2: t => new RegExp(t),
                3: t => new Date(t),
                4: t => new Map(a(t)),
                5: t => new Set(a(t)),
                6: t => BigInt(t),
                7: t => new URL(t),
                8: t => new Uint8Array(t),
                9: t => new Uint16Array(t),
                10: t => new Uint32Array(t),
                11: t => 1 / 0 * t
            },
            o = t => {
                let [l, e] = t;
                return l in i ? i[l](e) : void 0
            },
            a = t => t.map(o),
            m = t => typeof t != "object" || t === null ? t : Object.fromEntries(Object.entries(t).map(([l, e]) => [l,
                o(e)
            ]));
        class y extends HTMLElement {
            constructor() {
                super(...arguments);
                d(this, "Component");
                d(this, "hydrator");
                d(this, "hydrate", async () => {
                    var b;
                    if (!this.hydrator || !this.isConnected) return;
                    let e = (b = this.parentElement) == null ? void 0 : b.closest("astro-island[ssr]");
                    if (e) {
                        e.addEventListener("astro:hydrate", this.hydrate, {
                            once: !0
                        });
                        return
                    }
                    let c = this.querySelectorAll("astro-slot"),
                        n = {},
                        h = this.querySelectorAll("template[data-astro-template]");
                    for (let r of h) {
                        let s = r.closest(this.tagName);
                        s != null && s.isSameNode(this) && (n[r.getAttribute("data-astro-template") || "default"] = r
                            .innerHTML, r.remove())
                    }
                    for (let r of c) {
                        let s = r.closest(this.tagName);
                        s != null && s.isSameNode(this) && (n[r.getAttribute("name") || "default"] = r.innerHTML)
                    }
                    let p;
                    try {
                        p = this.hasAttribute("props") ? m(JSON.parse(this.getAttribute("props"))) : {}
                    } catch (r) {
                        let s = this.getAttribute("component-url") || "<unknown>",
                            v = this.getAttribute("component-export");
                        throw v && (s += ` (export ${v})`), console.error(
                            `[hydrate] Error parsing props for component ${s}`, this.getAttribute("props"), r), r
                    }
                    let u;
                    await this.hydrator(this)(this.Component, p, n, {
                        client: this.getAttribute("client")
                    }), this.removeAttribute("ssr"), this.dispatchEvent(new CustomEvent("astro:hydrate"))
                });
                d(this, "unmount", () => {
                    this.isConnected || this.dispatchEvent(new CustomEvent("astro:unmount"))
                })
            }
            disconnectedCallback() {
                document.removeEventListener("astro:after-swap", this.unmount), document.addEventListener(
                    "astro:after-swap", this.unmount, {
                        once: !0
                    })
            }
            connectedCallback() {
                if (!this.hasAttribute("await-children") || document.readyState === "interactive" || document
                    .readyState === "complete") this.childrenConnectedCallback();
                else {
                    let e = () => {
                            document.removeEventListener("DOMContentLoaded", e), c.disconnect(), this
                                .childrenConnectedCallback()
                        },
                        c = new MutationObserver(() => {
                            var n;
                            ((n = this.lastChild) == null ? void 0 : n.nodeType) === Node.COMMENT_NODE && this.lastChild
                                .nodeValue === "astro:end" && (this.lastChild.remove(), e())
                        });
                    c.observe(this, {
                        childList: !0
                    }), document.addEventListener("DOMContentLoaded", e)
                }
            }
            async childrenConnectedCallback() {
                let e = this.getAttribute("before-hydration-url");
                e && await import(e), this.start()
            }
            async start() {
                let e = JSON.parse(this.getAttribute("opts")),
                    c = this.getAttribute("client");
                if (Astro[c] === void 0) {
                    window.addEventListener(`astro:${c}`, () => this.start(), {
                        once: !0
                    });
                    return
                }
                try {
                    await Astro[c](async () => {
                        let n = this.getAttribute("renderer-url"),
                            [h, {
                                default: p
                            }] = await Promise.all([import(this.getAttribute("component-url")), n ? import(n) : () =>
                                () => {}
                            ]),
                            u = this.getAttribute("component-export") || "default";
                        if (!u.includes(".")) this.Component = h[u];
                        else {
                            this.Component = h;
                            for (let f of u.split(".")) this.Component = this.Component[f]
                        }
                        return this.hydrator = p, this.hydrate
                    }, e, this)
                } catch (n) {
                    console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`, n)
                }
            }
            attributeChangedCallback() {
                this.hydrate()
            }
        }
        d(y, "observedAttributes", ["props"]), customElements.get("astro-island") || customElements.define(
            "astro-island", y)
    }
})();

// Video Poster Script
function setupVideoPoster() {
    const videos = document.querySelectorAll('video[data-poster]');
    videos.forEach(video => {
        if (video.dataset.poster) {
            const posterValues = JSON.parse(video.dataset.poster);

            if (window.matchMedia('(orientation: portrait)').matches && posterValues.portrait) {
                video.setAttribute('poster', posterValues.portrait);
            } else {
                video.setAttribute('poster', posterValues.landscape);
            }
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setupVideoPoster();
});