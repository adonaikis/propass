import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      id="top"
      data-hero
      className="relative mx-auto min-h-[650px] w-[calc(100%-24px)] max-w-[1180px] overflow-hidden bg-black text-white sm:min-h-[670px]"
    >
      <div data-hero-media className="absolute inset-[-16px]">
        <Image
          src="/PHOTO-PROPASS/vue-entré.jpg"
          alt="Façade historique de Propass à Kinshasa"
          fill
          preload
          sizes="(max-width: 1180px) 100vw, 1180px"
          className="object-cover object-center grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-black/58" />

      <div
        data-hero-copy
        className="relative z-10 flex min-h-[650px] flex-col px-5 pt-16 pb-6 sm:min-h-[670px] sm:px-10 sm:pt-20 sm:pb-8 lg:px-12"
      >
        <div className="max-w-[780px]">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase text-white/70">
            <MapPin className="size-3.5" strokeWidth={2} />
            Kinshasa · République démocratique du Congo
          </span>
          <h1 className="mt-6 font-heading text-[46px] font-medium leading-[0.92] text-white sm:text-[64px] lg:text-[80px]">
            À propos de Propass
          </h1>
          <p className="mt-6 max-w-[560px] text-xs font-medium leading-5 text-white/75 sm:text-[13px]">
            Une hospitalité simple, précise et profondément humaine, pensée
            pour que chaque voyageur se sente attendu.
          </p>
          <Link
            data-magnetic="7"
            href="#notre-histoire"
            className="mt-8 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Découvrir notre histoire
            <span className="grid size-8 place-items-center rounded-full bg-black text-white">
              <ArrowDown className="size-4" strokeWidth={2.3} />
            </span>
          </Link>
        </div>

        <div className="mt-auto grid border-y border-white/30 sm:grid-cols-3">
          <div className="flex min-h-[78px] items-center gap-3 py-4 sm:px-5">
            <span className="font-heading text-[26px] font-medium">24/7</span>
            <span className="max-w-[90px] text-[9px] font-semibold uppercase text-white/55">
              Accueil et assistance
            </span>
          </div>
          <div className="flex min-h-[78px] items-center gap-3 border-t border-white/30 py-4 sm:border-t-0 sm:border-l sm:px-5">
            <span className="font-heading text-[26px] font-medium">03</span>
            <span className="max-w-[100px] text-[9px] font-semibold uppercase text-white/55">
              Univers de service
            </span>
          </div>
          <div className="flex min-h-[78px] items-center justify-between gap-3 border-t border-white/30 py-4 sm:border-t-0 sm:border-l sm:px-5">
            <span className="text-xs font-semibold">Voir notre approche</span>
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
