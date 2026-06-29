import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

function LocationPill({ className = "" }: { className?: string }) {
  return (
    <div
      data-float="4"
      className={`flex h-8 items-center gap-2 rounded-full bg-white px-3 text-[10px] font-semibold text-black shadow-sm ${className}`}
    >
      <span className="grid size-5 place-items-center rounded-full border border-zinc-200 text-zinc-500">
        <MapPin className="size-3" strokeWidth={2} aria-hidden="true" />
      </span>
      Kinshasa, RDC
    </div>
  );
}

function ImageCard({
  src,
  alt,
  label,
  children,
  imageClassName = "object-center",
  className,
}: {
  src: string;
  alt: string;
  label: string;
  children?: React.ReactNode;
  imageClassName?: string;
  className: string;
}) {
  return (
    <article
      data-animate-item
      data-tilt="3"
      className={`group relative overflow-hidden rounded-[18px] bg-black ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${imageClassName}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-black/15" />

      <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-black/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
        {label}
      </span>

      {children}
    </article>
  );
}

export default function AboutComfort() {
  return (
    <section id="about" className="bg-white px-4 py-8 text-black md:py-10">
      <div className="mx-auto max-w-[1180px]">
        <div data-animate="reveal" className="flex justify-center">
          <a
            data-magnetic="5"
            href="#"
            className="flex h-8 items-center gap-3 rounded-full border border-zinc-200 bg-white px-5 text-xs font-medium text-black transition-colors hover:bg-zinc-50"
          >
            Découvrir
            <ArrowRight
              className="size-3.5"
              strokeWidth={2.4}
              aria-hidden="true"
            />
          </a>
        </div>

        <h2
          data-animate="reveal"
          className="mx-auto mt-7 max-w-[620px] text-center font-heading text-[32px] font-medium leading-[1.08] tracking-normal md:text-[34px]"
        >
          Explorez nos séjours, votre confort, votre priorité
        </h2>

        <div
          data-animate="stagger"
          className="mt-10 grid gap-8 min-[860px]:grid-cols-[240px_320px_250px] min-[860px]:items-center min-[860px]:justify-center min-[860px]:gap-7 min-[1180px]:grid-cols-[300px_410px_330px] min-[1180px]:gap-8"
        >
          <div
            data-animate-item
            className="max-w-[260px] min-[1180px]:max-w-[300px]"
          >
            <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-medium text-black">
              À propos
            </span>
            <p className="mt-5 text-[20px] font-semibold leading-[1.18] tracking-[-0.01em]">
              Propass est une adresse de confiance qui relie les voyageurs aux
              meilleurs séjours à Kinshasa.
            </p>

            <a
              data-magnetic="6"
              href="#"
              className="mt-10 inline-flex h-11 items-center gap-3 rounded-full bg-black pl-5 pr-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              En savoir plus
              <span className="grid size-8 place-items-center rounded-full bg-white text-black">
                <ArrowUpRight
                  className="size-4"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>

          <ImageCard
            src="/images/propass-about-window.jpg"
            alt="Salon lumineux avec vue panoramique au coucher du soleil"
            label="Espace intérieur"
            className="h-[245px] min-[1180px]:h-[290px]"
          >
            <p className="absolute bottom-14 left-4 max-w-[235px] text-[16px] font-medium leading-[1.08] text-white">
              Une expérience raffinée, pensée pour le repos, le travail et
              chaque moment important.
            </p>
            <LocationPill className="absolute bottom-4 left-4" />
            <button
              type="button"
              className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-white text-black transition-transform group-hover:rotate-45"
              aria-label="Voir les détails"
            >
              <ArrowUpRight
                className="size-5"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </button>
          </ImageCard>

          <div data-animate-item className="min-[860px]:pt-10">
            <ImageCard
              src="/images/propass-about-rooftop.jpg"
              alt="Rooftop avec piscine et lounge au coucher du soleil"
              label="Extérieur"
              imageClassName="object-bottom"
              className="h-[170px] min-[1180px]:h-[210px]"
            >
              <LocationPill className="absolute bottom-4 left-4" />
              <button
                type="button"
                className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-white text-black transition-transform group-hover:rotate-45"
                aria-label="Voir les détails"
              >
                <ArrowUpRight
                  className="size-5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </button>
            </ImageCard>

            <div className="mt-6 flex items-end justify-between gap-5">
              <p className="max-w-[235px] text-[12px] font-medium leading-4 text-zinc-700 min-[1180px]:max-w-[255px]">
                Découvrez une destination où confort, relaxation et luxe se
                rencontrent pour un séjour mémorable.
              </p>

              <div className="flex shrink-0 items-center gap-3">
                <button
                  data-magnetic="5"
                  type="button"
                  className="grid size-9 place-items-center rounded-full border border-zinc-300 bg-white text-black transition-colors hover:bg-zinc-50"
                  aria-label="Précédent"
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
                  className="grid size-9 place-items-center rounded-full bg-black text-white transition-colors hover:bg-zinc-800"
                  aria-label="Suivant"
                >
                  <ArrowRight
                    className="size-5"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div data-line className="mt-16 h-px w-full bg-zinc-200" />
      </div>
    </section>
  );
}
