import { site } from "@/lib/content";

export function Hours() {
    const h = site.hours;
    if (!h) return null;
    return (
        <section id="hours" className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{h.title}</h2>
                    {h.note && <p className="mt-3 max-w-md text-neutral-600">{h.note}</p>}
                    {/* Was `business.address`; the shared contract calls it `location`, which is
                        free text — a street address here, a city on a template that has no yard. */}
                    {site.business.location && (
                        <p className="mt-6 text-sm text-neutral-500">{site.business.location}</p>
                    )}
                </div>
                <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
                    {h.days.map((d) => (
                        <div key={d.day} className="flex items-center justify-between gap-4 py-3">
                            <dt className="text-sm font-medium text-neutral-800">{d.day}</dt>
                            <dd className="text-sm text-neutral-600">{d.open}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
