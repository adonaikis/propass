import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Coffee, Utensils } from "lucide-react";

const mealTimes = [
  { label: "Petit déjeuner", time: "06:30 — 10:30", Icon: Coffee },
  { label: "Déjeuner", time: "12:00 — 15:00", Icon: Utensils },
  { label: "Dîner", time: "18:30 — 22:30", Icon: Clock3 },
];

export default function RestaurantService() {
  return (
    <section id="restauration" className="bg-black px-4 py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
          <div
            data-animate="reveal"
            data-tilt="2"
            className="relative aspect-[4/5] min-h-[430px] overflow-hidden rounded-[6px] sm:aspect-[5/4] lg:aspect-[4/5]"
          >
            <div data-parallax="4" className="absolute inset-[-28px]">
              <Image
                src="/images/propass-best-terrace.jpg"
                alt="Salle de restauration calme et élégante de Propass"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center grayscale"
              />
            </div>
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 border-t border-white/45 pt-4 text-[10px] font-semibold uppercase sm:inset-x-7 sm:bottom-7">
              <span>Cuisine fraîche</span>
              <span>Service quotidien</span>
            </div>
          </div>

          <div data-animate="reveal">
            <span className="text-[10px] font-semibold uppercase text-white/50">
              02 · Restauration
            </span>
            <h2 className="mt-4 max-w-[500px] font-heading text-[38px] font-medium leading-[0.98] sm:text-[48px]">
              Une table attentive à votre rythme
            </h2>
            <p className="mt-6 max-w-[470px] text-xs font-medium leading-5 text-white/60">
              Repas complets, pauses rapides ou service à emporter : notre
              cuisine accompagne les départs matinaux comme les arrivées
              tardives.
            </p>

            <div data-animate="stagger" className="mt-9 border-y border-white/20">
              {mealTimes.map(({ label, time, Icon }) => (
                <div
                  key={label}
                  data-animate-item
                  className="grid grid-cols-[28px_1fr_auto] items-center gap-3 border-b border-white/20 py-5 last:border-b-0"
                >
                  <Icon className="size-4.5" strokeWidth={1.8} />
                  <span className="text-xs font-semibold">{label}</span>
                  <span className="text-[10px] font-medium text-white/45">
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <Link
              data-magnetic="6"
              href="/reservation"
              className="mt-8 inline-flex h-11 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Réserver une table
              <span className="grid size-8 place-items-center rounded-full bg-black text-white">
                <ArrowUpRight className="size-4" strokeWidth={2.3} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
