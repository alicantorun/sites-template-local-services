import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Areas } from "@/components/areas";
import { Hours } from "@/components/hours";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Services />
                <Areas />
                <Hours />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
