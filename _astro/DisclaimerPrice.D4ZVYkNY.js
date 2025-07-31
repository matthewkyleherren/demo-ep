import {
    j as e
} from "./jsx-runtime.DAW3kIbQ.js";
import {
    r as t
} from "./index.l3JPYhe8.js";
import {
    C as n
} from "./index.DPypXweU.js";
import "./_commonjsHelpers.Cpj98o6Y.js";
const m = () => {
    const [s, i] = t.useState(!1), a = () => {
        i(!1)
    }, r = l => {
        l?.detail && i(l.detail?.open)
    };
    return t.useEffect(() => (s ? document.body.classList.add("c-modal-open") : document.body.classList.remove("c-modal-open"), () => {
        document.body.classList.remove("c-modal-open")
    }), [s]), t.useEffect(() => (document.addEventListener("disclaimer-price-event", r), () => {
        document.removeEventListener("disclaimer-price-event", r)
    }), []), e.jsxs("div", {
        className: "u-relative u-z-highest print:u-hidden",
        "data-lenis-prevent": !0,
        children: [e.jsx("div", {
            className: `u-transition-all u-duration-300 before:u-fixed before:u-inset-0 before:u-h-full before:u-bg-black/75 before:u-transition-all before:u-duration-300 ${s?"u-visible u-opacity-100":"u-invisible u-opacity-0"}`,
            onClick: () => a()
        }), e.jsxs("div", {
            className: `u-fixed u-z-highest u-mx-auto u-max-h-screen u-w-full u-overflow-y-auto u-rounded-t-xl u-bg-white u-px-4 u-pb-[50px] u-pt-[18px] u-transition-all u-delay-100 u-duration-300 sm:u-left-1/2 sm:u-top-1/2 sm:u-max-w-[420px] sm:-u-translate-x-1/2 sm:-u-translate-y-1/2 sm:u-rounded-lg sm:u-pb-2.5 sm:u-pt-3 to-sm:u-rounded-b-none ${s?"u-visible u-scale-100 u-opacity-100 to-sm:u-bottom-0":"u-invisible u-opacity-0 sm:u-scale-90 to-sm:-u-bottom-full"}`,
            children: [e.jsx("div", {
                className: "u-absolute u-right-4 u-top-4 u-cursor-pointer [&_svg]:u-block [&_svg]:u-size-5",
                onClick: () => a(),
                children: e.jsx(n, {})
            }), e.jsx("h3", {
                className: "c-h3 to-sm:u-mb-2",
                children: "Pricing"
            }), e.jsx("div", {
                className: "u-break-words",
                children: e.jsxs("ul", {
                    className: "u-pb-[8.8px] u-pt-0.5 sm:u-px-6 sm:u-pt-3 to-sm:u-pl-6",
                    children: [e.jsx("li", {
                        className: "c-body-reg u-list-disc",
                        children: "Traveler: $50,000 with incentives"
                    }), e.jsx("li", {
                        className: "c-body-reg u-list-disc",
                        children: "Terra: $51,500 with incentives"
                    }), e.jsx("li", {
                        className: "c-body-reg u-list-disc",
                        children: "Pricing is for U.S. market only. Entry model price reflects targeted starting price with incentives. Available incentives at the time of sale may vary based on current federal, state, and local offerings. These incentives are subject to change without notice and may impact the final purchase price. Price is subject to change and excludes taxes, title, license and other fees, as well as certain premium features and add-ons."
                    }), e.jsx("li", {
                        className: "c-body-reg u-list-disc",
                        children: "Pricing is for U.S. market only. Retail price reflects lowest starting Manufacturer Suggested Retail Price (MSRP), and does not include any federal, state and/or local tax subsidies or incentives that may be available. Price is subject to change and excludes taxes, title, license and other fees, as well as certain premium features and add-ons."
                    })]
                })
            })]
        })]
    })
};
export {
    m as
    default
};