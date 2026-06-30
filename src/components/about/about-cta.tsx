import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck } from "lucide-react";

export default function AboutCta() {
  return (
    <section className="bg-zinc-50 px-4 py-16 text-white md:py-24">
      <div
        data-animate="reveal"
        className="relative mx-auto min-h-[500px] max-w-[1180px] overflow-hidden rounded-[6px] bg-black"
      >
        <div data-parallax="4" className="absolute inset-[-28px]">
          <Image
            src="/images/propass-about-rooftop.jpg"
            alt="Vue panoramique depuis un espace de détente Propass"
            fill
            sizes="(max-width: 1180px) 100vw, 1180px"
            className="object-cover object-bottom grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-5 py-12 text-center">
          <span className="grid size-11 place-items-center rounded-full border border-white/35">
            <CalendarCheck className="size-5" strokeWidth={1.8} />
          </span>
          <p className="mt-6 text-[10px] font-semibold uppercase text-white/55">
            Votre prochain séjour
          </p>
          <h2 className="mt-4 max-w-[720px] font-heading text-[38px] font-medium leading-[0.96] sm:text-[52px]">
            Venez découvrir l’hospitalité Propass
          </h2>
          <p className="mt-5 max-w-[470px] text-xs font-medium leading-5 text-white/65">
            Une chambre, un repas ou un voyage à organiser : notre équipe vous
            accompagne simplement.
          </p>
          <Link
            data-magnetic="7"
            href="/reservation"
            className="mt-8 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Réserver maintenant
            <span className="grid size-8 place-items-center rounded-full bg-black text-white">
              <ArrowUpRight className="size-4" strokeWidth={2.3} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
