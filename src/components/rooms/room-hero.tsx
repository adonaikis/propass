import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Star } from "lucide-react";

export default function RoomHero() {
  return (
    <section
      id="top"
      data-hero
      data-header-theme="dark"
      className="relative mx-auto min-h-[100svh] w-[calc(100%-24px)] max-w-[1180px] overflow-hidden bg-black text-white"
    >
      <div data-hero-media className="absolute inset-[-14px]">
        <Image
          src="/PHOTO-PROPASS/chambre100$1.jpg"
          alt="Chambre Propass lumineuse avec lit double et espace salon"
          fill
          preload
          sizes="(max-width: 1180px) 100vw, 1180px"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />

      <div
        data-hero-copy
        className="relative z-20 mx-auto flex min-h-[100svh] max-w-[760px] flex-col items-center justify-center px-5 pt-24 pb-28 text-center sm:pt-28"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase text-white backdrop-blur-sm">
          Collection Propass
          <Sparkles className="size-3" strokeWidth={2.2} aria-hidden="true" />
        </span>

          <h1 className="mt-5 font-heading text-[38px] font-medium leading-[0.96] sm:text-[50px] lg:text-[64px]">
            Des chambres pensées
            <span className="block">pour vivre Kinshasa</span>
          </h1>

          <p className="mt-5 max-w-[560px] text-xs font-medium leading-5 text-white/75 sm:text-[13px]">
            Lumière, calme et détails utiles : choisissez un espace qui suit
            votre rythme, du séjour essentiel à la suite signature.
          </p>

          <Link
            data-magnetic="7"
            href="#chambres"
            className="mt-6 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Explorer les chambres
            <span className="grid size-8 place-items-center rounded-full bg-black text-white">
              <ArrowDown
                className="size-4"
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </span>
          </Link>
      </div>

      <div
        data-float="7"
        className="absolute bottom-5 left-4 z-20 rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:bottom-8 sm:left-8"
      >
        À partir de <span className="ml-1 text-sm">$120 / nuit</span>
      </div>

      <div
        data-float="5"
        className="absolute top-20 right-4 z-20 flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-[11px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm sm:top-24 sm:right-8"
      >
        <Star
          className="size-3.5 fill-current"
          strokeWidth={1.8}
          aria-hidden="true"
        />
        4,9 / 5
      </div>

      <Link
        data-magnetic="6"
        href="#booking"
        aria-label="Réserver la suite présentée"
        className="absolute right-4 bottom-5 z-20 grid size-11 place-items-center rounded-full bg-white text-black shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-transform hover:rotate-45 sm:right-8 sm:bottom-8"
      >
        <ArrowUpRight
          className="size-5"
          strokeWidth={2.3}
          aria-hidden="true"
        />
      </Link>
    </section>
  );
}
