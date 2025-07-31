import {
    j as e
} from "./jsx-runtime.DAW3kIbQ.js";
import {
    r as u
} from "./index.l3JPYhe8.js";
import v from "./StripePayment.UcZS3xzM.js";
import {
    C as p
} from "./index.DPypXweU.js";
import "./_commonjsHelpers.Cpj98o6Y.js";
import "./index.D5iyYF_4.js";
import "./InputError.DrRxTOiV.js";
import "./index.yNAdRnty.js";
import "./VehicleEnergyOption.N9liIp9U.js";
import "./auth0.lVSljASH.js";
import "./reactive.DqYsbDQg.js";
import "./index.BSdFiPHn.js";
import "./clsx.B-dksMZM.js";
import "./createLucideIcon.C_SjNh3H.js";
import "./Constant.B9wrUrrZ.js";
import "./Message.BZwHJWoZ.js";
import "./GlobalFunction.Bevo4Wx4.js";
import "./index.Cxecge6t.js";
import "./logo.DpjBDGFl.js";
import "./loader-circle.CU4WZn4J.js";
const g = {
        src: "/_astro/modal-close.CMm3yK_G.svg"
    },
    h = ({
        isOpen: s,
        setWarning: o
    }) => {
        u.useEffect(() => (s ? (document.body.classList.add("c-modal-open"), document.getElementById("description_tag")?.focus()) : document.body.classList.remove("c-modal-open"), () => {
            document.body.classList.remove("c-modal-open")
        }), [s]);
        const r = () => {
                o(!0)
            },
            i = () => {
                o(!1)
            };
        return e.jsx(e.Fragment, {
            children: e.jsxs("div", {
                className: "u-relative u-z-highest",
                "data-lenis-prevent": !0,
                children: [e.jsx("div", {
                    className: `u-bg-black/50 u-transition-all u-duration-300 before:u-fixed before:u-inset-0 before:u-h-full before:u-bg-black/75 before:u-transition-all before:u-duration-300 ${s?"u-visible u-opacity-100":"u-invisible u-opacity-0"}`
                }), e.jsx("div", {
                    className: `u-fixed u-left-1/2 u-top-1/2 u-w-full -u-translate-x-1/2 -u-translate-y-1/2 u-px-2 u-transition-all u-duration-300 ${s?"u-visible u-opacity-100":"u-invisible u-opacity-0"}`,
                    children: s && e.jsxs("div", {
                        id: "description_tag",
                        tabIndex: 0,
                        className: `u-relative u-z-highest u-mx-auto u-w-full u-max-w-[361px] u-rounded-lg u-bg-grey-100 u-px-5 u-pb-4 u-pt-[72px] u-transition-all u-delay-100 u-duration-300 sm:u-max-w-[535px] sm:u-pb-[60px] sm:u-pt-[70px] ${s?"u-visible u-scale-100 u-opacity-100":"u-invisible u-opacity-0"}`,
                        children: [e.jsx("div", {
                            tabIndex: 0,
                            onKeyUp: a => a.key === "Enter" && i(),
                            className: "u-absolute u-right-[19px] u-top-[19px] u-cursor-pointer [&_svg]:u-block [&_svg]:u-size-2.5",
                            onClick: () => i(),
                            children: e.jsx(p, {})
                        }), e.jsx("p", {
                            className: "reservation-exit u-mx-auto u-mb-10 u-w-full u-max-w-[280px] u-text-center sm:u-mb-[38px] sm:u-max-w-[300px]",
                            children: "Your reservation isn’t complete, are you sure you want to exit?"
                        }), e.jsxs("div", {
                            className: "u-flex u-justify-center u-gap-3 u-gap-y-2 u-px-5 to-sm:u-flex-wrap to-sm:u-px-4",
                            children: [e.jsx("button", {
                                type: "button",
                                className: "c-dark-large-button",
                                onClick: () => i(),
                                children: "No, continue reserving"
                            }), e.jsx("button", {
                                type: "button",
                                className: "c-exit-button",
                                onClick: () => r(),
                                children: "Yes, exit"
                            })]
                        })]
                    })
                })]
            })
        })
    },
    G = ({
        stripePK: s
    }) => {
        const [o, r] = u.useState(!1), [i, a] = u.useState(!1), [n, l] = u.useState(!1), [m, x] = u.useState(null), f = () => {
            a(n), n === !1 && r(!1)
        };
        u.useEffect(() => (o ? (document.body.classList.add("c-drawer-open"), document.getElementById("reservation_form_visible")?.focus()) : document.body.classList.remove("c-drawer-open"), () => {
            document.body.classList.remove("c-drawer-open")
        }), [o]);
        const b = t => {
                t && (r(!1), l(!1), m && m.resetForm()), a(!1)
            },
            d = t => {
                t?.detail && r(t?.detail.open)
            },
            c = t => {
                t?.detail && (l(t?.detail.open), x(t?.detail.formik))
            };
        return u.useEffect(() => (document.addEventListener("reservation-modal-event", d), document.addEventListener("reservation-form-event", c), () => {
            document.removeEventListener("reservation-modal-event", d), document.removeEventListener("reservation-form-event", c)
        }), []), e.jsxs("div", {
            className: o ? "u-fixed u-inset-0 u-z-highest" : "print:u-hidden",
            "data-lenis-prevent": !0,
            children: [e.jsxs("div", {
                className: `side-drawer u-fixed u-inset-y-0 u-right-0 u-top-[15%] u-z-highest u-w-screen u-opacity-0 u-transition-all u-duration-500 sm:u-top-2 sm:u-max-w-[650px] sm:u-pl-[60px] md:u-max-w-[850px] md:u-pl-[70px] lg:u-max-w-[1024px] to-sm:!u-inset-x-0 to-sm:u-overflow-x-hidden to-sm:u-overflow-y-scroll to-sm:u-rounded-t-[26px] ${o?"open u-visible u-opacity-100 sm:u-translate-x-0 to-sm:u-translate-y-0":"sm:u-translate-x-full to-sm:u-translate-y-full"}`,
                children: [e.jsx("div", {
                    className: "u-absolute u-left-auto u-top-3.5 u-flex u-pr-2 sm:u-left-0 sm:u-top-0 to-sm:u-right-2",
                    children: e.jsxs("button", {
                        type: "button",
                        className: "closebtn u-z-10 u-size-5 u-p-0 sm:u-size-[50px] sm:u-rounded-lg sm:u-bg-white md:u-size-16 md:u-p-4",
                        id: "closeButton",
                        onClick: f,
                        children: [e.jsx("img", {
                            className: "u-m-auto to-sm:u-hidden",
                            alt: "Close",
                            src: g.src,
                            width: 28,
                            height: 28
                        }), e.jsx(p, {})]
                    })
                }), e.jsx("section", {
                    className: "reserve-form-drawer u-flex u-flex-col u-rounded-lg u-bg-white u-shadow-xl sm:u-h-full sm:u-overflow-y-scroll to-sm:u-rounded-t-[26px]",
                    style: {
                        backgroundImage: "url(https://images.ctfassets.net/bi0eniwfxrs8/3AGRXHp2CBMi6IvLwDPPJO/f6b8badb675c5ff1a8c2bf93b7bb8b4d/community-bg.png)",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    },
                    children: o && e.jsx(v, {
                        stripePK: s
                    })
                })]
            }), e.jsx(h, {
                isOpen: i,
                setWarning: b
            })]
        })
    };
export {
    G as
    default
};