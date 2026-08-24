import { site } from "@/lib/content";

// A local trade's nav carries the phone number, because calling is the primary action.
export function Nav() {
    return (
        <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
                <a href="#" className="flex min-w-0 flex-col leading-tight">
                    <span className="truncate text-base font-bold tracking-tight">
                        {site.business.name}
                    </span>
                    <span className="truncate text-xs text-neutral-500">
                        {site.business.trade}
                    </span>
                </a>
                <nav className="hidden gap-6 md:flex">
                    {site.nav.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>
                <a
                    href={`tel:${site.business.phoneHref}`}
                    className="shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                    {site.business.phone}
                </a>
            </div>
        </header>
    );
}
