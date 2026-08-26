import { site } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";

// Call and email stay FIRST and biggest: a trades customer phones, and the form is the
// out-of-hours path rather than a replacement for the number.
//
// So the number keeps the full width and the loudest button on the page, and the form sits under
// it in a narrow column with a quieter heading. That ordering is the point of the section, not a
// layout preference — reversing it would put a same-working-day reply in front of someone whose
// kitchen is filling with water.
export function Contact() {
    const c = site.contact;
    const { phone, phoneHref, email } = site.business;
    return (
        <section id="contact" className="border-t border-neutral-200 bg-neutral-900">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {c.title}
                </h2>
                <p className="mt-3 max-w-xl text-neutral-300">{c.subtitle}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                    {phone && phoneHref && (
                        <a
                            href={`tel:${phoneHref}`}
                            className="rounded-full bg-brand px-8 py-4 text-base font-bold text-white transition-colors hover:bg-brand-dark"
                        >
                            Call {phone}
                        </a>
                    )}
                    <a
                        href={`mailto:${email}`}
                        className="rounded-full border border-neutral-600 px-6 py-3 text-sm font-semibold text-neutral-100 transition-colors hover:border-white"
                    >
                        Email us
                    </a>
                </div>
                <div className="mt-14 max-w-xl border-t border-neutral-800 pt-10">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                        Or leave the details
                    </h3>
                    <p className="mt-2 mb-6 text-sm text-neutral-500">
                        Best for a quote you do not need answering tonight.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
