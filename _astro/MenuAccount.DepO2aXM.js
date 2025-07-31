import {
    j as r
} from "./jsx-runtime.DAW3kIbQ.js";
import {
    u as e
} from "./index.DsJgZqVP.js";
import {
    $ as s
} from "./reactive.DqYsbDQg.js";
import {
    l as o,
    b as c
} from "./auth0.lVSljASH.js";
import "./index.l3JPYhe8.js";
import "./_commonjsHelpers.Cpj98o6Y.js";
import "./index.CJ4e7_2M.js";
import "./index.BSdFiPHn.js";
import "./clsx.B-dksMZM.js";
const l = ({
        items: t,
        children: i
    }) => r.jsxs("ul", {
        className: "c-primary-nav",
        children: [t.map((n, a) => r.jsx("li", {
            className: "c-primary-nav_item",
            children: r.jsx("a", {
                href: n.href,
                className: "c-primary-nav_link",
                children: n.label
            })
        }, a)), i && r.jsx("li", {
            className: "c-primary-nav_item",
            children: i
        })]
    }),
    N = () => {
        const t = e(s),
            i = () => t ? [{
                label: "Account",
                href: "/account"
            }, {
                label: "Profile",
                href: "/profile"
            }] : [],
            n = r.jsx("button", {
                onClick: () => o(),
                className: "c-primary-nav_link",
                children: "Sign out"
            }),
            a = r.jsx("button", {
                onClick: () => c(),
                className: "c-primary-nav_link",
                children: "Sign In"
            });
        return r.jsx("div", {
            className: "c-menu_account",
            children: r.jsx(l, {
                items: i(),
                children: t ? n : a
            })
        })
    };
export {
    N as
    default
};