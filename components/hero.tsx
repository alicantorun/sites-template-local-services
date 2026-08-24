import { site } from "@/lib/content";

export function Hero() {
    const h = site.hero;
    return (
        <section className="border-b border-neutral-200 bg-brand-tint">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                    {h.eyebrow}
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                    {h.title}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-700">
                    {h.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href={h.primaryCta.href}
                        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
                    >
                        {h.primaryCta.label}
                    </a>
                    <a
                        href={h.secondaryCta.href}
                        className="rounded-full border border-neutral-400 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-900"
                    >
                        {h.secondaryCta.label}
                    </a>
                </div>
                <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-amber-200 pt-8">
                    {h.trust.map((s) => (
                        <div key={s.label}>
                            <dt className="text-2xl font-bold text-neutral-900">
                                {s.value}
                            </dt>
                            <dd className="text-sm text-neutral-600">{s.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
