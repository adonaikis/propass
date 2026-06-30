import Link from "next/link";
import { ArrowUpRight, CalendarCheck, MessageCircle } from "lucide-react";

export default function GalleryCta() {
  return (
    <section className="bg-zinc-50 px-4 py-16 text-black md:py-24">
      <div
        data-animate="reveal"
        className="mx-auto flex max-w-[1180px] flex-col gap-8 rounded-[6px] bg-black px-5 py-10 text-white sm:px-9 md:flex-row md:items-center md:justify-between md:py-12"
      >
        <div>
          <p className="text-[10px] font-semibold uppercase text-white/45">
            Prochaine étape
          </p>
          <h2 className="mt-4 max-w-[650px] font-heading text-[34px] font-medium leading-[0.98] sm:text-[42px]">
            Découvrez ces espaces autrement qu’en images
          </h2>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          <Link
            data-magnetic="7"
            href="/reservation"
            className="inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Réserver
            <span className="grid size-8 place-items-center rounded-full bg-black text-white">
              <CalendarCheck className="size-4" strokeWidth={2.2} />
            </span>
          </Link>
          <Link
            data-magnetic="6"
            href="/contact"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/30 px-5 text-xs font-semibold transition-colors hover:bg-white hover:text-black"
          >
            <MessageCircle className="size-4" strokeWidth={2} />
            Nous contacter
            <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
