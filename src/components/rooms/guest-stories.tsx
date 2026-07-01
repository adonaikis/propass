import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

export default function GuestStories() {
  return (
    <section className="bg-[#f6f6f4] px-4 py-16 text-black md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div data-animate="reveal" className="text-center">
          <span className="text-[10px] font-semibold uppercase text-zinc-500">
            Carnet de séjour
          </span>
          <h2 className="mx-auto mt-3 max-w-[620px] font-heading text-[34px] font-medium leading-none md:text-[46px]">
            Des chambres, des histoires
          </h2>
        </div>

        <div
          data-animate="stagger"
          className="mt-12 grid gap-5 md:grid-cols-[0.72fr_1.35fr_0.78fr] md:items-center"
        >
          <div data-animate-item className="md:pb-12">
            <div
              data-tilt="3"
              className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-zinc-200 md:aspect-[3/4]"
            >
              <Image
                src="/PHOTO-PROPASS/chambre50$.jpg"
                alt="Chambre Propass avec lit double et linge orange"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div
            data-animate-item
            data-tilt="2"
            className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-zinc-200"
          >
            <Image
              src="/PHOTO-PROPASS/chambre1.jpg"
              alt="Chambre Propass chaleureuse avec plusieurs couchages"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover object-center"
            />
          </div>

          <div data-animate-item className="md:pt-10">
            <Quote
              className="size-7 rotate-180"
              strokeWidth={2}
              aria-hidden="true"
            />
            <div className="mt-5 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-3 fill-black"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-5 text-[15px] font-medium leading-[1.35]">
              “Nous préparons chaque chambre avec soin pour offrir un séjour
              calme, simple et fidèle à ce qui a été réservé.”
            </blockquote>

            <div className="mt-7 flex items-center gap-3">
              <div className="relative size-10 overflow-hidden rounded-full bg-zinc-200">
                <Image
                  src="/PHOTO-PROPASS/sec.jpg"
                  alt="Portrait d'une agente Propass"
                  fill
                  sizes="40px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <p className="text-xs font-semibold">Équipe Propass</p>
                <p className="text-[10px] font-medium text-zinc-500">
                  Accueil et réservations
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                data-magnetic="5"
                type="button"
                aria-label="Témoignage précédent"
                className="grid size-9 place-items-center rounded-full border border-zinc-300 bg-transparent"
              >
                <ArrowLeft
                  className="size-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
              <button
                data-magnetic="5"
                type="button"
                aria-label="Témoignage suivant"
                className="grid size-9 place-items-center rounded-full bg-black text-white"
              >
                <ArrowRight
                  className="size-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
