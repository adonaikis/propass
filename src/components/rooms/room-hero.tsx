import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Star } from "lucide-react";

export default function RoomHero() {
  return (
    <section
      id="top"
      data-hero
      className="relative mx-auto w-[calc(100%-24px)] max-w-[1180px] overflow-hidden bg-[#f2f3f1] text-black"
    >
      <div className="relative h-[680px] sm:h-[720px] lg:h-[760px]">
        <div
          data-hero-copy
          className="relative z-20 mx-auto flex max-w-[760px] flex-col items-center px-5 pt-10 text-center sm:pt-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-3 py-1 text-[10px] font-semibold uppercase">
            Collection Propass
            <Sparkles className="size-3" strokeWidth={2.2} aria-hidden="true" />
          </span>

          <h1 className="mt-5 font-heading text-[38px] font-medium leading-[0.96] sm:text-[50px] lg:text-[64px]">
            Des chambres pensées
            <span className="block">pour vivre Kinshasa</span>
          </h1>

          <p className="mt-5 max-w-[560px] text-xs font-medium leading-5 text-zinc-600 sm:text-[13px]">
            Lumière, calme et détails utiles : choisissez un espace qui suit
            votre rythme, du séjour essentiel à la suite signature.
          </p>

          <Link
            data-magnetic="7"
            href="#chambres"
            className="mt-6 inline-flex h-11 items-center gap-3 rounded-full bg-black pl-6 pr-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
          >
            Explorer les chambres
            <span className="grid size-8 place-items-center rounded-full bg-white text-black">
              <ArrowDown
                className="size-4"
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[390px] overflow-hidden sm:h-[445px] lg:h-[490px]">
          <div data-hero-media className="absolute inset-[-14px]">
            <Image
              src="/images/propass-rooms-hero.png"
              alt="Suite Propass contemporaine avec lit king-size et salon privé"
              fill
              preload
              sizes="(max-width: 1180px) 100vw, 1180px"
              className="object-cover object-center"
            />
          </div>

          <div
            data-float="7"
            className="absolute bottom-5 left-4 z-10 rounded-full bg-white px-4 py-2 text-[11px] font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:bottom-8 sm:left-8"
          >
            À partir de <span className="ml-1 text-sm">$120 / nuit</span>
          </div>

          <div
            data-float="5"
            className="absolute right-4 top-5 z-10 flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[11px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] sm:right-8 sm:top-8"
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
            className="absolute right-4 bottom-5 z-10 grid size-11 place-items-center rounded-full bg-white text-black shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-transform hover:rotate-45 sm:right-8 sm:bottom-8"
          >
            <ArrowUpRight
              className="size-5"
              strokeWidth={2.3}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
