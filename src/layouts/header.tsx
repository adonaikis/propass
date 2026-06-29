import Link from "next/link";
import { ArrowUpRight, Search, Sun } from "lucide-react";

const homeNavItems = [
  { label: "Accueil", href: "#top" },
  { label: "À propos", href: "#about" },
  { label: "Chambres", href: "/chambres" },
  { label: "Services", href: "#excellence" },
  { label: "Réservation", href: "/chambres#booking" },
];

const roomNavItems = [
  { label: "Accueil", href: "/" },
  { label: "Chambres", href: "#chambres" },
  { label: "Suite Signature", href: "#signature" },
  { label: "Services", href: "#room-services" },
  { label: "Réservation", href: "#booking" },
];

export default function Header({
  variant = "home",
}: {
  variant?: "home" | "rooms";
}) {
  const navItems = variant === "rooms" ? roomNavItems : homeNavItems;
  const brandHref = variant === "rooms" ? "/" : "#top";
  const bookingHref = variant === "rooms" ? "#booking" : "/chambres#booking";

  return (
    <header
      data-site-header
      className="mx-auto flex h-14 w-[calc(100%-32px)] max-w-[1180px] items-center justify-between gap-3 bg-white text-black"
    >
      <Link
        className="flex shrink-0 items-center gap-2 text-[17px] font-semibold"
        href={brandHref}
      >
        <Sun className="size-5" strokeWidth={2} aria-hidden="true" />
        <span>Propass</span>
      </Link>

      <nav
        className="hidden shrink-0 items-center gap-6 text-[10px] font-medium min-[860px]:flex"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            data-magnetic="4"
            className="whitespace-nowrap transition-colors hover:text-black/60"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-3">
        <label className="hidden h-9 min-w-0 items-center gap-2 rounded-full bg-zinc-50 px-4 text-[11px] text-zinc-500 md:flex">
          <span className="sr-only">Recherche</span>
          <input
            className="w-32 bg-transparent text-black placeholder:text-zinc-500 outline-none"
            placeholder="Rechercher..."
            type="search"
          />
          <Search
            className="size-3.5 text-black"
            strokeWidth={2.3}
            aria-hidden="true"
          />
        </label>

        <Link
          data-magnetic="7"
          href={bookingHref}
          className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-black pl-5 pr-1.5 text-xs font-semibold whitespace-nowrap text-white transition-colors hover:bg-zinc-800"
        >
          Réserver
          <span className="grid size-6 place-items-center rounded-full bg-white text-black">
            <ArrowUpRight
              className="size-3.5"
              strokeWidth={2.8}
              aria-hidden="true"
            />
          </span>
        </Link>
      </div>
    </header>
  );
}
