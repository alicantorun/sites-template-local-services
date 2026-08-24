import { site } from "@/lib/content";

export function Hours() {
    const h = site.hours;
    return (
        <section id="hours" className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {h.title}
                    </h2>
                    <p className="mt-3 max-w-md text-neutral-600">{h.note}</p>
                    <p className="mt-6 text-sm text-neutral-500">
                        {site.business.address}
                    </p>
                </div>
                <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
                    {h.days.map((d) => (
                        <div
                            key={d.day}
                            className="flex items-center justify-between gap-4 py-3"
                        >
                            <dt className="text-sm font-medium text-neutral-800">
                                {d.day}
                            </dt>
                            <dd className="text-sm text-neutral-600">{d.open}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
