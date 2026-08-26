import { site } from "@/lib/content";

export function Footer() {
    return (
        <footer className="bg-neutral-900 pb-12">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-neutral-800 px-6 pt-8 text-sm text-neutral-400">
                <p>
                    © {new Date().getFullYear()} {site.business.name}
                </p>
                {site.business.location && <p>{site.business.location}</p>}
            </div>
        </footer>
    );
}
