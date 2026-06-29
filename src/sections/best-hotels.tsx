import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Search,
} from "lucide-react";

const hotels = [
  {
    name: "Crystal View Hotel",
    image: "/images/propass-best-crystal.jpg",
    alt: "Hôtel moderne avec piscine à débordement",
  },
  {
    name: "The Grand Terrace",
    image: "/images/propass-best-terrace.jpg",
    alt: "Salon d'hôtel chaleureux avec bois et lumière douce",
  },
  {
    name: "Serenity Bay Inn",
    image: "/images/propass-best-serenity.jpg",
    alt: "Cour intérieure d'hôtel avec piscine et végétation",
  },
  {
    name: "Golden Sands Resort",
    image: "/images/propass-best-golden.jpg",
    alt: "Chambre d'hôtel lumineuse avec lit blanc",
  },
];

export default function BestHotels() {
  return (
    <section
      id="hotels"
      className="bg-[#f7f7f7] px-4 py-14 text-black md:py-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <div
          data-animate="reveal"
          className="flex flex-col gap-6 min-[860px]:flex-row min-[860px]:items-center min-[860px]:justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] font-medium">
              Installations
            </span>
            <h2 className="whitespace-nowrap font-heading text-[18px] font-semibold leading-none sm:text-[22px] md:text-[24px]">
              Explorez les meilleurs hôtels
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <label className="flex h-10 w-full min-w-0 items-center gap-3 rounded-full bg-white px-5 text-xs text-zinc-500 shadow-sm min-[860px]:w-[300px] lg:w-[430px]">
              <span className="sr-only">Recherche</span>
              <input
                className="min-w-0 flex-1 bg-transparent text-black placeholder:text-zinc-400 outline-none"
                placeholder="Rechercher..."
                type="search"
              />
              <Search
                className="size-4 shrink-0 text-black"
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </label>

            <a
              data-magnetic="5"
              href="#"
              className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-black pl-5 pr-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Voir tout
              <ArrowUpRight
                className="size-4"
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div
          data-animate="stagger"
          className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4"
        >
          {hotels.map((hotel) => (
            <article
              key={hotel.name}
              data-animate-item
              data-tilt="3"
              className="group relative h-[320px] overflow-hidden rounded-[18px] bg-zinc-300 md:h-[252px] min-[1180px]:h-[342px]"
            >
              <Image
                src={hotel.image}
                alt={hotel.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 860px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/8" />

              <button
                data-pulse
                type="button"
                className="absolute left-3 top-3 grid size-8 place-items-center rounded-full bg-white/35 text-white backdrop-blur-md transition-colors hover:bg-white/50"
                aria-label={`Ajouter ${hotel.name} aux favoris`}
              >
                <Heart
                  className="size-4 fill-current"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>

              <span className="absolute right-3 top-3 rounded-full border border-white/80 bg-black/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                $2500/jour
              </span>

              <div className="absolute inset-x-4 bottom-4 rounded-[14px] bg-white/25 p-4 text-white backdrop-blur-md">
                <span className="rounded-full border border-white/70 px-3 py-1 text-[10px] font-medium">
                  Hôtel à Kinshasa
                </span>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <h3 className="text-[18px] font-medium leading-none">
                    {hotel.name}
                  </h3>
                  <button
                    data-magnetic="5"
                    type="button"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-black text-white transition-transform group-hover:rotate-45"
                    aria-label={`Voir ${hotel.name}`}
                  >
                    <ArrowUpRight
                      className="size-5"
                      strokeWidth={2.3}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          data-animate="reveal"
          className="mt-10 flex flex-col gap-8 min-[860px]:flex-row min-[860px]:items-start min-[860px]:justify-between"
        >
          <div className="flex items-center gap-3">
            <button
              data-magnetic="5"
              type="button"
              className="grid size-11 place-items-center rounded-full border border-zinc-400 bg-transparent text-black transition-colors hover:bg-white"
              aria-label="Hôtels précédents"
            >
              <ArrowLeft
                className="size-5"
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </button>
            <button
              data-magnetic="5"
              type="button"
              className="grid size-11 place-items-center rounded-full bg-black text-white transition-colors hover:bg-zinc-800"
              aria-label="Hôtels suivants"
            >
              <ArrowRight
                className="size-5"
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </button>
          </div>

          <p className="max-w-[360px] text-right text-xs font-medium leading-5 text-zinc-700 max-[859px]:text-left">
            Réservez votre séjour pour des expériences personnalisées, des
            équipements luxueux et une escapade relaxante vers des souvenirs
            inoubliables.
          </p>
        </div>
      </div>
    </section>
  );
}
