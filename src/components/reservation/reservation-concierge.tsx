import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function ReservationConcierge() {
  return (
    <section className="bg-[#f6f6f4] px-4 py-16 text-black md:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-16">
        <div
          data-animate="reveal"
          data-tilt="2"
          className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-zinc-200"
        >
          <Image
            data-parallax="4"
            src="/images/propass-trusted-lobby.jpg"
            alt="Salon de réception Propass disponible pour accompagner les voyageurs"
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="scale-[1.08] object-cover object-center grayscale"
          />
        </div>

        <div data-animate="reveal">
          <span className="text-[10px] font-semibold uppercase text-zinc-500">
            Conciergerie Propass
          </span>
          <h2 className="mt-3 max-w-[470px] font-heading text-[36px] font-medium leading-[0.98] md:text-[48px]">
            Une question avant de confirmer ?
          </h2>
          <p className="mt-6 max-w-[410px] text-xs font-medium leading-5 text-zinc-600">
            Notre équipe peut vous aider à choisir la chambre, organiser un
            transfert ou préparer une arrivée tardive.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              data-magnetic="6"
              href="tel:+243900000000"
              className="inline-flex h-11 items-center justify-center gap-3 rounded-full bg-black px-5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              <Phone className="size-4" strokeWidth={2} aria-hidden="true" />
              +243 900 000 000
            </a>
            <a
              data-magnetic="6"
              href="mailto:reservation@propass.cd"
              className="inline-flex h-11 items-center justify-center gap-3 rounded-full border border-zinc-300 px-5 text-xs font-semibold transition-colors hover:bg-white"
            >
              <Mail className="size-4" strokeWidth={2} aria-hidden="true" />
              Nous écrire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
