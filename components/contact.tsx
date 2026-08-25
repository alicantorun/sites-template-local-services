import { site } from "@/lib/content";
import { LeadForm } from "@/components/lead-form";

// Call and email stay FIRST and biggest: a trades customer phones, and the form is the
// out-of-hours path rather than a replacement for the number.
//
// The form is real now. This section previously showed only the phone and email, deliberately,
// because the portal's lead-capture endpoint did not exist and "a submit that goes nowhere" is
// worse than no form. The endpoint ships, so the form does.
export function Contact() {
    const c = site.contact;
    return (
        <section id="contact" className="border-t border-neutral-200 bg-neutral-900">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {c.title}
                </h2>
                <p className="mt-3 max-w-xl text-neutral-300">{c.subtitle}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href={`tel:${site.business.phoneHref}`}
                        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                    >
                        Call {site.business.phone}
                    </a>
                    <a
                        href={`mailto:${site.business.email}`}
                        className="rounded-full border border-neutral-600 px-6 py-3 text-sm font-semibold text-neutral-100 transition-colors hover:border-white"
                    >
                        Email us
                    </a>
                </div>
                <p className="mt-6 text-sm text-neutral-400">
                    {site.business.emergency}
                </p>
                <div className="mt-10 max-w-md border-t border-neutral-700 pt-8">
                    <p className="mb-4 text-sm text-neutral-300">
                        Or leave your details and we&apos;ll come back to you.
                    </p>
                    <LeadForm
                        source="contact"
                        submitLabel="Send enquiry"
                        inputClassName="w-full rounded-lg border border-neutral-600 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 transition-colors focus:border-brand focus:outline-none"
                        buttonClassName="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
                    />
                </div>
            </div>
        </section>
    );
}
