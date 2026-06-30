"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Moon, Search, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about-us" },
  { label: "Chambres", href: "/chambres" },
  { label: "Services", href: "/services" },
  { label: "Réservation", href: "/reservation" },
  { label: "FAQ", href: "/faqs" },
];

export default function Header() {
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const themeTimer = useRef<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [darkSection, setDarkSection] = useState(false);
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.classList.contains("dark") ? "dark" : "light");

    const syncTheme = (event: StorageEvent) => {
      if (event.key !== "propass-theme" || !event.newValue) return;
      const nextTheme: Theme = event.newValue === "dark" ? "dark" : "light";
      root.classList.toggle("dark", nextTheme === "dark");
      root.style.colorScheme = nextTheme;
      setTheme(nextTheme);
    };

    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener("storage", syncTheme);
      if (themeTimer.current) window.clearTimeout(themeTimer.current);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateHeader = () => {
      frame = 0;
      const hasScrolled = window.scrollY > 12;
      setScrolled(hasScrolled);

      if (!hasScrolled || !header.current) {
        setDarkSection(false);
        return;
      }

      const bounds = header.current.getBoundingClientRect();
      const sampleY = Math.min(window.innerHeight - 1, bounds.bottom + 6);
      const section = document
        .elementsFromPoint(window.innerWidth / 2, sampleY)
        .map((element) => element.closest<HTMLElement>("section, footer"))
        .find(Boolean);

      if (!section) {
        setDarkSection(false);
        return;
      }

      const explicitTheme = section.dataset.headerTheme;

      if (explicitTheme) {
        setDarkSection(explicitTheme === "dark");
        return;
      }

      const color = window.getComputedStyle(section).backgroundColor;
      const channels = color.match(/[\d.]+/g)?.slice(0, 3).map(Number);

      if (!channels || channels.length < 3) {
        setDarkSection(false);
        return;
      }

      const [red, green, blue] = channels;
      const luminance = red * 0.299 + green * 0.587 + blue * 0.114;
      setDarkSection(luminance < 125);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname, theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.add("theme-transition");
    root.classList.toggle("dark", nextTheme === "dark");
    root.style.colorScheme = nextTheme;
    window.localStorage.setItem("propass-theme", nextTheme);
    setTheme(nextTheme);

    if (themeTimer.current) window.clearTimeout(themeTimer.current);
    themeTimer.current = window.setTimeout(() => {
      root.classList.remove("theme-transition");
      themeTimer.current = null;
    }, 360);
  };

  const isDarkMode = theme === "dark";
  const useDarkTheme = isDarkMode || (scrolled && darkSection);

  return (
    <header
      ref={header}
      data-site-header
      className={`sticky top-0 z-50 mx-auto flex h-14 w-[calc(100%-32px)] max-w-[1180px] items-center justify-between gap-3 border-b px-0 transition-[background-color,border-color,box-shadow,color] duration-300 ${
        scrolled
          ? useDarkTheme
            ? "border-white/15 bg-black/75 text-white shadow-[0_12px_35px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            : "border-black/10 bg-white/85 text-black shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          : "border-transparent bg-white text-black"
      }`}
    >
      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          data-pulse
          onClick={toggleTheme}
          aria-pressed={isDarkMode}
          aria-label={
            isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"
          }
          title={isDarkMode ? "Mode clair" : "Mode sombre"}
          className={`relative grid size-8 shrink-0 place-items-center rounded-full transition-colors ${
            useDarkTheme
              ? "hover:bg-white/10"
              : "hover:bg-black/5"
          }`}
        >
          <Sun
            className={`absolute size-5 transition-[opacity,transform] duration-300 ${
              isDarkMode ? "scale-75 opacity-0" : "scale-100 opacity-100"
            }`}
            strokeWidth={2}
            aria-hidden="true"
          />
          <Moon
            className={`absolute size-4.5 transition-[opacity,transform] duration-300 ${
              isDarkMode ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>
        <Link
          className="text-[17px] font-semibold transition-colors"
          href="/"
        >
          Propass
        </Link>
      </div>

      <nav
        className="hidden shrink-0 items-center gap-6 text-[10px] font-medium min-[860px]:flex"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.label}
              data-magnetic="4"
              aria-current={active ? "page" : undefined}
              className={`relative whitespace-nowrap py-2 transition-colors ${
                active
                  ? useDarkTheme
                    ? "text-white"
                    : "text-black"
                  : useDarkTheme
                    ? "text-white/55 hover:text-white"
                    : "text-black/55 hover:text-black"
              }`}
              href={item.href}
            >
              {item.label}
              <span
                className={`absolute inset-x-0 bottom-0 mx-auto h-px transition-[width,background-color] duration-300 ${
                  active
                    ? useDarkTheme
                      ? "w-full bg-white"
                      : "w-full bg-black"
                    : "w-0 bg-transparent"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      <div className="flex shrink-0 items-center gap-3">
        <label
          className={`hidden h-9 min-w-0 items-center gap-2 rounded-full px-4 text-[11px] transition-colors md:flex ${
            useDarkTheme
              ? "bg-white/10 text-white/50"
              : "bg-zinc-50 text-zinc-500"
          }`}
        >
          <span className="sr-only">Recherche</span>
          <input
            className={`w-32 bg-transparent outline-none transition-colors ${
              useDarkTheme
                ? "text-white placeholder:text-white/45"
                : "text-black placeholder:text-zinc-500"
            }`}
            placeholder="Rechercher..."
            type="search"
          />
          <Search
            className={`size-3.5 transition-colors ${
              useDarkTheme ? "text-white" : "text-black"
            }`}
            strokeWidth={2.3}
            aria-hidden="true"
          />
        </label>

        <Link
          data-magnetic="7"
          href="/reservation"
          className={`flex h-10 shrink-0 items-center gap-2 rounded-full pl-5 pr-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
            useDarkTheme
              ? "bg-white text-black hover:bg-zinc-200"
              : "bg-black text-white hover:bg-zinc-800"
          }`}
        >
          Réserver
          <span
            className={`grid size-6 place-items-center rounded-full transition-colors ${
              useDarkTheme ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
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
