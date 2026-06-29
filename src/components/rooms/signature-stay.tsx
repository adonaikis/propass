import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Star } from "lucide-react";

const inclusions = ["Petit déjeuner", "Transfert aéroport", "Départ tardif"];

export default function SignatureStay() {
  return (
    <section id="signature" className="bg-black px-4 py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
        <div data-animate="reveal">
          <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase text-white/55">
            <span>Séjour sélectionné</span>
            <span>02 / 06</span>
          </div>

          <h2 className="mt-8 max-w-[420px] font-heading text-[38px] font-medium leading-[0.96] sm:text-[48px]">
            La suite Signature, sans compromis
          </h2>

          <p className="mt-6 max-w-[390px] text-xs font-medium leading-5 text-white/65">
            Un espace généreux pour se poser, recevoir ou travailler, accompagné
            d’un service discret du matin jusqu’au départ.
          </p>

          <div className="mt-8 space-y-3">
            {inclusions.map((inclusion) => (
              <div
                key={inclusion}
                className="flex items-center gap-3 text-xs font-medium"
              >
                <span className="grid size-6 place-items-center rounded-full border border-white/25">
                  <Check
                    className="size-3"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>
                {inclusion}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              data-magnetic="7"
              href="#booking"
              className="inline-flex h-11 items-center gap-4 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-100"
            >
              Réserver la suite
              <span className="grid size-8 place-items-center rounded-full bg-black text-white">
                <ArrowUpRight
                  className="size-4"
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              </span>
            </Link>
            <p className="text-sm font-semibold">
              $320{" "}
              <span className="text-[10px] font-medium text-white/45">
                / nuit
              </span>
            </p>
          </div>
        </div>

        <div
          data-animate="reveal"
          data-tilt="2"
          className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-zinc-900 sm:aspect-[16/10]"
        >
          <Image
            data-parallax="4"
            src="/images/propass-about-window.jpg"
            alt="Vue panoramique depuis une suite Propass"
            fill
            sizes="(max-width: 1024px) 100vw, 62vw"
            className="scale-[1.08] object-cover object-center"
          />

          <div
            data-float="5"
            className="absolute top-5 right-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-semibold text-black"
          >
            <Star
              className="size-3 fill-black"
              strokeWidth={1.8}
              aria-hidden="true"
            />
            Expérience premium
          </div>
        </div>
      </div>
    </section>
  );
}
