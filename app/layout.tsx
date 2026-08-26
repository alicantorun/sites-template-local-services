import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/content";
import "./globals.css";

// SEO metadata is built from the content contract through ONE helper, so a content edit moves the
// tab title, the canonical URL and the share card together. buildMetadata is not a convenience:
// Next REPLACES a parent `openGraph` object wholesale rather than merging it, so every page has to
// carry the complete block, and one builder is what stops a page shipping half of one.
//
// The suffix is `business.tagline`. It used to be `business.trade`, a field only this template had
// — which is the exact drift the shared `Site` contract exists to stop.
export const metadata: Metadata = buildMetadata({
    title: `${site.business.name} · ${site.business.tagline}`,
    description: site.hero.subtitle,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-white text-neutral-900 antialiased">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
