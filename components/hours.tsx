import { site } from "@/lib/content";
import { Container, Section } from "@/lib/ui/container";
import { Reveal, Stagger, StaggerItem } from "@/lib/ui/reveal";
import { SectionHeading } from "@/components/section-heading";

// Opening hours, as a table with aligned numerals.
//
// `tabular-nums` is doing real work: proportional digits make a column of times look ragged, and
// a ragged column of times is harder to scan than a tidy one — which is the whole job of this
// section.
export function Hours() {
    const h = site.hours;
    if (!h) return null;
    return (
        <Section id="hours">
            <Container>
                <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
                    <SectionHeading title={h.title} />
                    <div>
                        <Stagger className="divide-y divide-line border-y border-line" gap="base">
                            {h.days.map((d) => (
                                <StaggerItem
                                    key={d.day}
                                    travel="sm"
                                    className="flex items-baseline justify-between gap-6 py-3.5"
                                >
                                    <span className="font-medium text-fg">{d.day}</span>
                                    <span className="tabular-nums text-fg-muted">{d.open}</span>
                                </StaggerItem>
                            ))}
                        </Stagger>
                        {h.note ? (
                            <Reveal travel="sm">
                                <p className="mt-5 text-sm text-fg-subtle">{h.note}</p>
                            </Reveal>
                        ) : null}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
