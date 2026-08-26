import { site } from "@/lib/content";

export function Services() {
    const s = site.services;
    // The section is optional in the content contract, so absence renders as absence rather than
    // as an empty heading over an empty grid.
    if (!s) return null;
    return (
        <section id="services" className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{s.title}</h2>
            {s.subtitle && <p className="mt-3 max-w-2xl text-neutral-600">{s.subtitle}</p>}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {s.items.map((item) => (
                    <div
                        key={item.name}
                        className="flex flex-col border border-neutral-200 p-6 transition-colors hover:border-neutral-400"
                    >
                        <div className="flex items-baseline justify-between gap-4">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            {item.price && (
                                <span className="shrink-0 text-sm font-semibold text-brand">
                                    {item.price}
                                </span>
                            )}
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
