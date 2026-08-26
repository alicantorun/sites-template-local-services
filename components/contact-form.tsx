"use client";

import type { FormEvent } from "react";
import { useContact } from "@/lib/hooks/use-contact";

// The out-of-hours path, never a replacement for the phone. It renders BELOW the number in
// components/contact.tsx and stays deliberately quieter — a trades customer with a leak should
// reach for the phone, and a form styled to compete with it would cost them the call.
//
// THREE STATES, kept apart. A failure says what went wrong and leaves the typed message in place,
// so nobody retypes it. A pending submit disables the button, so a second click cannot send a
// second enquiry. A success REPLACES the form, because a form still sitting there full of text is
// read as "it did not send". Conflating any two of these is how a site quietly loses leads.
const field =
    "w-full border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm text-white " +
    "placeholder:text-neutral-500 focus:border-brand focus:outline-none";

export function ContactForm() {
    const contact = useContact();

    if (contact.isSuccess) {
        return (
            <div
                role="status"
                className="border border-neutral-700 bg-neutral-800 px-6 py-8 text-sm text-neutral-200"
            >
                <p className="text-base font-semibold text-white">Thanks, that reached us.</p>
                <p className="mt-2 text-neutral-400">
                    We reply the same working day. If it cannot wait that long, call the number
                    above.
                </p>
                <button
                    type="button"
                    onClick={() => contact.reset()}
                    className="mt-4 text-xs font-medium text-neutral-300 underline underline-offset-4 hover:text-white"
                >
                    Send another
                </button>
            </div>
        );
    }

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const read = (key: string) => String(form.get(key) ?? "").trim();
        contact.mutate({
            name: read("name"),
            email: read("email"),
            // Empty rather than absent would pass the optional validator and then be stored as a
            // phone number that is not one. Send the field only when it holds something.
            phone: read("phone") || undefined,
            message: read("message"),
            company: read("company") || undefined,
        });
    }

    return (
        <form onSubmit={onSubmit} className="relative space-y-4" noValidate>
            {contact.isError && (
                // role="alert" so a screen reader is told, rather than the message only appearing
                // for people who happen to be looking at this part of the page.
                <p
                    role="alert"
                    className="border border-red-400/40 bg-red-950/40 px-4 py-3 text-sm text-red-200"
                >
                    {contact.error.message}
                </p>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="text-xs font-medium text-neutral-400">
                        Your name
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        maxLength={120}
                        className={`mt-1.5 ${field}`}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-xs font-medium text-neutral-400">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={320}
                        className={`mt-1.5 ${field}`}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="text-xs font-medium text-neutral-400">
                    Phone <span className="text-neutral-600">(optional)</span>
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={40}
                    className={`mt-1.5 ${field}`}
                />
            </div>

            <div>
                <label htmlFor="message" className="text-xs font-medium text-neutral-400">
                    The job, and your postcode
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    maxLength={4000}
                    placeholder="Boiler not firing, E5. Any time Thursday."
                    className={`mt-1.5 ${field}`}
                />
            </div>

            {/* The honeypot the route already checks for. Positioned off-screen rather than
                display:none on purpose: a bot that skips hidden inputs still fills this one, and
                aria-hidden + tabIndex keep it out of the way of every real visitor. Renaming it
                breaks the check in app/api/contact/route.ts silently — it would simply stop
                catching anything. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <button
                type="submit"
                disabled={contact.isPending}
                className="rounded-full border border-neutral-600 px-6 py-3 text-sm font-semibold text-neutral-100 transition-colors hover:border-white disabled:cursor-not-allowed disabled:opacity-50"
            >
                {contact.isPending ? "Sending…" : "Send enquiry"}
            </button>
        </form>
    );
}
