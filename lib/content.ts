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
        { label: "Services", href: "/services" },
        { label: "Recent work", href: "/work" },
        { label: "Prices", href: "/pricing" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ],
    hero: {
        eyebrow: "Family-run since 2009 · East London",
        title: "Plumbing and heating you can actually get hold of.",
        subtitle:
            "Gas Safe registered engineers covering East and North London. Clear quotes before we start, and we tidy up after ourselves.",
        primaryCta: { label: "Call now", href: `tel:${PHONE_HREF}` },
        secondaryCta: { label: "Request a quote", href: "/contact" },
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
    work: {
        title: "Recent work",
        subtitle: "A few jobs from the last few months. Prices are what the customer actually paid.",
        projects: [
            {
                slug: "victorian-terrace-rewire",
                name: "Full rewire, Victorian terrace",
                kind: "Rewire · Hackney",
                year: "2026",
                blurb:
                    "A three-bedroom terrace on the original 1960s wiring. Ten days, family living in it throughout, no room without power overnight.",
                detail: {
                    summary:
                        "A full rewire of an occupied three-bedroom terrace, done a floor at a time so nobody slept without power.",
                    role: "Full rewire and consumer unit",
                    services: ["Rewire", "Consumer unit", "Certification"],
                    body: [
                        "The house still had a mix of 1960s rubber and some 1980s patching that had been buried in the plaster. A rewire is disruptive in any case; the difference here was that the family had nowhere else to be, so we worked a floor at a time and made sure every bedroom had power by the evening.",
                        "The consumer unit went in on day two rather than day ten, which is not the fastest way to do it but means the protection is modern from the start of the job rather than the end.",
                        "Ten working days, certified and signed off. The plasterer followed us room by room.",
                    ],
                    outcome: [
                        { value: "10 days", label: "start to certificate" },
                        { value: "0 nights", label: "without power" },
                    ],
                },
            },
            {
                slug: "cafe-kitchen-fitout",
                name: "Café kitchen fit-out",
                kind: "Commercial · Dalston",
                year: "2025",
                blurb:
                    "Power and lighting for a new kitchen on a fixed opening date. Finished on the Friday, they opened the Monday.",
                detail: {
                    summary: "A commercial kitchen fit-out against a fixed opening date that could not move.",
                    role: "Power, lighting, certification",
                    services: ["Commercial", "Lighting", "Certification"],
                    body: [
                        "Everything about this job was the date. The equipment list changed twice while we were on site, which is normal, and the opening did not move, which is also normal.",
                        "We ran the containment for more circuits than the first drawing needed. It cost a little more on the day and meant the second equipment change was an afternoon rather than a week.",
                    ],
                    outcome: [{ value: "Opened", label: "on the planned date" }],
                },
            },
            {
                slug: "landlord-safety-checks",
                name: "Landlord safety checks",
                kind: "EICR · Across East London",
                year: "2025",
                blurb:
                    "Fourteen flats across four buildings, inspected and reported inside a fortnight, with remedial work priced separately so nothing was bundled.",
            },
        ],
    },
    pricing: {
        title: "What things cost",
        subtitle:
            "Published so you can budget before you call. Every job is quoted properly after we have seen it.",
        tiers: [
            {
                name: "Call-out",
                price: "£85",
                cadence: "first hour",
                blurb: "Diagnosis and small repairs. Most faults are sorted inside the hour.",
                features: ["Includes the first hour", "£45 each hour after", "No charge if we cannot help"],
            },
            {
                name: "Day rate",
                price: "£380",
                cadence: "per day",
                blurb: "Planned work — extra circuits, lighting, consumer units, small installs.",
                features: [
                    "8am to 4pm, one electrician",
                    "Materials at cost plus 10%",
                    "Certificates included",
                    "Fixed price once we have seen it",
                ],
                featured: true,
                cta: { label: "Get a quote", href: "/contact" },
            },
            {
                name: "EICR",
                price: "£180",
                cadence: "per property",
                blurb: "Landlord safety inspection and report, usually same week.",
                features: ["Up to 10 circuits", "Report within 48 hours", "Remedials priced separately"],
            },
        ],
        note: "Prices include VAT. Evenings and weekends are the same rate — we do not charge more because it is inconvenient for you.",
    },
    testimonials: {
        title: "What customers say",
        items: [
            {
                quote:
                    "They rewired the whole house with us living in it and we never once went to bed without power. I still do not know how.",
                name: "Helen M.",
                role: "Hackney",
            },
            {
                quote: "Quoted on the Tuesday, started the Monday, finished when they said. Rare.",
                name: "Dan O.",
                role: "Café owner, Dalston",
            },
            {
                quote:
                    "They told me the fault was the appliance and not the wiring, and did not charge me. That is why I have used them since.",
                name: "Ray P.",
                role: "Leyton",
            },
        ],
    },
    faq: {
        title: "Common questions",
        items: [
            {
                q: "How quickly can you come out?",
                a: "Usually within two working days, same day for anything unsafe. Call rather than email if it is urgent.",
            },
            {
                q: "Do you charge for a quote?",
                a: "No. We will look at the job and price it properly, and there is no charge if you decide not to go ahead.",
            },
            {
                q: "Are you registered?",
                a: "Yes — every job is certified and notified where it needs to be, and the certificate comes with the invoice rather than weeks later.",
            },
            {
                q: "Do you work evenings and weekends?",
                a: "Yes, at the same rate. We do not charge more because the time is inconvenient for you.",
            },
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
