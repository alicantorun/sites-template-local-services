import { site } from "@/lib/content";
import { Container, Section } from "@/lib/ui/container";
import { Stagger, StaggerItem } from "@/lib/ui/reveal";
import { SectionHeading } from "@/components/section-heading";

// Where the business actually covers.
//
// A trades customer's first question is "do you come to me", and a site that makes them read an
// About page to find out has already lost them. It is a plain list of names rather than a map:
// people scan for their own area, and a map makes that harder, not easier.
export function Areas() {
    const a = site.areas;
    if (!a) return null;
    return (
        <Section id="areas" className="border-y border-line bg-surface-2">
            <Container>
                <SectionHeading title={a.title} subtitle={a.subtitle} />
                <Stagger className="mt-10 flex flex-wrap gap-2.5" gap="base">
                    {a.items.map((name) => (
                        <StaggerItem key={name} travel="sm">
                            <span className="inline-block rounded-[var(--radius-control)] border border-line bg-surface px-4 py-2 text-sm font-medium text-fg">
                                {name}
                            </span>
                        </StaggerItem>
                    ))}
                </Stagger>
            </Container>
        </Section>
    );
}
