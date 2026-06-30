import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Headphones, Phone } from "lucide-react";

export default function FaqSupport() {
  return (
    <section className="bg-white px-4 py-16 text-black md:py-24">
      <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[6px] bg-zinc-100 lg:grid-cols-[1.05fr_0.95fr]">
        <div
          data-animate="reveal"
          data-tilt="2"
          className="relative min-h-[390px] overflow-hidden lg:min-h-[560px]"
        >
          <div data-parallax="4" className="absolute inset-[-28px]">
            <Image
              src="/images/propass-services-ticket.png"
              alt="Conseillère Propass accompagnant un voyageur"
              fill
              sizes="(max-width: 1024px) 100vw, 53vw"
              className="object-cover object-center grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 border-t border-white/50 pt-4 text-[9px] font-semibold uppercase text-white sm:inset-x-7 sm:bottom-7">
            <span>Assistance humaine</span>
            <span>Réponse personnalisée</span>
          </div>
        </div>

        <div data-animate="reveal" className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
          <span className="grid size-11 place-items-center rounded-full bg-black text-white">
            <Headphones className="size-5" strokeWidth={1.8} />
          </span>
          <p className="mt-7 text-[10px] font-semibold uppercase text-zinc-500">
            Une question reste ouverte ?
          </p>
          <h2 className="mt-3 max-w-[460px] font-heading text-[36px] font-medium leading-[0.98] md:text-[46px]">
            Parlons directement de votre besoin
          </h2>
          <p className="mt-6 max-w-[430px] text-xs font-medium leading-5 text-zinc-600">
            Notre équipe peut clarifier une réservation, un service ou une
            demande particulière avant votre arrivée.
          </p>

          <div className="mt-8 border-y border-zinc-200 py-5 text-[10px] font-semibold">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-zinc-500">
                <Phone className="size-3.5" strokeWidth={2} />
                Téléphone
              </span>
              <a href="tel:+243900000000" className="hover:text-zinc-500">
                +243 900 000 000
              </a>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-zinc-500">
                <Clock3 className="size-3.5" strokeWidth={2} />
                Disponibilité
              </span>
              <span>24 h / 24</span>
            </div>
          </div>

          <Link
            data-magnetic="7"
            href="/reservation"
            className="mt-8 inline-flex h-11 w-fit items-center gap-3 rounded-full bg-black pl-6 pr-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
          >
            Contacter Propass
            <span className="grid size-8 place-items-center rounded-full bg-white text-black">
              <ArrowUpRight className="size-4" strokeWidth={2.3} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
