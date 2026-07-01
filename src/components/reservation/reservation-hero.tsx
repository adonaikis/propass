import Image from "next/image";
import Link from "next/link";
import { ArrowDown, CalendarCheck, Clock3, ShieldCheck } from "lucide-react";

const highlights = [
  { label: "Confirmation rapide", Icon: CalendarCheck },
  { label: "Annulation flexible", Icon: Clock3 },
  { label: "Paiement sécurisé", Icon: ShieldCheck },
];

export default function ReservationHero() {
  return (
    <section
      id="top"
      data-hero
      className="relative mx-auto h-[600px] w-[calc(100%-24px)] max-w-[1180px] overflow-hidden bg-black text-white sm:h-[620px]"
    >
      <div data-hero-media className="absolute inset-[-14px]">
        <Image
          src="/PHOTO-PROPASS/chambre70$.jpg"
          alt="Chambre Propass préparée pour accueillir les voyageurs"
          fill
          preload
          sizes="(max-width: 1180px) 100vw, 1180px"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/58" />

      <div
        data-hero-copy
        className="absolute inset-x-0 top-[46%] z-10 -translate-y-1/2 px-5 text-center sm:px-10"
      >
        <span className="inline-flex rounded-full border border-white/40 px-3 py-1 text-[10px] font-semibold uppercase text-white">
          Réservation directe
        </span>
        <h1 className="mx-auto mt-5 max-w-[790px] font-heading text-[42px] font-medium leading-[0.96] text-white sm:text-[56px] lg:text-[68px]">
          Réservez votre séjour, simplement
        </h1>
        <p className="mx-auto mt-5 max-w-[560px] text-xs font-medium leading-5 text-white/80 sm:text-[13px]">
          Choisissez vos dates, votre chambre et vos préférences. Nous
          confirmons le reste avec vous.
        </p>
        <Link
          data-magnetic="7"
          href="#reservation"
          className="mt-7 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-100"
        >
          Commencer
          <span className="grid size-8 place-items-center rounded-full bg-black text-white">
            <ArrowDown
              className="size-4"
              strokeWidth={2.4}
              aria-hidden="true"
            />
          </span>
        </Link>
      </div>

      <div className="absolute inset-x-5 bottom-6 z-10 hidden items-center justify-center gap-10 border-t border-white/25 pt-5 sm:flex">
        {highlights.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 text-[10px] font-semibold text-white/85"
          >
            <Icon className="size-4" strokeWidth={1.9} aria-hidden="true" />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
