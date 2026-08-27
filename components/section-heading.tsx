import { Reveal } from "@/lib/ui/reveal";

// The section heading, in ONE place.
//
// It was written three times — in the work grid, the section blocks and the contact section — as
// the same five-class string, and a `Heading` helper existed that two of the three ignored. Type
// is the loudest thing on this site; three copies of it is three chances for the art direction to
// drift by a tracking value nobody notices until they are side by side.
//
// It lives in `components/`, not `lib/ui/`, on purpose: the type treatment IS this template's art
// direction. UTILITARIAN CONFIDENT here — heavier weight, tighter tracking and a smaller top
// size than the editorial template, because this page is scanned rather than read.
export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <Reveal>
            <div className="max-w-2xl">
                <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.5rem)] leading-[1.08] font-bold tracking-[-0.025em] text-balance text-fg">
                    {title}
                </h2>
                {subtitle ? (
                    <p className="mt-4 text-lg leading-relaxed text-fg-muted">{subtitle}</p>
                ) : null}
            </div>
        </Reveal>
    );
}
