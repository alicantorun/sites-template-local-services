import { Hero } from "@/components/hero";
import { WorkGrid } from "@/components/work-grid";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Areas } from "@/components/areas";
import { Hours } from "@/components/hours";
import { Contact } from "@/components/contact";

// Ordered for how a trades customer reads: what you do, whether you cover them, proof you have
// done it, when you are open. Recent work is capped at three and sends people to /work for the
// rest — a home page that shows everything gives a visitor no reason to go anywhere.
export default function Home() {
    return (
            <main id="main">
                <Hero />
                <Services />
                <Areas />
                <WorkGrid limit={3} />
                <Hours />
                <Testimonials />
                <About />
                <Contact />
            </main>
    );
}
