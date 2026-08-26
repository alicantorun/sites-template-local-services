import { site } from "@/lib/content";

// "Do you cover my area?" is the first question a local customer asks, so it gets its own
// section rather than a line in the footer.
export function Areas() {
    const a = site.areas;
    if (!a) return null;
    return (
        <section id="areas" className="border-y border-neutral-200 bg-neutral-50">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{a.title}</h2>
                {a.subtitle && <p className="mt-3 max-w-2xl text-neutral-600">{a.subtitle}</p>}
                <ul className="mt-8 flex flex-wrap gap-2">
                    {a.items.map((area) => (
                        <li
                            key={area}
                            className="rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-sm text-neutral-700"
                        >
                            {area}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
