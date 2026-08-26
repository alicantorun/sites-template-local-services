import type { Site } from "@/lib/site-schema";

// The content contract: every business fact in ONE typed module. "Change my phone number" is a
// one-line edit here, and the whole site plus its SEO metadata read from it. The agent edits this
// for content changes and the components for structure and design.
//
// The SHAPE is not this file's to choose. It comes from `Site` in lib/site-schema.ts, which is
// identical in every template, and the annotation below is what enforces it: a renamed field or a
// dropped section fails `pnpm typecheck` here rather than rendering blank in front of a customer.
// Sections this template does not use are simply absent — that is what the optional markers on
// `Site` are for, and every component handles the absence.
//
// This template is for a business people call or visit: what you do, where you do it, when you
// are open, and how to reach you. Hours and service areas are first-class because they are the
// two questions a local customer actually has.

// The number is stated ONCE and read three times: the display form, the tel: link in the nav and
// contact section, and the hero's primary action. It was hardcoded a third time inside that hero
// href, which is exactly how a site ends up still dialing a line the business gave up two years
// ago — the display number gets updated and the button does not.
const PHONE_HREF = "+442079460321";

export const site: Site = {
    business: {
        name: "Halstead & Co.",
        // Carries the trade, because it is the line under the name in the nav and the suffix in
        // the page title. Someone who lands here should know what we do before they scroll.
        tagline: "Plumbing & heating. Fixed properly, first time.",
        email: "hello@halstead.example",
        phone: "+44 20 7946 0321",
        // Rendered as a tel: link, so it must stay dialable — digits and a leading + only.
        phoneHref: PHONE_HREF,
        location: "Unit 4, Bevan Yard, London E8",
    },
    nav: [
        { label: "Services", href: "#services" },
        { label: "Areas", href: "#areas" },
        { label: "Hours", href: "#hours" },
        { label: "Contact", href: "#contact" },
    ],
    hero: {
        eyebrow: "Family-run since 2009 · East London",
        title: "Plumbing and heating you can actually get hold of.",
        subtitle:
            "Gas Safe registered engineers covering East and North London. Clear quotes before we start, and we tidy up after ourselves.",
        primaryCta: { label: "Call now", href: `tel:${PHONE_HREF}` },
        secondaryCta: { label: "Request a quote", href: "#contact" },
        stats: [
            { value: "Gas Safe", label: "registered" },
            { value: "15 yrs", label: "on the tools" },
            { value: "4.9★", label: "from 300+ reviews" },
        ],
    },
    services: {
        title: "What we do",
        subtitle:
            "No call-out charge inside our service area. Quotes are fixed before any work starts.",
        items: [
            {
                name: "Boiler repair & servicing",
                price: "from £90",
                desc: "Annual services, breakdowns and landlord certificates. Most repairs done same day.",
            },
            {
                name: "Leaks & emergency plumbing",
                price: "from £120",
                desc: "Burst pipes, blocked drains and anything actively getting worse. 24h call-out.",
            },
            {
                name: "Bathroom & kitchen fitting",
                price: "quoted per job",
                desc: "Full installs and replacements, coordinated with your tiler and electrician.",
            },
            {
                name: "Radiators & underfloor",
                price: "from £180",
                desc: "New radiators, power flushing, balancing and underfloor heating repairs.",
            },
        ],
    },
    areas: {
        title: "Where we work",
        subtitle: "If you are just outside these, call anyway — we often can.",
        items: [
            "Hackney",
            "Islington",
            "Tower Hamlets",
            "Walthamstow",
            "Stoke Newington",
            "Bethnal Green",
            "Dalston",
            "Leyton",
        ],
    },
    hours: {
        title: "Opening hours",
        note: "Emergency call-out runs outside these hours at a higher rate.",
        days: [
            { day: "Monday to Friday", open: "7:30 – 18:00" },
            { day: "Saturday", open: "8:00 – 14:00" },
            { day: "Sunday", open: "Emergencies only" },
            { day: "Bank holidays", open: "Emergencies only" },
        ],
    },
    contact: {
        title: "Request a quote",
        // The old `business.emergency` line ("24h emergency call-out") lives here now. It sat
        // under the call button, and this is the sentence that has to do its job: the section
        // gained a form, and a customer with water coming in must be told to phone instead of
        // typing. Saying it in `hours.note` would have put it a screen away from the decision.
        subtitle:
            "Tell us the job and your postcode. We reply the same working day, usually within a couple of hours. If water is coming in or the heat is off, call rather than write: the 24h emergency call-out line is answered day and night.",
    },
};
